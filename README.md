# MEC-E-Program-Visualizer

Project aimed to generate a webpage that displays the sequence of different MEC E plans, based on a provided 
Excel file containing course information of the different courses, and an Excel file with the different course
sequneces for the MEC E plans.

The project will most likely constists of either a single Python script or executable that takes in Excel files containing course 
and sequence information and a template .html file, and generate a webpage with the different sequences displayed based on that
information.

This project is intially designed for only MEC E programs, but can be expanded and generailzed for any program seqeunce.

This project has the following dependencies:
  - LeaderLine for drawing lines between courses with a prerequisite or corequisite relation.
  - AngularJS for the front end logic
  - BeautifulSoup for generation of the final HTML
