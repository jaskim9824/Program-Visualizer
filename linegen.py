# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# File that contains all the functions and classes used to aid in
# generating the lines in the diagram

# Dependencies: cleaner

import cleaner


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

def placeLines(courseList, indexJS, lineManager, plan):
    for course in courseList:
        courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan)
        for prereq in course.prereqs:
            # OR CASE
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
             # OR CASE
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

def placeClickListeners(courseList, controller, lineManager, plan):
    formattedListener = "$scope.{courseName}Listener = function () {{\n"
    formattedIf = " if (!{courseName}flag) {{\n"
    formattedStatement = "      that.{action}Line(getLine{num}());\n"
 
    for course in courseList:
        courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan) 
        if courseID in lineManager.getCourseLineDict():
            controller.write(formattedListener.format(courseName=courseID))
            controller.write(formattedIf.format(courseName=courseID))

            for line in lineManager.getCourseLineDict()[courseID]:
                controller.write(formattedStatement.format(action="add", num=line))
        
            controller.write("      " +courseID+"flag=true\n")
            controller.write("  }\n else {\n")

            for line in lineManager.getCourseLineDict()[courseID]:
                controller.write(formattedStatement.format(action="remove", num=line))
            
            controller.write("      " +courseID+"flag=false\n")
            controller.write("  }\n};\n")

def addPrereqLine(start, end, lineManager, indexJS):
    count = lineManager.getLineCount()
    lineManager.intializeCourse(start)
    lineManager.intializeCourse(end)
    indexJS.write("var line" + 
                     str(count) + 
                     " = new Line(" +
                    "\"" + start +  "\"" + 
                     ", " +
                    "\"" + end +  "\"" + 
                     ", false);\n")
    addGetter(count, indexJS)
    lineManager.addLinetoCourse(start, count)
    lineManager.addLinetoCourse(end, count)
    lineManager.setLineCount(count+1)
    

def addCoreqLine(start, end, lineManager, indexJS):
    count = lineManager.getLineCount()
    lineManager.intializeCourse(start)
    lineManager.intializeCourse(end)
    indexJS.write("var line" + 
                     str(count) + 
                    " = new Line(" +
                    "\"" + start +  "\"" + 
                     ", " +
                    "\"" + end +  "\"" + 
                     ", true);\n")
    addGetter(count, indexJS)
    lineManager.addLinetoCourse(start, count)
    lineManager.addLinetoCourse(end, count)
    lineManager.setLineCount(count+1)

def addGetter(num, indexJS):
    formattedFunction = """function getLine{number}() {{
        return line{number}
    }};\n"""
    indexJS.write(formattedFunction.format(number=num))


