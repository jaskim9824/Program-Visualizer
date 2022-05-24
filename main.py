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
                                                  "value": plan})
        labelTag = soup.new_tag("label", attrs={"for":plan})
        breakTag = soup.new_tag("br")
        labelTag.append(plan)
        formTag.append(radioInput)
        formTag.append(labelTag)
        formTag.append(breakTag)

# Function that places the outer divs representing each plan
# Parameters:
#   displayTag - HTML div where plan sequences are placed
#   sequenceDict - dict of the different plan seq
#   soup - soup object
#   courseDict - dict of course info (this is what is parsed from Excel!)
def placePlanDivs(displayTag, sequenceDict, soup, courseDict):
    for plan in sequenceDict:
        switchInput = soup.new_tag("div", attrs={"id":plan,
                                                 "ng-switch-when":plan})
        placeTermsDivs(switchInput, sequenceDict[plan], soup, courseDict)
        displayTag.append(switchInput)

def placeTermsDivs(planTag, planDict, soup, courseDict):
    for term in planDict:
        termDiv = soup.new_tag("div", class_="term")
        termHeader = soup.new_tag("h3", class_="termheader")
        termHeader.append(term)
        termDiv.append(termHeader)
        placeCourses(termDiv, planDict[term], soup, courseDict)
        planTag.append(termDiv)

def placeCourses(termTag, termList, soup, courseDict):
    for course in termList:
        courseDiv = soup.new_tag("div", class_="coursecontainer")
        courseInfo = soup.new_tag("div", class_="courseinfo")
        courseInfo.append(course.course_description)
        courseDiv.append(courseInfo)
        
        courseHeader = soup.new_tag("div", class_="course")
        courseTitle = soup.new_tag("h3", class_="embed")
        courseTitle.append(course.name)
        courseHeader.append(courseTitle)

        termTag.append(courseHeader)
        termTag.append(courseDiv)

def main ():
    #opening the template html file and constructing html
    #note: here we calling parsing to extract the course data!
    try:
        with open("template.html") as input:
            # deriving parsed html
            soup = BeautifulSoup(input, 'html.parser')
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

            # test radio sequence
            testPlanseq = {"PlanA":1, "PlanB":2, "PlanC":3, "PlanD":4}
            placeRadioInputs(formTag, testPlanseq, soup)

            # locating display tag, this is where the course divs will be written
            displayTag = mainTag.find("div", class_="display")

            # print("Display")
            # print(displayTag)

            placePlanDivs(displayTag, sequenceDict, soup, courseDict)
    #TO DO: improve expection handling here
    except:
        print("Exception raised")
    #writing output to an output html
    try:
        with open("template-output.html", "w") as output:
            output.write(str(soup))
    #TO DO: improve expection handling here
    except:
        print("Exception raised")
        
if __name__ == "__main__":
    main()