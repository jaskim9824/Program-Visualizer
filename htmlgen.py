# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions needed to generate the required
# HTML elements to produce the MEC E Program Visualizer webpage

# Dependencies: cleaner, linegen

import cleaner
import linegen

# Function that places the radio inputs into the form which controls
# which plan is currently selected on the webpage
# Parameters:
#   formTag - form HTML tag where the inputs will be placed
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   soup - soup object, used to create HTML tags
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
                                                 "ng-switch-when":cleaner.cleanString(plan)})
        widthOfPlan = 210 * len(sequenceDict[plan].keys()) + 60
        switchInput['width'] = str(widthOfPlan) +"px"
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
    linegen.placeLines(courseList, indexJS, lineManager, plan)
    linegen.placeClickListeners(courseList, controller, lineManager, plan)

# Function that places the course divs within a certain term column of a certain plan
# Parameters:
#   termTag - HTML tag representing the specfic term column in question
#   termList - list of courses being taken that term
#   soup - soup object, used to create HTML tags
#   controller - file handle for controller.js, used to write to controller.js
#   plan - name of plan whose terms are being placed
def placeCourses(termTag, termList, soup, controller, plan):
    for course in termList:
        courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan)
        courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer"})
        if course.name == "Complementary Elective":
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip compelective", 
                                               "id": courseID, 
                                               "ng-click":courseID+"Listener()" })
        elif course.name == "Program/Technical Elective":
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip progelective", 
                                               "id": courseID, 
                                               "ng-click":courseID+"Listener()" })
        else:
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip", 
                                                "id": courseID, 
                                                "ng-click":courseID+"Listener()" })
        courseDisc = soup.new_tag("p", attrs={"class":"tooltiptext"})
        courseDisc.append(course.course_description)
        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
        courseHeader.append(course.name)
        courseDiv.append(courseHeader)
        courseDiv.append(courseDisc)
        courseContDiv.append(courseDiv)
        termTag.append(courseContDiv)
        controller.write("  var " + 
                         courseID +
                         "flag = false;\n")