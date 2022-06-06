# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# File that contains all the functions and classes used to aid in
# generating the lines in the diagram

# Dependencies: cleaner

from unicodedata import category
from .. import cleaner


# Class that defines an object used to manage line generation in the project
class LineManager:
    def __init__(self) -> None:
        # Dict that maps the lines to the courses that 'own' them
        # Key: Cleaned (removed of all alpha numeric characters) version of course name
        # Value: List of int, represent the number id of lines "owned" by the course
        self.courseLineDict = {}

        # Count of lines generated in the webpage
        self.lineCount = 0
    
    # Adds a line to a course's "owned" list
    # Parameters:
    #   course: Cleaned name of course (str)
    #   line: Id number of line (int)
    def addLinetoCourse(self, course ="", line = int):
        if course not in self.courseLineDict:
            self.intializeCourse(course)
        if line not in self.courseLineDict[course]:
            self.courseLineDict[course].append(line)
    
    # Intializes a course's "owned" list in the course line dict. Does nothing
    # if course already has an intialized list
    # Parameters:
    #   course: Cleaned name of course (str)
    def intializeCourse(self, course = ""):
        if course not in self.courseLineDict:
            self.courseLineDict[course] = []
        return

    # Returns the dict mapping course to their "owned lines"
    def getCourseLineDict(self) -> dict:
        return self.courseLineDict

    # Returns the current line count
    def getLineCount(self) -> int:
        return self.lineCount

    # Sets the current line count
    # Parameters:
    #   count: New line count (int)
    def setLineCount(self, count = int):
        self.lineCount = count

# Function that places the lines for a specfic plan sequnece onto the diagram
# Parameters:
#   courseList - list of course objects of course taken in that plan
#   indexJS - file handle for index.js
#   lineManager - line manager object for aiding in generation
#   plan - name of plan 
def placeLines(courseList, indexJS, lineManager, plan):
    for course in courseList:
        courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan)
        for prereq in course.prereqs:
            # OR CASE, cases where prereq can be one of a set of courses
            if len(prereq.split()) > 1:
                newPreReqString = prereq.replace(" or ", " ")
                for option in newPreReqString.split():
                    if cleaner.cleanString(option) in cleaner.cleanCourseList(courseList):
                        optionID = cleaner.cleanString(option)+cleaner.cleanString(plan)
                        addPrereqLine(optionID, courseID, lineManager, indexJS)
            else:
                if cleaner.cleanString(prereq) in cleaner.cleanCourseList(courseList):
                    prereqID = cleaner.cleanString(prereq)+cleaner.cleanString(plan)
                    addPrereqLine(prereqID, courseID, lineManager, indexJS)
        for coreq in course.coreqs:
             # OR CASE, cases where coreq can be one of a set of courses
            if len(coreq.split()) > 1:
                newCoReqString = coreq.replace(" or ", " ")
                for option in newCoReqString.split():
                    if cleaner.cleanString(option) in cleaner.cleanCourseList(courseList):
                        optionID = cleaner.cleanString(option)+cleaner.cleanString(plan)
                        addCoreqLine(optionID, courseID, lineManager, indexJS)
            else:
                if cleaner.cleanString(coreq) in cleaner.cleanCourseList(courseList):
                    coreqID = cleaner.cleanString(coreq)+cleaner.cleanString(plan)
                    addCoreqLine(coreqID, courseID, lineManager, indexJS)


# Function that places click listeners for each course in the specified plan
# Parameters:
#   courseList - list of course objects of course taken in that plan
#   controller - file handle for controller.js
#   lineManager - line manager object for aiding in generation
#   plan - name of plan 
def placeClickListeners(courseList, controller, lineManager, plan):
    formattedListener = "$scope.{courseName}Listener = function () {{\n"
    formattedElementGetter = "  var {courseName}element = document.getElementById(\"{courseName}\");\n"
    formattedContains = "     if ({courseName}element.classList.contains(\"{category}-highlighted\")) {{ \n"
    formattedIf = " if (!{courseName}flag) {{\n"
    formattedStatement = "      that.{action}Line(getLine{num}());\n"
    formattedHighlightStatement = "     {courseName}element.classList.{action}(\"{className}\");\n"
    formattedRemoveClickedStatement = "     that.removeFromClicked(\"{courseName}\");\n"
    formattedAddClickedStatement = "     that.addToClicked([\"{courseName}\", \"{category}\"]);\n"

    compcounter = 0
    progcounter = 0
    itscounter = 0

    for course in courseList:
        courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan) 
        courseContClass = course.category.replace(" ", "")

        # program and tech elective
        if (courseContClass == "Program/TechnicalElective"):
                courseContClass = "PROG"
                courseID += str(progcounter)
                progcounter += 1
        # comp elective
        elif (courseContClass == "ComplementaryElective"):
                courseContClass = "COMP"
                courseID += str(compcounter)
                compcounter += 1
        # its elective
        elif (courseContClass == "ITSElective"):
                courseContClass = "ITS"
                courseID += str(itscounter)
                itscounter += 1
        # for course with no category, use default colour
        elif (courseContClass == ""):
                courseContClass = "course"

        controller.write(formattedListener.format(courseName=courseID))
        controller.write(formattedElementGetter.format(courseName=courseID))
        controller.write(formattedIf.format(courseName=courseID))
        controller.write(formattedContains.format(courseName=courseID, category=courseContClass))
        controller.write(formattedHighlightStatement.format(courseName=courseID, 
                                                            action="remove",
                                                            className=courseContClass+"-highlighted"))
        controller.write(formattedHighlightStatement.format(courseName=courseID, 
                                                            action="add",
                                                            className=courseContClass))
        controller.write("      return;\n")
        controller.write("}")

        # if course owns lines, add addLine statements
        if courseID in lineManager.getCourseLineDict():
            for line in lineManager.getCourseLineDict()[courseID]:
                controller.write(formattedStatement.format(action="add", num=line))

  

            
        controller.write(formattedHighlightStatement.format(courseName=courseID,
                                                                    action="remove",
                                                                    className=courseContClass))
        controller.write(formattedHighlightStatement.format(courseName=courseID,
                                                                    action="add",
                                                                   className=courseContClass+"-highlighted"))
        controller.write(formattedAddClickedStatement.format(courseName=courseID, 
                                                                    category=courseContClass))
            
     
        controller.write("      " +courseID+"flag=true\n")
        controller.write("  }\n else {\n")

        # if course owns lines, add removeLine statements
        if courseID in lineManager.getCourseLineDict():
            for line in lineManager.getCourseLineDict()[courseID]:
                controller.write(formattedStatement.format(action="remove", num=line))

        # for course with no category, use default colour
        if (courseContClass == ""):
            courseContClass = "course"

        controller.write(formattedHighlightStatement.format(courseName=courseID,
                                                                action="remove",
                                                                className=courseContClass+"-highlighted"))
        controller.write(formattedHighlightStatement.format(courseName=courseID,
                                                                action="add",
                                                                className=courseContClass))
    
        controller.write(formattedRemoveClickedStatement.format(courseName=courseID))
        controller.write("      " +courseID+"flag=false\n")
        controller.write("  }\n};\n")

# Function that creates a prerequesite line object in index.js
# Parameters:
#   start - element ID of starting course
#   end - element ID of ending course
#   lineManager - line manager object for aiding in generation
#   indexJS - file handle for index.js
def addPrereqLine(start, end, lineManager, indexJS):
    # get line count, this is the ID of the new line
    count = lineManager.getLineCount()

    # ensure that both start and end have entries in courseLineDict
    lineManager.intializeCourse(start)
    lineManager.intializeCourse(end)

    indexJS.write("var line" + 
                     str(count) + 
                     " = new Line(" +
                    "\"" + start +  "\"" + 
                     ", " +
                    "\"" + end +  "\"" + 
                     ", false);\n")
    
    # add a getter for the line
    addGetter(count, indexJS)

    # add lines to "owned" list of start and end
    lineManager.addLinetoCourse(start, count)
    lineManager.addLinetoCourse(end, count)

    # increment line count in line manager
    lineManager.setLineCount(count+1)
    

# Function that creates a corequesite line object in index.js
# Parameters:
#   start - element ID of starting course
#   end - element ID of ending course
#   lineManager - line manager object for aiding in generation
#   indexJS - file handle for index.js
def addCoreqLine(start, end, lineManager, indexJS):
    # get line count, this is the ID of the new line
    count = lineManager.getLineCount()

    # ensure that both start and end have entries in courseLineDict
    lineManager.intializeCourse(start)
    lineManager.intializeCourse(end)

    indexJS.write("var line" + 
                     str(count) + 
                    " = new Line(" +
                    "\"" + start +  "\"" + 
                     ", " +
                    "\"" + end +  "\"" + 
                     ", true);\n")

    # add a getter for the line
    addGetter(count, indexJS)

    # add lines to "owned" list of start and end
    lineManager.addLinetoCourse(start, count)
    lineManager.addLinetoCourse(end, count)

    # increment line count in line manager
    lineManager.setLineCount(count+1)

# Function that adds a getter function for a line
# so that contoller.js can retrieve the line object
# Parameters
#   num - number ID of line in question
#   indexJS - file handle for index.js
def addGetter(num, indexJS):
    formattedFunction = """function getLine{number}() {{
        return line{number}
    }};\n"""
    indexJS.write(formattedFunction.format(number=num))


