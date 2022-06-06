# Authors: Jason Kim, Moaz Abdelmonem, Zachary Schmidt
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file is the main script for the generation of the program 
# visualizer. When run, it will parse Excel files containing course
# and plan information to generate progamatically an interactive program 
# diagram in the output directory

# Dependencies: bs4, parsing, javascriptgen, htmlgen, linegen

from encodings import utf_8
import tkinter
from turtle import back
from bs4 import BeautifulSoup
from numpy import pad
import javascriptgen
import htmlgen
import linegen
import cleaner
from tkinter import *
from tkinter import messagebox
from tkinter import ttk

# Function that properly concludes and closes the controller JS
#   controller - file handle for controller JS
def closeControllerJavaScript(controller):
    controller.write("});")
    controller.close()

def writeCategoryCSS(categoryDict, categoryCSS):
    for category in categoryDict:
        backgroundColour = categoryDict[category]
        categoryFormattedString = """.{categoryName}:hover {{
            background-color: #{backColour}!important;
            border-color: #{backColour}!important;
        }}
        .{categoryName}-highlighted {{
            background-color: #{backColour};
        }}
        .{categoryName}-highlighted:hover {{
            background-color: #{backColour}!important;
            border-color: #{backColour}!important;
        }}\n"""
        categoryCSS.write(categoryFormattedString.format(categoryName=cleaner.cleanString(category),
                                                         backColour=backgroundColour))

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
        
#window
root = Tk()
root.title('Web generator')
root.iconbitmap('C:output/images/favicon.ico')
root.geometry('700x200')
root.resizable(0,0)

paddings = {'padx': 20, 'pady': 5}
entry_font = {'font': ('Helvetica', 11)}

root.columnconfigure(0, weight=1)
root.columnconfigure(1, weight=3)

#course excel UI
courses_excel = ttk.Entry(root, width=30, **entry_font)
courses_excel.grid(row=0, column=2, **paddings)
excelLabel = Label(root,text="Enter the Courses excel file (filename.xls):").grid(row=0, column=1, **paddings)

#course category excel UI
course_cat_excel = ttk.Entry(root, width=30, **entry_font)
course_cat_excel.grid(row=1, column=2, **paddings)
courseCat = Label(root, text="Enter Course Categories excel file (filename.xls):").grid(row=1, column=1,**paddings )

#sequence excel UI
seq_excel = ttk.Entry(root, width=30, **entry_font)
seq_excel.grid(row=2, column=2, **paddings)
seqLabel = Label(root, text="Enter course sequencing file (filename.xls):").grid(row=2, column=1, **paddings)


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

            #opening the CSS file
            categoryCSS = open("./output/styles/category.css", "w")

            # creating line manager
            lineManager = linegen.LineManager()

            # parsing the excel files with course info, pulls dependencies (prereqs, coreqs, reqs) too
            courseDict = parse(courses_excel.get())
            # pulling the category and color info from excel
            courseDict, categoryDict, categoryList = pullCategories(course_cat_excel.get(), courseDict)
            # sequencing courses
            sequenceDict, deptName = pullSeq(seq_excel.get(), courseDict)

            # generating intital JS based on the number and names of plans
            javascriptgen.intializeControllerJavaScript(controller, sequenceDict)
            writeCategoryCSS(categoryDict, categoryCSS)

            titleTag = soup.body.find("a", class_="site-title")
      
            #locating main div, this is where all the html will be written
            mainTag = soup.body.find("div", id="main")
            # locating form tag
            formTag = mainTag.find("form")
            # locating legend tag
            legendTag = mainTag.find("div", class_="legend")
            # locating display tag, this is where the course divs will be written
            displayTag = mainTag.find("div", class_="display")

            #TO DO: adjust width and height of display and header tag based on sequence

            #placing the HTML and generating JS based on the courses (drawing lines)
            htmlgen.switchTitle(titleTag, deptName)
            htmlgen.placeRadioInputs(formTag, sequenceDict, soup)
            htmlgen.placeLegend(legendTag, categoryList, soup)  # places legend for color-coding
            htmlgen.placePlanDivs(displayTag, sequenceDict, soup, indexJS, controller, lineManager)

            #closing JS files
            closeControllerJavaScript(controller)
            indexJS.close()
            categoryCSS.close()
           


    #TO DO: improve expection handling here
    except FileNotFoundError as err:
       print("Exception raised: " + 
       err.strerror + 
       ". Either the template HTML file is not in the same directory as the script or" +
       " the output directory is not organized correctly or does not exist")
       #gui error box
       messagebox.showerror('Python Error', "Exception raised: " + 
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


        
button_main = ttk.Button(root, text="Generate website", command=main)
button_main.grid(row=3, column=2, **paddings)



if __name__ == "__main__":
    root.mainloop()