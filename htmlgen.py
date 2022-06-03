# Authors: Jason Kim, Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions needed to generate the required
# HTML elements to produce the MEC E Program Visualizer webpage

# Dependencies: cleaner, linegen, html

import cleaner
import linegen
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


# Places the legend for the categories of courses (math, basic sciences, design, etc.)
# Pulls the categories and colors from sequenceDict, which has these values as two of
# its attributes
# Parameters:
#   legendTag - HTML tag representing div which holds the category color legend
#   categoryList - list with each element a length 2 list. Index 0: category, index 1: hex color code
#   soup - soup object, used to create HTML tags
def placeLegend(legendTag, categoryList, soup):
    for i in range(0, len(categoryList)):
        coursecat = soup.new_tag("p", attrs={"id": categoryList[i][0],
                                        "style":"background-color:#" + categoryList[i][1]})
        coursecat.append(categoryList[i][0])
        legendTag.append(coursecat)


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


def formatCourseDescriptionForRegular(soup, course, courseDisc):
    # formatting title in course description
    courseTitle = soup.new_tag("b", attrs={"class":"descriptiontitle"})
    courseTitle.append(course.name + " - " + course.long_title)

    courseLine = soup.new_tag("hr", attrs={"class":"descriptionline"})

    courseCredits = soup.new_tag("p", attrs={"class":"descriptioncredits"})
    courseCredits.append(html.unescape("&#9733 ") + course.engineering_units + " ")

    courseFeeIndex = soup.new_tag("i", attrs={"class":"descriptionfeeindex"})
    courseFeeIndex.append("(" + "fi " + course.calc_fee_index + ")" + " ")

    courseTermAvail = soup.new_tag("p", attrs={"class":"descriptionavailability"})
    courseTermAvail.append("(" + course.duration + ", ")

    courseAlphaHours = soup.new_tag("p", attrs={"class":"descriptionalphahours"})
    courseAlphaHours.append(course.alpha_hours + ")" + " ")

    courseDescription = soup.new_tag("p", attrs={"class":"fulldescription"})
    courseDescription.append(course.course_description)

    courseDisc.append(courseTitle)
    courseDisc.append(courseLine)
    courseDisc.append(courseCredits)
    courseDisc.append(courseFeeIndex)
    courseDisc.append(courseTermAvail)
    courseDisc.append(courseAlphaHours)
    courseDisc.append(courseDescription)

# Function that places the course divs within a certain term column of a certain plan
# Parameters:
#   termTag - HTML tag representing the specfic term column in question
#   termList - list of courses being taken that term
#   soup - soup object, used to create HTML tags
#   controller - file handle for controller.js, used to write to controller.js
#   plan - name of plan whose terms are being placed
#   termcounter - which term is currently being placed (int)
def placeCourses(termTag, termList, soup, controller, plan, termcounter, compcounter, progcounter, itscounter):
    orCounter = 0
    for course in termList:
        courseID = cleaner.cleanString(course.name)+cleaner.cleanString(plan)
        courseContDiv = soup.new_tag("div", attrs={"class":"coursecontainer"})

        # Prevent tooltip from being off screen
        if termcounter < 4:
            courseDisc = soup.new_tag("div", attrs={"class":"tooltiptextright"})
        else:
            courseDisc = soup.new_tag("div", attrs={"class":"tooltiptextleft"})

        if course.calendar_print == "or":
            courseContDiv = soup.new_tag("div", attrs={"class":"orcoursecontainer"})

        courseContClass = course.category.replace(" ", "")
 
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
            courseDiv = soup.new_tag("div",attrs= {"class":"course tooltip " +courseContClass, 
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


        courseHeader = soup.new_tag("h3", attrs={"class":"embed"})
        courseHeader.append(course.name)

        courseDiv.append(courseHeader)
        courseDiv.append(courseDisc)

        if course.calendar_print == "or":
            if orCounter == 0:
                firstCourseDiv = courseDiv 
                orCounter += 1
                controller.write("  var " + 
                         courseID +
                         "flag = false;\n")
                continue
            else:
                courseContDiv.append(firstCourseDiv)
                courseOr = soup.new_tag("p", attrs={"class":"ortext"})
                courseOr.append("OR")
                courseContDiv.append(courseOr)
                orCounter = 0

        courseContDiv.append(courseDiv)
        termTag.append(courseContDiv)
        controller.write("  var " + 
                         courseID +
                         "flag = false;\n")

    return compcounter, progcounter, itscounter