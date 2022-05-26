# MEC-E-Program-Visualizer

Project aimed to generate a web based diagram that visualizes the different program sequences available in the MEC E program
at the University of Alberta. Courses are displayed in boxes, with the calendar description of that course being displayed when
the corresponding box of the course is hovered over like so:
![image](https://user-images.githubusercontent.com/60327441/170542026-00d049ca-30c1-471c-8e63-e161814d85db.png)

The webpage also allows a user to display the prerequisites and corequisites of a course, as well as the courses that
the course is a prerequisite or corequisite of, allowing them to interactively view the dependencies between different courses. 
![reqandcoreq](https://user-images.githubusercontent.com/60327441/170582565-eaa28b0c-5f97-48b9-83f2-04a713e77367.gif)


The webpage allows users to switch between the different program sequences as displayed below:
![image](https://user-images.githubusercontent.com/60327441/170541806-09a6ecb7-e169-4a1c-9800-37551ec19867.png)

The project, in its current state, consists of a MATLAB script parsing.m and a Python script main.py. The MATLAB script 
takes in Excel files which contain course and sequencing information, and outputs parsing.json. The script main.py then
reads this .json file along with a template HTML file (template.html) and produces an resultant HTML (template-output.hmtl)
and JS files (index.js and controller.js). 

This project is initially designed for only MEC E programs at the University of Alberta, 
but can be expanded and generalized for any program sequence.

This project has the following dependencies:
  - LeaderLine for drawing lines between courses with a prerequisite or corequisite relation.
  - AngularJS for the front end logic
  - BeautifulSoup for generation of the final HTML

