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

def process(reqlist):
    # Not done. Will process the list of prereqs (hopefully coreqs too).
    nums = ["0","1","2","3","4","5","6","7","8","9"]
    for item in reqlist:
        item.replace("(", "")
        item.replace(")", "")
        item.replace(",", "")

        numcounter = 0
        for char in item:
            if char in nums:
                numcounter += 1
        if numcounter < 3:
            reqlist.remove(item)

        semicolindx = item.find(";")
        if semicolindx != -1:
            item = item[0:semicolindx]


def pullPreReqs(description):
    # Pulls the prereqs from the course description, not done
    singlestart = description.find("Prerequisite: ")

    multstart = description.find("Prerequisites: ")

    if singlestart != -1:
        singlestart += 14
        singleend = description.find(".", singlestart)
        prestr = description[singlestart:singleend]     
    elif multstart != -1:
        multstart += 15
        multend = description.find(".", multstart)
        prestr = description[multstart:multend]
    else:
        return []

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

    prereqs = prestr.split(", ")

    prereqs = process(prereqs)
    
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