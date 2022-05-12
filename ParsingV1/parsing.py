import json

class Course:
    # Stores all data about each course
    def __init__(self, faculty, department, course_id, subject, catalog,
        long_title, eff_date, status, calendar_print, prog_units,
        engineering_units, calc_fee_index, actual_fee_index, duration,
        alpha_hours, course_description):
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
    #       key: CourseID (string) ID of a course
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
    # Key: CourseID
    # Value: Course object
    for course in course_list:
        course_obj_dict[course["CourseID"]] = (Course(course["Faculty"], course["Department"],
        course["CourseID"], course["Subject"], course["Catalog"], course["LongTitle"],
        course["EffDate"], course["Status"], course["CalendarPrint"],
        course["ProgUnits"], course["EngineeringUnits"], course["Calc_FeeIndex"],
        course["ActualFeeIndex"], course["Duration"], course["AlphaHours"],
        course["CourseDescription"]))

    f.close()
    return course_obj_dict