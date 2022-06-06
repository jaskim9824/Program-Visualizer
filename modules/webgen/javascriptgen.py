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
    formattedFunctionStatement = """this.{functionName} = function(plan) {{
    switch (plan) {{ \n"""
    formattedSwitchStatement = """  case "{planName}": 
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
    break; \n"""
    switchEndString = """    default:
    console.log("shouldn't be here");
    }
};\n"""
    controller.write(formattedFunctionStatement.format(functionName="enable"))
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

def generateHighlightCategory(sequenceDict, controller):
    # Creating a dict that stores category as key, and another dict with plan as key
    # and course object as value. This keeps courses in the same plan and category
    # grouped together
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
                
    # flags for click on legend
    formattedCategoriesFlagStatement = """var {categoryName}flag = false;\n"""
    for category in categoriesDict:
        if category != "":
            controller.write(formattedCategoriesFlagStatement.format(categoryName = cleaner.cleanString(category)))

    # listener for each category
    formattedCategoriesListener = """$scope.{categoryName}clickListener = function() {{
    if (!{categoryName}flag) {{
        that.highlightCategory("{categoryName}", $scope.selectedPlan);
        {categoryName}flag = true
    }}
    else {{
        that.unhighlightCategory("{categoryName}", $scope.selectedPlan);
        {categoryName}flag = false
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
    formattedAddToClicked = """       {courseName}{planName}element.classList.add("{categoryName}-highlighted");\n"""

    # remove from list of clicked
    formattedRemoveClicked = """       {courseName}{planName}element.classList.remove("{categoryName}-highlighted");\n"""

    # add to list of unclicked
    formattedAddToUnclicked = """       {courseName}{planName}element.classList.add("{categoryName}");\n"""

    for category in categoriesDict:
        # adding listener for each category
        controller.write(formattedCategoriesListener.format(categoryName=category))
        controller.write("}\n")

    controller.write(formattedFunctionStatement.format(functionName="highlightCategory"))
    for category in categoriesDict:
        # outer switch between categories
        controller.write(formattedCaseCat.format(categoryName=cleaner.cleanString(category)))
        controller.write("    switch(planName) {\n")
        for plan in categoriesDict[category]:
            # inner switch between plans
            controller.write(formattedCasePlan.format(planName=cleaner.cleanString(plan)))
            for course in categoriesDict[category][plan]:
                # add the statements for each course (add to clicked, remove from unclicked)
                controller.write(formattedGetElement.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name)))
                controller.write(formattedRemoveUnclicked.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name), categoryName=cleaner.cleanString(category)))
                controller.write(formattedAddToClicked.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name), categoryName=cleaner.cleanString(category)))
            controller.write("""       break;\n""")
        controller.write("""       }\n""")
        controller.write("""      break;\n""")

    controller.write(switchEndString)

    # same as above but for deselecting a course category
    controller.write(formattedFunctionStatement.format(functionName="unhighlightCategory"))
    for category in categoriesDict:
        controller.write(formattedCaseCat.format(categoryName=cleaner.cleanString(category)))
        controller.write("    switch(planName) {\n")
        for plan in categoriesDict[category]:
            controller.write(formattedCasePlan.format(planName=cleaner.cleanString(plan)))
            for course in categoriesDict[category][plan]:
                controller.write(formattedGetElement.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name)))
                controller.write(formattedRemoveClicked.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name), categoryName=cleaner.cleanString(category)))
                controller.write(formattedAddToUnclicked.format(planName=cleaner.cleanString(plan), courseName=cleaner.cleanString(course.name), categoryName=cleaner.cleanString(category)))
            controller.write("""       break;\n""")
        controller.write("""       }\n""")
        controller.write("""      break;\n""")

    controller.write(switchEndString)