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
    # print(intitalSelectionGroups)
    intitalCourseGroupVals = {}
    for element in courseGroupList:
        if element not in intitalSelectionGroups:
            intitalCourseGroupVals[element] = ""
        else:
            intitalCourseGroupVals[element] = intitalSelectionGroups[element][0]
    return intitalCourseGroupVals

def findListofAllCourseGroups(courseGroupDict):
    currentList = []
    for plan in courseGroupDict:
        for element in courseGroupDict[plan]:
            if element not in currentList:
                currentList.append(element)
    return currentList

def extractPlanCourseGroupDict(sequnceDict):
    courseGroupDict = {}
    for plan in sequnceDict:
        index = plan.find("{")
        if index != -1:
            shortenedPlanName = plan[0:index].strip()
        else:
            shortenedPlanName = plan
        if shortenedPlanName not in courseGroupDict:
            courseGroupDict[shortenedPlanName] = {}
        courseGroupList = extractCourseGroupListFromString(plan)
        if courseGroupList == []:
            continue
        planCourseGroupsDict = courseGroupDict[shortenedPlanName]
        courseGroupDict[shortenedPlanName] = appendCourseGroups(planCourseGroupsDict,courseGroupList)
    return courseGroupDict

def appendCourseGroups(planCourseGroupsDict, courseGroupList):
    for group in courseGroupList:
        numOfGroup = int(''.join(filter(lambda s: (s.isdigit()), group)))
        if numOfGroup not in planCourseGroupsDict:
            planCourseGroupsDict[numOfGroup] = []
        if group not in planCourseGroupsDict[numOfGroup]:
            planCourseGroupsDict[numOfGroup].append(group)
    return planCourseGroupsDict

def extractCourseGroupListFromString(planName):
    index = planName.find("{")
    if index == -1:
        return []
    endIndex = planName.find("}")
    return planName[index+1:endIndex].split()
            

# TO DO: Move the above functions to a better module

def generateDisplayDiv(soup, courseGroupList):
    switchVariable = "selectedPlan"
    formattedCourseGroupVar="field{number}.group{number}"
    for element in courseGroupList:
        switchVariable += "+" + formattedCourseGroupVar.format(number=element)
    return soup.new_tag("div", attrs={"class":"display",
                                      "ng-switch":switchVariable})
                 

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

def placeCourseGroupRadioInputs(courseGroupSelectTag, soup, courseGroupDict):
    for plan in courseGroupDict:
        planCourseGroupsTag = soup.new_tag("div", attrs={"id":cleaner.cleanString(plan),
                                                         "ng-switch-when":cleaner.cleanString(plan)})
        placeCourseGroupRadioInputsForPlan(planCourseGroupsTag, soup, courseGroupDict[plan])
        courseGroupSelectTag.append(planCourseGroupsTag)

def placeCourseGroupRadioInputsForPlan(planCourseGroupsTag, soup, planCourseGroupDict):
    for subplan in planCourseGroupDict:
        formTag = soup.new_tag("form", class_="select")
        placeCourseGroupRadioInputsForSubPlan(formTag, soup, planCourseGroupDict[subplan], subplan)
        planCourseGroupsTag.append(formTag)

def placeCourseGroupRadioInputsForSubPlan(subPlanTag, soup, subPlanOptionList, subplan):
    formattedSubPlanVar = "field{number}.group{number}"
    for option in subPlanOptionList:
        inputTag = soup.new_tag("input", attrs={"type":"radio",
                                                "ng-model":formattedSubPlanVar.format(number=subplan),
                                                "value":option,
                                                "ng-change":"globalSubGroupChange()"})
        labelTag = soup.new_tag("label", attrs={"for":option})
        labelTag.append(option)
        subPlanTag.append(inputTag)
        subPlanTag.append(labelTag)
        breakTag = soup.new_tag("br")
        subPlanTag.append(breakTag)
                    

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
 

def placeLegendDescription(soup, legendTag):
    legendDescription = soup.new_tag("b", attrs={"class":"legenddescription"})
    legendDescription.append("Click on a Category Below to Highlight all Courses in that Category")
    legendTag.append(legendDescription)

def placeLegendButtons(soup, legendTag, categoryDict):
    legendBoxes = soup.new_tag("div", attrs={"class":"legendboxes"})
    for category in categoryDict:
        coursecat = placeLegendButton(soup, cleaner.cleanString(category), categoryDict[category])
        coursecat.append(category)
        legendBoxes.append(coursecat)
    legendTag.append(legendBoxes)


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
    # number that goes into course group (eg: group 2A, 4B -> #A or #B)
    groupcounter = 0
    groupcountsetflag = False  # flag to tell if the initial value of groupcounter is set

    for term in planDict:
        termDiv = soup.new_tag("div", attrs={"class":"term"})
        termHeader = soup.new_tag("h3", attrs={"class":"termheader"})
        termHeader.append(term)
        termDiv.append(termHeader)
        compcounter, progcounter, itscounter, groupcounter, groupcountsetflag = placeCourses(termDiv, 
                                                            planDict[term], 
                                                            soup, 
                                                            controller, 
                                                            plan, 
                                                            termcounter,
                                                            compcounter,
                                                            progcounter,
                                                            itscounter,
                                                            groupcounter, 
                                                            groupcountsetflag,
                                                            term)
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
#   groupcounter - number that goes into course group name (#A or #B eg: 2A, 4B)
#   groupcountsetflag - flag set when initial value is set
#   term - name of the current term, used to set initial value of groupcounter
# Returns:
#   compcounter, progcounter, itscounter, groupcounter, groupcountsetflag
def placeCourses(termTag, termList, soup, controller, plan, termcounter, compcounter, progcounter, itscounter, groupcounter, groupcountsetflag, term):
    orCounter = 0  # if course has "or" option, first and second courseDiv need different styling, this counts if 1st or 2nd
    courseGroupList = []  # list of courses (course objects) in a course group
    courseGroupTitle = ""  # name of the course group (eg: "Course group 2A")
    for course in termList:
        courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan)
        courseContClass = course.category.replace(" ", "")
        orCase = course.calendar_print.lower().strip() == "or"  # handles improper formatting pulled from Excel

        if course.course_group == "A":
            # groupcounter is initially set to ceil(term[-1]/2), it is the year of study/2 with ceiling fnc
            if int(term[-1]) % 2 == 0:
                groupcounter = int(term[-1])//2
            else:
                groupcounter = int(term[-1])//2 + 1

            groupcountsetflag = True
            # different classes for course groups A and B
            courseContDiv = soup.new_tag("div", attrs={"class":"coursegroupacontainer"})
            courseGroupTitle = soup.new_tag("p", attrs={"class":"coursegrouptitle"})
            courseGroupTitle.append("Course Group " + str(groupcounter) + "A")
        elif course.course_group == "B":
            courseContDiv = soup.new_tag("div", attrs={"class":"coursegroupbcontainer"})
            courseGroupTitle = soup.new_tag("p", attrs={"class":"coursegrouptitle"})
            courseGroupTitle.append("Course Group " + str(groupcounter) + "B")
        else:
            # not in a course group
            courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer"})

        if orCase:
            # In the case of an OR in a sequence
            courseOrContDiv = soup.new_tag("div", attrs={"class":"orcoursecontainer"})

        # Prevent tooltip from being off screen
        courseDisc = pickTooltipSide(termcounter, courseID, soup)

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
                courseOrContDiv.append(firstCourseDiv)  # appending the first course option we saved from last iteration
                courseOr = soup.new_tag("p", attrs={"class":"ortext"})
                courseOr.append("OR")  # add the word or between course boxes
                courseOrContDiv.append(courseOr)
                courseOrContDiv.append(courseDiv)
                orCounter = 0
                if (course.course_group == "A") or (course.course_group == "B"):
                    # also need to append to courseGroupList
                    courseGroupList.append(courseOrContDiv)
                    writeFlagsAndVariables(controller, courseID)
                    continue

        if (course.course_group == "A") or (course.course_group == "B"):
            # need to append to courseGroupList, different than check in orCase because
            # this doesn't involve OR
            courseGroupList.append(courseDiv)
            writeFlagsAndVariables(controller, courseID)
            continue

        if orCase:
            termTag.append(courseOrContDiv)
        else:
            courseContDiv.append(courseDiv) 
            termTag.append(courseContDiv)
        writeFlagsAndVariables(controller, courseID)

    if courseGroupTitle != "":
        # Need to add course group title, outside of course group box so
        # append directly to termTag
        termTag.append(courseGroupTitle)
    if courseGroupList != []:
        # A course group is involved. Append each course to the coursegroupcontainer,
        # then append this container to the termTag
        for i in range(0, len(courseGroupList)):
            if i == (len(courseGroupList) - 1):
                courseGroupList[i]["class"].append("lastcourseingroup")  # last course has no bottom margin
            courseContDiv.append(courseGroupList[i])
        termTag.append(courseContDiv)
        if course.course_group == "B":
            # A and B groups are done, next course group will be one number higher
            groupcounter += 1
    
    return compcounter, progcounter, itscounter, groupcounter, groupcountsetflag

# Determines which side a tooltip should appear on based on the term position on the page.
# If the term is near the left side, the tooltip appears on the right and vice versa.
# Terms 1,2 and 3 have tooltips on the right, all others on the left.
# Parameters:
#   termcounter - which term is currently being placed (int)
#   courseID - ID of the course being placed (str)
#   soup - soup object, used to create HTML tags 
# Returns:
#   courseDisc - course disc HTML tag
def pickTooltipSide(termcounter, courseID, soup):
    if termcounter < 4:
        # Term is on the left of the page, tooltip should be on right
        courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                "class":"tooltiptextright",
                                                "ng-click":"$event.stopPropagation()"})
    else:
        # Term is on the right of the page, tooltip should be on left
        courseDisc = soup.new_tag("div", attrs={"id":courseID+"desc",
                                                "class":"tooltiptextleft",
                                                "ng-click":"$event.stopPropagation()"})

    return courseDisc

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