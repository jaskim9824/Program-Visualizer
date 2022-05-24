from bs4 import BeautifulSoup
from parsing import parse

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
                                                  "value": plan.strip().replace(" ","")})
        labelTag = soup.new_tag("label", attrs={"for":plan.strip().replace(" ", "")})
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
        controller.write("this." + plan.strip().replace(" ", "") + "List = [];\n")

    controller.write("""this.disable = function(plan) {
switch (plan) { \n""")

    formattedSwitchStatement = """  case "{planName}": 
    for (let i = 0; i < this.{planName}List.length; i++) {{
        this.{planName}List[i][0].{action}();
    }}
    break; \n"""

    for plan in sequenceDict:
        controller.write(formattedSwitchStatement.format(planName=plan.strip().replace(" ",""), action="hide"))
    
    controller.write("""    default:
    console.log("shouldn't be here");
    }
};\n""")

    controller.write("""this.enable = function(plan) {
switch (plan) { \n""")

    for plan in sequenceDict:
        controller.write(formattedSwitchStatement.format(planName=plan.strip().replace(" ", ""), action="show"))

    controller.write("""    default:
    console.log("shouldn't be here");
    }
};\n""")

def closeControllerJavaScript(controller):
    controller.write("});")
    controller.close()

# Function that places the outer divs representing each plan
# Parameters:
#   displayTag - HTML div where plan sequences are placed
#   sequenceDict - dict of the different plan seq
#   soup - soup object
#   courseDict - dict of course info (this is what is parsed from Excel!)
def placePlanDivs(displayTag, sequenceDict, soup, courseDict):
    for plan in sequenceDict:
        switchInput = soup.new_tag("div", attrs={"id":plan.strip().replace(" ",""),
                                                 "ng-switch-when":plan.strip().replace(" ","")})
        placeTermsDivs(switchInput, sequenceDict[plan], soup, courseDict)
        displayTag.append(switchInput)

def placeTermsDivs(planTag, planDict, soup, courseDict):
    for term in planDict:
        termDiv = soup.new_tag("div", attrs={"class":"term"})
        termHeader = soup.new_tag("h3", attrs={"class":"termheader"})
        termHeader.append(term)
        termDiv.append(termHeader)
        placeCourses(termDiv, planDict[term], soup, courseDict)
        planTag.append(termDiv)

def placeCourses(termTag, termList, soup, courseDict):
    for course in termList:
        

        courseContDiv = soup.new_tag("div", class_="coursecontainer")
        courseInfo = soup.new_tag("div", class_="courseinfo")
        courseDisc = soup.new_tag("p")
        courseDisc.append(course.course_description)
        #courseDisc.append("\{\{"+course+"courseinfo\}\}")
        courseDiv = soup.new_tag("div", attrs= {"class":"course", "id": course.name, "ng-click":"\{\{"+course.name+"Listener()\}\}" })
        courseHeader = soup.new_tag("h3", class_="embed")
        courseHeader.append(course.name)
        courseInfo.append(courseDisc)
        courseDiv.append(courseHeader)
        courseContDiv.append(courseInfo)
        courseContDiv.append(courseDiv)
        termTag.append(courseContDiv)


def main ():
    #opening the template html file and constructing html
    #note: here we calling parsing to extract the course data!
    #try:
        with open("template.html") as input:
            # deriving parsed html
            soup = BeautifulSoup(input, 'html.parser')
            controller = open("controller.js", "w")
            #locating main div, this is where all the html will be written
            mainTag = soup.body.find("div", id="main")
            # print("Main")
            # print(mainTag)

            # locating form tag
            formTag = mainTag.find("form")
            # print("Form")
            # print(formTag)

            # parsing the excel files with course info and sequencing
            sequenceDict, courseDict = parse("parsed.json")
            firstPlan = list(sequenceDict.keys())[0].strip().replace(" ","")
            intializeControllerJavaScript(firstPlan, controller)
            generatePlanBasedControllerJavascript(sequenceDict, controller)
            placeRadioInputs(formTag, sequenceDict, soup)
            closeControllerJavaScript(controller)

            # locating display tag, this is where the course divs will be written
            displayTag = mainTag.find("div", class_="display")

            # print("Display")
            # print(displayTag)

            placePlanDivs(displayTag, sequenceDict, soup, courseDict)
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