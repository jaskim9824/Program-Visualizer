var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "TraditionalPlan";
var that = this;
this.previousPlan = $scope.selectedPlan;
this.render = function(plan) {
            this.disable(this.previousPlan);
            this.enable(plan);
            this.previousPlan = plan;
};
var radios = document.querySelectorAll("input[type=radio][name=planselector");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () {
        that.render($scope.selectedPlan);
    });
});
this.TraditionalPlanList = [];
this.TraditionalPlanTerms = 8;
this.AlternatePlanList = [];
this.AlternatePlanTerms = 9;
this.CoopPlan1List = [];
this.CoopPlan1Terms = 13;
this.CoopPlan2List = [];
this.CoopPlan2Terms = 13;
this.CoopPlan3BiomedicalList = [];
this.CoopPlan3BiomedicalTerms = 13;
this.CoopPlan4List = [];
this.CoopPlan4Terms = 13;
this.disable = function(plan) {
    switch (plan) { 
  case "TraditionalPlan": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    width = this.TraditionalPlanTerms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "AlternatePlan": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide(true);
    }
    width = this.AlternatePlanTerms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "CoopPlan1": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    width = this.CoopPlan1Terms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "CoopPlan2": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    width = this.CoopPlan2Terms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "CoopPlan3Biomedical": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    width = this.CoopPlan3BiomedicalTerms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "CoopPlan4": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    width = this.CoopPlan4Terms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
    default:
    console.log("shouldn't be here");
    }
};
this.enable = function(plan) {
    switch (plan) { 
  case "TraditionalPlan": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].show(true);
    }
    width = this.TraditionalPlanTerms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "AlternatePlan": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].show(true);
    }
    width = this.AlternatePlanTerms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "CoopPlan1": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].show(true);
    }
    width = this.CoopPlan1Terms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "CoopPlan2": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].show(true);
    }
    width = this.CoopPlan2Terms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "CoopPlan3Biomedical": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].show(true);
    }
    width = this.CoopPlan3BiomedicalTerms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    break; 
  case "CoopPlan4": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].show(true);
    }
    width = this.CoopPlan4Terms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
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
 case "AlternatePlan":
    var index = this.AlternatePlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.AlternatePlanList.push([line, 1])
    }
    else {
        this.AlternatePlanList[index][1]++;
    }
    break;
 case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan1List.push([line, 1])
    }
    else {
        this.CoopPlan1List[index][1]++;
    }
    break;
 case "CoopPlan2":
    var index = this.CoopPlan2List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan2List.push([line, 1])
    }
    else {
        this.CoopPlan2List[index][1]++;
    }
    break;
 case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan3BiomedicalList.push([line, 1])
    }
    else {
        this.CoopPlan3BiomedicalList[index][1]++;
    }
    break;
 case "CoopPlan4":
    var index = this.CoopPlan4List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan4List.push([line, 1])
    }
    else {
        this.CoopPlan4List[index][1]++;
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
    break; case "AlternatePlan":
    var index = this.AlternatePlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.AlternatePlanList[index][1]--
        if (this.AlternatePlanList[index][1] <= 0) {
            line.hide(false);
            this.AlternatePlanList.splice(index, 1);
        }
    }
    break; case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan1List[index][1]--
        if (this.CoopPlan1List[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan1List.splice(index, 1);
        }
    }
    break; case "CoopPlan2":
    var index = this.CoopPlan2List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan2List[index][1]--
        if (this.CoopPlan2List[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan2List.splice(index, 1);
        }
    }
    break; case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan3BiomedicalList[index][1]--
        if (this.CoopPlan3BiomedicalList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan3BiomedicalList.splice(index, 1);
        }
    }
    break; case "CoopPlan4":
    var index = this.CoopPlan4List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan4List[index][1]--
        if (this.CoopPlan4List[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan4List.splice(index, 1);
        }
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
  var CHEM103TraditionalPlanflag = false;
  var ENGG100TraditionalPlanflag = false;
  var ENGG130TraditionalPlanflag = false;
  var ENGL199TraditionalPlanflag = false;
  var MATH100TraditionalPlanflag = false;
  var PHYS130TraditionalPlanflag = false;
  var CHEM105TraditionalPlanflag = false;
  var ENCMP100TraditionalPlanflag = false;
  var ENGG160TraditionalPlanflag = false;
  var ENPH131TraditionalPlanflag = false;
  var MATH101TraditionalPlanflag = false;
  var MATH102TraditionalPlanflag = false;
  var CIVE270TraditionalPlanflag = false;
  var MATH209TraditionalPlanflag = false;
  var STAT235TraditionalPlanflag = false;
  var CHE243TraditionalPlanflag = false;
  var MECE200TraditionalPlanflag = false;
  var MECE250TraditionalPlanflag = false;
  var ECE209TraditionalPlanflag = false;
  var MATE202TraditionalPlanflag = false;
  var MATH201TraditionalPlanflag = false;
  var MECE230TraditionalPlanflag = false;
  var MECE260TraditionalPlanflag = false;
  var MECE265TraditionalPlanflag = false;
  var MATH300TraditionalPlanflag = false;
  var MECE300TraditionalPlanflag = false;
  var MECE301TraditionalPlanflag = false;
  var MECE331TraditionalPlanflag = false;
  var MECE371TraditionalPlanflag = false;
  var MECE380TraditionalPlanflag = false;
  var ENGM310TraditionalPlanflag = false;
  var MECE340TraditionalPlanflag = false;
  var MECE360TraditionalPlanflag = false;
  var MECE362TraditionalPlanflag = false;
  var MECE390TraditionalPlanflag = false;
  var ComplementaryElectiveTraditionalPlanflag = false;
  var ENGG404TraditionalPlanflag = false;
  var MECE430TraditionalPlanflag = false;
  var MECE463TraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlanflag = false;
  var CHE448TraditionalPlanflag = false;
  var ENGG400TraditionalPlanflag = false;
  var MECE403TraditionalPlanflag = false;
  var MECE451TraditionalPlanflag = false;
  var MECE460TraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlanflag = false;
  var ITSElectiveTraditionalPlanflag = false;
$scope.CHEM103TraditionalPlanListener = function () {
  var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
 if (!CHEM103TraditionalPlanflag) {
      that.addLine(getLine2());
     CHEM103TraditionalPlanelement.classList.remove("course");
     CHEM103TraditionalPlanelement.classList.add("course-highlighted");
      CHEM103TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
     CHEM103TraditionalPlanelement.classList.remove("course-highlighted");
     CHEM103TraditionalPlanelement.classList.add("course");
      CHEM103TraditionalPlanflag=false
  }
};
$scope.ENGG130TraditionalPlanListener = function () {
  var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
 if (!ENGG130TraditionalPlanflag) {
      that.addLine(getLine0());
      that.addLine(getLine5());
      that.addLine(getLine9());
      that.addLine(getLine16());
     ENGG130TraditionalPlanelement.classList.remove("course");
     ENGG130TraditionalPlanelement.classList.add("course-highlighted");
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
      that.removeLine(getLine9());
      that.removeLine(getLine16());
     ENGG130TraditionalPlanelement.classList.remove("course-highlighted");
     ENGG130TraditionalPlanelement.classList.add("course");
      ENGG130TraditionalPlanflag=false
  }
};
$scope.ENGL199TraditionalPlanListener = function () {
  var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
 if (!ENGL199TraditionalPlanflag) {
      that.addLine(getLine3());
     ENGL199TraditionalPlanelement.classList.remove("course");
     ENGL199TraditionalPlanelement.classList.add("course-highlighted");
      ENGL199TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
     ENGL199TraditionalPlanelement.classList.remove("course-highlighted");
     ENGL199TraditionalPlanelement.classList.add("course");
      ENGL199TraditionalPlanflag=false
  }
};
$scope.MATH100TraditionalPlanListener = function () {
  var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
 if (!MATH100TraditionalPlanflag) {
      that.addLine(getLine0());
      that.addLine(getLine1());
      that.addLine(getLine4());
      that.addLine(getLine7());
      that.addLine(getLine8());
      that.addLine(getLine13());
     MATH100TraditionalPlanelement.classList.remove("course");
     MATH100TraditionalPlanelement.classList.add("course-highlighted");
      MATH100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine1());
      that.removeLine(getLine4());
      that.removeLine(getLine7());
      that.removeLine(getLine8());
      that.removeLine(getLine13());
     MATH100TraditionalPlanelement.classList.remove("course-highlighted");
     MATH100TraditionalPlanelement.classList.add("course");
      MATH100TraditionalPlanflag=false
  }
};
$scope.PHYS130TraditionalPlanListener = function () {
  var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
 if (!PHYS130TraditionalPlanflag) {
      that.addLine(getLine1());
     PHYS130TraditionalPlanelement.classList.remove("course");
     PHYS130TraditionalPlanelement.classList.add("course-highlighted");
      PHYS130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
     PHYS130TraditionalPlanelement.classList.remove("course-highlighted");
     PHYS130TraditionalPlanelement.classList.add("course");
      PHYS130TraditionalPlanflag=false
  }
};
$scope.CHEM105TraditionalPlanListener = function () {
  var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
 if (!CHEM105TraditionalPlanflag) {
      that.addLine(getLine2());
      that.addLine(getLine19());
     CHEM105TraditionalPlanelement.classList.remove("course");
     CHEM105TraditionalPlanelement.classList.add("course-highlighted");
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine19());
     CHEM105TraditionalPlanelement.classList.remove("course-highlighted");
     CHEM105TraditionalPlanelement.classList.add("course");
      CHEM105TraditionalPlanflag=false
  }
};
$scope.ENGG160TraditionalPlanListener = function () {
  var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
 if (!ENGG160TraditionalPlanflag) {
      that.addLine(getLine3());
      that.addLine(getLine23());
     ENGG160TraditionalPlanelement.classList.remove("course");
     ENGG160TraditionalPlanelement.classList.add("course-highlighted");
      ENGG160TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
      that.removeLine(getLine23());
     ENGG160TraditionalPlanelement.classList.remove("course-highlighted");
     ENGG160TraditionalPlanelement.classList.add("course");
      ENGG160TraditionalPlanflag=false
  }
};
$scope.ENPH131TraditionalPlanListener = function () {
  var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
 if (!ENPH131TraditionalPlanflag) {
      that.addLine(getLine4());
      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine17());
      that.addLine(getLine22());
     ENPH131TraditionalPlanelement.classList.remove("course");
     ENPH131TraditionalPlanelement.classList.add("course-highlighted");
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine17());
      that.removeLine(getLine22());
     ENPH131TraditionalPlanelement.classList.remove("course-highlighted");
     ENPH131TraditionalPlanelement.classList.add("course");
      ENPH131TraditionalPlanflag=false
  }
};
$scope.MATH101TraditionalPlanListener = function () {
  var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
 if (!MATH101TraditionalPlanflag) {
      that.addLine(getLine6());
      that.addLine(getLine7());
      that.addLine(getLine10());
      that.addLine(getLine11());
      that.addLine(getLine14());
      that.addLine(getLine15());
      that.addLine(getLine18());
      that.addLine(getLine21());
     MATH101TraditionalPlanelement.classList.remove("course");
     MATH101TraditionalPlanelement.classList.add("course-highlighted");
      MATH101TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine6());
      that.removeLine(getLine7());
      that.removeLine(getLine10());
      that.removeLine(getLine11());
      that.removeLine(getLine14());
      that.removeLine(getLine15());
      that.removeLine(getLine18());
      that.removeLine(getLine21());
     MATH101TraditionalPlanelement.classList.remove("course-highlighted");
     MATH101TraditionalPlanelement.classList.add("course");
      MATH101TraditionalPlanflag=false
  }
};
$scope.MATH102TraditionalPlanListener = function () {
  var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
 if (!MATH102TraditionalPlanflag) {
      that.addLine(getLine8());
      that.addLine(getLine12());
      that.addLine(getLine49());
     MATH102TraditionalPlanelement.classList.remove("course");
     MATH102TraditionalPlanelement.classList.add("course-highlighted");
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine12());
      that.removeLine(getLine49());
     MATH102TraditionalPlanelement.classList.remove("course-highlighted");
     MATH102TraditionalPlanelement.classList.add("course");
      MATH102TraditionalPlanflag=false
  }
};
$scope.CIVE270TraditionalPlanListener = function () {
  var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
 if (!CIVE270TraditionalPlanflag) {
      that.addLine(getLine9());
      that.addLine(getLine10());
      that.addLine(getLine24());
      that.addLine(getLine28());
      that.addLine(getLine41());
      that.addLine(getLine46());
     CIVE270TraditionalPlanelement.classList.remove("course");
     CIVE270TraditionalPlanelement.classList.add("course-highlighted");
      CIVE270TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine24());
      that.removeLine(getLine28());
      that.removeLine(getLine41());
      that.removeLine(getLine46());
     CIVE270TraditionalPlanelement.classList.remove("course-highlighted");
     CIVE270TraditionalPlanelement.classList.add("course");
      CIVE270TraditionalPlanflag=false
  }
};
$scope.MATH209TraditionalPlanListener = function () {
  var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
 if (!MATH209TraditionalPlanflag) {
      that.addLine(getLine11());
      that.addLine(getLine12());
      that.addLine(getLine20());
      that.addLine(getLine27());
      that.addLine(getLine35());
      that.addLine(getLine56());
     MATH209TraditionalPlanelement.classList.remove("course");
     MATH209TraditionalPlanelement.classList.add("course-highlighted");
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine12());
      that.removeLine(getLine20());
      that.removeLine(getLine27());
      that.removeLine(getLine35());
      that.removeLine(getLine56());
     MATH209TraditionalPlanelement.classList.remove("course-highlighted");
     MATH209TraditionalPlanelement.classList.add("course");
      MATH209TraditionalPlanflag=false
  }
};
$scope.STAT235TraditionalPlanListener = function () {
  var STAT235TraditionalPlanelement = document.getElementById("STAT235TraditionalPlan");
 if (!STAT235TraditionalPlanflag) {
      that.addLine(getLine13());
      that.addLine(getLine14());
      that.addLine(getLine30());
     STAT235TraditionalPlanelement.classList.remove("course");
     STAT235TraditionalPlanelement.classList.add("course-highlighted");
      STAT235TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      that.removeLine(getLine30());
     STAT235TraditionalPlanelement.classList.remove("course-highlighted");
     STAT235TraditionalPlanelement.classList.add("course");
      STAT235TraditionalPlanflag=false
  }
};
$scope.CHE243TraditionalPlanListener = function () {
  var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
 if (!CHE243TraditionalPlanflag) {
      that.addLine(getLine15());
      that.addLine(getLine36());
      that.addLine(getLine38());
      that.addLine(getLine42());
     CHE243TraditionalPlanelement.classList.remove("course");
     CHE243TraditionalPlanelement.classList.add("course-highlighted");
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine15());
      that.removeLine(getLine36());
      that.removeLine(getLine38());
      that.removeLine(getLine42());
     CHE243TraditionalPlanelement.classList.remove("course-highlighted");
     CHE243TraditionalPlanelement.classList.add("course");
      CHE243TraditionalPlanflag=false
  }
};
$scope.MECE200TraditionalPlanListener = function () {
  var MECE200TraditionalPlanelement = document.getElementById("MECE200TraditionalPlan");
 if (!MECE200TraditionalPlanflag) {
      that.addLine(getLine65());
     MECE200TraditionalPlanelement.classList.remove("course");
     MECE200TraditionalPlanelement.classList.add("course-highlighted");
      MECE200TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine65());
     MECE200TraditionalPlanelement.classList.remove("course-highlighted");
     MECE200TraditionalPlanelement.classList.add("course");
      MECE200TraditionalPlanflag=false
  }
};
$scope.MECE250TraditionalPlanListener = function () {
  var MECE250TraditionalPlanelement = document.getElementById("MECE250TraditionalPlan");
 if (!MECE250TraditionalPlanflag) {
      that.addLine(getLine16());
      that.addLine(getLine17());
      that.addLine(getLine18());
      that.addLine(getLine34());
      that.addLine(getLine48());
      that.addLine(getLine63());
     MECE250TraditionalPlanelement.classList.remove("course");
     MECE250TraditionalPlanelement.classList.add("course-highlighted");
      MECE250TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
      that.removeLine(getLine17());
      that.removeLine(getLine18());
      that.removeLine(getLine34());
      that.removeLine(getLine48());
      that.removeLine(getLine63());
     MECE250TraditionalPlanelement.classList.remove("course-highlighted");
     MECE250TraditionalPlanelement.classList.add("course");
      MECE250TraditionalPlanflag=false
  }
};
$scope.ECE209TraditionalPlanListener = function () {
  var ECE209TraditionalPlanelement = document.getElementById("ECE209TraditionalPlan");
 if (!ECE209TraditionalPlanflag) {
      that.addLine(getLine29());
     ECE209TraditionalPlanelement.classList.remove("course");
     ECE209TraditionalPlanelement.classList.add("course-highlighted");
      ECE209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
     ECE209TraditionalPlanelement.classList.remove("course-highlighted");
     ECE209TraditionalPlanelement.classList.add("course");
      ECE209TraditionalPlanflag=false
  }
};
$scope.MATE202TraditionalPlanListener = function () {
  var MATE202TraditionalPlanelement = document.getElementById("MATE202TraditionalPlan");
 if (!MATE202TraditionalPlanflag) {
      that.addLine(getLine19());
      that.addLine(getLine45());
     MATE202TraditionalPlanelement.classList.remove("course");
     MATE202TraditionalPlanelement.classList.add("course-highlighted");
      MATE202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
      that.removeLine(getLine45());
     MATE202TraditionalPlanelement.classList.remove("course-highlighted");
     MATE202TraditionalPlanelement.classList.add("course");
      MATE202TraditionalPlanflag=false
  }
};
$scope.MATH201TraditionalPlanListener = function () {
  var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
 if (!MATH201TraditionalPlanflag) {
      that.addLine(getLine20());
      that.addLine(getLine26());
      that.addLine(getLine50());
      that.addLine(getLine55());
     MATH201TraditionalPlanelement.classList.remove("course");
     MATH201TraditionalPlanelement.classList.add("course-highlighted");
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine26());
      that.removeLine(getLine50());
      that.removeLine(getLine55());
     MATH201TraditionalPlanelement.classList.remove("course-highlighted");
     MATH201TraditionalPlanelement.classList.add("course");
      MATH201TraditionalPlanflag=false
  }
};
$scope.MECE230TraditionalPlanListener = function () {
  var MECE230TraditionalPlanelement = document.getElementById("MECE230TraditionalPlan");
 if (!MECE230TraditionalPlanflag) {
      that.addLine(getLine21());
      that.addLine(getLine22());
      that.addLine(getLine33());
      that.addLine(getLine37());
     MECE230TraditionalPlanelement.classList.remove("course");
     MECE230TraditionalPlanelement.classList.add("course-highlighted");
      MECE230TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine22());
      that.removeLine(getLine33());
      that.removeLine(getLine37());
     MECE230TraditionalPlanelement.classList.remove("course-highlighted");
     MECE230TraditionalPlanelement.classList.add("course");
      MECE230TraditionalPlanflag=false
  }
};
$scope.MECE260TraditionalPlanListener = function () {
  var MECE260TraditionalPlanelement = document.getElementById("MECE260TraditionalPlan");
 if (!MECE260TraditionalPlanflag) {
      that.addLine(getLine23());
      that.addLine(getLine24());
      that.addLine(getLine25());
      that.addLine(getLine43());
     MECE260TraditionalPlanelement.classList.remove("course");
     MECE260TraditionalPlanelement.classList.add("course-highlighted");
      MECE260TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine23());
      that.removeLine(getLine24());
      that.removeLine(getLine25());
      that.removeLine(getLine43());
     MECE260TraditionalPlanelement.classList.remove("course-highlighted");
     MECE260TraditionalPlanelement.classList.add("course");
      MECE260TraditionalPlanflag=false
  }
};
$scope.MECE265TraditionalPlanListener = function () {
  var MECE265TraditionalPlanelement = document.getElementById("MECE265TraditionalPlan");
 if (!MECE265TraditionalPlanflag) {
      that.addLine(getLine25());
      that.addLine(getLine44());
     MECE265TraditionalPlanelement.classList.remove("course");
     MECE265TraditionalPlanelement.classList.add("course-highlighted");
      MECE265TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine25());
      that.removeLine(getLine44());
     MECE265TraditionalPlanelement.classList.remove("course-highlighted");
     MECE265TraditionalPlanelement.classList.add("course");
      MECE265TraditionalPlanflag=false
  }
};
$scope.MATH300TraditionalPlanListener = function () {
  var MATH300TraditionalPlanelement = document.getElementById("MATH300TraditionalPlan");
 if (!MATH300TraditionalPlanflag) {
      that.addLine(getLine26());
      that.addLine(getLine27());
      that.addLine(getLine39());
      that.addLine(getLine64());
     MATH300TraditionalPlanelement.classList.remove("course");
     MATH300TraditionalPlanelement.classList.add("course-highlighted");
      MATH300TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      that.removeLine(getLine27());
      that.removeLine(getLine39());
      that.removeLine(getLine64());
     MATH300TraditionalPlanelement.classList.remove("course-highlighted");
     MATH300TraditionalPlanelement.classList.add("course");
      MATH300TraditionalPlanflag=false
  }
};
$scope.MECE300TraditionalPlanListener = function () {
  var MECE300TraditionalPlanelement = document.getElementById("MECE300TraditionalPlan");
 if (!MECE300TraditionalPlanflag) {
      that.addLine(getLine28());
      that.addLine(getLine29());
      that.addLine(getLine30());
      that.addLine(getLine31());
      that.addLine(getLine32());
      that.addLine(getLine59());
     MECE300TraditionalPlanelement.classList.remove("course");
     MECE300TraditionalPlanelement.classList.add("course-highlighted");
      MECE300TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine29());
      that.removeLine(getLine30());
      that.removeLine(getLine31());
      that.removeLine(getLine32());
      that.removeLine(getLine59());
     MECE300TraditionalPlanelement.classList.remove("course-highlighted");
     MECE300TraditionalPlanelement.classList.add("course");
      MECE300TraditionalPlanflag=false
  }
};
$scope.MECE301TraditionalPlanListener = function () {
  var MECE301TraditionalPlanelement = document.getElementById("MECE301TraditionalPlan");
 if (!MECE301TraditionalPlanflag) {
      that.addLine(getLine32());
      that.addLine(getLine60());
     MECE301TraditionalPlanelement.classList.remove("course");
     MECE301TraditionalPlanelement.classList.add("course-highlighted");
      MECE301TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine32());
      that.removeLine(getLine60());
     MECE301TraditionalPlanelement.classList.remove("course-highlighted");
     MECE301TraditionalPlanelement.classList.add("course");
      MECE301TraditionalPlanflag=false
  }
};
$scope.MECE331TraditionalPlanListener = function () {
  var MECE331TraditionalPlanelement = document.getElementById("MECE331TraditionalPlan");
 if (!MECE331TraditionalPlanflag) {
      that.addLine(getLine31());
      that.addLine(getLine33());
      that.addLine(getLine34());
      that.addLine(getLine35());
      that.addLine(getLine36());
      that.addLine(getLine40());
      that.addLine(getLine51());
      that.addLine(getLine52());
      that.addLine(getLine57());
      that.addLine(getLine66());
     MECE331TraditionalPlanelement.classList.remove("course");
     MECE331TraditionalPlanelement.classList.add("course-highlighted");
      MECE331TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
      that.removeLine(getLine33());
      that.removeLine(getLine34());
      that.removeLine(getLine35());
      that.removeLine(getLine36());
      that.removeLine(getLine40());
      that.removeLine(getLine51());
      that.removeLine(getLine52());
      that.removeLine(getLine57());
      that.removeLine(getLine66());
     MECE331TraditionalPlanelement.classList.remove("course-highlighted");
     MECE331TraditionalPlanelement.classList.add("course");
      MECE331TraditionalPlanflag=false
  }
};
$scope.MECE371TraditionalPlanListener = function () {
  var MECE371TraditionalPlanelement = document.getElementById("MECE371TraditionalPlan");
 if (!MECE371TraditionalPlanflag) {
      that.addLine(getLine37());
      that.addLine(getLine38());
      that.addLine(getLine39());
      that.addLine(getLine40());
      that.addLine(getLine54());
      that.addLine(getLine58());
      that.addLine(getLine70());
     MECE371TraditionalPlanelement.classList.remove("course");
     MECE371TraditionalPlanelement.classList.add("course-highlighted");
      MECE371TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine38());
      that.removeLine(getLine39());
      that.removeLine(getLine40());
      that.removeLine(getLine54());
      that.removeLine(getLine58());
      that.removeLine(getLine70());
     MECE371TraditionalPlanelement.classList.remove("course-highlighted");
     MECE371TraditionalPlanelement.classList.add("course");
      MECE371TraditionalPlanflag=false
  }
};
$scope.MECE380TraditionalPlanListener = function () {
  var MECE380TraditionalPlanelement = document.getElementById("MECE380TraditionalPlan");
 if (!MECE380TraditionalPlanflag) {
      that.addLine(getLine41());
      that.addLine(getLine71());
     MECE380TraditionalPlanelement.classList.remove("course");
     MECE380TraditionalPlanelement.classList.add("course-highlighted");
      MECE380TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine71());
     MECE380TraditionalPlanelement.classList.remove("course-highlighted");
     MECE380TraditionalPlanelement.classList.add("course");
      MECE380TraditionalPlanflag=false
  }
};
$scope.ENGM310TraditionalPlanListener = function () {
  var ENGM310TraditionalPlanelement = document.getElementById("ENGM310TraditionalPlan");
 if (!ENGM310TraditionalPlanflag) {
      that.addLine(getLine72());
     ENGM310TraditionalPlanelement.classList.remove("course");
     ENGM310TraditionalPlanelement.classList.add("course-highlighted");
      ENGM310TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine72());
     ENGM310TraditionalPlanelement.classList.remove("course-highlighted");
     ENGM310TraditionalPlanelement.classList.add("course");
      ENGM310TraditionalPlanflag=false
  }
};
$scope.MECE340TraditionalPlanListener = function () {
  var MECE340TraditionalPlanelement = document.getElementById("MECE340TraditionalPlan");
 if (!MECE340TraditionalPlanflag) {
      that.addLine(getLine42());
      that.addLine(getLine53());
      that.addLine(getLine61());
      that.addLine(getLine67());
     MECE340TraditionalPlanelement.classList.remove("course");
     MECE340TraditionalPlanelement.classList.add("course-highlighted");
      MECE340TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine42());
      that.removeLine(getLine53());
      that.removeLine(getLine61());
      that.removeLine(getLine67());
     MECE340TraditionalPlanelement.classList.remove("course-highlighted");
     MECE340TraditionalPlanelement.classList.add("course");
      MECE340TraditionalPlanflag=false
  }
};
$scope.MECE360TraditionalPlanListener = function () {
  var MECE360TraditionalPlanelement = document.getElementById("MECE360TraditionalPlan");
 if (!MECE360TraditionalPlanflag) {
      that.addLine(getLine43());
      that.addLine(getLine44());
      that.addLine(getLine45());
      that.addLine(getLine46());
      that.addLine(getLine47());
      that.addLine(getLine62());
      that.addLine(getLine68());
     MECE360TraditionalPlanelement.classList.remove("course");
     MECE360TraditionalPlanelement.classList.add("course-highlighted");
      MECE360TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine43());
      that.removeLine(getLine44());
      that.removeLine(getLine45());
      that.removeLine(getLine46());
      that.removeLine(getLine47());
      that.removeLine(getLine62());
      that.removeLine(getLine68());
     MECE360TraditionalPlanelement.classList.remove("course-highlighted");
     MECE360TraditionalPlanelement.classList.add("course");
      MECE360TraditionalPlanflag=false
  }
};
$scope.MECE362TraditionalPlanListener = function () {
  var MECE362TraditionalPlanelement = document.getElementById("MECE362TraditionalPlan");
 if (!MECE362TraditionalPlanflag) {
      that.addLine(getLine47());
      that.addLine(getLine48());
      that.addLine(getLine69());
     MECE362TraditionalPlanelement.classList.remove("course");
     MECE362TraditionalPlanelement.classList.add("course-highlighted");
      MECE362TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine47());
      that.removeLine(getLine48());
      that.removeLine(getLine69());
     MECE362TraditionalPlanelement.classList.remove("course-highlighted");
     MECE362TraditionalPlanelement.classList.add("course");
      MECE362TraditionalPlanflag=false
  }
};
$scope.MECE390TraditionalPlanListener = function () {
  var MECE390TraditionalPlanelement = document.getElementById("MECE390TraditionalPlan");
 if (!MECE390TraditionalPlanflag) {
      that.addLine(getLine49());
      that.addLine(getLine50());
     MECE390TraditionalPlanelement.classList.remove("course");
     MECE390TraditionalPlanelement.classList.add("course-highlighted");
      MECE390TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine49());
      that.removeLine(getLine50());
     MECE390TraditionalPlanelement.classList.remove("course-highlighted");
     MECE390TraditionalPlanelement.classList.add("course");
      MECE390TraditionalPlanflag=false
  }
};
$scope.MECE430TraditionalPlanListener = function () {
  var MECE430TraditionalPlanelement = document.getElementById("MECE430TraditionalPlan");
 if (!MECE430TraditionalPlanflag) {
      that.addLine(getLine51());
     MECE430TraditionalPlanelement.classList.remove("course");
     MECE430TraditionalPlanelement.classList.add("course-highlighted");
      MECE430TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine51());
     MECE430TraditionalPlanelement.classList.remove("course-highlighted");
     MECE430TraditionalPlanelement.classList.add("course");
      MECE430TraditionalPlanflag=false
  }
};
$scope.MECE463TraditionalPlanListener = function () {
  var MECE463TraditionalPlanelement = document.getElementById("MECE463TraditionalPlan");
 if (!MECE463TraditionalPlanflag) {
      that.addLine(getLine52());
      that.addLine(getLine53());
      that.addLine(getLine54());
     MECE463TraditionalPlanelement.classList.remove("course");
     MECE463TraditionalPlanelement.classList.add("course-highlighted");
      MECE463TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine52());
      that.removeLine(getLine53());
      that.removeLine(getLine54());
     MECE463TraditionalPlanelement.classList.remove("course-highlighted");
     MECE463TraditionalPlanelement.classList.add("course");
      MECE463TraditionalPlanflag=false
  }
};
$scope.CHE448TraditionalPlanListener = function () {
  var CHE448TraditionalPlanelement = document.getElementById("CHE448TraditionalPlan");
 if (!CHE448TraditionalPlanflag) {
      that.addLine(getLine55());
      that.addLine(getLine56());
      that.addLine(getLine57());
      that.addLine(getLine58());
     CHE448TraditionalPlanelement.classList.remove("course");
     CHE448TraditionalPlanelement.classList.add("course-highlighted");
      CHE448TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine56());
      that.removeLine(getLine57());
      that.removeLine(getLine58());
     CHE448TraditionalPlanelement.classList.remove("course-highlighted");
     CHE448TraditionalPlanelement.classList.add("course");
      CHE448TraditionalPlanflag=false
  }
};
$scope.MECE403TraditionalPlanListener = function () {
  var MECE403TraditionalPlanelement = document.getElementById("MECE403TraditionalPlan");
 if (!MECE403TraditionalPlanflag) {
      that.addLine(getLine59());
      that.addLine(getLine60());
      that.addLine(getLine61());
      that.addLine(getLine62());
     MECE403TraditionalPlanelement.classList.remove("course");
     MECE403TraditionalPlanelement.classList.add("course-highlighted");
      MECE403TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine59());
      that.removeLine(getLine60());
      that.removeLine(getLine61());
      that.removeLine(getLine62());
     MECE403TraditionalPlanelement.classList.remove("course-highlighted");
     MECE403TraditionalPlanelement.classList.add("course");
      MECE403TraditionalPlanflag=false
  }
};
$scope.MECE451TraditionalPlanListener = function () {
  var MECE451TraditionalPlanelement = document.getElementById("MECE451TraditionalPlan");
 if (!MECE451TraditionalPlanflag) {
      that.addLine(getLine63());
      that.addLine(getLine64());
     MECE451TraditionalPlanelement.classList.remove("course");
     MECE451TraditionalPlanelement.classList.add("course-highlighted");
      MECE451TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine63());
      that.removeLine(getLine64());
     MECE451TraditionalPlanelement.classList.remove("course-highlighted");
     MECE451TraditionalPlanelement.classList.add("course");
      MECE451TraditionalPlanflag=false
  }
};
$scope.MECE460TraditionalPlanListener = function () {
  var MECE460TraditionalPlanelement = document.getElementById("MECE460TraditionalPlan");
 if (!MECE460TraditionalPlanflag) {
      that.addLine(getLine65());
      that.addLine(getLine66());
      that.addLine(getLine67());
      that.addLine(getLine68());
      that.addLine(getLine69());
      that.addLine(getLine70());
      that.addLine(getLine71());
      that.addLine(getLine72());
     MECE460TraditionalPlanelement.classList.remove("course");
     MECE460TraditionalPlanelement.classList.add("course-highlighted");
      MECE460TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine65());
      that.removeLine(getLine66());
      that.removeLine(getLine67());
      that.removeLine(getLine68());
      that.removeLine(getLine69());
      that.removeLine(getLine70());
      that.removeLine(getLine71());
      that.removeLine(getLine72());
     MECE460TraditionalPlanelement.classList.remove("course-highlighted");
     MECE460TraditionalPlanelement.classList.add("course");
      MECE460TraditionalPlanflag=false
  }
};
  var CHEM103AlternatePlanflag = false;
  var ENGG100AlternatePlanflag = false;
  var ENGG130AlternatePlanflag = false;
  var ENGL199AlternatePlanflag = false;
  var MATH100AlternatePlanflag = false;
  var PHYS130AlternatePlanflag = false;
  var CHEM105AlternatePlanflag = false;
  var ENCMP100AlternatePlanflag = false;
  var ENGG160AlternatePlanflag = false;
  var ENPH131AlternatePlanflag = false;
  var MATH101AlternatePlanflag = false;
  var MATH102AlternatePlanflag = false;
  var ENGM310AlternatePlanflag = false;
  var ENGG404AlternatePlanflag = false;
  var MATH201AlternatePlanflag = false;
  var MATH209AlternatePlanflag = false;
  var ComplementaryElectiveAlternatePlanflag = false;
  var ITSElectiveAlternatePlanflag = false;
  var CIVE270AlternatePlanflag = false;
  var MECE230AlternatePlanflag = false;
  var MECE260AlternatePlanflag = false;
  var MECE265AlternatePlanflag = false;
  var STAT235AlternatePlanflag = false;
  var CHE243AlternatePlanflag = false;
  var ECE209AlternatePlanflag = false;
  var MATE202AlternatePlanflag = false;
  var MECE200AlternatePlanflag = false;
  var MECE250AlternatePlanflag = false;
  var MATH300AlternatePlanflag = false;
  var MECE300AlternatePlanflag = false;
  var MECE301AlternatePlanflag = false;
  var MECE331AlternatePlanflag = false;
  var MECE371AlternatePlanflag = false;
  var MECE380AlternatePlanflag = false;
  var MECE340AlternatePlanflag = false;
  var MECE360AlternatePlanflag = false;
  var MECE362AlternatePlanflag = false;
  var MECE390AlternatePlanflag = false;
  var ProgramTechnicalElectiveAlternatePlanflag = false;
  var MECE430AlternatePlanflag = false;
  var MECE463AlternatePlanflag = false;
  var ProgramTechnicalElectiveAlternatePlanflag = false;
  var ProgramTechnicalElectiveAlternatePlanflag = false;
  var ProgramTechnicalElectiveAlternatePlanflag = false;
  var CHE448AlternatePlanflag = false;
  var ENGG400AlternatePlanflag = false;
  var MECE403AlternatePlanflag = false;
  var MECE451AlternatePlanflag = false;
  var MECE460AlternatePlanflag = false;
$scope.CHEM103AlternatePlanListener = function () {
  var CHEM103AlternatePlanelement = document.getElementById("CHEM103AlternatePlan");
 if (!CHEM103AlternatePlanflag) {
      that.addLine(getLine75());
     CHEM103AlternatePlanelement.classList.remove("course");
     CHEM103AlternatePlanelement.classList.add("course-highlighted");
      CHEM103AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine75());
     CHEM103AlternatePlanelement.classList.remove("course-highlighted");
     CHEM103AlternatePlanelement.classList.add("course");
      CHEM103AlternatePlanflag=false
  }
};
$scope.ENGG130AlternatePlanListener = function () {
  var ENGG130AlternatePlanelement = document.getElementById("ENGG130AlternatePlan");
 if (!ENGG130AlternatePlanflag) {
      that.addLine(getLine73());
      that.addLine(getLine78());
      that.addLine(getLine85());
      that.addLine(getLine96());
     ENGG130AlternatePlanelement.classList.remove("course");
     ENGG130AlternatePlanelement.classList.add("course-highlighted");
      ENGG130AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine73());
      that.removeLine(getLine78());
      that.removeLine(getLine85());
      that.removeLine(getLine96());
     ENGG130AlternatePlanelement.classList.remove("course-highlighted");
     ENGG130AlternatePlanelement.classList.add("course");
      ENGG130AlternatePlanflag=false
  }
};
$scope.ENGL199AlternatePlanListener = function () {
  var ENGL199AlternatePlanelement = document.getElementById("ENGL199AlternatePlan");
 if (!ENGL199AlternatePlanflag) {
      that.addLine(getLine76());
     ENGL199AlternatePlanelement.classList.remove("course");
     ENGL199AlternatePlanelement.classList.add("course-highlighted");
      ENGL199AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine76());
     ENGL199AlternatePlanelement.classList.remove("course-highlighted");
     ENGL199AlternatePlanelement.classList.add("course");
      ENGL199AlternatePlanflag=false
  }
};
$scope.MATH100AlternatePlanListener = function () {
  var MATH100AlternatePlanelement = document.getElementById("MATH100AlternatePlan");
 if (!MATH100AlternatePlanflag) {
      that.addLine(getLine73());
      that.addLine(getLine74());
      that.addLine(getLine77());
      that.addLine(getLine80());
      that.addLine(getLine81());
      that.addLine(getLine92());
     MATH100AlternatePlanelement.classList.remove("course");
     MATH100AlternatePlanelement.classList.add("course-highlighted");
      MATH100AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine73());
      that.removeLine(getLine74());
      that.removeLine(getLine77());
      that.removeLine(getLine80());
      that.removeLine(getLine81());
      that.removeLine(getLine92());
     MATH100AlternatePlanelement.classList.remove("course-highlighted");
     MATH100AlternatePlanelement.classList.add("course");
      MATH100AlternatePlanflag=false
  }
};
$scope.PHYS130AlternatePlanListener = function () {
  var PHYS130AlternatePlanelement = document.getElementById("PHYS130AlternatePlan");
 if (!PHYS130AlternatePlanflag) {
      that.addLine(getLine74());
     PHYS130AlternatePlanelement.classList.remove("course");
     PHYS130AlternatePlanelement.classList.add("course-highlighted");
      PHYS130AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine74());
     PHYS130AlternatePlanelement.classList.remove("course-highlighted");
     PHYS130AlternatePlanelement.classList.add("course");
      PHYS130AlternatePlanflag=false
  }
};
$scope.CHEM105AlternatePlanListener = function () {
  var CHEM105AlternatePlanelement = document.getElementById("CHEM105AlternatePlan");
 if (!CHEM105AlternatePlanflag) {
      that.addLine(getLine75());
      that.addLine(getLine95());
     CHEM105AlternatePlanelement.classList.remove("course");
     CHEM105AlternatePlanelement.classList.add("course-highlighted");
      CHEM105AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine75());
      that.removeLine(getLine95());
     CHEM105AlternatePlanelement.classList.remove("course-highlighted");
     CHEM105AlternatePlanelement.classList.add("course");
      CHEM105AlternatePlanflag=false
  }
};
$scope.ENGG160AlternatePlanListener = function () {
  var ENGG160AlternatePlanelement = document.getElementById("ENGG160AlternatePlan");
 if (!ENGG160AlternatePlanflag) {
      that.addLine(getLine76());
      that.addLine(getLine89());
     ENGG160AlternatePlanelement.classList.remove("course");
     ENGG160AlternatePlanelement.classList.add("course-highlighted");
      ENGG160AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine76());
      that.removeLine(getLine89());
     ENGG160AlternatePlanelement.classList.remove("course-highlighted");
     ENGG160AlternatePlanelement.classList.add("course");
      ENGG160AlternatePlanflag=false
  }
};
$scope.ENPH131AlternatePlanListener = function () {
  var ENPH131AlternatePlanelement = document.getElementById("ENPH131AlternatePlan");
 if (!ENPH131AlternatePlanflag) {
      that.addLine(getLine77());
      that.addLine(getLine78());
      that.addLine(getLine79());
      that.addLine(getLine88());
      that.addLine(getLine97());
     ENPH131AlternatePlanelement.classList.remove("course");
     ENPH131AlternatePlanelement.classList.add("course-highlighted");
      ENPH131AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine77());
      that.removeLine(getLine78());
      that.removeLine(getLine79());
      that.removeLine(getLine88());
      that.removeLine(getLine97());
     ENPH131AlternatePlanelement.classList.remove("course-highlighted");
     ENPH131AlternatePlanelement.classList.add("course");
      ENPH131AlternatePlanflag=false
  }
};
$scope.MATH101AlternatePlanListener = function () {
  var MATH101AlternatePlanelement = document.getElementById("MATH101AlternatePlan");
 if (!MATH101AlternatePlanflag) {
      that.addLine(getLine79());
      that.addLine(getLine80());
      that.addLine(getLine83());
      that.addLine(getLine86());
      that.addLine(getLine87());
      that.addLine(getLine93());
      that.addLine(getLine94());
      that.addLine(getLine98());
     MATH101AlternatePlanelement.classList.remove("course");
     MATH101AlternatePlanelement.classList.add("course-highlighted");
      MATH101AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine79());
      that.removeLine(getLine80());
      that.removeLine(getLine83());
      that.removeLine(getLine86());
      that.removeLine(getLine87());
      that.removeLine(getLine93());
      that.removeLine(getLine94());
      that.removeLine(getLine98());
     MATH101AlternatePlanelement.classList.remove("course-highlighted");
     MATH101AlternatePlanelement.classList.add("course");
      MATH101AlternatePlanflag=false
  }
};
$scope.MATH102AlternatePlanListener = function () {
  var MATH102AlternatePlanelement = document.getElementById("MATH102AlternatePlan");
 if (!MATH102AlternatePlanflag) {
      that.addLine(getLine81());
      that.addLine(getLine84());
      that.addLine(getLine122());
     MATH102AlternatePlanelement.classList.remove("course");
     MATH102AlternatePlanelement.classList.add("course-highlighted");
      MATH102AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine81());
      that.removeLine(getLine84());
      that.removeLine(getLine122());
     MATH102AlternatePlanelement.classList.remove("course-highlighted");
     MATH102AlternatePlanelement.classList.add("course");
      MATH102AlternatePlanflag=false
  }
};
$scope.ENGM310AlternatePlanListener = function () {
  var ENGM310AlternatePlanelement = document.getElementById("ENGM310AlternatePlan");
 if (!ENGM310AlternatePlanflag) {
      that.addLine(getLine145());
     ENGM310AlternatePlanelement.classList.remove("course");
     ENGM310AlternatePlanelement.classList.add("course-highlighted");
      ENGM310AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine145());
     ENGM310AlternatePlanelement.classList.remove("course-highlighted");
     ENGM310AlternatePlanelement.classList.add("course");
      ENGM310AlternatePlanflag=false
  }
};
$scope.MATH201AlternatePlanListener = function () {
  var MATH201AlternatePlanelement = document.getElementById("MATH201AlternatePlan");
 if (!MATH201AlternatePlanflag) {
      that.addLine(getLine82());
      that.addLine(getLine99());
      that.addLine(getLine123());
      that.addLine(getLine128());
     MATH201AlternatePlanelement.classList.remove("course");
     MATH201AlternatePlanelement.classList.add("course-highlighted");
      MATH201AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine82());
      that.removeLine(getLine99());
      that.removeLine(getLine123());
      that.removeLine(getLine128());
     MATH201AlternatePlanelement.classList.remove("course-highlighted");
     MATH201AlternatePlanelement.classList.add("course");
      MATH201AlternatePlanflag=false
  }
};
$scope.MATH209AlternatePlanListener = function () {
  var MATH209AlternatePlanelement = document.getElementById("MATH209AlternatePlan");
 if (!MATH209AlternatePlanflag) {
      that.addLine(getLine82());
      that.addLine(getLine83());
      that.addLine(getLine84());
      that.addLine(getLine100());
      that.addLine(getLine108());
      that.addLine(getLine129());
     MATH209AlternatePlanelement.classList.remove("course");
     MATH209AlternatePlanelement.classList.add("course-highlighted");
      MATH209AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine82());
      that.removeLine(getLine83());
      that.removeLine(getLine84());
      that.removeLine(getLine100());
      that.removeLine(getLine108());
      that.removeLine(getLine129());
     MATH209AlternatePlanelement.classList.remove("course-highlighted");
     MATH209AlternatePlanelement.classList.add("course");
      MATH209AlternatePlanflag=false
  }
};
$scope.CIVE270AlternatePlanListener = function () {
  var CIVE270AlternatePlanelement = document.getElementById("CIVE270AlternatePlan");
 if (!CIVE270AlternatePlanflag) {
      that.addLine(getLine85());
      that.addLine(getLine86());
      that.addLine(getLine91());
      that.addLine(getLine101());
      that.addLine(getLine114());
      that.addLine(getLine119());
     CIVE270AlternatePlanelement.classList.remove("course");
     CIVE270AlternatePlanelement.classList.add("course-highlighted");
      CIVE270AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine85());
      that.removeLine(getLine86());
      that.removeLine(getLine91());
      that.removeLine(getLine101());
      that.removeLine(getLine114());
      that.removeLine(getLine119());
     CIVE270AlternatePlanelement.classList.remove("course-highlighted");
     CIVE270AlternatePlanelement.classList.add("course");
      CIVE270AlternatePlanflag=false
  }
};
$scope.MECE230AlternatePlanListener = function () {
  var MECE230AlternatePlanelement = document.getElementById("MECE230AlternatePlan");
 if (!MECE230AlternatePlanflag) {
      that.addLine(getLine87());
      that.addLine(getLine88());
      that.addLine(getLine106());
      that.addLine(getLine110());
     MECE230AlternatePlanelement.classList.remove("course");
     MECE230AlternatePlanelement.classList.add("course-highlighted");
      MECE230AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine87());
      that.removeLine(getLine88());
      that.removeLine(getLine106());
      that.removeLine(getLine110());
     MECE230AlternatePlanelement.classList.remove("course-highlighted");
     MECE230AlternatePlanelement.classList.add("course");
      MECE230AlternatePlanflag=false
  }
};
$scope.MECE260AlternatePlanListener = function () {
  var MECE260AlternatePlanelement = document.getElementById("MECE260AlternatePlan");
 if (!MECE260AlternatePlanflag) {
      that.addLine(getLine89());
      that.addLine(getLine90());
      that.addLine(getLine91());
      that.addLine(getLine116());
     MECE260AlternatePlanelement.classList.remove("course");
     MECE260AlternatePlanelement.classList.add("course-highlighted");
      MECE260AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine89());
      that.removeLine(getLine90());
      that.removeLine(getLine91());
      that.removeLine(getLine116());
     MECE260AlternatePlanelement.classList.remove("course-highlighted");
     MECE260AlternatePlanelement.classList.add("course");
      MECE260AlternatePlanflag=false
  }
};
$scope.MECE265AlternatePlanListener = function () {
  var MECE265AlternatePlanelement = document.getElementById("MECE265AlternatePlan");
 if (!MECE265AlternatePlanflag) {
      that.addLine(getLine90());
      that.addLine(getLine117());
     MECE265AlternatePlanelement.classList.remove("course");
     MECE265AlternatePlanelement.classList.add("course-highlighted");
      MECE265AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine90());
      that.removeLine(getLine117());
     MECE265AlternatePlanelement.classList.remove("course-highlighted");
     MECE265AlternatePlanelement.classList.add("course");
      MECE265AlternatePlanflag=false
  }
};
$scope.STAT235AlternatePlanListener = function () {
  var STAT235AlternatePlanelement = document.getElementById("STAT235AlternatePlan");
 if (!STAT235AlternatePlanflag) {
      that.addLine(getLine92());
      that.addLine(getLine93());
      that.addLine(getLine103());
     STAT235AlternatePlanelement.classList.remove("course");
     STAT235AlternatePlanelement.classList.add("course-highlighted");
      STAT235AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine92());
      that.removeLine(getLine93());
      that.removeLine(getLine103());
     STAT235AlternatePlanelement.classList.remove("course-highlighted");
     STAT235AlternatePlanelement.classList.add("course");
      STAT235AlternatePlanflag=false
  }
};
$scope.CHE243AlternatePlanListener = function () {
  var CHE243AlternatePlanelement = document.getElementById("CHE243AlternatePlan");
 if (!CHE243AlternatePlanflag) {
      that.addLine(getLine94());
      that.addLine(getLine109());
      that.addLine(getLine111());
      that.addLine(getLine115());
     CHE243AlternatePlanelement.classList.remove("course");
     CHE243AlternatePlanelement.classList.add("course-highlighted");
      CHE243AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine94());
      that.removeLine(getLine109());
      that.removeLine(getLine111());
      that.removeLine(getLine115());
     CHE243AlternatePlanelement.classList.remove("course-highlighted");
     CHE243AlternatePlanelement.classList.add("course");
      CHE243AlternatePlanflag=false
  }
};
$scope.ECE209AlternatePlanListener = function () {
  var ECE209AlternatePlanelement = document.getElementById("ECE209AlternatePlan");
 if (!ECE209AlternatePlanflag) {
      that.addLine(getLine102());
     ECE209AlternatePlanelement.classList.remove("course");
     ECE209AlternatePlanelement.classList.add("course-highlighted");
      ECE209AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine102());
     ECE209AlternatePlanelement.classList.remove("course-highlighted");
     ECE209AlternatePlanelement.classList.add("course");
      ECE209AlternatePlanflag=false
  }
};
$scope.MATE202AlternatePlanListener = function () {
  var MATE202AlternatePlanelement = document.getElementById("MATE202AlternatePlan");
 if (!MATE202AlternatePlanflag) {
      that.addLine(getLine95());
      that.addLine(getLine118());
     MATE202AlternatePlanelement.classList.remove("course");
     MATE202AlternatePlanelement.classList.add("course-highlighted");
      MATE202AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine95());
      that.removeLine(getLine118());
     MATE202AlternatePlanelement.classList.remove("course-highlighted");
     MATE202AlternatePlanelement.classList.add("course");
      MATE202AlternatePlanflag=false
  }
};
$scope.MECE200AlternatePlanListener = function () {
  var MECE200AlternatePlanelement = document.getElementById("MECE200AlternatePlan");
 if (!MECE200AlternatePlanflag) {
      that.addLine(getLine138());
     MECE200AlternatePlanelement.classList.remove("course");
     MECE200AlternatePlanelement.classList.add("course-highlighted");
      MECE200AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine138());
     MECE200AlternatePlanelement.classList.remove("course-highlighted");
     MECE200AlternatePlanelement.classList.add("course");
      MECE200AlternatePlanflag=false
  }
};
$scope.MECE250AlternatePlanListener = function () {
  var MECE250AlternatePlanelement = document.getElementById("MECE250AlternatePlan");
 if (!MECE250AlternatePlanflag) {
      that.addLine(getLine96());
      that.addLine(getLine97());
      that.addLine(getLine98());
      that.addLine(getLine107());
      that.addLine(getLine121());
      that.addLine(getLine136());
     MECE250AlternatePlanelement.classList.remove("course");
     MECE250AlternatePlanelement.classList.add("course-highlighted");
      MECE250AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine96());
      that.removeLine(getLine97());
      that.removeLine(getLine98());
      that.removeLine(getLine107());
      that.removeLine(getLine121());
      that.removeLine(getLine136());
     MECE250AlternatePlanelement.classList.remove("course-highlighted");
     MECE250AlternatePlanelement.classList.add("course");
      MECE250AlternatePlanflag=false
  }
};
$scope.MATH300AlternatePlanListener = function () {
  var MATH300AlternatePlanelement = document.getElementById("MATH300AlternatePlan");
 if (!MATH300AlternatePlanflag) {
      that.addLine(getLine99());
      that.addLine(getLine100());
      that.addLine(getLine112());
      that.addLine(getLine137());
     MATH300AlternatePlanelement.classList.remove("course");
     MATH300AlternatePlanelement.classList.add("course-highlighted");
      MATH300AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine99());
      that.removeLine(getLine100());
      that.removeLine(getLine112());
      that.removeLine(getLine137());
     MATH300AlternatePlanelement.classList.remove("course-highlighted");
     MATH300AlternatePlanelement.classList.add("course");
      MATH300AlternatePlanflag=false
  }
};
$scope.MECE300AlternatePlanListener = function () {
  var MECE300AlternatePlanelement = document.getElementById("MECE300AlternatePlan");
 if (!MECE300AlternatePlanflag) {
      that.addLine(getLine101());
      that.addLine(getLine102());
      that.addLine(getLine103());
      that.addLine(getLine104());
      that.addLine(getLine105());
      that.addLine(getLine132());
     MECE300AlternatePlanelement.classList.remove("course");
     MECE300AlternatePlanelement.classList.add("course-highlighted");
      MECE300AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine101());
      that.removeLine(getLine102());
      that.removeLine(getLine103());
      that.removeLine(getLine104());
      that.removeLine(getLine105());
      that.removeLine(getLine132());
     MECE300AlternatePlanelement.classList.remove("course-highlighted");
     MECE300AlternatePlanelement.classList.add("course");
      MECE300AlternatePlanflag=false
  }
};
$scope.MECE301AlternatePlanListener = function () {
  var MECE301AlternatePlanelement = document.getElementById("MECE301AlternatePlan");
 if (!MECE301AlternatePlanflag) {
      that.addLine(getLine105());
      that.addLine(getLine133());
     MECE301AlternatePlanelement.classList.remove("course");
     MECE301AlternatePlanelement.classList.add("course-highlighted");
      MECE301AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine105());
      that.removeLine(getLine133());
     MECE301AlternatePlanelement.classList.remove("course-highlighted");
     MECE301AlternatePlanelement.classList.add("course");
      MECE301AlternatePlanflag=false
  }
};
$scope.MECE331AlternatePlanListener = function () {
  var MECE331AlternatePlanelement = document.getElementById("MECE331AlternatePlan");
 if (!MECE331AlternatePlanflag) {
      that.addLine(getLine104());
      that.addLine(getLine106());
      that.addLine(getLine107());
      that.addLine(getLine108());
      that.addLine(getLine109());
      that.addLine(getLine113());
      that.addLine(getLine124());
      that.addLine(getLine125());
      that.addLine(getLine130());
      that.addLine(getLine139());
     MECE331AlternatePlanelement.classList.remove("course");
     MECE331AlternatePlanelement.classList.add("course-highlighted");
      MECE331AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine104());
      that.removeLine(getLine106());
      that.removeLine(getLine107());
      that.removeLine(getLine108());
      that.removeLine(getLine109());
      that.removeLine(getLine113());
      that.removeLine(getLine124());
      that.removeLine(getLine125());
      that.removeLine(getLine130());
      that.removeLine(getLine139());
     MECE331AlternatePlanelement.classList.remove("course-highlighted");
     MECE331AlternatePlanelement.classList.add("course");
      MECE331AlternatePlanflag=false
  }
};
$scope.MECE371AlternatePlanListener = function () {
  var MECE371AlternatePlanelement = document.getElementById("MECE371AlternatePlan");
 if (!MECE371AlternatePlanflag) {
      that.addLine(getLine110());
      that.addLine(getLine111());
      that.addLine(getLine112());
      that.addLine(getLine113());
      that.addLine(getLine127());
      that.addLine(getLine131());
      that.addLine(getLine143());
     MECE371AlternatePlanelement.classList.remove("course");
     MECE371AlternatePlanelement.classList.add("course-highlighted");
      MECE371AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine110());
      that.removeLine(getLine111());
      that.removeLine(getLine112());
      that.removeLine(getLine113());
      that.removeLine(getLine127());
      that.removeLine(getLine131());
      that.removeLine(getLine143());
     MECE371AlternatePlanelement.classList.remove("course-highlighted");
     MECE371AlternatePlanelement.classList.add("course");
      MECE371AlternatePlanflag=false
  }
};
$scope.MECE380AlternatePlanListener = function () {
  var MECE380AlternatePlanelement = document.getElementById("MECE380AlternatePlan");
 if (!MECE380AlternatePlanflag) {
      that.addLine(getLine114());
      that.addLine(getLine144());
     MECE380AlternatePlanelement.classList.remove("course");
     MECE380AlternatePlanelement.classList.add("course-highlighted");
      MECE380AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine114());
      that.removeLine(getLine144());
     MECE380AlternatePlanelement.classList.remove("course-highlighted");
     MECE380AlternatePlanelement.classList.add("course");
      MECE380AlternatePlanflag=false
  }
};
$scope.MECE340AlternatePlanListener = function () {
  var MECE340AlternatePlanelement = document.getElementById("MECE340AlternatePlan");
 if (!MECE340AlternatePlanflag) {
      that.addLine(getLine115());
      that.addLine(getLine126());
      that.addLine(getLine134());
      that.addLine(getLine140());
     MECE340AlternatePlanelement.classList.remove("course");
     MECE340AlternatePlanelement.classList.add("course-highlighted");
      MECE340AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine115());
      that.removeLine(getLine126());
      that.removeLine(getLine134());
      that.removeLine(getLine140());
     MECE340AlternatePlanelement.classList.remove("course-highlighted");
     MECE340AlternatePlanelement.classList.add("course");
      MECE340AlternatePlanflag=false
  }
};
$scope.MECE360AlternatePlanListener = function () {
  var MECE360AlternatePlanelement = document.getElementById("MECE360AlternatePlan");
 if (!MECE360AlternatePlanflag) {
      that.addLine(getLine116());
      that.addLine(getLine117());
      that.addLine(getLine118());
      that.addLine(getLine119());
      that.addLine(getLine120());
      that.addLine(getLine135());
      that.addLine(getLine141());
     MECE360AlternatePlanelement.classList.remove("course");
     MECE360AlternatePlanelement.classList.add("course-highlighted");
      MECE360AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine116());
      that.removeLine(getLine117());
      that.removeLine(getLine118());
      that.removeLine(getLine119());
      that.removeLine(getLine120());
      that.removeLine(getLine135());
      that.removeLine(getLine141());
     MECE360AlternatePlanelement.classList.remove("course-highlighted");
     MECE360AlternatePlanelement.classList.add("course");
      MECE360AlternatePlanflag=false
  }
};
$scope.MECE362AlternatePlanListener = function () {
  var MECE362AlternatePlanelement = document.getElementById("MECE362AlternatePlan");
 if (!MECE362AlternatePlanflag) {
      that.addLine(getLine120());
      that.addLine(getLine121());
      that.addLine(getLine142());
     MECE362AlternatePlanelement.classList.remove("course");
     MECE362AlternatePlanelement.classList.add("course-highlighted");
      MECE362AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine120());
      that.removeLine(getLine121());
      that.removeLine(getLine142());
     MECE362AlternatePlanelement.classList.remove("course-highlighted");
     MECE362AlternatePlanelement.classList.add("course");
      MECE362AlternatePlanflag=false
  }
};
$scope.MECE390AlternatePlanListener = function () {
  var MECE390AlternatePlanelement = document.getElementById("MECE390AlternatePlan");
 if (!MECE390AlternatePlanflag) {
      that.addLine(getLine122());
      that.addLine(getLine123());
     MECE390AlternatePlanelement.classList.remove("course");
     MECE390AlternatePlanelement.classList.add("course-highlighted");
      MECE390AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine122());
      that.removeLine(getLine123());
     MECE390AlternatePlanelement.classList.remove("course-highlighted");
     MECE390AlternatePlanelement.classList.add("course");
      MECE390AlternatePlanflag=false
  }
};
$scope.MECE430AlternatePlanListener = function () {
  var MECE430AlternatePlanelement = document.getElementById("MECE430AlternatePlan");
 if (!MECE430AlternatePlanflag) {
      that.addLine(getLine124());
     MECE430AlternatePlanelement.classList.remove("course");
     MECE430AlternatePlanelement.classList.add("course-highlighted");
      MECE430AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine124());
     MECE430AlternatePlanelement.classList.remove("course-highlighted");
     MECE430AlternatePlanelement.classList.add("course");
      MECE430AlternatePlanflag=false
  }
};
$scope.MECE463AlternatePlanListener = function () {
  var MECE463AlternatePlanelement = document.getElementById("MECE463AlternatePlan");
 if (!MECE463AlternatePlanflag) {
      that.addLine(getLine125());
      that.addLine(getLine126());
      that.addLine(getLine127());
     MECE463AlternatePlanelement.classList.remove("course");
     MECE463AlternatePlanelement.classList.add("course-highlighted");
      MECE463AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine125());
      that.removeLine(getLine126());
      that.removeLine(getLine127());
     MECE463AlternatePlanelement.classList.remove("course-highlighted");
     MECE463AlternatePlanelement.classList.add("course");
      MECE463AlternatePlanflag=false
  }
};
$scope.CHE448AlternatePlanListener = function () {
  var CHE448AlternatePlanelement = document.getElementById("CHE448AlternatePlan");
 if (!CHE448AlternatePlanflag) {
      that.addLine(getLine128());
      that.addLine(getLine129());
      that.addLine(getLine130());
      that.addLine(getLine131());
     CHE448AlternatePlanelement.classList.remove("course");
     CHE448AlternatePlanelement.classList.add("course-highlighted");
      CHE448AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine128());
      that.removeLine(getLine129());
      that.removeLine(getLine130());
      that.removeLine(getLine131());
     CHE448AlternatePlanelement.classList.remove("course-highlighted");
     CHE448AlternatePlanelement.classList.add("course");
      CHE448AlternatePlanflag=false
  }
};
$scope.MECE403AlternatePlanListener = function () {
  var MECE403AlternatePlanelement = document.getElementById("MECE403AlternatePlan");
 if (!MECE403AlternatePlanflag) {
      that.addLine(getLine132());
      that.addLine(getLine133());
      that.addLine(getLine134());
      that.addLine(getLine135());
     MECE403AlternatePlanelement.classList.remove("course");
     MECE403AlternatePlanelement.classList.add("course-highlighted");
      MECE403AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine132());
      that.removeLine(getLine133());
      that.removeLine(getLine134());
      that.removeLine(getLine135());
     MECE403AlternatePlanelement.classList.remove("course-highlighted");
     MECE403AlternatePlanelement.classList.add("course");
      MECE403AlternatePlanflag=false
  }
};
$scope.MECE451AlternatePlanListener = function () {
  var MECE451AlternatePlanelement = document.getElementById("MECE451AlternatePlan");
 if (!MECE451AlternatePlanflag) {
      that.addLine(getLine136());
      that.addLine(getLine137());
     MECE451AlternatePlanelement.classList.remove("course");
     MECE451AlternatePlanelement.classList.add("course-highlighted");
      MECE451AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine136());
      that.removeLine(getLine137());
     MECE451AlternatePlanelement.classList.remove("course-highlighted");
     MECE451AlternatePlanelement.classList.add("course");
      MECE451AlternatePlanflag=false
  }
};
$scope.MECE460AlternatePlanListener = function () {
  var MECE460AlternatePlanelement = document.getElementById("MECE460AlternatePlan");
 if (!MECE460AlternatePlanflag) {
      that.addLine(getLine138());
      that.addLine(getLine139());
      that.addLine(getLine140());
      that.addLine(getLine141());
      that.addLine(getLine142());
      that.addLine(getLine143());
      that.addLine(getLine144());
      that.addLine(getLine145());
     MECE460AlternatePlanelement.classList.remove("course");
     MECE460AlternatePlanelement.classList.add("course-highlighted");
      MECE460AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine138());
      that.removeLine(getLine139());
      that.removeLine(getLine140());
      that.removeLine(getLine141());
      that.removeLine(getLine142());
      that.removeLine(getLine143());
      that.removeLine(getLine144());
      that.removeLine(getLine145());
     MECE460AlternatePlanelement.classList.remove("course-highlighted");
     MECE460AlternatePlanelement.classList.add("course");
      MECE460AlternatePlanflag=false
  }
};
  var CHEM103CoopPlan1flag = false;
  var ENGG100CoopPlan1flag = false;
  var ENGG130CoopPlan1flag = false;
  var ENGL199CoopPlan1flag = false;
  var MATH100CoopPlan1flag = false;
  var PHYS130CoopPlan1flag = false;
  var CHEM105CoopPlan1flag = false;
  var ENCMP100CoopPlan1flag = false;
  var ENGG160CoopPlan1flag = false;
  var ENPH131CoopPlan1flag = false;
  var MATH101CoopPlan1flag = false;
  var MATH102CoopPlan1flag = false;
  var CIVE270CoopPlan1flag = false;
  var ENGG299CoopPlan1flag = false;
  var MATH209CoopPlan1flag = false;
  var MECE230CoopPlan1flag = false;
  var MECE260CoopPlan1flag = false;
  var MECE265CoopPlan1flag = false;
  var STAT235CoopPlan1flag = false;
  var CHE243CoopPlan1flag = false;
  var ECE209CoopPlan1flag = false;
  var MATE202CoopPlan1flag = false;
  var MATH201CoopPlan1flag = false;
  var MECE200CoopPlan1flag = false;
  var MECE250CoopPlan1flag = false;
  var WKEXP901CoopPlan1flag = false;
  var WKEXP902CoopPlan1flag = false;
  var MATH300CoopPlan1flag = false;
  var MECE300CoopPlan1flag = false;
  var MECE301CoopPlan1flag = false;
  var MECE331CoopPlan1flag = false;
  var MECE371CoopPlan1flag = false;
  var MECE380CoopPlan1flag = false;
  var WKEXP903CoopPlan1flag = false;
  var WKEXP904CoopPlan1flag = false;
  var ENGM310CoopPlan1flag = false;
  var MECE340CoopPlan1flag = false;
  var MECE360CoopPlan1flag = false;
  var MECE362CoopPlan1flag = false;
  var MECE390CoopPlan1flag = false;
  var ComplementaryElectiveCoopPlan1flag = false;
  var ENGG404CoopPlan1flag = false;
  var MECE430CoopPlan1flag = false;
  var MECE463CoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan1flag = false;
  var WKEXP905CoopPlan1flag = false;
  var CHE448CoopPlan1flag = false;
  var ENGG400CoopPlan1flag = false;
  var MECE403CoopPlan1flag = false;
  var MECE451CoopPlan1flag = false;
  var MECE460CoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan1flag = false;
  var ITSElectiveCoopPlan1flag = false;
$scope.CHEM103CoopPlan1Listener = function () {
  var CHEM103CoopPlan1element = document.getElementById("CHEM103CoopPlan1");
 if (!CHEM103CoopPlan1flag) {
      that.addLine(getLine148());
     CHEM103CoopPlan1element.classList.remove("course");
     CHEM103CoopPlan1element.classList.add("course-highlighted");
      CHEM103CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine148());
     CHEM103CoopPlan1element.classList.remove("course-highlighted");
     CHEM103CoopPlan1element.classList.add("course");
      CHEM103CoopPlan1flag=false
  }
};
$scope.ENGG130CoopPlan1Listener = function () {
  var ENGG130CoopPlan1element = document.getElementById("ENGG130CoopPlan1");
 if (!ENGG130CoopPlan1flag) {
      that.addLine(getLine146());
      that.addLine(getLine151());
      that.addLine(getLine155());
      that.addLine(getLine169());
     ENGG130CoopPlan1element.classList.remove("course");
     ENGG130CoopPlan1element.classList.add("course-highlighted");
      ENGG130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine146());
      that.removeLine(getLine151());
      that.removeLine(getLine155());
      that.removeLine(getLine169());
     ENGG130CoopPlan1element.classList.remove("course-highlighted");
     ENGG130CoopPlan1element.classList.add("course");
      ENGG130CoopPlan1flag=false
  }
};
$scope.ENGL199CoopPlan1Listener = function () {
  var ENGL199CoopPlan1element = document.getElementById("ENGL199CoopPlan1");
 if (!ENGL199CoopPlan1flag) {
      that.addLine(getLine149());
     ENGL199CoopPlan1element.classList.remove("course");
     ENGL199CoopPlan1element.classList.add("course-highlighted");
      ENGL199CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine149());
     ENGL199CoopPlan1element.classList.remove("course-highlighted");
     ENGL199CoopPlan1element.classList.add("course");
      ENGL199CoopPlan1flag=false
  }
};
$scope.MATH100CoopPlan1Listener = function () {
  var MATH100CoopPlan1element = document.getElementById("MATH100CoopPlan1");
 if (!MATH100CoopPlan1flag) {
      that.addLine(getLine146());
      that.addLine(getLine147());
      that.addLine(getLine150());
      that.addLine(getLine153());
      that.addLine(getLine154());
      that.addLine(getLine164());
     MATH100CoopPlan1element.classList.remove("course");
     MATH100CoopPlan1element.classList.add("course-highlighted");
      MATH100CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine146());
      that.removeLine(getLine147());
      that.removeLine(getLine150());
      that.removeLine(getLine153());
      that.removeLine(getLine154());
      that.removeLine(getLine164());
     MATH100CoopPlan1element.classList.remove("course-highlighted");
     MATH100CoopPlan1element.classList.add("course");
      MATH100CoopPlan1flag=false
  }
};
$scope.PHYS130CoopPlan1Listener = function () {
  var PHYS130CoopPlan1element = document.getElementById("PHYS130CoopPlan1");
 if (!PHYS130CoopPlan1flag) {
      that.addLine(getLine147());
     PHYS130CoopPlan1element.classList.remove("course");
     PHYS130CoopPlan1element.classList.add("course-highlighted");
      PHYS130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine147());
     PHYS130CoopPlan1element.classList.remove("course-highlighted");
     PHYS130CoopPlan1element.classList.add("course");
      PHYS130CoopPlan1flag=false
  }
};
$scope.CHEM105CoopPlan1Listener = function () {
  var CHEM105CoopPlan1element = document.getElementById("CHEM105CoopPlan1");
 if (!CHEM105CoopPlan1flag) {
      that.addLine(getLine148());
      that.addLine(getLine167());
     CHEM105CoopPlan1element.classList.remove("course");
     CHEM105CoopPlan1element.classList.add("course-highlighted");
      CHEM105CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine148());
      that.removeLine(getLine167());
     CHEM105CoopPlan1element.classList.remove("course-highlighted");
     CHEM105CoopPlan1element.classList.add("course");
      CHEM105CoopPlan1flag=false
  }
};
$scope.ENGG160CoopPlan1Listener = function () {
  var ENGG160CoopPlan1element = document.getElementById("ENGG160CoopPlan1");
 if (!ENGG160CoopPlan1flag) {
      that.addLine(getLine149());
      that.addLine(getLine161());
     ENGG160CoopPlan1element.classList.remove("course");
     ENGG160CoopPlan1element.classList.add("course-highlighted");
      ENGG160CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine149());
      that.removeLine(getLine161());
     ENGG160CoopPlan1element.classList.remove("course-highlighted");
     ENGG160CoopPlan1element.classList.add("course");
      ENGG160CoopPlan1flag=false
  }
};
$scope.ENPH131CoopPlan1Listener = function () {
  var ENPH131CoopPlan1element = document.getElementById("ENPH131CoopPlan1");
 if (!ENPH131CoopPlan1flag) {
      that.addLine(getLine150());
      that.addLine(getLine151());
      that.addLine(getLine152());
      that.addLine(getLine160());
      that.addLine(getLine170());
     ENPH131CoopPlan1element.classList.remove("course");
     ENPH131CoopPlan1element.classList.add("course-highlighted");
      ENPH131CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine150());
      that.removeLine(getLine151());
      that.removeLine(getLine152());
      that.removeLine(getLine160());
      that.removeLine(getLine170());
     ENPH131CoopPlan1element.classList.remove("course-highlighted");
     ENPH131CoopPlan1element.classList.add("course");
      ENPH131CoopPlan1flag=false
  }
};
$scope.MATH101CoopPlan1Listener = function () {
  var MATH101CoopPlan1element = document.getElementById("MATH101CoopPlan1");
 if (!MATH101CoopPlan1flag) {
      that.addLine(getLine152());
      that.addLine(getLine153());
      that.addLine(getLine156());
      that.addLine(getLine157());
      that.addLine(getLine159());
      that.addLine(getLine165());
      that.addLine(getLine166());
      that.addLine(getLine171());
     MATH101CoopPlan1element.classList.remove("course");
     MATH101CoopPlan1element.classList.add("course-highlighted");
      MATH101CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine152());
      that.removeLine(getLine153());
      that.removeLine(getLine156());
      that.removeLine(getLine157());
      that.removeLine(getLine159());
      that.removeLine(getLine165());
      that.removeLine(getLine166());
      that.removeLine(getLine171());
     MATH101CoopPlan1element.classList.remove("course-highlighted");
     MATH101CoopPlan1element.classList.add("course");
      MATH101CoopPlan1flag=false
  }
};
$scope.MATH102CoopPlan1Listener = function () {
  var MATH102CoopPlan1element = document.getElementById("MATH102CoopPlan1");
 if (!MATH102CoopPlan1flag) {
      that.addLine(getLine154());
      that.addLine(getLine158());
      that.addLine(getLine199());
     MATH102CoopPlan1element.classList.remove("course");
     MATH102CoopPlan1element.classList.add("course-highlighted");
      MATH102CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine154());
      that.removeLine(getLine158());
      that.removeLine(getLine199());
     MATH102CoopPlan1element.classList.remove("course-highlighted");
     MATH102CoopPlan1element.classList.add("course");
      MATH102CoopPlan1flag=false
  }
};
$scope.CIVE270CoopPlan1Listener = function () {
  var CIVE270CoopPlan1element = document.getElementById("CIVE270CoopPlan1");
 if (!CIVE270CoopPlan1flag) {
      that.addLine(getLine155());
      that.addLine(getLine156());
      that.addLine(getLine163());
      that.addLine(getLine176());
      that.addLine(getLine189());
      that.addLine(getLine196());
     CIVE270CoopPlan1element.classList.remove("course");
     CIVE270CoopPlan1element.classList.add("course-highlighted");
      CIVE270CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine155());
      that.removeLine(getLine156());
      that.removeLine(getLine163());
      that.removeLine(getLine176());
      that.removeLine(getLine189());
      that.removeLine(getLine196());
     CIVE270CoopPlan1element.classList.remove("course-highlighted");
     CIVE270CoopPlan1element.classList.add("course");
      CIVE270CoopPlan1flag=false
  }
};
$scope.ENGG299CoopPlan1Listener = function () {
  var ENGG299CoopPlan1element = document.getElementById("ENGG299CoopPlan1");
 if (!ENGG299CoopPlan1flag) {
      that.addLine(getLine172());
     ENGG299CoopPlan1element.classList.remove("course");
     ENGG299CoopPlan1element.classList.add("course-highlighted");
      ENGG299CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine172());
     ENGG299CoopPlan1element.classList.remove("course-highlighted");
     ENGG299CoopPlan1element.classList.add("course");
      ENGG299CoopPlan1flag=false
  }
};
$scope.MATH209CoopPlan1Listener = function () {
  var MATH209CoopPlan1element = document.getElementById("MATH209CoopPlan1");
 if (!MATH209CoopPlan1flag) {
      that.addLine(getLine157());
      that.addLine(getLine158());
      that.addLine(getLine168());
      that.addLine(getLine175());
      that.addLine(getLine183());
      that.addLine(getLine207());
     MATH209CoopPlan1element.classList.remove("course");
     MATH209CoopPlan1element.classList.add("course-highlighted");
      MATH209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine157());
      that.removeLine(getLine158());
      that.removeLine(getLine168());
      that.removeLine(getLine175());
      that.removeLine(getLine183());
      that.removeLine(getLine207());
     MATH209CoopPlan1element.classList.remove("course-highlighted");
     MATH209CoopPlan1element.classList.add("course");
      MATH209CoopPlan1flag=false
  }
};
$scope.MECE230CoopPlan1Listener = function () {
  var MECE230CoopPlan1element = document.getElementById("MECE230CoopPlan1");
 if (!MECE230CoopPlan1flag) {
      that.addLine(getLine159());
      that.addLine(getLine160());
      that.addLine(getLine181());
      that.addLine(getLine185());
     MECE230CoopPlan1element.classList.remove("course");
     MECE230CoopPlan1element.classList.add("course-highlighted");
      MECE230CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine159());
      that.removeLine(getLine160());
      that.removeLine(getLine181());
      that.removeLine(getLine185());
     MECE230CoopPlan1element.classList.remove("course-highlighted");
     MECE230CoopPlan1element.classList.add("course");
      MECE230CoopPlan1flag=false
  }
};
$scope.MECE260CoopPlan1Listener = function () {
  var MECE260CoopPlan1element = document.getElementById("MECE260CoopPlan1");
 if (!MECE260CoopPlan1flag) {
      that.addLine(getLine161());
      that.addLine(getLine162());
      that.addLine(getLine163());
      that.addLine(getLine193());
     MECE260CoopPlan1element.classList.remove("course");
     MECE260CoopPlan1element.classList.add("course-highlighted");
      MECE260CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine161());
      that.removeLine(getLine162());
      that.removeLine(getLine163());
      that.removeLine(getLine193());
     MECE260CoopPlan1element.classList.remove("course-highlighted");
     MECE260CoopPlan1element.classList.add("course");
      MECE260CoopPlan1flag=false
  }
};
$scope.MECE265CoopPlan1Listener = function () {
  var MECE265CoopPlan1element = document.getElementById("MECE265CoopPlan1");
 if (!MECE265CoopPlan1flag) {
      that.addLine(getLine162());
      that.addLine(getLine194());
     MECE265CoopPlan1element.classList.remove("course");
     MECE265CoopPlan1element.classList.add("course-highlighted");
      MECE265CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine162());
      that.removeLine(getLine194());
     MECE265CoopPlan1element.classList.remove("course-highlighted");
     MECE265CoopPlan1element.classList.add("course");
      MECE265CoopPlan1flag=false
  }
};
$scope.STAT235CoopPlan1Listener = function () {
  var STAT235CoopPlan1element = document.getElementById("STAT235CoopPlan1");
 if (!STAT235CoopPlan1flag) {
      that.addLine(getLine164());
      that.addLine(getLine165());
      that.addLine(getLine178());
     STAT235CoopPlan1element.classList.remove("course");
     STAT235CoopPlan1element.classList.add("course-highlighted");
      STAT235CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine164());
      that.removeLine(getLine165());
      that.removeLine(getLine178());
     STAT235CoopPlan1element.classList.remove("course-highlighted");
     STAT235CoopPlan1element.classList.add("course");
      STAT235CoopPlan1flag=false
  }
};
$scope.CHE243CoopPlan1Listener = function () {
  var CHE243CoopPlan1element = document.getElementById("CHE243CoopPlan1");
 if (!CHE243CoopPlan1flag) {
      that.addLine(getLine166());
      that.addLine(getLine184());
      that.addLine(getLine186());
      that.addLine(getLine192());
     CHE243CoopPlan1element.classList.remove("course");
     CHE243CoopPlan1element.classList.add("course-highlighted");
      CHE243CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine166());
      that.removeLine(getLine184());
      that.removeLine(getLine186());
      that.removeLine(getLine192());
     CHE243CoopPlan1element.classList.remove("course-highlighted");
     CHE243CoopPlan1element.classList.add("course");
      CHE243CoopPlan1flag=false
  }
};
$scope.ECE209CoopPlan1Listener = function () {
  var ECE209CoopPlan1element = document.getElementById("ECE209CoopPlan1");
 if (!ECE209CoopPlan1flag) {
      that.addLine(getLine177());
     ECE209CoopPlan1element.classList.remove("course");
     ECE209CoopPlan1element.classList.add("course-highlighted");
      ECE209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine177());
     ECE209CoopPlan1element.classList.remove("course-highlighted");
     ECE209CoopPlan1element.classList.add("course");
      ECE209CoopPlan1flag=false
  }
};
$scope.MATE202CoopPlan1Listener = function () {
  var MATE202CoopPlan1element = document.getElementById("MATE202CoopPlan1");
 if (!MATE202CoopPlan1flag) {
      that.addLine(getLine167());
      that.addLine(getLine195());
     MATE202CoopPlan1element.classList.remove("course");
     MATE202CoopPlan1element.classList.add("course-highlighted");
      MATE202CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine167());
      that.removeLine(getLine195());
     MATE202CoopPlan1element.classList.remove("course-highlighted");
     MATE202CoopPlan1element.classList.add("course");
      MATE202CoopPlan1flag=false
  }
};
$scope.MATH201CoopPlan1Listener = function () {
  var MATH201CoopPlan1element = document.getElementById("MATH201CoopPlan1");
 if (!MATH201CoopPlan1flag) {
      that.addLine(getLine168());
      that.addLine(getLine174());
      that.addLine(getLine200());
      that.addLine(getLine206());
     MATH201CoopPlan1element.classList.remove("course");
     MATH201CoopPlan1element.classList.add("course-highlighted");
      MATH201CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine168());
      that.removeLine(getLine174());
      that.removeLine(getLine200());
      that.removeLine(getLine206());
     MATH201CoopPlan1element.classList.remove("course-highlighted");
     MATH201CoopPlan1element.classList.add("course");
      MATH201CoopPlan1flag=false
  }
};
$scope.MECE200CoopPlan1Listener = function () {
  var MECE200CoopPlan1element = document.getElementById("MECE200CoopPlan1");
 if (!MECE200CoopPlan1flag) {
      that.addLine(getLine216());
     MECE200CoopPlan1element.classList.remove("course");
     MECE200CoopPlan1element.classList.add("course-highlighted");
      MECE200CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine216());
     MECE200CoopPlan1element.classList.remove("course-highlighted");
     MECE200CoopPlan1element.classList.add("course");
      MECE200CoopPlan1flag=false
  }
};
$scope.MECE250CoopPlan1Listener = function () {
  var MECE250CoopPlan1element = document.getElementById("MECE250CoopPlan1");
 if (!MECE250CoopPlan1flag) {
      that.addLine(getLine169());
      that.addLine(getLine170());
      that.addLine(getLine171());
      that.addLine(getLine182());
      that.addLine(getLine198());
      that.addLine(getLine214());
     MECE250CoopPlan1element.classList.remove("course");
     MECE250CoopPlan1element.classList.add("course-highlighted");
      MECE250CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine169());
      that.removeLine(getLine170());
      that.removeLine(getLine171());
      that.removeLine(getLine182());
      that.removeLine(getLine198());
      that.removeLine(getLine214());
     MECE250CoopPlan1element.classList.remove("course-highlighted");
     MECE250CoopPlan1element.classList.add("course");
      MECE250CoopPlan1flag=false
  }
};
$scope.WKEXP901CoopPlan1Listener = function () {
  var WKEXP901CoopPlan1element = document.getElementById("WKEXP901CoopPlan1");
 if (!WKEXP901CoopPlan1flag) {
      that.addLine(getLine172());
      that.addLine(getLine173());
     WKEXP901CoopPlan1element.classList.remove("course");
     WKEXP901CoopPlan1element.classList.add("course-highlighted");
      WKEXP901CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine172());
      that.removeLine(getLine173());
     WKEXP901CoopPlan1element.classList.remove("course-highlighted");
     WKEXP901CoopPlan1element.classList.add("course");
      WKEXP901CoopPlan1flag=false
  }
};
$scope.WKEXP902CoopPlan1Listener = function () {
  var WKEXP902CoopPlan1element = document.getElementById("WKEXP902CoopPlan1");
 if (!WKEXP902CoopPlan1flag) {
      that.addLine(getLine173());
      that.addLine(getLine190());
     WKEXP902CoopPlan1element.classList.remove("course");
     WKEXP902CoopPlan1element.classList.add("course-highlighted");
      WKEXP902CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine173());
      that.removeLine(getLine190());
     WKEXP902CoopPlan1element.classList.remove("course-highlighted");
     WKEXP902CoopPlan1element.classList.add("course");
      WKEXP902CoopPlan1flag=false
  }
};
$scope.MATH300CoopPlan1Listener = function () {
  var MATH300CoopPlan1element = document.getElementById("MATH300CoopPlan1");
 if (!MATH300CoopPlan1flag) {
      that.addLine(getLine174());
      that.addLine(getLine175());
      that.addLine(getLine187());
      that.addLine(getLine215());
     MATH300CoopPlan1element.classList.remove("course");
     MATH300CoopPlan1element.classList.add("course-highlighted");
      MATH300CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine174());
      that.removeLine(getLine175());
      that.removeLine(getLine187());
      that.removeLine(getLine215());
     MATH300CoopPlan1element.classList.remove("course-highlighted");
     MATH300CoopPlan1element.classList.add("course");
      MATH300CoopPlan1flag=false
  }
};
$scope.MECE300CoopPlan1Listener = function () {
  var MECE300CoopPlan1element = document.getElementById("MECE300CoopPlan1");
 if (!MECE300CoopPlan1flag) {
      that.addLine(getLine176());
      that.addLine(getLine177());
      that.addLine(getLine178());
      that.addLine(getLine179());
      that.addLine(getLine180());
      that.addLine(getLine210());
     MECE300CoopPlan1element.classList.remove("course");
     MECE300CoopPlan1element.classList.add("course-highlighted");
      MECE300CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine176());
      that.removeLine(getLine177());
      that.removeLine(getLine178());
      that.removeLine(getLine179());
      that.removeLine(getLine180());
      that.removeLine(getLine210());
     MECE300CoopPlan1element.classList.remove("course-highlighted");
     MECE300CoopPlan1element.classList.add("course");
      MECE300CoopPlan1flag=false
  }
};
$scope.MECE301CoopPlan1Listener = function () {
  var MECE301CoopPlan1element = document.getElementById("MECE301CoopPlan1");
 if (!MECE301CoopPlan1flag) {
      that.addLine(getLine180());
      that.addLine(getLine211());
     MECE301CoopPlan1element.classList.remove("course");
     MECE301CoopPlan1element.classList.add("course-highlighted");
      MECE301CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine180());
      that.removeLine(getLine211());
     MECE301CoopPlan1element.classList.remove("course-highlighted");
     MECE301CoopPlan1element.classList.add("course");
      MECE301CoopPlan1flag=false
  }
};
$scope.MECE331CoopPlan1Listener = function () {
  var MECE331CoopPlan1element = document.getElementById("MECE331CoopPlan1");
 if (!MECE331CoopPlan1flag) {
      that.addLine(getLine179());
      that.addLine(getLine181());
      that.addLine(getLine182());
      that.addLine(getLine183());
      that.addLine(getLine184());
      that.addLine(getLine188());
      that.addLine(getLine201());
      that.addLine(getLine202());
      that.addLine(getLine208());
      that.addLine(getLine217());
     MECE331CoopPlan1element.classList.remove("course");
     MECE331CoopPlan1element.classList.add("course-highlighted");
      MECE331CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine179());
      that.removeLine(getLine181());
      that.removeLine(getLine182());
      that.removeLine(getLine183());
      that.removeLine(getLine184());
      that.removeLine(getLine188());
      that.removeLine(getLine201());
      that.removeLine(getLine202());
      that.removeLine(getLine208());
      that.removeLine(getLine217());
     MECE331CoopPlan1element.classList.remove("course-highlighted");
     MECE331CoopPlan1element.classList.add("course");
      MECE331CoopPlan1flag=false
  }
};
$scope.MECE371CoopPlan1Listener = function () {
  var MECE371CoopPlan1element = document.getElementById("MECE371CoopPlan1");
 if (!MECE371CoopPlan1flag) {
      that.addLine(getLine185());
      that.addLine(getLine186());
      that.addLine(getLine187());
      that.addLine(getLine188());
      that.addLine(getLine204());
      that.addLine(getLine209());
      that.addLine(getLine221());
     MECE371CoopPlan1element.classList.remove("course");
     MECE371CoopPlan1element.classList.add("course-highlighted");
      MECE371CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine185());
      that.removeLine(getLine186());
      that.removeLine(getLine187());
      that.removeLine(getLine188());
      that.removeLine(getLine204());
      that.removeLine(getLine209());
      that.removeLine(getLine221());
     MECE371CoopPlan1element.classList.remove("course-highlighted");
     MECE371CoopPlan1element.classList.add("course");
      MECE371CoopPlan1flag=false
  }
};
$scope.MECE380CoopPlan1Listener = function () {
  var MECE380CoopPlan1element = document.getElementById("MECE380CoopPlan1");
 if (!MECE380CoopPlan1flag) {
      that.addLine(getLine189());
      that.addLine(getLine222());
     MECE380CoopPlan1element.classList.remove("course");
     MECE380CoopPlan1element.classList.add("course-highlighted");
      MECE380CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine189());
      that.removeLine(getLine222());
     MECE380CoopPlan1element.classList.remove("course-highlighted");
     MECE380CoopPlan1element.classList.add("course");
      MECE380CoopPlan1flag=false
  }
};
$scope.WKEXP903CoopPlan1Listener = function () {
  var WKEXP903CoopPlan1element = document.getElementById("WKEXP903CoopPlan1");
 if (!WKEXP903CoopPlan1flag) {
      that.addLine(getLine190());
      that.addLine(getLine191());
     WKEXP903CoopPlan1element.classList.remove("course");
     WKEXP903CoopPlan1element.classList.add("course-highlighted");
      WKEXP903CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine190());
      that.removeLine(getLine191());
     WKEXP903CoopPlan1element.classList.remove("course-highlighted");
     WKEXP903CoopPlan1element.classList.add("course");
      WKEXP903CoopPlan1flag=false
  }
};
$scope.WKEXP904CoopPlan1Listener = function () {
  var WKEXP904CoopPlan1element = document.getElementById("WKEXP904CoopPlan1");
 if (!WKEXP904CoopPlan1flag) {
      that.addLine(getLine191());
      that.addLine(getLine205());
     WKEXP904CoopPlan1element.classList.remove("course");
     WKEXP904CoopPlan1element.classList.add("course-highlighted");
      WKEXP904CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine191());
      that.removeLine(getLine205());
     WKEXP904CoopPlan1element.classList.remove("course-highlighted");
     WKEXP904CoopPlan1element.classList.add("course");
      WKEXP904CoopPlan1flag=false
  }
};
$scope.ENGM310CoopPlan1Listener = function () {
  var ENGM310CoopPlan1element = document.getElementById("ENGM310CoopPlan1");
 if (!ENGM310CoopPlan1flag) {
      that.addLine(getLine223());
     ENGM310CoopPlan1element.classList.remove("course");
     ENGM310CoopPlan1element.classList.add("course-highlighted");
      ENGM310CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine223());
     ENGM310CoopPlan1element.classList.remove("course-highlighted");
     ENGM310CoopPlan1element.classList.add("course");
      ENGM310CoopPlan1flag=false
  }
};
$scope.MECE340CoopPlan1Listener = function () {
  var MECE340CoopPlan1element = document.getElementById("MECE340CoopPlan1");
 if (!MECE340CoopPlan1flag) {
      that.addLine(getLine192());
      that.addLine(getLine203());
      that.addLine(getLine212());
      that.addLine(getLine218());
     MECE340CoopPlan1element.classList.remove("course");
     MECE340CoopPlan1element.classList.add("course-highlighted");
      MECE340CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine192());
      that.removeLine(getLine203());
      that.removeLine(getLine212());
      that.removeLine(getLine218());
     MECE340CoopPlan1element.classList.remove("course-highlighted");
     MECE340CoopPlan1element.classList.add("course");
      MECE340CoopPlan1flag=false
  }
};
$scope.MECE360CoopPlan1Listener = function () {
  var MECE360CoopPlan1element = document.getElementById("MECE360CoopPlan1");
 if (!MECE360CoopPlan1flag) {
      that.addLine(getLine193());
      that.addLine(getLine194());
      that.addLine(getLine195());
      that.addLine(getLine196());
      that.addLine(getLine197());
      that.addLine(getLine213());
      that.addLine(getLine219());
     MECE360CoopPlan1element.classList.remove("course");
     MECE360CoopPlan1element.classList.add("course-highlighted");
      MECE360CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine193());
      that.removeLine(getLine194());
      that.removeLine(getLine195());
      that.removeLine(getLine196());
      that.removeLine(getLine197());
      that.removeLine(getLine213());
      that.removeLine(getLine219());
     MECE360CoopPlan1element.classList.remove("course-highlighted");
     MECE360CoopPlan1element.classList.add("course");
      MECE360CoopPlan1flag=false
  }
};
$scope.MECE362CoopPlan1Listener = function () {
  var MECE362CoopPlan1element = document.getElementById("MECE362CoopPlan1");
 if (!MECE362CoopPlan1flag) {
      that.addLine(getLine197());
      that.addLine(getLine198());
      that.addLine(getLine220());
     MECE362CoopPlan1element.classList.remove("course");
     MECE362CoopPlan1element.classList.add("course-highlighted");
      MECE362CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine197());
      that.removeLine(getLine198());
      that.removeLine(getLine220());
     MECE362CoopPlan1element.classList.remove("course-highlighted");
     MECE362CoopPlan1element.classList.add("course");
      MECE362CoopPlan1flag=false
  }
};
$scope.MECE390CoopPlan1Listener = function () {
  var MECE390CoopPlan1element = document.getElementById("MECE390CoopPlan1");
 if (!MECE390CoopPlan1flag) {
      that.addLine(getLine199());
      that.addLine(getLine200());
     MECE390CoopPlan1element.classList.remove("course");
     MECE390CoopPlan1element.classList.add("course-highlighted");
      MECE390CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine199());
      that.removeLine(getLine200());
     MECE390CoopPlan1element.classList.remove("course-highlighted");
     MECE390CoopPlan1element.classList.add("course");
      MECE390CoopPlan1flag=false
  }
};
$scope.MECE430CoopPlan1Listener = function () {
  var MECE430CoopPlan1element = document.getElementById("MECE430CoopPlan1");
 if (!MECE430CoopPlan1flag) {
      that.addLine(getLine201());
     MECE430CoopPlan1element.classList.remove("course");
     MECE430CoopPlan1element.classList.add("course-highlighted");
      MECE430CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine201());
     MECE430CoopPlan1element.classList.remove("course-highlighted");
     MECE430CoopPlan1element.classList.add("course");
      MECE430CoopPlan1flag=false
  }
};
$scope.MECE463CoopPlan1Listener = function () {
  var MECE463CoopPlan1element = document.getElementById("MECE463CoopPlan1");
 if (!MECE463CoopPlan1flag) {
      that.addLine(getLine202());
      that.addLine(getLine203());
      that.addLine(getLine204());
     MECE463CoopPlan1element.classList.remove("course");
     MECE463CoopPlan1element.classList.add("course-highlighted");
      MECE463CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine202());
      that.removeLine(getLine203());
      that.removeLine(getLine204());
     MECE463CoopPlan1element.classList.remove("course-highlighted");
     MECE463CoopPlan1element.classList.add("course");
      MECE463CoopPlan1flag=false
  }
};
$scope.WKEXP905CoopPlan1Listener = function () {
  var WKEXP905CoopPlan1element = document.getElementById("WKEXP905CoopPlan1");
 if (!WKEXP905CoopPlan1flag) {
      that.addLine(getLine205());
     WKEXP905CoopPlan1element.classList.remove("course");
     WKEXP905CoopPlan1element.classList.add("course-highlighted");
      WKEXP905CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine205());
     WKEXP905CoopPlan1element.classList.remove("course-highlighted");
     WKEXP905CoopPlan1element.classList.add("course");
      WKEXP905CoopPlan1flag=false
  }
};
$scope.CHE448CoopPlan1Listener = function () {
  var CHE448CoopPlan1element = document.getElementById("CHE448CoopPlan1");
 if (!CHE448CoopPlan1flag) {
      that.addLine(getLine206());
      that.addLine(getLine207());
      that.addLine(getLine208());
      that.addLine(getLine209());
     CHE448CoopPlan1element.classList.remove("course");
     CHE448CoopPlan1element.classList.add("course-highlighted");
      CHE448CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine206());
      that.removeLine(getLine207());
      that.removeLine(getLine208());
      that.removeLine(getLine209());
     CHE448CoopPlan1element.classList.remove("course-highlighted");
     CHE448CoopPlan1element.classList.add("course");
      CHE448CoopPlan1flag=false
  }
};
$scope.MECE403CoopPlan1Listener = function () {
  var MECE403CoopPlan1element = document.getElementById("MECE403CoopPlan1");
 if (!MECE403CoopPlan1flag) {
      that.addLine(getLine210());
      that.addLine(getLine211());
      that.addLine(getLine212());
      that.addLine(getLine213());
     MECE403CoopPlan1element.classList.remove("course");
     MECE403CoopPlan1element.classList.add("course-highlighted");
      MECE403CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine210());
      that.removeLine(getLine211());
      that.removeLine(getLine212());
      that.removeLine(getLine213());
     MECE403CoopPlan1element.classList.remove("course-highlighted");
     MECE403CoopPlan1element.classList.add("course");
      MECE403CoopPlan1flag=false
  }
};
$scope.MECE451CoopPlan1Listener = function () {
  var MECE451CoopPlan1element = document.getElementById("MECE451CoopPlan1");
 if (!MECE451CoopPlan1flag) {
      that.addLine(getLine214());
      that.addLine(getLine215());
     MECE451CoopPlan1element.classList.remove("course");
     MECE451CoopPlan1element.classList.add("course-highlighted");
      MECE451CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine214());
      that.removeLine(getLine215());
     MECE451CoopPlan1element.classList.remove("course-highlighted");
     MECE451CoopPlan1element.classList.add("course");
      MECE451CoopPlan1flag=false
  }
};
$scope.MECE460CoopPlan1Listener = function () {
  var MECE460CoopPlan1element = document.getElementById("MECE460CoopPlan1");
 if (!MECE460CoopPlan1flag) {
      that.addLine(getLine216());
      that.addLine(getLine217());
      that.addLine(getLine218());
      that.addLine(getLine219());
      that.addLine(getLine220());
      that.addLine(getLine221());
      that.addLine(getLine222());
      that.addLine(getLine223());
     MECE460CoopPlan1element.classList.remove("course");
     MECE460CoopPlan1element.classList.add("course-highlighted");
      MECE460CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine216());
      that.removeLine(getLine217());
      that.removeLine(getLine218());
      that.removeLine(getLine219());
      that.removeLine(getLine220());
      that.removeLine(getLine221());
      that.removeLine(getLine222());
      that.removeLine(getLine223());
     MECE460CoopPlan1element.classList.remove("course-highlighted");
     MECE460CoopPlan1element.classList.add("course");
      MECE460CoopPlan1flag=false
  }
};
  var CHEM103CoopPlan2flag = false;
  var ENGG100CoopPlan2flag = false;
  var ENGG130CoopPlan2flag = false;
  var ENGL199CoopPlan2flag = false;
  var MATH100CoopPlan2flag = false;
  var PHYS130CoopPlan2flag = false;
  var CHEM105CoopPlan2flag = false;
  var ENCMP100CoopPlan2flag = false;
  var ENGG160CoopPlan2flag = false;
  var ENPH131CoopPlan2flag = false;
  var MATH101CoopPlan2flag = false;
  var MATH102CoopPlan2flag = false;
  var CHE243CoopPlan2flag = false;
  var CIVE270CoopPlan2flag = false;
  var ENGG299CoopPlan2flag = false;
  var MATH209CoopPlan2flag = false;
  var MECE200CoopPlan2flag = false;
  var MECE250CoopPlan2flag = false;
  var STAT235CoopPlan2flag = false;
  var WKEXP901CoopPlan2flag = false;
  var ECE209CoopPlan2flag = false;
  var MATE202CoopPlan2flag = false;
  var MATH201CoopPlan2flag = false;
  var MECE230CoopPlan2flag = false;
  var MECE260CoopPlan2flag = false;
  var MECE265CoopPlan2flag = false;
  var MATH300CoopPlan2flag = false;
  var MECE300CoopPlan2flag = false;
  var MECE301CoopPlan2flag = false;
  var MECE331CoopPlan2flag = false;
  var MECE371CoopPlan2flag = false;
  var MECE380CoopPlan2flag = false;
  var WKEXP902CoopPlan2flag = false;
  var WKEXP903CoopPlan2flag = false;
  var ENGM310CoopPlan2flag = false;
  var MECE340CoopPlan2flag = false;
  var MECE360CoopPlan2flag = false;
  var MECE362CoopPlan2flag = false;
  var MECE390CoopPlan2flag = false;
  var ComplementaryElectiveCoopPlan2flag = false;
  var WKEXP904CoopPlan2flag = false;
  var MECE403CoopPlan2flag = false;
  var MECE451CoopPlan2flag = false;
  var MECE460CoopPlan2flag = false;
  var ProgramTechnicalElectiveCoopPlan2flag = false;
  var ProgramTechnicalElectiveCoopPlan2flag = false;
  var ITSElectiveCoopPlan2flag = false;
  var WKEXP905CoopPlan2flag = false;
  var CHE448CoopPlan2flag = false;
  var ENGG400CoopPlan2flag = false;
  var ENGG404CoopPlan2flag = false;
  var MECE430CoopPlan2flag = false;
  var MECE463CoopPlan2flag = false;
  var ProgramTechnicalElectiveCoopPlan2flag = false;
  var ProgramTechnicalElectiveCoopPlan2flag = false;
$scope.CHEM103CoopPlan2Listener = function () {
  var CHEM103CoopPlan2element = document.getElementById("CHEM103CoopPlan2");
 if (!CHEM103CoopPlan2flag) {
      that.addLine(getLine226());
     CHEM103CoopPlan2element.classList.remove("course");
     CHEM103CoopPlan2element.classList.add("course-highlighted");
      CHEM103CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine226());
     CHEM103CoopPlan2element.classList.remove("course-highlighted");
     CHEM103CoopPlan2element.classList.add("course");
      CHEM103CoopPlan2flag=false
  }
};
$scope.ENGG130CoopPlan2Listener = function () {
  var ENGG130CoopPlan2element = document.getElementById("ENGG130CoopPlan2");
 if (!ENGG130CoopPlan2flag) {
      that.addLine(getLine224());
      that.addLine(getLine229());
      that.addLine(getLine234());
      that.addLine(getLine238());
     ENGG130CoopPlan2element.classList.remove("course");
     ENGG130CoopPlan2element.classList.add("course-highlighted");
      ENGG130CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine224());
      that.removeLine(getLine229());
      that.removeLine(getLine234());
      that.removeLine(getLine238());
     ENGG130CoopPlan2element.classList.remove("course-highlighted");
     ENGG130CoopPlan2element.classList.add("course");
      ENGG130CoopPlan2flag=false
  }
};
$scope.ENGL199CoopPlan2Listener = function () {
  var ENGL199CoopPlan2element = document.getElementById("ENGL199CoopPlan2");
 if (!ENGL199CoopPlan2flag) {
      that.addLine(getLine227());
     ENGL199CoopPlan2element.classList.remove("course");
     ENGL199CoopPlan2element.classList.add("course-highlighted");
      ENGL199CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine227());
     ENGL199CoopPlan2element.classList.remove("course-highlighted");
     ENGL199CoopPlan2element.classList.add("course");
      ENGL199CoopPlan2flag=false
  }
};
$scope.MATH100CoopPlan2Listener = function () {
  var MATH100CoopPlan2element = document.getElementById("MATH100CoopPlan2");
 if (!MATH100CoopPlan2flag) {
      that.addLine(getLine224());
      that.addLine(getLine225());
      that.addLine(getLine228());
      that.addLine(getLine231());
      that.addLine(getLine232());
      that.addLine(getLine241());
     MATH100CoopPlan2element.classList.remove("course");
     MATH100CoopPlan2element.classList.add("course-highlighted");
      MATH100CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine224());
      that.removeLine(getLine225());
      that.removeLine(getLine228());
      that.removeLine(getLine231());
      that.removeLine(getLine232());
      that.removeLine(getLine241());
     MATH100CoopPlan2element.classList.remove("course-highlighted");
     MATH100CoopPlan2element.classList.add("course");
      MATH100CoopPlan2flag=false
  }
};
$scope.PHYS130CoopPlan2Listener = function () {
  var PHYS130CoopPlan2element = document.getElementById("PHYS130CoopPlan2");
 if (!PHYS130CoopPlan2flag) {
      that.addLine(getLine225());
     PHYS130CoopPlan2element.classList.remove("course");
     PHYS130CoopPlan2element.classList.add("course-highlighted");
      PHYS130CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine225());
     PHYS130CoopPlan2element.classList.remove("course-highlighted");
     PHYS130CoopPlan2element.classList.add("course");
      PHYS130CoopPlan2flag=false
  }
};
$scope.CHEM105CoopPlan2Listener = function () {
  var CHEM105CoopPlan2element = document.getElementById("CHEM105CoopPlan2");
 if (!CHEM105CoopPlan2flag) {
      that.addLine(getLine226());
      that.addLine(getLine244());
     CHEM105CoopPlan2element.classList.remove("course");
     CHEM105CoopPlan2element.classList.add("course-highlighted");
      CHEM105CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine226());
      that.removeLine(getLine244());
     CHEM105CoopPlan2element.classList.remove("course-highlighted");
     CHEM105CoopPlan2element.classList.add("course");
      CHEM105CoopPlan2flag=false
  }
};
$scope.ENGG160CoopPlan2Listener = function () {
  var ENGG160CoopPlan2element = document.getElementById("ENGG160CoopPlan2");
 if (!ENGG160CoopPlan2flag) {
      that.addLine(getLine227());
      that.addLine(getLine248());
     ENGG160CoopPlan2element.classList.remove("course");
     ENGG160CoopPlan2element.classList.add("course-highlighted");
      ENGG160CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine227());
      that.removeLine(getLine248());
     ENGG160CoopPlan2element.classList.remove("course-highlighted");
     ENGG160CoopPlan2element.classList.add("course");
      ENGG160CoopPlan2flag=false
  }
};
$scope.ENPH131CoopPlan2Listener = function () {
  var ENPH131CoopPlan2element = document.getElementById("ENPH131CoopPlan2");
 if (!ENPH131CoopPlan2flag) {
      that.addLine(getLine228());
      that.addLine(getLine229());
      that.addLine(getLine230());
      that.addLine(getLine239());
      that.addLine(getLine247());
     ENPH131CoopPlan2element.classList.remove("course");
     ENPH131CoopPlan2element.classList.add("course-highlighted");
      ENPH131CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine228());
      that.removeLine(getLine229());
      that.removeLine(getLine230());
      that.removeLine(getLine239());
      that.removeLine(getLine247());
     ENPH131CoopPlan2element.classList.remove("course-highlighted");
     ENPH131CoopPlan2element.classList.add("course");
      ENPH131CoopPlan2flag=false
  }
};
$scope.MATH101CoopPlan2Listener = function () {
  var MATH101CoopPlan2element = document.getElementById("MATH101CoopPlan2");
 if (!MATH101CoopPlan2flag) {
      that.addLine(getLine230());
      that.addLine(getLine231());
      that.addLine(getLine233());
      that.addLine(getLine235());
      that.addLine(getLine236());
      that.addLine(getLine240());
      that.addLine(getLine242());
      that.addLine(getLine246());
     MATH101CoopPlan2element.classList.remove("course");
     MATH101CoopPlan2element.classList.add("course-highlighted");
      MATH101CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine230());
      that.removeLine(getLine231());
      that.removeLine(getLine233());
      that.removeLine(getLine235());
      that.removeLine(getLine236());
      that.removeLine(getLine240());
      that.removeLine(getLine242());
      that.removeLine(getLine246());
     MATH101CoopPlan2element.classList.remove("course-highlighted");
     MATH101CoopPlan2element.classList.add("course");
      MATH101CoopPlan2flag=false
  }
};
$scope.MATH102CoopPlan2Listener = function () {
  var MATH102CoopPlan2element = document.getElementById("MATH102CoopPlan2");
 if (!MATH102CoopPlan2flag) {
      that.addLine(getLine232());
      that.addLine(getLine237());
      that.addLine(getLine276());
     MATH102CoopPlan2element.classList.remove("course");
     MATH102CoopPlan2element.classList.add("course-highlighted");
      MATH102CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine232());
      that.removeLine(getLine237());
      that.removeLine(getLine276());
     MATH102CoopPlan2element.classList.remove("course-highlighted");
     MATH102CoopPlan2element.classList.add("course");
      MATH102CoopPlan2flag=false
  }
};
$scope.CHE243CoopPlan2Listener = function () {
  var CHE243CoopPlan2element = document.getElementById("CHE243CoopPlan2");
 if (!CHE243CoopPlan2flag) {
      that.addLine(getLine233());
      that.addLine(getLine261());
      that.addLine(getLine263());
      that.addLine(getLine269());
     CHE243CoopPlan2element.classList.remove("course");
     CHE243CoopPlan2element.classList.add("course-highlighted");
      CHE243CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine233());
      that.removeLine(getLine261());
      that.removeLine(getLine263());
      that.removeLine(getLine269());
     CHE243CoopPlan2element.classList.remove("course-highlighted");
     CHE243CoopPlan2element.classList.add("course");
      CHE243CoopPlan2flag=false
  }
};
$scope.CIVE270CoopPlan2Listener = function () {
  var CIVE270CoopPlan2element = document.getElementById("CIVE270CoopPlan2");
 if (!CIVE270CoopPlan2flag) {
      that.addLine(getLine234());
      that.addLine(getLine235());
      that.addLine(getLine249());
      that.addLine(getLine253());
      that.addLine(getLine266());
      that.addLine(getLine273());
     CIVE270CoopPlan2element.classList.remove("course");
     CIVE270CoopPlan2element.classList.add("course-highlighted");
      CIVE270CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine234());
      that.removeLine(getLine235());
      that.removeLine(getLine249());
      that.removeLine(getLine253());
      that.removeLine(getLine266());
      that.removeLine(getLine273());
     CIVE270CoopPlan2element.classList.remove("course-highlighted");
     CIVE270CoopPlan2element.classList.add("course");
      CIVE270CoopPlan2flag=false
  }
};
$scope.ENGG299CoopPlan2Listener = function () {
  var ENGG299CoopPlan2element = document.getElementById("ENGG299CoopPlan2");
 if (!ENGG299CoopPlan2flag) {
      that.addLine(getLine243());
     ENGG299CoopPlan2element.classList.remove("course");
     ENGG299CoopPlan2element.classList.add("course-highlighted");
      ENGG299CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine243());
     ENGG299CoopPlan2element.classList.remove("course-highlighted");
     ENGG299CoopPlan2element.classList.add("course");
      ENGG299CoopPlan2flag=false
  }
};
$scope.MATH209CoopPlan2Listener = function () {
  var MATH209CoopPlan2element = document.getElementById("MATH209CoopPlan2");
 if (!MATH209CoopPlan2flag) {
      that.addLine(getLine236());
      that.addLine(getLine237());
      that.addLine(getLine245());
      that.addLine(getLine252());
      that.addLine(getLine260());
      that.addLine(getLine295());
     MATH209CoopPlan2element.classList.remove("course");
     MATH209CoopPlan2element.classList.add("course-highlighted");
      MATH209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine236());
      that.removeLine(getLine237());
      that.removeLine(getLine245());
      that.removeLine(getLine252());
      that.removeLine(getLine260());
      that.removeLine(getLine295());
     MATH209CoopPlan2element.classList.remove("course-highlighted");
     MATH209CoopPlan2element.classList.add("course");
      MATH209CoopPlan2flag=false
  }
};
$scope.MECE200CoopPlan2Listener = function () {
  var MECE200CoopPlan2element = document.getElementById("MECE200CoopPlan2");
 if (!MECE200CoopPlan2flag) {
      that.addLine(getLine285());
     MECE200CoopPlan2element.classList.remove("course");
     MECE200CoopPlan2element.classList.add("course-highlighted");
      MECE200CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine285());
     MECE200CoopPlan2element.classList.remove("course-highlighted");
     MECE200CoopPlan2element.classList.add("course");
      MECE200CoopPlan2flag=false
  }
};
$scope.MECE250CoopPlan2Listener = function () {
  var MECE250CoopPlan2element = document.getElementById("MECE250CoopPlan2");
 if (!MECE250CoopPlan2flag) {
      that.addLine(getLine238());
      that.addLine(getLine239());
      that.addLine(getLine240());
      that.addLine(getLine259());
      that.addLine(getLine275());
      that.addLine(getLine283());
     MECE250CoopPlan2element.classList.remove("course");
     MECE250CoopPlan2element.classList.add("course-highlighted");
      MECE250CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine238());
      that.removeLine(getLine239());
      that.removeLine(getLine240());
      that.removeLine(getLine259());
      that.removeLine(getLine275());
      that.removeLine(getLine283());
     MECE250CoopPlan2element.classList.remove("course-highlighted");
     MECE250CoopPlan2element.classList.add("course");
      MECE250CoopPlan2flag=false
  }
};
$scope.STAT235CoopPlan2Listener = function () {
  var STAT235CoopPlan2element = document.getElementById("STAT235CoopPlan2");
 if (!STAT235CoopPlan2flag) {
      that.addLine(getLine241());
      that.addLine(getLine242());
      that.addLine(getLine255());
     STAT235CoopPlan2element.classList.remove("course");
     STAT235CoopPlan2element.classList.add("course-highlighted");
      STAT235CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine241());
      that.removeLine(getLine242());
      that.removeLine(getLine255());
     STAT235CoopPlan2element.classList.remove("course-highlighted");
     STAT235CoopPlan2element.classList.add("course");
      STAT235CoopPlan2flag=false
  }
};
$scope.WKEXP901CoopPlan2Listener = function () {
  var WKEXP901CoopPlan2element = document.getElementById("WKEXP901CoopPlan2");
 if (!WKEXP901CoopPlan2flag) {
      that.addLine(getLine243());
      that.addLine(getLine267());
     WKEXP901CoopPlan2element.classList.remove("course");
     WKEXP901CoopPlan2element.classList.add("course-highlighted");
      WKEXP901CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine243());
      that.removeLine(getLine267());
     WKEXP901CoopPlan2element.classList.remove("course-highlighted");
     WKEXP901CoopPlan2element.classList.add("course");
      WKEXP901CoopPlan2flag=false
  }
};
$scope.ECE209CoopPlan2Listener = function () {
  var ECE209CoopPlan2element = document.getElementById("ECE209CoopPlan2");
 if (!ECE209CoopPlan2flag) {
      that.addLine(getLine254());
     ECE209CoopPlan2element.classList.remove("course");
     ECE209CoopPlan2element.classList.add("course-highlighted");
      ECE209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine254());
     ECE209CoopPlan2element.classList.remove("course-highlighted");
     ECE209CoopPlan2element.classList.add("course");
      ECE209CoopPlan2flag=false
  }
};
$scope.MATE202CoopPlan2Listener = function () {
  var MATE202CoopPlan2element = document.getElementById("MATE202CoopPlan2");
 if (!MATE202CoopPlan2flag) {
      that.addLine(getLine244());
      that.addLine(getLine272());
     MATE202CoopPlan2element.classList.remove("course");
     MATE202CoopPlan2element.classList.add("course-highlighted");
      MATE202CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine244());
      that.removeLine(getLine272());
     MATE202CoopPlan2element.classList.remove("course-highlighted");
     MATE202CoopPlan2element.classList.add("course");
      MATE202CoopPlan2flag=false
  }
};
$scope.MATH201CoopPlan2Listener = function () {
  var MATH201CoopPlan2element = document.getElementById("MATH201CoopPlan2");
 if (!MATH201CoopPlan2flag) {
      that.addLine(getLine245());
      that.addLine(getLine251());
      that.addLine(getLine277());
      that.addLine(getLine294());
     MATH201CoopPlan2element.classList.remove("course");
     MATH201CoopPlan2element.classList.add("course-highlighted");
      MATH201CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine245());
      that.removeLine(getLine251());
      that.removeLine(getLine277());
      that.removeLine(getLine294());
     MATH201CoopPlan2element.classList.remove("course-highlighted");
     MATH201CoopPlan2element.classList.add("course");
      MATH201CoopPlan2flag=false
  }
};
$scope.MECE230CoopPlan2Listener = function () {
  var MECE230CoopPlan2element = document.getElementById("MECE230CoopPlan2");
 if (!MECE230CoopPlan2flag) {
      that.addLine(getLine246());
      that.addLine(getLine247());
      that.addLine(getLine258());
      that.addLine(getLine262());
     MECE230CoopPlan2element.classList.remove("course");
     MECE230CoopPlan2element.classList.add("course-highlighted");
      MECE230CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine246());
      that.removeLine(getLine247());
      that.removeLine(getLine258());
      that.removeLine(getLine262());
     MECE230CoopPlan2element.classList.remove("course-highlighted");
     MECE230CoopPlan2element.classList.add("course");
      MECE230CoopPlan2flag=false
  }
};
$scope.MECE260CoopPlan2Listener = function () {
  var MECE260CoopPlan2element = document.getElementById("MECE260CoopPlan2");
 if (!MECE260CoopPlan2flag) {
      that.addLine(getLine248());
      that.addLine(getLine249());
      that.addLine(getLine250());
      that.addLine(getLine270());
     MECE260CoopPlan2element.classList.remove("course");
     MECE260CoopPlan2element.classList.add("course-highlighted");
      MECE260CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine248());
      that.removeLine(getLine249());
      that.removeLine(getLine250());
      that.removeLine(getLine270());
     MECE260CoopPlan2element.classList.remove("course-highlighted");
     MECE260CoopPlan2element.classList.add("course");
      MECE260CoopPlan2flag=false
  }
};
$scope.MECE265CoopPlan2Listener = function () {
  var MECE265CoopPlan2element = document.getElementById("MECE265CoopPlan2");
 if (!MECE265CoopPlan2flag) {
      that.addLine(getLine250());
      that.addLine(getLine271());
     MECE265CoopPlan2element.classList.remove("course");
     MECE265CoopPlan2element.classList.add("course-highlighted");
      MECE265CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine250());
      that.removeLine(getLine271());
     MECE265CoopPlan2element.classList.remove("course-highlighted");
     MECE265CoopPlan2element.classList.add("course");
      MECE265CoopPlan2flag=false
  }
};
$scope.MATH300CoopPlan2Listener = function () {
  var MATH300CoopPlan2element = document.getElementById("MATH300CoopPlan2");
 if (!MATH300CoopPlan2flag) {
      that.addLine(getLine251());
      that.addLine(getLine252());
      that.addLine(getLine264());
      that.addLine(getLine284());
     MATH300CoopPlan2element.classList.remove("course");
     MATH300CoopPlan2element.classList.add("course-highlighted");
      MATH300CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine251());
      that.removeLine(getLine252());
      that.removeLine(getLine264());
      that.removeLine(getLine284());
     MATH300CoopPlan2element.classList.remove("course-highlighted");
     MATH300CoopPlan2element.classList.add("course");
      MATH300CoopPlan2flag=false
  }
};
$scope.MECE300CoopPlan2Listener = function () {
  var MECE300CoopPlan2element = document.getElementById("MECE300CoopPlan2");
 if (!MECE300CoopPlan2flag) {
      that.addLine(getLine253());
      that.addLine(getLine254());
      that.addLine(getLine255());
      that.addLine(getLine256());
      that.addLine(getLine257());
      that.addLine(getLine279());
     MECE300CoopPlan2element.classList.remove("course");
     MECE300CoopPlan2element.classList.add("course-highlighted");
      MECE300CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine253());
      that.removeLine(getLine254());
      that.removeLine(getLine255());
      that.removeLine(getLine256());
      that.removeLine(getLine257());
      that.removeLine(getLine279());
     MECE300CoopPlan2element.classList.remove("course-highlighted");
     MECE300CoopPlan2element.classList.add("course");
      MECE300CoopPlan2flag=false
  }
};
$scope.MECE301CoopPlan2Listener = function () {
  var MECE301CoopPlan2element = document.getElementById("MECE301CoopPlan2");
 if (!MECE301CoopPlan2flag) {
      that.addLine(getLine257());
      that.addLine(getLine280());
     MECE301CoopPlan2element.classList.remove("course");
     MECE301CoopPlan2element.classList.add("course-highlighted");
      MECE301CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine257());
      that.removeLine(getLine280());
     MECE301CoopPlan2element.classList.remove("course-highlighted");
     MECE301CoopPlan2element.classList.add("course");
      MECE301CoopPlan2flag=false
  }
};
$scope.MECE331CoopPlan2Listener = function () {
  var MECE331CoopPlan2element = document.getElementById("MECE331CoopPlan2");
 if (!MECE331CoopPlan2flag) {
      that.addLine(getLine256());
      that.addLine(getLine258());
      that.addLine(getLine259());
      that.addLine(getLine260());
      that.addLine(getLine261());
      that.addLine(getLine265());
      that.addLine(getLine286());
      that.addLine(getLine296());
      that.addLine(getLine298());
      that.addLine(getLine299());
     MECE331CoopPlan2element.classList.remove("course");
     MECE331CoopPlan2element.classList.add("course-highlighted");
      MECE331CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine256());
      that.removeLine(getLine258());
      that.removeLine(getLine259());
      that.removeLine(getLine260());
      that.removeLine(getLine261());
      that.removeLine(getLine265());
      that.removeLine(getLine286());
      that.removeLine(getLine296());
      that.removeLine(getLine298());
      that.removeLine(getLine299());
     MECE331CoopPlan2element.classList.remove("course-highlighted");
     MECE331CoopPlan2element.classList.add("course");
      MECE331CoopPlan2flag=false
  }
};
$scope.MECE371CoopPlan2Listener = function () {
  var MECE371CoopPlan2element = document.getElementById("MECE371CoopPlan2");
 if (!MECE371CoopPlan2flag) {
      that.addLine(getLine262());
      that.addLine(getLine263());
      that.addLine(getLine264());
      that.addLine(getLine265());
      that.addLine(getLine290());
      that.addLine(getLine297());
      that.addLine(getLine301());
     MECE371CoopPlan2element.classList.remove("course");
     MECE371CoopPlan2element.classList.add("course-highlighted");
      MECE371CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine262());
      that.removeLine(getLine263());
      that.removeLine(getLine264());
      that.removeLine(getLine265());
      that.removeLine(getLine290());
      that.removeLine(getLine297());
      that.removeLine(getLine301());
     MECE371CoopPlan2element.classList.remove("course-highlighted");
     MECE371CoopPlan2element.classList.add("course");
      MECE371CoopPlan2flag=false
  }
};
$scope.MECE380CoopPlan2Listener = function () {
  var MECE380CoopPlan2element = document.getElementById("MECE380CoopPlan2");
 if (!MECE380CoopPlan2flag) {
      that.addLine(getLine266());
      that.addLine(getLine291());
     MECE380CoopPlan2element.classList.remove("course");
     MECE380CoopPlan2element.classList.add("course-highlighted");
      MECE380CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine266());
      that.removeLine(getLine291());
     MECE380CoopPlan2element.classList.remove("course-highlighted");
     MECE380CoopPlan2element.classList.add("course");
      MECE380CoopPlan2flag=false
  }
};
$scope.WKEXP902CoopPlan2Listener = function () {
  var WKEXP902CoopPlan2element = document.getElementById("WKEXP902CoopPlan2");
 if (!WKEXP902CoopPlan2flag) {
      that.addLine(getLine267());
      that.addLine(getLine268());
     WKEXP902CoopPlan2element.classList.remove("course");
     WKEXP902CoopPlan2element.classList.add("course-highlighted");
      WKEXP902CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine267());
      that.removeLine(getLine268());
     WKEXP902CoopPlan2element.classList.remove("course-highlighted");
     WKEXP902CoopPlan2element.classList.add("course");
      WKEXP902CoopPlan2flag=false
  }
};
$scope.WKEXP903CoopPlan2Listener = function () {
  var WKEXP903CoopPlan2element = document.getElementById("WKEXP903CoopPlan2");
 if (!WKEXP903CoopPlan2flag) {
      that.addLine(getLine268());
      that.addLine(getLine278());
     WKEXP903CoopPlan2element.classList.remove("course");
     WKEXP903CoopPlan2element.classList.add("course-highlighted");
      WKEXP903CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine268());
      that.removeLine(getLine278());
     WKEXP903CoopPlan2element.classList.remove("course-highlighted");
     WKEXP903CoopPlan2element.classList.add("course");
      WKEXP903CoopPlan2flag=false
  }
};
$scope.ENGM310CoopPlan2Listener = function () {
  var ENGM310CoopPlan2element = document.getElementById("ENGM310CoopPlan2");
 if (!ENGM310CoopPlan2flag) {
      that.addLine(getLine292());
     ENGM310CoopPlan2element.classList.remove("course");
     ENGM310CoopPlan2element.classList.add("course-highlighted");
      ENGM310CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine292());
     ENGM310CoopPlan2element.classList.remove("course-highlighted");
     ENGM310CoopPlan2element.classList.add("course");
      ENGM310CoopPlan2flag=false
  }
};
$scope.MECE340CoopPlan2Listener = function () {
  var MECE340CoopPlan2element = document.getElementById("MECE340CoopPlan2");
 if (!MECE340CoopPlan2flag) {
      that.addLine(getLine269());
      that.addLine(getLine281());
      that.addLine(getLine287());
      that.addLine(getLine300());
     MECE340CoopPlan2element.classList.remove("course");
     MECE340CoopPlan2element.classList.add("course-highlighted");
      MECE340CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine269());
      that.removeLine(getLine281());
      that.removeLine(getLine287());
      that.removeLine(getLine300());
     MECE340CoopPlan2element.classList.remove("course-highlighted");
     MECE340CoopPlan2element.classList.add("course");
      MECE340CoopPlan2flag=false
  }
};
$scope.MECE360CoopPlan2Listener = function () {
  var MECE360CoopPlan2element = document.getElementById("MECE360CoopPlan2");
 if (!MECE360CoopPlan2flag) {
      that.addLine(getLine270());
      that.addLine(getLine271());
      that.addLine(getLine272());
      that.addLine(getLine273());
      that.addLine(getLine274());
      that.addLine(getLine282());
      that.addLine(getLine288());
     MECE360CoopPlan2element.classList.remove("course");
     MECE360CoopPlan2element.classList.add("course-highlighted");
      MECE360CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine270());
      that.removeLine(getLine271());
      that.removeLine(getLine272());
      that.removeLine(getLine273());
      that.removeLine(getLine274());
      that.removeLine(getLine282());
      that.removeLine(getLine288());
     MECE360CoopPlan2element.classList.remove("course-highlighted");
     MECE360CoopPlan2element.classList.add("course");
      MECE360CoopPlan2flag=false
  }
};
$scope.MECE362CoopPlan2Listener = function () {
  var MECE362CoopPlan2element = document.getElementById("MECE362CoopPlan2");
 if (!MECE362CoopPlan2flag) {
      that.addLine(getLine274());
      that.addLine(getLine275());
      that.addLine(getLine289());
     MECE362CoopPlan2element.classList.remove("course");
     MECE362CoopPlan2element.classList.add("course-highlighted");
      MECE362CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine274());
      that.removeLine(getLine275());
      that.removeLine(getLine289());
     MECE362CoopPlan2element.classList.remove("course-highlighted");
     MECE362CoopPlan2element.classList.add("course");
      MECE362CoopPlan2flag=false
  }
};
$scope.MECE390CoopPlan2Listener = function () {
  var MECE390CoopPlan2element = document.getElementById("MECE390CoopPlan2");
 if (!MECE390CoopPlan2flag) {
      that.addLine(getLine276());
      that.addLine(getLine277());
     MECE390CoopPlan2element.classList.remove("course");
     MECE390CoopPlan2element.classList.add("course-highlighted");
      MECE390CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine276());
      that.removeLine(getLine277());
     MECE390CoopPlan2element.classList.remove("course-highlighted");
     MECE390CoopPlan2element.classList.add("course");
      MECE390CoopPlan2flag=false
  }
};
$scope.WKEXP904CoopPlan2Listener = function () {
  var WKEXP904CoopPlan2element = document.getElementById("WKEXP904CoopPlan2");
 if (!WKEXP904CoopPlan2flag) {
      that.addLine(getLine278());
      that.addLine(getLine293());
     WKEXP904CoopPlan2element.classList.remove("course");
     WKEXP904CoopPlan2element.classList.add("course-highlighted");
      WKEXP904CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine278());
      that.removeLine(getLine293());
     WKEXP904CoopPlan2element.classList.remove("course-highlighted");
     WKEXP904CoopPlan2element.classList.add("course");
      WKEXP904CoopPlan2flag=false
  }
};
$scope.MECE403CoopPlan2Listener = function () {
  var MECE403CoopPlan2element = document.getElementById("MECE403CoopPlan2");
 if (!MECE403CoopPlan2flag) {
      that.addLine(getLine279());
      that.addLine(getLine280());
      that.addLine(getLine281());
      that.addLine(getLine282());
     MECE403CoopPlan2element.classList.remove("course");
     MECE403CoopPlan2element.classList.add("course-highlighted");
      MECE403CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine279());
      that.removeLine(getLine280());
      that.removeLine(getLine281());
      that.removeLine(getLine282());
     MECE403CoopPlan2element.classList.remove("course-highlighted");
     MECE403CoopPlan2element.classList.add("course");
      MECE403CoopPlan2flag=false
  }
};
$scope.MECE451CoopPlan2Listener = function () {
  var MECE451CoopPlan2element = document.getElementById("MECE451CoopPlan2");
 if (!MECE451CoopPlan2flag) {
      that.addLine(getLine283());
      that.addLine(getLine284());
     MECE451CoopPlan2element.classList.remove("course");
     MECE451CoopPlan2element.classList.add("course-highlighted");
      MECE451CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine283());
      that.removeLine(getLine284());
     MECE451CoopPlan2element.classList.remove("course-highlighted");
     MECE451CoopPlan2element.classList.add("course");
      MECE451CoopPlan2flag=false
  }
};
$scope.MECE460CoopPlan2Listener = function () {
  var MECE460CoopPlan2element = document.getElementById("MECE460CoopPlan2");
 if (!MECE460CoopPlan2flag) {
      that.addLine(getLine285());
      that.addLine(getLine286());
      that.addLine(getLine287());
      that.addLine(getLine288());
      that.addLine(getLine289());
      that.addLine(getLine290());
      that.addLine(getLine291());
      that.addLine(getLine292());
     MECE460CoopPlan2element.classList.remove("course");
     MECE460CoopPlan2element.classList.add("course-highlighted");
      MECE460CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine285());
      that.removeLine(getLine286());
      that.removeLine(getLine287());
      that.removeLine(getLine288());
      that.removeLine(getLine289());
      that.removeLine(getLine290());
      that.removeLine(getLine291());
      that.removeLine(getLine292());
     MECE460CoopPlan2element.classList.remove("course-highlighted");
     MECE460CoopPlan2element.classList.add("course");
      MECE460CoopPlan2flag=false
  }
};
$scope.WKEXP905CoopPlan2Listener = function () {
  var WKEXP905CoopPlan2element = document.getElementById("WKEXP905CoopPlan2");
 if (!WKEXP905CoopPlan2flag) {
      that.addLine(getLine293());
     WKEXP905CoopPlan2element.classList.remove("course");
     WKEXP905CoopPlan2element.classList.add("course-highlighted");
      WKEXP905CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine293());
     WKEXP905CoopPlan2element.classList.remove("course-highlighted");
     WKEXP905CoopPlan2element.classList.add("course");
      WKEXP905CoopPlan2flag=false
  }
};
$scope.CHE448CoopPlan2Listener = function () {
  var CHE448CoopPlan2element = document.getElementById("CHE448CoopPlan2");
 if (!CHE448CoopPlan2flag) {
      that.addLine(getLine294());
      that.addLine(getLine295());
      that.addLine(getLine296());
      that.addLine(getLine297());
     CHE448CoopPlan2element.classList.remove("course");
     CHE448CoopPlan2element.classList.add("course-highlighted");
      CHE448CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine294());
      that.removeLine(getLine295());
      that.removeLine(getLine296());
      that.removeLine(getLine297());
     CHE448CoopPlan2element.classList.remove("course-highlighted");
     CHE448CoopPlan2element.classList.add("course");
      CHE448CoopPlan2flag=false
  }
};
$scope.MECE430CoopPlan2Listener = function () {
  var MECE430CoopPlan2element = document.getElementById("MECE430CoopPlan2");
 if (!MECE430CoopPlan2flag) {
      that.addLine(getLine298());
     MECE430CoopPlan2element.classList.remove("course");
     MECE430CoopPlan2element.classList.add("course-highlighted");
      MECE430CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine298());
     MECE430CoopPlan2element.classList.remove("course-highlighted");
     MECE430CoopPlan2element.classList.add("course");
      MECE430CoopPlan2flag=false
  }
};
$scope.MECE463CoopPlan2Listener = function () {
  var MECE463CoopPlan2element = document.getElementById("MECE463CoopPlan2");
 if (!MECE463CoopPlan2flag) {
      that.addLine(getLine299());
      that.addLine(getLine300());
      that.addLine(getLine301());
     MECE463CoopPlan2element.classList.remove("course");
     MECE463CoopPlan2element.classList.add("course-highlighted");
      MECE463CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine299());
      that.removeLine(getLine300());
      that.removeLine(getLine301());
     MECE463CoopPlan2element.classList.remove("course-highlighted");
     MECE463CoopPlan2element.classList.add("course");
      MECE463CoopPlan2flag=false
  }
};
  var CHEM103CoopPlan3Biomedicalflag = false;
  var ENGG100CoopPlan3Biomedicalflag = false;
  var ENGG130CoopPlan3Biomedicalflag = false;
  var ENGL199CoopPlan3Biomedicalflag = false;
  var MATH100CoopPlan3Biomedicalflag = false;
  var PHYS130CoopPlan3Biomedicalflag = false;
  var CHEM105CoopPlan3Biomedicalflag = false;
  var ENCMP100CoopPlan3Biomedicalflag = false;
  var ENGG160CoopPlan3Biomedicalflag = false;
  var ENPH131CoopPlan3Biomedicalflag = false;
  var MATH101CoopPlan3Biomedicalflag = false;
  var MATH102CoopPlan3Biomedicalflag = false;
  var CIVE270CoopPlan3Biomedicalflag = false;
  var ENGG299CoopPlan3Biomedicalflag = false;
  var MATH209CoopPlan3Biomedicalflag = false;
  var STAT235CoopPlan3Biomedicalflag = false;
  var CHE243CoopPlan3Biomedicalflag = false;
  var MECE200CoopPlan3Biomedicalflag = false;
  var MECE250CoopPlan3Biomedicalflag = false;
  var ECE209CoopPlan3Biomedicalflag = false;
  var MATE202CoopPlan3Biomedicalflag = false;
  var MATH201CoopPlan3Biomedicalflag = false;
  var MECE230CoopPlan3Biomedicalflag = false;
  var MECE260CoopPlan3Biomedicalflag = false;
  var MECE265CoopPlan3Biomedicalflag = false;
  var WKEXP902CoopPlan3Biomedicalflag = false;
  var BME320CoopPlan3Biomedicalflag = false;
  var ENGM310CoopPlan3Biomedicalflag = false;
  var MECE340CoopPlan3Biomedicalflag = false;
  var MECE360CoopPlan3Biomedicalflag = false;
  var MECE362CoopPlan3Biomedicalflag = false;
  var MECE390CoopPlan3Biomedicalflag = false;
  var WKEXP903CoopPlan3Biomedicalflag = false;
  var MATH300CoopPlan3Biomedicalflag = false;
  var MECE300CoopPlan3Biomedicalflag = false;
  var MECE301CoopPlan3Biomedicalflag = false;
  var MECE331CoopPlan3Biomedicalflag = false;
  var MECE371CoopPlan3Biomedicalflag = false;
  var MECE380CoopPlan3Biomedicalflag = false;
  var BME321CoopPlan3Biomedicalflag = false;
  var ENGG404CoopPlan3Biomedicalflag = false;
  var MECE563CoopPlan3Biomedicalflag = false;
  var STAT337CoopPlan3Biomedicalflag = false;
  var ComplementaryElectiveCoopPlan3Biomedicalflag = false;
  var ProgramTechnicalElectiveCoopPlan3Biomedicalflag = false;
  var WKEXP904CoopPlan3Biomedicalflag = false;
  var WKEXP905CoopPlan3Biomedicalflag = false;
  var MECE430CoopPlan3Biomedicalflag = false;
  var MECE463CoopPlan3Biomedicalflag = false;
  var ProgramTechnicalElectiveCoopPlan3Biomedicalflag = false;
  var ProgramTechnicalElectiveCoopPlan3Biomedicalflag = false;
  var ITSElectiveCoopPlan3Biomedicalflag = false;
  var CHE448CoopPlan3Biomedicalflag = false;
  var ENGG400CoopPlan3Biomedicalflag = false;
  var MECE485CoopPlan3Biomedicalflag = false;
  var MECE403CoopPlan3Biomedicalflag = false;
  var MECE451CoopPlan3Biomedicalflag = false;
  var MECE460CoopPlan3Biomedicalflag = false;
  var PHIL386CoopPlan3Biomedicalflag = false;
$scope.CHEM103CoopPlan3BiomedicalListener = function () {
  var CHEM103CoopPlan3Biomedicalelement = document.getElementById("CHEM103CoopPlan3Biomedical");
 if (!CHEM103CoopPlan3Biomedicalflag) {
      that.addLine(getLine304());
     CHEM103CoopPlan3Biomedicalelement.classList.remove("course");
     CHEM103CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      CHEM103CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine304());
     CHEM103CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     CHEM103CoopPlan3Biomedicalelement.classList.add("course");
      CHEM103CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG130CoopPlan3BiomedicalListener = function () {
  var ENGG130CoopPlan3Biomedicalelement = document.getElementById("ENGG130CoopPlan3Biomedical");
 if (!ENGG130CoopPlan3Biomedicalflag) {
      that.addLine(getLine302());
      that.addLine(getLine307());
      that.addLine(getLine311());
      that.addLine(getLine318());
     ENGG130CoopPlan3Biomedicalelement.classList.remove("course");
     ENGG130CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      ENGG130CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine302());
      that.removeLine(getLine307());
      that.removeLine(getLine311());
      that.removeLine(getLine318());
     ENGG130CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     ENGG130CoopPlan3Biomedicalelement.classList.add("course");
      ENGG130CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGL199CoopPlan3BiomedicalListener = function () {
  var ENGL199CoopPlan3Biomedicalelement = document.getElementById("ENGL199CoopPlan3Biomedical");
 if (!ENGL199CoopPlan3Biomedicalflag) {
      that.addLine(getLine305());
     ENGL199CoopPlan3Biomedicalelement.classList.remove("course");
     ENGL199CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      ENGL199CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine305());
     ENGL199CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     ENGL199CoopPlan3Biomedicalelement.classList.add("course");
      ENGL199CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH100CoopPlan3BiomedicalListener = function () {
  var MATH100CoopPlan3Biomedicalelement = document.getElementById("MATH100CoopPlan3Biomedical");
 if (!MATH100CoopPlan3Biomedicalflag) {
      that.addLine(getLine302());
      that.addLine(getLine303());
      that.addLine(getLine306());
      that.addLine(getLine309());
      that.addLine(getLine310());
      that.addLine(getLine315());
     MATH100CoopPlan3Biomedicalelement.classList.remove("course");
     MATH100CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MATH100CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine302());
      that.removeLine(getLine303());
      that.removeLine(getLine306());
      that.removeLine(getLine309());
      that.removeLine(getLine310());
      that.removeLine(getLine315());
     MATH100CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MATH100CoopPlan3Biomedicalelement.classList.add("course");
      MATH100CoopPlan3Biomedicalflag=false
  }
};
$scope.PHYS130CoopPlan3BiomedicalListener = function () {
  var PHYS130CoopPlan3Biomedicalelement = document.getElementById("PHYS130CoopPlan3Biomedical");
 if (!PHYS130CoopPlan3Biomedicalflag) {
      that.addLine(getLine303());
     PHYS130CoopPlan3Biomedicalelement.classList.remove("course");
     PHYS130CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      PHYS130CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine303());
     PHYS130CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     PHYS130CoopPlan3Biomedicalelement.classList.add("course");
      PHYS130CoopPlan3Biomedicalflag=false
  }
};
$scope.CHEM105CoopPlan3BiomedicalListener = function () {
  var CHEM105CoopPlan3Biomedicalelement = document.getElementById("CHEM105CoopPlan3Biomedical");
 if (!CHEM105CoopPlan3Biomedicalflag) {
      that.addLine(getLine304());
      that.addLine(getLine321());
     CHEM105CoopPlan3Biomedicalelement.classList.remove("course");
     CHEM105CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      CHEM105CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine304());
      that.removeLine(getLine321());
     CHEM105CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     CHEM105CoopPlan3Biomedicalelement.classList.add("course");
      CHEM105CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG160CoopPlan3BiomedicalListener = function () {
  var ENGG160CoopPlan3Biomedicalelement = document.getElementById("ENGG160CoopPlan3Biomedical");
 if (!ENGG160CoopPlan3Biomedicalflag) {
      that.addLine(getLine305());
      that.addLine(getLine325());
     ENGG160CoopPlan3Biomedicalelement.classList.remove("course");
     ENGG160CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      ENGG160CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine305());
      that.removeLine(getLine325());
     ENGG160CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     ENGG160CoopPlan3Biomedicalelement.classList.add("course");
      ENGG160CoopPlan3Biomedicalflag=false
  }
};
$scope.ENPH131CoopPlan3BiomedicalListener = function () {
  var ENPH131CoopPlan3Biomedicalelement = document.getElementById("ENPH131CoopPlan3Biomedical");
 if (!ENPH131CoopPlan3Biomedicalflag) {
      that.addLine(getLine306());
      that.addLine(getLine307());
      that.addLine(getLine308());
      that.addLine(getLine319());
      that.addLine(getLine324());
     ENPH131CoopPlan3Biomedicalelement.classList.remove("course");
     ENPH131CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      ENPH131CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine306());
      that.removeLine(getLine307());
      that.removeLine(getLine308());
      that.removeLine(getLine319());
      that.removeLine(getLine324());
     ENPH131CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     ENPH131CoopPlan3Biomedicalelement.classList.add("course");
      ENPH131CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH101CoopPlan3BiomedicalListener = function () {
  var MATH101CoopPlan3Biomedicalelement = document.getElementById("MATH101CoopPlan3Biomedical");
 if (!MATH101CoopPlan3Biomedicalflag) {
      that.addLine(getLine308());
      that.addLine(getLine309());
      that.addLine(getLine312());
      that.addLine(getLine313());
      that.addLine(getLine316());
      that.addLine(getLine317());
      that.addLine(getLine320());
      that.addLine(getLine323());
     MATH101CoopPlan3Biomedicalelement.classList.remove("course");
     MATH101CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MATH101CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine308());
      that.removeLine(getLine309());
      that.removeLine(getLine312());
      that.removeLine(getLine313());
      that.removeLine(getLine316());
      that.removeLine(getLine317());
      that.removeLine(getLine320());
      that.removeLine(getLine323());
     MATH101CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MATH101CoopPlan3Biomedicalelement.classList.add("course");
      MATH101CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH102CoopPlan3BiomedicalListener = function () {
  var MATH102CoopPlan3Biomedicalelement = document.getElementById("MATH102CoopPlan3Biomedical");
 if (!MATH102CoopPlan3Biomedicalflag) {
      that.addLine(getLine310());
      that.addLine(getLine314());
      that.addLine(getLine335());
     MATH102CoopPlan3Biomedicalelement.classList.remove("course");
     MATH102CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MATH102CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine310());
      that.removeLine(getLine314());
      that.removeLine(getLine335());
     MATH102CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MATH102CoopPlan3Biomedicalelement.classList.add("course");
      MATH102CoopPlan3Biomedicalflag=false
  }
};
$scope.CIVE270CoopPlan3BiomedicalListener = function () {
  var CIVE270CoopPlan3Biomedicalelement = document.getElementById("CIVE270CoopPlan3Biomedical");
 if (!CIVE270CoopPlan3Biomedicalflag) {
      that.addLine(getLine311());
      that.addLine(getLine312());
      that.addLine(getLine326());
      that.addLine(getLine332());
      that.addLine(getLine340());
      that.addLine(getLine353());
     CIVE270CoopPlan3Biomedicalelement.classList.remove("course");
     CIVE270CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      CIVE270CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine311());
      that.removeLine(getLine312());
      that.removeLine(getLine326());
      that.removeLine(getLine332());
      that.removeLine(getLine340());
      that.removeLine(getLine353());
     CIVE270CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     CIVE270CoopPlan3Biomedicalelement.classList.add("course");
      CIVE270CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH209CoopPlan3BiomedicalListener = function () {
  var MATH209CoopPlan3Biomedicalelement = document.getElementById("MATH209CoopPlan3Biomedical");
 if (!MATH209CoopPlan3Biomedicalflag) {
      that.addLine(getLine313());
      that.addLine(getLine314());
      that.addLine(getLine322());
      that.addLine(getLine339());
      that.addLine(getLine347());
      that.addLine(getLine365());
     MATH209CoopPlan3Biomedicalelement.classList.remove("course");
     MATH209CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MATH209CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine313());
      that.removeLine(getLine314());
      that.removeLine(getLine322());
      that.removeLine(getLine339());
      that.removeLine(getLine347());
      that.removeLine(getLine365());
     MATH209CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MATH209CoopPlan3Biomedicalelement.classList.add("course");
      MATH209CoopPlan3Biomedicalflag=false
  }
};
$scope.STAT235CoopPlan3BiomedicalListener = function () {
  var STAT235CoopPlan3Biomedicalelement = document.getElementById("STAT235CoopPlan3Biomedical");
 if (!STAT235CoopPlan3Biomedicalflag) {
      that.addLine(getLine315());
      that.addLine(getLine316());
      that.addLine(getLine342());
     STAT235CoopPlan3Biomedicalelement.classList.remove("course");
     STAT235CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      STAT235CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine315());
      that.removeLine(getLine316());
      that.removeLine(getLine342());
     STAT235CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     STAT235CoopPlan3Biomedicalelement.classList.add("course");
      STAT235CoopPlan3Biomedicalflag=false
  }
};
$scope.CHE243CoopPlan3BiomedicalListener = function () {
  var CHE243CoopPlan3Biomedicalelement = document.getElementById("CHE243CoopPlan3Biomedical");
 if (!CHE243CoopPlan3Biomedicalflag) {
      that.addLine(getLine317());
      that.addLine(getLine328());
      that.addLine(getLine348());
      that.addLine(getLine350());
     CHE243CoopPlan3Biomedicalelement.classList.remove("course");
     CHE243CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      CHE243CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine317());
      that.removeLine(getLine328());
      that.removeLine(getLine348());
      that.removeLine(getLine350());
     CHE243CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     CHE243CoopPlan3Biomedicalelement.classList.add("course");
      CHE243CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE200CoopPlan3BiomedicalListener = function () {
  var MECE200CoopPlan3Biomedicalelement = document.getElementById("MECE200CoopPlan3Biomedical");
 if (!MECE200CoopPlan3Biomedicalflag) {
      that.addLine(getLine377());
     MECE200CoopPlan3Biomedicalelement.classList.remove("course");
     MECE200CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE200CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine377());
     MECE200CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE200CoopPlan3Biomedicalelement.classList.add("course");
      MECE200CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE250CoopPlan3BiomedicalListener = function () {
  var MECE250CoopPlan3Biomedicalelement = document.getElementById("MECE250CoopPlan3Biomedical");
 if (!MECE250CoopPlan3Biomedicalflag) {
      that.addLine(getLine318());
      that.addLine(getLine319());
      that.addLine(getLine320());
      that.addLine(getLine334());
      that.addLine(getLine346());
      that.addLine(getLine375());
     MECE250CoopPlan3Biomedicalelement.classList.remove("course");
     MECE250CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE250CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine318());
      that.removeLine(getLine319());
      that.removeLine(getLine320());
      that.removeLine(getLine334());
      that.removeLine(getLine346());
      that.removeLine(getLine375());
     MECE250CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE250CoopPlan3Biomedicalelement.classList.add("course");
      MECE250CoopPlan3Biomedicalflag=false
  }
};
$scope.ECE209CoopPlan3BiomedicalListener = function () {
  var ECE209CoopPlan3Biomedicalelement = document.getElementById("ECE209CoopPlan3Biomedical");
 if (!ECE209CoopPlan3Biomedicalflag) {
      that.addLine(getLine341());
     ECE209CoopPlan3Biomedicalelement.classList.remove("course");
     ECE209CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      ECE209CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine341());
     ECE209CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     ECE209CoopPlan3Biomedicalelement.classList.add("course");
      ECE209CoopPlan3Biomedicalflag=false
  }
};
$scope.MATE202CoopPlan3BiomedicalListener = function () {
  var MATE202CoopPlan3Biomedicalelement = document.getElementById("MATE202CoopPlan3Biomedical");
 if (!MATE202CoopPlan3Biomedicalflag) {
      that.addLine(getLine321());
      that.addLine(getLine331());
     MATE202CoopPlan3Biomedicalelement.classList.remove("course");
     MATE202CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MATE202CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine321());
      that.removeLine(getLine331());
     MATE202CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MATE202CoopPlan3Biomedicalelement.classList.add("course");
      MATE202CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH201CoopPlan3BiomedicalListener = function () {
  var MATH201CoopPlan3Biomedicalelement = document.getElementById("MATH201CoopPlan3Biomedical");
 if (!MATH201CoopPlan3Biomedicalflag) {
      that.addLine(getLine322());
      that.addLine(getLine336());
      that.addLine(getLine338());
      that.addLine(getLine364());
     MATH201CoopPlan3Biomedicalelement.classList.remove("course");
     MATH201CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MATH201CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine322());
      that.removeLine(getLine336());
      that.removeLine(getLine338());
      that.removeLine(getLine364());
     MATH201CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MATH201CoopPlan3Biomedicalelement.classList.add("course");
      MATH201CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE230CoopPlan3BiomedicalListener = function () {
  var MECE230CoopPlan3Biomedicalelement = document.getElementById("MECE230CoopPlan3Biomedical");
 if (!MECE230CoopPlan3Biomedicalflag) {
      that.addLine(getLine323());
      that.addLine(getLine324());
      that.addLine(getLine345());
      that.addLine(getLine349());
     MECE230CoopPlan3Biomedicalelement.classList.remove("course");
     MECE230CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE230CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine323());
      that.removeLine(getLine324());
      that.removeLine(getLine345());
      that.removeLine(getLine349());
     MECE230CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE230CoopPlan3Biomedicalelement.classList.add("course");
      MECE230CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE260CoopPlan3BiomedicalListener = function () {
  var MECE260CoopPlan3Biomedicalelement = document.getElementById("MECE260CoopPlan3Biomedical");
 if (!MECE260CoopPlan3Biomedicalflag) {
      that.addLine(getLine325());
      that.addLine(getLine326());
      that.addLine(getLine327());
      that.addLine(getLine329());
     MECE260CoopPlan3Biomedicalelement.classList.remove("course");
     MECE260CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE260CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine325());
      that.removeLine(getLine326());
      that.removeLine(getLine327());
      that.removeLine(getLine329());
     MECE260CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE260CoopPlan3Biomedicalelement.classList.add("course");
      MECE260CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE265CoopPlan3BiomedicalListener = function () {
  var MECE265CoopPlan3Biomedicalelement = document.getElementById("MECE265CoopPlan3Biomedical");
 if (!MECE265CoopPlan3Biomedicalflag) {
      that.addLine(getLine327());
      that.addLine(getLine330());
     MECE265CoopPlan3Biomedicalelement.classList.remove("course");
     MECE265CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE265CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine327());
      that.removeLine(getLine330());
     MECE265CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE265CoopPlan3Biomedicalelement.classList.add("course");
      MECE265CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP902CoopPlan3BiomedicalListener = function () {
  var WKEXP902CoopPlan3Biomedicalelement = document.getElementById("WKEXP902CoopPlan3Biomedical");
 if (!WKEXP902CoopPlan3Biomedicalflag) {
      that.addLine(getLine337());
     WKEXP902CoopPlan3Biomedicalelement.classList.remove("course");
     WKEXP902CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      WKEXP902CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine337());
     WKEXP902CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     WKEXP902CoopPlan3Biomedicalelement.classList.add("course");
      WKEXP902CoopPlan3Biomedicalflag=false
  }
};
$scope.BME320CoopPlan3BiomedicalListener = function () {
  var BME320CoopPlan3Biomedicalelement = document.getElementById("BME320CoopPlan3Biomedical");
 if (!BME320CoopPlan3Biomedicalflag) {
      that.addLine(getLine354());
      that.addLine(getLine368());
     BME320CoopPlan3Biomedicalelement.classList.remove("course");
     BME320CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      BME320CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine354());
      that.removeLine(getLine368());
     BME320CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     BME320CoopPlan3Biomedicalelement.classList.add("course");
      BME320CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGM310CoopPlan3BiomedicalListener = function () {
  var ENGM310CoopPlan3Biomedicalelement = document.getElementById("ENGM310CoopPlan3Biomedical");
 if (!ENGM310CoopPlan3Biomedicalflag) {
      that.addLine(getLine384());
     ENGM310CoopPlan3Biomedicalelement.classList.remove("course");
     ENGM310CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      ENGM310CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine384());
     ENGM310CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     ENGM310CoopPlan3Biomedicalelement.classList.add("course");
      ENGM310CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE340CoopPlan3BiomedicalListener = function () {
  var MECE340CoopPlan3Biomedicalelement = document.getElementById("MECE340CoopPlan3Biomedical");
 if (!MECE340CoopPlan3Biomedicalflag) {
      that.addLine(getLine328());
      that.addLine(getLine362());
      that.addLine(getLine373());
      that.addLine(getLine379());
     MECE340CoopPlan3Biomedicalelement.classList.remove("course");
     MECE340CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE340CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine328());
      that.removeLine(getLine362());
      that.removeLine(getLine373());
      that.removeLine(getLine379());
     MECE340CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE340CoopPlan3Biomedicalelement.classList.add("course");
      MECE340CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE360CoopPlan3BiomedicalListener = function () {
  var MECE360CoopPlan3Biomedicalelement = document.getElementById("MECE360CoopPlan3Biomedical");
 if (!MECE360CoopPlan3Biomedicalflag) {
      that.addLine(getLine329());
      that.addLine(getLine330());
      that.addLine(getLine331());
      that.addLine(getLine332());
      that.addLine(getLine333());
      that.addLine(getLine356());
      that.addLine(getLine374());
      that.addLine(getLine380());
     MECE360CoopPlan3Biomedicalelement.classList.remove("course");
     MECE360CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE360CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine329());
      that.removeLine(getLine330());
      that.removeLine(getLine331());
      that.removeLine(getLine332());
      that.removeLine(getLine333());
      that.removeLine(getLine356());
      that.removeLine(getLine374());
      that.removeLine(getLine380());
     MECE360CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE360CoopPlan3Biomedicalelement.classList.add("course");
      MECE360CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE362CoopPlan3BiomedicalListener = function () {
  var MECE362CoopPlan3Biomedicalelement = document.getElementById("MECE362CoopPlan3Biomedical");
 if (!MECE362CoopPlan3Biomedicalflag) {
      that.addLine(getLine333());
      that.addLine(getLine334());
      that.addLine(getLine381());
     MECE362CoopPlan3Biomedicalelement.classList.remove("course");
     MECE362CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE362CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine333());
      that.removeLine(getLine334());
      that.removeLine(getLine381());
     MECE362CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE362CoopPlan3Biomedicalelement.classList.add("course");
      MECE362CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE390CoopPlan3BiomedicalListener = function () {
  var MECE390CoopPlan3Biomedicalelement = document.getElementById("MECE390CoopPlan3Biomedical");
 if (!MECE390CoopPlan3Biomedicalflag) {
      that.addLine(getLine335());
      that.addLine(getLine336());
      that.addLine(getLine357());
     MECE390CoopPlan3Biomedicalelement.classList.remove("course");
     MECE390CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE390CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine335());
      that.removeLine(getLine336());
      that.removeLine(getLine357());
     MECE390CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE390CoopPlan3Biomedicalelement.classList.add("course");
      MECE390CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP903CoopPlan3BiomedicalListener = function () {
  var WKEXP903CoopPlan3Biomedicalelement = document.getElementById("WKEXP903CoopPlan3Biomedical");
 if (!WKEXP903CoopPlan3Biomedicalflag) {
      that.addLine(getLine337());
      that.addLine(getLine358());
     WKEXP903CoopPlan3Biomedicalelement.classList.remove("course");
     WKEXP903CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      WKEXP903CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine337());
      that.removeLine(getLine358());
     WKEXP903CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     WKEXP903CoopPlan3Biomedicalelement.classList.add("course");
      WKEXP903CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH300CoopPlan3BiomedicalListener = function () {
  var MATH300CoopPlan3Biomedicalelement = document.getElementById("MATH300CoopPlan3Biomedical");
 if (!MATH300CoopPlan3Biomedicalflag) {
      that.addLine(getLine338());
      that.addLine(getLine339());
      that.addLine(getLine351());
      that.addLine(getLine355());
      that.addLine(getLine376());
     MATH300CoopPlan3Biomedicalelement.classList.remove("course");
     MATH300CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MATH300CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine338());
      that.removeLine(getLine339());
      that.removeLine(getLine351());
      that.removeLine(getLine355());
      that.removeLine(getLine376());
     MATH300CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MATH300CoopPlan3Biomedicalelement.classList.add("course");
      MATH300CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE300CoopPlan3BiomedicalListener = function () {
  var MECE300CoopPlan3Biomedicalelement = document.getElementById("MECE300CoopPlan3Biomedical");
 if (!MECE300CoopPlan3Biomedicalflag) {
      that.addLine(getLine340());
      that.addLine(getLine341());
      that.addLine(getLine342());
      that.addLine(getLine343());
      that.addLine(getLine344());
      that.addLine(getLine371());
     MECE300CoopPlan3Biomedicalelement.classList.remove("course");
     MECE300CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE300CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine340());
      that.removeLine(getLine341());
      that.removeLine(getLine342());
      that.removeLine(getLine343());
      that.removeLine(getLine344());
      that.removeLine(getLine371());
     MECE300CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE300CoopPlan3Biomedicalelement.classList.add("course");
      MECE300CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE301CoopPlan3BiomedicalListener = function () {
  var MECE301CoopPlan3Biomedicalelement = document.getElementById("MECE301CoopPlan3Biomedical");
 if (!MECE301CoopPlan3Biomedicalflag) {
      that.addLine(getLine344());
      that.addLine(getLine372());
     MECE301CoopPlan3Biomedicalelement.classList.remove("course");
     MECE301CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE301CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine344());
      that.removeLine(getLine372());
     MECE301CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE301CoopPlan3Biomedicalelement.classList.add("course");
      MECE301CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE331CoopPlan3BiomedicalListener = function () {
  var MECE331CoopPlan3Biomedicalelement = document.getElementById("MECE331CoopPlan3Biomedical");
 if (!MECE331CoopPlan3Biomedicalflag) {
      that.addLine(getLine343());
      that.addLine(getLine345());
      that.addLine(getLine346());
      that.addLine(getLine347());
      that.addLine(getLine348());
      that.addLine(getLine352());
      that.addLine(getLine360());
      that.addLine(getLine361());
      that.addLine(getLine366());
      that.addLine(getLine370());
      that.addLine(getLine378());
     MECE331CoopPlan3Biomedicalelement.classList.remove("course");
     MECE331CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE331CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine343());
      that.removeLine(getLine345());
      that.removeLine(getLine346());
      that.removeLine(getLine347());
      that.removeLine(getLine348());
      that.removeLine(getLine352());
      that.removeLine(getLine360());
      that.removeLine(getLine361());
      that.removeLine(getLine366());
      that.removeLine(getLine370());
      that.removeLine(getLine378());
     MECE331CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE331CoopPlan3Biomedicalelement.classList.add("course");
      MECE331CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE371CoopPlan3BiomedicalListener = function () {
  var MECE371CoopPlan3Biomedicalelement = document.getElementById("MECE371CoopPlan3Biomedical");
 if (!MECE371CoopPlan3Biomedicalflag) {
      that.addLine(getLine349());
      that.addLine(getLine350());
      that.addLine(getLine351());
      that.addLine(getLine352());
      that.addLine(getLine363());
      that.addLine(getLine367());
      that.addLine(getLine382());
     MECE371CoopPlan3Biomedicalelement.classList.remove("course");
     MECE371CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE371CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine349());
      that.removeLine(getLine350());
      that.removeLine(getLine351());
      that.removeLine(getLine352());
      that.removeLine(getLine363());
      that.removeLine(getLine367());
      that.removeLine(getLine382());
     MECE371CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE371CoopPlan3Biomedicalelement.classList.add("course");
      MECE371CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE380CoopPlan3BiomedicalListener = function () {
  var MECE380CoopPlan3Biomedicalelement = document.getElementById("MECE380CoopPlan3Biomedical");
 if (!MECE380CoopPlan3Biomedicalflag) {
      that.addLine(getLine353());
      that.addLine(getLine383());
     MECE380CoopPlan3Biomedicalelement.classList.remove("course");
     MECE380CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE380CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine353());
      that.removeLine(getLine383());
     MECE380CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE380CoopPlan3Biomedicalelement.classList.add("course");
      MECE380CoopPlan3Biomedicalflag=false
  }
};
$scope.BME321CoopPlan3BiomedicalListener = function () {
  var BME321CoopPlan3Biomedicalelement = document.getElementById("BME321CoopPlan3Biomedical");
 if (!BME321CoopPlan3Biomedicalflag) {
      that.addLine(getLine354());
      that.addLine(getLine369());
     BME321CoopPlan3Biomedicalelement.classList.remove("course");
     BME321CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      BME321CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine354());
      that.removeLine(getLine369());
     BME321CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     BME321CoopPlan3Biomedicalelement.classList.add("course");
      BME321CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE563CoopPlan3BiomedicalListener = function () {
  var MECE563CoopPlan3Biomedicalelement = document.getElementById("MECE563CoopPlan3Biomedical");
 if (!MECE563CoopPlan3Biomedicalflag) {
      that.addLine(getLine355());
      that.addLine(getLine356());
      that.addLine(getLine357());
     MECE563CoopPlan3Biomedicalelement.classList.remove("course");
     MECE563CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE563CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine355());
      that.removeLine(getLine356());
      that.removeLine(getLine357());
     MECE563CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE563CoopPlan3Biomedicalelement.classList.add("course");
      MECE563CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP904CoopPlan3BiomedicalListener = function () {
  var WKEXP904CoopPlan3Biomedicalelement = document.getElementById("WKEXP904CoopPlan3Biomedical");
 if (!WKEXP904CoopPlan3Biomedicalflag) {
      that.addLine(getLine358());
      that.addLine(getLine359());
     WKEXP904CoopPlan3Biomedicalelement.classList.remove("course");
     WKEXP904CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      WKEXP904CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine358());
      that.removeLine(getLine359());
     WKEXP904CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     WKEXP904CoopPlan3Biomedicalelement.classList.add("course");
      WKEXP904CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP905CoopPlan3BiomedicalListener = function () {
  var WKEXP905CoopPlan3Biomedicalelement = document.getElementById("WKEXP905CoopPlan3Biomedical");
 if (!WKEXP905CoopPlan3Biomedicalflag) {
      that.addLine(getLine359());
     WKEXP905CoopPlan3Biomedicalelement.classList.remove("course");
     WKEXP905CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      WKEXP905CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine359());
     WKEXP905CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     WKEXP905CoopPlan3Biomedicalelement.classList.add("course");
      WKEXP905CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE430CoopPlan3BiomedicalListener = function () {
  var MECE430CoopPlan3Biomedicalelement = document.getElementById("MECE430CoopPlan3Biomedical");
 if (!MECE430CoopPlan3Biomedicalflag) {
      that.addLine(getLine360());
     MECE430CoopPlan3Biomedicalelement.classList.remove("course");
     MECE430CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE430CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine360());
     MECE430CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE430CoopPlan3Biomedicalelement.classList.add("course");
      MECE430CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE463CoopPlan3BiomedicalListener = function () {
  var MECE463CoopPlan3Biomedicalelement = document.getElementById("MECE463CoopPlan3Biomedical");
 if (!MECE463CoopPlan3Biomedicalflag) {
      that.addLine(getLine361());
      that.addLine(getLine362());
      that.addLine(getLine363());
     MECE463CoopPlan3Biomedicalelement.classList.remove("course");
     MECE463CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE463CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine361());
      that.removeLine(getLine362());
      that.removeLine(getLine363());
     MECE463CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE463CoopPlan3Biomedicalelement.classList.add("course");
      MECE463CoopPlan3Biomedicalflag=false
  }
};
$scope.CHE448CoopPlan3BiomedicalListener = function () {
  var CHE448CoopPlan3Biomedicalelement = document.getElementById("CHE448CoopPlan3Biomedical");
 if (!CHE448CoopPlan3Biomedicalflag) {
      that.addLine(getLine364());
      that.addLine(getLine365());
      that.addLine(getLine366());
      that.addLine(getLine367());
     CHE448CoopPlan3Biomedicalelement.classList.remove("course");
     CHE448CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      CHE448CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine364());
      that.removeLine(getLine365());
      that.removeLine(getLine366());
      that.removeLine(getLine367());
     CHE448CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     CHE448CoopPlan3Biomedicalelement.classList.add("course");
      CHE448CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE485CoopPlan3BiomedicalListener = function () {
  var MECE485CoopPlan3Biomedicalelement = document.getElementById("MECE485CoopPlan3Biomedical");
 if (!MECE485CoopPlan3Biomedicalflag) {
      that.addLine(getLine368());
      that.addLine(getLine369());
      that.addLine(getLine370());
     MECE485CoopPlan3Biomedicalelement.classList.remove("course");
     MECE485CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE485CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine368());
      that.removeLine(getLine369());
      that.removeLine(getLine370());
     MECE485CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE485CoopPlan3Biomedicalelement.classList.add("course");
      MECE485CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE403CoopPlan3BiomedicalListener = function () {
  var MECE403CoopPlan3Biomedicalelement = document.getElementById("MECE403CoopPlan3Biomedical");
 if (!MECE403CoopPlan3Biomedicalflag) {
      that.addLine(getLine371());
      that.addLine(getLine372());
      that.addLine(getLine373());
      that.addLine(getLine374());
     MECE403CoopPlan3Biomedicalelement.classList.remove("course");
     MECE403CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE403CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine371());
      that.removeLine(getLine372());
      that.removeLine(getLine373());
      that.removeLine(getLine374());
     MECE403CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE403CoopPlan3Biomedicalelement.classList.add("course");
      MECE403CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE451CoopPlan3BiomedicalListener = function () {
  var MECE451CoopPlan3Biomedicalelement = document.getElementById("MECE451CoopPlan3Biomedical");
 if (!MECE451CoopPlan3Biomedicalflag) {
      that.addLine(getLine375());
      that.addLine(getLine376());
     MECE451CoopPlan3Biomedicalelement.classList.remove("course");
     MECE451CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE451CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine375());
      that.removeLine(getLine376());
     MECE451CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE451CoopPlan3Biomedicalelement.classList.add("course");
      MECE451CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE460CoopPlan3BiomedicalListener = function () {
  var MECE460CoopPlan3Biomedicalelement = document.getElementById("MECE460CoopPlan3Biomedical");
 if (!MECE460CoopPlan3Biomedicalflag) {
      that.addLine(getLine377());
      that.addLine(getLine378());
      that.addLine(getLine379());
      that.addLine(getLine380());
      that.addLine(getLine381());
      that.addLine(getLine382());
      that.addLine(getLine383());
      that.addLine(getLine384());
     MECE460CoopPlan3Biomedicalelement.classList.remove("course");
     MECE460CoopPlan3Biomedicalelement.classList.add("course-highlighted");
      MECE460CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine377());
      that.removeLine(getLine378());
      that.removeLine(getLine379());
      that.removeLine(getLine380());
      that.removeLine(getLine381());
      that.removeLine(getLine382());
      that.removeLine(getLine383());
      that.removeLine(getLine384());
     MECE460CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE460CoopPlan3Biomedicalelement.classList.add("course");
      MECE460CoopPlan3Biomedicalflag=false
  }
};
  var CHEM103CoopPlan4flag = false;
  var ENGG100CoopPlan4flag = false;
  var ENGG130CoopPlan4flag = false;
  var ENGL199CoopPlan4flag = false;
  var MATH100CoopPlan4flag = false;
  var PHYS130CoopPlan4flag = false;
  var CHEM105CoopPlan4flag = false;
  var ENCMP100CoopPlan4flag = false;
  var ENGG160CoopPlan4flag = false;
  var ENPH131CoopPlan4flag = false;
  var MATH101CoopPlan4flag = false;
  var MATH102CoopPlan4flag = false;
  var CIVE270CoopPlan4flag = false;
  var ENGG299CoopPlan4flag = false;
  var MATH209CoopPlan4flag = false;
  var STAT235CoopPlan4flag = false;
  var MECE230CoopPlan4flag = false;
  var MECE260CoopPlan4flag = false;
  var MECE265CoopPlan4flag = false;
  var ECE209CoopPlan4flag = false;
  var MATH201CoopPlan4flag = false;
  var CHE243CoopPlan4flag = false;
  var MATE202CoopPlan4flag = false;
  var MECE200CoopPlan4flag = false;
  var MECE250CoopPlan4flag = false;
  var MATH300CoopPlan4flag = false;
  var MECE300CoopPlan4flag = false;
  var MECE301CoopPlan4flag = false;
  var MECE331CoopPlan4flag = false;
  var MECE371CoopPlan4flag = false;
  var MECE380CoopPlan4flag = false;
  var WKEXP901CoopPlan4flag = false;
  var WKEXP902CoopPlan4flag = false;
  var ENGM310CoopPlan4flag = false;
  var MECE340CoopPlan4flag = false;
  var MECE360CoopPlan4flag = false;
  var MECE362CoopPlan4flag = false;
  var MECE390CoopPlan4flag = false;
  var ComplementaryElectiveCoopPlan4flag = false;
  var WKEXP903CoopPlan4flag = false;
  var WKEXP904CoopPlan4flag = false;
  var WKEXP905CoopPlan4flag = false;
  var ENGG404CoopPlan4flag = false;
  var MECE430CoopPlan4flag = false;
  var MECE463CoopPlan4flag = false;
  var ProgramTechnicalElectiveCoopPlan4flag = false;
  var ProgramTechnicalElectiveCoopPlan4flag = false;
  var ProgramTechnicalElectiveCoopPlan4flag = false;
  var CHE448CoopPlan4flag = false;
  var ENGG400CoopPlan4flag = false;
  var MECE403CoopPlan4flag = false;
  var MECE451CoopPlan4flag = false;
  var MECE460CoopPlan4flag = false;
  var ProgramTechnicalElectiveCoopPlan4flag = false;
  var ITSElectiveCoopPlan4flag = false;
$scope.CHEM103CoopPlan4Listener = function () {
  var CHEM103CoopPlan4element = document.getElementById("CHEM103CoopPlan4");
 if (!CHEM103CoopPlan4flag) {
      that.addLine(getLine387());
     CHEM103CoopPlan4element.classList.remove("course");
     CHEM103CoopPlan4element.classList.add("course-highlighted");
      CHEM103CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine387());
     CHEM103CoopPlan4element.classList.remove("course-highlighted");
     CHEM103CoopPlan4element.classList.add("course");
      CHEM103CoopPlan4flag=false
  }
};
$scope.ENGG130CoopPlan4Listener = function () {
  var ENGG130CoopPlan4element = document.getElementById("ENGG130CoopPlan4");
 if (!ENGG130CoopPlan4flag) {
      that.addLine(getLine385());
      that.addLine(getLine390());
      that.addLine(getLine394());
      that.addLine(getLine408());
     ENGG130CoopPlan4element.classList.remove("course");
     ENGG130CoopPlan4element.classList.add("course-highlighted");
      ENGG130CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine385());
      that.removeLine(getLine390());
      that.removeLine(getLine394());
      that.removeLine(getLine408());
     ENGG130CoopPlan4element.classList.remove("course-highlighted");
     ENGG130CoopPlan4element.classList.add("course");
      ENGG130CoopPlan4flag=false
  }
};
$scope.ENGL199CoopPlan4Listener = function () {
  var ENGL199CoopPlan4element = document.getElementById("ENGL199CoopPlan4");
 if (!ENGL199CoopPlan4flag) {
      that.addLine(getLine388());
     ENGL199CoopPlan4element.classList.remove("course");
     ENGL199CoopPlan4element.classList.add("course-highlighted");
      ENGL199CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine388());
     ENGL199CoopPlan4element.classList.remove("course-highlighted");
     ENGL199CoopPlan4element.classList.add("course");
      ENGL199CoopPlan4flag=false
  }
};
$scope.MATH100CoopPlan4Listener = function () {
  var MATH100CoopPlan4element = document.getElementById("MATH100CoopPlan4");
 if (!MATH100CoopPlan4flag) {
      that.addLine(getLine385());
      that.addLine(getLine386());
      that.addLine(getLine389());
      that.addLine(getLine392());
      that.addLine(getLine393());
      that.addLine(getLine398());
     MATH100CoopPlan4element.classList.remove("course");
     MATH100CoopPlan4element.classList.add("course-highlighted");
      MATH100CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine385());
      that.removeLine(getLine386());
      that.removeLine(getLine389());
      that.removeLine(getLine392());
      that.removeLine(getLine393());
      that.removeLine(getLine398());
     MATH100CoopPlan4element.classList.remove("course-highlighted");
     MATH100CoopPlan4element.classList.add("course");
      MATH100CoopPlan4flag=false
  }
};
$scope.PHYS130CoopPlan4Listener = function () {
  var PHYS130CoopPlan4element = document.getElementById("PHYS130CoopPlan4");
 if (!PHYS130CoopPlan4flag) {
      that.addLine(getLine386());
     PHYS130CoopPlan4element.classList.remove("course");
     PHYS130CoopPlan4element.classList.add("course-highlighted");
      PHYS130CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine386());
     PHYS130CoopPlan4element.classList.remove("course-highlighted");
     PHYS130CoopPlan4element.classList.add("course");
      PHYS130CoopPlan4flag=false
  }
};
$scope.CHEM105CoopPlan4Listener = function () {
  var CHEM105CoopPlan4element = document.getElementById("CHEM105CoopPlan4");
 if (!CHEM105CoopPlan4flag) {
      that.addLine(getLine387());
      that.addLine(getLine407());
     CHEM105CoopPlan4element.classList.remove("course");
     CHEM105CoopPlan4element.classList.add("course-highlighted");
      CHEM105CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine387());
      that.removeLine(getLine407());
     CHEM105CoopPlan4element.classList.remove("course-highlighted");
     CHEM105CoopPlan4element.classList.add("course");
      CHEM105CoopPlan4flag=false
  }
};
$scope.ENGG160CoopPlan4Listener = function () {
  var ENGG160CoopPlan4element = document.getElementById("ENGG160CoopPlan4");
 if (!ENGG160CoopPlan4flag) {
      that.addLine(getLine388());
      that.addLine(getLine402());
     ENGG160CoopPlan4element.classList.remove("course");
     ENGG160CoopPlan4element.classList.add("course-highlighted");
      ENGG160CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine388());
      that.removeLine(getLine402());
     ENGG160CoopPlan4element.classList.remove("course-highlighted");
     ENGG160CoopPlan4element.classList.add("course");
      ENGG160CoopPlan4flag=false
  }
};
$scope.ENPH131CoopPlan4Listener = function () {
  var ENPH131CoopPlan4element = document.getElementById("ENPH131CoopPlan4");
 if (!ENPH131CoopPlan4flag) {
      that.addLine(getLine389());
      that.addLine(getLine390());
      that.addLine(getLine391());
      that.addLine(getLine401());
      that.addLine(getLine409());
     ENPH131CoopPlan4element.classList.remove("course");
     ENPH131CoopPlan4element.classList.add("course-highlighted");
      ENPH131CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine389());
      that.removeLine(getLine390());
      that.removeLine(getLine391());
      that.removeLine(getLine401());
      that.removeLine(getLine409());
     ENPH131CoopPlan4element.classList.remove("course-highlighted");
     ENPH131CoopPlan4element.classList.add("course");
      ENPH131CoopPlan4flag=false
  }
};
$scope.MATH101CoopPlan4Listener = function () {
  var MATH101CoopPlan4element = document.getElementById("MATH101CoopPlan4");
 if (!MATH101CoopPlan4flag) {
      that.addLine(getLine391());
      that.addLine(getLine392());
      that.addLine(getLine395());
      that.addLine(getLine396());
      that.addLine(getLine399());
      that.addLine(getLine400());
      that.addLine(getLine406());
      that.addLine(getLine410());
     MATH101CoopPlan4element.classList.remove("course");
     MATH101CoopPlan4element.classList.add("course-highlighted");
      MATH101CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine391());
      that.removeLine(getLine392());
      that.removeLine(getLine395());
      that.removeLine(getLine396());
      that.removeLine(getLine399());
      that.removeLine(getLine400());
      that.removeLine(getLine406());
      that.removeLine(getLine410());
     MATH101CoopPlan4element.classList.remove("course-highlighted");
     MATH101CoopPlan4element.classList.add("course");
      MATH101CoopPlan4flag=false
  }
};
$scope.MATH102CoopPlan4Listener = function () {
  var MATH102CoopPlan4element = document.getElementById("MATH102CoopPlan4");
 if (!MATH102CoopPlan4flag) {
      that.addLine(getLine393());
      that.addLine(getLine397());
      that.addLine(getLine436());
     MATH102CoopPlan4element.classList.remove("course");
     MATH102CoopPlan4element.classList.add("course-highlighted");
      MATH102CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine393());
      that.removeLine(getLine397());
      that.removeLine(getLine436());
     MATH102CoopPlan4element.classList.remove("course-highlighted");
     MATH102CoopPlan4element.classList.add("course");
      MATH102CoopPlan4flag=false
  }
};
$scope.CIVE270CoopPlan4Listener = function () {
  var CIVE270CoopPlan4element = document.getElementById("CIVE270CoopPlan4");
 if (!CIVE270CoopPlan4flag) {
      that.addLine(getLine394());
      that.addLine(getLine395());
      that.addLine(getLine404());
      that.addLine(getLine413());
      that.addLine(getLine426());
      that.addLine(getLine433());
     CIVE270CoopPlan4element.classList.remove("course");
     CIVE270CoopPlan4element.classList.add("course-highlighted");
      CIVE270CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine394());
      that.removeLine(getLine395());
      that.removeLine(getLine404());
      that.removeLine(getLine413());
      that.removeLine(getLine426());
      that.removeLine(getLine433());
     CIVE270CoopPlan4element.classList.remove("course-highlighted");
     CIVE270CoopPlan4element.classList.add("course");
      CIVE270CoopPlan4flag=false
  }
};
$scope.ENGG299CoopPlan4Listener = function () {
  var ENGG299CoopPlan4element = document.getElementById("ENGG299CoopPlan4");
 if (!ENGG299CoopPlan4flag) {
      that.addLine(getLine427());
     ENGG299CoopPlan4element.classList.remove("course");
     ENGG299CoopPlan4element.classList.add("course-highlighted");
      ENGG299CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine427());
     ENGG299CoopPlan4element.classList.remove("course-highlighted");
     ENGG299CoopPlan4element.classList.add("course");
      ENGG299CoopPlan4flag=false
  }
};
$scope.MATH209CoopPlan4Listener = function () {
  var MATH209CoopPlan4element = document.getElementById("MATH209CoopPlan4");
 if (!MATH209CoopPlan4flag) {
      that.addLine(getLine396());
      that.addLine(getLine397());
      that.addLine(getLine405());
      that.addLine(getLine412());
      that.addLine(getLine420());
      that.addLine(getLine446());
     MATH209CoopPlan4element.classList.remove("course");
     MATH209CoopPlan4element.classList.add("course-highlighted");
      MATH209CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine396());
      that.removeLine(getLine397());
      that.removeLine(getLine405());
      that.removeLine(getLine412());
      that.removeLine(getLine420());
      that.removeLine(getLine446());
     MATH209CoopPlan4element.classList.remove("course-highlighted");
     MATH209CoopPlan4element.classList.add("course");
      MATH209CoopPlan4flag=false
  }
};
$scope.STAT235CoopPlan4Listener = function () {
  var STAT235CoopPlan4element = document.getElementById("STAT235CoopPlan4");
 if (!STAT235CoopPlan4flag) {
      that.addLine(getLine398());
      that.addLine(getLine399());
      that.addLine(getLine415());
     STAT235CoopPlan4element.classList.remove("course");
     STAT235CoopPlan4element.classList.add("course-highlighted");
      STAT235CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine398());
      that.removeLine(getLine399());
      that.removeLine(getLine415());
     STAT235CoopPlan4element.classList.remove("course-highlighted");
     STAT235CoopPlan4element.classList.add("course");
      STAT235CoopPlan4flag=false
  }
};
$scope.MECE230CoopPlan4Listener = function () {
  var MECE230CoopPlan4element = document.getElementById("MECE230CoopPlan4");
 if (!MECE230CoopPlan4flag) {
      that.addLine(getLine400());
      that.addLine(getLine401());
      that.addLine(getLine418());
      that.addLine(getLine422());
     MECE230CoopPlan4element.classList.remove("course");
     MECE230CoopPlan4element.classList.add("course-highlighted");
      MECE230CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine400());
      that.removeLine(getLine401());
      that.removeLine(getLine418());
      that.removeLine(getLine422());
     MECE230CoopPlan4element.classList.remove("course-highlighted");
     MECE230CoopPlan4element.classList.add("course");
      MECE230CoopPlan4flag=false
  }
};
$scope.MECE260CoopPlan4Listener = function () {
  var MECE260CoopPlan4element = document.getElementById("MECE260CoopPlan4");
 if (!MECE260CoopPlan4flag) {
      that.addLine(getLine402());
      that.addLine(getLine403());
      that.addLine(getLine404());
      that.addLine(getLine430());
     MECE260CoopPlan4element.classList.remove("course");
     MECE260CoopPlan4element.classList.add("course-highlighted");
      MECE260CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine402());
      that.removeLine(getLine403());
      that.removeLine(getLine404());
      that.removeLine(getLine430());
     MECE260CoopPlan4element.classList.remove("course-highlighted");
     MECE260CoopPlan4element.classList.add("course");
      MECE260CoopPlan4flag=false
  }
};
$scope.MECE265CoopPlan4Listener = function () {
  var MECE265CoopPlan4element = document.getElementById("MECE265CoopPlan4");
 if (!MECE265CoopPlan4flag) {
      that.addLine(getLine403());
      that.addLine(getLine431());
     MECE265CoopPlan4element.classList.remove("course");
     MECE265CoopPlan4element.classList.add("course-highlighted");
      MECE265CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine403());
      that.removeLine(getLine431());
     MECE265CoopPlan4element.classList.remove("course-highlighted");
     MECE265CoopPlan4element.classList.add("course");
      MECE265CoopPlan4flag=false
  }
};
$scope.ECE209CoopPlan4Listener = function () {
  var ECE209CoopPlan4element = document.getElementById("ECE209CoopPlan4");
 if (!ECE209CoopPlan4flag) {
      that.addLine(getLine414());
     ECE209CoopPlan4element.classList.remove("course");
     ECE209CoopPlan4element.classList.add("course-highlighted");
      ECE209CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine414());
     ECE209CoopPlan4element.classList.remove("course-highlighted");
     ECE209CoopPlan4element.classList.add("course");
      ECE209CoopPlan4flag=false
  }
};
$scope.MATH201CoopPlan4Listener = function () {
  var MATH201CoopPlan4element = document.getElementById("MATH201CoopPlan4");
 if (!MATH201CoopPlan4flag) {
      that.addLine(getLine405());
      that.addLine(getLine411());
      that.addLine(getLine437());
      that.addLine(getLine445());
     MATH201CoopPlan4element.classList.remove("course");
     MATH201CoopPlan4element.classList.add("course-highlighted");
      MATH201CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine405());
      that.removeLine(getLine411());
      that.removeLine(getLine437());
      that.removeLine(getLine445());
     MATH201CoopPlan4element.classList.remove("course-highlighted");
     MATH201CoopPlan4element.classList.add("course");
      MATH201CoopPlan4flag=false
  }
};
$scope.CHE243CoopPlan4Listener = function () {
  var CHE243CoopPlan4element = document.getElementById("CHE243CoopPlan4");
 if (!CHE243CoopPlan4flag) {
      that.addLine(getLine406());
      that.addLine(getLine421());
      that.addLine(getLine423());
      that.addLine(getLine429());
     CHE243CoopPlan4element.classList.remove("course");
     CHE243CoopPlan4element.classList.add("course-highlighted");
      CHE243CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine406());
      that.removeLine(getLine421());
      that.removeLine(getLine423());
      that.removeLine(getLine429());
     CHE243CoopPlan4element.classList.remove("course-highlighted");
     CHE243CoopPlan4element.classList.add("course");
      CHE243CoopPlan4flag=false
  }
};
$scope.MATE202CoopPlan4Listener = function () {
  var MATE202CoopPlan4element = document.getElementById("MATE202CoopPlan4");
 if (!MATE202CoopPlan4flag) {
      that.addLine(getLine407());
      that.addLine(getLine432());
     MATE202CoopPlan4element.classList.remove("course");
     MATE202CoopPlan4element.classList.add("course-highlighted");
      MATE202CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine407());
      that.removeLine(getLine432());
     MATE202CoopPlan4element.classList.remove("course-highlighted");
     MATE202CoopPlan4element.classList.add("course");
      MATE202CoopPlan4flag=false
  }
};
$scope.MECE200CoopPlan4Listener = function () {
  var MECE200CoopPlan4element = document.getElementById("MECE200CoopPlan4");
 if (!MECE200CoopPlan4flag) {
      that.addLine(getLine455());
     MECE200CoopPlan4element.classList.remove("course");
     MECE200CoopPlan4element.classList.add("course-highlighted");
      MECE200CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine455());
     MECE200CoopPlan4element.classList.remove("course-highlighted");
     MECE200CoopPlan4element.classList.add("course");
      MECE200CoopPlan4flag=false
  }
};
$scope.MECE250CoopPlan4Listener = function () {
  var MECE250CoopPlan4element = document.getElementById("MECE250CoopPlan4");
 if (!MECE250CoopPlan4flag) {
      that.addLine(getLine408());
      that.addLine(getLine409());
      that.addLine(getLine410());
      that.addLine(getLine419());
      that.addLine(getLine435());
      that.addLine(getLine453());
     MECE250CoopPlan4element.classList.remove("course");
     MECE250CoopPlan4element.classList.add("course-highlighted");
      MECE250CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine408());
      that.removeLine(getLine409());
      that.removeLine(getLine410());
      that.removeLine(getLine419());
      that.removeLine(getLine435());
      that.removeLine(getLine453());
     MECE250CoopPlan4element.classList.remove("course-highlighted");
     MECE250CoopPlan4element.classList.add("course");
      MECE250CoopPlan4flag=false
  }
};
$scope.MATH300CoopPlan4Listener = function () {
  var MATH300CoopPlan4element = document.getElementById("MATH300CoopPlan4");
 if (!MATH300CoopPlan4flag) {
      that.addLine(getLine411());
      that.addLine(getLine412());
      that.addLine(getLine424());
      that.addLine(getLine454());
     MATH300CoopPlan4element.classList.remove("course");
     MATH300CoopPlan4element.classList.add("course-highlighted");
      MATH300CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine411());
      that.removeLine(getLine412());
      that.removeLine(getLine424());
      that.removeLine(getLine454());
     MATH300CoopPlan4element.classList.remove("course-highlighted");
     MATH300CoopPlan4element.classList.add("course");
      MATH300CoopPlan4flag=false
  }
};
$scope.MECE300CoopPlan4Listener = function () {
  var MECE300CoopPlan4element = document.getElementById("MECE300CoopPlan4");
 if (!MECE300CoopPlan4flag) {
      that.addLine(getLine413());
      that.addLine(getLine414());
      that.addLine(getLine415());
      that.addLine(getLine416());
      that.addLine(getLine417());
      that.addLine(getLine449());
     MECE300CoopPlan4element.classList.remove("course");
     MECE300CoopPlan4element.classList.add("course-highlighted");
      MECE300CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine413());
      that.removeLine(getLine414());
      that.removeLine(getLine415());
      that.removeLine(getLine416());
      that.removeLine(getLine417());
      that.removeLine(getLine449());
     MECE300CoopPlan4element.classList.remove("course-highlighted");
     MECE300CoopPlan4element.classList.add("course");
      MECE300CoopPlan4flag=false
  }
};
$scope.MECE301CoopPlan4Listener = function () {
  var MECE301CoopPlan4element = document.getElementById("MECE301CoopPlan4");
 if (!MECE301CoopPlan4flag) {
      that.addLine(getLine417());
      that.addLine(getLine450());
     MECE301CoopPlan4element.classList.remove("course");
     MECE301CoopPlan4element.classList.add("course-highlighted");
      MECE301CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine417());
      that.removeLine(getLine450());
     MECE301CoopPlan4element.classList.remove("course-highlighted");
     MECE301CoopPlan4element.classList.add("course");
      MECE301CoopPlan4flag=false
  }
};
$scope.MECE331CoopPlan4Listener = function () {
  var MECE331CoopPlan4element = document.getElementById("MECE331CoopPlan4");
 if (!MECE331CoopPlan4flag) {
      that.addLine(getLine416());
      that.addLine(getLine418());
      that.addLine(getLine419());
      that.addLine(getLine420());
      that.addLine(getLine421());
      that.addLine(getLine425());
      that.addLine(getLine441());
      that.addLine(getLine442());
      that.addLine(getLine447());
      that.addLine(getLine456());
     MECE331CoopPlan4element.classList.remove("course");
     MECE331CoopPlan4element.classList.add("course-highlighted");
      MECE331CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine416());
      that.removeLine(getLine418());
      that.removeLine(getLine419());
      that.removeLine(getLine420());
      that.removeLine(getLine421());
      that.removeLine(getLine425());
      that.removeLine(getLine441());
      that.removeLine(getLine442());
      that.removeLine(getLine447());
      that.removeLine(getLine456());
     MECE331CoopPlan4element.classList.remove("course-highlighted");
     MECE331CoopPlan4element.classList.add("course");
      MECE331CoopPlan4flag=false
  }
};
$scope.MECE371CoopPlan4Listener = function () {
  var MECE371CoopPlan4element = document.getElementById("MECE371CoopPlan4");
 if (!MECE371CoopPlan4flag) {
      that.addLine(getLine422());
      that.addLine(getLine423());
      that.addLine(getLine424());
      that.addLine(getLine425());
      that.addLine(getLine444());
      that.addLine(getLine448());
      that.addLine(getLine460());
     MECE371CoopPlan4element.classList.remove("course");
     MECE371CoopPlan4element.classList.add("course-highlighted");
      MECE371CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine422());
      that.removeLine(getLine423());
      that.removeLine(getLine424());
      that.removeLine(getLine425());
      that.removeLine(getLine444());
      that.removeLine(getLine448());
      that.removeLine(getLine460());
     MECE371CoopPlan4element.classList.remove("course-highlighted");
     MECE371CoopPlan4element.classList.add("course");
      MECE371CoopPlan4flag=false
  }
};
$scope.MECE380CoopPlan4Listener = function () {
  var MECE380CoopPlan4element = document.getElementById("MECE380CoopPlan4");
 if (!MECE380CoopPlan4flag) {
      that.addLine(getLine426());
      that.addLine(getLine461());
     MECE380CoopPlan4element.classList.remove("course");
     MECE380CoopPlan4element.classList.add("course-highlighted");
      MECE380CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine426());
      that.removeLine(getLine461());
     MECE380CoopPlan4element.classList.remove("course-highlighted");
     MECE380CoopPlan4element.classList.add("course");
      MECE380CoopPlan4flag=false
  }
};
$scope.WKEXP901CoopPlan4Listener = function () {
  var WKEXP901CoopPlan4element = document.getElementById("WKEXP901CoopPlan4");
 if (!WKEXP901CoopPlan4flag) {
      that.addLine(getLine427());
      that.addLine(getLine428());
     WKEXP901CoopPlan4element.classList.remove("course");
     WKEXP901CoopPlan4element.classList.add("course-highlighted");
      WKEXP901CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine427());
      that.removeLine(getLine428());
     WKEXP901CoopPlan4element.classList.remove("course-highlighted");
     WKEXP901CoopPlan4element.classList.add("course");
      WKEXP901CoopPlan4flag=false
  }
};
$scope.WKEXP902CoopPlan4Listener = function () {
  var WKEXP902CoopPlan4element = document.getElementById("WKEXP902CoopPlan4");
 if (!WKEXP902CoopPlan4flag) {
      that.addLine(getLine428());
      that.addLine(getLine438());
     WKEXP902CoopPlan4element.classList.remove("course");
     WKEXP902CoopPlan4element.classList.add("course-highlighted");
      WKEXP902CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine428());
      that.removeLine(getLine438());
     WKEXP902CoopPlan4element.classList.remove("course-highlighted");
     WKEXP902CoopPlan4element.classList.add("course");
      WKEXP902CoopPlan4flag=false
  }
};
$scope.ENGM310CoopPlan4Listener = function () {
  var ENGM310CoopPlan4element = document.getElementById("ENGM310CoopPlan4");
 if (!ENGM310CoopPlan4flag) {
      that.addLine(getLine462());
     ENGM310CoopPlan4element.classList.remove("course");
     ENGM310CoopPlan4element.classList.add("course-highlighted");
      ENGM310CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine462());
     ENGM310CoopPlan4element.classList.remove("course-highlighted");
     ENGM310CoopPlan4element.classList.add("course");
      ENGM310CoopPlan4flag=false
  }
};
$scope.MECE340CoopPlan4Listener = function () {
  var MECE340CoopPlan4element = document.getElementById("MECE340CoopPlan4");
 if (!MECE340CoopPlan4flag) {
      that.addLine(getLine429());
      that.addLine(getLine443());
      that.addLine(getLine451());
      that.addLine(getLine457());
     MECE340CoopPlan4element.classList.remove("course");
     MECE340CoopPlan4element.classList.add("course-highlighted");
      MECE340CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine429());
      that.removeLine(getLine443());
      that.removeLine(getLine451());
      that.removeLine(getLine457());
     MECE340CoopPlan4element.classList.remove("course-highlighted");
     MECE340CoopPlan4element.classList.add("course");
      MECE340CoopPlan4flag=false
  }
};
$scope.MECE360CoopPlan4Listener = function () {
  var MECE360CoopPlan4element = document.getElementById("MECE360CoopPlan4");
 if (!MECE360CoopPlan4flag) {
      that.addLine(getLine430());
      that.addLine(getLine431());
      that.addLine(getLine432());
      that.addLine(getLine433());
      that.addLine(getLine434());
      that.addLine(getLine452());
      that.addLine(getLine458());
     MECE360CoopPlan4element.classList.remove("course");
     MECE360CoopPlan4element.classList.add("course-highlighted");
      MECE360CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine430());
      that.removeLine(getLine431());
      that.removeLine(getLine432());
      that.removeLine(getLine433());
      that.removeLine(getLine434());
      that.removeLine(getLine452());
      that.removeLine(getLine458());
     MECE360CoopPlan4element.classList.remove("course-highlighted");
     MECE360CoopPlan4element.classList.add("course");
      MECE360CoopPlan4flag=false
  }
};
$scope.MECE362CoopPlan4Listener = function () {
  var MECE362CoopPlan4element = document.getElementById("MECE362CoopPlan4");
 if (!MECE362CoopPlan4flag) {
      that.addLine(getLine434());
      that.addLine(getLine435());
      that.addLine(getLine459());
     MECE362CoopPlan4element.classList.remove("course");
     MECE362CoopPlan4element.classList.add("course-highlighted");
      MECE362CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine434());
      that.removeLine(getLine435());
      that.removeLine(getLine459());
     MECE362CoopPlan4element.classList.remove("course-highlighted");
     MECE362CoopPlan4element.classList.add("course");
      MECE362CoopPlan4flag=false
  }
};
$scope.MECE390CoopPlan4Listener = function () {
  var MECE390CoopPlan4element = document.getElementById("MECE390CoopPlan4");
 if (!MECE390CoopPlan4flag) {
      that.addLine(getLine436());
      that.addLine(getLine437());
     MECE390CoopPlan4element.classList.remove("course");
     MECE390CoopPlan4element.classList.add("course-highlighted");
      MECE390CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine436());
      that.removeLine(getLine437());
     MECE390CoopPlan4element.classList.remove("course-highlighted");
     MECE390CoopPlan4element.classList.add("course");
      MECE390CoopPlan4flag=false
  }
};
$scope.WKEXP903CoopPlan4Listener = function () {
  var WKEXP903CoopPlan4element = document.getElementById("WKEXP903CoopPlan4");
 if (!WKEXP903CoopPlan4flag) {
      that.addLine(getLine438());
      that.addLine(getLine439());
     WKEXP903CoopPlan4element.classList.remove("course");
     WKEXP903CoopPlan4element.classList.add("course-highlighted");
      WKEXP903CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine438());
      that.removeLine(getLine439());
     WKEXP903CoopPlan4element.classList.remove("course-highlighted");
     WKEXP903CoopPlan4element.classList.add("course");
      WKEXP903CoopPlan4flag=false
  }
};
$scope.WKEXP904CoopPlan4Listener = function () {
  var WKEXP904CoopPlan4element = document.getElementById("WKEXP904CoopPlan4");
 if (!WKEXP904CoopPlan4flag) {
      that.addLine(getLine439());
      that.addLine(getLine440());
     WKEXP904CoopPlan4element.classList.remove("course");
     WKEXP904CoopPlan4element.classList.add("course-highlighted");
      WKEXP904CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine439());
      that.removeLine(getLine440());
     WKEXP904CoopPlan4element.classList.remove("course-highlighted");
     WKEXP904CoopPlan4element.classList.add("course");
      WKEXP904CoopPlan4flag=false
  }
};
$scope.WKEXP905CoopPlan4Listener = function () {
  var WKEXP905CoopPlan4element = document.getElementById("WKEXP905CoopPlan4");
 if (!WKEXP905CoopPlan4flag) {
      that.addLine(getLine440());
     WKEXP905CoopPlan4element.classList.remove("course");
     WKEXP905CoopPlan4element.classList.add("course-highlighted");
      WKEXP905CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine440());
     WKEXP905CoopPlan4element.classList.remove("course-highlighted");
     WKEXP905CoopPlan4element.classList.add("course");
      WKEXP905CoopPlan4flag=false
  }
};
$scope.MECE430CoopPlan4Listener = function () {
  var MECE430CoopPlan4element = document.getElementById("MECE430CoopPlan4");
 if (!MECE430CoopPlan4flag) {
      that.addLine(getLine441());
     MECE430CoopPlan4element.classList.remove("course");
     MECE430CoopPlan4element.classList.add("course-highlighted");
      MECE430CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine441());
     MECE430CoopPlan4element.classList.remove("course-highlighted");
     MECE430CoopPlan4element.classList.add("course");
      MECE430CoopPlan4flag=false
  }
};
$scope.MECE463CoopPlan4Listener = function () {
  var MECE463CoopPlan4element = document.getElementById("MECE463CoopPlan4");
 if (!MECE463CoopPlan4flag) {
      that.addLine(getLine442());
      that.addLine(getLine443());
      that.addLine(getLine444());
     MECE463CoopPlan4element.classList.remove("course");
     MECE463CoopPlan4element.classList.add("course-highlighted");
      MECE463CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine442());
      that.removeLine(getLine443());
      that.removeLine(getLine444());
     MECE463CoopPlan4element.classList.remove("course-highlighted");
     MECE463CoopPlan4element.classList.add("course");
      MECE463CoopPlan4flag=false
  }
};
$scope.CHE448CoopPlan4Listener = function () {
  var CHE448CoopPlan4element = document.getElementById("CHE448CoopPlan4");
 if (!CHE448CoopPlan4flag) {
      that.addLine(getLine445());
      that.addLine(getLine446());
      that.addLine(getLine447());
      that.addLine(getLine448());
     CHE448CoopPlan4element.classList.remove("course");
     CHE448CoopPlan4element.classList.add("course-highlighted");
      CHE448CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine445());
      that.removeLine(getLine446());
      that.removeLine(getLine447());
      that.removeLine(getLine448());
     CHE448CoopPlan4element.classList.remove("course-highlighted");
     CHE448CoopPlan4element.classList.add("course");
      CHE448CoopPlan4flag=false
  }
};
$scope.MECE403CoopPlan4Listener = function () {
  var MECE403CoopPlan4element = document.getElementById("MECE403CoopPlan4");
 if (!MECE403CoopPlan4flag) {
      that.addLine(getLine449());
      that.addLine(getLine450());
      that.addLine(getLine451());
      that.addLine(getLine452());
     MECE403CoopPlan4element.classList.remove("course");
     MECE403CoopPlan4element.classList.add("course-highlighted");
      MECE403CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine449());
      that.removeLine(getLine450());
      that.removeLine(getLine451());
      that.removeLine(getLine452());
     MECE403CoopPlan4element.classList.remove("course-highlighted");
     MECE403CoopPlan4element.classList.add("course");
      MECE403CoopPlan4flag=false
  }
};
$scope.MECE451CoopPlan4Listener = function () {
  var MECE451CoopPlan4element = document.getElementById("MECE451CoopPlan4");
 if (!MECE451CoopPlan4flag) {
      that.addLine(getLine453());
      that.addLine(getLine454());
     MECE451CoopPlan4element.classList.remove("course");
     MECE451CoopPlan4element.classList.add("course-highlighted");
      MECE451CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine453());
      that.removeLine(getLine454());
     MECE451CoopPlan4element.classList.remove("course-highlighted");
     MECE451CoopPlan4element.classList.add("course");
      MECE451CoopPlan4flag=false
  }
};
$scope.MECE460CoopPlan4Listener = function () {
  var MECE460CoopPlan4element = document.getElementById("MECE460CoopPlan4");
 if (!MECE460CoopPlan4flag) {
      that.addLine(getLine455());
      that.addLine(getLine456());
      that.addLine(getLine457());
      that.addLine(getLine458());
      that.addLine(getLine459());
      that.addLine(getLine460());
      that.addLine(getLine461());
      that.addLine(getLine462());
     MECE460CoopPlan4element.classList.remove("course");
     MECE460CoopPlan4element.classList.add("course-highlighted");
      MECE460CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine455());
      that.removeLine(getLine456());
      that.removeLine(getLine457());
      that.removeLine(getLine458());
      that.removeLine(getLine459());
      that.removeLine(getLine460());
      that.removeLine(getLine461());
      that.removeLine(getLine462());
     MECE460CoopPlan4element.classList.remove("course-highlighted");
     MECE460CoopPlan4element.classList.add("course");
      MECE460CoopPlan4flag=false
  }
};
});