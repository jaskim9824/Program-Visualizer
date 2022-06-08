# Author: Jason Kim
# Collaborators: Zachary Schmidt, Moaz Abdelmonem
# Oversight: Dr. David Nobes
# University of Alberta, Summer 2022, Curriculum Development Co-op Term

# This file contains all the functions neccessary to generate the JS of the 
# webpage which is not releated to the generation of the lines

# Dependencies: cleaner

from .. import cleaner

# Function that generates the JS before the generation of the course diagram
# Parameters:
#   controller - file handle for controller JS file
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
def intializeControllerJavaScript(controller, sequenceDict):
    generateIntitalBlockController(controller, sequenceDict)
    generatePlanBasedBlocksController(controller, sequenceDict)

# Function that properly concludes and closes the controller JS
#   controller - file handle for controller JS
def closeControllerJavaScript(controller):
    controller.write("});")
    controller.close()


# Function that generates the intital block of Javascript
# Parameters:
#   controller - file handle for controller JS file
def generateIntitalBlockController(controller, sequenceDict):
    planList = list(sequenceDict.keys())
    controller.write("var app = angular.module(\"main\", []);\n")
    controller.write("app.controller(\"main\", function($scope) { \n")
    controller.write("$scope.selectedPlan = \"" + cleaner.cleanString(planList[0])+ "\";\n")
    controller.write("var that = this;\n")
    controller.write("this.previousPlan = $scope.selectedPlan;\n")

    controller.write("""this.render = function(plan) {
            this.disable(this.previousPlan);
            this.enable(plan);
            this.previousPlan = plan;
};\n""")

    controller.write("""var radios = document.querySelectorAll("input[type=radio][name=planselector");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () {
        that.render($scope.selectedPlan);
    });
});\n""")

# Function that generates the blocks of the controller JS that is dependent
# on the number and names of plans provided
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
def generatePlanBasedBlocksController(controller, sequenceDict):
    for plan in sequenceDict:
        controller.write("this." + cleaner.cleanString(plan) + "List = [];\n")
        controller.write("this." + cleaner.cleanString(plan) + "Clicked = [];\n")
        controller.write("this." + cleaner.cleanString(plan) + "LegendBtns = [];\n")
        controller.write("this." + cleaner.cleanString(plan) + "LegendBtnsClicked = [];\n")
        numterms = len(sequenceDict[plan].keys())
        controller.write("this." + cleaner.cleanString(plan) + "Terms = " + str(numterms) + ";\n")
    generateDisableSwitchStatement(sequenceDict, controller)
    generateEnableSwitchStatement(sequenceDict, controller)
    generateAddLineSwitch(sequenceDict, controller)
    generateDeleteLineSwitch(sequenceDict, controller)
    generateAddToClickSwitch(sequenceDict, controller)
    generateDeleteFromClickSwitch(sequenceDict, controller)
    generateHighlightCategory(sequenceDict, controller)

# Function that generates the switch statements and functions which handle
# disabling the lines of a plan when switched off
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
def generateDisableSwitchStatement(sequenceDict, controller):
    formattedFunctionStatement = """this.{functionName} = function(plan) {{
    switch (plan) {{ \n"""
    formattedSwitchStatement = """  case "{planName}": 
    for (let i = 0; i < this.{planName}List.length; i++) {{
        this.{planName}List[i][0].{actionName}(true);
    }}
    break; \n"""
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    controller.write(formattedFunctionStatement.format(functionName="disable"))
    for plan in sequenceDict:
        controller.write(formattedSwitchStatement.format(planName=cleaner.cleanString(plan), 
                                                         actionName="hide"))
    controller.write(switchEndString)


# Function that generates the switch statements and functions which handle
# enabling the lines of plan when switched on
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
def generateEnableSwitchStatement(sequenceDict, controller):

    categoriesDict = sortIntoCategories(sequenceDict)
    formattedbtnStatement = """  var currbtn = document.getElementById("{categoryName}");\n"""
    formattedpushbtnStatement = """  that.{planName}LegendBtns.push(currbtn);\n"""
    for category in categoriesDict:
        if category == "ComplementaryElective":
            controller.write(formattedbtnStatement.format(categoryName="COMP"))
        elif category == "ProgramTechnicalElective":
            controller.write(formattedbtnStatement.format(categoryName="PROG"))
        elif category == "ITSElective":
            controller.write(formattedbtnStatement.format(categoryName="ITS"))
        else:
            controller.write(formattedbtnStatement.format(categoryName=category))

        for plan in categoriesDict[category]:
            controller.write(formattedpushbtnStatement.format(planName=plan))

    formattedFunctionStatement = """this.{functionName} = function(plan) {{\n"""
    formattedSwitchStatement = """    case "{planName}": 
      for (let i = 0; i < this.{planName}List.length; i++) {{
          this.{planName}List[i][0].{actionName}(true);
      }}
      width = this.{planName}Terms*210 + 50;
      widthstr = width.toString() + "px";
      document.getElementById("header").style.width = widthstr;
      document.getElementById("footer").style.width = widthstr;
      for (let i = 0; i < this.{planName}Clicked.length; i++) {{
          var element = document.getElementById(this.{planName}Clicked[i][0]);
          element.classList.remove(this.{planName}Clicked[i][1]);
          element.classList.add(this.{planName}Clicked[i][1]+"-highlighted");
      }}
      for (let i = 0; i < this.{planName}LegendBtns.length; i++) {{
          var found = false;
          for (let j = 0; j < this.{planName}LegendBtnsClicked.length; j++) {{
              if (this.{planName}LegendBtnsClicked[j] == this.{planName}LegendBtns[i]) {{
                  found = true;
              }}
          }}
          if (found == false) {{
              this.{planName}LegendBtns[i].classList.remove("legendbutton-pressed");
              this.{planName}LegendBtns[i].classList.add("legendbutton");
          }}
          if (found == true) {{
              this.{planName}LegendBtns[i].classList.remove("legendbutton");
              this.{planName}LegendBtns[i].classList.add("legendbutton-pressed");
          }}
      }}
      break; \n"""
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    controller.write(formattedFunctionStatement.format(functionName="enable"))
    controller.write("""  switch(plan) {\n""")
    for plan in sequenceDict:
        controller.write(formattedSwitchStatement.format(planName=cleaner.cleanString(plan), 
                                                         actionName="show"))

    controller.write(switchEndString)

# Function that generates the switch statement and function addLine
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
def generateAddLineSwitch(sequenceDict, controller):
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    formattedFunctionStatement = """this.{functionName} = function(line) {{
switch($scope.selectedPlan) {{ \n"""
    formattedAddLineSwitchStatement = """ case "{planName}":
    var index = this.{planName}List.findIndex((element) => element[0] == line);
    if (index == -1) {{
        line.show(false);
        this.{planName}List.push([line, 1])
    }}
    else {{
        this.{planName}List[index][1]++;
    }}
    break;\n"""
    controller.write(formattedFunctionStatement.format(functionName="addLine"))
    for plan in sequenceDict:
        controller.write(formattedAddLineSwitchStatement.format(planName=cleaner.cleanString(plan)))
    controller.write(switchEndString)


# Function that generates the switch statement and function removeLine
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
def generateDeleteLineSwitch(sequenceDict, controller):
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    formattedFunctionStatement = """this.{functionName} = function(line) {{
switch($scope.selectedPlan) {{ \n"""
    formmattedDeleteLineSwitchStatement = """ case "{planName}":
    var index = this.{planName}List.findIndex((element) => element[0] == line);
    if (index != -1) {{
        this.{planName}List[index][1]--
        if (this.{planName}List[index][1] <= 0) {{
            line.hide(false);
            this.{planName}List.splice(index, 1);
        }}
    }}
    break;"""
    controller.write(formattedFunctionStatement.format(functionName="removeLine"))

    for plan in sequenceDict:
        controller.write(formmattedDeleteLineSwitchStatement.format(planName=cleaner.cleanString(plan)))

    controller.write(switchEndString)

# Function that generates the switch statement associated with the addToClicked method
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
def generateAddToClickSwitch(sequenceDict, controller):
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    formattedFunctionStatement = """this.{functionName} = function(element) {{
switch($scope.selectedPlan) {{ \n"""
    formattedAddToClickStatement = """ case "{planName}":
    var index = this.{planName}Clicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {{
        this.{planName}Clicked.push(element);
    }}
    break;"""
    controller.write(formattedFunctionStatement.format(functionName="addToClicked"))
    for plan in sequenceDict:
        controller.write(formattedAddToClickStatement.format(planName=cleaner.cleanString(plan)))
    
    controller.write(switchEndString)

# Function that generates the switch statement associated with the deleteFromClicked method
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
def generateDeleteFromClickSwitch(sequenceDict, controller):
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    formattedFunctionStatement = """this.{functionName} = function(element) {{
switch($scope.selectedPlan) {{ \n"""
    formattedAddToClickStatement = """ case "{planName}":
    var index = this.{planName}Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {{
        this.{planName}Clicked.splice(index, 1);
    }}
    break;"""
    controller.write(formattedFunctionStatement.format(functionName="removeFromClicked"))
    for plan in sequenceDict:
        controller.write(formattedAddToClickStatement.format(planName=cleaner.cleanString(plan)))
    
    controller.write(switchEndString)

# Generates the clickable category legend. Allows a click to highlight all
# courses in that category.
# Parameters:
#   sequenceDict - dict that maps plan name to a dict that represents the plan sequence
#   controller - file handle for controller.js file
# Returns:
#   None
def generateHighlightCategory(sequenceDict, controller):
    # sort courses into categories and plans
    categoriesDict = sortIntoCategories(sequenceDict)
                
    # flags for click on legend
    formattedCategoriesFlagStatement = """var {categoryName}{planName}flag = false;\n"""
    for category in categoriesDict:
        for plan in categoriesDict[category]:
            if category != "":
                controller.write(formattedCategoriesFlagStatement.format(categoryName = cleaner.cleanString(category), 
                                                                        planName = cleaner.cleanString(plan)))

    # listener for each category
    formattedCategoriesListener = """$scope.{categoryName}clickListener = function() {{
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("{categoryNameId}");
    var checkFlag = "!{categoryName}" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {{
        that.highlightCategory("{categoryName}", $scope.selectedPlan);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "{categoryName}" + planName + "flag";
        eval(flagName + " = true");
    }}
    else {{
        that.unhighlightCategory("{categoryName}", $scope.selectedPlan);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "{categoryName}" + planName + "flag";
        eval(flagName + " = false");
    }}\n"""

    # first switch statement between categories
    formattedFunctionStatement = """this.{functionName} = function(categoryName, planName) {{
switch(categoryName) {{ \n"""
    
    switchEndString = """break;   default:
    console.log("shouldn't be here");
    }
};\n"""

    # formatted case statements
    formattedCasePlan  = """      case "{planName}":\n"""

    formattedCaseCat = """  case "{categoryName}":\n"""

    # finding the element with the appropriate id
    formattedGetElement = """       var {courseName}{planName}element = document.getElementById("{courseName}{planName}");\n"""

    # remove from list of unclicked
    formattedRemoveUnclicked = """       {courseName}{planName}element.classList.remove("{categoryName}");\n"""

    # add to list of clicked
    formattedAddToClicked = """       {courseName}{planName}element.classList.add("{categoryName}-highlighted");
       that.addToClicked(["{courseName}{planName}","{categoryName}"]);\n"""

    # remove from list of clicked
    formattedRemoveClicked = """       {courseName}{planName}element.classList.remove("{categoryName}-highlighted");\n"""

    # add to list of unclicked
    formattedAddToUnclicked = """       {courseName}{planName}element.classList.add("{categoryName}");\n       
       that.removeFromClicked("{courseName}{planName}");\n"""

    # special case for electives
    formattedElectiveGetUnhighlightedElement = """        var {electiveName}elements = document.getElementsByClassName("{electiveName}");\n"""
    formattedElectiveGetHighlightedElement = """        var {electiveName}elements = document.getElementsByClassName("{electiveName}-highlighted");\n"""
    formattedElectivesHighlight = """        for (let i = 0; i < {electiveName}elements.length; i++) {{
          var currelement = document.getElementById({electiveName}elements.item(i).id);
          currelement.classList.remove("{electiveName}");
          currelement.classList.add("{electiveName}-highlighted");
          that.addToClicked(["{longElectiveName}{planName}{count}","{categoryName}"]);
        }}\n"""
    formattedElectivesUnhighlight = """        for (let i = 0; i < {electiveName}elements.length; i++) {{
          var currelement = document.getElementById({electiveName}elements.item(i).id);
          currelement.classList.remove("{electiveName}-highlighted");
          currelement.classList.add("{electiveName}");
          that.removeFromClicked("{longElectiveName}{planName}{count}");
        }}\n"""

    for category in categoriesDict:
        if category == "ComplementaryElective":
            controller.write(formattedCategoriesListener.format(categoryName=category, categoryNameId="COMP"))
        elif category == "ProgramTechnicalElective":
            controller.write(formattedCategoriesListener.format(categoryName=category, categoryNameId="PROG"))
        elif category == "ITSElective":
            controller.write(formattedCategoriesListener.format(categoryName=category, categoryNameId="ITS"))
        else:
            # adding listener for each category
            controller.write(formattedCategoriesListener.format(categoryName=category, categoryNameId=category))
        controller.write("}\n")

    controller.write(formattedFunctionStatement.format(functionName="highlightCategory"))
    for category in categoriesDict:
        # outer switch between categories
        controller.write(formattedCaseCat.format(categoryName=cleaner.cleanString(category)))
        controller.write("    switch(planName) {\n")
        for plan in categoriesDict[category]:
            # inner switch between plans
            controller.write(formattedCasePlan.format(planName=cleaner.cleanString(plan)))
            compcounter = 0
            progcounter = 0
            itscounter = 0
            for course in categoriesDict[category][plan]:
                if course.name == "Complementary Elective":
                    controller.write(formattedElectiveGetUnhighlightedElement.format(electiveName="COMP"))
                    controller.write(formattedElectivesHighlight.format(electiveName="COMP", count=compcounter, longElectiveName="ComplementaryElective", planName=plan, categoryName="COMP"))
                    compcounter += 1
                    continue
                if course.name == "Program/Technical Elective":
                    controller.write(formattedElectiveGetUnhighlightedElement.format(electiveName="PROG"))
                    controller.write(formattedElectivesHighlight.format(electiveName="PROG", count=progcounter, longElectiveName="ProgramTechnicalElective", planName=plan, categoryName="PROG"))
                    progcounter += 1
                    continue
                if course.name == "ITS Elective":
                    controller.write(formattedElectiveGetUnhighlightedElement.format(electiveName="ITS"))
                    controller.write(formattedElectivesHighlight.format(electiveName="ITS", count=itscounter, longElectiveName="ITSElective", planName=plan, categoryName="ITS"))
                    itscounter += 1
                    continue
                controller.write(formattedGetElement.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name)))
                controller.write(formattedRemoveUnclicked.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name), categoryName=cleaner.cleanString(category)))
                controller.write(formattedAddToClicked.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name), categoryName=cleaner.cleanString(category)))
           
            controller.write("""       break;\n""")
        controller.write("""       }\n""")
        controller.write("""      break;\n""")

    controller.write(switchEndString)

    # same as above but for deselecting a course category
    formattedIfStatement = "if (!{courseName}{planName}flag) {{ \n"
    controller.write(formattedFunctionStatement.format(functionName="unhighlightCategory"))
    for category in categoriesDict:
        controller.write(formattedCaseCat.format(categoryName=cleaner.cleanString(category)))
        controller.write("    switch(planName) {\n")
        for plan in categoriesDict[category]:
            compcounter = 0
            progcounter = 0
            itscounter = 0
            controller.write(formattedCasePlan.format(planName=cleaner.cleanString(plan)))
            for course in categoriesDict[category][plan]:
                if course.name == "Complementary Elective":
                    controller.write(formattedElectiveGetHighlightedElement.format(electiveName="COMP"))
                    controller.write(formattedElectivesUnhighlight.format(electiveName="COMP", longElectiveName="ComplementaryElective", count=compcounter, planName=plan, categoryName="COMP"))
                    compcounter += 1
                    continue
                if course.name == "Program/Technical Elective":
                    controller.write(formattedElectiveGetHighlightedElement.format(electiveName="PROG"))
                    controller.write(formattedElectivesUnhighlight.format(electiveName="PROG", longElectiveName="ProgramTechnicalElective", count=progcounter, planName=plan, categoryName="PROG"))
                    progcounter += 1
                    continue
                if course.name == "ITS Elective":
                    controller.write(formattedElectiveGetHighlightedElement.format(electiveName="ITS"))
                    controller.write(formattedElectivesUnhighlight.format(electiveName="ITS", longElectiveName="ITSElective", count=itscounter, planName=plan, categoryName="ITS"))
                    itscounter += 1
                    continue
                controller.write(formattedIfStatement.format(planName=cleaner.cleanString(plan), 
                                                             courseName=cleaner.cleanString(course.name)))
                controller.write(formattedGetElement.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name)))
                controller.write(formattedRemoveClicked.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name), categoryName=cleaner.cleanString(category)))
                controller.write(formattedAddToUnclicked.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name), categoryName=cleaner.cleanString(category)))
                controller.write(" } \n")
            controller.write("""       break;\n""")
        controller.write("""       }\n""")
        controller.write("""      break;\n""")

    controller.write(switchEndString)

# Sorts courses in sequnceDict into their 
def sortIntoCategories(sequenceDict):
    categoriesDict = {}  # outer dict
    for plan in sequenceDict:
        for term in sequenceDict[plan]:
            for course in sequenceDict[plan][term]:
                cat = cleaner.cleanString(course.category)
                cleanplan = cleaner.cleanString(plan)
                interdict = {}  # inner dict
                interdict[cleanplan] = [course]
                if cat not in categoriesDict.keys():
                    # category not taken yet, add new category and new course list
                    categoriesDict[cat] = interdict
                else:
                    # category is present in dict
                    if cleanplan not in categoriesDict[cat].keys():
                        # category taken but not plan
                        # keep existing categories but add a new plan
                        categoriesDict[cat].update(interdict)
                    else:
                        # add to the existing list of courses in that plan in that category
                        categoriesDict[cat][cleanplan].append(course)
    
    return categoriesDict