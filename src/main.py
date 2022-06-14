# Author: Moaz Abdelmonem
# Collaborators: Jason Kim, Zachary Schmidt
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term


# This file is the main script for the generation of the program
# visualizer. When run, it will generate a Graphical User Interface (GUI)
# which will alow user to insert all necessary excel files.
# the file will parse the provided Excel files containing course
# and plan information to generate progamatically an interactive program
# diagram in the output directory.

# Dependencies: bs4, parsing, javascriptgen, htmlgen, linegen, tkinter

from statistics import mode
import tkinter
from bs4 import BeautifulSoup
import modules.parsing.categoriesparsing as categoriesparsing
import modules.parsing.courseparsing as courseparsing
import modules.parsing.sequenceparsing as sequenceparsing
import modules.webgen.javascriptgen as javascriptgen
import modules.webgen.htmlgen as htmlgen
import modules.webgen.linegen as linegen
import modules.webgen.cssgen as cssgen
from tkinter import *
from tkinter import messagebox
from tkinter import ttk
from tkinter import filedialog
from PIL import ImageTk, Image


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
root.title('plan visualizer WebGen')
root.iconbitmap('C:output/images/favicon.ico')
root.geometry('700x200')
root.resizable(0,0)

#new window
def new_window():

    global new_img1, new_img2, new_img3, new_tutorial, new_web_img, new_desc
    helpWin = Toplevel()
    helpWin.geometry('1500x700')
    helpWin.title("Manual")
    helpWin.iconbitmap('C:output/images/favicon.ico')

    #### Scroll bar ####
    # Create A Main Frame
    main_frame = Frame(helpWin)
    main_frame.pack(fill=BOTH, expand=1)

    # Create A Canvas
    my_canvas = Canvas(main_frame)
    my_canvas.pack(side=LEFT, fill=BOTH, expand=1)

    # Add A Scrollbar To The Canvas
    my_scrollbar = ttk.Scrollbar(main_frame, orient=VERTICAL, command=my_canvas.yview)
    my_scrollbar.pack(side=RIGHT, fill=Y)

    # Configure The Canvas
    my_canvas.configure(yscrollcommand=my_scrollbar.set)
    my_canvas.bind('<Configure>', lambda e: my_canvas.configure(scrollregion = my_canvas.bbox("all")))

    # Create ANOTHER Frame INSIDE the Canvas
    second_frame = Frame(my_canvas)

    # Add that New frame To a Window In The Canvas
    my_canvas.create_window((0,0), window=second_frame, anchor="nw")

    header = Message(second_frame, 
    text="plan visualizer WebGen\nuser manual",
    aspect=800,
    justify=CENTER,
    font= ('Helvetica 15 underline')
    )
    header.grid(row=0, column=1, pady=25)

    description_img = Image.open("C:GUI_images/description.jpg")
    desc_resize = description_img.resize((100,100))
    new_desc = ImageTk.PhotoImage(desc_resize)
    desc_label = Label(second_frame,image=new_desc, anchor=W)
    desc_label.place(x=900, y= 10)


    # description = Label(second_frame, text="")
    # description.grid

    message1 = Label(second_frame, 
    text="1- Make sure the directory you are in has a directory named output and a template.html file."
    )
    message1.grid(row=1, column=0,padx=20, pady=20)

    message2 = Label(second_frame, 
    text="2- Make sure you have the following excel files (All Excel files must be in the .xls format): "
    )
    message2.grid(row=2, column=0,padx=20, pady=20)
    #courses.xls image
    excel_pic1 = Image.open("C:GUI_images/courseexcel.png")
    resized1 = excel_pic1.resize((100,100))
    new_img1 = ImageTk.PhotoImage(resized1)
    img_label = Label(second_frame,image=new_img1)
    img_label.grid(row=3, column=0)

    #categories.xls image
    excel_pic2 = Image.open("C:GUI_images/catexcel.png")
    resized2 = excel_pic2.resize((100,100))
    new_img2 = ImageTk.PhotoImage(resized2)
    img_label2 = Label(second_frame,image=new_img2)
    img_label2.grid(row=3, column=1)

    #Sequencing.xls image
    tutorial_img = Image.open("C:GUI_images/seqexcel.png")
    resized_img = tutorial_img.resize((100,100))
    new_img3 = ImageTk.PhotoImage(resized_img)
    img_label3 = Label(second_frame,image=new_img3)
    img_label3.grid(row=3, column=2, padx=150)

    #excel file description
    pic1_description = Label(second_frame, text="This excel file must contain\nall individual course information")
    pic1_description.grid(row=4, column=0)

    pic2_description = Label(second_frame, text="This excel file must contain course categories\nand all courses that fall under each category")
    pic2_description.grid(row=4, column=1)

    pic3_description = Label(second_frame, text="This excel file must contain\nall possible plan sequences")
    pic3_description.grid(row=4, column=2)

    message3 = Label(second_frame, 
    text="3- Type in the excel file name (if it's present in the same directory as the program files) or\n provide it's path:"
    )
    message3.grid(row=5, column=0,padx=20, pady=25)

    #Sequencing.xls image
    tutorial_img = Image.open("C:GUI_images/tutorial.png")
    resized_img = tutorial_img.resize((500,300))
    new_tutorial = ImageTk.PhotoImage(resized_img)
    tut_label = Label(second_frame,image=new_tutorial)
    tut_label.grid(row=6, column=1, padx=10, pady=20)

    message4 = Label(second_frame, 
    text="4- Refresh the webpage and the plan visualizer webpage will be generated! "
    )
    message4.grid(row=7, column=0,padx=20, pady=25)

    web_img = Image.open("C:GUI_images/website.png")
    resized_webImg = web_img.resize((500, 300))
    new_web_img = ImageTk.PhotoImage(resized_webImg)
    web_label = Label(second_frame, image=new_web_img)
    web_label.grid(row=8, column=1)

menubar = Menu(root)
root.config(menu=menubar)

# create the Help menu
help_menu = Menu(
    menubar,
    tearoff=0
)


help_menu.add_command(
    label='About...',
    command=new_window

)

# add the Help menu to the menubar
menubar.add_cascade(
    label="Help",
    menu=help_menu
)


paddings = {'padx': 20, 'pady': 5}
entry_font = {'font': ('Helvetica', 11)}

root.columnconfigure(0, weight=1)
root.columnconfigure(1, weight=3)

#course excel UI
courses_excel = ttk.Entry(root, width=30, **entry_font)
courses_excel.insert(tkinter.END, "")
courses_excel.grid(row=0, column=2, **paddings)
excelLabel = Label(root,text="Enter the Courses excel file (filename.xls):").grid(row=0, column=1, **paddings)

#course category excel UI
course_cat_excel = ttk.Entry(root, width=30, **entry_font)
course_cat_excel.insert(tkinter.END, "")
course_cat_excel.grid(row=1, column=2, **paddings)
courseCat = Label(root, text="Enter Course Categories excel file (filename.xls):").grid(row=1, column=1,**paddings )

#sequence excel UI
seq_excel = ttk.Entry(root, width=30, **entry_font)
seq_excel.insert(tkinter.END, "")
seq_excel.grid(row=2, column=2, **paddings)
seqLabel = Label(root, text="Enter course sequencing file (filename.xls):").grid(row=2, column=1, **paddings)

department = ttk.Entry(root, width=30, **entry_font)
department.grid(row=3, column=2)
departmentLabel = Label(root, text="Enter department name:").grid(row=3, column=1, **paddings)

#browse functions
def courseBrowse():
    filename =filedialog.askopenfilename()
    courses_excel.delete(0, END)
    courses_excel.insert(tkinter.END, filename) 

def catBrowse():
    filename =filedialog.askopenfilename()
    course_cat_excel.delete(0, END)
    course_cat_excel.insert(tkinter.END, filename) 

def seqBrowse():
    filename =filedialog.askopenfilename()
    seq_excel.delete(0, END)
    seq_excel.insert(tkinter.END, filename) 

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
            courseDict = courseparsing.parseCourses(courses_excel.get())
            
            # pulling the category and color info from excel
            print("Parsing categories...")
            courseDict, categoryDict = categoriesparsing.parseCategories(course_cat_excel.get(), courseDict)

            # writing colour highlighting CSS
            print("Writing category CSS...")
            cssgen.writeCategoryCSS(categoryDict, categoryCSS)
            
            # sequencing courses
            print("Parsing sequences....")
            # sequenceDict, deptName = sequenceparsing.parseSeq(seq_excel.get(), courseDict)
            sequenceDict = sequenceparsing.parseSeq(seq_excel.get(), courseDict)
            deptName = department.get()


            courseGroupDict = htmlgen.extractPlanCourseGroupDict(sequenceDict)
            courseGroupList = htmlgen.findListofAllCourseGroups(courseGroupDict)
            # print(courseGroupDict)
            # print(courseGroupList)
            intitalCourseGroupVals = htmlgen.findIntitalValuesofCourseGroups(courseGroupDict, courseGroupList)

            # print(intitalCourseGroupVals)

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

    

            # customizing webpage title
            print("Writing title....")
            htmlgen.switchTitle(titleTag, deptName)

            # locating form tag
            formTag = mainTag.find("form")

            # placing main radio inputs
            print("Placing radio inputs....")
            htmlgen.placeRadioInputs(formTag, courseGroupDict, soup)

            # locating course group selector
            courseGroupSelectTag = soup.body.find("div", class_="coursegroupselector")

            # placing submenu radio inputs
            htmlgen.placeCourseGroupRadioInputs(courseGroupSelectTag, soup, courseGroupDict)

            # locating legend tag
            legendTag = mainTag.find("div", class_="legend")

            # places legend for color-coding
            print("Placing legend....")
            htmlgen.placeLegend(legendTag, categoryDict, soup)

            # Generating display tag, this is where the course divs will be written
            print("Generating display tag...")
            displayTag = htmlgen.generateDisplayDiv(soup, courseGroupList)

            mainTag.append(displayTag)

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

       #gui error box
       messagebox.showerror('Python Error', "Exception raised: " + 
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

#browse buttons
button_excel = ttk.Button(root, text="Browse", command=courseBrowse)
button_excel.grid(row=0, column=3, **paddings)

button_excel = ttk.Button(root, text="Browse", command=catBrowse)
button_excel.grid(row=1, column=3, **paddings)

button_excel = ttk.Button(root, text="Browse", command=seqBrowse)
button_excel.grid(row=2, column=3, **paddings)

button_main = ttk.Button(root, text="Generate website", command=main)
button_main.grid(row=4, column=2, **paddings)



if __name__ == "__main__":
    root.mainloop()