# Authors: Jason Kim, Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions needed to generate the required
# HTML elements to produce the MEC E Program Visualizer webpage

# Dependencies: cleaner, linegen, html

from .. import cleaner
from . import linegen
import html

def findIntitalValuesofCourseGroups(courseGroupDict, courseGroupList):
    intitalSelectionGroups = list(courseGroupDict.values())[0]
    intitalCourseGroupVals = {}
    for element in courseGroupList:
        if element not in intitalSelectionGroups:
            intitalCourseGroupVals[element] = ""
        else:
            intitalCourseGroupVals[element] = str(element) + "A"
    return intitalCourseGroupVals

def findListofAllCourseGroups(courseGroupDict):
    currentList = []
    for plan in courseGroupDict:
        for element in courseGroupDict[plan]:
            if element not in currentList:
                currentList.append(element)
    return currentList

def extractPlanCourseGroupDict(sequnceDict):
    planCourseGroupDict = {}
    for plan in sequnceDict:
        index = plan.find("{")
        if index != -1:
            shortenedPlanName = plan[0:index].strip()
        else:
            shortenedPlanName = plan
        if shortenedPlanName in planCourseGroupDict:
            continue
        courseGroupList = extractListofCourseGroups(plan)
        planCourseGroupDict[shortenedPlanName] = courseGroupList
    return planCourseGroupDict
            

def extractListofCourseGroups(planName):
    courseGroupList = []
    index = planName.find("{")
    if index == -1:
        return courseGroupList
    endIndex = planName.find("}")
    courseGroupString = planName[index+1:endIndex]
    for char in courseGroupString:
        if char.isdigit() and int(char) not in courseGroupList:
            courseGroupList.append(int(char))
    return courseGroupList
                 

# Changes the header title to include deptName, which is pulled
# from Sequncing Excel file
# Parameters:
#   titleTag - "site-title" HTML tag at the top of the page
#   deptName - department name pulled from Sequencing Excel file
def switchTitle(titleTag, deptName):
    titleTag.append(deptName + " Program Plan Visualizer")

# Function that places the radio inputs into the form which controls
# which plan is currently selected on the webpage
# Parameters:
#   formTag - form HTML tag where the inputs will be placed
#   courseGroupDict - dict that maps the plans to the course groups in it
#   soup - soup object, used to create HTML tags
def placeRadioInputs(formTag, courseGroupDict, soup):
    for plan in courseGroupDict:
        radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":"planselector", 
                                                  "ng-model":"selectedPlan",
                                                  "value": cleaner.cleanString(plan),
                                                  "id": cleaner.cleanString(plan)})
        labelTag = soup.new_tag("label", attrs={"for":cleaner.cleanString(plan)})
        labelTag.append(plan)
        formTag.append(radioInput)
        formTag.append(labelTag)
        breakTag = soup.new_tag("br")
        formTag.append(breakTag)

# Places the legend for the categories of courses (math, basic sciences, design, etc.)
# Pulls the categories and colors from sequenceDict, which has these values as two of
# its attributes
# Parameters:
#   legendTag - HTML tag representing div which holds the category color legend
#   categoryDict - dict mapping category to colour
#   soup - soup object, used to create HTML tags
def placeLegend(legendTag, categoryDict, soup):
    placeLegendDescription(soup, legendTag)
    placeLegendButtons(soup, legendTag, categoryDict)
 
# Function that places the legend description
# Parameters:
#   soup - soup object used to create HTML tags
#   legendTag - HTML tag representing legend
def placeLegendDescription(soup, legendTag):
    legendDescription = soup.new_tag("b", attrs={"class":"legenddescription"})
    legendDescription.append("Click on a Category Below to Highlight all Courses in that Category")
    legendTag.append(legendDescription)

# Function that places down the legend buttons
# Parameters:
#   soup - soup object used to create HTML tags
#   legendTag - HTML tag representing legend
#   categoryDict - dict mapping categories to colours
def placeLegendButtons(soup, legendTag, categoryDict):
    legendBoxes = soup.new_tag("div", attrs={"class":"legendboxes"})
    for category in categoryDict:
        coursecat = placeLegendButton(soup, cleaner.cleanString(category), categoryDict[category])
        coursecat.append(category)
        legendBoxes.append(coursecat)
    legendTag.append(legendBoxes)

# Function that places down a legend button
# Parameters:
#   soup - soup object used to create HTML tags
#   category - category of button
#   colour - colour of category
def placeLegendButton(soup, category, colour):
    return soup.new_tag("div", attrs={"ng-click":category+ "clickListener()", 
                                        "class":"legendbutton",
                                        "id": cleaner.cleanString(category),
                                        "style":"background-color:#" + colour})


# Function that places the outer divs representing each plan
# Parameters:
#   displayTag - HTML tag representing outer display div where the different plan sequences are placed
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   soup - soup object, used to create HTML tags
#   indexJS - file handle for index.js, used to write to index.js
#   controller - file handle for controller.js, used to write to controller.js
#   lineManager - line manager object, used to handle line placement and generation
def placePlanDivs(displayTag, sequenceDict, soup, indexJS, controller, lineManager):
    for plan in sequenceDict:
        switchInput = soup.new_tag("div", attrs={"id":cleaner.cleanString(plan),
                                                 "ng-switch-when":cleaner.cleanString(plan),
                                                 "style":"height:fit-content; display:flex; flex-direction:row; flex-wrap:column;"})
        placeTermsDivs(switchInput, sequenceDict[plan], soup, indexJS, controller, plan, lineManager)
        displayTag.append(switchInput)

# Function that places the column divs which represent the terms within a certain plan
# Parameters:
#   planTag - HTML tag representing the plan sequence in question
#   planDict - dict that maps a course list to each term in the plan
#   soup - soup object, used to create HTML tags
#   indexJS - file handle for index.js, used to write to index.js
#   controller - file handle for controller.js, used to write to controller.js
#   plan - name of plan whose terms are being placed
#   lineManager - line manager object, used to handle line placement and generation
def placeTermsDivs(planTag, planDict, soup, indexJS, controller, plan, lineManager):
    # count of amount of term columns placed in the plan
    termcounter = 0
    # count of amount of ITS electives placed in the plan
    itscounter = 0
    # count of amount of program electives placed in the plan
    progcounter = 0
    # count of amount of comp electives placed in the plan
    compcounter = 0
    for term in planDict:
        termDiv = soup.new_tag("div", attrs={"class":"term"})
        termHeader = soup.new_tag("h3", attrs={"class":"termheader"})
        termHeader.append(term)
        termDiv.append(termHeader)
        compcounter, progcounter, itscounter = placeCourses(termDiv, 
                                                            planDict[term], 
                                                            soup, 
                                                            controller, 
                                                            plan, 
                                                            termcounter,
                                                            compcounter,
                                                            progcounter,
                                                            itscounter)
        planTag.append(termDiv)
        termcounter += 1
    # generating a list of all courses taken in this plan
    courseList = []
    for courses in planDict.values():
        courseList += courses
    # placing lines and click listeners for this plan
    linegen.placeLines(courseList, indexJS, lineManager, plan)
    linegen.placeClickListeners(courseList, controller, lineManager, plan)
    linegen.placeRightClickListeners(courseList, controller, plan)

# Function that places the course divs within a certain term column of a certain plan
# Parameters:
#   termTag - HTML tag representing the specfic term column in question
#   termList - list of courses being taken that term
#   soup - soup object, used to create HTML tags
#   controller - file handle for controller.js, used to write to controller.js
#   plan - name of plan whose terms are being placed
#   termcounter - which term is currently being placed (int)
#   compcounter - number of comp electives that have been placed for this plan
#   progcounter - number of program electives that have been placed for this plan
#   itscoutner - number of its electives that have been placed for this plan
# Returns:
#   compcounter, progcounter, itscounter 
def placeCourses(termTag, termList, soup, controller, plan, termcounter, compcounter, progcounter, itscounter):
    orCounter = 0
    for course in termList:
        courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan)
        courseContClass = course.category.replace(" ", "")
        orCase = course.calendar_print.lower().strip() == "or"

        # In the case of an OR case in a sequence
        if orCase:
            courseContDiv = soup.new_tag("div", attrs={"class":"orcoursecontainer"})
        else:
            courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer"})

        # Prevent tooltip from being off screen
        if termcounter < 4:
            courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                    "class":"tooltiptextright",
                                                    "ng-click":"$event.stopPropagation()"})
        else:
            courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                    "class":"tooltiptextleft",
                                                    "ng-click":"$event.stopPropagation()"})

        # Constructing course div, check for special cases
        if course.name == "Complementary Elective":
            # Class allows formatting so words fit in course box
            courseID = courseID+str(compcounter)
            courseDiv = createCourseDiv(soup, courseID, "COMP", orCounter, orCase)
            # id must include which number elective it is (electiveName0, electiveName1, electiveName2, ...)
            courseDisc["id"] = courseDisc["id"][:-4] + str(compcounter) + "desc"
            compcounter += 1
            courseDisc
            formatCourseDescriptionForElective(soup, course, courseDisc)

        elif course.name == "Program/Technical Elective":
            # Class allows formatting so words fit in course box
            courseID = courseID+str(progcounter)
            courseDiv = createCourseDiv(soup, courseID, "PROG", orCounter, orCase)
            # id must include which number elective it is (electiveName0, electiveName1, electiveName2, ...)
            courseDisc["id"] = courseDisc["id"][:-4] + str(progcounter) + "desc"
            progcounter += 1
            formatCourseDescriptionForElective(soup, course, courseDisc)

        elif course.name == "ITS Elective":
            courseID = courseID+str(itscounter)
            # Class allows formatting so words fit in course box
            courseDiv = createCourseDiv(soup, courseID, "ITS", orCounter, orCase)
            # id must include which number elective it is (electiveName0, electiveName1, electiveName2, ...)
            courseDisc["id"] = courseDisc["id"][:-4] + str(itscounter) + "desc"
            itscounter += 1
            formatCourseDescriptionForElective(soup, course, courseDisc)

        else:
            # This is a regular course. All information should be available
            courseDiv = createCourseDiv(soup, 
                                        courseID, 
                                        courseContClass, 
                                        orCounter, 
                                        orCase) 
            formatCourseDescriptionForRegular(soup, course, courseDisc)

        # text appearing in course box (eg: CHEM 103)
        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})  
        courseHeader.append(course.name)

        courseDiv.append(courseHeader)
        courseDiv.append(courseDisc)

        if orCase:
            # This course is one of two options (eg: ENG M 310 or ENG M 401)
            if orCounter == 0:
                # this first of two options
                firstCourseDiv = courseDiv   # save the courseDiv which we access on the next iteration
                orCounter += 1
                writeFlagsAndVariables(controller, courseID)
                continue
            else:
                # the second of two options
                courseContDiv.append(firstCourseDiv)  # appending the first course option we saved from last iteration
                courseOr = soup.new_tag("p", attrs={"class":"ortext"})
                courseOr.append("OR")  # add the word or between course boxes
                courseContDiv.append(courseOr)
                orCounter = 0

        courseContDiv.append(courseDiv) 
        termTag.append(courseContDiv)
        writeFlagsAndVariables(controller, courseID)
    
    return compcounter, progcounter, itscounter

# Function that constructs a course div for a specific course
# Parameters:
#   - soup: soup object used to create HTML tags
#   - courseID: ID of course
#   - category: category of course
#   - orCounter: counter indicating whether is a top or bottom or
#   - orBool: flag indicating an or case
def createCourseDiv(soup, courseID, category, orCounter, orBool):
    if orBool:
        if orCounter == 0:
            return soup.new_tag("div", attrs={"class":"orcoursetop tooltip " + category,
                                                "id": courseID,
                                                "ng-click":courseID+"Listener()",
                                                "ng-right-click":courseID+"RCListener()"})
        else: 
            return soup.new_tag("div", attrs={"class":"orcoursebottom tooltip " + category,
                                                "id": courseID,
                                                "ng-click":courseID+"Listener()",
                                                "ng-right-click":courseID+"RCListener()"})
    else:
        return soup.new_tag("div",attrs= {"class":"course tooltip " + category, 
                                                "id": courseID, 
                                                "ng-click":courseID+"Listener()",
                                                "ng-right-click":courseID+"RCListener()"})
# Function that writes the flags and variables associated 
# with a course
# Parameters:
#   - controller: file handle to controller.js
#   - courseID: ID for course
def writeFlagsAndVariables(controller, courseID):
    controller.write("  var " + 
                         courseID +
                         "flag = false;\n")
    controller.write("  var " + 
                         courseID +
                         "rflag = false;\n")
    controller.write(" var " + courseID + "Time = new Date().getTime();\n")

# Function that consturcts the course description tooltip for an elective
# Parameters:
#   - soup: soup object used to create HTML tags
#   - course: course object 
#   - courseDisc: course disc HTML tag
def formatCourseDescriptionForElective(soup, course, courseDisc):
    # formatting title in course description
    courseTitle = soup.new_tag("b", attrs={"class":"descriptiontitle"})
    courseTitle.append(course.name)    

    courseLine = soup.new_tag("hr", attrs={"class":"descriptionline"})

    courseDescription = soup.new_tag("p", attrs={"class":"fulldescription"})
    courseDescription.append(course.course_description)
    
    courseDisc.append(courseTitle)
    courseDisc.append(courseLine)
    courseDisc.append(courseDescription)

# Function that consturcts the course description tooltip for a regular course
# Parameters:
#   - soup: soup object used to create HTML tags
#   - course: course object 
#   - courseDisc: course disc HTML tag
def formatCourseDescriptionForRegular(soup, course, courseDisc):
    # formatting title in course description
    courseTitle = soup.new_tag("b", attrs={"class":"descriptiontitle"})
    courseTitle.append(course.name + " - " + course.long_title)

    # adding line seperating title and description
    courseLine = soup.new_tag("hr", attrs={"class":"descriptionline"})

    # adding number of credits
    courseCredits = soup.new_tag("p", attrs={"class":"descriptioncredits"})
    courseCredits.append(html.unescape("&#9733 ") + course.engineering_units + " ")

    # adding fee index
    courseFeeIndex = soup.new_tag("i", attrs={"class":"descriptionfeeindex"})
    courseFeeIndex.append("(" + "fi " + course.calc_fee_index + ")" + " ")

    # adding term avail 
    courseTermAvail = soup.new_tag("p", attrs={"class":"descriptionavailability"})
    courseTermAvail.append("(" + course.duration + ", ")

    # adding alpha hours
    courseAlphaHours = soup.new_tag("p", attrs={"class":"descriptionalphahours"})
    courseAlphaHours.append(course.alpha_hours + ")" + " ")

    # adding desc
    courseDescription = soup.new_tag("p", attrs={"class":"fulldescription"})
    courseDescription.append(course.course_description)

    courseDisc.append(courseTitle)
    courseDisc.append(courseLine)
    courseDisc.append(courseCredits)
    courseDisc.append(courseFeeIndex)
    courseDisc.append(courseTermAvail)
    courseDisc.append(courseAlphaHours)
    courseDisc.append(courseDescription)