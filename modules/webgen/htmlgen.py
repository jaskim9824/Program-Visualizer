# Authors: Jason Kim, Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions needed to generate the required
# HTML elements to produce the MEC E Program Visualizer webpage

# Dependencies: cleaner, linegen, html

from .. import cleaner
from . import linegen
import html

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
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   soup - soup object, used to create HTML tags
def placeRadioInputs(formTag, sequenceDict, soup):
    currentPlan = ""
    tagList = []
    currentSubPlanList = []
    for plan in sequenceDict:
        if "{" in plan or "}" in plan:
            cleanedPlanName = plan[0:plan.find("{")].strip()
            if currentPlan != cleanedPlanName: 
                tagList = []
                currentSubPlanList = []
                currentPlan = cleanedPlanName
                dropdownMenu = soup.new_tag("div", attrs={"class":"dropdown"})
                dropdownContent = soup.new_tag("div", attrs={"class":"dropdown-content"})
                labelTag = soup.new_tag("label") 
                labelTag.append(cleanedPlanName)
                dropdownMenu.append(labelTag)
                dropdownMenu.append(dropdownContent)
                formTag.append(dropdownMenu)
                breakTag = soup.new_tag("br")
                formTag.append(breakTag)
                tagList.append(dropdownContent)
            
            subPlanList = plan[plan.find("{")+1:plan.find("}")].split()
            # subPlanName = plan[plan.find("{")+1:plan.find("}")]
            # print("Current sub plan list is..." + str(currentSubPlanList))
            depth = getStartingDepth(currentSubPlanList, subPlanList)
            currentSubPlanList = subPlanList
            # print("Printing " + plan + "....")
            # print("Depth is " + str(depth))
            generateSubMenus(tagList, subPlanList, cleaner.cleanString(plan), depth, soup)
            # radioInput = soup.new_tag("input", attrs={"type":"radio", 
            #                                       "name":"planselector", 
            #                                       "ng-model":"selectedPlan",
            #                                       "value": cleaner.cleanString(plan)})
            # labelTag = soup.new_tag("label", attrs={"for":cleaner.cleanString(plan)})
            # labelTag.append(subPlanName)
            # dropdownContent.append(radioInput)
            # dropdownContent.append(labelTag)
            # breakTag = soup.new_tag("br")
            # dropdownContent.append(breakTag)
        else:
            if currentPlan != "":    
                currentPlan = ""
                tagList = []
                currentSubPlanList = []
            radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":"planselector", 
                                                  "ng-model":"selectedPlan",
                                                  "value": cleaner.cleanString(plan)})
            labelTag = soup.new_tag("label", attrs={"for":cleaner.cleanString(plan)})
            labelTag.append(plan)
            formTag.append(radioInput)
            formTag.append(labelTag)
            breakTag = soup.new_tag("br")
            formTag.append(breakTag)

def getStartingDepth(currentList, inputList):
    if currentList == []:
        return 1
    else:
        counter = 0
        for i in range(len(inputList)):
            counter += 1
            if currentList[i] != inputList[i]:
                return counter

def generateSubMenus(tagList, inputList, plan, depth, soup):
    # print(len(tagList))
    # print(len(inputList))
    if depth == len(inputList):
        # print("Inserting radio input...")
        labelTag = soup.new_tag("label", attrs={"for":plan})
        radioInput = soup.new_tag("input", attrs={"type":"radio", 
                                                  "name":"planselector", 
                                                  "ng-model":"selectedPlan",
                                                  "value": plan})
        labelTag.append(inputList[depth-1])
        # print("Parent tag is:")
        # print(tagList[depth-1])
        tagList[depth-1].append(radioInput)
        tagList[depth-1].append(labelTag)
        breakTag = soup.new_tag("br")
        tagList[depth-1].append(breakTag)
    else:
        if len(tagList) != len(inputList):
            subText = "sub"*depth
            dropdownMenu = soup.new_tag("div", attrs={"class":subText+"dropdown"})
            dropdownContent = soup.new_tag("div", attrs={"class":subText+"dropdown-content"})
            labelTag = soup.new_tag("label")
            labelTag.append(inputList[depth-1])
            dropdownMenu.append(labelTag)
            dropdownMenu.append(dropdownContent)
            tagList[depth-1].append(dropdownMenu)
            breakTag = soup.new_tag("br")
            tagList[depth-1].append(breakTag)
            tagList.append(dropdownContent)
        else:
            subText = "sub"*depth
            dropdownMenu = soup.new_tag("div", attrs={"class":subText+"dropdown"})
            dropdownContent = soup.new_tag("div", attrs={"class":subText+"dropdown-content"})
            labelTag = soup.new_tag("label")
            labelTag.append(inputList[depth-1])
            dropdownMenu.append(labelTag)
            dropdownMenu.append(dropdownContent)
            tagList[depth-1].append(dropdownMenu)
            breakTag = soup.new_tag("br")
            tagList[depth-1].append(breakTag)
            # print("Reassigning...")
            tagList[depth] = dropdownContent
        generateSubMenus(tagList, inputList, plan, depth+1, soup)


# Places the legend for the categories of courses (math, basic sciences, design, etc.)
# Pulls the categories and colors from sequenceDict, which has these values as two of
# its attributes
# Parameters:
#   legendTag - HTML tag representing div which holds the category color legend
#   categoryDict - dict mapping category to colour
#   soup - soup object, used to create HTML tags
def placeLegend(legendTag, categoryDict, soup):
    legendDescription = soup.new_tag("b", attrs={"class":"legenddescription"})
    legendDescription.append("Click on a Category Below to Highlight all Courses in that Category")
    legendTag.append(legendDescription)
    
    legendBoxes = soup.new_tag("div", attrs={"class":"legendboxes"})
    for category in categoryDict:
        if category == "COMP":
            coursecat = soup.new_tag("div", attrs={"ng-click":"ComplementaryElectiveclickListener()", 
                                        "class":"legendbutton",
                                        "id": cleaner.cleanString(category),
                                        "style":"background-color:#" + categoryDict[category]})
        elif category == "PROG":
            coursecat = soup.new_tag("div", attrs={"ng-click":"ProgramTechnicalElectiveclickListener()", 
                                        "class":"legendbutton",
                                        "id": cleaner.cleanString(category),
                                        "style":"background-color:#" + categoryDict[category]})
        elif category == "ITS":
            coursecat = soup.new_tag("div", attrs={"ng-click":"ITSElectiveclickListener()", 
                                        "class":"legendbutton",
                                        "id": cleaner.cleanString(category),
                                        "style":"background-color:#" + categoryDict[category]})
        else:
            coursecat = soup.new_tag("div", attrs={"ng-click":cleaner.cleanString(category) + "clickListener()", 
                                        "class":"legendbutton",
                                        "id": cleaner.cleanString(category),
                                        "style":"background-color:#" + categoryDict[category]})
        coursecat.append(category)
        legendBoxes.append(coursecat)
    legendTag.append(legendBoxes)


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

        # In the case of an OR case in a sequence
        if course.calendar_print.lower().strip() == "or":
            courseContDiv = soup.new_tag("div", attrs={"class":"orcoursecontainer"})
        else:
            courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer"})

        # Prevent tooltip from being off screen
        if termcounter < 4:
            courseDisc = soup.new_tag("div", attrs={"class":"tooltiptextright"})
        else:
            courseDisc = soup.new_tag("div", attrs={"class":"tooltiptextleft"})

        # Constructing course div
        if course.name == "Complementary Elective":
            # Class allows formatting so words fit in course box
            courseID = courseID+str(compcounter)
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip COMP", 
                                               "id": courseID,
                                               "ng-click":courseID+"Listener()"})
            compcounter += 1
            formatCourseDescriptionForElective(soup, course, courseDisc)

        elif course.name == "Program/Technical Elective":
            # Class allows formatting so words fit in course box
            courseID = courseID+str(progcounter)
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip PROG", 
                                               "id": courseID, 
                                               "ng-click":courseID+"Listener()"})
            progcounter += 1
            formatCourseDescriptionForElective(soup, course, courseDisc)

        elif course.name == "ITS Elective":
            courseID = courseID+str(itscounter)
            # Class allows formatting so words fit in course box
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip ITS", 
                                                "id": courseID, 
                                                "ng-click":courseID+"Listener()"})
            itscounter += 1
            formatCourseDescriptionForElective(soup, course, courseDisc)

        else:
            # This is a regular course. All information should be available
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip " + courseContClass, 
                                                "id": courseID, 
                                                "ng-click":courseID+"Listener()"})
            if course.calendar_print.lower().strip() == "or":
                if orCounter == 0:
                    courseDiv = soup.new_tag("div", attrs={"class":"orcoursetop tooltip " + courseContClass,
                                                "id": courseID,
                                                "ng-click":courseID+"Listener()"})
                else:
                    courseDiv = soup.new_tag("div", attrs={"class":"orcoursebottom tooltip " + courseContClass,
                                                "id": courseID,
                                                "ng-click":courseID+"Listener()"})
            formatCourseDescriptionForRegular(soup, course, courseDisc)

        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})  # text appearing in course box (eg: CHEM 103)
        courseHeader.append(course.name)

        courseDiv.append(courseHeader)
        courseDiv.append(courseDisc)

        if course.calendar_print.lower().strip() == "or":
            # This course is one of two options (eg: ENG M 310 or ENG M 401)
            if orCounter == 0:
                # this first of two options
                firstCourseDiv = courseDiv   # save the courseDiv which we access on the next iteration
                orCounter += 1
                controller.write("  var " + 
                         courseID +
                         "flag = false;\n")
                controller.write("  var " + 
                         courseID +
                         "rflag = false;\n")
                controller.write(" var " + courseID + "Time = new Date().getTime();\n")
                continue
            else:
                # the second of two options
                courseContDiv.append(firstCourseDiv)  # appending the first course option we saved from last iteration
                courseOr = soup.new_tag("p", attrs={"class":"ortext"})
                courseOr.append("OR")  # add the word or between course boxes
                courseContDiv.append(courseOr)
                orCounter = 0

        courseContDiv.append(courseDiv)  # append the seocnd course option
        termTag.append(courseContDiv)
        controller.write("  var " + 
                         courseID +
                         "flag = false;\n")
        controller.write("  var " + 
                         courseID +
                         "rflag = false;\n")
        controller.write(" var " + courseID + "Time = new Date().getTime();\n")

    return compcounter, progcounter, itscounter

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