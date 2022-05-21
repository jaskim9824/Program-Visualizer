import json

class Course:
    # Stores all data about each course
    def __init__(self, faculty, department, course_id, subject, catalog,
        long_title, eff_date, status, calendar_print, prog_units,
        engineering_units, calc_fee_index, actual_fee_index, duration,
        alpha_hours, course_description, prereqs = [], coreqs = [], reqs = []):
        self.faculty = faculty
        self.department = department
        self.course_id = course_id
        self.subject = subject
        self.catalog = catalog
        self.long_title = long_title
        self.eff_date = eff_date
        self.status = status
        self.calendar_print = calendar_print
        self.prog_units = prog_units
        self.engineering_units = engineering_units
        self.calc_fee_index = calc_fee_index
        self.actual_fee_index = actual_fee_index
        self.duration = duration
        self.alpha_hours = alpha_hours
        self.course_description = course_description
        self.prereqs = prereqs
        self.coreqs = coreqs
        self.reqs = reqs


def splitLine(filename, contents):
    # Creates a new line right after all "}" chars. Useful for 
    # JSON processing.
    #
    # Arguments:
    #   filename (string): name of the file to be processed
    #   contents (string): contents of the file read using .read()
    #
    # Returns: none

    with open(filename, "w+") as f:
        f.write(contents.replace("}", "}\n"))


def countNums(str):
    # Counts the number of number chars in a string.
    # eg: "mlat9kg45" has 3 numbers.
    #
    # Arguments:
    #   str (string): counts how many numbers in this string
    #
    # Returns: 
    #   numcounter (int): how many numbers are in the string

    nums = ["0","1","2","3","4","5","6","7","8","9"]
    numcounter = 0
    for char in str:
        if char in nums:
            numcounter += 1

    return numcounter


def pullDept(reqlist, indx):
    # Pulls the department name from the the list item at index indx in reqlist.
    #
    # Arguments:
    #   reqlist (list of strings): list of the prerequisites for a course
    #   indx (int): index of the current item in reqlist from which the department name is pulled
    #
    # Returns: 
    #   dept (string): The department name required for the current course.
    #   Returns -1 on error.

    nums = ["0","1","2","3","4","5","6","7","8","9"]
    dept = ""
    for n in range(0, len(reqlist[indx])):
    # MATH 100 -> Move form left to right until you hit the
    # first number, the department is from beginning to 2 indices before that
        if reqlist[indx][n] in nums:
            dept = reqlist[indx][0:n - 1]  # pull the department name
            return dept

    return -1


def preprocess(reqlist):
    # Preprocesses a list (of strings) of the pre-requisites for one course.
    # Removes all brackets and commas, replaces slash with " or ". If the list item is not a course
    # (some text such as: "consent of the department required.") it is removed.
    # Any text after a semicolon is removed. Any item that is longer than 16 chars
    # is removed (definitely not a course name).
    #
    # Arguments:
    #   reqlist (list of strings): list of the pre-requisite courses
    #
    # Returns: 
    #   newlist (list of strings): preprocessed list of pre-requisite courses

    newlist = []

    i = 0
    while i < len(reqlist):
        # Remove all commas and brackets
        reqlist[i] = reqlist[i].replace("(", "")
        reqlist[i] = reqlist[i].replace(")", "")
        reqlist[i] = reqlist[i].replace(",", "")

        # A slash between courses indicates the same as "or"
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
        numcounter = countNums(reqlist[j])
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
            # If no semicolon and passed the above cases, store it in newlist
            newlist.append(reqlist[j])
        
        j += 1

    return newlist


def process(prestr):
    # Pulls the pre-requisites from a course description. Returns the 
    # pre-requisites as a list of strings, each element being the name of
    # a pre-requisite course.
    #
    # Arguments:
    #   prestr (string): The part of a course description from the first character after
    #   either "Prerequisites: " or "Prerequisite: " until the first period following
    #   eg: Prerequisites: [One of CH E 441, MEC E 250, or MATH 100.] Everything between
    #   the square brackets should be passed.
    #
    # Returns: 
    #   reqlist (list of strings): A list of the prerequisites of a course. Elements
    #   can be in two forms. 1) The name of a single course. eg: "MATH 100"
    #   2) Several courses, each separated by the word "or". This denotes that only one
    #   these courses is required as a prerequisite. eg: "MEC E 250 or MATH 102 or CH E 441"

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
        numcounter = countNums(reqlist[i])

        if reqlist[i][0:5] == "both " or reqlist[i][0:5] == "Both ":
            # Two courses are required, remove both and pull department name is required
            reqlist[i] = reqlist[i].replace("both ","")
            reqlist[i] = reqlist[i].replace("Both ","")

            # Pull department name from previous course if required
            numcounter = countNums(reqlist[i + 1])
            if numcounter == 3 and len(reqlist[i + 1]) == 3:
                # Only a course number is present, must pull the department name
                dept = pullDept(reqlist, i)
                assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

                reqlist[i + 1] = dept + " " + reqlist[i + 1]

        if (reqlist[i][0:7] == "One of ") or (reqlist[i][0:7] == "one of ") or (reqlist[i][0:7] == "Either ") or (reqlist[i][0:7] == "either "):
            # Same logic for "one of" as well as "either"
            if ((reqlist[i][0:6] == "Either") or (reqlist[i][0:6] == "either")) and (reqlist[i + 1][0:11] == "or one of "):
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

                    # Count the number of numbers in the next element
                    numcounter = countNums(reqlist[j])

                    if numcounter == 3 and len(reqlist[j]) == 3:
                        # Only the course number is present, we need to pull
                        # the department from the previous element
                        # eg: [MATH 100, 102] should become [MATH 100, MATH 102]
                        dept = pullDept(reqlist, j - 1)
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
                        numcounter = countNums(reqlist[j])

                        if numcounter == 3 and len(reqlist[j]) == 6:
                            # only "or" and a number is present eg: "or 451" (3 numbers, 6 chars)
                            # we need to pull the department from the previous element
                            dept = pullDept(reqlist, j - 1)
                            assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

                            reqlist[j] = "or " + dept + reqlist[j][2:]  # move the position of "or"

                        if reqlist[j][0:8] == "or both ":
                            # FIXME: this is tough to deal with, either these courses or both of these courses
                            # Right now, just combining everything into one list entry
                            if len(reqlist[j]) == 11:
                                # Only course number is present in current entry, need to pull department name from previous
                                dept = pullDept(reqlist, j - 1)
                                assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

                                reqlist[j] = "or both " + dept + reqlist[j][7:]  # move the position of "or both"

                            numcounter = countNums(reqlist[j + 1])
                            if numcounter == 3 and len(reqlist[j + 1]) == 3:
                                # Only course number is present in the next entry, need to pull the department name from current
                                dept = pullDept(reqlist, j)
                                assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

                                # Re-arranging word placement
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
            dept = pullDept(reqlist, i - 1)
            assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

            reqlist[i] = "or " + dept + reqlist[i][2:]  # move the position of "or"
            reqlist[i - 1] = reqlist[i - 1] + " " + reqlist[i]  # combine previous and current elements
            del reqlist[i]  # remove current element

        elif (reqlist[i][0:2] == "or" or reqlist[i][0:2] == "Or") and len(reqlist[i]) > 6:
            # The element is "or" followed by the course name with the department name present
            # eg: "or MATH 100"
            reqlist[i - 1] = reqlist[i - 1] + " " + reqlist[i]  # combine current and previous elements
            del reqlist[i]  # delete current element

        elif numcounter == 3 and len(reqlist[i]) == 3:
            # Only a course number is present. eg: "102"
            # All we do is pull the department from the previous element.
            dept = pullDept(reqlist, i - 1)
            assert dept != -1, "Error pulling department name from previous list item, check pullDept()"

            reqlist[i] = dept + " " + reqlist[i]  # just add the department name to current item
            i += 1
        else:
            i += 1
    
    return reqlist

def pullPreReqs(description):
    # Pulls the prerequisites from the course description.
    #
    # Arguments:
    #   description (string): The complete course description taken from Beartracks/Excel
    #
    # Returns:
    #   prereqs (list of strings): A list of the prerequisites. Elements
    #   can be in two forms. 1) The name of a single course. eg: "MATH 100"
    #   2) Several courses, each separated by the word "or". This denotes that only one
    #   these courses is required as a prerequisite. eg: "MEC E 250 or MATH 102 or CH E 441"

    # Split into cases, plural and not plural. Just adjusts the substring value (14 or 15)
    singlestart = description.find("Prerequisite: ")
    if singlestart == -1:
        singlestart = description.find("prerequisite: ")

    multstart = description.find("Prerequisites: ")
    if multstart == -1:
        multstart = description.find("prerequisites: ")

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
    else:
        return []

    # Process the string to split it into a list with each item being the name
    # of a prerequisite course
    prereqs = process(prestr)
    
    return prereqs


def pullCoReqs(description):
    # Pulls the corequisites from the course description.
    #
    # Arguments:
    #   description (string): The complete course description taken from Beartracks/Excel
    #
    # Returns:
    #   coreqs (list of strings): A list of the corequisites. Elements
    #   can be in two forms. 1) The name of a single course. eg: "MATH 100"
    #   2) Several courses, each separated by the word "or". This denotes that only one
    #   these courses is required as a corequisite. eg: "MEC E 250 or MATH 102 or CH E 441"

    # Split into cases, plural and not plural. Just adjusts the substring value (14 or 15)
    singlestart = description.find("Corequisite: ")
    if singlestart == -1:
        singlestart = description.find("corequisite: ")

    multstart = description.find("Corequisites: ")
    if multstart == -1:
        multstart = description.find("corequisites: ")

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
    else:
        return []

    # Process the string to split it into a list with each item being the name
    # of a corequisite course
    coreqs = process(prestr)
    
    return coreqs

def pullReqs(course_obj_dict, course):
    # Searches course_obj_dict for which courses require "course" as a pre/co-req,
    # returns these as a list of course names (empty if none)
    #
    # Arguments:
    #   course_obj_dict (dictionary): dict with course name for key and 
    #   Course class as value. Course class described in parsing.py
    #   course (string): the name of a course (eg: MATH 101)
    #
    # Returns:
    #   reqs (list of strings): list of the names of the courses that require
    #   "course" as either a pre or co-requisite

    reqs = []

    for search_course in course_obj_dict:
        if search_course != course:  # a course can't be a prereq for itself
            if (course in course_obj_dict[search_course].prereqs) or (course in course_obj_dict[search_course].coreqs):
                # If course is a pre or co-req for search_course, add search_course to the list of reqs
                reqs.append(search_course)

    return reqs


def parse(filename):
    # Parses a JSON file with name "filename" created with the
    # Matlab script "parsing.m" (all in current folder).
    # The data are extracted and stored in a dict
    # 
    # Arguments:
    #    filename (string): name of the .json file to be processed
    #
    # Returns:
    #   course_obj_dict (dict): Stores all course data:
    #       key: Course Name (string): the Subject + " " + Catalog of a course
    #       value: Course object. Stores all data about a course
    
    try:
        with open(filename, "r") as f:
            contents = f.read()
            if "\n" in contents:
                # File is not in proper format, display error & quit
                print("Please format the JSON file properly")
                print("Re-run the MATLAB script \"parsing.m\" to do so")
                quit()
    except FileNotFoundError:
        print("parsed.json file not found")
        print("Please run the MATLAB script \"parsing.m\".")
        quit()
            
    splitLine(filename, contents)

    course_list = []  # Stores courses as an array of dicts
    with open(filename, "r") as f:
        for json_obj in f:
            course_list.append(json.loads(json_obj))

    course_obj_dict = {}
    # Key: Course Name (Subject + " " + Catalog eg: MEC E 340)
    # Value: Course object
    for course in course_list:
        course_name = course["Subject"] + " " + course["Catalog"]
        course_obj_dict[course_name] = (Course(course["Faculty"], course["Department"],
        course["CourseID"], course["Subject"], course["Catalog"], course["LongTitle"],
        course["EffDate"], course["Status"], course["CalendarPrint"],
        course["ProgUnits"], course["EngineeringUnits"], course["Calc_FeeIndex"],
        course["ActualFeeIndex"], course["Duration"], course["AlphaHours"],
        course["CourseDescription"]))

    f.close()

    for course in course_obj_dict:
        course_obj_dict[course].prereqs = pullPreReqs(course_obj_dict[course].course_description)
        course_obj_dict[course].coreqs = pullCoReqs(course_obj_dict[course].course_description)
        course_obj_dict[course].reqs = pullReqs(course_obj_dict, course)

    return course_obj_dict