from bs4 import BeautifulSoup
from parsing import parse

class LineManager:
    def __init__(self) -> None:
        # Dict that maps the lines to the courses that 'own' them
        self.courseLineDict = {}

        # Count of lines generated
        self.lineCount = 0
    
    def addLinetoCourse(self, course, line):
        self.courseLineDict[course].append(line)
    
    def intializeCourse(self, course):
        if course not in self.courseLineDict:
            self.courseLineDict[course] = []
        return

    def getCourseLineDict(self):
        return self.courseLineDict

    def getLineCount(self):
        return self.lineCount

    def setLineCount(self, count):
        self.lineCount = count

#Strips all non alphanumeric characters from a string
#Source:
#https://www.delftstack.com/howto/python/remove-non-alphanumeric-characters-python/
# #use-the-isalnum-method-to-remove-all-non-alphanumeric-characters-in-python-string
def cleanString(string):
    return ''.join(ch for ch in string if ch.isalnum())

# Function that places the radio inputs into the form
# Parameters:
#   formTag - form HTML tag where inputs will be placed
#   sequenceDict - dict of the different plan seq
#   soup - soup object
# TO DO: add some error handling to this function
def placeRadioInputs(formTag, sequenceDict, soup):
    for plan in sequenceDict:
        radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":"planselector", 
                                                  "ng-model":"selectedPlan",
                                                  "value": cleanString(plan)})
        labelTag = soup.new_tag("label", attrs={"for":cleanString(plan)})
        breakTag = soup.new_tag("br")
        labelTag.append(plan)
        formTag.append(radioInput)
        formTag.append(labelTag)
        formTag.append(breakTag)

def intializeControllerJavaScript(firstPlan, controller):
    controller.write("var app = angular.module(\"main\", []);\n")
    controller.write("app.controller(\"main\", function($scope) { \n")
    controller.write("$scope.selectedPlan = \"" + firstPlan + "\";\n")
    controller.write("var that = this;\n")
    controller.write("this.previousPlan = $scope.selectedPlan;\n")

    controller.write("""this.render = function(plan) {
            this.disable(this.previousPlan);
            this.enable(plan);
            this.previousPlan = plan;
};\n""")

    controller.write("""var radios = document.querySelectorAll("input[type=radio][name=planselector");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () {
        that.render($scope.selectedPlan);
    });
});\n""")

def generatePlanBasedControllerJavascript(sequenceDict, controller):
    for plan in sequenceDict:
        controller.write("this." + cleanString(plan) + "List = [];\n")

    formattedFunctionStatement1 = """this.{functionName} = function(plan) {{
    switch (plan) {{ \n"""
    
    formattedSwitchStatement1 = """  case "{planName}": 
    for (let i = 0; i < this.{planName}List.length; i++) {{
        this.{planName}List[i][0].{action}();
    }}
    break; \n"""

    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""

    controller.write(formattedFunctionStatement1.format(functionName="disable"))

    for plan in sequenceDict:
        controller.write(formattedSwitchStatement1.format(planName=cleanString(plan), action="hide"))
    
    controller.write(switchEndString)

    controller.write(formattedFunctionStatement1.format(functionName="enable"))

    for plan in sequenceDict:
        controller.write(formattedSwitchStatement1.format(planName=cleanString(plan), action="show"))

    controller.write(switchEndString)

    formattedFunctionStatement2 = """this.{functionName} = function(line) {{
switch($scope.selectedPlan) {{ \n"""

    formattedAddLineSwitchStatement = """ case "{planName}":
    var index = this.{planName}List.findIndex((element) => element[0] == line);
    if (index == -1) {{
        line.show();
        this.{planName}List.push([line, 1])
    }}
    else {{
        this.{planName}List[index][1]++;
    }}
    break;\n"""


    controller.write(formattedFunctionStatement2.format(functionName="addLine"))

    for plan in sequenceDict:
        controller.write(formattedAddLineSwitchStatement.format(planName=cleanString(plan)))
    
    controller.write(switchEndString)

    formmattedDeleteLineSwitchStatement = """ case "{planName}":
    var index = this.{planName}List.findIndex((element) => element[0] == line);
    if (index != -1) {{
        this.{planName}List[index][1]--
        if (this.{planName}List[index][1] <= 0) {{
            line.hide();
            this.{planName}List.splice(index, 1);
        }}
    }}
    break;"""

    controller.write(formattedFunctionStatement2.format(functionName="removeLine"))

    for plan in sequenceDict:
        controller.write(formmattedDeleteLineSwitchStatement.format(planName=cleanString(plan)))

    controller.write(switchEndString)

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
        switchInput = soup.new_tag("div", attrs={"id":cleanString(plan),
                                                 "ng-switch-when":cleanString(plan)})
        placeTermsDivs(switchInput, sequenceDict[plan], soup, courseDict, indexJS, controller, plan, lineManager)
        displayTag.append(switchInput)

def placeTermsDivs(planTag, planDict, soup, courseDict, indexJS, controller, plan, lineManager):
    for term in planDict:
        termDiv = soup.new_tag("div", attrs={"class":"term"})
        termHeader = soup.new_tag("h3", attrs={"class":"termheader"})
        termHeader.append(term)
        termDiv.append(termHeader)
        placeCourses(termDiv, planDict[term], soup, indexJS, controller, plan)
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
                     " = new LeaderLine(" +
                     start +
                     ", " +
                     end + 
                     ", { hide: true });\n")
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
                     " = new LeaderLine(" +
                     start +
                     ", " +
                     end + 
                     ", { hide: true, dashed:true });\n")
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
                    if cleanString(option) in courseList:
                        addPrereqLine(cleanString(option)+cleanString(plan), 
                                      cleanString(course.name)+cleanString(plan), 
                                      lineManager, 
                                      indexJS)
            else:
                addPrereqLine(cleanString(prereq)+cleanString(plan), 
                              cleanString(course.name)+cleanString(plan), 
                              lineManager, 
                              indexJS)
        for coreq in course.coreqs:
             # OR CASE
            if len(coreq.split()) > 1:
                newCoReqString = coreq.replace(" or ", " ")
                for option in newCoReqString.split():
                    if cleanString(option) in courseList:
                        addCoreqLine(cleanString(option)+cleanString(plan), 
                                     cleanString(course.name)+cleanString(plan), 
                                     lineManager, 
                                     indexJS)
            else:
                addCoreqLine(cleanString(coreq)+cleanString(plan), 
                             cleanString(course.name)+cleanString(plan), 
                             lineManager, 
                             indexJS)

def placeClickListeners(courseList, controller, lineManager, plan):
    formattedListener = "$scope.{courseName}Listener = function () {{\n"
    formattedIf = " if (!{courseName}flag) {{\n"
    formattedStatement = "      that.{action}Line(getLine{num}());\n"
    for course in courseList:
        if cleanString(course.name)+cleanString(plan) in lineManager.getCourseLineDict():
            controller.write(formattedListener.format(courseName = cleanString(course.name)+cleanString(plan)))
            controller.write(formattedIf.format(courseName = cleanString(course.name)+cleanString(plan)))
            for line in lineManager.getCourseLineDict()[cleanString(course.name)+cleanString(plan)]:
                controller.write(formattedStatement.format(action="add", num=line))
            controller.write("      " +cleanString(course.name)+cleanString(plan)+"flag=true\n")
            controller.write("  }\n else {\n")
            for line in lineManager.getCourseLineDict()[cleanString(course.name)+cleanString(plan)]:
                controller.write(formattedStatement.format(action="remove", num=line))
            controller.write("      " +cleanString(course.name)+cleanString(plan)+"flag=false\n")
            controller.write("  }\n};\n")





def placeCourses(termTag, termList, soup, indexJS, controller, plan):
    for course in termList:

        courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer"})
        #courseDisc.append("\{\{"+course.name.strip().replace(" ","")+"courseinfo\}\}")
        if course.name == "Complementary Elective":
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip compelective", 
                                               "id": cleanString(course.name)+cleanString(plan), 
                                               "ng-click":cleanString(course.name)+cleanString(plan)+"Listener()" })
        elif course.name == "Program/Technical Elective":
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip progelective", 
                                               "id": cleanString(course.name)+cleanString(plan), 
                                               "ng-click":cleanString(course.name)+cleanString(plan)+"Listener()" })
        else:
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip", 
                                                "id": cleanString(course.name)+cleanString(plan), 
                                                "ng-click":cleanString(course.name)+cleanString(plan)+"Listener()" })
        courseDisc = soup.new_tag("p", attrs={"class":"tooltiptext"})
        courseDisc.append(course.course_description)
        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
        courseHeader.append(course.name)
        courseDiv.append(courseHeader)
        courseDiv.append(courseDisc)
        courseContDiv.append(courseDiv)
        termTag.append(courseContDiv)
        controller.write("  var " + 
                         cleanString(course.name) + 
                         cleanString(plan) +
                         "flag = false;\n")
        indexJS.write("var " + 
                      cleanString(course.name) + 
                      cleanString(plan) +
                      " = document.getElementById(\"" + 
                      cleanString(course.name) + 
                      cleanString(plan) + 
                      "\");\n")

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


def main ():
    #opening the template html file and constructing html
    #note: here we calling parsing to extract the course data!
    #try:
        with open("template.html") as input:
            # deriving parsed html
            soup = BeautifulSoup(input, 'html.parser')

            # opening the JS files
            controller = open("controller.js", "w")
            indexJS = open("index.js", "w")

            lineManager = LineManager()

            # parsing the excel files with course info and sequencing
            sequenceDict, courseDict = parse("parsed.json")
            #debug(sequenceDict)

            # generating intital JS based on the number and names of plans
            firstPlan = cleanString(list(sequenceDict.keys())[0])
            intializeControllerJavaScript(firstPlan, controller)
            generatePlanBasedControllerJavascript(sequenceDict, controller)
      
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
        with open("template-output.html", "w") as output:
            output.write(str(soup))
    #TO DO: improve expection handling here
    #except:
        #print("Exception raised")
        
if __name__ == "__main__":
    main()