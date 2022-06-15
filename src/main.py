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

# Dependencies: bs4, parsing, webgen, tkinter

import tkinter
from bs4 import BeautifulSoup
import modules.parsing.categoriesparsing as categoriesparsing
import modules.parsing.coursegroupparsing as coursegroupparsing
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
            courseDict, categoryDict = categoriesparsing.parseCategories(courseCat_excel.get(), courseDict)

            # writing colour highlighting CSS
            print("Writing category CSS...")
            cssgen.writeCategoryCSS(categoryDict, categoryCSS)
            
            # sequencing courses
            print("Parsing sequences....")
            sequenceDict = sequenceparsing.parseSeq(seq_excel.get(), courseDict)

            # extracting dept name for program sequence
            deptName = department.get()

            # extracting course group information
            courseGroupDict = coursegroupparsing.extractPlanCourseGroupDict(sequenceDict)
            courseGroupList = coursegroupparsing.findListofAllCourseGroups(courseGroupDict)
            intitalCourseGroupVals = coursegroupparsing.findIntitalValuesofCourseGroups(courseGroupDict, courseGroupList)


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


def btn_clicked():
    print("Button Clicked")

#browse functions
def courseBrowse():
    filename =filedialog.askopenfilename()
    courses_excel.delete(0, END)
    courses_excel.insert(tkinter.END, filename) 

def catBrowse():
    filename =filedialog.askopenfilename()
    courseCat_excel.delete(0, END)
    courseCat_excel.insert(tkinter.END, filename)

def seqBrowse():
    filename =filedialog.askopenfilename()
    seq_excel.delete(0, END)
    seq_excel.insert(tkinter.END, filename)  

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

#Main Window
window = Tk()
window.geometry("1092x517")
window.configure(bg = "#ffffff")
canvas = Canvas(
    window,
    bg = "#ffffff",
    height = 517,
    width = 1092,
    bd = 0,
    highlightthickness = 0,
    relief = "ridge")
canvas.place(x = 0, y = 0)
window.resizable(False, False)

menubar = Menu(window)
window.config(menu=menubar)
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

##Course Excel file UI##
courseEntry_img = PhotoImage(file = f"GUI_images/img_textBox0.png")
courseEntry_bg = canvas.create_image(
    774.5, 152.5,
    image = courseEntry_img)

courses_excel = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0)
courses_excel.insert(tkinter.END, "")
courses_excel.place(
    x = 635, y = 135,
    width = 279,
    height = 33)

##Categories excel file UI##
catEntry_img = PhotoImage(file = f"GUI_images/img_textBox1.png")
catEntry_bg = canvas.create_image(
    774.5, 229.5,
    image = catEntry_img)

courseCat_excel = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0)
courseCat_excel.insert(tkinter.END, "")
courseCat_excel.place(
    x = 635, y = 212,
    width = 279,
    height = 33)

##Sequencing excel file UI##
seqEntry_img = PhotoImage(file = f"GUI_images/img_textBox2.png")
seqEntry_bg = canvas.create_image(
    774.5, 306.5,
    image = seqEntry_img)

seq_excel = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0)
seq_excel.insert(tkinter.END, "")
seq_excel.place(
    x = 635, y = 289,
    width = 279,
    height = 33)

deptEntry_img = PhotoImage(file = f"GUI_images/img_textBox3.png")
deptEntry_bg = canvas.create_image(
    774.5, 383.5,
    image = deptEntry_img)

department = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0)

department.place(
    x = 635, y = 366,
    width = 279,
    height = 33)

background_img = PhotoImage(file = f"GUI_images/background.png")
background = canvas.create_image(
    467.5, 258.5,
    image=background_img)


browseImg1 = PhotoImage(file = f"GUI_images/img1.png")
button1_excel = Button(
    image = browseImg1,
    borderwidth = 0,
    highlightthickness = 0,
    command = courseBrowse,
    relief = "flat")

button1_excel.place(
    x = 950, y = 135,
    width = 95,
    height = 37)

browseImg2 = PhotoImage(file = f"GUI_images/img2.png")
button2_excel = Button(
    image = browseImg2,
    borderwidth = 0,
    highlightthickness = 0,
    command = catBrowse,
    relief = "flat")

button2_excel.place(
    x = 950, y = 214,
    width = 95,
    height = 38)

browseImg3 = PhotoImage(file = f"GUI_images/img3.png")
button3_excel = Button(
    image = browseImg3,
    borderwidth = 0,
    highlightthickness = 0,
    command = seqBrowse,
    relief = "flat")

button3_excel.place(
    x = 950, y = 289,
    width = 95,
    height = 37)

genImg = PhotoImage(file = f"GUI_images/img0.png")
generate_button = Button(
    image = genImg,
    borderwidth = 0,
    highlightthickness = 0,
    command = main,
    relief = "flat")

generate_button.place(
    x = 710, y = 432,
    width = 126,
    height = 43)







if __name__ == "__main__":
    window.mainloop()