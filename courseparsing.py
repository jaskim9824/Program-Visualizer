import xlrd
from copy import deepcopy
from tkinter import messagebox
import parsinghelp

# Parses a .xls (NOT .xlsx) file located at the
# relative path *filename* and stores all relevant course information
# in a dict
#
# Parameters:
#   filename (string): path to the .xls file with course information (relative to the calling script)
# Returns:
#   course_obj_dict (dict): Stores all course data:
#       key: Course Name (string): the Subject + " " + Catalog of a course
#       value: Course object. Stores all data about a course
def parseCourses(filename):
    try:
        book = xlrd.open_workbook(filename)
        sheet = book.sheet_by_index(0)  # course info must be on the first sheet
        course_obj_dict = {}
        for row in range(1, sheet.nrows):
            # Each row stores info about one course, first row is headers
            # FIXME: Formatting is very strict
            faculty = sheet.cell_value(row, 0)
            department = sheet.cell_value(row, 1)
            course_id = sheet.cell_value(row, 2)
            subject = sheet.cell_value(row , 3)
            catalog = sheet.cell_value(row, 4)
            long_title = sheet.cell_value(row, 5)
            eff_date = sheet.cell_value(row, 6)
            status = sheet.cell_value(row, 7)
            calendar_print = sheet.cell_value(row, 8)
            prog_units = sheet.cell_value(row, 9)
            engg_units = sheet.cell_value(row, 10)
            calc_fee_index = sheet.cell_value(row, 11)
            actual_fee_index = sheet.cell_value(row, 12)
            duration = sheet.cell_value(row, 13)
            alpha_hours = sheet.cell_value(row, 14)
            course_description = sheet.cell_value(row, 15)

            # Formatting course name
            course_name = subject + " " + catalog

            # Remove unnecessary whitespace
            course_name = course_name.strip().replace("  ", " ")

            # Adding course to dict
            course_obj_dict[course_name] = (parsinghelp.Course(course_name, faculty,
            department, course_id, subject, catalog, long_title,
            eff_date, status, calendar_print, prog_units, engg_units,
            calc_fee_index, actual_fee_index, duration, alpha_hours,
            course_description))

        # Retriving dependencies for courses
        course_obj_dict = pullDependencies(course_obj_dict)

        return course_obj_dict

    except FileNotFoundError:
        print("Excel course information file not found, ensure it is present and the name is correct.")
        #GUI Error mssg
        messagebox.showerror('python Error', "Excel course information file not found, ensure it is present and the name is correct.")
    except xlrd.biffh.XLRDError:
        print("Error reading data from Course information Excel sheet. Ensure it is \
            formatted exactly as specified")
        #GUI Error mssg
        messagebox.showerror('python Error', "Error reading data from Course information Excel sheet. Ensure it is \
            formatted exactly as specified")

# Pulls all course dependencies (prerequisites, corequisites, and
# requisites) for each course in course_obj_dict and stores these
# dependencies as attributes in course_obj_dict. Sequencing information
# is also pulled (which courses are taken in which term).
#
# Parameters:
#   course_obj_dict (dict): Stores all course data:
#       key: Course Name (string): the Subject + " " + Catalog of a course
#       value: Course object. Stores all data about a course
# Returns:
#   course_seq (dict): Stores course data in proper sequence:
#       key: Plan Name (string): name of the sheet from "Sequencing.xls"
#       ("Traditional", "Co-op Plan 1", etc.)
#       value: dict with key as term name ("Term 1", "Term 2", etc.)
#       and value as a list of Course objects to be taken in that term
#   course_obj_dict (dict): the prereqs, coreqs, and reqs attributes should
#       be filled in
def pullDependencies(course_obj_dict):
    for course in course_obj_dict:
        # Pulling pre-reqs, co-reqs, and requisites for each course
        prereqslist = pullPreReqs(course_obj_dict[course].course_description)
        for i in range(0, len(prereqslist)):
            # Stripping whitespace
            prereqslist[i] = prereqslist[i].replace(" ", "").replace("or", " or ")
        course_obj_dict[course].prereqs = prereqslist

        coreqslist = pullCoReqs(course_obj_dict[course].course_description)
        for i in range(0, len(coreqslist)):
            #Stripping whitespace
            coreqslist[i] = coreqslist[i].replace(" ", "").replace("or", " or ")
        course_obj_dict[course].coreqs = coreqslist

    return course_obj_dict


# Pulls the prerequisites from the course description.
#
# Parameters:
#   description (string): The complete course description taken from Beartracks/Excel
#
# Returns:
#   prereqs (list of strings): A list of the prerequisites. Elements
#   can be in two forms. 1) The name of a single course. eg: "MATH 100"
#   2) Several courses, each separated by the word " or ". This denotes that only one of
#   these courses is required as a prerequisite. eg: "MEC E 250 or MATH 102 or CH E 441"
def pullPreReqs(description):
    # Split into cases, plural and not plural. Just adjusts the substring value (14 or 15)
    singlestart = description.find("Prerequisite: ")
    if singlestart == -1:
        singlestart = description.find("prerequisite: ")

    multstart = description.find("Prerequisites: ")
    if multstart == -1:
        multstart = description.find("prerequisites: ")

    missingcolstart = description.find("Prequisite ")
    if missingcolstart == -1:
        missingcolstart = description.find("prequisite ")

    if singlestart != -1:
        # Prerequisite(s) given from after the colon up to the very next period
        singlestart += 14
        singleend = description.find(".", singlestart)
        prestr = description[singlestart:singleend]     
    elif multstart != -1:
        # Prerequisite(s) given from after the colon up to the very next period
        multstart += 15
        multend = description.find(".", multstart)
        prestr = description[multstart:multend]
    elif missingcolstart != -1:
        # Prequisite(s) given from after space up to the very next period
        missingcolstart += 13
        missingcolend = description.find(".", missingcolstart)
        prestr = description[missingcolstart:missingcolend]
    else:
        return []

    # Process the string to split it into a list with each item being the name
    # of a prerequisite course
    prereqs = process(prestr)
    
    return prereqs

# Pulls the corequisites from the course description.
#
# Arguments:
#   description (string): The complete course description taken from Beartracks/Excel
#
# Returns:
#   coreqs (list of strings): A list of the corequisites. Elements
#   can be in two forms. 1) The name of a single course. eg: "MATH 100"
#   2) Several courses, each separated by the word "or". This denotes that only one of
#   these courses is required as a corequisite. eg: "MEC E 250 or MATH 102 or CH E 441"
def pullCoReqs(description):
    # Split into cases, plural and not plural. Just adjusts the substring value (14 or 15)
    singlestart = description.find("Corequisite: ")
    if singlestart == -1:
        singlestart = description.find("corequisite: ")

    multstart = description.find("Corequisites: ")
    if multstart == -1:
        multstart = description.find("corequisites: ")

    missingcolstart = description.find("Corequisite ")
    if missingcolstart == -1:
        missingcolstart = description.find("corequisite ")

    if singlestart != -1:
        # Corequisite(s) given from after the colon up to the very next period
        singlestart += 13
        singleend = description.find(".", singlestart)
        prestr = description[singlestart:singleend]     
    elif multstart != -1:
        # Corequisite(s) given from after the colon up to the very next period
        multstart += 14
        multend = description.find(".", multstart)
        prestr = description[multstart:multend]
    elif missingcolstart != -1:
        # Corequisite(s) given from after space up to the very next period
        missingcolstart += 12
        missingcolend = description.find(".", missingcolstart)
        prestr = description[missingcolstart:missingcolend]
    else:
        return []

    # Process the string to split it into a list with each item being the name
    # of a corequisite course
    coreqs = process(prestr)
    
    return coreqs

# Pulls the pre-requisites from a course description. Returns the 
# pre-requisites as a list of strings, each element being the name of
# a pre-requisite course.
#
# Parameters:
#   prestr (string): The part of a course description from the first character after
#   either "Prerequisites: " or "Prerequisite: " until the first period following.
#   eg: Prerequisites: [One of CH E 441, MEC E 250, or MATH 100.] Everything between
#   the square brackets should be passed.
#
# Returns: 
#   reqlist (list of strings): A list of the prerequisites of a course. Elements
#   can be in two forms. 1) The name of a single course. eg: "MATH 100"
#   2) Several courses, each separated by the word "or". This denotes that only one of
#   these courses is required as a prerequisite. eg: "MEC E 250 or MATH 102 or CH E 441"
def process(prestr):
    

    prestr = prestr.strip()
    # Add a comma after the end of each course name
    prestr = prestr.replace("0 ", "0, ")
    prestr = prestr.replace("1 ", "1, ")
    prestr = prestr.replace("2 ", "2, ")
    prestr = prestr.replace("3 ", "3, ")
    prestr = prestr.replace("4 ", "4, ")
    prestr = prestr.replace("5 ", "5, ")
    prestr = prestr.replace("6 ", "6, ")
    prestr = prestr.replace("7 ", "7, ")
    prestr = prestr.replace("8 ", "8, ")
    prestr = prestr.replace("9 ", "9, ")
    prestr = prestr.replace(" and", ",")
    prestr = prestr.replace("  ", " ")

    # Create a list, splitting at each course
    reqlist = prestr.split(", ")

    if reqlist is None:
        # If no prerequisites, return empty list
        return []

    reqlist = preprocess(reqlist)  # Preprocess/format the text

    i = 0

    while i < len(reqlist):
        # Iterate through every element in reqlist. Changes are made
        # directly on reqlist

        reqlist[i] = reqlist[i].strip()

        if "-" in reqlist[i]:
            del reqlist[i]
            continue

        # Count the number of numbers (should be 3 if it's a course)
        numcounter = parsinghelp.countNums(reqlist[i])

        if reqlist[i][0:5] == "both " or reqlist[i][0:5] == "Both ":
            # Two courses are required, remove both and pull the department name if required
            reqlist[i] = reqlist[i].replace("both ","")
            reqlist[i] = reqlist[i].replace("Both ","")

            # Pull department name from previous course if required (if no department name is present)
            numcounter = parsinghelp.countNums(reqlist[i + 1])
            if numcounter == 3 and len(reqlist[i + 1]) == 3:
                # Only a course number is present, must pull the department name
                dept = parsinghelp.pullDept(reqlist, i)
                assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

                reqlist[i + 1] = dept + " " + reqlist[i + 1]

        if (reqlist[i][0:7] == "One of ") or (reqlist[i][0:7] == "one of ") or (reqlist[i][0:7] == "Either ") or (reqlist[i][0:7] == "either "):
            # Same logic for "one of" as well as "either"
            if ((reqlist[i][0:6] == "Either") or (reqlist[i][0:6] == "either")) and (reqlist[i + 1][0:11] == "or one of "):
                # "or one of " is redundant
                # Remove the "or one of " and we can apply the same steps
                reqlist[i + 1] = reqlist[i + 1].replace("or one of ", "")

            # Only one of the upcoming courses is required
            reqlist[i] = reqlist[i].replace("One of ", "")
            reqlist[i] = reqlist[i].replace("one of ", "")
            reqlist[i] = reqlist[i].replace("Either ", "")
            reqlist[i] = reqlist[i].replace("either ", "")

            j = i + 1

            if j < len(reqlist):
                while ("or" not in reqlist[j]) and ("Or" not in reqlist[j]):
                    # There are still more courses that could be chosen, combine the
                    # previous and current elements, continue until we see the word "or"
                    # or we reach the end of the reqlist

                    # Count the number of numbers in the next element
                    numcounter = parsinghelp.countNums(reqlist[j])

                    if numcounter == 3 and len(reqlist[j]) == 3:
                        # Only the course number is present, we need to pull
                        # the department from the previous element
                        # eg: [MATH 100, 102] should become [MATH 100, MATH 102]
                        dept = parsinghelp.pullDept(reqlist, j - 1)
                        assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

                        reqlist[j] = dept + " " + reqlist[j]  # add the department name
                    reqlist[i] = reqlist[i] + " or " + reqlist[j]  # combine previous and current elements
                    del reqlist[j]  # remove the current element from the list
                    if j >= len(reqlist):
                        break

                if j < len(reqlist):
                    if ("or" in reqlist[j]) or ("Or" in reqlist[j]):
                        # This is the last course that could be chosen, combine as before
                        # but don't add "or" (already present)

                        # Count the number of numbers in the next element
                        numcounter = parsinghelp.countNums(reqlist[j])

                        if numcounter == 3 and len(reqlist[j]) == 6:
                            # only "or" and a number is present eg: "or 451" (3 numbers, 6 chars)
                            # we need to pull the department from the previous element
                            dept = parsinghelp.pullDept(reqlist, j - 1)
                            assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

                            reqlist[j] = "or " + dept + reqlist[j][2:]  # move the position of "or"

                        if reqlist[j][0:8] == "or both ":
                            # FIXME: this is tough to deal with, either these courses or both of these courses
                            # Right now, just combining everything into one list entry
                            if len(reqlist[j]) == 11:
                                # Only course number is present in current entry, need to pull department name from previous
                                dept = parsinghelp.pullDept(reqlist, j - 1)
                                assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

                                reqlist[j] = "or both " + dept + reqlist[j][7:]  # move the position of "or both"

                            numcounter = parsinghelp.countNums(reqlist[j + 1])
                            if numcounter == 3 and len(reqlist[j + 1]) == 3:
                                # Only course number is present in the next entry, need to pull the department name from current
                                dept = parsinghelp.pullDept(reqlist, j)
                                assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

                                # Re-arranging words
                                reqlist[j + 1] = "and " + dept[8:] + " " + reqlist[j + 1]
                                reqlist[j] = reqlist[j] + " " + reqlist[j + 1]  # combine current and next
                                del reqlist[j + 1]

                        reqlist[i] = reqlist[i] + " " + reqlist[j]  # combine current and previous
                        del reqlist[j]
                        if j >= len(reqlist):
                            break
            i += 1

        elif (reqlist[i][0:2] == "or" or reqlist[i][0:2] == "Or") and len(reqlist[i]) == 6:
            # The element is just "or" followed by a course number. eg: "or 451" 
            # The department is not present.
            # We need to pull the department from the previous element.
            dept = parsinghelp.pullDept(reqlist, i - 1)
            assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

            reqlist[i] = "or " + dept + reqlist[i][2:]  # move the position of "or"
            reqlist[i - 1] = reqlist[i - 1] + " " + reqlist[i]  # combine previous and current elements
            del reqlist[i]  # remove current element

        elif (reqlist[i][0:2] == "or" or reqlist[i][0:2] == "Or") and len(reqlist[i]) > 6:
            # The element is "or" followed by the course name with the department name present
            # eg: "or MATH 100"
            # Just combine the current and previous elements
            reqlist[i - 1] = reqlist[i - 1] + " " + reqlist[i]  # combine current and previous elements
            del reqlist[i]  # delete current element

        elif numcounter == 3 and len(reqlist[i]) == 3:
            # Only a course number is present. eg: "102"
            # All we do is pull the department from the previous element.
            dept = parsinghelp.pullDept(reqlist, i - 1)
            assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

            reqlist[i] = dept + " " + reqlist[i]  # just add the department name to current item
            i += 1
        else:
            # No processing is required. Usually, this means reqlist[i] is a pre/co-req
            # with the department name present and is not one option among other courses.
            # eg: reqlist = [MATH 102]  no processing is required
            i += 1
    
    return reqlist

# Preprocesses a list (of strings) of the pre-requisites for one course.
# Removes all brackets and commas, replaces slash with " or ". If the list item is not a course
# (some text such as: "consent of the department required.") it is removed.
# Any text after a semicolon is removed. Any item that is longer than 16 chars
# is removed (definitely not a course name).
#
# Parameters:
#   reqlist (list of strings): list of the pre-requisite courses
# Returns: 
#   newlist (list of strings): preprocessed list of pre-requisite courses
def preprocess(reqlist):
    newlist = []

    i = 0
    while i < len(reqlist):
        # Remove all commas and brackets
        reqlist[i] = reqlist[i].replace("(", "").replace(")", "").replace(",", "")

        # A slash between courses indicates the same as "or". 
        # Replace all slashes with " or "
        splitslash = reqlist[i].split("/")
        if splitslash[0] != reqlist[i]:
            # There was a slash present
            j = i
            k = 0
            while k < len(splitslash):
                # Replace all slashes with "or "
                if k != 0:
                    if (splitslash[k][0:2] != "or") and (splitslash[k][0:2] != "Or"):
                        splitslash[k] = "or " + splitslash[k]
                k += 1
            # splitslash has corrected entries, replace reqlist[i] with concatenated
            # entries from splitslash
            del reqlist[i]
            while splitslash != []:
                reqlist.insert(j, splitslash[0])  # pull from start of splitslash and delete that entry
                del splitslash[0]
                j += 1

        i += 1

    j = 0
    while j < len(reqlist):
        # Must have at least 3 numbers to be the name of a course
        numcounter = parsinghelp.countNums(reqlist[j])
        if numcounter < 3:
            j += 1
            continue

        if len(reqlist[j]) > 16:
            # String is too long to be the name of a course
            j += 1
            continue

        semicolindx = reqlist[j].find(";")
        if semicolindx != -1:
            # Remove all text after a semicolon
            newlist.append(reqlist[j][0:semicolindx])
        else:
            # If no semicolon and passed the above cases, it is a valid course
            newlist.append(reqlist[j])
        
        j += 1

    return newlist
