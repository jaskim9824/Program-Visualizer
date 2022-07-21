# Author: Zachary Schmidt
# Collaborators: Jason Kim, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions needed to parse the Excel file
# containing the course category information

# Dependencies: xlrd, parsinghelp

import xlrd
from . import parsinghelp

# Parses an Excel file for categorical info about each course (is it 
# a math course, design, basic science, etc.) Also stores the color code
# provided in the Excel file for each course.
#
# Parameters:
#   filename (string): relative path to the file to be parsed for category info.
#       Can only be a .xls (not .xlsx file).
#   course_obj_dict (dict): Stores all course data:
#       key: Course Name (string): the Subject + " " + Catalog of a course
#       value: Course object. Stores all data about a course
# Returns:
#   course_obj_dict (dict): the category and color attributes should be
#       filled in
#   category_dict (dict):
#       Key: category (string): A category ("Basic Science", "Math", etc.)
#       Value: a list with item at index 0 as category level ("main" or "sub") and color as the item at index 1
def parseCategories(filename, course_obj_dict):
    try:
        category_dict = {}
        book = xlrd.open_workbook(filename)
        sheet = book.sheet_by_index(0)

        for col in range(0, sheet.ncols):
            # Each column is one category
            cell_entry = str(sheet.cell_value(0, col))
            # finding the appropriate category level
            open_bracket_indx = cell_entry.find("(")
            closed_bracket_indx = cell_entry.find(")")
            if ((open_bracket_indx != -1) and (closed_bracket_indx != -1)):
                # if brackets present
                cat_name = cell_entry[:open_bracket_indx]
                cat_level = cell_entry[open_bracket_indx + 1:closed_bracket_indx]
            else:
                # otherwise just use cell as category name and level default as main
                cat_name = cell_entry
                cat_level = "main"
                
            if "." in str(sheet.cell_value(1, col)):
                # If rrggbb is all numbers, Excel likes to add a decimal point. Remove this
                dotindex = str(sheet.cell_value(1, col)).find(".")
                color = str(sheet.cell_value(1, col))[:dotindex]
            else:
                # It is formatted fine as it is
                color = str(sheet.cell_value(1, col))

            # store the category and color in a dict
            category_dict[cat_name] = [cat_level, color] 

            # Create a new course object if an elective because elective info is not in course_obj_dict
            if cat_name.upper().strip() == "COMP" and "Complementary Elective" not in course_obj_dict:
                course_obj_dict["Complementary Elective"] = parsinghelp.Course(name = "Complementary Elective", 
                    course_description="A complementary elective of the student's choice. Please consult the calendar for more information.",
                    main_category = "Complementary Elective", color = color)
            if cat_name.upper().strip() == "PROG" and "Program/Technical Elective" not in course_obj_dict:
                course_obj_dict["Program/Technical Elective"] = parsinghelp.Course(name = "Program/Technical Elective", 
                    course_description="A program/technical elective of the student's choice. Please consult the calendar for more information.",
                    main_category = "Program/Technical Elective", color = color)
            if cat_name.upper().strip() == "ITS" and "ITS Elective" not in course_obj_dict:
                course_obj_dict["ITS Elective"] = parsinghelp.Course(name = "ITS Elective", 
                    course_description="An ITS elective of the student's choice. Please consult the calendar for more information.",
                    main_category = "ITS Elective", color = color)

            # Add category information to courses in that category
            course_obj_dict = addCategorytoCourses(course_obj_dict, sheet, col, cat_name, cat_level, color)
       
    except FileNotFoundError:
        raise FileNotFoundError("Excel course categories file not found, ensure it is present and the name is correct.")
    except xlrd.biffh.XLRDError:
        raise xlrd.biffh.XLRDError("Error reading data from course categories Excel sheet. Ensure it is formatted exactly as specified")

    return course_obj_dict, category_dict

# Creates two new dicts. One dict stores only main categories & colors,
# the other stores only sub categories and colors. Format of return dicts
# is identical to categoryDict.
#
# Parameters:
#   category_dict (dict):
#       Key: category (string): A category ("Basic Science", "Math", etc.)
#       Value: a list with item at index 0 as category level ("main" or "sub") and color as the item at index 1
#
# Returns:
#   mainCategoryDict (dict): same as categoryDict except contains only main categories
#   subCategoryDict (dict): same as categoryDict except contains only sub categories
def splitCategoryDict(categoryDict):
    mainCategoryDict = {}
    subCategoryDict = {}
    for category in categoryDict:
        # Add each category to main or sub dict
        if categoryDict[category][0] == "main":
            mainCategoryDict[category] = categoryDict[category][1]
        elif categoryDict[category][0] == "sub": 
            subCategoryDict[category] = categoryDict[category][1]
    return mainCategoryDict, subCategoryDict

# Function that adds the category information to courses of a specfic category.
# Modifies the contents of course_obj_dict.
#
# Parameters:
#   course_obj_dict (dict): dict that maps the course name to a course object
#   sheet (xlrd sheet object): sheet handle to Excel sheet
#   col (int): column number for respective category
#   cat_name (string): name of respective category
#   color (string): colour of respective category
#
# Returns:
#   course_obj_dict (dict): main_category, sub_categories, and color fields are modified
def addCategorytoCourses(course_obj_dict, sheet, col, cat_name, cat_level, color):
    for row in range(2, sheet.nrows):
        # Course names start at third row
        name = sheet.cell_value(row, col)
        if name == "":
            continue
        name = name.upper().strip().replace("  ", " ")
        if name in course_obj_dict:  # guard to prevent key not found error
            if cat_level == "main":
                # determine if this is a main or sub category
                course_obj_dict[name].main_category = cat_name
            elif cat_level == "sub":
                course_obj_dict[name].sub_categories.append(cat_name)
            course_obj_dict[name].color = color
    return course_obj_dict
