

from .. import cleaner

# Function that writes the CSS associated with the highlighting
# of courses based on category
#   categoryDict - a dict that maps categories to colours
#   categoryCSS - file handle to CSS file
def writeCategoryCSS(categoryDict, categoryCSS):
    for category in categoryDict:
        backgroundColour = categoryDict[category]
        categoryFormattedString = """.{categoryName}:hover {{
            background-color: #{backColour}!important;
            border-color: #{backColour}!important;
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