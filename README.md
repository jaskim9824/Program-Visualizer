# Program-Visualizer

Developed by: Jason Kim, Moaz Abdelmonem, and Zachary Schmidt under the supervision of Dr. David Nobes (University of Alberta)
in the Summer of 2022

Program written in Python to generate an interactive web based diagram that visualizes the different program sequences available in engineering programs
at the University of Alberta.

Courses are displayed in boxes, with the calendar description of that course being displayed when
the corresponding box of the course is hovered over as shown below. The course will be coloured according to its "category", which
is configured and detrimined by the website creator.
![hovercoursesREPO1](https://user-images.githubusercontent.com/60327441/173874470-39ed97e7-4ff8-452e-8304-39bb2b48c2c5.gif)

The webpage also allows a user to display the prerequisites and corequisites of a course, as well as the courses that
the course is a prerequisite or corequisite of, allowing them to interactively view the dependencies between different courses.
![clickspawnREPO1](https://user-images.githubusercontent.com/60327441/173874907-61b7dfe5-df1a-4748-80c5-ae9ada3aab0d.gif)

The webpage allows users to switch between the different program sequences as displayed below. 
![planswitchingREPO1](https://user-images.githubusercontent.com/60327441/173875138-fa3b8ba0-f19f-4582-9b25-e703e4f1e692.gif)

Note that certain plans have different "course groups", so in order to switch between the options (each option is treated as its own "plan"),
select the options on the right on the plan selection menu.
![subplanswitchingREPO1](https://user-images.githubusercontent.com/60327441/173875409-3e3f3485-223d-4a51-864c-437124775ab0.gif)

The webpage also allows users to highlight/unhighlight courses of a specific category using the buttons shown below.
![coursehighlightREPO1](https://user-images.githubusercontent.com/60327441/173875712-23d82a8c-84cf-4b71-9c4e-94148e8a89d7.gif)

The program can be run as a Python script using `/src/main.py` and the Python modules located in `/src/modules/`. In order to properly run the script,
the template HTML file `/src/template.html` and the directories `/src/output/` and `/src/GUI-images` must be located in the same directory as the script. You must also
prepare three Excel files (`.xls` files, note that `.xlsx` files will NOT work) which specify course, sequencing and course category information. Details on how to format these Excel files can be found in the user manual.

The program can also be run as a portable executable located in the `.zip` files in `/releases/`. These `.zip` files package the executable and neccesary files needed
for the execution of the program. To use, simply download the `.zip` and extract the files, and run the executable. Note that you should NOT modify any of the files provided in the `.zip` and that the executable, currently, only works for 64-bit Windows machines.

To produce a portable executable from the script: 
  - Run `pyinstaller main.py -F --onefile -n programVisualizer`
  - This will produce an executable called `programVisualizer.exe` in the `dist` directory produced, as well as other files and directories. Remove the other files and directories as they are not needed
  
Upon running, the program will launch a GUI that will prompt you to locate the aforementoined Excel files and input the name of the departement which you are generating the program sequences for. The products of the program will be found in the `output` directory, which you should upload the contents of to the 
web server hosting the diagram.
 
This project requires Python 3.6 or higher.

This project has the following dependencies:
  - LeaderLine for drawing lines between courses with a prerequisite or corequisite relation.
  - AngularJS for the front end logic
  - BeautifulSoup for generation of the final HTML
  - xlrd for parsing Excel files
  - pyinstaller to convert the Python script into a portable executable
