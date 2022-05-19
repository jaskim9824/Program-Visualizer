import json

class Course:
    # Stores all data about each course
    def __init__(self, faculty, department, course_id, subject, catalog,
        long_title, eff_date, status, calendar_print, prog_units,
        engineering_units, calc_fee_index, actual_fee_index, duration,
        alpha_hours, course_description, prereqs = []):
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


def preprocess(reqlist):
    # Preprocesses a list (of strings) of the pre-requisites for one course.
    # Removes all brackets and commas. If the list item is not a course
    # (some text such as: "consent of the department required.") it is removed.
    # Any text after a semicolon is removed. Any item that is longer than 16 chars
    # is removed (definitely not a course name).
    #
    # Arguments:
    #   reqlist (list of strings): list of the pre-requisite courses
    #
    # Returns: 
    #   newlist (list of strings): preprocessed list of pre-requisite courses

    nums = ["0","1","2","3","4","5","6","7","8","9"]
    newlist = []

    i = 0
    while i < len(reqlist):
        # Remove all commas and brackets
        reqlist[i] = reqlist[i].replace("(", "")
        reqlist[i] = reqlist[i].replace(")", "")
        reqlist[i] = reqlist[i].replace(",", "")
        i += 1

    j = 0
    while j < len(reqlist):
        # Must have at least 3 numbers to be the name of a course
        numcounter = 0
        for char in reqlist[j]:
            if char in nums:
                numcounter += 1
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


def pullDept(reqlist, nums, indx):
    # Pulls the department name from the the previous list item in reqlist.
    # The current list item is at index number indx.
    #
    # Arguments:
    #   reqlist (list of strings): list of the prerequisites for a course
    #   nums (list of strings): list of numbers 0-9 (i.e. ["0","1","2",...])
    #   indx (int): index of the current item in reqlist that requires a department name
    #
    # Returns: 
    #   dept (string): The department name required for the current course.
    #   Returns -1 on error.

    dept = ""
    for n in range(0, len(reqlist[indx - 1])):
    # MATH 100 -> Move form left to right until you hit the
    # first number, the department is from beginning to 2 indices before that
        if reqlist[indx - 1][n] in nums:
            dept = reqlist[indx - 1][0:n - 1]  # pull the department name
            return dept

    return -1


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

    nums = ["0","1","2","3","4","5","6","7","8","9"]
    i = 0

    while i < len(reqlist):
        # Iterate through every element in reqlist. Chnages are made
        # directly on reqlist

        # Count the number of numbers (should be 3 if it's a course)
        numcounter = 0
        for char in reqlist[i]:
            if char in nums:
                numcounter += 1

        if reqlist[i][0:6] == "One of" or reqlist[i][0:6] == "one of":
            # Only one of the upcoming courses is required
            reqlist[i] = reqlist[i].replace("One of ","")
            reqlist[i] = reqlist[i].replace("one of ","")

            j = i + 1

            if j < len(reqlist):
                while ("or" not in reqlist[j]) and ("Or" not in reqlist[j]):
                    # There are still more courses that could be chosen, combine the
                    # previous and current elements, continue until we see the word "or"

                    # Count the number of numbers in the next element
                    numcounter = 0
                    for char in reqlist[j]:
                        if char in nums:
                            numcounter += 1

                    if numcounter == 3 and len(reqlist[j]) == 3:
                        # Only the course numebr is present, we need to pull
                        # the department from the previous element
                        # eg: [MATH 100, 102] should become [MATH 100, MATH 102]
                        dept = pullDept(reqlist, nums, j)
                        assert(dept != -1, "Error pulling department name from previous list item, check pullDept()")

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
                        numcounter = 0
                        for char in reqlist[j]:
                            if char in nums:
                                numcounter += 1

                        if numcounter == 3 and len(reqlist[j]) == 6:
                            # only "or" and a number is present eg: "or 451" (3 numbers, 6 chars)
                            # we need to pull the department from the previous element
                            dept = pullDept(reqlist, nums, j)
                            assert(dept != -1, "Error pulling department name from previous list item, check pullDept()")

                            reqlist[j] = dept + " " + reqlist[j]  # don't add "or" since already present
                        reqlist[i] = reqlist[i] + " " + reqlist[j]
                        del reqlist[j]
                        if j >= len(reqlist):
                            break
            i += 1

        elif (reqlist[i][0:2] == "or" or reqlist[i][0:2] == "Or") and len(reqlist[i]) == 6:
            # The element is just "or" followed by a course number. eg: "or 451" 
            # The department is not present.
            # We need to pull the department from the previous element.
            dept = pullDept(reqlist, nums, i)
            assert(dept != -1, "Error pulling department name from previous list item, check pullDept()")

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
            dept = pullDept(reqlist, nums, i)
            assert(dept != -1, "Error pulling department name from previous list item, check pullDept()")

            reqlist[i] = dept + " " + reqlist[i]  # just add the department name to current item
            i += 1
        else:
            i += 1
    
    return reqlist

def pullPreReqs(description):
    # Pulls the prerequisite from the course description.
    #
    # Arguments:
    #   description (string): The complete course description taken form Beartracks/Excel
    #
    # Returns:
    #   prereqs (list of strings): A list of the prerequisites. Elements
    #   can be in two forms. 1) The name of a single course. eg: "MATH 100"
    #   2) Several courses, each separated by the word "or". This denotes that only one
    #   these courses is required as a prerequisite. eg: "MEC E 250 or MATH 102 or CH E 441"

    # Split into cases, plural and not plural. Just adjusts the substring value (14 or 15)
    singlestart = description.find("Prerequisite: ")

    multstart = description.find("Prerequisites: ")

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
        # pullCoReqs(course_obj_dict, course)
        # findReqs(course_obj_dict, course)

    return course_obj_dict