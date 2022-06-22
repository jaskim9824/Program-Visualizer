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
import traceback
from turtle import bgcolor
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

###Main GUI Window ###
window = Tk()
window.title('plan visualizer WebGen')
window.iconbitmap('C:output/images/favicon.ico')
window.geometry("1092x544")
window.configure(bg = "#ffffff")
canvas = Canvas(
    window,
    bg = "#ffffff",
    height = 544,
    width = 1092,
    bd = 0,
    highlightthickness = 0,
    relief = "ridge")
canvas.place(x = 0, y = 0)
window.resizable(False, False)

###progress Bar##
def add_progbar():
    global progbar
    progbar = ttk.Progressbar(
    window,
    orient='horizontal',
    mode='determinate',
    length=280
    )
    progbar.place(
    x=635, y=470
    )


def progress():
    progbar['value']+= 8.5
    window.update_idletasks()
    return progbar['value']

def websiteGeneration(value_label):
    print("Beginning generation...")
    # opening the template html file and constructing html
    # note: here we calling parsing to extract the course data!
    try:  
        with open("template.html") as input:
            # deriving parsed html and creating soup object
            soup = BeautifulSoup(input, 'html.parser')
            
            # opening the JS files
            print("Opening files...")
            value_label['text'] = 'opening files'
            controller = open("./output/js/controller.js", "w")
            indexJS = open("./output/js/index.js", "w")
            progress()

            #opening the CSS file
            categoryCSS = open("./output/styles/category.css", "w")

            # creating line manager
            lineManager = linegen.LineManager()

            # parsing the excel files with course info, pulls dependencies (prereqs, coreqs, reqs) too
            print("Parsing courses...")
            value_label['text'] = 'parsing courses..'
            courseDict = courseparsing.parseCourses(courses_excel.get())
            progress()
            
            # pulling the category and color info from excel
            print("Parsing categories...")
            value_label['text'] = 'Parsing categories...'
            courseDict, categoryDict = categoriesparsing.parseCategories(courseCat_excel.get(), courseDict)
            progress()

            # writing colour highlighting CSS
            print("Writing category CSS...")
            value_label['text'] = 'Writing category CSS...'
            cssgen.writeCategoryCSS(categoryDict, categoryCSS)
            progress()

            # sequencing courses
            print("Parsing sequences....")
            value_label['text'] = 'Parsing sequences....'
            sequenceDict = sequenceparsing.parseSeq(seq_excel.get(), courseDict)
            progress()

            # extracting dept name for program sequence
            deptName = department.get()

            # extracting course group information
            courseGroupDict = coursegroupparsing.extractPlanCourseGroupDict(sequenceDict)
            courseGroupList = coursegroupparsing.findListofAllCourseGroups(courseGroupDict)
            intitalCourseGroupVals = coursegroupparsing.findIntitalValuesofCourseGroups(courseGroupDict, courseGroupList)


            # generating intital JS based on the number and names of plans
            print("Intialzing JS files....")
            value_label['text'] = 'Intialzing JS files....'
            javascriptgen.intializeControllerJavaScript(sequenceDict, 
                                                        intitalCourseGroupVals,
                                                        courseGroupDict,
                                                        courseGroupList, 
                                                        controller)
            progress()
            #locating title tag
            titleTag = soup.body.find("a", class_="site-title")

            #locating main div, this is where all the html will be written
            mainTag = soup.body.find("div", id="main")

    

            # customizing webpage title
            print("Writing title....")
            value_label['text'] = 'Writing title....'
            htmlgen.switchTitle(titleTag, deptName)
            progress()

            # locating form tag
            formTag = mainTag.find("form")

            # placing main radio inputs
            print("Placing radio inputs....")
            value_label['text'] = 'Placing radio inputs....'
            htmlgen.placeRadioInputs(formTag, courseGroupDict, soup)
            progress()

            # locating course group selector
            courseGroupSelectTag = soup.body.find("div", class_="coursegroupselector")

            # placing submenu radio inputs
            htmlgen.placeCourseGroupRadioInputs(courseGroupSelectTag, soup, courseGroupDict)

            # locating legend tag
            legendTag = mainTag.find("div", class_="legend")

            # places legend for color-coding
            print("Placing legend....")
            value_label['text'] = 'Placing legend....'
            htmlgen.placeLegend(legendTag, categoryDict, soup)
            progress()

            # Generating display tag, this is where the course divs will be written
            print("Generating display tag...")
            value_label['text'] = 'Generating display tag...'
            displayTag = htmlgen.generateDisplayDiv(soup, courseGroupList)
            progress()

            mainTag.append(displayTag)

            #placing the HTML and generating JS based on the courses (drawing lines)
            value_label['text'] = 'Placing course diagram....'
            print("Placing course diagram....")\
            # dummy input data
            electiveLinkDict = {"ITS": "https://calendar.ualberta.ca/preview_program.php?catoid=34&poid=38076#core_314374", 
                                "PROG": "https://calendar.ualberta.ca/preview_program.php?catoid=34&poid=38706&hl#core_331107", 
                                "COMP": "https://calendar.ualberta.ca/preview_program.php?catoid=34&poid=38076"}
            htmlgen.placePlanDivs(displayTag, 
                                  sequenceDict, 
                                  soup, 
                                  indexJS, 
                                  controller, 
                                  lineManager,
                                  electiveLinkDict)
            progress()
            # closing JS and CSS files
            print("Closing files...")
            value_label['text'] = 'Closing files...'
            javascriptgen.closeControllerJavaScript(controller)
            indexJS.close()
            categoryCSS.close()
            progress()
    except FileNotFoundError as err:
       if (err.strerror == "No such file or directory"):
        raise FileNotFoundError("Either the template HTML file is not in the same directory as the script or" +
       " the output directory is not organized correctly or does not exist")
       else:
        raise FileNotFoundError(str(err))
    return soup

def writingHTML(soup):
    # writing output to an output html
    try:
        print("Writing final HTML.....")
        with open("./output/index.html", "w", encoding="utf-8") as output:
            output.write(str(soup))
    except FileNotFoundError:
        raise FileNotFoundError("The directory you are in does not have a directory named output.")

def main():
    add_progbar()
    value_label = Label(window, bg="white")
    value_label.place(x=720, y= 495)
    try:
        soup = websiteGeneration(value_label)
        writingHTML(soup)
        print("Generation Completed!")
        value_label['text'] = 'Generation Completed!'
        messagebox.showinfo('Status',message="Webpage successfully generated!")
    except Exception as e:
        print("Error occured! Handling exception")
        messagebox.showerror("Error", str(e))
        traceback.print_exc()
    finally:
        progress()
        progbar.destroy()
        value_label.destroy()



###browse functions###
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

def show(selection):
    department.delete(0, END)
    department.insert(tkinter.END, selection) 

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
    text="Plan Visualizer WebGen\nUser Manual",
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


    message1 = Label(second_frame, 
    text="1- Make sure the directory you are in has a directory named output and a template.html file."
    )
    message1.grid(row=1, column=0,padx=20, pady=20)

    message2 = Label(second_frame, 
    text="2- Make sure you have the following Excel files (All Excel files must be in the .xls format): "
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
    pic1_description = Label(second_frame, text="This Excel file must contain\nall individual course information.")
    pic1_description.grid(row=4, column=0)

    pic2_description = Label(second_frame, text="This Excel file must contain course categories\nand all courses that fall under each category.")
    pic2_description.grid(row=4, column=1)

    pic3_description = Label(second_frame, text="This Excel file must contain\nall possible plan sequences.")
    pic3_description.grid(row=4, column=2)

    message3 = Label(second_frame, 
    text="3- Type in the Excel file name (if it's present in the same directory as the program files) or\n provide it's path:"
    )
    message3.grid(row=5, column=0,padx=20, pady=25)

    #GUI image 
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


menubar = Menu(window)
window.config(menu=menubar)
# create the Help menu
help_menu = Menu(
    menubar,
    tearoff=0
)

# adding the Help menu to the menubar
menubar.add_cascade(
    label="Help",
    menu=help_menu
)

help_menu.add_command(
    label='About...',
    command=new_window

)
help_menu.add_separator()
help_menu.add_command(
    label='Version1-2022',
    font='Times 10'
    
)

##Course Excel file UI##
courseEntry_img = PhotoImage(file = f"GUI_images/img_textBox0.png")
courseEntry_bg = canvas.create_image(
    774.5, 152.5,
    image = courseEntry_img)

courses_excel = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0,
    font='halvetica 12')
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
    highlightthickness = 0,
    font='halvetica 12')
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
    highlightthickness = 0,
    font='halvetica 12')
seq_excel.insert(tkinter.END, "")
seq_excel.place(
    x = 635, y = 289,
    width = 279,
    height = 33)

##department name UI##
deptEntry_img = PhotoImage(file = f"GUI_images/img_textBox3.png")
deptEntry_bg = canvas.create_image(
    774.5, 383.5,
    image = deptEntry_img)


department = Entry(
    bd = 0,
    bg = "#d9d9d9",
    highlightthickness = 0,
    font='halvetica 12')
department.insert(tkinter.END, "")
department.place(
    x = 635, y = 366,
    width = 279,
    height = 33)

##deptNames menu##
menubutton = tkinter.Menubutton(window, text="Select", font='Helvatica 13',
                           borderwidth=0, relief="raised",
                           indicatoron=True, bg='#27715B',fg='White', border=3)
deptMenu = tkinter.Menu(menubutton, tearoff=False)
menubutton.configure(menu=deptMenu)
deptMenu.add_radiobutton(label="Chemical Engineering", font='halvetica 12', command=lambda: show('Chemical Engineering'))
deptMenu.add_radiobutton(label="Civil Engineering", font='halvetica 12', command= lambda:show('Civil Engineering'))
deptMenu.add_radiobutton(label="Computer Engineering", font='halvetica 12', command= lambda:show('Computer Engineering'))
deptMenu.add_radiobutton(label="Electrical Engineering", font='halvetica 12', command= lambda:show('Electrical Engineering'))
deptMenu.add_radiobutton(label="Engineering Physics", font='halvetica 12',command= lambda:show('Engineering Physics'))
deptMenu.add_radiobutton(label="Materials Engineering", font='halvetica 12',command= lambda:show('Materials Engineering'))
deptMenu.add_radiobutton(label="Mechanical Engineering", font='halvetica 12',command= lambda:show('Mechanical Engineering'))
deptMenu.add_radiobutton(label="Mining Engineering", font='halvetica 12',command= lambda:show('Mining Engineering'))
deptMenu.add_radiobutton(label="Petroleum Engineering", font='halvetica 12',command= lambda:show('Petroleum Engineering'))

menubutton.place(x=954, y=366)

##Background image##
background_img = PhotoImage(file = f"GUI_images/background.png")
background = canvas.create_image(
    457.0, 272.0,
    image=background_img)

##Browse buttons##
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

##Generation button##
genImg = PhotoImage(file = f"GUI_images/img0.png")
generate_button = Button(
    image = genImg,
    borderwidth = 0,
    highlightthickness = 0,
    command = main,
    relief = "flat")

generate_button.place(
    x = 710, y = 415,
    width = 126,
    height = 43)







if __name__ == "__main__":
    window.mainloop()