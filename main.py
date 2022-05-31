# Authors: Jason Kim, Moaz Abdelmonem, Zachary Schmidt
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file is the main script for the generation of the program 
# visualizer. When run, it will parse Excel files containing course
# and plan information to generate progamatically an interactive program 
# diagram in the output directory

# Dependencies: bs4, parsing, javascriptgen, htmlgen, linegen

from encodings import utf_8
from bs4 import BeautifulSoup
from parsing import parse
import javascriptgen
import htmlgen
import linegen

# Function that properly concludes and closes the controller JS
#   controller - file handle for controller JS
def closeControllerJavaScript(controller):
    controller.write("});")
    controller.close()

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
    # opening the template html file and constructing html
    # note: here we calling parsing to extract the course data!
    try:  
        with open("template.html") as input:
            # deriving parsed html and creating soup object
            soup = BeautifulSoup(input, 'html.parser')

            # opening the JS files
            controller = open("./output/js/controller.js", "w")
            indexJS = open("./output/js/index.js", "w")

            # creating line manager
            lineManager = linegen.LineManager()

            # parsing the excel files with course info and sequencing
            sequenceDict, courseDict = parse("Courses.xls")

            # generating intital JS based on the number and names of plans
            javascriptgen.intializeControllerJavaScript(controller, sequenceDict)
      
            #locating main div, this is where all the html will be written
            mainTag = soup.body.find("div", id="main")
            # locating form tag
            formTag = mainTag.find("form")
            # locating display tag, this is where the course divs will be written
            displayTag = mainTag.find("div", class_="display")

            #TO DO: adjust width and height of display and header tag based on sequence

            #placing the HTML and generating JS based on the courses (drawing lines)
            htmlgen.placeRadioInputs(formTag, sequenceDict, soup)
            htmlgen.placePlanDivs(displayTag, sequenceDict, soup, indexJS, controller, lineManager)

            #closing JS files
            closeControllerJavaScript(controller)
            indexJS.close()
           


    #TO DO: improve expection handling here
    except FileNotFoundError as err:
       print("Exception raised: " + 
       err.strerror + 
       ". Either the template HTML file is not in the same directory as the script or" +
       " the output directory is not organized correctly or does not exist")

    # writing output to an output html
    try:
        with open("./output/index.html", "w", encoding="utf-8") as output:
            output.write(str(soup))
    #TO DO: improve expection handling here
    except FileNotFoundError as err:
       print("Exception raised: " + 
             err.strerror + 
             ". The directory you are in does not have a directory named output.")
        
if __name__ == "__main__":
    main()