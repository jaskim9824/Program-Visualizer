# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains the functions neccesary to write the CSS 
# code for the categories of courses on the visualizer page

# Dependencies: cleaner

from .. import cleaner

# Function that writes the CSS associated with the highlighting
# of courses based on category
#   categoryDict - a dict that maps categories to colours
#   categoryCSS - file handle to CSS file
def writeCategoryCSS(categoryDict, categoryCSS):
    for category in categoryDict:
        backgroundColour = categoryDict[category]
        categoryFormattedString = """.coursecontainer .{categoryName}:hover {{
            background-color: #{backColour};
            border-color: #{backColour};
        }}
        .{categoryName}-highlighted {{
            background-color: #{backColour};
        }}
        .{categoryName}-highlighted:hover {{
            background-color: #{backColour};
            border-color: #{backColour};
        }}\n
.orcoursecontainer .{categoryName}:hover {{
            background-color: #{backColour};
            border-color: #{backColour};
        }}
        .{categoryName}-highlighted {{
            background-color: #{backColour};
        }}
        .{categoryName}-highlighted:hover {{
            background-color: #{backColour};
            border-color: #{backColour};
        }}
.coursegroupcontainer .{categoryName}:hover {{
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