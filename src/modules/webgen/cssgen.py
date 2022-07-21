# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains the functions needed to write the CSS 
# code for the categories of courses on the visualizer page

# Dependencies: cleaner

from .. import cleaner

# Function that writes the CSS associated with the highlighting
# of courses based on category
# Parameters:
#   mainCategoryDict - a dict that maps main categories to colours
#   subCategoryDict - a dict that maps sub categories to colours
#   categoryCSS - file handle to CSS file
def writeCategoryCSS(mainCategoryDict, subCategoryDict, categoryCSS):
    writeSubCategoryCSS(subCategoryDict, categoryCSS)
    writeMainCategoryCSS(mainCategoryDict, categoryCSS)

# Function that writes the CSS class styling for each main category.
# Writes styling for :hover, -highlighted, and -highlighted:hover
# Parameters:
#   mainCategoryDict - a dict that maps main categories to colours
#   categoryCSS - file handle to CSS file
def writeMainCategoryCSS(mainCategoryDict, categoryCSS):
    for category in mainCategoryDict:
        backgroundColour = mainCategoryDict[category]  # colour parsed from Excel file associated with this category
        categoryFormattedString = """.{categoryName}:hover {{
            background-color: #{backColour};
            border-color: #{backColour};
        }}
        .{categoryName}-highlighted {{
            background-color: #{backColour};
        }}
        .{categoryName}-highlighted:hover {{
            background-color: #{backColour};
            border-color: #{backColour};
        }}\n"""
        categoryCSS.write(categoryFormattedString.format(categoryName=cleaner.cleanString(category),
                                                         backColour=backgroundColour))

# Function that writes the CSS class styling for each sub category.
# Writes styling for :hover, -highlighted, and -highlighted:hover
# Parameters:
#   subCategoryDict - a dict that maps sub categories to colours
#   categoryCSS - file handle to CSS file
def writeSubCategoryCSS(subCategoryDict, categoryCSS):
  for category in subCategoryDict:
        backgroundColour = subCategoryDict[category]  # colour parsed from Excel file associated with this category
        categoryFormattedString = """.{categoryName}:hover {{
            background-color: #{backColour};
            border-color: #{backColour};
        }}
        .{categoryName}-highlighted {{
            background-color: #{backColour};
        }}
        .{categoryName}-highlighted:hover {{
            background-color: #{backColour}!important;
            border-color: #{backColour}!important;
        }}\n"""
        categoryCSS.write(categoryFormattedString.format(categoryName=cleaner.cleanString(category),
                                                         backColour=backgroundColour))
