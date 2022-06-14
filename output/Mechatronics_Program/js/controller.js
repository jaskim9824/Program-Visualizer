var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "TraditionalPlan";
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
this.TraditionalPlanList = [];
this.TraditionalPlanClicked = [];
this.TraditionalPlanLegendBtns = [];
this.TraditionalPlanLegendBtnsClicked = [];
this.TraditionalPlanTerms = 8;
this.TraditionalPlanMaxCourses = 7;
this.previousPlan = $scope.selectedPlan
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "TraditionalPlan": 
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
  case "TraditionalPlan": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
  var currbtn = document.getElementById("NaturalSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.TraditionalPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.TraditionalPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.TraditionalPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.TraditionalPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Mechatronics");
  that.TraditionalPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.TraditionalPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.TraditionalPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.TraditionalPlanLegendBtns.push(currbtn);
this.enable = function(plan) {
  switch(plan) {
    case "TraditionalPlan": 
      for (let i = 0; i < this.TraditionalPlanList.length; i++) {
          this.TraditionalPlanList[i][0].show(true);
      }
      width = this.TraditionalPlanTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlanMaxCourses*100 + 440;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
          element.classList.remove(this.TraditionalPlanClicked[i][1]);
          element.classList.add(this.TraditionalPlanClicked[i][1]+"-highlighted");
      }
      for (let i = 0; i < this.TraditionalPlanLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.TraditionalPlanLegendBtnsClicked.length; j++) {
              if (this.TraditionalPlanLegendBtnsClicked[j] == this.TraditionalPlanLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.TraditionalPlanLegendBtns[i].classList.remove("legendbutton-pressed");
              this.TraditionalPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.TraditionalPlanLegendBtns[i].classList.remove("legendbutton");
              this.TraditionalPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    default:
    console.log("shouldn't be here");
    }
};
this.addLine = function(line) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlanList.push([line, 1])
    }
    else {
        this.TraditionalPlanList[index][1]++;
    }
    break;
    default:
    console.log("shouldn't be here");
    }
};
this.removeLine = function(line) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlanList[index][1]--
        if (this.TraditionalPlanList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlanList.splice(index, 1);
        }
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.addToClicked = function(element) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.TraditionalPlanClicked.push(element);
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.removeFromClicked = function(element) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.TraditionalPlanClicked.splice(index, 1);
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
var NaturalSciencesTraditionalPlanflag = false;
var EngineeringProfessionTraditionalPlanflag = false;
var OtherTraditionalPlanflag = false;
var MathTraditionalPlanflag = false;
var EngineeringDesignTraditionalPlanflag = false;
var EngineeringSciencesTraditionalPlanflag = false;
var MechatronicsTraditionalPlanflag = false;
var COMPTraditionalPlanflag = false;
var ITSTraditionalPlanflag = false;
var PROGTraditionalPlanflag = false;
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
      case "TraditionalPlan":
       var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
       CHEM103TraditionalPlanelement.classList.remove("NaturalSciences");
       CHEM103TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM103TraditionalPlan","NaturalSciences"]);
       var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
       ENGG130TraditionalPlanelement.classList.remove("NaturalSciences");
       ENGG130TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENGG130TraditionalPlan","NaturalSciences"]);
       var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
       PHYS130TraditionalPlanelement.classList.remove("NaturalSciences");
       PHYS130TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["PHYS130TraditionalPlan","NaturalSciences"]);
       var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
       CHEM105TraditionalPlanelement.classList.remove("NaturalSciences");
       CHEM105TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM105TraditionalPlan","NaturalSciences"]);
       var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
       ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences");
       ENCMP100TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENCMP100TraditionalPlan","NaturalSciences"]);
       var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
       ENPH131TraditionalPlanelement.classList.remove("NaturalSciences");
       ENPH131TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENPH131TraditionalPlan","NaturalSciences"]);
       var MECE230TraditionalPlanelement = document.getElementById("MECE230TraditionalPlan");
       MECE230TraditionalPlanelement.classList.remove("NaturalSciences");
       MECE230TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["MECE230TraditionalPlan","NaturalSciences"]);
       var MATE201TraditionalPlanelement = document.getElementById("MATE201TraditionalPlan");
       MATE201TraditionalPlanelement.classList.remove("NaturalSciences");
       MATE201TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["MATE201TraditionalPlan","NaturalSciences"]);
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "TraditionalPlan":
       var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
       ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession");
       ENGG100TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG100TraditionalPlan","EngineeringProfession"]);
       var ENGG299TraditionalPlanelement = document.getElementById("ENGG299TraditionalPlan");
       ENGG299TraditionalPlanelement.classList.remove("EngineeringProfession");
       ENGG299TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG299TraditionalPlan","EngineeringProfession"]);
       var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
       ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession");
       ENGG404TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG404TraditionalPlan","EngineeringProfession"]);
       var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
       ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession");
       ENGG400TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG400TraditionalPlan","EngineeringProfession"]);
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
       var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
       ENGL199TraditionalPlanelement.classList.remove("Other");
       ENGL199TraditionalPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGL199TraditionalPlan","Other"]);
       var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
       ENGM401TraditionalPlanelement.classList.remove("Other");
       ENGM401TraditionalPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM401TraditionalPlan","Other"]);
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "TraditionalPlan":
       var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
       MATH100TraditionalPlanelement.classList.remove("Math");
       MATH100TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH100TraditionalPlan","Math"]);
       var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
       MATH101TraditionalPlanelement.classList.remove("Math");
       MATH101TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH101TraditionalPlan","Math"]);
       var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
       MATH102TraditionalPlanelement.classList.remove("Math");
       MATH102TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH102TraditionalPlan","Math"]);
       var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
       MATH201TraditionalPlanelement.classList.remove("Math");
       MATH201TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH201TraditionalPlan","Math"]);
       var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
       MATH209TraditionalPlanelement.classList.remove("Math");
       MATH209TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH209TraditionalPlan","Math"]);
       var ECE342TraditionalPlanelement = document.getElementById("ECE342TraditionalPlan");
       ECE342TraditionalPlanelement.classList.remove("Math");
       ECE342TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["ECE342TraditionalPlan","Math"]);
       var MECE390TraditionalPlanelement = document.getElementById("MECE390TraditionalPlan");
       MECE390TraditionalPlanelement.classList.remove("Math");
       MECE390TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MECE390TraditionalPlan","Math"]);
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "TraditionalPlan":
       var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
       ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign");
       ENGG160TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["ENGG160TraditionalPlan","EngineeringDesign"]);
       var MECE260TraditionalPlanelement = document.getElementById("MECE260TraditionalPlan");
       MECE260TraditionalPlanelement.classList.remove("EngineeringDesign");
       MECE260TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE260TraditionalPlan","EngineeringDesign"]);
       var MECE265TraditionalPlanelement = document.getElementById("MECE265TraditionalPlan");
       MECE265TraditionalPlanelement.classList.remove("EngineeringDesign");
       MECE265TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE265TraditionalPlan","EngineeringDesign"]);
       var MECE360TraditionalPlanelement = document.getElementById("MECE360TraditionalPlan");
       MECE360TraditionalPlanelement.classList.remove("EngineeringDesign");
       MECE360TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE360TraditionalPlan","EngineeringDesign"]);
       var MECE460TraditionalPlanelement = document.getElementById("MECE460TraditionalPlan");
       MECE460TraditionalPlanelement.classList.remove("EngineeringDesign");
       MECE460TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE460TraditionalPlan","EngineeringDesign"]);
       var MECE461TraditionalPlanelement = document.getElementById("MECE461TraditionalPlan");
       MECE461TraditionalPlanelement.classList.remove("EngineeringDesign");
       MECE461TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE461TraditionalPlan","EngineeringDesign"]);
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
       var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
       CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences");
       CIVE270TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CIVE270TraditionalPlan","EngineeringSciences"]);
       var ECE210TraditionalPlanelement = document.getElementById("ECE210TraditionalPlan");
       ECE210TraditionalPlanelement.classList.remove("EngineeringSciences");
       ECE210TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE210TraditionalPlan","EngineeringSciences"]);
       var ECE240TraditionalPlanelement = document.getElementById("ECE240TraditionalPlan");
       ECE240TraditionalPlanelement.classList.remove("EngineeringSciences");
       ECE240TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE240TraditionalPlan","EngineeringSciences"]);
       var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
       CHE243TraditionalPlanelement.classList.remove("EngineeringSciences");
       CHE243TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE243TraditionalPlan","EngineeringSciences"]);
       var MECE250TraditionalPlanelement = document.getElementById("MECE250TraditionalPlan");
       MECE250TraditionalPlanelement.classList.remove("EngineeringSciences");
       MECE250TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE250TraditionalPlan","EngineeringSciences"]);
       var ECE315TraditionalPlanelement = document.getElementById("ECE315TraditionalPlan");
       ECE315TraditionalPlanelement.classList.remove("EngineeringSciences");
       ECE315TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE315TraditionalPlan","EngineeringSciences"]);
       var MECE350TraditionalPlanelement = document.getElementById("MECE350TraditionalPlan");
       MECE350TraditionalPlanelement.classList.remove("EngineeringSciences");
       MECE350TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE350TraditionalPlan","EngineeringSciences"]);
       var MECE420TraditionalPlanelement = document.getElementById("MECE420TraditionalPlan");
       MECE420TraditionalPlanelement.classList.remove("EngineeringSciences");
       MECE420TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE420TraditionalPlan","EngineeringSciences"]);
       var MECE465TraditionalPlanelement = document.getElementById("MECE465TraditionalPlan");
       MECE465TraditionalPlanelement.classList.remove("EngineeringSciences");
       MECE465TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE465TraditionalPlan","EngineeringSciences"]);
       break;
       }
      break;
  case "Mechatronics":
    switch(planName) {
      case "TraditionalPlan":
       var MCTR202TraditionalPlanelement = document.getElementById("MCTR202TraditionalPlan");
       MCTR202TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR202TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR202TraditionalPlan","Mechatronics"]);
       var MCTR200TraditionalPlanelement = document.getElementById("MCTR200TraditionalPlan");
       MCTR200TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR200TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR200TraditionalPlan","Mechatronics"]);
       var MCTR274TraditionalPlanelement = document.getElementById("MCTR274TraditionalPlan");
       MCTR274TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR274TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR274TraditionalPlan","Mechatronics"]);
       var MCTR374TraditionalPlanelement = document.getElementById("MCTR374TraditionalPlan");
       MCTR374TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR374TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR374TraditionalPlan","Mechatronics"]);
       var MCTR300TraditionalPlanelement = document.getElementById("MCTR300TraditionalPlan");
       MCTR300TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR300TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR300TraditionalPlan","Mechatronics"]);
       var MCTR332TraditionalPlanelement = document.getElementById("MCTR332TraditionalPlan");
       MCTR332TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR332TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR332TraditionalPlan","Mechatronics"]);
       var MCTR365TraditionalPlanelement = document.getElementById("MCTR365TraditionalPlan");
       MCTR365TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR365TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR365TraditionalPlan","Mechatronics"]);
       var MCTR370TraditionalPlanelement = document.getElementById("MCTR370TraditionalPlan");
       MCTR370TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR370TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR370TraditionalPlan","Mechatronics"]);
       var MCTR460TraditionalPlanelement = document.getElementById("MCTR460TraditionalPlan");
       MCTR460TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR460TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR460TraditionalPlan","Mechatronics"]);
       var MCTR461TraditionalPlanelement = document.getElementById("MCTR461TraditionalPlan");
       MCTR461TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR461TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR461TraditionalPlan","Mechatronics"]);
       var MCTR465TraditionalPlanelement = document.getElementById("MCTR465TraditionalPlan");
       MCTR465TraditionalPlanelement.classList.remove("Mechatronics");
       MCTR465TraditionalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR465TraditionalPlan","Mechatronics"]);
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "TraditionalPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveTraditionalPlan" + i,"COMP"]);
          i = i + 1;
        }
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "TraditionalPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS");
          currelement.classList.add("ITS-highlighted");
          that.addToClicked(["ITSElectiveTraditionalPlan" + i,"ITS"]);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "TraditionalPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG");
          currelement.classList.add("PROG-highlighted");
          that.addToClicked(["ProgramTechnicalElectiveTraditionalPlan" + i,"PROG"]);
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
      case "TraditionalPlan":
if (!CHEM103TraditionalPlanflag) { 
       var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
       CHEM103TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM103TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM103TraditionalPlan");
 } 
if (!ENGG130TraditionalPlanflag) { 
       var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
       ENGG130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       ENGG130TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENGG130TraditionalPlan");
 } 
if (!PHYS130TraditionalPlanflag) { 
       var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
       PHYS130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       PHYS130TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("PHYS130TraditionalPlan");
 } 
if (!CHEM105TraditionalPlanflag) { 
       var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
       CHEM105TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM105TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM105TraditionalPlan");
 } 
if (!ENCMP100TraditionalPlanflag) { 
       var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
       ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       ENCMP100TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENCMP100TraditionalPlan");
 } 
if (!ENPH131TraditionalPlanflag) { 
       var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
       ENPH131TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       ENPH131TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENPH131TraditionalPlan");
 } 
if (!MECE230TraditionalPlanflag) { 
       var MECE230TraditionalPlanelement = document.getElementById("MECE230TraditionalPlan");
       MECE230TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       MECE230TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("MECE230TraditionalPlan");
 } 
if (!MATE201TraditionalPlanflag) { 
       var MATE201TraditionalPlanelement = document.getElementById("MATE201TraditionalPlan");
       MATE201TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       MATE201TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("MATE201TraditionalPlan");
 } 
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "TraditionalPlan":
if (!ENGG100TraditionalPlanflag) { 
       var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
       ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG100TraditionalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG100TraditionalPlan");
 } 
if (!ENGG299TraditionalPlanflag) { 
       var ENGG299TraditionalPlanelement = document.getElementById("ENGG299TraditionalPlan");
       ENGG299TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG299TraditionalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG299TraditionalPlan");
 } 
if (!ENGG404TraditionalPlanflag) { 
       var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
       ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG404TraditionalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG404TraditionalPlan");
 } 
if (!ENGG400TraditionalPlanflag) { 
       var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
       ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG400TraditionalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG400TraditionalPlan");
 } 
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
if (!ENGL199TraditionalPlanflag) { 
       var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
       ENGL199TraditionalPlanelement.classList.remove("Other-highlighted");
       ENGL199TraditionalPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGL199TraditionalPlan");
 } 
if (!ENGM401TraditionalPlanflag) { 
       var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
       ENGM401TraditionalPlanelement.classList.remove("Other-highlighted");
       ENGM401TraditionalPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGM401TraditionalPlan");
 } 
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "TraditionalPlan":
if (!MATH100TraditionalPlanflag) { 
       var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
       MATH100TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH100TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH100TraditionalPlan");
 } 
if (!MATH101TraditionalPlanflag) { 
       var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
       MATH101TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH101TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH101TraditionalPlan");
 } 
if (!MATH102TraditionalPlanflag) { 
       var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
       MATH102TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH102TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH102TraditionalPlan");
 } 
if (!MATH201TraditionalPlanflag) { 
       var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
       MATH201TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH201TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH201TraditionalPlan");
 } 
if (!MATH209TraditionalPlanflag) { 
       var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
       MATH209TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH209TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH209TraditionalPlan");
 } 
if (!ECE342TraditionalPlanflag) { 
       var ECE342TraditionalPlanelement = document.getElementById("ECE342TraditionalPlan");
       ECE342TraditionalPlanelement.classList.remove("Math-highlighted");
       ECE342TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("ECE342TraditionalPlan");
 } 
if (!MECE390TraditionalPlanflag) { 
       var MECE390TraditionalPlanelement = document.getElementById("MECE390TraditionalPlan");
       MECE390TraditionalPlanelement.classList.remove("Math-highlighted");
       MECE390TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MECE390TraditionalPlan");
 } 
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "TraditionalPlan":
if (!ENGG160TraditionalPlanflag) { 
       var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
       ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
       ENGG160TraditionalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("ENGG160TraditionalPlan");
 } 
if (!MECE260TraditionalPlanflag) { 
       var MECE260TraditionalPlanelement = document.getElementById("MECE260TraditionalPlan");
       MECE260TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE260TraditionalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE260TraditionalPlan");
 } 
if (!MECE265TraditionalPlanflag) { 
       var MECE265TraditionalPlanelement = document.getElementById("MECE265TraditionalPlan");
       MECE265TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE265TraditionalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE265TraditionalPlan");
 } 
if (!MECE360TraditionalPlanflag) { 
       var MECE360TraditionalPlanelement = document.getElementById("MECE360TraditionalPlan");
       MECE360TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE360TraditionalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE360TraditionalPlan");
 } 
if (!MECE460TraditionalPlanflag) { 
       var MECE460TraditionalPlanelement = document.getElementById("MECE460TraditionalPlan");
       MECE460TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE460TraditionalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE460TraditionalPlan");
 } 
if (!MECE461TraditionalPlanflag) { 
       var MECE461TraditionalPlanelement = document.getElementById("MECE461TraditionalPlan");
       MECE461TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
       MECE461TraditionalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE461TraditionalPlan");
 } 
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
if (!CIVE270TraditionalPlanflag) { 
       var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
       CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       CIVE270TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CIVE270TraditionalPlan");
 } 
if (!ECE210TraditionalPlanflag) { 
       var ECE210TraditionalPlanelement = document.getElementById("ECE210TraditionalPlan");
       ECE210TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE210TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE210TraditionalPlan");
 } 
if (!ECE240TraditionalPlanflag) { 
       var ECE240TraditionalPlanelement = document.getElementById("ECE240TraditionalPlan");
       ECE240TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE240TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE240TraditionalPlan");
 } 
if (!CHE243TraditionalPlanflag) { 
       var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
       CHE243TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       CHE243TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE243TraditionalPlan");
 } 
if (!MECE250TraditionalPlanflag) { 
       var MECE250TraditionalPlanelement = document.getElementById("MECE250TraditionalPlan");
       MECE250TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       MECE250TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE250TraditionalPlan");
 } 
if (!ECE315TraditionalPlanflag) { 
       var ECE315TraditionalPlanelement = document.getElementById("ECE315TraditionalPlan");
       ECE315TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE315TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE315TraditionalPlan");
 } 
if (!MECE350TraditionalPlanflag) { 
       var MECE350TraditionalPlanelement = document.getElementById("MECE350TraditionalPlan");
       MECE350TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       MECE350TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE350TraditionalPlan");
 } 
if (!MECE420TraditionalPlanflag) { 
       var MECE420TraditionalPlanelement = document.getElementById("MECE420TraditionalPlan");
       MECE420TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       MECE420TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE420TraditionalPlan");
 } 
if (!MECE465TraditionalPlanflag) { 
       var MECE465TraditionalPlanelement = document.getElementById("MECE465TraditionalPlan");
       MECE465TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       MECE465TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE465TraditionalPlan");
 } 
       break;
       }
      break;
  case "Mechatronics":
    switch(planName) {
      case "TraditionalPlan":
if (!MCTR202TraditionalPlanflag) { 
       var MCTR202TraditionalPlanelement = document.getElementById("MCTR202TraditionalPlan");
       MCTR202TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR202TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR202TraditionalPlan");
 } 
if (!MCTR200TraditionalPlanflag) { 
       var MCTR200TraditionalPlanelement = document.getElementById("MCTR200TraditionalPlan");
       MCTR200TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR200TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR200TraditionalPlan");
 } 
if (!MCTR274TraditionalPlanflag) { 
       var MCTR274TraditionalPlanelement = document.getElementById("MCTR274TraditionalPlan");
       MCTR274TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR274TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR274TraditionalPlan");
 } 
if (!MCTR374TraditionalPlanflag) { 
       var MCTR374TraditionalPlanelement = document.getElementById("MCTR374TraditionalPlan");
       MCTR374TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR374TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR374TraditionalPlan");
 } 
if (!MCTR300TraditionalPlanflag) { 
       var MCTR300TraditionalPlanelement = document.getElementById("MCTR300TraditionalPlan");
       MCTR300TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR300TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR300TraditionalPlan");
 } 
if (!MCTR332TraditionalPlanflag) { 
       var MCTR332TraditionalPlanelement = document.getElementById("MCTR332TraditionalPlan");
       MCTR332TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR332TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR332TraditionalPlan");
 } 
if (!MCTR365TraditionalPlanflag) { 
       var MCTR365TraditionalPlanelement = document.getElementById("MCTR365TraditionalPlan");
       MCTR365TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR365TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR365TraditionalPlan");
 } 
if (!MCTR370TraditionalPlanflag) { 
       var MCTR370TraditionalPlanelement = document.getElementById("MCTR370TraditionalPlan");
       MCTR370TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR370TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR370TraditionalPlan");
 } 
if (!MCTR460TraditionalPlanflag) { 
       var MCTR460TraditionalPlanelement = document.getElementById("MCTR460TraditionalPlan");
       MCTR460TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR460TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR460TraditionalPlan");
 } 
if (!MCTR461TraditionalPlanflag) { 
       var MCTR461TraditionalPlanelement = document.getElementById("MCTR461TraditionalPlan");
       MCTR461TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR461TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR461TraditionalPlan");
 } 
if (!MCTR465TraditionalPlanflag) { 
       var MCTR465TraditionalPlanelement = document.getElementById("MCTR465TraditionalPlan");
       MCTR465TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR465TraditionalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR465TraditionalPlan");
 } 
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "TraditionalPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i);
          i = i + 1;
        }
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "TraditionalPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS-highlighted");
          currelement.classList.add("ITS");
          that.removeFromClicked("ITSElectiveTraditionalPlan" + i);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "TraditionalPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG-highlighted");
          currelement.classList.add("PROG");
          that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan" + i);
          i = i + 1;
        }
       break;
       }
      break;
break;   default:
    console.log("shouldn't be here");
    }
};
  var CHEM103TraditionalPlanflag = false;
  var CHEM103TraditionalPlanrflag = false;
 var CHEM103TraditionalPlanTime = new Date().getTime();
  var ENGG100TraditionalPlanflag = false;
  var ENGG100TraditionalPlanrflag = false;
 var ENGG100TraditionalPlanTime = new Date().getTime();
  var ENGG130TraditionalPlanflag = false;
  var ENGG130TraditionalPlanrflag = false;
 var ENGG130TraditionalPlanTime = new Date().getTime();
  var ENGL199TraditionalPlanflag = false;
  var ENGL199TraditionalPlanrflag = false;
 var ENGL199TraditionalPlanTime = new Date().getTime();
  var MATH100TraditionalPlanflag = false;
  var MATH100TraditionalPlanrflag = false;
 var MATH100TraditionalPlanTime = new Date().getTime();
  var PHYS130TraditionalPlanflag = false;
  var PHYS130TraditionalPlanrflag = false;
 var PHYS130TraditionalPlanTime = new Date().getTime();
  var CHEM105TraditionalPlanflag = false;
  var CHEM105TraditionalPlanrflag = false;
 var CHEM105TraditionalPlanTime = new Date().getTime();
  var ENCMP100TraditionalPlanflag = false;
  var ENCMP100TraditionalPlanrflag = false;
 var ENCMP100TraditionalPlanTime = new Date().getTime();
  var ENGG160TraditionalPlanflag = false;
  var ENGG160TraditionalPlanrflag = false;
 var ENGG160TraditionalPlanTime = new Date().getTime();
  var ENPH131TraditionalPlanflag = false;
  var ENPH131TraditionalPlanrflag = false;
 var ENPH131TraditionalPlanTime = new Date().getTime();
  var MATH101TraditionalPlanflag = false;
  var MATH101TraditionalPlanrflag = false;
 var MATH101TraditionalPlanTime = new Date().getTime();
  var MATH102TraditionalPlanflag = false;
  var MATH102TraditionalPlanrflag = false;
 var MATH102TraditionalPlanTime = new Date().getTime();
  var CIVE270TraditionalPlanflag = false;
  var CIVE270TraditionalPlanrflag = false;
 var CIVE270TraditionalPlanTime = new Date().getTime();
  var ECE210TraditionalPlanflag = false;
  var ECE210TraditionalPlanrflag = false;
 var ECE210TraditionalPlanTime = new Date().getTime();
  var ECE240TraditionalPlanflag = false;
  var ECE240TraditionalPlanrflag = false;
 var ECE240TraditionalPlanTime = new Date().getTime();
  var MATH201TraditionalPlanflag = false;
  var MATH201TraditionalPlanrflag = false;
 var MATH201TraditionalPlanTime = new Date().getTime();
  var MATH209TraditionalPlanflag = false;
  var MATH209TraditionalPlanrflag = false;
 var MATH209TraditionalPlanTime = new Date().getTime();
  var MCTR202TraditionalPlanflag = false;
  var MCTR202TraditionalPlanrflag = false;
 var MCTR202TraditionalPlanTime = new Date().getTime();
  var ENGG299TraditionalPlanflag = false;
  var ENGG299TraditionalPlanrflag = false;
 var ENGG299TraditionalPlanTime = new Date().getTime();
  var CHE243TraditionalPlanflag = false;
  var CHE243TraditionalPlanrflag = false;
 var CHE243TraditionalPlanTime = new Date().getTime();
  var MCTR200TraditionalPlanflag = false;
  var MCTR200TraditionalPlanrflag = false;
 var MCTR200TraditionalPlanTime = new Date().getTime();
  var MCTR274TraditionalPlanflag = false;
  var MCTR274TraditionalPlanrflag = false;
 var MCTR274TraditionalPlanTime = new Date().getTime();
  var MECE230TraditionalPlanflag = false;
  var MECE230TraditionalPlanrflag = false;
 var MECE230TraditionalPlanTime = new Date().getTime();
  var MECE250TraditionalPlanflag = false;
  var MECE250TraditionalPlanrflag = false;
 var MECE250TraditionalPlanTime = new Date().getTime();
  var MECE260TraditionalPlanflag = false;
  var MECE260TraditionalPlanrflag = false;
 var MECE260TraditionalPlanTime = new Date().getTime();
  var MECE265TraditionalPlanflag = false;
  var MECE265TraditionalPlanrflag = false;
 var MECE265TraditionalPlanTime = new Date().getTime();
  var ECE315TraditionalPlanflag = false;
  var ECE315TraditionalPlanrflag = false;
 var ECE315TraditionalPlanTime = new Date().getTime();
  var ECE342TraditionalPlanflag = false;
  var ECE342TraditionalPlanrflag = false;
 var ECE342TraditionalPlanTime = new Date().getTime();
  var MCTR374TraditionalPlanflag = false;
  var MCTR374TraditionalPlanrflag = false;
 var MCTR374TraditionalPlanTime = new Date().getTime();
  var MECE350TraditionalPlanflag = false;
  var MECE350TraditionalPlanrflag = false;
 var MECE350TraditionalPlanTime = new Date().getTime();
  var MECE360TraditionalPlanflag = false;
  var MECE360TraditionalPlanrflag = false;
 var MECE360TraditionalPlanTime = new Date().getTime();
  var MECE390TraditionalPlanflag = false;
  var MECE390TraditionalPlanrflag = false;
 var MECE390TraditionalPlanTime = new Date().getTime();
  var ENGM401TraditionalPlanflag = false;
  var ENGM401TraditionalPlanrflag = false;
 var ENGM401TraditionalPlanTime = new Date().getTime();
  var MCTR300TraditionalPlanflag = false;
  var MCTR300TraditionalPlanrflag = false;
 var MCTR300TraditionalPlanTime = new Date().getTime();
  var MCTR332TraditionalPlanflag = false;
  var MCTR332TraditionalPlanrflag = false;
 var MCTR332TraditionalPlanTime = new Date().getTime();
  var MCTR365TraditionalPlanflag = false;
  var MCTR365TraditionalPlanrflag = false;
 var MCTR365TraditionalPlanTime = new Date().getTime();
  var MCTR370TraditionalPlanflag = false;
  var MCTR370TraditionalPlanrflag = false;
 var MCTR370TraditionalPlanTime = new Date().getTime();
  var MECE420TraditionalPlanflag = false;
  var MECE420TraditionalPlanrflag = false;
 var MECE420TraditionalPlanTime = new Date().getTime();
  var ComplementaryElectiveTraditionalPlan0flag = false;
  var ComplementaryElectiveTraditionalPlan0rflag = false;
 var ComplementaryElectiveTraditionalPlan0Time = new Date().getTime();
  var ENGG404TraditionalPlanflag = false;
  var ENGG404TraditionalPlanrflag = false;
 var ENGG404TraditionalPlanTime = new Date().getTime();
  var ITSElectiveTraditionalPlan0flag = false;
  var ITSElectiveTraditionalPlan0rflag = false;
 var ITSElectiveTraditionalPlan0Time = new Date().getTime();
  var MATE201TraditionalPlanflag = false;
  var MATE201TraditionalPlanrflag = false;
 var MATE201TraditionalPlanTime = new Date().getTime();
  var MCTR460TraditionalPlanflag = false;
  var MCTR460TraditionalPlanrflag = false;
 var MCTR460TraditionalPlanTime = new Date().getTime();
  var MECE460TraditionalPlanflag = false;
  var MECE460TraditionalPlanrflag = false;
 var MECE460TraditionalPlanTime = new Date().getTime();
  var ENGG400TraditionalPlanflag = false;
  var ENGG400TraditionalPlanrflag = false;
 var ENGG400TraditionalPlanTime = new Date().getTime();
  var MCTR461TraditionalPlanflag = false;
  var MCTR461TraditionalPlanrflag = false;
 var MCTR461TraditionalPlanTime = new Date().getTime();
  var MCTR465TraditionalPlanflag = false;
  var MCTR465TraditionalPlanrflag = false;
 var MCTR465TraditionalPlanTime = new Date().getTime();
  var MECE461TraditionalPlanflag = false;
  var MECE461TraditionalPlanrflag = false;
 var MECE461TraditionalPlanTime = new Date().getTime();
  var MECE465TraditionalPlanflag = false;
  var MECE465TraditionalPlanrflag = false;
 var MECE465TraditionalPlanTime = new Date().getTime();
  var ProgramTechnicalElectiveTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan0Time = new Date().getTime();
  var ProgramTechnicalElectiveTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan1Time = new Date().getTime();
$scope.CHEM103TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103TraditionalPlanTime <= 200) { 
        CHEM103TraditionalPlanTime = currentTime;
        return;
    }
CHEM103TraditionalPlanTime = currentTime;
  var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
 if (!CHEM103TraditionalPlanflag) {
     if (CHEM103TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM103TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine2());
     CHEM103TraditionalPlanelement.classList.remove("NaturalSciences");
     CHEM103TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM103TraditionalPlan", "NaturalSciences"]);
      CHEM103TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
     CHEM103TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM103TraditionalPlan");
      CHEM103TraditionalPlanflag=false
  }
};
$scope.ENGG100TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100TraditionalPlanTime <= 200) { 
        ENGG100TraditionalPlanTime = currentTime;
        return;
    }
ENGG100TraditionalPlanTime = currentTime;
  var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
 if (!ENGG100TraditionalPlanflag) {
     if (ENGG100TraditionalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100TraditionalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession");
     ENGG100TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG100TraditionalPlan", "EngineeringProfession"]);
      ENGG100TraditionalPlanflag=true
  }
 else {
     ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100TraditionalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG100TraditionalPlan");
      ENGG100TraditionalPlanflag=false
  }
};
$scope.ENGG130TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130TraditionalPlanTime <= 200) { 
        ENGG130TraditionalPlanTime = currentTime;
        return;
    }
ENGG130TraditionalPlanTime = currentTime;
  var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
 if (!ENGG130TraditionalPlanflag) {
     if (ENGG130TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENGG130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine5());
      that.addLine(getLine9());
      that.addLine(getLine22());
     ENGG130TraditionalPlanelement.classList.remove("NaturalSciences");
     ENGG130TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENGG130TraditionalPlan", "NaturalSciences"]);
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
      that.removeLine(getLine9());
      that.removeLine(getLine22());
     ENGG130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENGG130TraditionalPlan");
      ENGG130TraditionalPlanflag=false
  }
};
$scope.ENGL199TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199TraditionalPlanTime <= 200) { 
        ENGL199TraditionalPlanTime = currentTime;
        return;
    }
ENGL199TraditionalPlanTime = currentTime;
  var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
 if (!ENGL199TraditionalPlanflag) {
     if (ENGL199TraditionalPlanelement.classList.contains("Other-highlighted")) { 
     ENGL199TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGL199TraditionalPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine3());
     ENGL199TraditionalPlanelement.classList.remove("Other");
     ENGL199TraditionalPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199TraditionalPlan", "Other"]);
      ENGL199TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
     ENGL199TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGL199TraditionalPlanelement.classList.add("Other");
     that.removeFromClicked("ENGL199TraditionalPlan");
      ENGL199TraditionalPlanflag=false
  }
};
$scope.MATH100TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100TraditionalPlanTime <= 200) { 
        MATH100TraditionalPlanTime = currentTime;
        return;
    }
MATH100TraditionalPlanTime = currentTime;
  var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
 if (!MATH100TraditionalPlanflag) {
     if (MATH100TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH100TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH100TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine1());
      that.addLine(getLine4());
      that.addLine(getLine7());
      that.addLine(getLine8());
     MATH100TraditionalPlanelement.classList.remove("Math");
     MATH100TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH100TraditionalPlan", "Math"]);
      MATH100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine1());
      that.removeLine(getLine4());
      that.removeLine(getLine7());
      that.removeLine(getLine8());
     MATH100TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH100TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH100TraditionalPlan");
      MATH100TraditionalPlanflag=false
  }
};
$scope.PHYS130TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130TraditionalPlanTime <= 200) { 
        PHYS130TraditionalPlanTime = currentTime;
        return;
    }
PHYS130TraditionalPlanTime = currentTime;
  var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
 if (!PHYS130TraditionalPlanflag) {
     if (PHYS130TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     PHYS130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine1());
     PHYS130TraditionalPlanelement.classList.remove("NaturalSciences");
     PHYS130TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["PHYS130TraditionalPlan", "NaturalSciences"]);
      PHYS130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
     PHYS130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("PHYS130TraditionalPlan");
      PHYS130TraditionalPlanflag=false
  }
};
$scope.CHEM105TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105TraditionalPlanTime <= 200) { 
        CHEM105TraditionalPlanTime = currentTime;
        return;
    }
CHEM105TraditionalPlanTime = currentTime;
  var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
 if (!CHEM105TraditionalPlanflag) {
     if (CHEM105TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM105TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine2());
      that.addLine(getLine41());
     CHEM105TraditionalPlanelement.classList.remove("NaturalSciences");
     CHEM105TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM105TraditionalPlan", "NaturalSciences"]);
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine41());
     CHEM105TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM105TraditionalPlan");
      CHEM105TraditionalPlanflag=false
  }
};
$scope.ENCMP100TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100TraditionalPlanTime <= 200) { 
        ENCMP100TraditionalPlanTime = currentTime;
        return;
    }
ENCMP100TraditionalPlanTime = currentTime;
  var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
 if (!ENCMP100TraditionalPlanflag) {
     if (ENCMP100TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine19());
     ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences");
     ENCMP100TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENCMP100TraditionalPlan", "NaturalSciences"]);
      ENCMP100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
     ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENCMP100TraditionalPlan");
      ENCMP100TraditionalPlanflag=false
  }
};
$scope.ENGG160TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160TraditionalPlanTime <= 200) { 
        ENGG160TraditionalPlanTime = currentTime;
        return;
    }
ENGG160TraditionalPlanTime = currentTime;
  var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
 if (!ENGG160TraditionalPlanflag) {
     if (ENGG160TraditionalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160TraditionalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine3());
      that.addLine(getLine25());
     ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign");
     ENGG160TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["ENGG160TraditionalPlan", "EngineeringDesign"]);
      ENGG160TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
      that.removeLine(getLine25());
     ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160TraditionalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("ENGG160TraditionalPlan");
      ENGG160TraditionalPlanflag=false
  }
};
$scope.ENPH131TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131TraditionalPlanTime <= 200) { 
        ENPH131TraditionalPlanTime = currentTime;
        return;
    }
ENPH131TraditionalPlanTime = currentTime;
  var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
 if (!ENPH131TraditionalPlanflag) {
     if (ENPH131TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENPH131TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine4());
      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine21());
      that.addLine(getLine23());
     ENPH131TraditionalPlanelement.classList.remove("NaturalSciences");
     ENPH131TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENPH131TraditionalPlan", "NaturalSciences"]);
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine21());
      that.removeLine(getLine23());
     ENPH131TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENPH131TraditionalPlan");
      ENPH131TraditionalPlanflag=false
  }
};
$scope.MATH101TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101TraditionalPlanTime <= 200) { 
        MATH101TraditionalPlanTime = currentTime;
        return;
    }
MATH101TraditionalPlanTime = currentTime;
  var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
 if (!MATH101TraditionalPlanflag) {
     if (MATH101TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH101TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH101TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine6());
      that.addLine(getLine7());
      that.addLine(getLine10());
      that.addLine(getLine14());
      that.addLine(getLine16());
      that.addLine(getLine18());
      that.addLine(getLine20());
      that.addLine(getLine24());
     MATH101TraditionalPlanelement.classList.remove("Math");
     MATH101TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH101TraditionalPlan", "Math"]);
      MATH101TraditionalPlanflag=true
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
     MATH101TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH101TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH101TraditionalPlan");
      MATH101TraditionalPlanflag=false
  }
};
$scope.MATH102TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102TraditionalPlanTime <= 200) { 
        MATH102TraditionalPlanTime = currentTime;
        return;
    }
MATH102TraditionalPlanTime = currentTime;
  var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
 if (!MATH102TraditionalPlanflag) {
     if (MATH102TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH102TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH102TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine8());
      that.addLine(getLine15());
      that.addLine(getLine17());
      that.addLine(getLine35());
     MATH102TraditionalPlanelement.classList.remove("Math");
     MATH102TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH102TraditionalPlan", "Math"]);
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine15());
      that.removeLine(getLine17());
      that.removeLine(getLine35());
     MATH102TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH102TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH102TraditionalPlan");
      MATH102TraditionalPlanflag=false
  }
};
$scope.CIVE270TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270TraditionalPlanTime <= 200) { 
        CIVE270TraditionalPlanTime = currentTime;
        return;
    }
CIVE270TraditionalPlanTime = currentTime;
  var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
 if (!CIVE270TraditionalPlanflag) {
     if (CIVE270TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine9());
      that.addLine(getLine10());
      that.addLine(getLine27());
      that.addLine(getLine33());
      that.addLine(getLine37());
     CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences");
     CIVE270TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CIVE270TraditionalPlan", "EngineeringSciences"]);
      CIVE270TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine27());
      that.removeLine(getLine33());
      that.removeLine(getLine37());
     CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CIVE270TraditionalPlan");
      CIVE270TraditionalPlanflag=false
  }
};
$scope.ECE210TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210TraditionalPlanTime <= 200) { 
        ECE210TraditionalPlanTime = currentTime;
        return;
    }
ECE210TraditionalPlanTime = currentTime;
  var ECE210TraditionalPlanelement = document.getElementById("ECE210TraditionalPlan");
 if (!ECE210TraditionalPlanflag) {
     if (ECE210TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE210TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE210TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}     ECE210TraditionalPlanelement.classList.remove("EngineeringSciences");
     ECE210TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE210TraditionalPlan", "EngineeringSciences"]);
      ECE210TraditionalPlanflag=true
  }
 else {
     ECE210TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE210TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE210TraditionalPlan");
      ECE210TraditionalPlanflag=false
  }
};
$scope.ECE240TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240TraditionalPlanTime <= 200) { 
        ECE240TraditionalPlanTime = currentTime;
        return;
    }
ECE240TraditionalPlanTime = currentTime;
  var ECE240TraditionalPlanelement = document.getElementById("ECE240TraditionalPlan");
 if (!ECE240TraditionalPlanflag) {
     if (ECE240TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE240TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE240TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine11());
      that.addLine(getLine12());
     ECE240TraditionalPlanelement.classList.remove("EngineeringSciences");
     ECE240TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE240TraditionalPlan", "EngineeringSciences"]);
      ECE240TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine12());
     ECE240TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE240TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE240TraditionalPlan");
      ECE240TraditionalPlanflag=false
  }
};
$scope.MATH201TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201TraditionalPlanTime <= 200) { 
        MATH201TraditionalPlanTime = currentTime;
        return;
    }
MATH201TraditionalPlanTime = currentTime;
  var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
 if (!MATH201TraditionalPlanflag) {
     if (MATH201TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH201TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH201TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine12());
      that.addLine(getLine13());
      that.addLine(getLine36());
     MATH201TraditionalPlanelement.classList.remove("Math");
     MATH201TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH201TraditionalPlan", "Math"]);
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine36());
     MATH201TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH201TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH201TraditionalPlan");
      MATH201TraditionalPlanflag=false
  }
};
$scope.MATH209TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209TraditionalPlanTime <= 200) { 
        MATH209TraditionalPlanTime = currentTime;
        return;
    }
MATH209TraditionalPlanTime = currentTime;
  var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
 if (!MATH209TraditionalPlanflag) {
     if (MATH209TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH209TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH209TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine13());
      that.addLine(getLine14());
      that.addLine(getLine15());
      that.addLine(getLine30());
     MATH209TraditionalPlanelement.classList.remove("Math");
     MATH209TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH209TraditionalPlan", "Math"]);
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      that.removeLine(getLine15());
      that.removeLine(getLine30());
     MATH209TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH209TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH209TraditionalPlan");
      MATH209TraditionalPlanflag=false
  }
};
$scope.MCTR202TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR202TraditionalPlanTime <= 200) { 
        MCTR202TraditionalPlanTime = currentTime;
        return;
    }
MCTR202TraditionalPlanTime = currentTime;
  var MCTR202TraditionalPlanelement = document.getElementById("MCTR202TraditionalPlan");
 if (!MCTR202TraditionalPlanflag) {
     if (MCTR202TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR202TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR202TraditionalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine11());
      that.addLine(getLine16());
      that.addLine(getLine17());
      that.addLine(getLine28());
     MCTR202TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR202TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR202TraditionalPlan", "Mechatronics"]);
      MCTR202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine16());
      that.removeLine(getLine17());
      that.removeLine(getLine28());
     MCTR202TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR202TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR202TraditionalPlan");
      MCTR202TraditionalPlanflag=false
  }
};
$scope.ENGG299TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299TraditionalPlanTime <= 200) { 
        ENGG299TraditionalPlanTime = currentTime;
        return;
    }
ENGG299TraditionalPlanTime = currentTime;
  var ENGG299TraditionalPlanelement = document.getElementById("ENGG299TraditionalPlan");
 if (!ENGG299TraditionalPlanflag) {
     if (ENGG299TraditionalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG299TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299TraditionalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG299TraditionalPlanelement.classList.remove("EngineeringProfession");
     ENGG299TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG299TraditionalPlan", "EngineeringProfession"]);
      ENGG299TraditionalPlanflag=true
  }
 else {
     ENGG299TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299TraditionalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG299TraditionalPlan");
      ENGG299TraditionalPlanflag=false
  }
};
$scope.CHE243TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243TraditionalPlanTime <= 200) { 
        CHE243TraditionalPlanTime = currentTime;
        return;
    }
CHE243TraditionalPlanTime = currentTime;
  var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
 if (!CHE243TraditionalPlanflag) {
     if (CHE243TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE243TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine18());
     CHE243TraditionalPlanelement.classList.remove("EngineeringSciences");
     CHE243TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE243TraditionalPlan", "EngineeringSciences"]);
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine18());
     CHE243TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE243TraditionalPlan");
      CHE243TraditionalPlanflag=false
  }
};
$scope.MCTR200TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR200TraditionalPlanTime <= 200) { 
        MCTR200TraditionalPlanTime = currentTime;
        return;
    }
MCTR200TraditionalPlanTime = currentTime;
  var MCTR200TraditionalPlanelement = document.getElementById("MCTR200TraditionalPlan");
 if (!MCTR200TraditionalPlanflag) {
     if (MCTR200TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR200TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR200TraditionalPlanelement.classList.add("Mechatronics");
      return;
}     MCTR200TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR200TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR200TraditionalPlan", "Mechatronics"]);
      MCTR200TraditionalPlanflag=true
  }
 else {
     MCTR200TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR200TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR200TraditionalPlan");
      MCTR200TraditionalPlanflag=false
  }
};
$scope.MCTR274TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR274TraditionalPlanTime <= 200) { 
        MCTR274TraditionalPlanTime = currentTime;
        return;
    }
MCTR274TraditionalPlanTime = currentTime;
  var MCTR274TraditionalPlanelement = document.getElementById("MCTR274TraditionalPlan");
 if (!MCTR274TraditionalPlanflag) {
     if (MCTR274TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR274TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR274TraditionalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine19());
     MCTR274TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR274TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR274TraditionalPlan", "Mechatronics"]);
      MCTR274TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
     MCTR274TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR274TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR274TraditionalPlan");
      MCTR274TraditionalPlanflag=false
  }
};
$scope.MECE230TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE230TraditionalPlanTime <= 200) { 
        MECE230TraditionalPlanTime = currentTime;
        return;
    }
MECE230TraditionalPlanTime = currentTime;
  var MECE230TraditionalPlanelement = document.getElementById("MECE230TraditionalPlan");
 if (!MECE230TraditionalPlanflag) {
     if (MECE230TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     MECE230TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     MECE230TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine20());
      that.addLine(getLine21());
     MECE230TraditionalPlanelement.classList.remove("NaturalSciences");
     MECE230TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["MECE230TraditionalPlan", "NaturalSciences"]);
      MECE230TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine21());
     MECE230TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     MECE230TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("MECE230TraditionalPlan");
      MECE230TraditionalPlanflag=false
  }
};
$scope.MECE250TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250TraditionalPlanTime <= 200) { 
        MECE250TraditionalPlanTime = currentTime;
        return;
    }
MECE250TraditionalPlanTime = currentTime;
  var MECE250TraditionalPlanelement = document.getElementById("MECE250TraditionalPlan");
 if (!MECE250TraditionalPlanflag) {
     if (MECE250TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MECE250TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE250TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine22());
      that.addLine(getLine23());
      that.addLine(getLine24());
     MECE250TraditionalPlanelement.classList.remove("EngineeringSciences");
     MECE250TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE250TraditionalPlan", "EngineeringSciences"]);
      MECE250TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine22());
      that.removeLine(getLine23());
      that.removeLine(getLine24());
     MECE250TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE250TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE250TraditionalPlan");
      MECE250TraditionalPlanflag=false
  }
};
$scope.MECE260TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE260TraditionalPlanTime <= 200) { 
        MECE260TraditionalPlanTime = currentTime;
        return;
    }
MECE260TraditionalPlanTime = currentTime;
  var MECE260TraditionalPlanelement = document.getElementById("MECE260TraditionalPlan");
 if (!MECE260TraditionalPlanflag) {
     if (MECE260TraditionalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE260TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE260TraditionalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine25());
      that.addLine(getLine26());
      that.addLine(getLine27());
      that.addLine(getLine31());
     MECE260TraditionalPlanelement.classList.remove("EngineeringDesign");
     MECE260TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE260TraditionalPlan", "EngineeringDesign"]);
      MECE260TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine25());
      that.removeLine(getLine26());
      that.removeLine(getLine27());
      that.removeLine(getLine31());
     MECE260TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE260TraditionalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE260TraditionalPlan");
      MECE260TraditionalPlanflag=false
  }
};
$scope.MECE265TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE265TraditionalPlanTime <= 200) { 
        MECE265TraditionalPlanTime = currentTime;
        return;
    }
MECE265TraditionalPlanTime = currentTime;
  var MECE265TraditionalPlanelement = document.getElementById("MECE265TraditionalPlan");
 if (!MECE265TraditionalPlanflag) {
     if (MECE265TraditionalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE265TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE265TraditionalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine26());
      that.addLine(getLine32());
     MECE265TraditionalPlanelement.classList.remove("EngineeringDesign");
     MECE265TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE265TraditionalPlan", "EngineeringDesign"]);
      MECE265TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      that.removeLine(getLine32());
     MECE265TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE265TraditionalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE265TraditionalPlan");
      MECE265TraditionalPlanflag=false
  }
};
$scope.ECE315TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE315TraditionalPlanTime <= 200) { 
        ECE315TraditionalPlanTime = currentTime;
        return;
    }
ECE315TraditionalPlanTime = currentTime;
  var ECE315TraditionalPlanelement = document.getElementById("ECE315TraditionalPlan");
 if (!ECE315TraditionalPlanflag) {
     if (ECE315TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE315TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE315TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine28());
      that.addLine(getLine29());
     ECE315TraditionalPlanelement.classList.remove("EngineeringSciences");
     ECE315TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE315TraditionalPlan", "EngineeringSciences"]);
      ECE315TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine29());
     ECE315TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE315TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE315TraditionalPlan");
      ECE315TraditionalPlanflag=false
  }
};
$scope.ECE342TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342TraditionalPlanTime <= 200) { 
        ECE342TraditionalPlanTime = currentTime;
        return;
    }
ECE342TraditionalPlanTime = currentTime;
  var ECE342TraditionalPlanelement = document.getElementById("ECE342TraditionalPlan");
 if (!ECE342TraditionalPlanflag) {
     if (ECE342TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     ECE342TraditionalPlanelement.classList.remove("Math-highlighted");
     ECE342TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine30());
      that.addLine(getLine38());
      that.addLine(getLine39());
     ECE342TraditionalPlanelement.classList.remove("Math");
     ECE342TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["ECE342TraditionalPlan", "Math"]);
      ECE342TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine30());
      that.removeLine(getLine38());
      that.removeLine(getLine39());
     ECE342TraditionalPlanelement.classList.remove("Math-highlighted");
     ECE342TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("ECE342TraditionalPlan");
      ECE342TraditionalPlanflag=false
  }
};
$scope.MCTR374TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR374TraditionalPlanTime <= 200) { 
        MCTR374TraditionalPlanTime = currentTime;
        return;
    }
MCTR374TraditionalPlanTime = currentTime;
  var MCTR374TraditionalPlanelement = document.getElementById("MCTR374TraditionalPlan");
 if (!MCTR374TraditionalPlanflag) {
     if (MCTR374TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR374TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR374TraditionalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine29());
      that.addLine(getLine46());
     MCTR374TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR374TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR374TraditionalPlan", "Mechatronics"]);
      MCTR374TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
      that.removeLine(getLine46());
     MCTR374TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR374TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR374TraditionalPlan");
      MCTR374TraditionalPlanflag=false
  }
};
$scope.MECE350TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE350TraditionalPlanTime <= 200) { 
        MECE350TraditionalPlanTime = currentTime;
        return;
    }
MECE350TraditionalPlanTime = currentTime;
  var MECE350TraditionalPlanelement = document.getElementById("MECE350TraditionalPlan");
 if (!MECE350TraditionalPlanflag) {
     if (MECE350TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MECE350TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE350TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine34());
     MECE350TraditionalPlanelement.classList.remove("EngineeringSciences");
     MECE350TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE350TraditionalPlan", "EngineeringSciences"]);
      MECE350TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine34());
     MECE350TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE350TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE350TraditionalPlan");
      MECE350TraditionalPlanflag=false
  }
};
$scope.MECE360TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE360TraditionalPlanTime <= 200) { 
        MECE360TraditionalPlanTime = currentTime;
        return;
    }
MECE360TraditionalPlanTime = currentTime;
  var MECE360TraditionalPlanelement = document.getElementById("MECE360TraditionalPlan");
 if (!MECE360TraditionalPlanflag) {
     if (MECE360TraditionalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE360TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE360TraditionalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine31());
      that.addLine(getLine32());
      that.addLine(getLine33());
      that.addLine(getLine34());
      that.addLine(getLine42());
     MECE360TraditionalPlanelement.classList.remove("EngineeringDesign");
     MECE360TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE360TraditionalPlan", "EngineeringDesign"]);
      MECE360TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
      that.removeLine(getLine32());
      that.removeLine(getLine33());
      that.removeLine(getLine34());
      that.removeLine(getLine42());
     MECE360TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE360TraditionalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE360TraditionalPlan");
      MECE360TraditionalPlanflag=false
  }
};
$scope.MECE390TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE390TraditionalPlanTime <= 200) { 
        MECE390TraditionalPlanTime = currentTime;
        return;
    }
MECE390TraditionalPlanTime = currentTime;
  var MECE390TraditionalPlanelement = document.getElementById("MECE390TraditionalPlan");
 if (!MECE390TraditionalPlanflag) {
     if (MECE390TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MECE390TraditionalPlanelement.classList.remove("Math-highlighted");
     MECE390TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine35());
      that.addLine(getLine36());
      that.addLine(getLine40());
     MECE390TraditionalPlanelement.classList.remove("Math");
     MECE390TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MECE390TraditionalPlan", "Math"]);
      MECE390TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine35());
      that.removeLine(getLine36());
      that.removeLine(getLine40());
     MECE390TraditionalPlanelement.classList.remove("Math-highlighted");
     MECE390TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MECE390TraditionalPlan");
      MECE390TraditionalPlanflag=false
  }
};
$scope.ENGM401TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401TraditionalPlanTime <= 200) { 
        ENGM401TraditionalPlanTime = currentTime;
        return;
    }
ENGM401TraditionalPlanTime = currentTime;
  var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
 if (!ENGM401TraditionalPlanflag) {
     if (ENGM401TraditionalPlanelement.classList.contains("Other-highlighted")) { 
     ENGM401TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM401TraditionalPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine44());
     ENGM401TraditionalPlanelement.classList.remove("Other");
     ENGM401TraditionalPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401TraditionalPlan", "Other"]);
      ENGM401TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine44());
     ENGM401TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM401TraditionalPlanelement.classList.add("Other");
     that.removeFromClicked("ENGM401TraditionalPlan");
      ENGM401TraditionalPlanflag=false
  }
};
$scope.MCTR300TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR300TraditionalPlanTime <= 200) { 
        MCTR300TraditionalPlanTime = currentTime;
        return;
    }
MCTR300TraditionalPlanTime = currentTime;
  var MCTR300TraditionalPlanelement = document.getElementById("MCTR300TraditionalPlan");
 if (!MCTR300TraditionalPlanflag) {
     if (MCTR300TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR300TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR300TraditionalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine37());
      that.addLine(getLine38());
      that.addLine(getLine49());
     MCTR300TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR300TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR300TraditionalPlan", "Mechatronics"]);
      MCTR300TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine38());
      that.removeLine(getLine49());
     MCTR300TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR300TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR300TraditionalPlan");
      MCTR300TraditionalPlanflag=false
  }
};
$scope.MCTR332TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR332TraditionalPlanTime <= 200) { 
        MCTR332TraditionalPlanTime = currentTime;
        return;
    }
MCTR332TraditionalPlanTime = currentTime;
  var MCTR332TraditionalPlanelement = document.getElementById("MCTR332TraditionalPlan");
 if (!MCTR332TraditionalPlanflag) {
     if (MCTR332TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR332TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR332TraditionalPlanelement.classList.add("Mechatronics");
      return;
}     MCTR332TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR332TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR332TraditionalPlan", "Mechatronics"]);
      MCTR332TraditionalPlanflag=true
  }
 else {
     MCTR332TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR332TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR332TraditionalPlan");
      MCTR332TraditionalPlanflag=false
  }
};
$scope.MCTR365TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR365TraditionalPlanTime <= 200) { 
        MCTR365TraditionalPlanTime = currentTime;
        return;
    }
MCTR365TraditionalPlanTime = currentTime;
  var MCTR365TraditionalPlanelement = document.getElementById("MCTR365TraditionalPlan");
 if (!MCTR365TraditionalPlanflag) {
     if (MCTR365TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR365TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR365TraditionalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine43());
     MCTR365TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR365TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR365TraditionalPlan", "Mechatronics"]);
      MCTR365TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine43());
     MCTR365TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR365TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR365TraditionalPlan");
      MCTR365TraditionalPlanflag=false
  }
};
$scope.MCTR370TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR370TraditionalPlanTime <= 200) { 
        MCTR370TraditionalPlanTime = currentTime;
        return;
    }
MCTR370TraditionalPlanTime = currentTime;
  var MCTR370TraditionalPlanelement = document.getElementById("MCTR370TraditionalPlan");
 if (!MCTR370TraditionalPlanflag) {
     if (MCTR370TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR370TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR370TraditionalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine39());
     MCTR370TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR370TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR370TraditionalPlan", "Mechatronics"]);
      MCTR370TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
     MCTR370TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR370TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR370TraditionalPlan");
      MCTR370TraditionalPlanflag=false
  }
};
$scope.MECE420TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE420TraditionalPlanTime <= 200) { 
        MECE420TraditionalPlanTime = currentTime;
        return;
    }
MECE420TraditionalPlanTime = currentTime;
  var MECE420TraditionalPlanelement = document.getElementById("MECE420TraditionalPlan");
 if (!MECE420TraditionalPlanflag) {
     if (MECE420TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MECE420TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE420TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine40());
      that.addLine(getLine45());
      that.addLine(getLine47());
     MECE420TraditionalPlanelement.classList.remove("EngineeringSciences");
     MECE420TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE420TraditionalPlan", "EngineeringSciences"]);
      MECE420TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine40());
      that.removeLine(getLine45());
      that.removeLine(getLine47());
     MECE420TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE420TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE420TraditionalPlan");
      MECE420TraditionalPlanflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlan0Time <= 200) { 
        ComplementaryElectiveTraditionalPlan0Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlan0Time = currentTime;
  var ComplementaryElectiveTraditionalPlan0element = document.getElementById("ComplementaryElectiveTraditionalPlan0");
 if (!ComplementaryElectiveTraditionalPlan0flag) {
     if (ComplementaryElectiveTraditionalPlan0element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveTraditionalPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlan0element.classList.add("COMP");
      return;
}     ComplementaryElectiveTraditionalPlan0element.classList.remove("COMP");
     ComplementaryElectiveTraditionalPlan0element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveTraditionalPlan0", "COMP"]);
      ComplementaryElectiveTraditionalPlan0flag=true
  }
 else {
     ComplementaryElectiveTraditionalPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlan0element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveTraditionalPlan0");
      ComplementaryElectiveTraditionalPlan0flag=false
  }
};
$scope.ENGG404TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404TraditionalPlanTime <= 200) { 
        ENGG404TraditionalPlanTime = currentTime;
        return;
    }
ENGG404TraditionalPlanTime = currentTime;
  var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
 if (!ENGG404TraditionalPlanflag) {
     if (ENGG404TraditionalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404TraditionalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession");
     ENGG404TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG404TraditionalPlan", "EngineeringProfession"]);
      ENGG404TraditionalPlanflag=true
  }
 else {
     ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404TraditionalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG404TraditionalPlan");
      ENGG404TraditionalPlanflag=false
  }
};
$scope.ITSElectiveTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveTraditionalPlan0Time <= 200) { 
        ITSElectiveTraditionalPlan0Time = currentTime;
        return;
    }
ITSElectiveTraditionalPlan0Time = currentTime;
  var ITSElectiveTraditionalPlan0element = document.getElementById("ITSElectiveTraditionalPlan0");
 if (!ITSElectiveTraditionalPlan0flag) {
     if (ITSElectiveTraditionalPlan0element.classList.contains("ITS-highlighted")) { 
     ITSElectiveTraditionalPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveTraditionalPlan0element.classList.add("ITS");
      return;
}     ITSElectiveTraditionalPlan0element.classList.remove("ITS");
     ITSElectiveTraditionalPlan0element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveTraditionalPlan0", "ITS"]);
      ITSElectiveTraditionalPlan0flag=true
  }
 else {
     ITSElectiveTraditionalPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveTraditionalPlan0element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveTraditionalPlan0");
      ITSElectiveTraditionalPlan0flag=false
  }
};
$scope.MATE201TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE201TraditionalPlanTime <= 200) { 
        MATE201TraditionalPlanTime = currentTime;
        return;
    }
MATE201TraditionalPlanTime = currentTime;
  var MATE201TraditionalPlanelement = document.getElementById("MATE201TraditionalPlan");
 if (!MATE201TraditionalPlanflag) {
     if (MATE201TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     MATE201TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     MATE201TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine41());
     MATE201TraditionalPlanelement.classList.remove("NaturalSciences");
     MATE201TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["MATE201TraditionalPlan", "NaturalSciences"]);
      MATE201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine41());
     MATE201TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     MATE201TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("MATE201TraditionalPlan");
      MATE201TraditionalPlanflag=false
  }
};
$scope.MCTR460TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR460TraditionalPlanTime <= 200) { 
        MCTR460TraditionalPlanTime = currentTime;
        return;
    }
MCTR460TraditionalPlanTime = currentTime;
  var MCTR460TraditionalPlanelement = document.getElementById("MCTR460TraditionalPlan");
 if (!MCTR460TraditionalPlanflag) {
     if (MCTR460TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR460TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR460TraditionalPlanelement.classList.add("Mechatronics");
      return;
}     MCTR460TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR460TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR460TraditionalPlan", "Mechatronics"]);
      MCTR460TraditionalPlanflag=true
  }
 else {
     MCTR460TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR460TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR460TraditionalPlan");
      MCTR460TraditionalPlanflag=false
  }
};
$scope.MECE460TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE460TraditionalPlanTime <= 200) { 
        MECE460TraditionalPlanTime = currentTime;
        return;
    }
MECE460TraditionalPlanTime = currentTime;
  var MECE460TraditionalPlanelement = document.getElementById("MECE460TraditionalPlan");
 if (!MECE460TraditionalPlanflag) {
     if (MECE460TraditionalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE460TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE460TraditionalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine42());
      that.addLine(getLine43());
      that.addLine(getLine44());
      that.addLine(getLine48());
     MECE460TraditionalPlanelement.classList.remove("EngineeringDesign");
     MECE460TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE460TraditionalPlan", "EngineeringDesign"]);
      MECE460TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine42());
      that.removeLine(getLine43());
      that.removeLine(getLine44());
      that.removeLine(getLine48());
     MECE460TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE460TraditionalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE460TraditionalPlan");
      MECE460TraditionalPlanflag=false
  }
};
$scope.ENGG400TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400TraditionalPlanTime <= 200) { 
        ENGG400TraditionalPlanTime = currentTime;
        return;
    }
ENGG400TraditionalPlanTime = currentTime;
  var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
 if (!ENGG400TraditionalPlanflag) {
     if (ENGG400TraditionalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400TraditionalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession");
     ENGG400TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG400TraditionalPlan", "EngineeringProfession"]);
      ENGG400TraditionalPlanflag=true
  }
 else {
     ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400TraditionalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG400TraditionalPlan");
      ENGG400TraditionalPlanflag=false
  }
};
$scope.MCTR461TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR461TraditionalPlanTime <= 200) { 
        MCTR461TraditionalPlanTime = currentTime;
        return;
    }
MCTR461TraditionalPlanTime = currentTime;
  var MCTR461TraditionalPlanelement = document.getElementById("MCTR461TraditionalPlan");
 if (!MCTR461TraditionalPlanflag) {
     if (MCTR461TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR461TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR461TraditionalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine45());
     MCTR461TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR461TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR461TraditionalPlan", "Mechatronics"]);
      MCTR461TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine45());
     MCTR461TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR461TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR461TraditionalPlan");
      MCTR461TraditionalPlanflag=false
  }
};
$scope.MCTR465TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR465TraditionalPlanTime <= 200) { 
        MCTR465TraditionalPlanTime = currentTime;
        return;
    }
MCTR465TraditionalPlanTime = currentTime;
  var MCTR465TraditionalPlanelement = document.getElementById("MCTR465TraditionalPlan");
 if (!MCTR465TraditionalPlanflag) {
     if (MCTR465TraditionalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR465TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR465TraditionalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine46());
      that.addLine(getLine47());
     MCTR465TraditionalPlanelement.classList.remove("Mechatronics");
     MCTR465TraditionalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR465TraditionalPlan", "Mechatronics"]);
      MCTR465TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine46());
      that.removeLine(getLine47());
     MCTR465TraditionalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR465TraditionalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR465TraditionalPlan");
      MCTR465TraditionalPlanflag=false
  }
};
$scope.MECE461TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE461TraditionalPlanTime <= 200) { 
        MECE461TraditionalPlanTime = currentTime;
        return;
    }
MECE461TraditionalPlanTime = currentTime;
  var MECE461TraditionalPlanelement = document.getElementById("MECE461TraditionalPlan");
 if (!MECE461TraditionalPlanflag) {
     if (MECE461TraditionalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MECE461TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE461TraditionalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine48());
     MECE461TraditionalPlanelement.classList.remove("EngineeringDesign");
     MECE461TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE461TraditionalPlan", "EngineeringDesign"]);
      MECE461TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine48());
     MECE461TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MECE461TraditionalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE461TraditionalPlan");
      MECE461TraditionalPlanflag=false
  }
};
$scope.MECE465TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE465TraditionalPlanTime <= 200) { 
        MECE465TraditionalPlanTime = currentTime;
        return;
    }
MECE465TraditionalPlanTime = currentTime;
  var MECE465TraditionalPlanelement = document.getElementById("MECE465TraditionalPlan");
 if (!MECE465TraditionalPlanflag) {
     if (MECE465TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MECE465TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE465TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine49());
     MECE465TraditionalPlanelement.classList.remove("EngineeringSciences");
     MECE465TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE465TraditionalPlan", "EngineeringSciences"]);
      MECE465TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine49());
     MECE465TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE465TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE465TraditionalPlan");
      MECE465TraditionalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan0Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan0Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan0element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan0");
 if (!ProgramTechnicalElectiveTraditionalPlan0flag) {
     if (ProgramTechnicalElectiveTraditionalPlan0element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveTraditionalPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan0element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveTraditionalPlan0element.classList.remove("PROG");
     ProgramTechnicalElectiveTraditionalPlan0element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveTraditionalPlan0", "PROG"]);
      ProgramTechnicalElectiveTraditionalPlan0flag=true
  }
 else {
     ProgramTechnicalElectiveTraditionalPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan0element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan0");
      ProgramTechnicalElectiveTraditionalPlan0flag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan1Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan1Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan1element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan1");
 if (!ProgramTechnicalElectiveTraditionalPlan1flag) {
     if (ProgramTechnicalElectiveTraditionalPlan1element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveTraditionalPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan1element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveTraditionalPlan1element.classList.remove("PROG");
     ProgramTechnicalElectiveTraditionalPlan1element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveTraditionalPlan1", "PROG"]);
      ProgramTechnicalElectiveTraditionalPlan1flag=true
  }
 else {
     ProgramTechnicalElectiveTraditionalPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan1element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan1");
      ProgramTechnicalElectiveTraditionalPlan1flag=false
  }
};
$scope.CHEM103TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM103TraditionalPlandesc");
 if (!CHEM103TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103TraditionalPlanrflag=false
  }
};
$scope.ENGG100TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG100TraditionalPlandesc");
 if (!ENGG100TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100TraditionalPlanrflag=false
  }
};
$scope.ENGG130TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG130TraditionalPlandesc");
 if (!ENGG130TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130TraditionalPlanrflag=false
  }
};
$scope.ENGL199TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGL199TraditionalPlandesc");
 if (!ENGL199TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199TraditionalPlanrflag=false
  }
};
$scope.MATH100TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH100TraditionalPlandesc");
 if (!MATH100TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100TraditionalPlanrflag=false
  }
};
$scope.PHYS130TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS130TraditionalPlandesc");
 if (!PHYS130TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130TraditionalPlanrflag=false
  }
};
$scope.CHEM105TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM105TraditionalPlandesc");
 if (!CHEM105TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105TraditionalPlanrflag=false
  }
};
$scope.ENCMP100TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENCMP100TraditionalPlandesc");
 if (!ENCMP100TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100TraditionalPlanrflag=false
  }
};
$scope.ENGG160TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG160TraditionalPlandesc");
 if (!ENGG160TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160TraditionalPlanrflag=false
  }
};
$scope.ENPH131TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENPH131TraditionalPlandesc");
 if (!ENPH131TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131TraditionalPlanrflag=false
  }
};
$scope.MATH101TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH101TraditionalPlandesc");
 if (!MATH101TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101TraditionalPlanrflag=false
  }
};
$scope.MATH102TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH102TraditionalPlandesc");
 if (!MATH102TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102TraditionalPlanrflag=false
  }
};
$scope.CIVE270TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE270TraditionalPlandesc");
 if (!CIVE270TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270TraditionalPlanrflag=false
  }
};
$scope.ECE210TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE210TraditionalPlandesc");
 if (!ECE210TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210TraditionalPlanrflag=false
  }
};
$scope.ECE240TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE240TraditionalPlandesc");
 if (!ECE240TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240TraditionalPlanrflag=false
  }
};
$scope.MATH201TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH201TraditionalPlandesc");
 if (!MATH201TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201TraditionalPlanrflag=false
  }
};
$scope.MATH209TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH209TraditionalPlandesc");
 if (!MATH209TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209TraditionalPlanrflag=false
  }
};
$scope.MCTR202TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR202TraditionalPlandesc");
 if (!MCTR202TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR202TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR202TraditionalPlanrflag=false
  }
};
$scope.ENGG299TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG299TraditionalPlandesc");
 if (!ENGG299TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299TraditionalPlanrflag=false
  }
};
$scope.CHE243TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE243TraditionalPlandesc");
 if (!CHE243TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243TraditionalPlanrflag=false
  }
};
$scope.MCTR200TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR200TraditionalPlandesc");
 if (!MCTR200TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR200TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR200TraditionalPlanrflag=false
  }
};
$scope.MCTR274TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR274TraditionalPlandesc");
 if (!MCTR274TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR274TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR274TraditionalPlanrflag=false
  }
};
$scope.MECE230TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE230TraditionalPlandesc");
 if (!MECE230TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE230TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE230TraditionalPlanrflag=false
  }
};
$scope.MECE250TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE250TraditionalPlandesc");
 if (!MECE250TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250TraditionalPlanrflag=false
  }
};
$scope.MECE260TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE260TraditionalPlandesc");
 if (!MECE260TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE260TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE260TraditionalPlanrflag=false
  }
};
$scope.MECE265TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE265TraditionalPlandesc");
 if (!MECE265TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE265TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE265TraditionalPlanrflag=false
  }
};
$scope.ECE315TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE315TraditionalPlandesc");
 if (!ECE315TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE315TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE315TraditionalPlanrflag=false
  }
};
$scope.ECE342TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE342TraditionalPlandesc");
 if (!ECE342TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342TraditionalPlanrflag=false
  }
};
$scope.MCTR374TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR374TraditionalPlandesc");
 if (!MCTR374TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR374TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR374TraditionalPlanrflag=false
  }
};
$scope.MECE350TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE350TraditionalPlandesc");
 if (!MECE350TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE350TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE350TraditionalPlanrflag=false
  }
};
$scope.MECE360TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE360TraditionalPlandesc");
 if (!MECE360TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE360TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE360TraditionalPlanrflag=false
  }
};
$scope.MECE390TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE390TraditionalPlandesc");
 if (!MECE390TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE390TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE390TraditionalPlanrflag=false
  }
};
$scope.ENGM401TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGM401TraditionalPlandesc");
 if (!ENGM401TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401TraditionalPlanrflag=false
  }
};
$scope.MCTR300TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR300TraditionalPlandesc");
 if (!MCTR300TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR300TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR300TraditionalPlanrflag=false
  }
};
$scope.MCTR332TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR332TraditionalPlandesc");
 if (!MCTR332TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR332TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR332TraditionalPlanrflag=false
  }
};
$scope.MCTR365TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR365TraditionalPlandesc");
 if (!MCTR365TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR365TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR365TraditionalPlanrflag=false
  }
};
$scope.MCTR370TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR370TraditionalPlandesc");
 if (!MCTR370TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR370TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR370TraditionalPlanrflag=false
  }
};
$scope.MECE420TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE420TraditionalPlandesc");
 if (!MECE420TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE420TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE420TraditionalPlanrflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlan0desc");
 if (!ComplementaryElectiveTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlan0rflag=false
  }
};
$scope.ENGG404TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG404TraditionalPlandesc");
 if (!ENGG404TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404TraditionalPlanrflag=false
  }
};
$scope.ITSElectiveTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ITSElectiveTraditionalPlan0desc");
 if (!ITSElectiveTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveTraditionalPlan0rflag=false
  }
};
$scope.MATE201TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE201TraditionalPlandesc");
 if (!MATE201TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE201TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE201TraditionalPlanrflag=false
  }
};
$scope.MCTR460TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR460TraditionalPlandesc");
 if (!MCTR460TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR460TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR460TraditionalPlanrflag=false
  }
};
$scope.MECE460TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE460TraditionalPlandesc");
 if (!MECE460TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE460TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE460TraditionalPlanrflag=false
  }
};
$scope.ENGG400TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG400TraditionalPlandesc");
 if (!ENGG400TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400TraditionalPlanrflag=false
  }
};
$scope.MCTR461TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR461TraditionalPlandesc");
 if (!MCTR461TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR461TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR461TraditionalPlanrflag=false
  }
};
$scope.MCTR465TraditionalPlanRCListener = function () {
  var element = document.getElementById("MCTR465TraditionalPlandesc");
 if (!MCTR465TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR465TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR465TraditionalPlanrflag=false
  }
};
$scope.MECE461TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE461TraditionalPlandesc");
 if (!MECE461TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE461TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE461TraditionalPlanrflag=false
  }
};
$scope.MECE465TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE465TraditionalPlandesc");
 if (!MECE465TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE465TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE465TraditionalPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan0desc");
 if (!ProgramTechnicalElectiveTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan0rflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan1desc");
 if (!ProgramTechnicalElectiveTraditionalPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan1rflag=false
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