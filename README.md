# MEC-E-Program-Visualizer

Project aimed to generate a web based diagram that visualizes the different program sequences available in the MEC E program
at the University of Alberta. Courses are displayed in boxes, with the calendar description of that course being displayed when
the corresponding box of the course is hovered over like so:
![highlightinghover1](https://user-images.githubusercontent.com/60327441/171228873-b33ece66-b9d1-4f6f-ace0-6fd219b1c60b.gif)


The webpage also allows a user to display the prerequisites and corequisites of a course, as well as the courses that
the course is a prerequisite or corequisite of, allowing them to interactively view the dependencies between different courses. 
![clickingspawn1](https://user-images.githubusercontent.com/60327441/171228912-524ab92f-c215-4be7-9dd6-ccdc4a63aad5.gif)



The webpage allows users to switch between the different program sequences as displayed below:
![switchingplans](https://user-images.githubusercontent.com/60327441/170582880-7feb5c07-18c9-4624-836d-a3875d182f69.gif)


The project, in its current state, consists of a Python script `main.py`. The Python script reads
Excel files containing course and program information along with a template HTML file (`template.html`) 
and produces an resultant HTML (`index.html`) in the `output` directory alongside the needed
Javascript files (`index.js` and `controller.js`) in `output/js.` The output directory contains the
files needed to be uploaded to the web server alongside with the webpage.

This project is initially designed for only MEC E programs at the University of Alberta, 
but can be expanded and generalized for any program sequence.

To produce a portable executable from the script: 
  - Run `pyinstaller main.py`
  - This will produce an executable called `main.exe`, as well as other files and directories. Remove the other files and directories as they are not needed

This project has the following dependencies:
  - LeaderLine for drawing lines between courses with a prerequisite or corequisite relation.
  - AngularJS for the front end logic
  - BeautifulSoup for generation of the final HTML
  - xlrd for parsing Excel files
  - copy (deepcopy function) in parsing.py to make a deepcopy of course objects for each plan
  - pyinstaller to convert the Python script into a portable executable

