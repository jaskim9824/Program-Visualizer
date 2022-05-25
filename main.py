from bs4 import BeautifulSoup
from parsing import parse

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

    controller.write("""this.disable = function(plan) {
switch (plan) { \n""")

    formattedSwitchStatement = """  case "{planName}": 
    for (let i = 0; i < this.{planName}List.length; i++) {{
        this.{planName}List[i][0].{action}();
    }}
    break; \n"""

    for plan in sequenceDict:
        controller.write(formattedSwitchStatement.format(planName=cleanString(plan), action="hide"))
    
    controller.write("""    default:
    console.log("shouldn't be here");
    }
};\n""")

    controller.write("""this.enable = function(plan) {
switch (plan) { \n""")

    for plan in sequenceDict:
        controller.write(formattedSwitchStatement.format(planName=cleanString(plan), action="show"))

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
        switchInput = soup.new_tag("div", attrs={"id":cleanString(plan),
                                                 "ng-switch-when":cleanString(plan)})
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
        #####ORIGINALLY#########
        # courseContDiv = soup.new_tag("div", class_="coursecontainer")
        # courseInfo = soup.new_tag("div", class_="courseinfo")
        # courseDisc = soup.new_tag("p")
        # courseDisc.append(course.course_description)
        # #courseDisc.append("\{\{"+course.name.strip().replace(" ","")+"courseinfo\}\}")
        # courseDiv = soup.new_tag("div", attrs= {"class":"course", "id": course.name, "ng-click":"\{\{"+course.name.strip().replace(" ", "")+"Listener()\}\}" })
        # courseHeader = soup.new_tag("h3", class_="embed")
        # courseHeader.append(course.name)
        # courseInfo.append(courseDisc)
        # courseDiv.append(courseHeader)
        # courseContDiv.append(courseInfo)
        # courseContDiv.append(courseDiv)
        # termTag.append(courseContDiv)

        courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer"})
        #courseDisc.append("\{\{"+course.name.strip().replace(" ","")+"courseinfo\}\}")
        courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip", "id": course.name, "ng-click":"\{\{"+course.name.strip().replace(" ", "")+"Listener()\}\}" })
        courseDisc = soup.new_tag("p", attrs={"class":"tooltiptext"})
        courseDisc.append(course.course_description)
        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
        courseHeader.append(course.name)
        courseDiv.append(courseHeader)
        courseDiv.append(courseDisc)
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
            firstPlan = cleanString(list(sequenceDict.keys())[0])
            intializeControllerJavaScript(firstPlan, controller)
            generatePlanBasedControllerJavascript(sequenceDict, controller)
            placeRadioInputs(formTag, sequenceDict, soup)
            closeControllerJavaScript(controller)

            # locating display tag, this is where the course divs will be written
            displayTag = mainTag.find("div", class_="display")

            #TO DO: adjust width and height of display and header tag based on sequence

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