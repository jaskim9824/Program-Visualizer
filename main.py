# Authors: Jason Kim, Moaz Abdelmonem, Zachary Schmidt
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file is the main script for the generation of the program 
# visualizer. When run, it will use functions defined in the parsing module
# to parse Excel files to generate progamatically an interactive program diagram in
# the output directory

# Dependencies: bs4, parsing

from bs4 import BeautifulSoup
from parsing import parseInPy
import javascriptinit
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



# Function that places the radio inputs into the form
# Parameters:
#   formTag - form HTML tag where inputs will be placed
#   sequenceDict - dict of the different plan seq
#   soup - soup object
def placeRadioInputs(formTag, sequenceDict, soup):
    for plan in sequenceDict:
        radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":"planselector", 
                                                  "ng-model":"selectedPlan",
                                                  "value": cleaner.cleanString(plan)})
        labelTag = soup.new_tag("label", attrs={"for":cleaner.cleanString(plan)})
        breakTag = soup.new_tag("br")
        labelTag.append(plan)
        formTag.append(radioInput)
        formTag.append(labelTag)
        formTag.append(breakTag)


def closeControllerJavaScript(controller):
    controller.write("});")
    controller.close()

# Function that places the outer divs representing each plan
# Parameters:
#   displayTag - HTML div where plan sequences are placed
#   sequenceDict - dict of the different plan seq
#   soup - soup object
#   courseDict - dict of course info (this is what is parsed from Excel!)
def placePlanDivs(displayTag, sequenceDict, soup, courseDict, indexJS, controller, lineManager):

    for plan in sequenceDict:
        switchInput = soup.new_tag("div", attrs={"id":cleaner.cleanString(plan),
                                                 "ng-switch-when":cleaner.cleanString(plan)})
        widthOfPlan = 210 * len(sequenceDict[plan].keys()) + 60
        switchInput['width'] = str(widthOfPlan) +"px"
        placeTermsDivs(switchInput, sequenceDict[plan], soup, courseDict, indexJS, controller, plan, lineManager)
        displayTag.append(switchInput)

def placeTermsDivs(planTag, planDict, soup, courseDict, indexJS, controller, plan, lineManager):
    for term in planDict:
        termDiv = soup.new_tag("div", attrs={"class":"term"})
        termHeader = soup.new_tag("h3", attrs={"class":"termheader"})
        termHeader.append(term)
        termDiv.append(termHeader)
        placeCourses(termDiv, planDict[term], soup, controller, plan)
        planTag.append(termDiv)
    courseList = []
    for courses in planDict.values():
        courseList += courses
    # print(plan)
    # for course in courseList:
    #     print(course.name)
    # print("\n")
    placeLines(courseList, indexJS, lineManager, plan)
    placeClickListeners(courseList, controller, lineManager, plan)

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

def placeLines(courseList, indexJS, lineManager, plan):
    for course in courseList:
        for prereq in course.prereqs:
            # OR CASE
            if len(prereq.split()) > 1:
                newPreReqString = prereq.replace(" or ", " ")
                for option in newPreReqString.split():
                    if cleaner.cleanString(option) in cleaner.cleanCourseList(courseList):
                        addPrereqLine(cleaner.cleanString(option)+cleaner.cleanString(plan), 
                                      cleaner.cleanString(course.name)+cleaner.cleanString(plan), 
                                      lineManager, 
                                      indexJS)
            else:
                if cleaner.cleanString(prereq) in cleaner.cleanCourseList(courseList):
                    addPrereqLine(cleaner.cleanString(prereq)+cleaner.cleanString(plan), 
                              cleaner.cleanString(course.name)+cleaner.cleanString(plan), 
                              lineManager, 
                              indexJS)
        for coreq in course.coreqs:
             # OR CASE
            if len(coreq.split()) > 1:
                newCoReqString = coreq.replace(" or ", " ")
                for option in newCoReqString.split():
                    if cleaner.cleanString(option) in cleaner.cleanCourseList(courseList):
                        addCoreqLine(cleaner.cleanString(option)+cleaner.cleanString(plan), 
                                     cleaner.cleanString(course.name)+cleaner.cleanString(plan), 
                                     lineManager, 
                                     indexJS)
            else:
                if cleaner.cleanString(coreq) in cleaner.cleanCourseList(courseList):
                    addCoreqLine(cleaner.cleanString(coreq)+cleaner.cleanString(plan), 
                             cleaner.cleanString(course.name)+cleaner.cleanString(plan), 
                             lineManager, 
                             indexJS)

def placeClickListeners(courseList, controller, lineManager, plan):
    formattedListener = "$scope.{courseName}Listener = function () {{\n"
    formattedIf = " if (!{courseName}flag) {{\n"
    formattedStatement = "      that.{action}Line(getLine{num}());\n"
    for course in courseList:
        if cleaner.cleanString(course.name)+cleaner.cleanString(plan) in lineManager.getCourseLineDict():
            controller.write(formattedListener.format(courseName = cleaner.cleanString(course.name)+cleaner.cleanString(plan)))
            controller.write(formattedIf.format(courseName = cleaner.cleanString(course.name)+cleaner.cleanString(plan)))
            for line in lineManager.getCourseLineDict()[cleaner.cleanString(course.name)+cleaner.cleanString(plan)]:
                controller.write(formattedStatement.format(action="add", num=line))
            controller.write("      " +cleaner.cleanString(course.name)+cleaner.cleanString(plan)+"flag=true\n")
            controller.write("  }\n else {\n")
            for line in lineManager.getCourseLineDict()[cleaner.cleanString(course.name)+cleaner.cleanString(plan)]:
                controller.write(formattedStatement.format(action="remove", num=line))
            controller.write("      " +cleaner.cleanString(course.name)+cleaner.cleanString(plan)+"flag=false\n")
            controller.write("  }\n};\n")


def placeCourses(termTag, termList, soup, controller, plan):
    for course in termList:

        courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer"})
        #courseDisc.append("\{\{"+course.name.strip().replace(" ","")+"courseinfo\}\}")
        if course.name == "Complementary Elective":
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip compelective", 
                                               "id": cleaner.cleanString(course.name)+cleaner.cleanString(plan), 
                                               "ng-click":cleaner.cleanString(course.name)+cleaner.cleanString(plan)+"Listener()" })
        elif course.name == "Program/Technical Elective":
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip progelective", 
                                               "id": cleaner.cleanString(course.name)+cleaner.cleanString(plan), 
                                               "ng-click":cleaner.cleanString(course.name)+cleaner.cleanString(plan)+"Listener()" })
        else:
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip", 
                                                "id": cleaner.cleanString(course.name)+cleaner.cleanString(plan), 
                                                "ng-click":cleaner.cleanString(course.name)+cleaner.cleanString(plan)+"Listener()" })
        courseDisc = soup.new_tag("p", attrs={"class":"tooltiptext"})
        courseDisc.append(course.course_description)
        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
        courseHeader.append(course.name)
        courseDiv.append(courseHeader)
        courseDiv.append(courseDisc)
        courseContDiv.append(courseDiv)
        termTag.append(courseContDiv)
        controller.write("  var " + 
                         cleaner.cleanString(course.name) + 
                         cleaner.cleanString(plan) +
                         "flag = false;\n")

#Debug function for cleanly printing contents of sequences
def debug(sequenceDict):
    for plan in sequenceDict:
        print(plan)
        for term in sequenceDict[plan]:
            print(term)
            for course in sequenceDict[plan][term]:
                print(course.name)
            print("\n")
        print("\n")
    
def main():
    #opening the template html file and constructing html
    #note: here we calling parsing to extract the course data!
    #try:  
        with open("template.html") as input:
            # deriving parsed html
            soup = BeautifulSoup(input, 'html.parser')

            # opening the JS files
            controller = open("./output/js/controller.js", "w")
            indexJS = open("./output/js/index.js", "w")

            lineManager = LineManager()

            # parsing the excel files with course info and sequencing
            sequenceDict, courseDict = parseInPy("Courses.xls")
            #debug(sequenceDict)

            # generating intital JS based on the number and names of plans
            javascriptinit.intializeControllerJavaScript(controller, sequenceDict)
      
            #locating main div, this is where all the html will be written
            mainTag = soup.body.find("div", id="main")
            # locating form tag
            formTag = mainTag.find("form")
            # locating display tag, this is where the course divs will be written
            displayTag = mainTag.find("div", class_="display")

            #TO DO: adjust width and height of display and header tag based on sequence

            #placing the HTML and generating JS based on the courses (drawing lines)
            placeRadioInputs(formTag, sequenceDict, soup)
            placePlanDivs(displayTag, sequenceDict, soup, courseDict, indexJS, controller, lineManager)
            closeControllerJavaScript(controller)
            indexJS.close()
           


    #TO DO: improve expection handling here
    #except:
        #print("Exception raised")
    #writing output to an output html
    #try:
        with open("./output/index.html", "w") as output:
            output.write(str(soup))
    #TO DO: improve expection handling here
    #except:
        #print("Exception raised")
        
if __name__ == "__main__":
    main()