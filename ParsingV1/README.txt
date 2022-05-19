Purpose: To parse an excel (.xls) file and to store the data in a
         python dictionary. This dictionary will have keys as
         as the Name of that course (eg: MATH 100). The values will be a
         Course object definied in parsing.py, which contains 
         attributes stroing all data from the excel sheet.

Running Instructions:
- Ensure that "parsing.m", "parsing.py", and
  "RO_COURSES_BY_DEPT_OR_FACULTY_ALL_ENG.xls" are in the
  current directory.
- Open Matlab and run the script "parsing.m". This should
  create a file in the current directory called "parsed.json"
- Import the function "parse(filename)" from the file "parsing.py".
  Do this by the following: "from parsing import parse".
  This allows you to use the function parse(filename) in your
  python program.

parse(filename):
    Parses a JSON file with name "filename" created with the
    Matlab script "parsing.m" (all in current folder).
    The data are extracted and stored in a dict.
    
    Arguments:
       filename (string): name of the .json file to be processed

    Returns:
      course_obj_dict (dict): Stores all course data:
          key: CourseID (string) ID of a course
          value: Course object. Stores all data about a course

Course Object:
- The value of the return dict is an object of the "Course" Class
- Attributes:
    faculty
    department
    course_id
    subject
    catalog
    long_title
    eff_date
    status
    calendar_print
    prog_units
    engineering_units
    calc_fee_index
    actual_fee_index
    duration
    alpha_hours
    course_description
    prereqs (list of all prereqs)

Example Usage: (Printing the Course ID & prereqs of every course)
from parsing import parse

filename = "parsed.json"
courses = parse(filename)
for course in courses:
    print(courses[course].course_id)
    print(courses[course].prereqs)