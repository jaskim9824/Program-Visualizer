# Authors: Jason Kim, Moaz Abdelmonem, Zachary Schmidt
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file is the main script for the generation of the program 
# visualizer. When run, it will parse Excel files containing course
# and plan information to generate progamatically an interactive program 
# diagram in the output directory

# Dependencies: bs4, parsing, webgen

from bs4 import BeautifulSoup
import modules.parsing.categoriesparsing as categoriesparsing
import modules.parsing.courseparsing as courseparsing
import modules.parsing.sequenceparsing as sequenceparsing
import modules.webgen.javascriptgen as javascriptgen
import modules.webgen.htmlgen as htmlgen
import modules.webgen.linegen as linegen
import modules.webgen.cssgen as cssgen

# Debug function for cleanly printing contents of plan sequences
# Parameters:
#   sequenceDict - dict mapping plan names to a dict containing plan seqeunce
def debug(sequenceDict):
    for plan in sequenceDict:
        print(plan)
        for term in sequenceDict[plan]:
            print(term)
            for course in sequenceDict[plan][term]:
                print(course.name)
            print("\n")
        print("\n")

# Main function   
def main():
    print("Beginning generation...")
    # opening the template html file and constructing html
    # note: here we calling parsing to extract the course data!
    try:  
        with open("template.html") as input:
            # deriving parsed html and creating soup object
            soup = BeautifulSoup(input, 'html.parser')
            
            # opening the JS files
            print("Opening files...")
            controller = open("./output/js/controller.js", "w")
            indexJS = open("./output/js/index.js", "w")

            #opening the CSS file
            categoryCSS = open("./output/styles/category.css", "w")

            # creating line manager
            lineManager = linegen.LineManager()

            # parsing the excel files with course info, pulls dependencies (prereqs, coreqs, reqs) too
            print("Parsing courses...")
            courseDict = courseparsing.parseCourses("Courses.xls")
            
            # pulling the category and color info from excel
            print("Parsing categories...")
            courseDict, categoryDict = categoriesparsing.parseCategories("CourseCategories.xls", courseDict)

            # writing colour highlighting CSS
            print("Writing category CSS...")
            cssgen.writeCategoryCSS(categoryDict, categoryCSS)
            
            # sequencing courses
            print("Parsing sequences....")
            sequenceDict, deptName = sequenceparsing.parseSeq("Sequencing.xls", courseDict)

            courseGroupDict = htmlgen.extractPlanCourseGroupDict(sequenceDict)
            courseGroupList = htmlgen.findListofAllCourseGroups(courseGroupDict)
            intitalCourseGroupVals = htmlgen.findIntitalValuesofCourseGroups(courseGroupDict, courseGroupList)
            print(intitalCourseGroupVals)

            # generating intital JS based on the number and names of plans
            print("Intialzing JS files....")
            javascriptgen.intializeControllerJavaScript(sequenceDict, 
                                                        intitalCourseGroupVals,
                                                        courseGroupDict,
                                                        courseGroupList, 
                                                        controller)

            #locating title tag
            titleTag = soup.body.find("a", class_="site-title")

            #locating main div, this is where all the html will be written
            mainTag = soup.body.find("div", id="main")

            # locating form tag
            formTag = mainTag.find("form")

            # locating legend tag
            legendTag = mainTag.find("div", class_="legend")

            # locating display tag, this is where the course divs will be written
            displayTag = htmlgen.generateDisplayDiv(soup, courseGroupList)

            mainTag.append(displayTag)

           


            # customizing webpage title
            print("Writing title....")
            htmlgen.switchTitle(titleTag, deptName)

            # placing radio inputs
            print("Placing radio inputs....")
            htmlgen.placeRadioInputs(formTag, courseGroupDict, soup)

            # places legend for color-coding
            print("Placing legend....")
            htmlgen.placeLegend(legendTag, categoryDict, soup)

            #placing the HTML and generating JS based on the courses (drawing lines)
            print("Placing course diagram....")
            htmlgen.placePlanDivs(displayTag, sequenceDict, soup, indexJS, controller, lineManager)

            # closing JS and CSS files
            print("Closing files...")
            javascriptgen.closeControllerJavaScript(controller)
            indexJS.close()
            categoryCSS.close()
           
    except FileNotFoundError as err:
       print("Exception raised: " + 
       err.strerror + 
       ". Either the template HTML file is not in the same directory as the script or" +
       " the output directory is not organized correctly or does not exist")

    # writing output to an output html
    try:
        print("Writing final HTML.....")
        with open("./output/index.html", "w", encoding="utf-8") as output:
            output.write(str(soup))
    except FileNotFoundError as err:
       print("Exception raised: " + 
             err.strerror + 
             ". The directory you are in does not have a directory named output.")
    print("Generation Completed!")
        
if __name__ == "__main__":
    main()