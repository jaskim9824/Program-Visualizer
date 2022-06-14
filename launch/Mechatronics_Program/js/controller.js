var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "MechatronicsPlan";
var that = this;
this.render = function(plan) {
            this.disable(this.previousPlan);
            this.enable(plan);
            this.previousPlan = plan;
};
var radios = document.querySelectorAll("input[type=radio][name=planselector]");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () { 
that.setDefaults($scope.selectedPlan);
that.render($scope.selectedPlan);
   });
});
this.MechatronicsPlanList = [];
this.MechatronicsPlanClicked = [];
this.MechatronicsPlanLegendBtns = [];
this.MechatronicsPlanLegendBtnsClicked = [];
this.MechatronicsPlanTerms = 8;
this.MechatronicsPlanMaxCourses = 7;
this.previousPlan = $scope.selectedPlan
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "MechatronicsPlan": 
          $scope.$apply();
          break;
    default:
    console.log("shouldn't be here");
    }
};
$scope.globalSubGroupChange = function () { 
that.render($scope.selectedPlan);
};
this.disable = function(plan) {
    switch (plan) { 
  case "MechatronicsPlan": 
    for (let i = 0; i < this.MechatronicsPlanList.length; i++) {
        this.MechatronicsPlanList[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
  var currbtn = document.getElementById("NaturalSciences");
  that.MechatronicsPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.MechatronicsPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.MechatronicsPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.MechatronicsPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.MechatronicsPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.MechatronicsPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Mechatronics");
  that.MechatronicsPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.MechatronicsPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.MechatronicsPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.MechatronicsPlanLegendBtns.push(currbtn);
this.enable = function(plan) {
  switch(plan) {
    case "MechatronicsPlan": 
      for (let i = 0; i < this.MechatronicsPlanList.length; i++) {
          this.MechatronicsPlanList[i][0].show(true);
      }
      width = this.MechatronicsPlanTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.MechatronicsPlanMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.MechatronicsPlanClicked.length; i++) {
          var element = document.getElementById(this.MechatronicsPlanClicked[i][0]);
          element.classList.remove(this.MechatronicsPlanClicked[i][1]);
          element.classList.add(this.MechatronicsPlanClicked[i][1]+"-highlighted");
      }
      for (let i = 0; i < this.MechatronicsPlanLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.MechatronicsPlanLegendBtnsClicked.length; j++) {
              if (this.MechatronicsPlanLegendBtnsClicked[j] == this.MechatronicsPlanLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.MechatronicsPlanLegendBtns[i].classList.remove("legendbutton-pressed");
              this.MechatronicsPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.MechatronicsPlanLegendBtns[i].classList.remove("legendbutton");
              this.MechatronicsPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    default:
    console.log("shouldn't be here");
    }
};
this.addLine = function(line) {
switch($scope.selectedPlan) { 
 case "MechatronicsPlan":
    var index = this.MechatronicsPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.MechatronicsPlanList.push([line, 1])
    }
    else {
        this.MechatronicsPlanList[index][1]++;
    }
    break;
    default:
    console.log("shouldn't be here");
    }
};
this.removeLine = function(line) {
switch($scope.selectedPlan) { 
 case "MechatronicsPlan":
    var index = this.MechatronicsPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.MechatronicsPlanList[index][1]--
        if (this.MechatronicsPlanList[index][1] <= 0) {
            line.hide(false);
            this.MechatronicsPlanList.splice(index, 1);
        }
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.addToClicked = function(element) {
switch($scope.selectedPlan) { 
 case "MechatronicsPlan":
    var index = this.MechatronicsPlanClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.MechatronicsPlanClicked.push(element);
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.removeFromClicked = function(element) {
switch($scope.selectedPlan) { 
 case "MechatronicsPlan":
    var index = this.MechatronicsPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.MechatronicsPlanClicked.splice(index, 1);
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
var NaturalSciencesMechatronicsPlanflag = false;
var EngineeringProfessionMechatronicsPlanflag = false;
var OtherMechatronicsPlanflag = false;
var MathMechatronicsPlanflag = false;
var EngineeringDesignMechatronicsPlanflag = false;
var EngineeringSciencesMechatronicsPlanflag = false;
var MechatronicsMechatronicsPlanflag = false;
var COMPMechatronicsPlanflag = false;
var ITSMechatronicsPlanflag = false;
var PROGMechatronicsPlanflag = false;
$scope.NaturalSciencesclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("NaturalSciences");
    var checkFlag = "!NaturalSciences" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("NaturalSciences", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "NaturalSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("NaturalSciences", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "NaturalSciences" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.EngineeringProfessionclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("EngineeringProfession");
    var checkFlag = "!EngineeringProfession" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("EngineeringProfession", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringProfession" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringProfession", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringProfession" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.OtherclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("Other");
    var checkFlag = "!Other" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("Other", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Other" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Other", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Other" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.MathclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("Math");
    var checkFlag = "!Math" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("Math", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Math" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Math", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Math" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.EngineeringDesignclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("EngineeringDesign");
    var checkFlag = "!EngineeringDesign" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("EngineeringDesign", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringDesign" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringDesign", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringDesign" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.EngineeringSciencesclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("EngineeringSciences");
    var checkFlag = "!EngineeringSciences" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("EngineeringSciences", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringSciences", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringSciences" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.MechatronicsclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("Mechatronics");
    var checkFlag = "!Mechatronics" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("Mechatronics", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Mechatronics" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Mechatronics", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Mechatronics" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.COMPclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("COMP");
    var checkFlag = "!COMP" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("COMP", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "COMP" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("COMP", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "COMP" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.ITSclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("ITS");
    var checkFlag = "!ITS" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("ITS", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "ITS" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("ITS", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "ITS" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.PROGclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("PROG");
    var checkFlag = "!PROG" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("PROG", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "PROG" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("PROG", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "PROG" + planName + "flag";
        eval(flagName + " = false");
    }
}
this.highlightCategory = function(categoryName, planName) {
switch(categoryName) { 
  case "NaturalSciences":
    switch(planName) {
      case "MechatronicsPlan":
       var CHEM103MechatronicsPlanelement = document.getElementById("CHEM103MechatronicsPlan");
       CHEM103MechatronicsPlanelement.classList.remove("NaturalSciences");
       CHEM103MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM103MechatronicsPlan","NaturalSciences"]);
       var ENGG130MechatronicsPlanelement = document.getElementById("ENGG130MechatronicsPlan");
       ENGG130MechatronicsPlanelement.classList.remove("NaturalSciences");
       ENGG130MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENGG130MechatronicsPlan","NaturalSciences"]);
       var PHYS130MechatronicsPlanelement = document.getElementById("PHYS130MechatronicsPlan");
       PHYS130MechatronicsPlanelement.classList.remove("NaturalSciences");
       PHYS130MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["PHYS130MechatronicsPlan","NaturalSciences"]);
       var CHEM105MechatronicsPlanelement = document.getElementById("CHEM105MechatronicsPlan");
       CHEM105MechatronicsPlanelement.classList.remove("NaturalSciences");
       CHEM105MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM105MechatronicsPlan","NaturalSciences"]);
       var ENCMP100MechatronicsPlanelement = document.getElementById("ENCMP100MechatronicsPlan");
       ENCMP100MechatronicsPlanelement.classList.remove("NaturalSciences");
       ENCMP100MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENCMP100MechatronicsPlan","NaturalSciences"]);
       var ENPH131MechatronicsPlanelement = document.getElementById("ENPH131MechatronicsPlan");
       ENPH131MechatronicsPlanelement.classList.remove("NaturalSciences");
       ENPH131MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENPH131MechatronicsPlan","NaturalSciences"]);
       var MECE230MechatronicsPlanelement = document.getElementById("MECE230MechatronicsPlan");
       MECE230MechatronicsPlanelement.classList.remove("NaturalSciences");
       MECE230MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["MECE230MechatronicsPlan","NaturalSciences"]);
       var MATE201MechatronicsPlanelement = document.getElementById("MATE201MechatronicsPlan");
       MATE201MechatronicsPlanelement.classList.remove("NaturalSciences");
       MATE201MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["MATE201MechatronicsPlan","NaturalSciences"]);
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "MechatronicsPlan":
       var ENGG100MechatronicsPlanelement = document.getElementById("ENGG100MechatronicsPlan");
       ENGG100MechatronicsPlanelement.classList.remove("EngineeringProfession");
       ENGG100MechatronicsPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG100MechatronicsPlan","EngineeringProfession"]);
       var ENGG299MechatronicsPlanelement = document.getElementById("ENGG299MechatronicsPlan");
       ENGG299MechatronicsPlanelement.classList.remove("EngineeringProfession");
       ENGG299MechatronicsPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG299MechatronicsPlan","EngineeringProfession"]);
       var ENGG404MechatronicsPlanelement = document.getElementById("ENGG404MechatronicsPlan");
       ENGG404MechatronicsPlanelement.classList.remove("EngineeringProfession");
       ENGG404MechatronicsPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG404MechatronicsPlan","EngineeringProfession"]);
       var ENGG400MechatronicsPlanelement = document.getElementById("ENGG400MechatronicsPlan");
       ENGG400MechatronicsPlanelement.classList.remove("EngineeringProfession");
       ENGG400MechatronicsPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG400MechatronicsPlan","EngineeringProfession"]);
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "MechatronicsPlan":
       var ENGL199MechatronicsPlanelement = document.getElementById("ENGL199MechatronicsPlan");
       ENGL199MechatronicsPlanelement.classList.remove("Other");
       ENGL199MechatronicsPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGL199MechatronicsPlan","Other"]);
       var ENGM401MechatronicsPlanelement = document.getElementById("ENGM401MechatronicsPlan");
       ENGM401MechatronicsPlanelement.classList.remove("Other");
       ENGM401MechatronicsPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM401MechatronicsPlan","Other"]);
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "MechatronicsPlan":
       var MATH100MechatronicsPlanelement = document.getElementById("MATH100MechatronicsPlan");
       MATH100MechatronicsPlanelement.classList.remove("Math");
       MATH100MechatronicsPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH100MechatronicsPlan","Math"]);
       var MATH101MechatronicsPlanelement = document.getElementById("MATH101MechatronicsPlan");
       MATH101MechatronicsPlanelement.classList.remove("Math");
       MATH101MechatronicsPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH101MechatronicsPlan","Math"]);
       var MATH102MechatronicsPlanelement = document.getElementById("MATH102MechatronicsPlan");
       MATH102MechatronicsPlanelement.classList.remove("Math");
       MATH102MechatronicsPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH102MechatronicsPlan","Math"]);
       var MATH201MechatronicsPlanelement = document.getElementById("MATH201MechatronicsPlan");
       MATH201MechatronicsPlanelement.classList.remove("Math");
       MATH201MechatronicsPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH201MechatronicsPlan","Math"]);
       var MATH209MechatronicsPlanelement = document.getElementById("MATH209MechatronicsPlan");
       MATH209MechatronicsPlanelement.classList.remove("Math");
       MATH209MechatronicsPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH209MechatronicsPlan","Math"]);
       var ECE342MechatronicsPlanelement = document.getElementById("ECE342MechatronicsPlan");
       ECE342MechatronicsPlanelement.classList.remove("Math");
       ECE342MechatronicsPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["ECE342MechatronicsPlan","Math"]);
       var MECE390MechatronicsPlanelement = document.getElementById("MECE390MechatronicsPlan");
       MECE390MechatronicsPlanelement.classList.remove("Math");
       MECE390MechatronicsPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MECE390MechatronicsPlan","Math"]);
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "MechatronicsPlan":
       var ENGG160MechatronicsPlanelement = document.getElementById("ENGG160MechatronicsPlan");
       ENGG160MechatronicsPlanelement.classList.remove("EngineeringDesign");
       ENGG160MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["ENGG160MechatronicsPlan","EngineeringDesign"]);
       var MECE260MechatronicsPlanelement = document.getElementById("MECE260MechatronicsPlan");
       MECE260MechatronicsPlanelement.classList.remove("EngineeringDesign");
       MECE260MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE260MechatronicsPlan","EngineeringDesign"]);
       var MECE265MechatronicsPlanelement = document.getElementById("MECE265MechatronicsPlan");
       MECE265MechatronicsPlanelement.classList.remove("EngineeringDesign");
       MECE265MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE265MechatronicsPlan","EngineeringDesign"]);
       var MECE360MechatronicsPlanelement = document.getElementById("MECE360MechatronicsPlan");
       MECE360MechatronicsPlanelement.classList.remove("EngineeringDesign");
       MECE360MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE360MechatronicsPlan","EngineeringDesign"]);
       var MECE460MechatronicsPlanelement = document.getElementById("MECE460MechatronicsPlan");
       MECE460MechatronicsPlanelement.classList.remove("EngineeringDesign");
       MECE460MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE460MechatronicsPlan","EngineeringDesign"]);
       var MECE461MechatronicsPlanelement = document.getElementById("MECE461MechatronicsPlan");
       MECE461MechatronicsPlanelement.classList.remove("EngineeringDesign");
       MECE461MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE461MechatronicsPlan","EngineeringDesign"]);
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "MechatronicsPlan":
       var CIVE270MechatronicsPlanelement = document.getElementById("CIVE270MechatronicsPlan");
       CIVE270MechatronicsPlanelement.classList.remove("EngineeringSciences");
       CIVE270MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CIVE270MechatronicsPlan","EngineeringSciences"]);
       var ECE210MechatronicsPlanelement = document.getElementById("ECE210MechatronicsPlan");
       ECE210MechatronicsPlanelement.classList.remove("EngineeringSciences");
       ECE210MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE210MechatronicsPlan","EngineeringSciences"]);
       var ECE240MechatronicsPlanelement = document.getElementById("ECE240MechatronicsPlan");
       ECE240MechatronicsPlanelement.classList.remove("EngineeringSciences");
       ECE240MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE240MechatronicsPlan","EngineeringSciences"]);
       var CHE243MechatronicsPlanelement = document.getElementById("CHE243MechatronicsPlan");
       CHE243MechatronicsPlanelement.classList.remove("EngineeringSciences");
       CHE243MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE243MechatronicsPlan","EngineeringSciences"]);
       var MECE250MechatronicsPlanelement = document.getElementById("MECE250MechatronicsPlan");
       MECE250MechatronicsPlanelement.classList.remove("EngineeringSciences");
       MECE250MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE250MechatronicsPlan","EngineeringSciences"]);
       var ECE315MechatronicsPlanelement = document.getElementById("ECE315MechatronicsPlan");
       ECE315MechatronicsPlanelement.classList.remove("EngineeringSciences");
       ECE315MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE315MechatronicsPlan","EngineeringSciences"]);
       var MECE350MechatronicsPlanelement = document.getElementById("MECE350MechatronicsPlan");
       MECE350MechatronicsPlanelement.classList.remove("EngineeringSciences");
       MECE350MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE350MechatronicsPlan","EngineeringSciences"]);
       var MECE420MechatronicsPlanelement = document.getElementById("MECE420MechatronicsPlan");
       MECE420MechatronicsPlanelement.classList.remove("EngineeringSciences");
       MECE420MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE420MechatronicsPlan","EngineeringSciences"]);
       var MECE465MechatronicsPlanelement = document.getElementById("MECE465MechatronicsPlan");
       MECE465MechatronicsPlanelement.classList.remove("EngineeringSciences");
       MECE465MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE465MechatronicsPlan","EngineeringSciences"]);
       break;
       }
      break;
  case "Mechatronics":
    switch(planName) {
      case "MechatronicsPlan":
       var MCTR202MechatronicsPlanelement = document.getElementById("MCTR202MechatronicsPlan");
       MCTR202MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR202MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR202MechatronicsPlan","Mechatronics"]);
       var MCTR200MechatronicsPlanelement = document.getElementById("MCTR200MechatronicsPlan");
       MCTR200MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR200MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR200MechatronicsPlan","Mechatronics"]);
       var MCTR274MechatronicsPlanelement = document.getElementById("MCTR274MechatronicsPlan");
       MCTR274MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR274MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR274MechatronicsPlan","Mechatronics"]);
       var MCTR374MechatronicsPlanelement = document.getElementById("MCTR374MechatronicsPlan");
       MCTR374MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR374MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR374MechatronicsPlan","Mechatronics"]);
       var MCTR300MechatronicsPlanelement = document.getElementById("MCTR300MechatronicsPlan");
       MCTR300MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR300MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR300MechatronicsPlan","Mechatronics"]);
       var MCTR332MechatronicsPlanelement = document.getElementById("MCTR332MechatronicsPlan");
       MCTR332MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR332MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR332MechatronicsPlan","Mechatronics"]);
       var MCTR365MechatronicsPlanelement = document.getElementById("MCTR365MechatronicsPlan");
       MCTR365MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR365MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR365MechatronicsPlan","Mechatronics"]);
       var MCTR370MechatronicsPlanelement = document.getElementById("MCTR370MechatronicsPlan");
       MCTR370MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR370MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR370MechatronicsPlan","Mechatronics"]);
       var MCTR460MechatronicsPlanelement = document.getElementById("MCTR460MechatronicsPlan");
       MCTR460MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR460MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR460MechatronicsPlan","Mechatronics"]);
       var MCTR461MechatronicsPlanelement = document.getElementById("MCTR461MechatronicsPlan");
       MCTR461MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR461MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR461MechatronicsPlan","Mechatronics"]);
       var MCTR465MechatronicsPlanelement = document.getElementById("MCTR465MechatronicsPlan");
       MCTR465MechatronicsPlanelement.classList.remove("Mechatronics");
       MCTR465MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR465MechatronicsPlan","Mechatronics"]);
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "MechatronicsPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveMechatronicsPlan" + i,"COMP"]);
          i = i + 1;
        }
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "MechatronicsPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS");
          currelement.classList.add("ITS-highlighted");
          that.addToClicked(["ITSElectiveMechatronicsPlan" + i,"ITS"]);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "MechatronicsPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG");
          currelement.classList.add("PROG-highlighted");
          that.addToClicked(["ProgramTechnicalElectiveMechatronicsPlan" + i,"PROG"]);
          i = i + 1;
        }
       break;
       }
      break;
break;   default:
    console.log("shouldn't be here");
    }
};
this.unhighlightCategory = function(categoryName, planName) {
switch(categoryName) { 
  case "NaturalSciences":
    switch(planName) {
      case "MechatronicsPlan":
if (!CHEM103MechatronicsPlanflag) { 
       var CHEM103MechatronicsPlanelement = document.getElementById("CHEM103MechatronicsPlan");
       CHEM103MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM103MechatronicsPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM103MechatronicsPlan");
 } 
if (!ENGG130MechatronicsPlanflag) { 
       var ENGG130MechatronicsPlanelement = document.getElementById("ENGG130MechatronicsPlan");
       ENGG130MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
       ENGG130MechatronicsPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENGG130MechatronicsPlan");
 } 
if (!PHYS130MechatronicsPlanflag) { 
       var PHYS130MechatronicsPlanelement = document.getElementById("PHYS130MechatronicsPlan");
       PHYS130MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
       PHYS130MechatronicsPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("PHYS130MechatronicsPlan");
 } 
if (!CHEM105MechatronicsPlanflag) { 
       var CHEM105MechatronicsPlanelement = document.getElementById("CHEM105MechatronicsPlan");
       CHEM105MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM105MechatronicsPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM105MechatronicsPlan");
 } 
if (!ENCMP100MechatronicsPlanflag) { 
       var ENCMP100MechatronicsPlanelement = document.getElementById("ENCMP100MechatronicsPlan");
       ENCMP100MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
       ENCMP100MechatronicsPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENCMP100MechatronicsPlan");
 } 
if (!ENPH131MechatronicsPlanflag) { 
       var ENPH131MechatronicsPlanelement = document.getElementById("ENPH131MechatronicsPlan");
       ENPH131MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
       ENPH131MechatronicsPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENPH131MechatronicsPlan");
 } 
if (!MECE230MechatronicsPlanflag) { 
       var MECE230MechatronicsPlanelement = document.getElementById("MECE230MechatronicsPlan");
       MECE230MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
       MECE230MechatronicsPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("MECE230MechatronicsPlan");
 } 
if (!MATE201MechatronicsPlanflag) { 
       var MATE201MechatronicsPlanelement = document.getElementById("MATE201MechatronicsPlan");
       MATE201MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
       MATE201MechatronicsPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("MATE201MechatronicsPlan");
 } 
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "MechatronicsPlan":
if (!ENGG100MechatronicsPlanflag) { 
       var ENGG100MechatronicsPlanelement = document.getElementById("ENGG100MechatronicsPlan");
       ENGG100MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG100MechatronicsPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG100MechatronicsPlan");
 } 
if (!ENGG299MechatronicsPlanflag) { 
       var ENGG299MechatronicsPlanelement = document.getElementById("ENGG299MechatronicsPlan");
       ENGG299MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG299MechatronicsPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG299MechatronicsPlan");
 } 
if (!ENGG404MechatronicsPlanflag) { 
       var ENGG404MechatronicsPlanelement = document.getElementById("ENGG404MechatronicsPlan");
       ENGG404MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG404MechatronicsPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG404MechatronicsPlan");
 } 
if (!ENGG400MechatronicsPlanflag) { 
       var ENGG400MechatronicsPlanelement = document.getElementById("ENGG400MechatronicsPlan");
       ENGG400MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG400MechatronicsPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG400MechatronicsPlan");
 } 
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "MechatronicsPlan":
if (!ENGL199MechatronicsPlanflag) { 
       var ENGL199MechatronicsPlanelement = document.getElementById("ENGL199MechatronicsPlan");
       ENGL199MechatronicsPlanelement.classList.remove("Other-highlighted");
       ENGL199MechatronicsPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGL199MechatronicsPlan");
 } 
if (!ENGM401MechatronicsPlanflag) { 
       var ENGM401MechatronicsPlanelement = document.getElementById("ENGM401MechatronicsPlan");
       ENGM401MechatronicsPlanelement.classList.remove("Other-highlighted");
       ENGM401MechatronicsPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGM401MechatronicsPlan");
 } 
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "MechatronicsPlan":
if (!MATH100MechatronicsPlanflag) { 
       var MATH100MechatronicsPlanelement = document.getElementById("MATH100MechatronicsPlan");
       MATH100MechatronicsPlanelement.classList.remove("Math-highlighted");
       MATH100MechatronicsPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH100MechatronicsPlan");
 } 
if (!MATH101MechatronicsPlanflag) { 
       var MATH101MechatronicsPlanelement = document.getElementById("MATH101MechatronicsPlan");
       MATH101MechatronicsPlanelement.classList.remove("Math-highlighted");
       MATH101MechatronicsPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH101MechatronicsPlan");
 } 
if (!MATH102MechatronicsPlanflag) { 
       var MATH102MechatronicsPlanelement = document.getElementById("MATH102MechatronicsPlan");
       MATH102MechatronicsPlanelement.classList.remove("Math-highlighted");
       MATH102MechatronicsPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH102MechatronicsPlan");
 } 
if (!MATH201MechatronicsPlanflag) { 
       var MATH201MechatronicsPlanelement = document.getElementById("MATH201MechatronicsPlan");
       MATH201MechatronicsPlanelement.classList.remove("Math-highlighted");
       MATH201MechatronicsPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH201MechatronicsPlan");
 } 
if (!MATH209MechatronicsPlanflag) { 
       var MATH209MechatronicsPlanelement = document.getElementById("MATH209MechatronicsPlan");
       MATH209MechatronicsPlanelement.classList.remove("Math-highlighted");
       MATH209MechatronicsPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH209MechatronicsPlan");
 } 
if (!ECE342MechatronicsPlanflag) { 
       var ECE342MechatronicsPlanelement = document.getElementById("ECE342MechatronicsPlan");
       ECE342MechatronicsPlanelement.classList.remove("Math-highlighted");
       ECE342MechatronicsPlanelement.classList.add("Math");
       
       that.removeFromClicked("ECE342MechatronicsPlan");
 } 
if (!MECE390MechatronicsPlanflag) { 
       var MECE390MechatronicsPlanelement = document.getElementById("MECE390MechatronicsPlan");
       MECE390MechatronicsPlanelement.classList.remove("Math-highlighted");
       MECE390MechatronicsPlanelement.classList.add("Math");
       
       that.removeFromClicked("MECE390MechatronicsPlan");
 } 
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "MechatronicsPlan":
if (!ENGG160MechatronicsPlanflag) { 
       var ENGG160MechatronicsPlanelement = document.getElementById("ENGG160MechatronicsPlan");
       ENGG160MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
       ENGG160MechatronicsPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("ENGG160MechatronicsPlan");
 } 
if (!MECE260MechatronicsPlanflag) { 
       var MECE260MechatronicsPlanelement = document.getElementById("MECE260MechatronicsPlan");
       MECE260MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE260MechatronicsPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE260MechatronicsPlan");
 } 
if (!MECE265MechatronicsPlanflag) { 
       var MECE265MechatronicsPlanelement = document.getElementById("MECE265MechatronicsPlan");
       MECE265MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE265MechatronicsPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE265MechatronicsPlan");
 } 
if (!MECE360MechatronicsPlanflag) { 
       var MECE360MechatronicsPlanelement = document.getElementById("MECE360MechatronicsPlan");
       MECE360MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE360MechatronicsPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE360MechatronicsPlan");
 } 
if (!MECE460MechatronicsPlanflag) { 
       var MECE460MechatronicsPlanelement = document.getElementById("MECE460MechatronicsPlan");
       MECE460MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE460MechatronicsPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE460MechatronicsPlan");
 } 
if (!MECE461MechatronicsPlanflag) { 
       var MECE461MechatronicsPlanelement = document.getElementById("MECE461MechatronicsPlan");
       MECE461MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE461MechatronicsPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE461MechatronicsPlan");
 } 
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "MechatronicsPlan":
if (!CIVE270MechatronicsPlanflag) { 
       var CIVE270MechatronicsPlanelement = document.getElementById("CIVE270MechatronicsPlan");
       CIVE270MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
       CIVE270MechatronicsPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CIVE270MechatronicsPlan");
 } 
if (!ECE210MechatronicsPlanflag) { 
       var ECE210MechatronicsPlanelement = document.getElementById("ECE210MechatronicsPlan");
       ECE210MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE210MechatronicsPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE210MechatronicsPlan");
 } 
if (!ECE240MechatronicsPlanflag) { 
       var ECE240MechatronicsPlanelement = document.getElementById("ECE240MechatronicsPlan");
       ECE240MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE240MechatronicsPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE240MechatronicsPlan");
 } 
if (!CHE243MechatronicsPlanflag) { 
       var CHE243MechatronicsPlanelement = document.getElementById("CHE243MechatronicsPlan");
       CHE243MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
       CHE243MechatronicsPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE243MechatronicsPlan");
 } 
if (!MECE250MechatronicsPlanflag) { 
       var MECE250MechatronicsPlanelement = document.getElementById("MECE250MechatronicsPlan");
       MECE250MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
       MECE250MechatronicsPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE250MechatronicsPlan");
 } 
if (!ECE315MechatronicsPlanflag) { 
       var ECE315MechatronicsPlanelement = document.getElementById("ECE315MechatronicsPlan");
       ECE315MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE315MechatronicsPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE315MechatronicsPlan");
 } 
if (!MECE350MechatronicsPlanflag) { 
       var MECE350MechatronicsPlanelement = document.getElementById("MECE350MechatronicsPlan");
       MECE350MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
       MECE350MechatronicsPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE350MechatronicsPlan");
 } 
if (!MECE420MechatronicsPlanflag) { 
       var MECE420MechatronicsPlanelement = document.getElementById("MECE420MechatronicsPlan");
       MECE420MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
       MECE420MechatronicsPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE420MechatronicsPlan");
 } 
if (!MECE465MechatronicsPlanflag) { 
       var MECE465MechatronicsPlanelement = document.getElementById("MECE465MechatronicsPlan");
       MECE465MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
       MECE465MechatronicsPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE465MechatronicsPlan");
 } 
       break;
       }
      break;
  case "Mechatronics":
    switch(planName) {
      case "MechatronicsPlan":
if (!MCTR202MechatronicsPlanflag) { 
       var MCTR202MechatronicsPlanelement = document.getElementById("MCTR202MechatronicsPlan");
       MCTR202MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR202MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR202MechatronicsPlan");
 } 
if (!MCTR200MechatronicsPlanflag) { 
       var MCTR200MechatronicsPlanelement = document.getElementById("MCTR200MechatronicsPlan");
       MCTR200MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR200MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR200MechatronicsPlan");
 } 
if (!MCTR274MechatronicsPlanflag) { 
       var MCTR274MechatronicsPlanelement = document.getElementById("MCTR274MechatronicsPlan");
       MCTR274MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR274MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR274MechatronicsPlan");
 } 
if (!MCTR374MechatronicsPlanflag) { 
       var MCTR374MechatronicsPlanelement = document.getElementById("MCTR374MechatronicsPlan");
       MCTR374MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR374MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR374MechatronicsPlan");
 } 
if (!MCTR300MechatronicsPlanflag) { 
       var MCTR300MechatronicsPlanelement = document.getElementById("MCTR300MechatronicsPlan");
       MCTR300MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR300MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR300MechatronicsPlan");
 } 
if (!MCTR332MechatronicsPlanflag) { 
       var MCTR332MechatronicsPlanelement = document.getElementById("MCTR332MechatronicsPlan");
       MCTR332MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR332MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR332MechatronicsPlan");
 } 
if (!MCTR365MechatronicsPlanflag) { 
       var MCTR365MechatronicsPlanelement = document.getElementById("MCTR365MechatronicsPlan");
       MCTR365MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR365MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR365MechatronicsPlan");
 } 
if (!MCTR370MechatronicsPlanflag) { 
       var MCTR370MechatronicsPlanelement = document.getElementById("MCTR370MechatronicsPlan");
       MCTR370MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR370MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR370MechatronicsPlan");
 } 
if (!MCTR460MechatronicsPlanflag) { 
       var MCTR460MechatronicsPlanelement = document.getElementById("MCTR460MechatronicsPlan");
       MCTR460MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR460MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR460MechatronicsPlan");
 } 
if (!MCTR461MechatronicsPlanflag) { 
       var MCTR461MechatronicsPlanelement = document.getElementById("MCTR461MechatronicsPlan");
       MCTR461MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR461MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR461MechatronicsPlan");
 } 
if (!MCTR465MechatronicsPlanflag) { 
       var MCTR465MechatronicsPlanelement = document.getElementById("MCTR465MechatronicsPlan");
       MCTR465MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR465MechatronicsPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR465MechatronicsPlan");
 } 
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "MechatronicsPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveMechatronicsPlan" + i);
          i = i + 1;
        }
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "MechatronicsPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS-highlighted");
          currelement.classList.add("ITS");
          that.removeFromClicked("ITSElectiveMechatronicsPlan" + i);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "MechatronicsPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG-highlighted");
          currelement.classList.add("PROG");
          that.removeFromClicked("ProgramTechnicalElectiveMechatronicsPlan" + i);
          i = i + 1;
        }
       break;
       }
      break;
break;   default:
    console.log("shouldn't be here");
    }
};
  var CHEM103MechatronicsPlanflag = false;
  var CHEM103MechatronicsPlanrflag = false;
 var CHEM103MechatronicsPlanTime = new Date().getTime();
  var ENGG100MechatronicsPlanflag = false;
  var ENGG100MechatronicsPlanrflag = false;
 var ENGG100MechatronicsPlanTime = new Date().getTime();
  var ENGG130MechatronicsPlanflag = false;
  var ENGG130MechatronicsPlanrflag = false;
 var ENGG130MechatronicsPlanTime = new Date().getTime();
  var ENGL199MechatronicsPlanflag = false;
  var ENGL199MechatronicsPlanrflag = false;
 var ENGL199MechatronicsPlanTime = new Date().getTime();
  var MATH100MechatronicsPlanflag = false;
  var MATH100MechatronicsPlanrflag = false;
 var MATH100MechatronicsPlanTime = new Date().getTime();
  var PHYS130MechatronicsPlanflag = false;
  var PHYS130MechatronicsPlanrflag = false;
 var PHYS130MechatronicsPlanTime = new Date().getTime();
  var CHEM105MechatronicsPlanflag = false;
  var CHEM105MechatronicsPlanrflag = false;
 var CHEM105MechatronicsPlanTime = new Date().getTime();
  var ENCMP100MechatronicsPlanflag = false;
  var ENCMP100MechatronicsPlanrflag = false;
 var ENCMP100MechatronicsPlanTime = new Date().getTime();
  var ENGG160MechatronicsPlanflag = false;
  var ENGG160MechatronicsPlanrflag = false;
 var ENGG160MechatronicsPlanTime = new Date().getTime();
  var ENPH131MechatronicsPlanflag = false;
  var ENPH131MechatronicsPlanrflag = false;
 var ENPH131MechatronicsPlanTime = new Date().getTime();
  var MATH101MechatronicsPlanflag = false;
  var MATH101MechatronicsPlanrflag = false;
 var MATH101MechatronicsPlanTime = new Date().getTime();
  var MATH102MechatronicsPlanflag = false;
  var MATH102MechatronicsPlanrflag = false;
 var MATH102MechatronicsPlanTime = new Date().getTime();
  var CIVE270MechatronicsPlanflag = false;
  var CIVE270MechatronicsPlanrflag = false;
 var CIVE270MechatronicsPlanTime = new Date().getTime();
  var ECE210MechatronicsPlanflag = false;
  var ECE210MechatronicsPlanrflag = false;
 var ECE210MechatronicsPlanTime = new Date().getTime();
  var ECE240MechatronicsPlanflag = false;
  var ECE240MechatronicsPlanrflag = false;
 var ECE240MechatronicsPlanTime = new Date().getTime();
  var MATH201MechatronicsPlanflag = false;
  var MATH201MechatronicsPlanrflag = false;
 var MATH201MechatronicsPlanTime = new Date().getTime();
  var MATH209MechatronicsPlanflag = false;
  var MATH209MechatronicsPlanrflag = false;
 var MATH209MechatronicsPlanTime = new Date().getTime();
  var MCTR202MechatronicsPlanflag = false;
  var MCTR202MechatronicsPlanrflag = false;
 var MCTR202MechatronicsPlanTime = new Date().getTime();
  var ENGG299MechatronicsPlanflag = false;
  var ENGG299MechatronicsPlanrflag = false;
 var ENGG299MechatronicsPlanTime = new Date().getTime();
  var CHE243MechatronicsPlanflag = false;
  var CHE243MechatronicsPlanrflag = false;
 var CHE243MechatronicsPlanTime = new Date().getTime();
  var MCTR200MechatronicsPlanflag = false;
  var MCTR200MechatronicsPlanrflag = false;
 var MCTR200MechatronicsPlanTime = new Date().getTime();
  var MCTR274MechatronicsPlanflag = false;
  var MCTR274MechatronicsPlanrflag = false;
 var MCTR274MechatronicsPlanTime = new Date().getTime();
  var MECE230MechatronicsPlanflag = false;
  var MECE230MechatronicsPlanrflag = false;
 var MECE230MechatronicsPlanTime = new Date().getTime();
  var MECE250MechatronicsPlanflag = false;
  var MECE250MechatronicsPlanrflag = false;
 var MECE250MechatronicsPlanTime = new Date().getTime();
  var MECE260MechatronicsPlanflag = false;
  var MECE260MechatronicsPlanrflag = false;
 var MECE260MechatronicsPlanTime = new Date().getTime();
  var MECE265MechatronicsPlanflag = false;
  var MECE265MechatronicsPlanrflag = false;
 var MECE265MechatronicsPlanTime = new Date().getTime();
  var ECE315MechatronicsPlanflag = false;
  var ECE315MechatronicsPlanrflag = false;
 var ECE315MechatronicsPlanTime = new Date().getTime();
  var ECE342MechatronicsPlanflag = false;
  var ECE342MechatronicsPlanrflag = false;
 var ECE342MechatronicsPlanTime = new Date().getTime();
  var MCTR374MechatronicsPlanflag = false;
  var MCTR374MechatronicsPlanrflag = false;
 var MCTR374MechatronicsPlanTime = new Date().getTime();
  var MECE350MechatronicsPlanflag = false;
  var MECE350MechatronicsPlanrflag = false;
 var MECE350MechatronicsPlanTime = new Date().getTime();
  var MECE360MechatronicsPlanflag = false;
  var MECE360MechatronicsPlanrflag = false;
 var MECE360MechatronicsPlanTime = new Date().getTime();
  var MECE390MechatronicsPlanflag = false;
  var MECE390MechatronicsPlanrflag = false;
 var MECE390MechatronicsPlanTime = new Date().getTime();
  var ENGM401MechatronicsPlanflag = false;
  var ENGM401MechatronicsPlanrflag = false;
 var ENGM401MechatronicsPlanTime = new Date().getTime();
  var MCTR300MechatronicsPlanflag = false;
  var MCTR300MechatronicsPlanrflag = false;
 var MCTR300MechatronicsPlanTime = new Date().getTime();
  var MCTR332MechatronicsPlanflag = false;
  var MCTR332MechatronicsPlanrflag = false;
 var MCTR332MechatronicsPlanTime = new Date().getTime();
  var MCTR365MechatronicsPlanflag = false;
  var MCTR365MechatronicsPlanrflag = false;
 var MCTR365MechatronicsPlanTime = new Date().getTime();
  var MCTR370MechatronicsPlanflag = false;
  var MCTR370MechatronicsPlanrflag = false;
 var MCTR370MechatronicsPlanTime = new Date().getTime();
  var MECE420MechatronicsPlanflag = false;
  var MECE420MechatronicsPlanrflag = false;
 var MECE420MechatronicsPlanTime = new Date().getTime();
  var ComplementaryElectiveMechatronicsPlan0flag = false;
  var ComplementaryElectiveMechatronicsPlan0rflag = false;
 var ComplementaryElectiveMechatronicsPlan0Time = new Date().getTime();
  var ENGG404MechatronicsPlanflag = false;
  var ENGG404MechatronicsPlanrflag = false;
 var ENGG404MechatronicsPlanTime = new Date().getTime();
  var ITSElectiveMechatronicsPlan0flag = false;
  var ITSElectiveMechatronicsPlan0rflag = false;
 var ITSElectiveMechatronicsPlan0Time = new Date().getTime();
  var MATE201MechatronicsPlanflag = false;
  var MATE201MechatronicsPlanrflag = false;
 var MATE201MechatronicsPlanTime = new Date().getTime();
  var MCTR460MechatronicsPlanflag = false;
  var MCTR460MechatronicsPlanrflag = false;
 var MCTR460MechatronicsPlanTime = new Date().getTime();
  var MECE460MechatronicsPlanflag = false;
  var MECE460MechatronicsPlanrflag = false;
 var MECE460MechatronicsPlanTime = new Date().getTime();
  var ENGG400MechatronicsPlanflag = false;
  var ENGG400MechatronicsPlanrflag = false;
 var ENGG400MechatronicsPlanTime = new Date().getTime();
  var MCTR461MechatronicsPlanflag = false;
  var MCTR461MechatronicsPlanrflag = false;
 var MCTR461MechatronicsPlanTime = new Date().getTime();
  var MCTR465MechatronicsPlanflag = false;
  var MCTR465MechatronicsPlanrflag = false;
 var MCTR465MechatronicsPlanTime = new Date().getTime();
  var MECE461MechatronicsPlanflag = false;
  var MECE461MechatronicsPlanrflag = false;
 var MECE461MechatronicsPlanTime = new Date().getTime();
  var MECE465MechatronicsPlanflag = false;
  var MECE465MechatronicsPlanrflag = false;
 var MECE465MechatronicsPlanTime = new Date().getTime();
  var ProgramTechnicalElectiveMechatronicsPlan0flag = false;
  var ProgramTechnicalElectiveMechatronicsPlan0rflag = false;
 var ProgramTechnicalElectiveMechatronicsPlan0Time = new Date().getTime();
  var ProgramTechnicalElectiveMechatronicsPlan1flag = false;
  var ProgramTechnicalElectiveMechatronicsPlan1rflag = false;
 var ProgramTechnicalElectiveMechatronicsPlan1Time = new Date().getTime();
$scope.CHEM103MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103MechatronicsPlanTime <= 200) { 
        CHEM103MechatronicsPlanTime = currentTime;
        return;
    }
CHEM103MechatronicsPlanTime = currentTime;
  var CHEM103MechatronicsPlanelement = document.getElementById("CHEM103MechatronicsPlan");
 if (!CHEM103MechatronicsPlanflag) {
     if (CHEM103MechatronicsPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM103MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103MechatronicsPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine2());
     CHEM103MechatronicsPlanelement.classList.remove("NaturalSciences");
     CHEM103MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM103MechatronicsPlan", "NaturalSciences"]);
      CHEM103MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine2());
     CHEM103MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103MechatronicsPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM103MechatronicsPlan");
      CHEM103MechatronicsPlanflag=false
  }
};
$scope.ENGG100MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100MechatronicsPlanTime <= 200) { 
        ENGG100MechatronicsPlanTime = currentTime;
        return;
    }
ENGG100MechatronicsPlanTime = currentTime;
  var ENGG100MechatronicsPlanelement = document.getElementById("ENGG100MechatronicsPlan");
 if (!ENGG100MechatronicsPlanflag) {
     if (ENGG100MechatronicsPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG100MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100MechatronicsPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG100MechatronicsPlanelement.classList.remove("EngineeringProfession");
     ENGG100MechatronicsPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG100MechatronicsPlan", "EngineeringProfession"]);
      ENGG100MechatronicsPlanflag=true
  }
 else {
     ENGG100MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100MechatronicsPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG100MechatronicsPlan");
      ENGG100MechatronicsPlanflag=false
  }
};
$scope.ENGG130MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130MechatronicsPlanTime <= 200) { 
        ENGG130MechatronicsPlanTime = currentTime;
        return;
    }
ENGG130MechatronicsPlanTime = currentTime;
  var ENGG130MechatronicsPlanelement = document.getElementById("ENGG130MechatronicsPlan");
 if (!ENGG130MechatronicsPlanflag) {
     if (ENGG130MechatronicsPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENGG130MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130MechatronicsPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine5());
      that.addLine(getLine9());
      that.addLine(getLine22());
     ENGG130MechatronicsPlanelement.classList.remove("NaturalSciences");
     ENGG130MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENGG130MechatronicsPlan", "NaturalSciences"]);
      ENGG130MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
      that.removeLine(getLine9());
      that.removeLine(getLine22());
     ENGG130MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130MechatronicsPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENGG130MechatronicsPlan");
      ENGG130MechatronicsPlanflag=false
  }
};
$scope.ENGL199MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199MechatronicsPlanTime <= 200) { 
        ENGL199MechatronicsPlanTime = currentTime;
        return;
    }
ENGL199MechatronicsPlanTime = currentTime;
  var ENGL199MechatronicsPlanelement = document.getElementById("ENGL199MechatronicsPlan");
 if (!ENGL199MechatronicsPlanflag) {
     if (ENGL199MechatronicsPlanelement.classList.contains("Other-highlighted")) { 
     ENGL199MechatronicsPlanelement.classList.remove("Other-highlighted");
     ENGL199MechatronicsPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine3());
     ENGL199MechatronicsPlanelement.classList.remove("Other");
     ENGL199MechatronicsPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199MechatronicsPlan", "Other"]);
      ENGL199MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine3());
     ENGL199MechatronicsPlanelement.classList.remove("Other-highlighted");
     ENGL199MechatronicsPlanelement.classList.add("Other");
     that.removeFromClicked("ENGL199MechatronicsPlan");
      ENGL199MechatronicsPlanflag=false
  }
};
$scope.MATH100MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100MechatronicsPlanTime <= 200) { 
        MATH100MechatronicsPlanTime = currentTime;
        return;
    }
MATH100MechatronicsPlanTime = currentTime;
  var MATH100MechatronicsPlanelement = document.getElementById("MATH100MechatronicsPlan");
 if (!MATH100MechatronicsPlanflag) {
     if (MATH100MechatronicsPlanelement.classList.contains("Math-highlighted")) { 
     MATH100MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH100MechatronicsPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine1());
      that.addLine(getLine4());
      that.addLine(getLine7());
      that.addLine(getLine8());
     MATH100MechatronicsPlanelement.classList.remove("Math");
     MATH100MechatronicsPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH100MechatronicsPlan", "Math"]);
      MATH100MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine1());
      that.removeLine(getLine4());
      that.removeLine(getLine7());
      that.removeLine(getLine8());
     MATH100MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH100MechatronicsPlanelement.classList.add("Math");
     that.removeFromClicked("MATH100MechatronicsPlan");
      MATH100MechatronicsPlanflag=false
  }
};
$scope.PHYS130MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130MechatronicsPlanTime <= 200) { 
        PHYS130MechatronicsPlanTime = currentTime;
        return;
    }
PHYS130MechatronicsPlanTime = currentTime;
  var PHYS130MechatronicsPlanelement = document.getElementById("PHYS130MechatronicsPlan");
 if (!PHYS130MechatronicsPlanflag) {
     if (PHYS130MechatronicsPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     PHYS130MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130MechatronicsPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine1());
     PHYS130MechatronicsPlanelement.classList.remove("NaturalSciences");
     PHYS130MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["PHYS130MechatronicsPlan", "NaturalSciences"]);
      PHYS130MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine1());
     PHYS130MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130MechatronicsPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("PHYS130MechatronicsPlan");
      PHYS130MechatronicsPlanflag=false
  }
};
$scope.CHEM105MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105MechatronicsPlanTime <= 200) { 
        CHEM105MechatronicsPlanTime = currentTime;
        return;
    }
CHEM105MechatronicsPlanTime = currentTime;
  var CHEM105MechatronicsPlanelement = document.getElementById("CHEM105MechatronicsPlan");
 if (!CHEM105MechatronicsPlanflag) {
     if (CHEM105MechatronicsPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM105MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105MechatronicsPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine2());
      that.addLine(getLine41());
     CHEM105MechatronicsPlanelement.classList.remove("NaturalSciences");
     CHEM105MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM105MechatronicsPlan", "NaturalSciences"]);
      CHEM105MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine41());
     CHEM105MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105MechatronicsPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM105MechatronicsPlan");
      CHEM105MechatronicsPlanflag=false
  }
};
$scope.ENCMP100MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100MechatronicsPlanTime <= 200) { 
        ENCMP100MechatronicsPlanTime = currentTime;
        return;
    }
ENCMP100MechatronicsPlanTime = currentTime;
  var ENCMP100MechatronicsPlanelement = document.getElementById("ENCMP100MechatronicsPlan");
 if (!ENCMP100MechatronicsPlanflag) {
     if (ENCMP100MechatronicsPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENCMP100MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100MechatronicsPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine19());
     ENCMP100MechatronicsPlanelement.classList.remove("NaturalSciences");
     ENCMP100MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENCMP100MechatronicsPlan", "NaturalSciences"]);
      ENCMP100MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine19());
     ENCMP100MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100MechatronicsPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENCMP100MechatronicsPlan");
      ENCMP100MechatronicsPlanflag=false
  }
};
$scope.ENGG160MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160MechatronicsPlanTime <= 200) { 
        ENGG160MechatronicsPlanTime = currentTime;
        return;
    }
ENGG160MechatronicsPlanTime = currentTime;
  var ENGG160MechatronicsPlanelement = document.getElementById("ENGG160MechatronicsPlan");
 if (!ENGG160MechatronicsPlanflag) {
     if (ENGG160MechatronicsPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     ENGG160MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160MechatronicsPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine3());
      that.addLine(getLine25());
     ENGG160MechatronicsPlanelement.classList.remove("EngineeringDesign");
     ENGG160MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["ENGG160MechatronicsPlan", "EngineeringDesign"]);
      ENGG160MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine3());
      that.removeLine(getLine25());
     ENGG160MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160MechatronicsPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("ENGG160MechatronicsPlan");
      ENGG160MechatronicsPlanflag=false
  }
};
$scope.ENPH131MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131MechatronicsPlanTime <= 200) { 
        ENPH131MechatronicsPlanTime = currentTime;
        return;
    }
ENPH131MechatronicsPlanTime = currentTime;
  var ENPH131MechatronicsPlanelement = document.getElementById("ENPH131MechatronicsPlan");
 if (!ENPH131MechatronicsPlanflag) {
     if (ENPH131MechatronicsPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENPH131MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131MechatronicsPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine4());
      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine21());
      that.addLine(getLine23());
     ENPH131MechatronicsPlanelement.classList.remove("NaturalSciences");
     ENPH131MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENPH131MechatronicsPlan", "NaturalSciences"]);
      ENPH131MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine21());
      that.removeLine(getLine23());
     ENPH131MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131MechatronicsPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENPH131MechatronicsPlan");
      ENPH131MechatronicsPlanflag=false
  }
};
$scope.MATH101MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101MechatronicsPlanTime <= 200) { 
        MATH101MechatronicsPlanTime = currentTime;
        return;
    }
MATH101MechatronicsPlanTime = currentTime;
  var MATH101MechatronicsPlanelement = document.getElementById("MATH101MechatronicsPlan");
 if (!MATH101MechatronicsPlanflag) {
     if (MATH101MechatronicsPlanelement.classList.contains("Math-highlighted")) { 
     MATH101MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH101MechatronicsPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine6());
      that.addLine(getLine7());
      that.addLine(getLine10());
      that.addLine(getLine14());
      that.addLine(getLine16());
      that.addLine(getLine18());
      that.addLine(getLine20());
      that.addLine(getLine24());
     MATH101MechatronicsPlanelement.classList.remove("Math");
     MATH101MechatronicsPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH101MechatronicsPlan", "Math"]);
      MATH101MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine6());
      that.removeLine(getLine7());
      that.removeLine(getLine10());
      that.removeLine(getLine14());
      that.removeLine(getLine16());
      that.removeLine(getLine18());
      that.removeLine(getLine20());
      that.removeLine(getLine24());
     MATH101MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH101MechatronicsPlanelement.classList.add("Math");
     that.removeFromClicked("MATH101MechatronicsPlan");
      MATH101MechatronicsPlanflag=false
  }
};
$scope.MATH102MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102MechatronicsPlanTime <= 200) { 
        MATH102MechatronicsPlanTime = currentTime;
        return;
    }
MATH102MechatronicsPlanTime = currentTime;
  var MATH102MechatronicsPlanelement = document.getElementById("MATH102MechatronicsPlan");
 if (!MATH102MechatronicsPlanflag) {
     if (MATH102MechatronicsPlanelement.classList.contains("Math-highlighted")) { 
     MATH102MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH102MechatronicsPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine8());
      that.addLine(getLine15());
      that.addLine(getLine17());
      that.addLine(getLine35());
     MATH102MechatronicsPlanelement.classList.remove("Math");
     MATH102MechatronicsPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH102MechatronicsPlan", "Math"]);
      MATH102MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine15());
      that.removeLine(getLine17());
      that.removeLine(getLine35());
     MATH102MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH102MechatronicsPlanelement.classList.add("Math");
     that.removeFromClicked("MATH102MechatronicsPlan");
      MATH102MechatronicsPlanflag=false
  }
};
$scope.CIVE270MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270MechatronicsPlanTime <= 200) { 
        CIVE270MechatronicsPlanTime = currentTime;
        return;
    }
CIVE270MechatronicsPlanTime = currentTime;
  var CIVE270MechatronicsPlanelement = document.getElementById("CIVE270MechatronicsPlan");
 if (!CIVE270MechatronicsPlanflag) {
     if (CIVE270MechatronicsPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CIVE270MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270MechatronicsPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine9());
      that.addLine(getLine10());
      that.addLine(getLine27());
      that.addLine(getLine33());
      that.addLine(getLine37());
     CIVE270MechatronicsPlanelement.classList.remove("EngineeringSciences");
     CIVE270MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CIVE270MechatronicsPlan", "EngineeringSciences"]);
      CIVE270MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine27());
      that.removeLine(getLine33());
      that.removeLine(getLine37());
     CIVE270MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270MechatronicsPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CIVE270MechatronicsPlan");
      CIVE270MechatronicsPlanflag=false
  }
};
$scope.ECE210MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210MechatronicsPlanTime <= 200) { 
        ECE210MechatronicsPlanTime = currentTime;
        return;
    }
ECE210MechatronicsPlanTime = currentTime;
  var ECE210MechatronicsPlanelement = document.getElementById("ECE210MechatronicsPlan");
 if (!ECE210MechatronicsPlanflag) {
     if (ECE210MechatronicsPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE210MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE210MechatronicsPlanelement.classList.add("EngineeringSciences");
      return;
}     ECE210MechatronicsPlanelement.classList.remove("EngineeringSciences");
     ECE210MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE210MechatronicsPlan", "EngineeringSciences"]);
      ECE210MechatronicsPlanflag=true
  }
 else {
     ECE210MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE210MechatronicsPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE210MechatronicsPlan");
      ECE210MechatronicsPlanflag=false
  }
};
$scope.ECE240MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240MechatronicsPlanTime <= 200) { 
        ECE240MechatronicsPlanTime = currentTime;
        return;
    }
ECE240MechatronicsPlanTime = currentTime;
  var ECE240MechatronicsPlanelement = document.getElementById("ECE240MechatronicsPlan");
 if (!ECE240MechatronicsPlanflag) {
     if (ECE240MechatronicsPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE240MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE240MechatronicsPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine11());
      that.addLine(getLine12());
     ECE240MechatronicsPlanelement.classList.remove("EngineeringSciences");
     ECE240MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE240MechatronicsPlan", "EngineeringSciences"]);
      ECE240MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine12());
     ECE240MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE240MechatronicsPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE240MechatronicsPlan");
      ECE240MechatronicsPlanflag=false
  }
};
$scope.MATH201MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201MechatronicsPlanTime <= 200) { 
        MATH201MechatronicsPlanTime = currentTime;
        return;
    }
MATH201MechatronicsPlanTime = currentTime;
  var MATH201MechatronicsPlanelement = document.getElementById("MATH201MechatronicsPlan");
 if (!MATH201MechatronicsPlanflag) {
     if (MATH201MechatronicsPlanelement.classList.contains("Math-highlighted")) { 
     MATH201MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH201MechatronicsPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine12());
      that.addLine(getLine13());
      that.addLine(getLine36());
     MATH201MechatronicsPlanelement.classList.remove("Math");
     MATH201MechatronicsPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH201MechatronicsPlan", "Math"]);
      MATH201MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine36());
     MATH201MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH201MechatronicsPlanelement.classList.add("Math");
     that.removeFromClicked("MATH201MechatronicsPlan");
      MATH201MechatronicsPlanflag=false
  }
};
$scope.MATH209MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209MechatronicsPlanTime <= 200) { 
        MATH209MechatronicsPlanTime = currentTime;
        return;
    }
MATH209MechatronicsPlanTime = currentTime;
  var MATH209MechatronicsPlanelement = document.getElementById("MATH209MechatronicsPlan");
 if (!MATH209MechatronicsPlanflag) {
     if (MATH209MechatronicsPlanelement.classList.contains("Math-highlighted")) { 
     MATH209MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH209MechatronicsPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine13());
      that.addLine(getLine14());
      that.addLine(getLine15());
      that.addLine(getLine30());
     MATH209MechatronicsPlanelement.classList.remove("Math");
     MATH209MechatronicsPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH209MechatronicsPlan", "Math"]);
      MATH209MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      that.removeLine(getLine15());
      that.removeLine(getLine30());
     MATH209MechatronicsPlanelement.classList.remove("Math-highlighted");
     MATH209MechatronicsPlanelement.classList.add("Math");
     that.removeFromClicked("MATH209MechatronicsPlan");
      MATH209MechatronicsPlanflag=false
  }
};
$scope.MCTR202MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR202MechatronicsPlanTime <= 200) { 
        MCTR202MechatronicsPlanTime = currentTime;
        return;
    }
MCTR202MechatronicsPlanTime = currentTime;
  var MCTR202MechatronicsPlanelement = document.getElementById("MCTR202MechatronicsPlan");
 if (!MCTR202MechatronicsPlanflag) {
     if (MCTR202MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR202MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR202MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine11());
      that.addLine(getLine16());
      that.addLine(getLine17());
      that.addLine(getLine28());
     MCTR202MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR202MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR202MechatronicsPlan", "Mechatronics"]);
      MCTR202MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine16());
      that.removeLine(getLine17());
      that.removeLine(getLine28());
     MCTR202MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR202MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR202MechatronicsPlan");
      MCTR202MechatronicsPlanflag=false
  }
};
$scope.ENGG299MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299MechatronicsPlanTime <= 200) { 
        ENGG299MechatronicsPlanTime = currentTime;
        return;
    }
ENGG299MechatronicsPlanTime = currentTime;
  var ENGG299MechatronicsPlanelement = document.getElementById("ENGG299MechatronicsPlan");
 if (!ENGG299MechatronicsPlanflag) {
     if (ENGG299MechatronicsPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG299MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299MechatronicsPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG299MechatronicsPlanelement.classList.remove("EngineeringProfession");
     ENGG299MechatronicsPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG299MechatronicsPlan", "EngineeringProfession"]);
      ENGG299MechatronicsPlanflag=true
  }
 else {
     ENGG299MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299MechatronicsPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG299MechatronicsPlan");
      ENGG299MechatronicsPlanflag=false
  }
};
$scope.CHE243MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243MechatronicsPlanTime <= 200) { 
        CHE243MechatronicsPlanTime = currentTime;
        return;
    }
CHE243MechatronicsPlanTime = currentTime;
  var CHE243MechatronicsPlanelement = document.getElementById("CHE243MechatronicsPlan");
 if (!CHE243MechatronicsPlanflag) {
     if (CHE243MechatronicsPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE243MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243MechatronicsPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine18());
     CHE243MechatronicsPlanelement.classList.remove("EngineeringSciences");
     CHE243MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE243MechatronicsPlan", "EngineeringSciences"]);
      CHE243MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine18());
     CHE243MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243MechatronicsPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE243MechatronicsPlan");
      CHE243MechatronicsPlanflag=false
  }
};
$scope.MCTR200MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR200MechatronicsPlanTime <= 200) { 
        MCTR200MechatronicsPlanTime = currentTime;
        return;
    }
MCTR200MechatronicsPlanTime = currentTime;
  var MCTR200MechatronicsPlanelement = document.getElementById("MCTR200MechatronicsPlan");
 if (!MCTR200MechatronicsPlanflag) {
     if (MCTR200MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR200MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR200MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}     MCTR200MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR200MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR200MechatronicsPlan", "Mechatronics"]);
      MCTR200MechatronicsPlanflag=true
  }
 else {
     MCTR200MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR200MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR200MechatronicsPlan");
      MCTR200MechatronicsPlanflag=false
  }
};
$scope.MCTR274MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR274MechatronicsPlanTime <= 200) { 
        MCTR274MechatronicsPlanTime = currentTime;
        return;
    }
MCTR274MechatronicsPlanTime = currentTime;
  var MCTR274MechatronicsPlanelement = document.getElementById("MCTR274MechatronicsPlan");
 if (!MCTR274MechatronicsPlanflag) {
     if (MCTR274MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR274MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR274MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine19());
     MCTR274MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR274MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR274MechatronicsPlan", "Mechatronics"]);
      MCTR274MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine19());
     MCTR274MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR274MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR274MechatronicsPlan");
      MCTR274MechatronicsPlanflag=false
  }
};
$scope.MECE230MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE230MechatronicsPlanTime <= 200) { 
        MECE230MechatronicsPlanTime = currentTime;
        return;
    }
MECE230MechatronicsPlanTime = currentTime;
  var MECE230MechatronicsPlanelement = document.getElementById("MECE230MechatronicsPlan");
 if (!MECE230MechatronicsPlanflag) {
     if (MECE230MechatronicsPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     MECE230MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     MECE230MechatronicsPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine20());
      that.addLine(getLine21());
     MECE230MechatronicsPlanelement.classList.remove("NaturalSciences");
     MECE230MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["MECE230MechatronicsPlan", "NaturalSciences"]);
      MECE230MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine21());
     MECE230MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     MECE230MechatronicsPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("MECE230MechatronicsPlan");
      MECE230MechatronicsPlanflag=false
  }
};
$scope.MECE250MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250MechatronicsPlanTime <= 200) { 
        MECE250MechatronicsPlanTime = currentTime;
        return;
    }
MECE250MechatronicsPlanTime = currentTime;
  var MECE250MechatronicsPlanelement = document.getElementById("MECE250MechatronicsPlan");
 if (!MECE250MechatronicsPlanflag) {
     if (MECE250MechatronicsPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MECE250MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE250MechatronicsPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine22());
      that.addLine(getLine23());
      that.addLine(getLine24());
     MECE250MechatronicsPlanelement.classList.remove("EngineeringSciences");
     MECE250MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE250MechatronicsPlan", "EngineeringSciences"]);
      MECE250MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine22());
      that.removeLine(getLine23());
      that.removeLine(getLine24());
     MECE250MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE250MechatronicsPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE250MechatronicsPlan");
      MECE250MechatronicsPlanflag=false
  }
};
$scope.MECE260MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE260MechatronicsPlanTime <= 200) { 
        MECE260MechatronicsPlanTime = currentTime;
        return;
    }
MECE260MechatronicsPlanTime = currentTime;
  var MECE260MechatronicsPlanelement = document.getElementById("MECE260MechatronicsPlan");
 if (!MECE260MechatronicsPlanflag) {
     if (MECE260MechatronicsPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE260MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE260MechatronicsPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine25());
      that.addLine(getLine26());
      that.addLine(getLine27());
      that.addLine(getLine31());
     MECE260MechatronicsPlanelement.classList.remove("EngineeringDesign");
     MECE260MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE260MechatronicsPlan", "EngineeringDesign"]);
      MECE260MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine25());
      that.removeLine(getLine26());
      that.removeLine(getLine27());
      that.removeLine(getLine31());
     MECE260MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE260MechatronicsPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE260MechatronicsPlan");
      MECE260MechatronicsPlanflag=false
  }
};
$scope.MECE265MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE265MechatronicsPlanTime <= 200) { 
        MECE265MechatronicsPlanTime = currentTime;
        return;
    }
MECE265MechatronicsPlanTime = currentTime;
  var MECE265MechatronicsPlanelement = document.getElementById("MECE265MechatronicsPlan");
 if (!MECE265MechatronicsPlanflag) {
     if (MECE265MechatronicsPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE265MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE265MechatronicsPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine26());
      that.addLine(getLine32());
     MECE265MechatronicsPlanelement.classList.remove("EngineeringDesign");
     MECE265MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE265MechatronicsPlan", "EngineeringDesign"]);
      MECE265MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      that.removeLine(getLine32());
     MECE265MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE265MechatronicsPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE265MechatronicsPlan");
      MECE265MechatronicsPlanflag=false
  }
};
$scope.ECE315MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE315MechatronicsPlanTime <= 200) { 
        ECE315MechatronicsPlanTime = currentTime;
        return;
    }
ECE315MechatronicsPlanTime = currentTime;
  var ECE315MechatronicsPlanelement = document.getElementById("ECE315MechatronicsPlan");
 if (!ECE315MechatronicsPlanflag) {
     if (ECE315MechatronicsPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE315MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE315MechatronicsPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine28());
      that.addLine(getLine29());
     ECE315MechatronicsPlanelement.classList.remove("EngineeringSciences");
     ECE315MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE315MechatronicsPlan", "EngineeringSciences"]);
      ECE315MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine29());
     ECE315MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE315MechatronicsPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE315MechatronicsPlan");
      ECE315MechatronicsPlanflag=false
  }
};
$scope.ECE342MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342MechatronicsPlanTime <= 200) { 
        ECE342MechatronicsPlanTime = currentTime;
        return;
    }
ECE342MechatronicsPlanTime = currentTime;
  var ECE342MechatronicsPlanelement = document.getElementById("ECE342MechatronicsPlan");
 if (!ECE342MechatronicsPlanflag) {
     if (ECE342MechatronicsPlanelement.classList.contains("Math-highlighted")) { 
     ECE342MechatronicsPlanelement.classList.remove("Math-highlighted");
     ECE342MechatronicsPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine30());
      that.addLine(getLine38());
      that.addLine(getLine39());
     ECE342MechatronicsPlanelement.classList.remove("Math");
     ECE342MechatronicsPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["ECE342MechatronicsPlan", "Math"]);
      ECE342MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine30());
      that.removeLine(getLine38());
      that.removeLine(getLine39());
     ECE342MechatronicsPlanelement.classList.remove("Math-highlighted");
     ECE342MechatronicsPlanelement.classList.add("Math");
     that.removeFromClicked("ECE342MechatronicsPlan");
      ECE342MechatronicsPlanflag=false
  }
};
$scope.MCTR374MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR374MechatronicsPlanTime <= 200) { 
        MCTR374MechatronicsPlanTime = currentTime;
        return;
    }
MCTR374MechatronicsPlanTime = currentTime;
  var MCTR374MechatronicsPlanelement = document.getElementById("MCTR374MechatronicsPlan");
 if (!MCTR374MechatronicsPlanflag) {
     if (MCTR374MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR374MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR374MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine29());
      that.addLine(getLine46());
     MCTR374MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR374MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR374MechatronicsPlan", "Mechatronics"]);
      MCTR374MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine29());
      that.removeLine(getLine46());
     MCTR374MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR374MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR374MechatronicsPlan");
      MCTR374MechatronicsPlanflag=false
  }
};
$scope.MECE350MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE350MechatronicsPlanTime <= 200) { 
        MECE350MechatronicsPlanTime = currentTime;
        return;
    }
MECE350MechatronicsPlanTime = currentTime;
  var MECE350MechatronicsPlanelement = document.getElementById("MECE350MechatronicsPlan");
 if (!MECE350MechatronicsPlanflag) {
     if (MECE350MechatronicsPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MECE350MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE350MechatronicsPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine34());
     MECE350MechatronicsPlanelement.classList.remove("EngineeringSciences");
     MECE350MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE350MechatronicsPlan", "EngineeringSciences"]);
      MECE350MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine34());
     MECE350MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE350MechatronicsPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE350MechatronicsPlan");
      MECE350MechatronicsPlanflag=false
  }
};
$scope.MECE360MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE360MechatronicsPlanTime <= 200) { 
        MECE360MechatronicsPlanTime = currentTime;
        return;
    }
MECE360MechatronicsPlanTime = currentTime;
  var MECE360MechatronicsPlanelement = document.getElementById("MECE360MechatronicsPlan");
 if (!MECE360MechatronicsPlanflag) {
     if (MECE360MechatronicsPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE360MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE360MechatronicsPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine31());
      that.addLine(getLine32());
      that.addLine(getLine33());
      that.addLine(getLine34());
      that.addLine(getLine42());
     MECE360MechatronicsPlanelement.classList.remove("EngineeringDesign");
     MECE360MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE360MechatronicsPlan", "EngineeringDesign"]);
      MECE360MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine31());
      that.removeLine(getLine32());
      that.removeLine(getLine33());
      that.removeLine(getLine34());
      that.removeLine(getLine42());
     MECE360MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE360MechatronicsPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE360MechatronicsPlan");
      MECE360MechatronicsPlanflag=false
  }
};
$scope.MECE390MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE390MechatronicsPlanTime <= 200) { 
        MECE390MechatronicsPlanTime = currentTime;
        return;
    }
MECE390MechatronicsPlanTime = currentTime;
  var MECE390MechatronicsPlanelement = document.getElementById("MECE390MechatronicsPlan");
 if (!MECE390MechatronicsPlanflag) {
     if (MECE390MechatronicsPlanelement.classList.contains("Math-highlighted")) { 
     MECE390MechatronicsPlanelement.classList.remove("Math-highlighted");
     MECE390MechatronicsPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine35());
      that.addLine(getLine36());
      that.addLine(getLine40());
     MECE390MechatronicsPlanelement.classList.remove("Math");
     MECE390MechatronicsPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MECE390MechatronicsPlan", "Math"]);
      MECE390MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine35());
      that.removeLine(getLine36());
      that.removeLine(getLine40());
     MECE390MechatronicsPlanelement.classList.remove("Math-highlighted");
     MECE390MechatronicsPlanelement.classList.add("Math");
     that.removeFromClicked("MECE390MechatronicsPlan");
      MECE390MechatronicsPlanflag=false
  }
};
$scope.ENGM401MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401MechatronicsPlanTime <= 200) { 
        ENGM401MechatronicsPlanTime = currentTime;
        return;
    }
ENGM401MechatronicsPlanTime = currentTime;
  var ENGM401MechatronicsPlanelement = document.getElementById("ENGM401MechatronicsPlan");
 if (!ENGM401MechatronicsPlanflag) {
     if (ENGM401MechatronicsPlanelement.classList.contains("Other-highlighted")) { 
     ENGM401MechatronicsPlanelement.classList.remove("Other-highlighted");
     ENGM401MechatronicsPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine44());
     ENGM401MechatronicsPlanelement.classList.remove("Other");
     ENGM401MechatronicsPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401MechatronicsPlan", "Other"]);
      ENGM401MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine44());
     ENGM401MechatronicsPlanelement.classList.remove("Other-highlighted");
     ENGM401MechatronicsPlanelement.classList.add("Other");
     that.removeFromClicked("ENGM401MechatronicsPlan");
      ENGM401MechatronicsPlanflag=false
  }
};
$scope.MCTR300MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR300MechatronicsPlanTime <= 200) { 
        MCTR300MechatronicsPlanTime = currentTime;
        return;
    }
MCTR300MechatronicsPlanTime = currentTime;
  var MCTR300MechatronicsPlanelement = document.getElementById("MCTR300MechatronicsPlan");
 if (!MCTR300MechatronicsPlanflag) {
     if (MCTR300MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR300MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR300MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine37());
      that.addLine(getLine38());
      that.addLine(getLine49());
     MCTR300MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR300MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR300MechatronicsPlan", "Mechatronics"]);
      MCTR300MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine38());
      that.removeLine(getLine49());
     MCTR300MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR300MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR300MechatronicsPlan");
      MCTR300MechatronicsPlanflag=false
  }
};
$scope.MCTR332MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR332MechatronicsPlanTime <= 200) { 
        MCTR332MechatronicsPlanTime = currentTime;
        return;
    }
MCTR332MechatronicsPlanTime = currentTime;
  var MCTR332MechatronicsPlanelement = document.getElementById("MCTR332MechatronicsPlan");
 if (!MCTR332MechatronicsPlanflag) {
     if (MCTR332MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR332MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR332MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}     MCTR332MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR332MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR332MechatronicsPlan", "Mechatronics"]);
      MCTR332MechatronicsPlanflag=true
  }
 else {
     MCTR332MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR332MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR332MechatronicsPlan");
      MCTR332MechatronicsPlanflag=false
  }
};
$scope.MCTR365MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR365MechatronicsPlanTime <= 200) { 
        MCTR365MechatronicsPlanTime = currentTime;
        return;
    }
MCTR365MechatronicsPlanTime = currentTime;
  var MCTR365MechatronicsPlanelement = document.getElementById("MCTR365MechatronicsPlan");
 if (!MCTR365MechatronicsPlanflag) {
     if (MCTR365MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR365MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR365MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine43());
     MCTR365MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR365MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR365MechatronicsPlan", "Mechatronics"]);
      MCTR365MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine43());
     MCTR365MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR365MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR365MechatronicsPlan");
      MCTR365MechatronicsPlanflag=false
  }
};
$scope.MCTR370MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR370MechatronicsPlanTime <= 200) { 
        MCTR370MechatronicsPlanTime = currentTime;
        return;
    }
MCTR370MechatronicsPlanTime = currentTime;
  var MCTR370MechatronicsPlanelement = document.getElementById("MCTR370MechatronicsPlan");
 if (!MCTR370MechatronicsPlanflag) {
     if (MCTR370MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR370MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR370MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine39());
     MCTR370MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR370MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR370MechatronicsPlan", "Mechatronics"]);
      MCTR370MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine39());
     MCTR370MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR370MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR370MechatronicsPlan");
      MCTR370MechatronicsPlanflag=false
  }
};
$scope.MECE420MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE420MechatronicsPlanTime <= 200) { 
        MECE420MechatronicsPlanTime = currentTime;
        return;
    }
MECE420MechatronicsPlanTime = currentTime;
  var MECE420MechatronicsPlanelement = document.getElementById("MECE420MechatronicsPlan");
 if (!MECE420MechatronicsPlanflag) {
     if (MECE420MechatronicsPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MECE420MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE420MechatronicsPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine40());
      that.addLine(getLine45());
      that.addLine(getLine47());
     MECE420MechatronicsPlanelement.classList.remove("EngineeringSciences");
     MECE420MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE420MechatronicsPlan", "EngineeringSciences"]);
      MECE420MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine40());
      that.removeLine(getLine45());
      that.removeLine(getLine47());
     MECE420MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE420MechatronicsPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE420MechatronicsPlan");
      MECE420MechatronicsPlanflag=false
  }
};
$scope.ComplementaryElectiveMechatronicsPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveMechatronicsPlan0Time <= 200) { 
        ComplementaryElectiveMechatronicsPlan0Time = currentTime;
        return;
    }
ComplementaryElectiveMechatronicsPlan0Time = currentTime;
  var ComplementaryElectiveMechatronicsPlan0element = document.getElementById("ComplementaryElectiveMechatronicsPlan0");
 if (!ComplementaryElectiveMechatronicsPlan0flag) {
     if (ComplementaryElectiveMechatronicsPlan0element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveMechatronicsPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveMechatronicsPlan0element.classList.add("COMP");
      return;
}     ComplementaryElectiveMechatronicsPlan0element.classList.remove("COMP");
     ComplementaryElectiveMechatronicsPlan0element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveMechatronicsPlan0", "COMP"]);
      ComplementaryElectiveMechatronicsPlan0flag=true
  }
 else {
     ComplementaryElectiveMechatronicsPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveMechatronicsPlan0element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveMechatronicsPlan0");
      ComplementaryElectiveMechatronicsPlan0flag=false
  }
};
$scope.ENGG404MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404MechatronicsPlanTime <= 200) { 
        ENGG404MechatronicsPlanTime = currentTime;
        return;
    }
ENGG404MechatronicsPlanTime = currentTime;
  var ENGG404MechatronicsPlanelement = document.getElementById("ENGG404MechatronicsPlan");
 if (!ENGG404MechatronicsPlanflag) {
     if (ENGG404MechatronicsPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG404MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404MechatronicsPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG404MechatronicsPlanelement.classList.remove("EngineeringProfession");
     ENGG404MechatronicsPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG404MechatronicsPlan", "EngineeringProfession"]);
      ENGG404MechatronicsPlanflag=true
  }
 else {
     ENGG404MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404MechatronicsPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG404MechatronicsPlan");
      ENGG404MechatronicsPlanflag=false
  }
};
$scope.ITSElectiveMechatronicsPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveMechatronicsPlan0Time <= 200) { 
        ITSElectiveMechatronicsPlan0Time = currentTime;
        return;
    }
ITSElectiveMechatronicsPlan0Time = currentTime;
  var ITSElectiveMechatronicsPlan0element = document.getElementById("ITSElectiveMechatronicsPlan0");
 if (!ITSElectiveMechatronicsPlan0flag) {
     if (ITSElectiveMechatronicsPlan0element.classList.contains("ITS-highlighted")) { 
     ITSElectiveMechatronicsPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveMechatronicsPlan0element.classList.add("ITS");
      return;
}     ITSElectiveMechatronicsPlan0element.classList.remove("ITS");
     ITSElectiveMechatronicsPlan0element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveMechatronicsPlan0", "ITS"]);
      ITSElectiveMechatronicsPlan0flag=true
  }
 else {
     ITSElectiveMechatronicsPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveMechatronicsPlan0element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveMechatronicsPlan0");
      ITSElectiveMechatronicsPlan0flag=false
  }
};
$scope.MATE201MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE201MechatronicsPlanTime <= 200) { 
        MATE201MechatronicsPlanTime = currentTime;
        return;
    }
MATE201MechatronicsPlanTime = currentTime;
  var MATE201MechatronicsPlanelement = document.getElementById("MATE201MechatronicsPlan");
 if (!MATE201MechatronicsPlanflag) {
     if (MATE201MechatronicsPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     MATE201MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     MATE201MechatronicsPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine41());
     MATE201MechatronicsPlanelement.classList.remove("NaturalSciences");
     MATE201MechatronicsPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["MATE201MechatronicsPlan", "NaturalSciences"]);
      MATE201MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine41());
     MATE201MechatronicsPlanelement.classList.remove("NaturalSciences-highlighted");
     MATE201MechatronicsPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("MATE201MechatronicsPlan");
      MATE201MechatronicsPlanflag=false
  }
};
$scope.MCTR460MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR460MechatronicsPlanTime <= 200) { 
        MCTR460MechatronicsPlanTime = currentTime;
        return;
    }
MCTR460MechatronicsPlanTime = currentTime;
  var MCTR460MechatronicsPlanelement = document.getElementById("MCTR460MechatronicsPlan");
 if (!MCTR460MechatronicsPlanflag) {
     if (MCTR460MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR460MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR460MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}     MCTR460MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR460MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR460MechatronicsPlan", "Mechatronics"]);
      MCTR460MechatronicsPlanflag=true
  }
 else {
     MCTR460MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR460MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR460MechatronicsPlan");
      MCTR460MechatronicsPlanflag=false
  }
};
$scope.MECE460MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE460MechatronicsPlanTime <= 200) { 
        MECE460MechatronicsPlanTime = currentTime;
        return;
    }
MECE460MechatronicsPlanTime = currentTime;
  var MECE460MechatronicsPlanelement = document.getElementById("MECE460MechatronicsPlan");
 if (!MECE460MechatronicsPlanflag) {
     if (MECE460MechatronicsPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE460MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE460MechatronicsPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine42());
      that.addLine(getLine43());
      that.addLine(getLine44());
      that.addLine(getLine48());
     MECE460MechatronicsPlanelement.classList.remove("EngineeringDesign");
     MECE460MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE460MechatronicsPlan", "EngineeringDesign"]);
      MECE460MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine42());
      that.removeLine(getLine43());
      that.removeLine(getLine44());
      that.removeLine(getLine48());
     MECE460MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE460MechatronicsPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE460MechatronicsPlan");
      MECE460MechatronicsPlanflag=false
  }
};
$scope.ENGG400MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400MechatronicsPlanTime <= 200) { 
        ENGG400MechatronicsPlanTime = currentTime;
        return;
    }
ENGG400MechatronicsPlanTime = currentTime;
  var ENGG400MechatronicsPlanelement = document.getElementById("ENGG400MechatronicsPlan");
 if (!ENGG400MechatronicsPlanflag) {
     if (ENGG400MechatronicsPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG400MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400MechatronicsPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG400MechatronicsPlanelement.classList.remove("EngineeringProfession");
     ENGG400MechatronicsPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG400MechatronicsPlan", "EngineeringProfession"]);
      ENGG400MechatronicsPlanflag=true
  }
 else {
     ENGG400MechatronicsPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400MechatronicsPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG400MechatronicsPlan");
      ENGG400MechatronicsPlanflag=false
  }
};
$scope.MCTR461MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR461MechatronicsPlanTime <= 200) { 
        MCTR461MechatronicsPlanTime = currentTime;
        return;
    }
MCTR461MechatronicsPlanTime = currentTime;
  var MCTR461MechatronicsPlanelement = document.getElementById("MCTR461MechatronicsPlan");
 if (!MCTR461MechatronicsPlanflag) {
     if (MCTR461MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR461MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR461MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine45());
     MCTR461MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR461MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR461MechatronicsPlan", "Mechatronics"]);
      MCTR461MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine45());
     MCTR461MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR461MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR461MechatronicsPlan");
      MCTR461MechatronicsPlanflag=false
  }
};
$scope.MCTR465MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR465MechatronicsPlanTime <= 200) { 
        MCTR465MechatronicsPlanTime = currentTime;
        return;
    }
MCTR465MechatronicsPlanTime = currentTime;
  var MCTR465MechatronicsPlanelement = document.getElementById("MCTR465MechatronicsPlan");
 if (!MCTR465MechatronicsPlanflag) {
     if (MCTR465MechatronicsPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR465MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR465MechatronicsPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine46());
      that.addLine(getLine47());
     MCTR465MechatronicsPlanelement.classList.remove("Mechatronics");
     MCTR465MechatronicsPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR465MechatronicsPlan", "Mechatronics"]);
      MCTR465MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine46());
      that.removeLine(getLine47());
     MCTR465MechatronicsPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR465MechatronicsPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR465MechatronicsPlan");
      MCTR465MechatronicsPlanflag=false
  }
};
$scope.MECE461MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE461MechatronicsPlanTime <= 200) { 
        MECE461MechatronicsPlanTime = currentTime;
        return;
    }
MECE461MechatronicsPlanTime = currentTime;
  var MECE461MechatronicsPlanelement = document.getElementById("MECE461MechatronicsPlan");
 if (!MECE461MechatronicsPlanflag) {
     if (MECE461MechatronicsPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE461MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE461MechatronicsPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine48());
     MECE461MechatronicsPlanelement.classList.remove("EngineeringDesign");
     MECE461MechatronicsPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE461MechatronicsPlan", "EngineeringDesign"]);
      MECE461MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine48());
     MECE461MechatronicsPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE461MechatronicsPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE461MechatronicsPlan");
      MECE461MechatronicsPlanflag=false
  }
};
$scope.MECE465MechatronicsPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE465MechatronicsPlanTime <= 200) { 
        MECE465MechatronicsPlanTime = currentTime;
        return;
    }
MECE465MechatronicsPlanTime = currentTime;
  var MECE465MechatronicsPlanelement = document.getElementById("MECE465MechatronicsPlan");
 if (!MECE465MechatronicsPlanflag) {
     if (MECE465MechatronicsPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MECE465MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE465MechatronicsPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine49());
     MECE465MechatronicsPlanelement.classList.remove("EngineeringSciences");
     MECE465MechatronicsPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE465MechatronicsPlan", "EngineeringSciences"]);
      MECE465MechatronicsPlanflag=true
  }
 else {
      that.removeLine(getLine49());
     MECE465MechatronicsPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE465MechatronicsPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE465MechatronicsPlan");
      MECE465MechatronicsPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveMechatronicsPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveMechatronicsPlan0Time <= 200) { 
        ProgramTechnicalElectiveMechatronicsPlan0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveMechatronicsPlan0Time = currentTime;
  var ProgramTechnicalElectiveMechatronicsPlan0element = document.getElementById("ProgramTechnicalElectiveMechatronicsPlan0");
 if (!ProgramTechnicalElectiveMechatronicsPlan0flag) {
     if (ProgramTechnicalElectiveMechatronicsPlan0element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveMechatronicsPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveMechatronicsPlan0element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveMechatronicsPlan0element.classList.remove("PROG");
     ProgramTechnicalElectiveMechatronicsPlan0element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveMechatronicsPlan0", "PROG"]);
      ProgramTechnicalElectiveMechatronicsPlan0flag=true
  }
 else {
     ProgramTechnicalElectiveMechatronicsPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveMechatronicsPlan0element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveMechatronicsPlan0");
      ProgramTechnicalElectiveMechatronicsPlan0flag=false
  }
};
$scope.ProgramTechnicalElectiveMechatronicsPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveMechatronicsPlan1Time <= 200) { 
        ProgramTechnicalElectiveMechatronicsPlan1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveMechatronicsPlan1Time = currentTime;
  var ProgramTechnicalElectiveMechatronicsPlan1element = document.getElementById("ProgramTechnicalElectiveMechatronicsPlan1");
 if (!ProgramTechnicalElectiveMechatronicsPlan1flag) {
     if (ProgramTechnicalElectiveMechatronicsPlan1element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveMechatronicsPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveMechatronicsPlan1element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveMechatronicsPlan1element.classList.remove("PROG");
     ProgramTechnicalElectiveMechatronicsPlan1element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveMechatronicsPlan1", "PROG"]);
      ProgramTechnicalElectiveMechatronicsPlan1flag=true
  }
 else {
     ProgramTechnicalElectiveMechatronicsPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveMechatronicsPlan1element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveMechatronicsPlan1");
      ProgramTechnicalElectiveMechatronicsPlan1flag=false
  }
};
$scope.CHEM103MechatronicsPlanRCListener = function () {
  var element = document.getElementById("CHEM103MechatronicsPlandesc");
 if (!CHEM103MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103MechatronicsPlanrflag=false
  }
};
$scope.ENGG100MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENGG100MechatronicsPlandesc");
 if (!ENGG100MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100MechatronicsPlanrflag=false
  }
};
$scope.ENGG130MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENGG130MechatronicsPlandesc");
 if (!ENGG130MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130MechatronicsPlanrflag=false
  }
};
$scope.ENGL199MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENGL199MechatronicsPlandesc");
 if (!ENGL199MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199MechatronicsPlanrflag=false
  }
};
$scope.MATH100MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MATH100MechatronicsPlandesc");
 if (!MATH100MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100MechatronicsPlanrflag=false
  }
};
$scope.PHYS130MechatronicsPlanRCListener = function () {
  var element = document.getElementById("PHYS130MechatronicsPlandesc");
 if (!PHYS130MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130MechatronicsPlanrflag=false
  }
};
$scope.CHEM105MechatronicsPlanRCListener = function () {
  var element = document.getElementById("CHEM105MechatronicsPlandesc");
 if (!CHEM105MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105MechatronicsPlanrflag=false
  }
};
$scope.ENCMP100MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENCMP100MechatronicsPlandesc");
 if (!ENCMP100MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100MechatronicsPlanrflag=false
  }
};
$scope.ENGG160MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENGG160MechatronicsPlandesc");
 if (!ENGG160MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160MechatronicsPlanrflag=false
  }
};
$scope.ENPH131MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENPH131MechatronicsPlandesc");
 if (!ENPH131MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131MechatronicsPlanrflag=false
  }
};
$scope.MATH101MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MATH101MechatronicsPlandesc");
 if (!MATH101MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101MechatronicsPlanrflag=false
  }
};
$scope.MATH102MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MATH102MechatronicsPlandesc");
 if (!MATH102MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102MechatronicsPlanrflag=false
  }
};
$scope.CIVE270MechatronicsPlanRCListener = function () {
  var element = document.getElementById("CIVE270MechatronicsPlandesc");
 if (!CIVE270MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270MechatronicsPlanrflag=false
  }
};
$scope.ECE210MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ECE210MechatronicsPlandesc");
 if (!ECE210MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210MechatronicsPlanrflag=false
  }
};
$scope.ECE240MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ECE240MechatronicsPlandesc");
 if (!ECE240MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240MechatronicsPlanrflag=false
  }
};
$scope.MATH201MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MATH201MechatronicsPlandesc");
 if (!MATH201MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201MechatronicsPlanrflag=false
  }
};
$scope.MATH209MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MATH209MechatronicsPlandesc");
 if (!MATH209MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209MechatronicsPlanrflag=false
  }
};
$scope.MCTR202MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR202MechatronicsPlandesc");
 if (!MCTR202MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR202MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR202MechatronicsPlanrflag=false
  }
};
$scope.ENGG299MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENGG299MechatronicsPlandesc");
 if (!ENGG299MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299MechatronicsPlanrflag=false
  }
};
$scope.CHE243MechatronicsPlanRCListener = function () {
  var element = document.getElementById("CHE243MechatronicsPlandesc");
 if (!CHE243MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243MechatronicsPlanrflag=false
  }
};
$scope.MCTR200MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR200MechatronicsPlandesc");
 if (!MCTR200MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR200MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR200MechatronicsPlanrflag=false
  }
};
$scope.MCTR274MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR274MechatronicsPlandesc");
 if (!MCTR274MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR274MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR274MechatronicsPlanrflag=false
  }
};
$scope.MECE230MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE230MechatronicsPlandesc");
 if (!MECE230MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE230MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE230MechatronicsPlanrflag=false
  }
};
$scope.MECE250MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE250MechatronicsPlandesc");
 if (!MECE250MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250MechatronicsPlanrflag=false
  }
};
$scope.MECE260MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE260MechatronicsPlandesc");
 if (!MECE260MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE260MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE260MechatronicsPlanrflag=false
  }
};
$scope.MECE265MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE265MechatronicsPlandesc");
 if (!MECE265MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE265MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE265MechatronicsPlanrflag=false
  }
};
$scope.ECE315MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ECE315MechatronicsPlandesc");
 if (!ECE315MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE315MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE315MechatronicsPlanrflag=false
  }
};
$scope.ECE342MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ECE342MechatronicsPlandesc");
 if (!ECE342MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342MechatronicsPlanrflag=false
  }
};
$scope.MCTR374MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR374MechatronicsPlandesc");
 if (!MCTR374MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR374MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR374MechatronicsPlanrflag=false
  }
};
$scope.MECE350MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE350MechatronicsPlandesc");
 if (!MECE350MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE350MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE350MechatronicsPlanrflag=false
  }
};
$scope.MECE360MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE360MechatronicsPlandesc");
 if (!MECE360MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE360MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE360MechatronicsPlanrflag=false
  }
};
$scope.MECE390MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE390MechatronicsPlandesc");
 if (!MECE390MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE390MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE390MechatronicsPlanrflag=false
  }
};
$scope.ENGM401MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENGM401MechatronicsPlandesc");
 if (!ENGM401MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401MechatronicsPlanrflag=false
  }
};
$scope.MCTR300MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR300MechatronicsPlandesc");
 if (!MCTR300MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR300MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR300MechatronicsPlanrflag=false
  }
};
$scope.MCTR332MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR332MechatronicsPlandesc");
 if (!MCTR332MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR332MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR332MechatronicsPlanrflag=false
  }
};
$scope.MCTR365MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR365MechatronicsPlandesc");
 if (!MCTR365MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR365MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR365MechatronicsPlanrflag=false
  }
};
$scope.MCTR370MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR370MechatronicsPlandesc");
 if (!MCTR370MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR370MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR370MechatronicsPlanrflag=false
  }
};
$scope.MECE420MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE420MechatronicsPlandesc");
 if (!MECE420MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE420MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE420MechatronicsPlanrflag=false
  }
};
$scope.ComplementaryElectiveMechatronicsPlan0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveMechatronicsPlan0desc");
 if (!ComplementaryElectiveMechatronicsPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveMechatronicsPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveMechatronicsPlan0rflag=false
  }
};
$scope.ENGG404MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENGG404MechatronicsPlandesc");
 if (!ENGG404MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404MechatronicsPlanrflag=false
  }
};
$scope.ITSElectiveMechatronicsPlan0RCListener = function () {
  var element = document.getElementById("ITSElectiveMechatronicsPlan0desc");
 if (!ITSElectiveMechatronicsPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveMechatronicsPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveMechatronicsPlan0rflag=false
  }
};
$scope.MATE201MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MATE201MechatronicsPlandesc");
 if (!MATE201MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE201MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE201MechatronicsPlanrflag=false
  }
};
$scope.MCTR460MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR460MechatronicsPlandesc");
 if (!MCTR460MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR460MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR460MechatronicsPlanrflag=false
  }
};
$scope.MECE460MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE460MechatronicsPlandesc");
 if (!MECE460MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE460MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE460MechatronicsPlanrflag=false
  }
};
$scope.ENGG400MechatronicsPlanRCListener = function () {
  var element = document.getElementById("ENGG400MechatronicsPlandesc");
 if (!ENGG400MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400MechatronicsPlanrflag=false
  }
};
$scope.MCTR461MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR461MechatronicsPlandesc");
 if (!MCTR461MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR461MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR461MechatronicsPlanrflag=false
  }
};
$scope.MCTR465MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MCTR465MechatronicsPlandesc");
 if (!MCTR465MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR465MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR465MechatronicsPlanrflag=false
  }
};
$scope.MECE461MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE461MechatronicsPlandesc");
 if (!MECE461MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE461MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE461MechatronicsPlanrflag=false
  }
};
$scope.MECE465MechatronicsPlanRCListener = function () {
  var element = document.getElementById("MECE465MechatronicsPlandesc");
 if (!MECE465MechatronicsPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE465MechatronicsPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE465MechatronicsPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveMechatronicsPlan0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveMechatronicsPlan0desc");
 if (!ProgramTechnicalElectiveMechatronicsPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveMechatronicsPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveMechatronicsPlan0rflag=false
  }
};
$scope.ProgramTechnicalElectiveMechatronicsPlan1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveMechatronicsPlan1desc");
 if (!ProgramTechnicalElectiveMechatronicsPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveMechatronicsPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveMechatronicsPlan1rflag=false
  }
};
});
app.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });app.directive('ngChangeRadio', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngChangeRadio);
        element.bind('change', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });