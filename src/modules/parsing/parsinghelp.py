# Author: Zachary Schmidt
# Collaborators: Jason Kim, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the helper functions and classes that assist
# in parsing the Excel files

# Class that wraps the information about a course
class Course:
    def __init__(self, name = "", faculty = "", department = "", course_id = "", subject = "", catalog = "",
        long_title = "", eff_date = "", status = "", calendar_print = "", prog_units = "",
        engineering_units = "", calc_fee_index = "", actual_fee_index = "", duration = "",
        alpha_hours = "", course_description = "", main_category = "", sub_category = "", 
        color = "", course_group = "", prereqs = [], coreqs = []):

        self.name = str(name)
        self.faculty = str(faculty)
        self.department = str(department)
        self.course_id = str(course_id)
        self.subject = str(subject)
        self.catalog = str(catalog)
        self.long_title = str(long_title)
        self.eff_date = str(eff_date)
        self.status = str(status)
        self.calendar_print = str(calendar_print)
        self.prog_units = str(prog_units)
        self.engineering_units = str(engineering_units)
        self.calc_fee_index = str(calc_fee_index)
        self.actual_fee_index = str(actual_fee_index)
        self.duration = str(duration)
        self.alpha_hours = str(alpha_hours).lower()
        self.course_description = str(course_description)
        self.main_category = str(main_category)
        self.sub_category = str(sub_category)
        self.color = str(color)
        self.course_group = str(course_group)
        self.prereqs = prereqs
        self.coreqs = coreqs

# Counts the total number of number (0-9) chars in a string.
# eg: "mlat9kg45" has 3 numbers.
#
# Parameters:
#   str (string): the string to be analyzed
#
# Returns: 
#   numcounter (int): how many numbers are in the string
def countNums(str):
    return len(list(filter(lambda x: (x.isdigit()), str)))

# Pulls the department name from reqlist[indx]. The department name
# is an uppercase string, eg: MATH, PHYS, ENGL, etc.
#
# Parameters:
#   reqlist (list of strings): list of the prerequisites for a course
#   indx (int): index of the current item in reqlist from which the department name is pulled
#
# Returns: 
#   dept (string): The department name required for the current course.
#   Returns -1 on error.
def pullDept(reqlist, indx):
    for n in range(0, len(reqlist[indx])):
    # MATH 100 -> Move from left to right until you hit the
    # first number, the department is from beginning to 2 indices before that
        if reqlist[indx][n].isdigit():
            # pull the department name
            dept = reqlist[indx][0:n - 1]  
            return dept
    return -1