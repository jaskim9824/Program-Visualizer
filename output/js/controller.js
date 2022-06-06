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
this.TraditionalPlanClicked = [];
this.TraditionalPlanTerms = 8;
this.AlternatePlanList = [];
this.AlternatePlanClicked = [];
this.AlternatePlanTerms = 9;
this.CoopPlan1List = [];
this.CoopPlan1Clicked = [];
this.CoopPlan1Terms = 13;
this.CoopPlan2List = [];
this.CoopPlan2Clicked = [];
this.CoopPlan2Terms = 13;
this.CoopPlan3BiomedicalList = [];
this.CoopPlan3BiomedicalClicked = [];
this.CoopPlan3BiomedicalTerms = 13;
this.CoopPlan4List = [];
this.CoopPlan4Clicked = [];
this.CoopPlan4Terms = 13;
this.disable = function(plan) {
    switch (plan) { 
  case "TraditionalPlan": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide(true);
    }
    break; 
  case "CoopPlan1": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan3Biomedical": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan4": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
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
    document.getElementById("footer").style.width = widthstr;
    for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
        var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
        element.classList.remove(this.TraditionalPlanClicked[i][1]);
        element.classList.add(this.TraditionalPlanClicked[i][1]+"-highlighted");
    }
    break; 
  case "AlternatePlan": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].show(true);
    }
    width = this.AlternatePlanTerms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    document.getElementById("footer").style.width = widthstr;
    for (let i = 0; i < this.AlternatePlanClicked.length; i++) {
        var element = document.getElementById(this.AlternatePlanClicked[i][0]);
        element.classList.remove(this.AlternatePlanClicked[i][1]);
        element.classList.add(this.AlternatePlanClicked[i][1]+"-highlighted");
    }
    break; 
  case "CoopPlan1": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].show(true);
    }
    width = this.CoopPlan1Terms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    document.getElementById("footer").style.width = widthstr;
    for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
        var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
        element.classList.remove(this.CoopPlan1Clicked[i][1]);
        element.classList.add(this.CoopPlan1Clicked[i][1]+"-highlighted");
    }
    break; 
  case "CoopPlan2": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].show(true);
    }
    width = this.CoopPlan2Terms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    document.getElementById("footer").style.width = widthstr;
    for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
        var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
        element.classList.remove(this.CoopPlan2Clicked[i][1]);
        element.classList.add(this.CoopPlan2Clicked[i][1]+"-highlighted");
    }
    break; 
  case "CoopPlan3Biomedical": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].show(true);
    }
    width = this.CoopPlan3BiomedicalTerms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    document.getElementById("footer").style.width = widthstr;
    for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
        var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
        element.classList.remove(this.CoopPlan3BiomedicalClicked[i][1]);
        element.classList.add(this.CoopPlan3BiomedicalClicked[i][1]+"-highlighted");
    }
    break; 
  case "CoopPlan4": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].show(true);
    }
    width = this.CoopPlan4Terms*210 + 50;
    widthstr = width.toString() + "px";
    document.getElementById("header").style.width = widthstr;
    document.getElementById("footer").style.width = widthstr;
    for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
        var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
        element.classList.remove(this.CoopPlan4Clicked[i][1]);
        element.classList.add(this.CoopPlan4Clicked[i][1]+"-highlighted");
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
this.addToClicked = function(element) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.TraditionalPlanClicked.push(element);
    }
    break; case "AlternatePlan":
    var index = this.AlternatePlanClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.AlternatePlanClicked.push(element);
    }
    break; case "CoopPlan1":
    var index = this.CoopPlan1Clicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.CoopPlan1Clicked.push(element);
    }
    break; case "CoopPlan2":
    var index = this.CoopPlan2Clicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.CoopPlan2Clicked.push(element);
    }
    break; case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.CoopPlan3BiomedicalClicked.push(element);
    }
    break; case "CoopPlan4":
    var index = this.CoopPlan4Clicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.CoopPlan4Clicked.push(element);
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
    break; case "AlternatePlan":
    var index = this.AlternatePlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.AlternatePlanClicked.splice(index, 1);
    }
    break; case "CoopPlan1":
    var index = this.CoopPlan1Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.CoopPlan1Clicked.splice(index, 1);
    }
    break; case "CoopPlan2":
    var index = this.CoopPlan2Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.CoopPlan2Clicked.splice(index, 1);
    }
    break; case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.CoopPlan3BiomedicalClicked.splice(index, 1);
    }
    break; case "CoopPlan4":
    var index = this.CoopPlan4Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.CoopPlan4Clicked.splice(index, 1);
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
var BASICSCIENCESflag = false;
var ENGINEERINGPROFESSIONflag = false;
var Otherflag = false;
var MATHflag = false;
var ENGINEERINGDESIGNflag = false;
var ENGINEERINGSCIENCESflag = false;
var ComplementaryElectiveflag = false;
var ProgramTechnicalElectiveflag = false;
var ITSElectiveflag = false;
$scope.BASICSCIENCESclickListener = function() {
    if (!BASICSCIENCESflag) {
        that.highlightCategory("BASICSCIENCES", $scope.selectedPlan);
        BASICSCIENCESflag = true
    }
    else {
        that.unhighlightCategory("BASICSCIENCES", $scope.selectedPlan);
        BASICSCIENCESflag = false
    }
}
$scope.ENGINEERINGPROFESSIONclickListener = function() {
    if (!ENGINEERINGPROFESSIONflag) {
        that.highlightCategory("ENGINEERINGPROFESSION", $scope.selectedPlan);
        ENGINEERINGPROFESSIONflag = true
    }
    else {
        that.unhighlightCategory("ENGINEERINGPROFESSION", $scope.selectedPlan);
        ENGINEERINGPROFESSIONflag = false
    }
}
$scope.OtherclickListener = function() {
    if (!Otherflag) {
        that.highlightCategory("Other", $scope.selectedPlan);
        Otherflag = true
    }
    else {
        that.unhighlightCategory("Other", $scope.selectedPlan);
        Otherflag = false
    }
}
$scope.MATHclickListener = function() {
    if (!MATHflag) {
        that.highlightCategory("MATH", $scope.selectedPlan);
        MATHflag = true
    }
    else {
        that.unhighlightCategory("MATH", $scope.selectedPlan);
        MATHflag = false
    }
}
$scope.ENGINEERINGDESIGNclickListener = function() {
    if (!ENGINEERINGDESIGNflag) {
        that.highlightCategory("ENGINEERINGDESIGN", $scope.selectedPlan);
        ENGINEERINGDESIGNflag = true
    }
    else {
        that.unhighlightCategory("ENGINEERINGDESIGN", $scope.selectedPlan);
        ENGINEERINGDESIGNflag = false
    }
}
$scope.ENGINEERINGSCIENCESclickListener = function() {
    if (!ENGINEERINGSCIENCESflag) {
        that.highlightCategory("ENGINEERINGSCIENCES", $scope.selectedPlan);
        ENGINEERINGSCIENCESflag = true
    }
    else {
        that.unhighlightCategory("ENGINEERINGSCIENCES", $scope.selectedPlan);
        ENGINEERINGSCIENCESflag = false
    }
}
$scope.ComplementaryElectiveclickListener = function() {
    if (!ComplementaryElectiveflag) {
        that.highlightCategory("ComplementaryElective", $scope.selectedPlan);
        ComplementaryElectiveflag = true
    }
    else {
        that.unhighlightCategory("ComplementaryElective", $scope.selectedPlan);
        ComplementaryElectiveflag = false
    }
}
$scope.ProgramTechnicalElectiveclickListener = function() {
    if (!ProgramTechnicalElectiveflag) {
        that.highlightCategory("ProgramTechnicalElective", $scope.selectedPlan);
        ProgramTechnicalElectiveflag = true
    }
    else {
        that.unhighlightCategory("ProgramTechnicalElective", $scope.selectedPlan);
        ProgramTechnicalElectiveflag = false
    }
}
$scope.ITSElectiveclickListener = function() {
    if (!ITSElectiveflag) {
        that.highlightCategory("ITSElective", $scope.selectedPlan);
        ITSElectiveflag = true
    }
    else {
        that.unhighlightCategory("ITSElective", $scope.selectedPlan);
        ITSElectiveflag = false
    }
}
$scope.clickListener = function() {
    if (!flag) {
        that.highlightCategory("", $scope.selectedPlan);
        flag = true
    }
    else {
        that.unhighlightCategory("", $scope.selectedPlan);
        flag = false
    }
}
this.highlightCategory = function(categoryName, planName) {
switch(categoryName) { 
  case "BASICSCIENCES":
    switch(planName) {
      case "TraditionalPlan":
       var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
       CHEM103TraditionalPlanelement.classList.remove("BASICSCIENCES");
       CHEM103TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
       var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
       ENGG130TraditionalPlanelement.classList.remove("BASICSCIENCES");
       ENGG130TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
       var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
       PHYS130TraditionalPlanelement.classList.remove("BASICSCIENCES");
       PHYS130TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
       var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
       CHEM105TraditionalPlanelement.classList.remove("BASICSCIENCES");
       CHEM105TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
       var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
       ENCMP100TraditionalPlanelement.classList.remove("BASICSCIENCES");
       ENCMP100TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
       var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
       ENPH131TraditionalPlanelement.classList.remove("BASICSCIENCES");
       ENPH131TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
       break;
      case "AlternatePlan":
       var CHEM103AlternatePlanelement = document.getElementById("CHEM103AlternatePlan");
       CHEM103AlternatePlanelement.classList.remove("BASICSCIENCES");
       CHEM103AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
       var ENGG130AlternatePlanelement = document.getElementById("ENGG130AlternatePlan");
       ENGG130AlternatePlanelement.classList.remove("BASICSCIENCES");
       ENGG130AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
       var PHYS130AlternatePlanelement = document.getElementById("PHYS130AlternatePlan");
       PHYS130AlternatePlanelement.classList.remove("BASICSCIENCES");
       PHYS130AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
       var CHEM105AlternatePlanelement = document.getElementById("CHEM105AlternatePlan");
       CHEM105AlternatePlanelement.classList.remove("BASICSCIENCES");
       CHEM105AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
       var ENCMP100AlternatePlanelement = document.getElementById("ENCMP100AlternatePlan");
       ENCMP100AlternatePlanelement.classList.remove("BASICSCIENCES");
       ENCMP100AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
       var ENPH131AlternatePlanelement = document.getElementById("ENPH131AlternatePlan");
       ENPH131AlternatePlanelement.classList.remove("BASICSCIENCES");
       ENPH131AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
       break;
      case "CoopPlan1":
       var CHEM103CoopPlan1element = document.getElementById("CHEM103CoopPlan1");
       CHEM103CoopPlan1element.classList.remove("BASICSCIENCES");
       CHEM103CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
       var ENGG130CoopPlan1element = document.getElementById("ENGG130CoopPlan1");
       ENGG130CoopPlan1element.classList.remove("BASICSCIENCES");
       ENGG130CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
       var PHYS130CoopPlan1element = document.getElementById("PHYS130CoopPlan1");
       PHYS130CoopPlan1element.classList.remove("BASICSCIENCES");
       PHYS130CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
       var CHEM105CoopPlan1element = document.getElementById("CHEM105CoopPlan1");
       CHEM105CoopPlan1element.classList.remove("BASICSCIENCES");
       CHEM105CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
       var ENCMP100CoopPlan1element = document.getElementById("ENCMP100CoopPlan1");
       ENCMP100CoopPlan1element.classList.remove("BASICSCIENCES");
       ENCMP100CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
       var ENPH131CoopPlan1element = document.getElementById("ENPH131CoopPlan1");
       ENPH131CoopPlan1element.classList.remove("BASICSCIENCES");
       ENPH131CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
       break;
      case "CoopPlan2":
       var CHEM103CoopPlan2element = document.getElementById("CHEM103CoopPlan2");
       CHEM103CoopPlan2element.classList.remove("BASICSCIENCES");
       CHEM103CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
       var ENGG130CoopPlan2element = document.getElementById("ENGG130CoopPlan2");
       ENGG130CoopPlan2element.classList.remove("BASICSCIENCES");
       ENGG130CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
       var PHYS130CoopPlan2element = document.getElementById("PHYS130CoopPlan2");
       PHYS130CoopPlan2element.classList.remove("BASICSCIENCES");
       PHYS130CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
       var CHEM105CoopPlan2element = document.getElementById("CHEM105CoopPlan2");
       CHEM105CoopPlan2element.classList.remove("BASICSCIENCES");
       CHEM105CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
       var ENCMP100CoopPlan2element = document.getElementById("ENCMP100CoopPlan2");
       ENCMP100CoopPlan2element.classList.remove("BASICSCIENCES");
       ENCMP100CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
       var ENPH131CoopPlan2element = document.getElementById("ENPH131CoopPlan2");
       ENPH131CoopPlan2element.classList.remove("BASICSCIENCES");
       ENPH131CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
       break;
      case "CoopPlan3Biomedical":
       var CHEM103CoopPlan3Biomedicalelement = document.getElementById("CHEM103CoopPlan3Biomedical");
       CHEM103CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
       CHEM103CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
       var ENGG130CoopPlan3Biomedicalelement = document.getElementById("ENGG130CoopPlan3Biomedical");
       ENGG130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
       ENGG130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
       var PHYS130CoopPlan3Biomedicalelement = document.getElementById("PHYS130CoopPlan3Biomedical");
       PHYS130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
       PHYS130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
       var CHEM105CoopPlan3Biomedicalelement = document.getElementById("CHEM105CoopPlan3Biomedical");
       CHEM105CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
       CHEM105CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
       var ENCMP100CoopPlan3Biomedicalelement = document.getElementById("ENCMP100CoopPlan3Biomedical");
       ENCMP100CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
       ENCMP100CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
       var ENPH131CoopPlan3Biomedicalelement = document.getElementById("ENPH131CoopPlan3Biomedical");
       ENPH131CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
       ENPH131CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
       break;
      case "CoopPlan4":
       var CHEM103CoopPlan4element = document.getElementById("CHEM103CoopPlan4");
       CHEM103CoopPlan4element.classList.remove("BASICSCIENCES");
       CHEM103CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
       var ENGG130CoopPlan4element = document.getElementById("ENGG130CoopPlan4");
       ENGG130CoopPlan4element.classList.remove("BASICSCIENCES");
       ENGG130CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
       var PHYS130CoopPlan4element = document.getElementById("PHYS130CoopPlan4");
       PHYS130CoopPlan4element.classList.remove("BASICSCIENCES");
       PHYS130CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
       var CHEM105CoopPlan4element = document.getElementById("CHEM105CoopPlan4");
       CHEM105CoopPlan4element.classList.remove("BASICSCIENCES");
       CHEM105CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
       var ENCMP100CoopPlan4element = document.getElementById("ENCMP100CoopPlan4");
       ENCMP100CoopPlan4element.classList.remove("BASICSCIENCES");
       ENCMP100CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
       var ENPH131CoopPlan4element = document.getElementById("ENPH131CoopPlan4");
       ENPH131CoopPlan4element.classList.remove("BASICSCIENCES");
       ENPH131CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
       break;
       }
      break;
  case "ENGINEERINGPROFESSION":
    switch(planName) {
      case "TraditionalPlan":
       var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
       ENGG100TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG100TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var MECE200TraditionalPlanelement = document.getElementById("MECE200TraditionalPlan");
       MECE200TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION");
       MECE200TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
       ENGG404TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG404TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
       ENGG400TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG400TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       break;
      case "AlternatePlan":
       var ENGG100AlternatePlanelement = document.getElementById("ENGG100AlternatePlan");
       ENGG100AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG100AlternatePlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG404AlternatePlanelement = document.getElementById("ENGG404AlternatePlan");
       ENGG404AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG404AlternatePlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var MECE200AlternatePlanelement = document.getElementById("MECE200AlternatePlan");
       MECE200AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION");
       MECE200AlternatePlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG400AlternatePlanelement = document.getElementById("ENGG400AlternatePlan");
       ENGG400AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG400AlternatePlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       break;
      case "CoopPlan1":
       var ENGG100CoopPlan1element = document.getElementById("ENGG100CoopPlan1");
       ENGG100CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       ENGG100CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG299CoopPlan1element = document.getElementById("ENGG299CoopPlan1");
       ENGG299CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       ENGG299CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var MECE200CoopPlan1element = document.getElementById("MECE200CoopPlan1");
       MECE200CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       MECE200CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP901CoopPlan1element = document.getElementById("WKEXP901CoopPlan1");
       WKEXP901CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP901CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP902CoopPlan1element = document.getElementById("WKEXP902CoopPlan1");
       WKEXP902CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP902CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP903CoopPlan1element = document.getElementById("WKEXP903CoopPlan1");
       WKEXP903CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP903CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP904CoopPlan1element = document.getElementById("WKEXP904CoopPlan1");
       WKEXP904CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP904CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG404CoopPlan1element = document.getElementById("ENGG404CoopPlan1");
       ENGG404CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       ENGG404CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP905CoopPlan1element = document.getElementById("WKEXP905CoopPlan1");
       WKEXP905CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP905CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG400CoopPlan1element = document.getElementById("ENGG400CoopPlan1");
       ENGG400CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
       ENGG400CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
       break;
      case "CoopPlan2":
       var ENGG100CoopPlan2element = document.getElementById("ENGG100CoopPlan2");
       ENGG100CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       ENGG100CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG299CoopPlan2element = document.getElementById("ENGG299CoopPlan2");
       ENGG299CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       ENGG299CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var MECE200CoopPlan2element = document.getElementById("MECE200CoopPlan2");
       MECE200CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       MECE200CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP901CoopPlan2element = document.getElementById("WKEXP901CoopPlan2");
       WKEXP901CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP901CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP902CoopPlan2element = document.getElementById("WKEXP902CoopPlan2");
       WKEXP902CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP902CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP903CoopPlan2element = document.getElementById("WKEXP903CoopPlan2");
       WKEXP903CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP903CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP904CoopPlan2element = document.getElementById("WKEXP904CoopPlan2");
       WKEXP904CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP904CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP905CoopPlan2element = document.getElementById("WKEXP905CoopPlan2");
       WKEXP905CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP905CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG400CoopPlan2element = document.getElementById("ENGG400CoopPlan2");
       ENGG400CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       ENGG400CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG404CoopPlan2element = document.getElementById("ENGG404CoopPlan2");
       ENGG404CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
       ENGG404CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
       break;
      case "CoopPlan3Biomedical":
       var ENGG100CoopPlan3Biomedicalelement = document.getElementById("ENGG100CoopPlan3Biomedical");
       ENGG100CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG100CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG299CoopPlan3Biomedicalelement = document.getElementById("ENGG299CoopPlan3Biomedical");
       ENGG299CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG299CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var MECE200CoopPlan3Biomedicalelement = document.getElementById("MECE200CoopPlan3Biomedical");
       MECE200CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
       MECE200CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP902CoopPlan3Biomedicalelement = document.getElementById("WKEXP902CoopPlan3Biomedical");
       WKEXP902CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
       WKEXP902CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP903CoopPlan3Biomedicalelement = document.getElementById("WKEXP903CoopPlan3Biomedical");
       WKEXP903CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
       WKEXP903CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG404CoopPlan3Biomedicalelement = document.getElementById("ENGG404CoopPlan3Biomedical");
       ENGG404CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG404CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP904CoopPlan3Biomedicalelement = document.getElementById("WKEXP904CoopPlan3Biomedical");
       WKEXP904CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
       WKEXP904CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP905CoopPlan3Biomedicalelement = document.getElementById("WKEXP905CoopPlan3Biomedical");
       WKEXP905CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
       WKEXP905CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG400CoopPlan3Biomedicalelement = document.getElementById("ENGG400CoopPlan3Biomedical");
       ENGG400CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
       ENGG400CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
       break;
      case "CoopPlan4":
       var ENGG100CoopPlan4element = document.getElementById("ENGG100CoopPlan4");
       ENGG100CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       ENGG100CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG299CoopPlan4element = document.getElementById("ENGG299CoopPlan4");
       ENGG299CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       ENGG299CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var MECE200CoopPlan4element = document.getElementById("MECE200CoopPlan4");
       MECE200CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       MECE200CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP901CoopPlan4element = document.getElementById("WKEXP901CoopPlan4");
       WKEXP901CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP901CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP902CoopPlan4element = document.getElementById("WKEXP902CoopPlan4");
       WKEXP902CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP902CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP903CoopPlan4element = document.getElementById("WKEXP903CoopPlan4");
       WKEXP903CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP903CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP904CoopPlan4element = document.getElementById("WKEXP904CoopPlan4");
       WKEXP904CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP904CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var WKEXP905CoopPlan4element = document.getElementById("WKEXP905CoopPlan4");
       WKEXP905CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       WKEXP905CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG404CoopPlan4element = document.getElementById("ENGG404CoopPlan4");
       ENGG404CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       ENGG404CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       var ENGG400CoopPlan4element = document.getElementById("ENGG400CoopPlan4");
       ENGG400CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
       ENGG400CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
       var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
       ENGL199TraditionalPlanelement.classList.remove("Other");
       ENGL199TraditionalPlanelement.classList.add("Other-highlighted");
       var ENGM310TraditionalPlanelement = document.getElementById("ENGM310TraditionalPlan");
       ENGM310TraditionalPlanelement.classList.remove("Other");
       ENGM310TraditionalPlanelement.classList.add("Other-highlighted");
       var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
       ENGM401TraditionalPlanelement.classList.remove("Other");
       ENGM401TraditionalPlanelement.classList.add("Other-highlighted");
       break;
      case "AlternatePlan":
       var ENGL199AlternatePlanelement = document.getElementById("ENGL199AlternatePlan");
       ENGL199AlternatePlanelement.classList.remove("Other");
       ENGL199AlternatePlanelement.classList.add("Other-highlighted");
       var ENGM310AlternatePlanelement = document.getElementById("ENGM310AlternatePlan");
       ENGM310AlternatePlanelement.classList.remove("Other");
       ENGM310AlternatePlanelement.classList.add("Other-highlighted");
       var ENGM401AlternatePlanelement = document.getElementById("ENGM401AlternatePlan");
       ENGM401AlternatePlanelement.classList.remove("Other");
       ENGM401AlternatePlanelement.classList.add("Other-highlighted");
       break;
      case "CoopPlan1":
       var ENGL199CoopPlan1element = document.getElementById("ENGL199CoopPlan1");
       ENGL199CoopPlan1element.classList.remove("Other");
       ENGL199CoopPlan1element.classList.add("Other-highlighted");
       var ENGM310CoopPlan1element = document.getElementById("ENGM310CoopPlan1");
       ENGM310CoopPlan1element.classList.remove("Other");
       ENGM310CoopPlan1element.classList.add("Other-highlighted");
       var ENGM401CoopPlan1element = document.getElementById("ENGM401CoopPlan1");
       ENGM401CoopPlan1element.classList.remove("Other");
       ENGM401CoopPlan1element.classList.add("Other-highlighted");
       break;
      case "CoopPlan2":
       var ENGL199CoopPlan2element = document.getElementById("ENGL199CoopPlan2");
       ENGL199CoopPlan2element.classList.remove("Other");
       ENGL199CoopPlan2element.classList.add("Other-highlighted");
       var ENGM310CoopPlan2element = document.getElementById("ENGM310CoopPlan2");
       ENGM310CoopPlan2element.classList.remove("Other");
       ENGM310CoopPlan2element.classList.add("Other-highlighted");
       var ENGM401CoopPlan2element = document.getElementById("ENGM401CoopPlan2");
       ENGM401CoopPlan2element.classList.remove("Other");
       ENGM401CoopPlan2element.classList.add("Other-highlighted");
       break;
      case "CoopPlan3Biomedical":
       var ENGL199CoopPlan3Biomedicalelement = document.getElementById("ENGL199CoopPlan3Biomedical");
       ENGL199CoopPlan3Biomedicalelement.classList.remove("Other");
       ENGL199CoopPlan3Biomedicalelement.classList.add("Other-highlighted");
       var ENGM310CoopPlan3Biomedicalelement = document.getElementById("ENGM310CoopPlan3Biomedical");
       ENGM310CoopPlan3Biomedicalelement.classList.remove("Other");
       ENGM310CoopPlan3Biomedicalelement.classList.add("Other-highlighted");
       var ENGM401CoopPlan3Biomedicalelement = document.getElementById("ENGM401CoopPlan3Biomedical");
       ENGM401CoopPlan3Biomedicalelement.classList.remove("Other");
       ENGM401CoopPlan3Biomedicalelement.classList.add("Other-highlighted");
       break;
      case "CoopPlan4":
       var ENGL199CoopPlan4element = document.getElementById("ENGL199CoopPlan4");
       ENGL199CoopPlan4element.classList.remove("Other");
       ENGL199CoopPlan4element.classList.add("Other-highlighted");
       var ENGM310CoopPlan4element = document.getElementById("ENGM310CoopPlan4");
       ENGM310CoopPlan4element.classList.remove("Other");
       ENGM310CoopPlan4element.classList.add("Other-highlighted");
       var ENGM401CoopPlan4element = document.getElementById("ENGM401CoopPlan4");
       ENGM401CoopPlan4element.classList.remove("Other");
       ENGM401CoopPlan4element.classList.add("Other-highlighted");
       break;
       }
      break;
  case "MATH":
    switch(planName) {
      case "TraditionalPlan":
       var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
       MATH100TraditionalPlanelement.classList.remove("MATH");
       MATH100TraditionalPlanelement.classList.add("MATH-highlighted");
       var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
       MATH101TraditionalPlanelement.classList.remove("MATH");
       MATH101TraditionalPlanelement.classList.add("MATH-highlighted");
       var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
       MATH102TraditionalPlanelement.classList.remove("MATH");
       MATH102TraditionalPlanelement.classList.add("MATH-highlighted");
       var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
       MATH209TraditionalPlanelement.classList.remove("MATH");
       MATH209TraditionalPlanelement.classList.add("MATH-highlighted");
       var STAT235TraditionalPlanelement = document.getElementById("STAT235TraditionalPlan");
       STAT235TraditionalPlanelement.classList.remove("MATH");
       STAT235TraditionalPlanelement.classList.add("MATH-highlighted");
       var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
       MATH201TraditionalPlanelement.classList.remove("MATH");
       MATH201TraditionalPlanelement.classList.add("MATH-highlighted");
       var MATH300TraditionalPlanelement = document.getElementById("MATH300TraditionalPlan");
       MATH300TraditionalPlanelement.classList.remove("MATH");
       MATH300TraditionalPlanelement.classList.add("MATH-highlighted");
       var MECE390TraditionalPlanelement = document.getElementById("MECE390TraditionalPlan");
       MECE390TraditionalPlanelement.classList.remove("MATH");
       MECE390TraditionalPlanelement.classList.add("MATH-highlighted");
       break;
      case "AlternatePlan":
       var MATH100AlternatePlanelement = document.getElementById("MATH100AlternatePlan");
       MATH100AlternatePlanelement.classList.remove("MATH");
       MATH100AlternatePlanelement.classList.add("MATH-highlighted");
       var MATH101AlternatePlanelement = document.getElementById("MATH101AlternatePlan");
       MATH101AlternatePlanelement.classList.remove("MATH");
       MATH101AlternatePlanelement.classList.add("MATH-highlighted");
       var MATH102AlternatePlanelement = document.getElementById("MATH102AlternatePlan");
       MATH102AlternatePlanelement.classList.remove("MATH");
       MATH102AlternatePlanelement.classList.add("MATH-highlighted");
       var MATH201AlternatePlanelement = document.getElementById("MATH201AlternatePlan");
       MATH201AlternatePlanelement.classList.remove("MATH");
       MATH201AlternatePlanelement.classList.add("MATH-highlighted");
       var MATH209AlternatePlanelement = document.getElementById("MATH209AlternatePlan");
       MATH209AlternatePlanelement.classList.remove("MATH");
       MATH209AlternatePlanelement.classList.add("MATH-highlighted");
       var STAT235AlternatePlanelement = document.getElementById("STAT235AlternatePlan");
       STAT235AlternatePlanelement.classList.remove("MATH");
       STAT235AlternatePlanelement.classList.add("MATH-highlighted");
       var MATH300AlternatePlanelement = document.getElementById("MATH300AlternatePlan");
       MATH300AlternatePlanelement.classList.remove("MATH");
       MATH300AlternatePlanelement.classList.add("MATH-highlighted");
       var MECE390AlternatePlanelement = document.getElementById("MECE390AlternatePlan");
       MECE390AlternatePlanelement.classList.remove("MATH");
       MECE390AlternatePlanelement.classList.add("MATH-highlighted");
       break;
      case "CoopPlan1":
       var MATH100CoopPlan1element = document.getElementById("MATH100CoopPlan1");
       MATH100CoopPlan1element.classList.remove("MATH");
       MATH100CoopPlan1element.classList.add("MATH-highlighted");
       var MATH101CoopPlan1element = document.getElementById("MATH101CoopPlan1");
       MATH101CoopPlan1element.classList.remove("MATH");
       MATH101CoopPlan1element.classList.add("MATH-highlighted");
       var MATH102CoopPlan1element = document.getElementById("MATH102CoopPlan1");
       MATH102CoopPlan1element.classList.remove("MATH");
       MATH102CoopPlan1element.classList.add("MATH-highlighted");
       var MATH209CoopPlan1element = document.getElementById("MATH209CoopPlan1");
       MATH209CoopPlan1element.classList.remove("MATH");
       MATH209CoopPlan1element.classList.add("MATH-highlighted");
       var STAT235CoopPlan1element = document.getElementById("STAT235CoopPlan1");
       STAT235CoopPlan1element.classList.remove("MATH");
       STAT235CoopPlan1element.classList.add("MATH-highlighted");
       var MATH201CoopPlan1element = document.getElementById("MATH201CoopPlan1");
       MATH201CoopPlan1element.classList.remove("MATH");
       MATH201CoopPlan1element.classList.add("MATH-highlighted");
       var MATH300CoopPlan1element = document.getElementById("MATH300CoopPlan1");
       MATH300CoopPlan1element.classList.remove("MATH");
       MATH300CoopPlan1element.classList.add("MATH-highlighted");
       var MECE390CoopPlan1element = document.getElementById("MECE390CoopPlan1");
       MECE390CoopPlan1element.classList.remove("MATH");
       MECE390CoopPlan1element.classList.add("MATH-highlighted");
       break;
      case "CoopPlan2":
       var MATH100CoopPlan2element = document.getElementById("MATH100CoopPlan2");
       MATH100CoopPlan2element.classList.remove("MATH");
       MATH100CoopPlan2element.classList.add("MATH-highlighted");
       var MATH101CoopPlan2element = document.getElementById("MATH101CoopPlan2");
       MATH101CoopPlan2element.classList.remove("MATH");
       MATH101CoopPlan2element.classList.add("MATH-highlighted");
       var MATH102CoopPlan2element = document.getElementById("MATH102CoopPlan2");
       MATH102CoopPlan2element.classList.remove("MATH");
       MATH102CoopPlan2element.classList.add("MATH-highlighted");
       var MATH209CoopPlan2element = document.getElementById("MATH209CoopPlan2");
       MATH209CoopPlan2element.classList.remove("MATH");
       MATH209CoopPlan2element.classList.add("MATH-highlighted");
       var STAT235CoopPlan2element = document.getElementById("STAT235CoopPlan2");
       STAT235CoopPlan2element.classList.remove("MATH");
       STAT235CoopPlan2element.classList.add("MATH-highlighted");
       var MATH201CoopPlan2element = document.getElementById("MATH201CoopPlan2");
       MATH201CoopPlan2element.classList.remove("MATH");
       MATH201CoopPlan2element.classList.add("MATH-highlighted");
       var MATH300CoopPlan2element = document.getElementById("MATH300CoopPlan2");
       MATH300CoopPlan2element.classList.remove("MATH");
       MATH300CoopPlan2element.classList.add("MATH-highlighted");
       var MECE390CoopPlan2element = document.getElementById("MECE390CoopPlan2");
       MECE390CoopPlan2element.classList.remove("MATH");
       MECE390CoopPlan2element.classList.add("MATH-highlighted");
       break;
      case "CoopPlan3Biomedical":
       var MATH100CoopPlan3Biomedicalelement = document.getElementById("MATH100CoopPlan3Biomedical");
       MATH100CoopPlan3Biomedicalelement.classList.remove("MATH");
       MATH100CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
       var MATH101CoopPlan3Biomedicalelement = document.getElementById("MATH101CoopPlan3Biomedical");
       MATH101CoopPlan3Biomedicalelement.classList.remove("MATH");
       MATH101CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
       var MATH102CoopPlan3Biomedicalelement = document.getElementById("MATH102CoopPlan3Biomedical");
       MATH102CoopPlan3Biomedicalelement.classList.remove("MATH");
       MATH102CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
       var MATH209CoopPlan3Biomedicalelement = document.getElementById("MATH209CoopPlan3Biomedical");
       MATH209CoopPlan3Biomedicalelement.classList.remove("MATH");
       MATH209CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
       var STAT235CoopPlan3Biomedicalelement = document.getElementById("STAT235CoopPlan3Biomedical");
       STAT235CoopPlan3Biomedicalelement.classList.remove("MATH");
       STAT235CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
       var MATH201CoopPlan3Biomedicalelement = document.getElementById("MATH201CoopPlan3Biomedical");
       MATH201CoopPlan3Biomedicalelement.classList.remove("MATH");
       MATH201CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
       var MECE390CoopPlan3Biomedicalelement = document.getElementById("MECE390CoopPlan3Biomedical");
       MECE390CoopPlan3Biomedicalelement.classList.remove("MATH");
       MECE390CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
       var MATH300CoopPlan3Biomedicalelement = document.getElementById("MATH300CoopPlan3Biomedical");
       MATH300CoopPlan3Biomedicalelement.classList.remove("MATH");
       MATH300CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
       break;
      case "CoopPlan4":
       var MATH100CoopPlan4element = document.getElementById("MATH100CoopPlan4");
       MATH100CoopPlan4element.classList.remove("MATH");
       MATH100CoopPlan4element.classList.add("MATH-highlighted");
       var MATH101CoopPlan4element = document.getElementById("MATH101CoopPlan4");
       MATH101CoopPlan4element.classList.remove("MATH");
       MATH101CoopPlan4element.classList.add("MATH-highlighted");
       var MATH102CoopPlan4element = document.getElementById("MATH102CoopPlan4");
       MATH102CoopPlan4element.classList.remove("MATH");
       MATH102CoopPlan4element.classList.add("MATH-highlighted");
       var MATH209CoopPlan4element = document.getElementById("MATH209CoopPlan4");
       MATH209CoopPlan4element.classList.remove("MATH");
       MATH209CoopPlan4element.classList.add("MATH-highlighted");
       var STAT235CoopPlan4element = document.getElementById("STAT235CoopPlan4");
       STAT235CoopPlan4element.classList.remove("MATH");
       STAT235CoopPlan4element.classList.add("MATH-highlighted");
       var MATH201CoopPlan4element = document.getElementById("MATH201CoopPlan4");
       MATH201CoopPlan4element.classList.remove("MATH");
       MATH201CoopPlan4element.classList.add("MATH-highlighted");
       var MATH300CoopPlan4element = document.getElementById("MATH300CoopPlan4");
       MATH300CoopPlan4element.classList.remove("MATH");
       MATH300CoopPlan4element.classList.add("MATH-highlighted");
       var MECE390CoopPlan4element = document.getElementById("MECE390CoopPlan4");
       MECE390CoopPlan4element.classList.remove("MATH");
       MECE390CoopPlan4element.classList.add("MATH-highlighted");
       break;
       }
      break;
  case "ENGINEERINGDESIGN":
    switch(planName) {
      case "TraditionalPlan":
       var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
       ENGG160TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
       ENGG160TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE260TraditionalPlanelement = document.getElementById("MECE260TraditionalPlan");
       MECE260TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE260TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE265TraditionalPlanelement = document.getElementById("MECE265TraditionalPlan");
       MECE265TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE265TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE360TraditionalPlanelement = document.getElementById("MECE360TraditionalPlan");
       MECE360TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE360TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE362TraditionalPlanelement = document.getElementById("MECE362TraditionalPlan");
       MECE362TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE362TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE460TraditionalPlanelement = document.getElementById("MECE460TraditionalPlan");
       MECE460TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE460TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       break;
      case "AlternatePlan":
       var ENGG160AlternatePlanelement = document.getElementById("ENGG160AlternatePlan");
       ENGG160AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
       ENGG160AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE260AlternatePlanelement = document.getElementById("MECE260AlternatePlan");
       MECE260AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE260AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE265AlternatePlanelement = document.getElementById("MECE265AlternatePlan");
       MECE265AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE265AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE360AlternatePlanelement = document.getElementById("MECE360AlternatePlan");
       MECE360AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE360AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE362AlternatePlanelement = document.getElementById("MECE362AlternatePlan");
       MECE362AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE362AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE460AlternatePlanelement = document.getElementById("MECE460AlternatePlan");
       MECE460AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
       MECE460AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
       break;
      case "CoopPlan1":
       var ENGG160CoopPlan1element = document.getElementById("ENGG160CoopPlan1");
       ENGG160CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
       ENGG160CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE260CoopPlan1element = document.getElementById("MECE260CoopPlan1");
       MECE260CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
       MECE260CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE265CoopPlan1element = document.getElementById("MECE265CoopPlan1");
       MECE265CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
       MECE265CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE360CoopPlan1element = document.getElementById("MECE360CoopPlan1");
       MECE360CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
       MECE360CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE362CoopPlan1element = document.getElementById("MECE362CoopPlan1");
       MECE362CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
       MECE362CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE460CoopPlan1element = document.getElementById("MECE460CoopPlan1");
       MECE460CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
       MECE460CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
       break;
      case "CoopPlan2":
       var ENGG160CoopPlan2element = document.getElementById("ENGG160CoopPlan2");
       ENGG160CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
       ENGG160CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE260CoopPlan2element = document.getElementById("MECE260CoopPlan2");
       MECE260CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
       MECE260CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE265CoopPlan2element = document.getElementById("MECE265CoopPlan2");
       MECE265CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
       MECE265CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE360CoopPlan2element = document.getElementById("MECE360CoopPlan2");
       MECE360CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
       MECE360CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE362CoopPlan2element = document.getElementById("MECE362CoopPlan2");
       MECE362CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
       MECE362CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE460CoopPlan2element = document.getElementById("MECE460CoopPlan2");
       MECE460CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
       MECE460CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
       break;
      case "CoopPlan3Biomedical":
       var ENGG160CoopPlan3Biomedicalelement = document.getElementById("ENGG160CoopPlan3Biomedical");
       ENGG160CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
       ENGG160CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE260CoopPlan3Biomedicalelement = document.getElementById("MECE260CoopPlan3Biomedical");
       MECE260CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
       MECE260CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE265CoopPlan3Biomedicalelement = document.getElementById("MECE265CoopPlan3Biomedical");
       MECE265CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
       MECE265CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE360CoopPlan3Biomedicalelement = document.getElementById("MECE360CoopPlan3Biomedical");
       MECE360CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
       MECE360CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE362CoopPlan3Biomedicalelement = document.getElementById("MECE362CoopPlan3Biomedical");
       MECE362CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
       MECE362CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE460CoopPlan3Biomedicalelement = document.getElementById("MECE460CoopPlan3Biomedical");
       MECE460CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
       MECE460CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
       break;
      case "CoopPlan4":
       var ENGG160CoopPlan4element = document.getElementById("ENGG160CoopPlan4");
       ENGG160CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
       ENGG160CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE260CoopPlan4element = document.getElementById("MECE260CoopPlan4");
       MECE260CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
       MECE260CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE265CoopPlan4element = document.getElementById("MECE265CoopPlan4");
       MECE265CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
       MECE265CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE360CoopPlan4element = document.getElementById("MECE360CoopPlan4");
       MECE360CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
       MECE360CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE362CoopPlan4element = document.getElementById("MECE362CoopPlan4");
       MECE362CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
       MECE362CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
       var MECE460CoopPlan4element = document.getElementById("MECE460CoopPlan4");
       MECE460CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
       MECE460CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
       break;
       }
      break;
  case "ENGINEERINGSCIENCES":
    switch(planName) {
      case "TraditionalPlan":
       var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
       CIVE270TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       CIVE270TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
       CHE243TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       CHE243TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE250TraditionalPlanelement = document.getElementById("MECE250TraditionalPlan");
       MECE250TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE250TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var ECE209TraditionalPlanelement = document.getElementById("ECE209TraditionalPlan");
       ECE209TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       ECE209TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MATE202TraditionalPlanelement = document.getElementById("MATE202TraditionalPlan");
       MATE202TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MATE202TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE230TraditionalPlanelement = document.getElementById("MECE230TraditionalPlan");
       MECE230TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE230TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE300TraditionalPlanelement = document.getElementById("MECE300TraditionalPlan");
       MECE300TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE300TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE301TraditionalPlanelement = document.getElementById("MECE301TraditionalPlan");
       MECE301TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE301TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE331TraditionalPlanelement = document.getElementById("MECE331TraditionalPlan");
       MECE331TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE331TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE371TraditionalPlanelement = document.getElementById("MECE371TraditionalPlan");
       MECE371TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE371TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE380TraditionalPlanelement = document.getElementById("MECE380TraditionalPlan");
       MECE380TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE380TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE340TraditionalPlanelement = document.getElementById("MECE340TraditionalPlan");
       MECE340TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE340TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE430TraditionalPlanelement = document.getElementById("MECE430TraditionalPlan");
       MECE430TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE430TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE480TraditionalPlanelement = document.getElementById("MECE480TraditionalPlan");
       MECE480TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE480TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE463TraditionalPlanelement = document.getElementById("MECE463TraditionalPlan");
       MECE463TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE463TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE448TraditionalPlanelement = document.getElementById("CHE448TraditionalPlan");
       CHE448TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       CHE448TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE420TraditionalPlanelement = document.getElementById("MECE420TraditionalPlan");
       MECE420TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE420TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE403TraditionalPlanelement = document.getElementById("MECE403TraditionalPlan");
       MECE403TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE403TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE451TraditionalPlanelement = document.getElementById("MECE451TraditionalPlan");
       MECE451TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE451TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       break;
      case "AlternatePlan":
       var CIVE270AlternatePlanelement = document.getElementById("CIVE270AlternatePlan");
       CIVE270AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       CIVE270AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE230AlternatePlanelement = document.getElementById("MECE230AlternatePlan");
       MECE230AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE230AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE243AlternatePlanelement = document.getElementById("CHE243AlternatePlan");
       CHE243AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       CHE243AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var ECE209AlternatePlanelement = document.getElementById("ECE209AlternatePlan");
       ECE209AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       ECE209AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MATE202AlternatePlanelement = document.getElementById("MATE202AlternatePlan");
       MATE202AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MATE202AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE250AlternatePlanelement = document.getElementById("MECE250AlternatePlan");
       MECE250AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE250AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE300AlternatePlanelement = document.getElementById("MECE300AlternatePlan");
       MECE300AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE300AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE301AlternatePlanelement = document.getElementById("MECE301AlternatePlan");
       MECE301AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE301AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE331AlternatePlanelement = document.getElementById("MECE331AlternatePlan");
       MECE331AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE331AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE371AlternatePlanelement = document.getElementById("MECE371AlternatePlan");
       MECE371AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE371AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE380AlternatePlanelement = document.getElementById("MECE380AlternatePlan");
       MECE380AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE380AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE340AlternatePlanelement = document.getElementById("MECE340AlternatePlan");
       MECE340AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE340AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE430AlternatePlanelement = document.getElementById("MECE430AlternatePlan");
       MECE430AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE430AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE480AlternatePlanelement = document.getElementById("MECE480AlternatePlan");
       MECE480AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE480AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE463AlternatePlanelement = document.getElementById("MECE463AlternatePlan");
       MECE463AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE463AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE448AlternatePlanelement = document.getElementById("CHE448AlternatePlan");
       CHE448AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       CHE448AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE420AlternatePlanelement = document.getElementById("MECE420AlternatePlan");
       MECE420AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE420AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE403AlternatePlanelement = document.getElementById("MECE403AlternatePlan");
       MECE403AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE403AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE451AlternatePlanelement = document.getElementById("MECE451AlternatePlan");
       MECE451AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
       MECE451AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       break;
      case "CoopPlan1":
       var CIVE270CoopPlan1element = document.getElementById("CIVE270CoopPlan1");
       CIVE270CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       CIVE270CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE230CoopPlan1element = document.getElementById("MECE230CoopPlan1");
       MECE230CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE230CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE243CoopPlan1element = document.getElementById("CHE243CoopPlan1");
       CHE243CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       CHE243CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var ECE209CoopPlan1element = document.getElementById("ECE209CoopPlan1");
       ECE209CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       ECE209CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MATE202CoopPlan1element = document.getElementById("MATE202CoopPlan1");
       MATE202CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MATE202CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE250CoopPlan1element = document.getElementById("MECE250CoopPlan1");
       MECE250CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE250CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE300CoopPlan1element = document.getElementById("MECE300CoopPlan1");
       MECE300CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE300CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE301CoopPlan1element = document.getElementById("MECE301CoopPlan1");
       MECE301CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE301CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE331CoopPlan1element = document.getElementById("MECE331CoopPlan1");
       MECE331CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE331CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE371CoopPlan1element = document.getElementById("MECE371CoopPlan1");
       MECE371CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE371CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE380CoopPlan1element = document.getElementById("MECE380CoopPlan1");
       MECE380CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE380CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE340CoopPlan1element = document.getElementById("MECE340CoopPlan1");
       MECE340CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE340CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE430CoopPlan1element = document.getElementById("MECE430CoopPlan1");
       MECE430CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE430CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE480CoopPlan1element = document.getElementById("MECE480CoopPlan1");
       MECE480CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE480CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE463CoopPlan1element = document.getElementById("MECE463CoopPlan1");
       MECE463CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE463CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE448CoopPlan1element = document.getElementById("CHE448CoopPlan1");
       CHE448CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       CHE448CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE420CoopPlan1element = document.getElementById("MECE420CoopPlan1");
       MECE420CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE420CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE403CoopPlan1element = document.getElementById("MECE403CoopPlan1");
       MECE403CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE403CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE451CoopPlan1element = document.getElementById("MECE451CoopPlan1");
       MECE451CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
       MECE451CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
       break;
      case "CoopPlan2":
       var CHE243CoopPlan2element = document.getElementById("CHE243CoopPlan2");
       CHE243CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       CHE243CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CIVE270CoopPlan2element = document.getElementById("CIVE270CoopPlan2");
       CIVE270CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       CIVE270CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE250CoopPlan2element = document.getElementById("MECE250CoopPlan2");
       MECE250CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE250CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var ECE209CoopPlan2element = document.getElementById("ECE209CoopPlan2");
       ECE209CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       ECE209CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MATE202CoopPlan2element = document.getElementById("MATE202CoopPlan2");
       MATE202CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MATE202CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE230CoopPlan2element = document.getElementById("MECE230CoopPlan2");
       MECE230CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE230CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE300CoopPlan2element = document.getElementById("MECE300CoopPlan2");
       MECE300CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE300CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE301CoopPlan2element = document.getElementById("MECE301CoopPlan2");
       MECE301CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE301CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE331CoopPlan2element = document.getElementById("MECE331CoopPlan2");
       MECE331CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE331CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE371CoopPlan2element = document.getElementById("MECE371CoopPlan2");
       MECE371CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE371CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE380CoopPlan2element = document.getElementById("MECE380CoopPlan2");
       MECE380CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE380CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE340CoopPlan2element = document.getElementById("MECE340CoopPlan2");
       MECE340CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE340CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE403CoopPlan2element = document.getElementById("MECE403CoopPlan2");
       MECE403CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE403CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE451CoopPlan2element = document.getElementById("MECE451CoopPlan2");
       MECE451CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE451CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE448CoopPlan2element = document.getElementById("CHE448CoopPlan2");
       CHE448CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       CHE448CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE420CoopPlan2element = document.getElementById("MECE420CoopPlan2");
       MECE420CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE420CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE430CoopPlan2element = document.getElementById("MECE430CoopPlan2");
       MECE430CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE430CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE480CoopPlan2element = document.getElementById("MECE480CoopPlan2");
       MECE480CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE480CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE463CoopPlan2element = document.getElementById("MECE463CoopPlan2");
       MECE463CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
       MECE463CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
       break;
      case "CoopPlan3Biomedical":
       var CIVE270CoopPlan3Biomedicalelement = document.getElementById("CIVE270CoopPlan3Biomedical");
       CIVE270CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       CIVE270CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE243CoopPlan3Biomedicalelement = document.getElementById("CHE243CoopPlan3Biomedical");
       CHE243CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       CHE243CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE250CoopPlan3Biomedicalelement = document.getElementById("MECE250CoopPlan3Biomedical");
       MECE250CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE250CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var ECE209CoopPlan3Biomedicalelement = document.getElementById("ECE209CoopPlan3Biomedical");
       ECE209CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       ECE209CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MATE202CoopPlan3Biomedicalelement = document.getElementById("MATE202CoopPlan3Biomedical");
       MATE202CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MATE202CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE230CoopPlan3Biomedicalelement = document.getElementById("MECE230CoopPlan3Biomedical");
       MECE230CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE230CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE340CoopPlan3Biomedicalelement = document.getElementById("MECE340CoopPlan3Biomedical");
       MECE340CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE340CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE300CoopPlan3Biomedicalelement = document.getElementById("MECE300CoopPlan3Biomedical");
       MECE300CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE300CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE301CoopPlan3Biomedicalelement = document.getElementById("MECE301CoopPlan3Biomedical");
       MECE301CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE301CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE331CoopPlan3Biomedicalelement = document.getElementById("MECE331CoopPlan3Biomedical");
       MECE331CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE331CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE371CoopPlan3Biomedicalelement = document.getElementById("MECE371CoopPlan3Biomedical");
       MECE371CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE371CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE380CoopPlan3Biomedicalelement = document.getElementById("MECE380CoopPlan3Biomedical");
       MECE380CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE380CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE430CoopPlan3Biomedicalelement = document.getElementById("MECE430CoopPlan3Biomedical");
       MECE430CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE430CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE463CoopPlan3Biomedicalelement = document.getElementById("MECE463CoopPlan3Biomedical");
       MECE463CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE463CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE448CoopPlan3Biomedicalelement = document.getElementById("CHE448CoopPlan3Biomedical");
       CHE448CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       CHE448CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE420CoopPlan3Biomedicalelement = document.getElementById("MECE420CoopPlan3Biomedical");
       MECE420CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE420CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE403CoopPlan3Biomedicalelement = document.getElementById("MECE403CoopPlan3Biomedical");
       MECE403CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE403CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE451CoopPlan3Biomedicalelement = document.getElementById("MECE451CoopPlan3Biomedical");
       MECE451CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
       MECE451CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
       break;
      case "CoopPlan4":
       var CIVE270CoopPlan4element = document.getElementById("CIVE270CoopPlan4");
       CIVE270CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       CIVE270CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE230CoopPlan4element = document.getElementById("MECE230CoopPlan4");
       MECE230CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE230CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var ECE209CoopPlan4element = document.getElementById("ECE209CoopPlan4");
       ECE209CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       ECE209CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE243CoopPlan4element = document.getElementById("CHE243CoopPlan4");
       CHE243CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       CHE243CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MATE202CoopPlan4element = document.getElementById("MATE202CoopPlan4");
       MATE202CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MATE202CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE250CoopPlan4element = document.getElementById("MECE250CoopPlan4");
       MECE250CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE250CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE300CoopPlan4element = document.getElementById("MECE300CoopPlan4");
       MECE300CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE300CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE301CoopPlan4element = document.getElementById("MECE301CoopPlan4");
       MECE301CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE301CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE331CoopPlan4element = document.getElementById("MECE331CoopPlan4");
       MECE331CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE331CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE371CoopPlan4element = document.getElementById("MECE371CoopPlan4");
       MECE371CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE371CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE380CoopPlan4element = document.getElementById("MECE380CoopPlan4");
       MECE380CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE380CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE340CoopPlan4element = document.getElementById("MECE340CoopPlan4");
       MECE340CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE340CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE430CoopPlan4element = document.getElementById("MECE430CoopPlan4");
       MECE430CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE430CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE480CoopPlan4element = document.getElementById("MECE480CoopPlan4");
       MECE480CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE480CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE463CoopPlan4element = document.getElementById("MECE463CoopPlan4");
       MECE463CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE463CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var CHE448CoopPlan4element = document.getElementById("CHE448CoopPlan4");
       CHE448CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       CHE448CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE420CoopPlan4element = document.getElementById("MECE420CoopPlan4");
       MECE420CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE420CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE403CoopPlan4element = document.getElementById("MECE403CoopPlan4");
       MECE403CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE403CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       var MECE451CoopPlan4element = document.getElementById("MECE451CoopPlan4");
       MECE451CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
       MECE451CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
       break;
       }
      break;
  case "ComplementaryElective":
    switch(planName) {
      case "TraditionalPlan":
       var ComplementaryElectiveTraditionalPlanelement = document.getElementById("ComplementaryElectiveTraditionalPlan");
       ComplementaryElectiveTraditionalPlanelement.classList.remove("ComplementaryElective");
       ComplementaryElectiveTraditionalPlanelement.classList.add("ComplementaryElective-highlighted");
       break;
      case "AlternatePlan":
       var ComplementaryElectiveAlternatePlanelement = document.getElementById("ComplementaryElectiveAlternatePlan");
       ComplementaryElectiveAlternatePlanelement.classList.remove("ComplementaryElective");
       ComplementaryElectiveAlternatePlanelement.classList.add("ComplementaryElective-highlighted");
       break;
      case "CoopPlan1":
       var ComplementaryElectiveCoopPlan1element = document.getElementById("ComplementaryElectiveCoopPlan1");
       ComplementaryElectiveCoopPlan1element.classList.remove("ComplementaryElective");
       ComplementaryElectiveCoopPlan1element.classList.add("ComplementaryElective-highlighted");
       break;
      case "CoopPlan2":
       var ComplementaryElectiveCoopPlan2element = document.getElementById("ComplementaryElectiveCoopPlan2");
       ComplementaryElectiveCoopPlan2element.classList.remove("ComplementaryElective");
       ComplementaryElectiveCoopPlan2element.classList.add("ComplementaryElective-highlighted");
       break;
      case "CoopPlan3Biomedical":
       var ComplementaryElectiveCoopPlan3Biomedicalelement = document.getElementById("ComplementaryElectiveCoopPlan3Biomedical");
       ComplementaryElectiveCoopPlan3Biomedicalelement.classList.remove("ComplementaryElective");
       ComplementaryElectiveCoopPlan3Biomedicalelement.classList.add("ComplementaryElective-highlighted");
       break;
      case "CoopPlan4":
       var ComplementaryElectiveCoopPlan4element = document.getElementById("ComplementaryElectiveCoopPlan4");
       ComplementaryElectiveCoopPlan4element.classList.remove("ComplementaryElective");
       ComplementaryElectiveCoopPlan4element.classList.add("ComplementaryElective-highlighted");
       break;
       }
      break;
  case "ProgramTechnicalElective":
    switch(planName) {
      case "TraditionalPlan":
       var ProgramTechnicalElectiveTraditionalPlanelement = document.getElementById("ProgramTechnicalElectiveTraditionalPlan");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveTraditionalPlanelement = document.getElementById("ProgramTechnicalElectiveTraditionalPlan");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveTraditionalPlanelement = document.getElementById("ProgramTechnicalElectiveTraditionalPlan");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveTraditionalPlanelement = document.getElementById("ProgramTechnicalElectiveTraditionalPlan");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.add("ProgramTechnicalElective-highlighted");
       break;
      case "AlternatePlan":
       var ProgramTechnicalElectiveAlternatePlanelement = document.getElementById("ProgramTechnicalElectiveAlternatePlan");
       ProgramTechnicalElectiveAlternatePlanelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveAlternatePlanelement.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveAlternatePlanelement = document.getElementById("ProgramTechnicalElectiveAlternatePlan");
       ProgramTechnicalElectiveAlternatePlanelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveAlternatePlanelement.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveAlternatePlanelement = document.getElementById("ProgramTechnicalElectiveAlternatePlan");
       ProgramTechnicalElectiveAlternatePlanelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveAlternatePlanelement.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveAlternatePlanelement = document.getElementById("ProgramTechnicalElectiveAlternatePlan");
       ProgramTechnicalElectiveAlternatePlanelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveAlternatePlanelement.classList.add("ProgramTechnicalElective-highlighted");
       break;
      case "CoopPlan1":
       var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
       ProgramTechnicalElectiveCoopPlan1element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan1element.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
       ProgramTechnicalElectiveCoopPlan1element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan1element.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
       ProgramTechnicalElectiveCoopPlan1element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan1element.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
       ProgramTechnicalElectiveCoopPlan1element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan1element.classList.add("ProgramTechnicalElective-highlighted");
       break;
      case "CoopPlan2":
       var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
       ProgramTechnicalElectiveCoopPlan2element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan2element.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
       ProgramTechnicalElectiveCoopPlan2element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan2element.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
       ProgramTechnicalElectiveCoopPlan2element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan2element.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
       ProgramTechnicalElectiveCoopPlan2element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan2element.classList.add("ProgramTechnicalElective-highlighted");
       break;
      case "CoopPlan3Biomedical":
       var ProgramTechnicalElectiveCoopPlan3Biomedicalelement = document.getElementById("ProgramTechnicalElectiveCoopPlan3Biomedical");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan3Biomedicalelement = document.getElementById("ProgramTechnicalElectiveCoopPlan3Biomedical");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan3Biomedicalelement = document.getElementById("ProgramTechnicalElectiveCoopPlan3Biomedical");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.add("ProgramTechnicalElective-highlighted");
       break;
      case "CoopPlan4":
       var ProgramTechnicalElectiveCoopPlan4element = document.getElementById("ProgramTechnicalElectiveCoopPlan4");
       ProgramTechnicalElectiveCoopPlan4element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan4element.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan4element = document.getElementById("ProgramTechnicalElectiveCoopPlan4");
       ProgramTechnicalElectiveCoopPlan4element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan4element.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan4element = document.getElementById("ProgramTechnicalElectiveCoopPlan4");
       ProgramTechnicalElectiveCoopPlan4element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan4element.classList.add("ProgramTechnicalElective-highlighted");
       var ProgramTechnicalElectiveCoopPlan4element = document.getElementById("ProgramTechnicalElectiveCoopPlan4");
       ProgramTechnicalElectiveCoopPlan4element.classList.remove("ProgramTechnicalElective");
       ProgramTechnicalElectiveCoopPlan4element.classList.add("ProgramTechnicalElective-highlighted");
       break;
       }
      break;
  case "ITSElective":
    switch(planName) {
      case "TraditionalPlan":
       var ITSElectiveTraditionalPlanelement = document.getElementById("ITSElectiveTraditionalPlan");
       ITSElectiveTraditionalPlanelement.classList.remove("ITSElective");
       ITSElectiveTraditionalPlanelement.classList.add("ITSElective-highlighted");
       break;
      case "AlternatePlan":
       var ITSElectiveAlternatePlanelement = document.getElementById("ITSElectiveAlternatePlan");
       ITSElectiveAlternatePlanelement.classList.remove("ITSElective");
       ITSElectiveAlternatePlanelement.classList.add("ITSElective-highlighted");
       break;
      case "CoopPlan1":
       var ITSElectiveCoopPlan1element = document.getElementById("ITSElectiveCoopPlan1");
       ITSElectiveCoopPlan1element.classList.remove("ITSElective");
       ITSElectiveCoopPlan1element.classList.add("ITSElective-highlighted");
       break;
      case "CoopPlan2":
       var ITSElectiveCoopPlan2element = document.getElementById("ITSElectiveCoopPlan2");
       ITSElectiveCoopPlan2element.classList.remove("ITSElective");
       ITSElectiveCoopPlan2element.classList.add("ITSElective-highlighted");
       break;
      case "CoopPlan3Biomedical":
       var ITSElectiveCoopPlan3Biomedicalelement = document.getElementById("ITSElectiveCoopPlan3Biomedical");
       ITSElectiveCoopPlan3Biomedicalelement.classList.remove("ITSElective");
       ITSElectiveCoopPlan3Biomedicalelement.classList.add("ITSElective-highlighted");
       break;
      case "CoopPlan4":
       var ITSElectiveCoopPlan4element = document.getElementById("ITSElectiveCoopPlan4");
       ITSElectiveCoopPlan4element.classList.remove("ITSElective");
       ITSElectiveCoopPlan4element.classList.add("ITSElective-highlighted");
       break;
       }
      break;
  case "":
    switch(planName) {
      case "CoopPlan3Biomedical":
       var BME320CoopPlan3Biomedicalelement = document.getElementById("BME320CoopPlan3Biomedical");
       BME320CoopPlan3Biomedicalelement.classList.remove("");
       BME320CoopPlan3Biomedicalelement.classList.add("-highlighted");
       var BME321CoopPlan3Biomedicalelement = document.getElementById("BME321CoopPlan3Biomedical");
       BME321CoopPlan3Biomedicalelement.classList.remove("");
       BME321CoopPlan3Biomedicalelement.classList.add("-highlighted");
       var MECE563CoopPlan3Biomedicalelement = document.getElementById("MECE563CoopPlan3Biomedical");
       MECE563CoopPlan3Biomedicalelement.classList.remove("");
       MECE563CoopPlan3Biomedicalelement.classList.add("-highlighted");
       var STAT337CoopPlan3Biomedicalelement = document.getElementById("STAT337CoopPlan3Biomedical");
       STAT337CoopPlan3Biomedicalelement.classList.remove("");
       STAT337CoopPlan3Biomedicalelement.classList.add("-highlighted");
       var MECE485CoopPlan3Biomedicalelement = document.getElementById("MECE485CoopPlan3Biomedical");
       MECE485CoopPlan3Biomedicalelement.classList.remove("");
       MECE485CoopPlan3Biomedicalelement.classList.add("-highlighted");
       var PHIL386CoopPlan3Biomedicalelement = document.getElementById("PHIL386CoopPlan3Biomedical");
       PHIL386CoopPlan3Biomedicalelement.classList.remove("");
       PHIL386CoopPlan3Biomedicalelement.classList.add("-highlighted");
       break;
       }
      break;
break;   default:
    console.log("shouldn't be here");
    }
};
this.unhighlightCategory = function(categoryName, planName) {
switch(categoryName) { 
  case "BASICSCIENCES":
    switch(planName) {
      case "TraditionalPlan":
       var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
       CHEM103TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
       CHEM103TraditionalPlanelement.classList.add("BASICSCIENCES");
       var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
       ENGG130TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
       ENGG130TraditionalPlanelement.classList.add("BASICSCIENCES");
       var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
       PHYS130TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
       PHYS130TraditionalPlanelement.classList.add("BASICSCIENCES");
       var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
       CHEM105TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
       CHEM105TraditionalPlanelement.classList.add("BASICSCIENCES");
       var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
       ENCMP100TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
       ENCMP100TraditionalPlanelement.classList.add("BASICSCIENCES");
       var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
       ENPH131TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
       ENPH131TraditionalPlanelement.classList.add("BASICSCIENCES");
       break;
      case "AlternatePlan":
       var CHEM103AlternatePlanelement = document.getElementById("CHEM103AlternatePlan");
       CHEM103AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
       CHEM103AlternatePlanelement.classList.add("BASICSCIENCES");
       var ENGG130AlternatePlanelement = document.getElementById("ENGG130AlternatePlan");
       ENGG130AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
       ENGG130AlternatePlanelement.classList.add("BASICSCIENCES");
       var PHYS130AlternatePlanelement = document.getElementById("PHYS130AlternatePlan");
       PHYS130AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
       PHYS130AlternatePlanelement.classList.add("BASICSCIENCES");
       var CHEM105AlternatePlanelement = document.getElementById("CHEM105AlternatePlan");
       CHEM105AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
       CHEM105AlternatePlanelement.classList.add("BASICSCIENCES");
       var ENCMP100AlternatePlanelement = document.getElementById("ENCMP100AlternatePlan");
       ENCMP100AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
       ENCMP100AlternatePlanelement.classList.add("BASICSCIENCES");
       var ENPH131AlternatePlanelement = document.getElementById("ENPH131AlternatePlan");
       ENPH131AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
       ENPH131AlternatePlanelement.classList.add("BASICSCIENCES");
       break;
      case "CoopPlan1":
       var CHEM103CoopPlan1element = document.getElementById("CHEM103CoopPlan1");
       CHEM103CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
       CHEM103CoopPlan1element.classList.add("BASICSCIENCES");
       var ENGG130CoopPlan1element = document.getElementById("ENGG130CoopPlan1");
       ENGG130CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
       ENGG130CoopPlan1element.classList.add("BASICSCIENCES");
       var PHYS130CoopPlan1element = document.getElementById("PHYS130CoopPlan1");
       PHYS130CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
       PHYS130CoopPlan1element.classList.add("BASICSCIENCES");
       var CHEM105CoopPlan1element = document.getElementById("CHEM105CoopPlan1");
       CHEM105CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
       CHEM105CoopPlan1element.classList.add("BASICSCIENCES");
       var ENCMP100CoopPlan1element = document.getElementById("ENCMP100CoopPlan1");
       ENCMP100CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
       ENCMP100CoopPlan1element.classList.add("BASICSCIENCES");
       var ENPH131CoopPlan1element = document.getElementById("ENPH131CoopPlan1");
       ENPH131CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
       ENPH131CoopPlan1element.classList.add("BASICSCIENCES");
       break;
      case "CoopPlan2":
       var CHEM103CoopPlan2element = document.getElementById("CHEM103CoopPlan2");
       CHEM103CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
       CHEM103CoopPlan2element.classList.add("BASICSCIENCES");
       var ENGG130CoopPlan2element = document.getElementById("ENGG130CoopPlan2");
       ENGG130CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
       ENGG130CoopPlan2element.classList.add("BASICSCIENCES");
       var PHYS130CoopPlan2element = document.getElementById("PHYS130CoopPlan2");
       PHYS130CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
       PHYS130CoopPlan2element.classList.add("BASICSCIENCES");
       var CHEM105CoopPlan2element = document.getElementById("CHEM105CoopPlan2");
       CHEM105CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
       CHEM105CoopPlan2element.classList.add("BASICSCIENCES");
       var ENCMP100CoopPlan2element = document.getElementById("ENCMP100CoopPlan2");
       ENCMP100CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
       ENCMP100CoopPlan2element.classList.add("BASICSCIENCES");
       var ENPH131CoopPlan2element = document.getElementById("ENPH131CoopPlan2");
       ENPH131CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
       ENPH131CoopPlan2element.classList.add("BASICSCIENCES");
       break;
      case "CoopPlan3Biomedical":
       var CHEM103CoopPlan3Biomedicalelement = document.getElementById("CHEM103CoopPlan3Biomedical");
       CHEM103CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
       CHEM103CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
       var ENGG130CoopPlan3Biomedicalelement = document.getElementById("ENGG130CoopPlan3Biomedical");
       ENGG130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
       ENGG130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
       var PHYS130CoopPlan3Biomedicalelement = document.getElementById("PHYS130CoopPlan3Biomedical");
       PHYS130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
       PHYS130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
       var CHEM105CoopPlan3Biomedicalelement = document.getElementById("CHEM105CoopPlan3Biomedical");
       CHEM105CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
       CHEM105CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
       var ENCMP100CoopPlan3Biomedicalelement = document.getElementById("ENCMP100CoopPlan3Biomedical");
       ENCMP100CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
       ENCMP100CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
       var ENPH131CoopPlan3Biomedicalelement = document.getElementById("ENPH131CoopPlan3Biomedical");
       ENPH131CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
       ENPH131CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
       break;
      case "CoopPlan4":
       var CHEM103CoopPlan4element = document.getElementById("CHEM103CoopPlan4");
       CHEM103CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
       CHEM103CoopPlan4element.classList.add("BASICSCIENCES");
       var ENGG130CoopPlan4element = document.getElementById("ENGG130CoopPlan4");
       ENGG130CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
       ENGG130CoopPlan4element.classList.add("BASICSCIENCES");
       var PHYS130CoopPlan4element = document.getElementById("PHYS130CoopPlan4");
       PHYS130CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
       PHYS130CoopPlan4element.classList.add("BASICSCIENCES");
       var CHEM105CoopPlan4element = document.getElementById("CHEM105CoopPlan4");
       CHEM105CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
       CHEM105CoopPlan4element.classList.add("BASICSCIENCES");
       var ENCMP100CoopPlan4element = document.getElementById("ENCMP100CoopPlan4");
       ENCMP100CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
       ENCMP100CoopPlan4element.classList.add("BASICSCIENCES");
       var ENPH131CoopPlan4element = document.getElementById("ENPH131CoopPlan4");
       ENPH131CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
       ENPH131CoopPlan4element.classList.add("BASICSCIENCES");
       break;
       }
      break;
  case "ENGINEERINGPROFESSION":
    switch(planName) {
      case "TraditionalPlan":
       var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
       ENGG100TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG100TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
       var MECE200TraditionalPlanelement = document.getElementById("MECE200TraditionalPlan");
       MECE200TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       MECE200TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
       var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
       ENGG404TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG404TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
       var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
       ENGG400TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG400TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
       break;
      case "AlternatePlan":
       var ENGG100AlternatePlanelement = document.getElementById("ENGG100AlternatePlan");
       ENGG100AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG100AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
       var ENGG404AlternatePlanelement = document.getElementById("ENGG404AlternatePlan");
       ENGG404AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG404AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
       var MECE200AlternatePlanelement = document.getElementById("MECE200AlternatePlan");
       MECE200AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       MECE200AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
       var ENGG400AlternatePlanelement = document.getElementById("ENGG400AlternatePlan");
       ENGG400AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG400AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
       break;
      case "CoopPlan1":
       var ENGG100CoopPlan1element = document.getElementById("ENGG100CoopPlan1");
       ENGG100CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG100CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       var ENGG299CoopPlan1element = document.getElementById("ENGG299CoopPlan1");
       ENGG299CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG299CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       var MECE200CoopPlan1element = document.getElementById("MECE200CoopPlan1");
       MECE200CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       MECE200CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP901CoopPlan1element = document.getElementById("WKEXP901CoopPlan1");
       WKEXP901CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP901CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP902CoopPlan1element = document.getElementById("WKEXP902CoopPlan1");
       WKEXP902CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP902CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP903CoopPlan1element = document.getElementById("WKEXP903CoopPlan1");
       WKEXP903CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP903CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP904CoopPlan1element = document.getElementById("WKEXP904CoopPlan1");
       WKEXP904CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP904CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       var ENGG404CoopPlan1element = document.getElementById("ENGG404CoopPlan1");
       ENGG404CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG404CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP905CoopPlan1element = document.getElementById("WKEXP905CoopPlan1");
       WKEXP905CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP905CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       var ENGG400CoopPlan1element = document.getElementById("ENGG400CoopPlan1");
       ENGG400CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG400CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
       break;
      case "CoopPlan2":
       var ENGG100CoopPlan2element = document.getElementById("ENGG100CoopPlan2");
       ENGG100CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG100CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       var ENGG299CoopPlan2element = document.getElementById("ENGG299CoopPlan2");
       ENGG299CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG299CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       var MECE200CoopPlan2element = document.getElementById("MECE200CoopPlan2");
       MECE200CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       MECE200CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP901CoopPlan2element = document.getElementById("WKEXP901CoopPlan2");
       WKEXP901CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP901CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP902CoopPlan2element = document.getElementById("WKEXP902CoopPlan2");
       WKEXP902CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP902CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP903CoopPlan2element = document.getElementById("WKEXP903CoopPlan2");
       WKEXP903CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP903CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP904CoopPlan2element = document.getElementById("WKEXP904CoopPlan2");
       WKEXP904CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP904CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP905CoopPlan2element = document.getElementById("WKEXP905CoopPlan2");
       WKEXP905CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP905CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       var ENGG400CoopPlan2element = document.getElementById("ENGG400CoopPlan2");
       ENGG400CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG400CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       var ENGG404CoopPlan2element = document.getElementById("ENGG404CoopPlan2");
       ENGG404CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG404CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
       break;
      case "CoopPlan3Biomedical":
       var ENGG100CoopPlan3Biomedicalelement = document.getElementById("ENGG100CoopPlan3Biomedical");
       ENGG100CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG100CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
       var ENGG299CoopPlan3Biomedicalelement = document.getElementById("ENGG299CoopPlan3Biomedical");
       ENGG299CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG299CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
       var MECE200CoopPlan3Biomedicalelement = document.getElementById("MECE200CoopPlan3Biomedical");
       MECE200CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       MECE200CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
       var WKEXP902CoopPlan3Biomedicalelement = document.getElementById("WKEXP902CoopPlan3Biomedical");
       WKEXP902CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP902CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
       var WKEXP903CoopPlan3Biomedicalelement = document.getElementById("WKEXP903CoopPlan3Biomedical");
       WKEXP903CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP903CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
       var ENGG404CoopPlan3Biomedicalelement = document.getElementById("ENGG404CoopPlan3Biomedical");
       ENGG404CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG404CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
       var WKEXP904CoopPlan3Biomedicalelement = document.getElementById("WKEXP904CoopPlan3Biomedical");
       WKEXP904CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP904CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
       var WKEXP905CoopPlan3Biomedicalelement = document.getElementById("WKEXP905CoopPlan3Biomedical");
       WKEXP905CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP905CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
       var ENGG400CoopPlan3Biomedicalelement = document.getElementById("ENGG400CoopPlan3Biomedical");
       ENGG400CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG400CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
       break;
      case "CoopPlan4":
       var ENGG100CoopPlan4element = document.getElementById("ENGG100CoopPlan4");
       ENGG100CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG100CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       var ENGG299CoopPlan4element = document.getElementById("ENGG299CoopPlan4");
       ENGG299CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG299CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       var MECE200CoopPlan4element = document.getElementById("MECE200CoopPlan4");
       MECE200CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       MECE200CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP901CoopPlan4element = document.getElementById("WKEXP901CoopPlan4");
       WKEXP901CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP901CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP902CoopPlan4element = document.getElementById("WKEXP902CoopPlan4");
       WKEXP902CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP902CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP903CoopPlan4element = document.getElementById("WKEXP903CoopPlan4");
       WKEXP903CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP903CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP904CoopPlan4element = document.getElementById("WKEXP904CoopPlan4");
       WKEXP904CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP904CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       var WKEXP905CoopPlan4element = document.getElementById("WKEXP905CoopPlan4");
       WKEXP905CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       WKEXP905CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       var ENGG404CoopPlan4element = document.getElementById("ENGG404CoopPlan4");
       ENGG404CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG404CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       var ENGG400CoopPlan4element = document.getElementById("ENGG400CoopPlan4");
       ENGG400CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
       ENGG400CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
       var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
       ENGL199TraditionalPlanelement.classList.remove("Other-highlighted");
       ENGL199TraditionalPlanelement.classList.add("Other");
       var ENGM310TraditionalPlanelement = document.getElementById("ENGM310TraditionalPlan");
       ENGM310TraditionalPlanelement.classList.remove("Other-highlighted");
       ENGM310TraditionalPlanelement.classList.add("Other");
       var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
       ENGM401TraditionalPlanelement.classList.remove("Other-highlighted");
       ENGM401TraditionalPlanelement.classList.add("Other");
       break;
      case "AlternatePlan":
       var ENGL199AlternatePlanelement = document.getElementById("ENGL199AlternatePlan");
       ENGL199AlternatePlanelement.classList.remove("Other-highlighted");
       ENGL199AlternatePlanelement.classList.add("Other");
       var ENGM310AlternatePlanelement = document.getElementById("ENGM310AlternatePlan");
       ENGM310AlternatePlanelement.classList.remove("Other-highlighted");
       ENGM310AlternatePlanelement.classList.add("Other");
       var ENGM401AlternatePlanelement = document.getElementById("ENGM401AlternatePlan");
       ENGM401AlternatePlanelement.classList.remove("Other-highlighted");
       ENGM401AlternatePlanelement.classList.add("Other");
       break;
      case "CoopPlan1":
       var ENGL199CoopPlan1element = document.getElementById("ENGL199CoopPlan1");
       ENGL199CoopPlan1element.classList.remove("Other-highlighted");
       ENGL199CoopPlan1element.classList.add("Other");
       var ENGM310CoopPlan1element = document.getElementById("ENGM310CoopPlan1");
       ENGM310CoopPlan1element.classList.remove("Other-highlighted");
       ENGM310CoopPlan1element.classList.add("Other");
       var ENGM401CoopPlan1element = document.getElementById("ENGM401CoopPlan1");
       ENGM401CoopPlan1element.classList.remove("Other-highlighted");
       ENGM401CoopPlan1element.classList.add("Other");
       break;
      case "CoopPlan2":
       var ENGL199CoopPlan2element = document.getElementById("ENGL199CoopPlan2");
       ENGL199CoopPlan2element.classList.remove("Other-highlighted");
       ENGL199CoopPlan2element.classList.add("Other");
       var ENGM310CoopPlan2element = document.getElementById("ENGM310CoopPlan2");
       ENGM310CoopPlan2element.classList.remove("Other-highlighted");
       ENGM310CoopPlan2element.classList.add("Other");
       var ENGM401CoopPlan2element = document.getElementById("ENGM401CoopPlan2");
       ENGM401CoopPlan2element.classList.remove("Other-highlighted");
       ENGM401CoopPlan2element.classList.add("Other");
       break;
      case "CoopPlan3Biomedical":
       var ENGL199CoopPlan3Biomedicalelement = document.getElementById("ENGL199CoopPlan3Biomedical");
       ENGL199CoopPlan3Biomedicalelement.classList.remove("Other-highlighted");
       ENGL199CoopPlan3Biomedicalelement.classList.add("Other");
       var ENGM310CoopPlan3Biomedicalelement = document.getElementById("ENGM310CoopPlan3Biomedical");
       ENGM310CoopPlan3Biomedicalelement.classList.remove("Other-highlighted");
       ENGM310CoopPlan3Biomedicalelement.classList.add("Other");
       var ENGM401CoopPlan3Biomedicalelement = document.getElementById("ENGM401CoopPlan3Biomedical");
       ENGM401CoopPlan3Biomedicalelement.classList.remove("Other-highlighted");
       ENGM401CoopPlan3Biomedicalelement.classList.add("Other");
       break;
      case "CoopPlan4":
       var ENGL199CoopPlan4element = document.getElementById("ENGL199CoopPlan4");
       ENGL199CoopPlan4element.classList.remove("Other-highlighted");
       ENGL199CoopPlan4element.classList.add("Other");
       var ENGM310CoopPlan4element = document.getElementById("ENGM310CoopPlan4");
       ENGM310CoopPlan4element.classList.remove("Other-highlighted");
       ENGM310CoopPlan4element.classList.add("Other");
       var ENGM401CoopPlan4element = document.getElementById("ENGM401CoopPlan4");
       ENGM401CoopPlan4element.classList.remove("Other-highlighted");
       ENGM401CoopPlan4element.classList.add("Other");
       break;
       }
      break;
  case "MATH":
    switch(planName) {
      case "TraditionalPlan":
       var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
       MATH100TraditionalPlanelement.classList.remove("MATH-highlighted");
       MATH100TraditionalPlanelement.classList.add("MATH");
       var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
       MATH101TraditionalPlanelement.classList.remove("MATH-highlighted");
       MATH101TraditionalPlanelement.classList.add("MATH");
       var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
       MATH102TraditionalPlanelement.classList.remove("MATH-highlighted");
       MATH102TraditionalPlanelement.classList.add("MATH");
       var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
       MATH209TraditionalPlanelement.classList.remove("MATH-highlighted");
       MATH209TraditionalPlanelement.classList.add("MATH");
       var STAT235TraditionalPlanelement = document.getElementById("STAT235TraditionalPlan");
       STAT235TraditionalPlanelement.classList.remove("MATH-highlighted");
       STAT235TraditionalPlanelement.classList.add("MATH");
       var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
       MATH201TraditionalPlanelement.classList.remove("MATH-highlighted");
       MATH201TraditionalPlanelement.classList.add("MATH");
       var MATH300TraditionalPlanelement = document.getElementById("MATH300TraditionalPlan");
       MATH300TraditionalPlanelement.classList.remove("MATH-highlighted");
       MATH300TraditionalPlanelement.classList.add("MATH");
       var MECE390TraditionalPlanelement = document.getElementById("MECE390TraditionalPlan");
       MECE390TraditionalPlanelement.classList.remove("MATH-highlighted");
       MECE390TraditionalPlanelement.classList.add("MATH");
       break;
      case "AlternatePlan":
       var MATH100AlternatePlanelement = document.getElementById("MATH100AlternatePlan");
       MATH100AlternatePlanelement.classList.remove("MATH-highlighted");
       MATH100AlternatePlanelement.classList.add("MATH");
       var MATH101AlternatePlanelement = document.getElementById("MATH101AlternatePlan");
       MATH101AlternatePlanelement.classList.remove("MATH-highlighted");
       MATH101AlternatePlanelement.classList.add("MATH");
       var MATH102AlternatePlanelement = document.getElementById("MATH102AlternatePlan");
       MATH102AlternatePlanelement.classList.remove("MATH-highlighted");
       MATH102AlternatePlanelement.classList.add("MATH");
       var MATH201AlternatePlanelement = document.getElementById("MATH201AlternatePlan");
       MATH201AlternatePlanelement.classList.remove("MATH-highlighted");
       MATH201AlternatePlanelement.classList.add("MATH");
       var MATH209AlternatePlanelement = document.getElementById("MATH209AlternatePlan");
       MATH209AlternatePlanelement.classList.remove("MATH-highlighted");
       MATH209AlternatePlanelement.classList.add("MATH");
       var STAT235AlternatePlanelement = document.getElementById("STAT235AlternatePlan");
       STAT235AlternatePlanelement.classList.remove("MATH-highlighted");
       STAT235AlternatePlanelement.classList.add("MATH");
       var MATH300AlternatePlanelement = document.getElementById("MATH300AlternatePlan");
       MATH300AlternatePlanelement.classList.remove("MATH-highlighted");
       MATH300AlternatePlanelement.classList.add("MATH");
       var MECE390AlternatePlanelement = document.getElementById("MECE390AlternatePlan");
       MECE390AlternatePlanelement.classList.remove("MATH-highlighted");
       MECE390AlternatePlanelement.classList.add("MATH");
       break;
      case "CoopPlan1":
       var MATH100CoopPlan1element = document.getElementById("MATH100CoopPlan1");
       MATH100CoopPlan1element.classList.remove("MATH-highlighted");
       MATH100CoopPlan1element.classList.add("MATH");
       var MATH101CoopPlan1element = document.getElementById("MATH101CoopPlan1");
       MATH101CoopPlan1element.classList.remove("MATH-highlighted");
       MATH101CoopPlan1element.classList.add("MATH");
       var MATH102CoopPlan1element = document.getElementById("MATH102CoopPlan1");
       MATH102CoopPlan1element.classList.remove("MATH-highlighted");
       MATH102CoopPlan1element.classList.add("MATH");
       var MATH209CoopPlan1element = document.getElementById("MATH209CoopPlan1");
       MATH209CoopPlan1element.classList.remove("MATH-highlighted");
       MATH209CoopPlan1element.classList.add("MATH");
       var STAT235CoopPlan1element = document.getElementById("STAT235CoopPlan1");
       STAT235CoopPlan1element.classList.remove("MATH-highlighted");
       STAT235CoopPlan1element.classList.add("MATH");
       var MATH201CoopPlan1element = document.getElementById("MATH201CoopPlan1");
       MATH201CoopPlan1element.classList.remove("MATH-highlighted");
       MATH201CoopPlan1element.classList.add("MATH");
       var MATH300CoopPlan1element = document.getElementById("MATH300CoopPlan1");
       MATH300CoopPlan1element.classList.remove("MATH-highlighted");
       MATH300CoopPlan1element.classList.add("MATH");
       var MECE390CoopPlan1element = document.getElementById("MECE390CoopPlan1");
       MECE390CoopPlan1element.classList.remove("MATH-highlighted");
       MECE390CoopPlan1element.classList.add("MATH");
       break;
      case "CoopPlan2":
       var MATH100CoopPlan2element = document.getElementById("MATH100CoopPlan2");
       MATH100CoopPlan2element.classList.remove("MATH-highlighted");
       MATH100CoopPlan2element.classList.add("MATH");
       var MATH101CoopPlan2element = document.getElementById("MATH101CoopPlan2");
       MATH101CoopPlan2element.classList.remove("MATH-highlighted");
       MATH101CoopPlan2element.classList.add("MATH");
       var MATH102CoopPlan2element = document.getElementById("MATH102CoopPlan2");
       MATH102CoopPlan2element.classList.remove("MATH-highlighted");
       MATH102CoopPlan2element.classList.add("MATH");
       var MATH209CoopPlan2element = document.getElementById("MATH209CoopPlan2");
       MATH209CoopPlan2element.classList.remove("MATH-highlighted");
       MATH209CoopPlan2element.classList.add("MATH");
       var STAT235CoopPlan2element = document.getElementById("STAT235CoopPlan2");
       STAT235CoopPlan2element.classList.remove("MATH-highlighted");
       STAT235CoopPlan2element.classList.add("MATH");
       var MATH201CoopPlan2element = document.getElementById("MATH201CoopPlan2");
       MATH201CoopPlan2element.classList.remove("MATH-highlighted");
       MATH201CoopPlan2element.classList.add("MATH");
       var MATH300CoopPlan2element = document.getElementById("MATH300CoopPlan2");
       MATH300CoopPlan2element.classList.remove("MATH-highlighted");
       MATH300CoopPlan2element.classList.add("MATH");
       var MECE390CoopPlan2element = document.getElementById("MECE390CoopPlan2");
       MECE390CoopPlan2element.classList.remove("MATH-highlighted");
       MECE390CoopPlan2element.classList.add("MATH");
       break;
      case "CoopPlan3Biomedical":
       var MATH100CoopPlan3Biomedicalelement = document.getElementById("MATH100CoopPlan3Biomedical");
       MATH100CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
       MATH100CoopPlan3Biomedicalelement.classList.add("MATH");
       var MATH101CoopPlan3Biomedicalelement = document.getElementById("MATH101CoopPlan3Biomedical");
       MATH101CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
       MATH101CoopPlan3Biomedicalelement.classList.add("MATH");
       var MATH102CoopPlan3Biomedicalelement = document.getElementById("MATH102CoopPlan3Biomedical");
       MATH102CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
       MATH102CoopPlan3Biomedicalelement.classList.add("MATH");
       var MATH209CoopPlan3Biomedicalelement = document.getElementById("MATH209CoopPlan3Biomedical");
       MATH209CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
       MATH209CoopPlan3Biomedicalelement.classList.add("MATH");
       var STAT235CoopPlan3Biomedicalelement = document.getElementById("STAT235CoopPlan3Biomedical");
       STAT235CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
       STAT235CoopPlan3Biomedicalelement.classList.add("MATH");
       var MATH201CoopPlan3Biomedicalelement = document.getElementById("MATH201CoopPlan3Biomedical");
       MATH201CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
       MATH201CoopPlan3Biomedicalelement.classList.add("MATH");
       var MECE390CoopPlan3Biomedicalelement = document.getElementById("MECE390CoopPlan3Biomedical");
       MECE390CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
       MECE390CoopPlan3Biomedicalelement.classList.add("MATH");
       var MATH300CoopPlan3Biomedicalelement = document.getElementById("MATH300CoopPlan3Biomedical");
       MATH300CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
       MATH300CoopPlan3Biomedicalelement.classList.add("MATH");
       break;
      case "CoopPlan4":
       var MATH100CoopPlan4element = document.getElementById("MATH100CoopPlan4");
       MATH100CoopPlan4element.classList.remove("MATH-highlighted");
       MATH100CoopPlan4element.classList.add("MATH");
       var MATH101CoopPlan4element = document.getElementById("MATH101CoopPlan4");
       MATH101CoopPlan4element.classList.remove("MATH-highlighted");
       MATH101CoopPlan4element.classList.add("MATH");
       var MATH102CoopPlan4element = document.getElementById("MATH102CoopPlan4");
       MATH102CoopPlan4element.classList.remove("MATH-highlighted");
       MATH102CoopPlan4element.classList.add("MATH");
       var MATH209CoopPlan4element = document.getElementById("MATH209CoopPlan4");
       MATH209CoopPlan4element.classList.remove("MATH-highlighted");
       MATH209CoopPlan4element.classList.add("MATH");
       var STAT235CoopPlan4element = document.getElementById("STAT235CoopPlan4");
       STAT235CoopPlan4element.classList.remove("MATH-highlighted");
       STAT235CoopPlan4element.classList.add("MATH");
       var MATH201CoopPlan4element = document.getElementById("MATH201CoopPlan4");
       MATH201CoopPlan4element.classList.remove("MATH-highlighted");
       MATH201CoopPlan4element.classList.add("MATH");
       var MATH300CoopPlan4element = document.getElementById("MATH300CoopPlan4");
       MATH300CoopPlan4element.classList.remove("MATH-highlighted");
       MATH300CoopPlan4element.classList.add("MATH");
       var MECE390CoopPlan4element = document.getElementById("MECE390CoopPlan4");
       MECE390CoopPlan4element.classList.remove("MATH-highlighted");
       MECE390CoopPlan4element.classList.add("MATH");
       break;
       }
      break;
  case "ENGINEERINGDESIGN":
    switch(planName) {
      case "TraditionalPlan":
       var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
       ENGG160TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       ENGG160TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE260TraditionalPlanelement = document.getElementById("MECE260TraditionalPlan");
       MECE260TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE260TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE265TraditionalPlanelement = document.getElementById("MECE265TraditionalPlan");
       MECE265TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE265TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE360TraditionalPlanelement = document.getElementById("MECE360TraditionalPlan");
       MECE360TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE360TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE362TraditionalPlanelement = document.getElementById("MECE362TraditionalPlan");
       MECE362TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE362TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE460TraditionalPlanelement = document.getElementById("MECE460TraditionalPlan");
       MECE460TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE460TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
       break;
      case "AlternatePlan":
       var ENGG160AlternatePlanelement = document.getElementById("ENGG160AlternatePlan");
       ENGG160AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       ENGG160AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE260AlternatePlanelement = document.getElementById("MECE260AlternatePlan");
       MECE260AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE260AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE265AlternatePlanelement = document.getElementById("MECE265AlternatePlan");
       MECE265AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE265AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE360AlternatePlanelement = document.getElementById("MECE360AlternatePlan");
       MECE360AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE360AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE362AlternatePlanelement = document.getElementById("MECE362AlternatePlan");
       MECE362AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE362AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
       var MECE460AlternatePlanelement = document.getElementById("MECE460AlternatePlan");
       MECE460AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE460AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
       break;
      case "CoopPlan1":
       var ENGG160CoopPlan1element = document.getElementById("ENGG160CoopPlan1");
       ENGG160CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
       ENGG160CoopPlan1element.classList.add("ENGINEERINGDESIGN");
       var MECE260CoopPlan1element = document.getElementById("MECE260CoopPlan1");
       MECE260CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE260CoopPlan1element.classList.add("ENGINEERINGDESIGN");
       var MECE265CoopPlan1element = document.getElementById("MECE265CoopPlan1");
       MECE265CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE265CoopPlan1element.classList.add("ENGINEERINGDESIGN");
       var MECE360CoopPlan1element = document.getElementById("MECE360CoopPlan1");
       MECE360CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE360CoopPlan1element.classList.add("ENGINEERINGDESIGN");
       var MECE362CoopPlan1element = document.getElementById("MECE362CoopPlan1");
       MECE362CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE362CoopPlan1element.classList.add("ENGINEERINGDESIGN");
       var MECE460CoopPlan1element = document.getElementById("MECE460CoopPlan1");
       MECE460CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE460CoopPlan1element.classList.add("ENGINEERINGDESIGN");
       break;
      case "CoopPlan2":
       var ENGG160CoopPlan2element = document.getElementById("ENGG160CoopPlan2");
       ENGG160CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
       ENGG160CoopPlan2element.classList.add("ENGINEERINGDESIGN");
       var MECE260CoopPlan2element = document.getElementById("MECE260CoopPlan2");
       MECE260CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE260CoopPlan2element.classList.add("ENGINEERINGDESIGN");
       var MECE265CoopPlan2element = document.getElementById("MECE265CoopPlan2");
       MECE265CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE265CoopPlan2element.classList.add("ENGINEERINGDESIGN");
       var MECE360CoopPlan2element = document.getElementById("MECE360CoopPlan2");
       MECE360CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE360CoopPlan2element.classList.add("ENGINEERINGDESIGN");
       var MECE362CoopPlan2element = document.getElementById("MECE362CoopPlan2");
       MECE362CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE362CoopPlan2element.classList.add("ENGINEERINGDESIGN");
       var MECE460CoopPlan2element = document.getElementById("MECE460CoopPlan2");
       MECE460CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE460CoopPlan2element.classList.add("ENGINEERINGDESIGN");
       break;
      case "CoopPlan3Biomedical":
       var ENGG160CoopPlan3Biomedicalelement = document.getElementById("ENGG160CoopPlan3Biomedical");
       ENGG160CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       ENGG160CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
       var MECE260CoopPlan3Biomedicalelement = document.getElementById("MECE260CoopPlan3Biomedical");
       MECE260CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE260CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
       var MECE265CoopPlan3Biomedicalelement = document.getElementById("MECE265CoopPlan3Biomedical");
       MECE265CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE265CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
       var MECE360CoopPlan3Biomedicalelement = document.getElementById("MECE360CoopPlan3Biomedical");
       MECE360CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE360CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
       var MECE362CoopPlan3Biomedicalelement = document.getElementById("MECE362CoopPlan3Biomedical");
       MECE362CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE362CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
       var MECE460CoopPlan3Biomedicalelement = document.getElementById("MECE460CoopPlan3Biomedical");
       MECE460CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE460CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
       break;
      case "CoopPlan4":
       var ENGG160CoopPlan4element = document.getElementById("ENGG160CoopPlan4");
       ENGG160CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
       ENGG160CoopPlan4element.classList.add("ENGINEERINGDESIGN");
       var MECE260CoopPlan4element = document.getElementById("MECE260CoopPlan4");
       MECE260CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE260CoopPlan4element.classList.add("ENGINEERINGDESIGN");
       var MECE265CoopPlan4element = document.getElementById("MECE265CoopPlan4");
       MECE265CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE265CoopPlan4element.classList.add("ENGINEERINGDESIGN");
       var MECE360CoopPlan4element = document.getElementById("MECE360CoopPlan4");
       MECE360CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE360CoopPlan4element.classList.add("ENGINEERINGDESIGN");
       var MECE362CoopPlan4element = document.getElementById("MECE362CoopPlan4");
       MECE362CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE362CoopPlan4element.classList.add("ENGINEERINGDESIGN");
       var MECE460CoopPlan4element = document.getElementById("MECE460CoopPlan4");
       MECE460CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
       MECE460CoopPlan4element.classList.add("ENGINEERINGDESIGN");
       break;
       }
      break;
  case "ENGINEERINGSCIENCES":
    switch(planName) {
      case "TraditionalPlan":
       var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
       CIVE270TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CIVE270TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
       CHE243TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE243TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE250TraditionalPlanelement = document.getElementById("MECE250TraditionalPlan");
       MECE250TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE250TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var ECE209TraditionalPlanelement = document.getElementById("ECE209TraditionalPlan");
       ECE209TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       ECE209TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MATE202TraditionalPlanelement = document.getElementById("MATE202TraditionalPlan");
       MATE202TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MATE202TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE230TraditionalPlanelement = document.getElementById("MECE230TraditionalPlan");
       MECE230TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE230TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE300TraditionalPlanelement = document.getElementById("MECE300TraditionalPlan");
       MECE300TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE300TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE301TraditionalPlanelement = document.getElementById("MECE301TraditionalPlan");
       MECE301TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE301TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE331TraditionalPlanelement = document.getElementById("MECE331TraditionalPlan");
       MECE331TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE331TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE371TraditionalPlanelement = document.getElementById("MECE371TraditionalPlan");
       MECE371TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE371TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE380TraditionalPlanelement = document.getElementById("MECE380TraditionalPlan");
       MECE380TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE380TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE340TraditionalPlanelement = document.getElementById("MECE340TraditionalPlan");
       MECE340TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE340TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE430TraditionalPlanelement = document.getElementById("MECE430TraditionalPlan");
       MECE430TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE430TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE480TraditionalPlanelement = document.getElementById("MECE480TraditionalPlan");
       MECE480TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE480TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE463TraditionalPlanelement = document.getElementById("MECE463TraditionalPlan");
       MECE463TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE463TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var CHE448TraditionalPlanelement = document.getElementById("CHE448TraditionalPlan");
       CHE448TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE448TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE420TraditionalPlanelement = document.getElementById("MECE420TraditionalPlan");
       MECE420TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE420TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE403TraditionalPlanelement = document.getElementById("MECE403TraditionalPlan");
       MECE403TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE403TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE451TraditionalPlanelement = document.getElementById("MECE451TraditionalPlan");
       MECE451TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE451TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
       break;
      case "AlternatePlan":
       var CIVE270AlternatePlanelement = document.getElementById("CIVE270AlternatePlan");
       CIVE270AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CIVE270AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE230AlternatePlanelement = document.getElementById("MECE230AlternatePlan");
       MECE230AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE230AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var CHE243AlternatePlanelement = document.getElementById("CHE243AlternatePlan");
       CHE243AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE243AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var ECE209AlternatePlanelement = document.getElementById("ECE209AlternatePlan");
       ECE209AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       ECE209AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MATE202AlternatePlanelement = document.getElementById("MATE202AlternatePlan");
       MATE202AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MATE202AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE250AlternatePlanelement = document.getElementById("MECE250AlternatePlan");
       MECE250AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE250AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE300AlternatePlanelement = document.getElementById("MECE300AlternatePlan");
       MECE300AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE300AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE301AlternatePlanelement = document.getElementById("MECE301AlternatePlan");
       MECE301AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE301AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE331AlternatePlanelement = document.getElementById("MECE331AlternatePlan");
       MECE331AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE331AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE371AlternatePlanelement = document.getElementById("MECE371AlternatePlan");
       MECE371AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE371AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE380AlternatePlanelement = document.getElementById("MECE380AlternatePlan");
       MECE380AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE380AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE340AlternatePlanelement = document.getElementById("MECE340AlternatePlan");
       MECE340AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE340AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE430AlternatePlanelement = document.getElementById("MECE430AlternatePlan");
       MECE430AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE430AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE480AlternatePlanelement = document.getElementById("MECE480AlternatePlan");
       MECE480AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE480AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE463AlternatePlanelement = document.getElementById("MECE463AlternatePlan");
       MECE463AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE463AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var CHE448AlternatePlanelement = document.getElementById("CHE448AlternatePlan");
       CHE448AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE448AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE420AlternatePlanelement = document.getElementById("MECE420AlternatePlan");
       MECE420AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE420AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE403AlternatePlanelement = document.getElementById("MECE403AlternatePlan");
       MECE403AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE403AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       var MECE451AlternatePlanelement = document.getElementById("MECE451AlternatePlan");
       MECE451AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE451AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
       break;
      case "CoopPlan1":
       var CIVE270CoopPlan1element = document.getElementById("CIVE270CoopPlan1");
       CIVE270CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CIVE270CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE230CoopPlan1element = document.getElementById("MECE230CoopPlan1");
       MECE230CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE230CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var CHE243CoopPlan1element = document.getElementById("CHE243CoopPlan1");
       CHE243CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE243CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var ECE209CoopPlan1element = document.getElementById("ECE209CoopPlan1");
       ECE209CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       ECE209CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MATE202CoopPlan1element = document.getElementById("MATE202CoopPlan1");
       MATE202CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MATE202CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE250CoopPlan1element = document.getElementById("MECE250CoopPlan1");
       MECE250CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE250CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE300CoopPlan1element = document.getElementById("MECE300CoopPlan1");
       MECE300CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE300CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE301CoopPlan1element = document.getElementById("MECE301CoopPlan1");
       MECE301CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE301CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE331CoopPlan1element = document.getElementById("MECE331CoopPlan1");
       MECE331CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE331CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE371CoopPlan1element = document.getElementById("MECE371CoopPlan1");
       MECE371CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE371CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE380CoopPlan1element = document.getElementById("MECE380CoopPlan1");
       MECE380CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE380CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE340CoopPlan1element = document.getElementById("MECE340CoopPlan1");
       MECE340CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE340CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE430CoopPlan1element = document.getElementById("MECE430CoopPlan1");
       MECE430CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE430CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE480CoopPlan1element = document.getElementById("MECE480CoopPlan1");
       MECE480CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE480CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE463CoopPlan1element = document.getElementById("MECE463CoopPlan1");
       MECE463CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE463CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var CHE448CoopPlan1element = document.getElementById("CHE448CoopPlan1");
       CHE448CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE448CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE420CoopPlan1element = document.getElementById("MECE420CoopPlan1");
       MECE420CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE420CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE403CoopPlan1element = document.getElementById("MECE403CoopPlan1");
       MECE403CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE403CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       var MECE451CoopPlan1element = document.getElementById("MECE451CoopPlan1");
       MECE451CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE451CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
       break;
      case "CoopPlan2":
       var CHE243CoopPlan2element = document.getElementById("CHE243CoopPlan2");
       CHE243CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE243CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var CIVE270CoopPlan2element = document.getElementById("CIVE270CoopPlan2");
       CIVE270CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CIVE270CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE250CoopPlan2element = document.getElementById("MECE250CoopPlan2");
       MECE250CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE250CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var ECE209CoopPlan2element = document.getElementById("ECE209CoopPlan2");
       ECE209CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       ECE209CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MATE202CoopPlan2element = document.getElementById("MATE202CoopPlan2");
       MATE202CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MATE202CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE230CoopPlan2element = document.getElementById("MECE230CoopPlan2");
       MECE230CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE230CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE300CoopPlan2element = document.getElementById("MECE300CoopPlan2");
       MECE300CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE300CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE301CoopPlan2element = document.getElementById("MECE301CoopPlan2");
       MECE301CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE301CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE331CoopPlan2element = document.getElementById("MECE331CoopPlan2");
       MECE331CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE331CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE371CoopPlan2element = document.getElementById("MECE371CoopPlan2");
       MECE371CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE371CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE380CoopPlan2element = document.getElementById("MECE380CoopPlan2");
       MECE380CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE380CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE340CoopPlan2element = document.getElementById("MECE340CoopPlan2");
       MECE340CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE340CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE403CoopPlan2element = document.getElementById("MECE403CoopPlan2");
       MECE403CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE403CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE451CoopPlan2element = document.getElementById("MECE451CoopPlan2");
       MECE451CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE451CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var CHE448CoopPlan2element = document.getElementById("CHE448CoopPlan2");
       CHE448CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE448CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE420CoopPlan2element = document.getElementById("MECE420CoopPlan2");
       MECE420CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE420CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE430CoopPlan2element = document.getElementById("MECE430CoopPlan2");
       MECE430CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE430CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE480CoopPlan2element = document.getElementById("MECE480CoopPlan2");
       MECE480CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE480CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       var MECE463CoopPlan2element = document.getElementById("MECE463CoopPlan2");
       MECE463CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE463CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
       break;
      case "CoopPlan3Biomedical":
       var CIVE270CoopPlan3Biomedicalelement = document.getElementById("CIVE270CoopPlan3Biomedical");
       CIVE270CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CIVE270CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var CHE243CoopPlan3Biomedicalelement = document.getElementById("CHE243CoopPlan3Biomedical");
       CHE243CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE243CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE250CoopPlan3Biomedicalelement = document.getElementById("MECE250CoopPlan3Biomedical");
       MECE250CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE250CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var ECE209CoopPlan3Biomedicalelement = document.getElementById("ECE209CoopPlan3Biomedical");
       ECE209CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       ECE209CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MATE202CoopPlan3Biomedicalelement = document.getElementById("MATE202CoopPlan3Biomedical");
       MATE202CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MATE202CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE230CoopPlan3Biomedicalelement = document.getElementById("MECE230CoopPlan3Biomedical");
       MECE230CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE230CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE340CoopPlan3Biomedicalelement = document.getElementById("MECE340CoopPlan3Biomedical");
       MECE340CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE340CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE300CoopPlan3Biomedicalelement = document.getElementById("MECE300CoopPlan3Biomedical");
       MECE300CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE300CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE301CoopPlan3Biomedicalelement = document.getElementById("MECE301CoopPlan3Biomedical");
       MECE301CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE301CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE331CoopPlan3Biomedicalelement = document.getElementById("MECE331CoopPlan3Biomedical");
       MECE331CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE331CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE371CoopPlan3Biomedicalelement = document.getElementById("MECE371CoopPlan3Biomedical");
       MECE371CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE371CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE380CoopPlan3Biomedicalelement = document.getElementById("MECE380CoopPlan3Biomedical");
       MECE380CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE380CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE430CoopPlan3Biomedicalelement = document.getElementById("MECE430CoopPlan3Biomedical");
       MECE430CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE430CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE463CoopPlan3Biomedicalelement = document.getElementById("MECE463CoopPlan3Biomedical");
       MECE463CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE463CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var CHE448CoopPlan3Biomedicalelement = document.getElementById("CHE448CoopPlan3Biomedical");
       CHE448CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE448CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE420CoopPlan3Biomedicalelement = document.getElementById("MECE420CoopPlan3Biomedical");
       MECE420CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE420CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE403CoopPlan3Biomedicalelement = document.getElementById("MECE403CoopPlan3Biomedical");
       MECE403CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE403CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       var MECE451CoopPlan3Biomedicalelement = document.getElementById("MECE451CoopPlan3Biomedical");
       MECE451CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE451CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
       break;
      case "CoopPlan4":
       var CIVE270CoopPlan4element = document.getElementById("CIVE270CoopPlan4");
       CIVE270CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CIVE270CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE230CoopPlan4element = document.getElementById("MECE230CoopPlan4");
       MECE230CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE230CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var ECE209CoopPlan4element = document.getElementById("ECE209CoopPlan4");
       ECE209CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       ECE209CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var CHE243CoopPlan4element = document.getElementById("CHE243CoopPlan4");
       CHE243CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE243CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MATE202CoopPlan4element = document.getElementById("MATE202CoopPlan4");
       MATE202CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MATE202CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE250CoopPlan4element = document.getElementById("MECE250CoopPlan4");
       MECE250CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE250CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE300CoopPlan4element = document.getElementById("MECE300CoopPlan4");
       MECE300CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE300CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE301CoopPlan4element = document.getElementById("MECE301CoopPlan4");
       MECE301CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE301CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE331CoopPlan4element = document.getElementById("MECE331CoopPlan4");
       MECE331CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE331CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE371CoopPlan4element = document.getElementById("MECE371CoopPlan4");
       MECE371CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE371CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE380CoopPlan4element = document.getElementById("MECE380CoopPlan4");
       MECE380CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE380CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE340CoopPlan4element = document.getElementById("MECE340CoopPlan4");
       MECE340CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE340CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE430CoopPlan4element = document.getElementById("MECE430CoopPlan4");
       MECE430CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE430CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE480CoopPlan4element = document.getElementById("MECE480CoopPlan4");
       MECE480CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE480CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE463CoopPlan4element = document.getElementById("MECE463CoopPlan4");
       MECE463CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE463CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var CHE448CoopPlan4element = document.getElementById("CHE448CoopPlan4");
       CHE448CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       CHE448CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE420CoopPlan4element = document.getElementById("MECE420CoopPlan4");
       MECE420CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE420CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE403CoopPlan4element = document.getElementById("MECE403CoopPlan4");
       MECE403CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE403CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       var MECE451CoopPlan4element = document.getElementById("MECE451CoopPlan4");
       MECE451CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
       MECE451CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
       break;
       }
      break;
  case "ComplementaryElective":
    switch(planName) {
      case "TraditionalPlan":
       var ComplementaryElectiveTraditionalPlanelement = document.getElementById("ComplementaryElectiveTraditionalPlan");
       ComplementaryElectiveTraditionalPlanelement.classList.remove("ComplementaryElective-highlighted");
       ComplementaryElectiveTraditionalPlanelement.classList.add("ComplementaryElective");
       break;
      case "AlternatePlan":
       var ComplementaryElectiveAlternatePlanelement = document.getElementById("ComplementaryElectiveAlternatePlan");
       ComplementaryElectiveAlternatePlanelement.classList.remove("ComplementaryElective-highlighted");
       ComplementaryElectiveAlternatePlanelement.classList.add("ComplementaryElective");
       break;
      case "CoopPlan1":
       var ComplementaryElectiveCoopPlan1element = document.getElementById("ComplementaryElectiveCoopPlan1");
       ComplementaryElectiveCoopPlan1element.classList.remove("ComplementaryElective-highlighted");
       ComplementaryElectiveCoopPlan1element.classList.add("ComplementaryElective");
       break;
      case "CoopPlan2":
       var ComplementaryElectiveCoopPlan2element = document.getElementById("ComplementaryElectiveCoopPlan2");
       ComplementaryElectiveCoopPlan2element.classList.remove("ComplementaryElective-highlighted");
       ComplementaryElectiveCoopPlan2element.classList.add("ComplementaryElective");
       break;
      case "CoopPlan3Biomedical":
       var ComplementaryElectiveCoopPlan3Biomedicalelement = document.getElementById("ComplementaryElectiveCoopPlan3Biomedical");
       ComplementaryElectiveCoopPlan3Biomedicalelement.classList.remove("ComplementaryElective-highlighted");
       ComplementaryElectiveCoopPlan3Biomedicalelement.classList.add("ComplementaryElective");
       break;
      case "CoopPlan4":
       var ComplementaryElectiveCoopPlan4element = document.getElementById("ComplementaryElectiveCoopPlan4");
       ComplementaryElectiveCoopPlan4element.classList.remove("ComplementaryElective-highlighted");
       ComplementaryElectiveCoopPlan4element.classList.add("ComplementaryElective");
       break;
       }
      break;
  case "ProgramTechnicalElective":
    switch(planName) {
      case "TraditionalPlan":
       var ProgramTechnicalElectiveTraditionalPlanelement = document.getElementById("ProgramTechnicalElectiveTraditionalPlan");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveTraditionalPlanelement = document.getElementById("ProgramTechnicalElectiveTraditionalPlan");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveTraditionalPlanelement = document.getElementById("ProgramTechnicalElectiveTraditionalPlan");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveTraditionalPlanelement = document.getElementById("ProgramTechnicalElectiveTraditionalPlan");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveTraditionalPlanelement.classList.add("ProgramTechnicalElective");
       break;
      case "AlternatePlan":
       var ProgramTechnicalElectiveAlternatePlanelement = document.getElementById("ProgramTechnicalElectiveAlternatePlan");
       ProgramTechnicalElectiveAlternatePlanelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveAlternatePlanelement.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveAlternatePlanelement = document.getElementById("ProgramTechnicalElectiveAlternatePlan");
       ProgramTechnicalElectiveAlternatePlanelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveAlternatePlanelement.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveAlternatePlanelement = document.getElementById("ProgramTechnicalElectiveAlternatePlan");
       ProgramTechnicalElectiveAlternatePlanelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveAlternatePlanelement.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveAlternatePlanelement = document.getElementById("ProgramTechnicalElectiveAlternatePlan");
       ProgramTechnicalElectiveAlternatePlanelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveAlternatePlanelement.classList.add("ProgramTechnicalElective");
       break;
      case "CoopPlan1":
       var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
       ProgramTechnicalElectiveCoopPlan1element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan1element.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
       ProgramTechnicalElectiveCoopPlan1element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan1element.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
       ProgramTechnicalElectiveCoopPlan1element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan1element.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
       ProgramTechnicalElectiveCoopPlan1element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan1element.classList.add("ProgramTechnicalElective");
       break;
      case "CoopPlan2":
       var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
       ProgramTechnicalElectiveCoopPlan2element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan2element.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
       ProgramTechnicalElectiveCoopPlan2element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan2element.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
       ProgramTechnicalElectiveCoopPlan2element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan2element.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
       ProgramTechnicalElectiveCoopPlan2element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan2element.classList.add("ProgramTechnicalElective");
       break;
      case "CoopPlan3Biomedical":
       var ProgramTechnicalElectiveCoopPlan3Biomedicalelement = document.getElementById("ProgramTechnicalElectiveCoopPlan3Biomedical");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan3Biomedicalelement = document.getElementById("ProgramTechnicalElectiveCoopPlan3Biomedical");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan3Biomedicalelement = document.getElementById("ProgramTechnicalElectiveCoopPlan3Biomedical");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan3Biomedicalelement.classList.add("ProgramTechnicalElective");
       break;
      case "CoopPlan4":
       var ProgramTechnicalElectiveCoopPlan4element = document.getElementById("ProgramTechnicalElectiveCoopPlan4");
       ProgramTechnicalElectiveCoopPlan4element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan4element.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan4element = document.getElementById("ProgramTechnicalElectiveCoopPlan4");
       ProgramTechnicalElectiveCoopPlan4element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan4element.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan4element = document.getElementById("ProgramTechnicalElectiveCoopPlan4");
       ProgramTechnicalElectiveCoopPlan4element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan4element.classList.add("ProgramTechnicalElective");
       var ProgramTechnicalElectiveCoopPlan4element = document.getElementById("ProgramTechnicalElectiveCoopPlan4");
       ProgramTechnicalElectiveCoopPlan4element.classList.remove("ProgramTechnicalElective-highlighted");
       ProgramTechnicalElectiveCoopPlan4element.classList.add("ProgramTechnicalElective");
       break;
       }
      break;
  case "ITSElective":
    switch(planName) {
      case "TraditionalPlan":
       var ITSElectiveTraditionalPlanelement = document.getElementById("ITSElectiveTraditionalPlan");
       ITSElectiveTraditionalPlanelement.classList.remove("ITSElective-highlighted");
       ITSElectiveTraditionalPlanelement.classList.add("ITSElective");
       break;
      case "AlternatePlan":
       var ITSElectiveAlternatePlanelement = document.getElementById("ITSElectiveAlternatePlan");
       ITSElectiveAlternatePlanelement.classList.remove("ITSElective-highlighted");
       ITSElectiveAlternatePlanelement.classList.add("ITSElective");
       break;
      case "CoopPlan1":
       var ITSElectiveCoopPlan1element = document.getElementById("ITSElectiveCoopPlan1");
       ITSElectiveCoopPlan1element.classList.remove("ITSElective-highlighted");
       ITSElectiveCoopPlan1element.classList.add("ITSElective");
       break;
      case "CoopPlan2":
       var ITSElectiveCoopPlan2element = document.getElementById("ITSElectiveCoopPlan2");
       ITSElectiveCoopPlan2element.classList.remove("ITSElective-highlighted");
       ITSElectiveCoopPlan2element.classList.add("ITSElective");
       break;
      case "CoopPlan3Biomedical":
       var ITSElectiveCoopPlan3Biomedicalelement = document.getElementById("ITSElectiveCoopPlan3Biomedical");
       ITSElectiveCoopPlan3Biomedicalelement.classList.remove("ITSElective-highlighted");
       ITSElectiveCoopPlan3Biomedicalelement.classList.add("ITSElective");
       break;
      case "CoopPlan4":
       var ITSElectiveCoopPlan4element = document.getElementById("ITSElectiveCoopPlan4");
       ITSElectiveCoopPlan4element.classList.remove("ITSElective-highlighted");
       ITSElectiveCoopPlan4element.classList.add("ITSElective");
       break;
       }
      break;
  case "":
    switch(planName) {
      case "CoopPlan3Biomedical":
       var BME320CoopPlan3Biomedicalelement = document.getElementById("BME320CoopPlan3Biomedical");
       BME320CoopPlan3Biomedicalelement.classList.remove("-highlighted");
       BME320CoopPlan3Biomedicalelement.classList.add("");
       var BME321CoopPlan3Biomedicalelement = document.getElementById("BME321CoopPlan3Biomedical");
       BME321CoopPlan3Biomedicalelement.classList.remove("-highlighted");
       BME321CoopPlan3Biomedicalelement.classList.add("");
       var MECE563CoopPlan3Biomedicalelement = document.getElementById("MECE563CoopPlan3Biomedical");
       MECE563CoopPlan3Biomedicalelement.classList.remove("-highlighted");
       MECE563CoopPlan3Biomedicalelement.classList.add("");
       var STAT337CoopPlan3Biomedicalelement = document.getElementById("STAT337CoopPlan3Biomedical");
       STAT337CoopPlan3Biomedicalelement.classList.remove("-highlighted");
       STAT337CoopPlan3Biomedicalelement.classList.add("");
       var MECE485CoopPlan3Biomedicalelement = document.getElementById("MECE485CoopPlan3Biomedical");
       MECE485CoopPlan3Biomedicalelement.classList.remove("-highlighted");
       MECE485CoopPlan3Biomedicalelement.classList.add("");
       var PHIL386CoopPlan3Biomedicalelement = document.getElementById("PHIL386CoopPlan3Biomedical");
       PHIL386CoopPlan3Biomedicalelement.classList.remove("-highlighted");
       PHIL386CoopPlan3Biomedicalelement.classList.add("");
       break;
       }
      break;
break;   default:
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
  var ENGM401TraditionalPlanflag = false;
  var MECE340TraditionalPlanflag = false;
  var MECE360TraditionalPlanflag = false;
  var MECE362TraditionalPlanflag = false;
  var MECE390TraditionalPlanflag = false;
  var ComplementaryElectiveTraditionalPlan0flag = false;
  var ENGG404TraditionalPlanflag = false;
  var MECE430TraditionalPlanflag = false;
  var MECE480TraditionalPlanflag = false;
  var MECE463TraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveTraditionalPlan2flag = false;
  var CHE448TraditionalPlanflag = false;
  var MECE420TraditionalPlanflag = false;
  var ENGG400TraditionalPlanflag = false;
  var MECE403TraditionalPlanflag = false;
  var MECE451TraditionalPlanflag = false;
  var MECE460TraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlan3flag = false;
  var ITSElectiveTraditionalPlan0flag = false;
$scope.CHEM103TraditionalPlanListener = function () {
  var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
 if (!CHEM103TraditionalPlanflag) {
     if (CHEM103TraditionalPlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM103TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM103TraditionalPlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine2());
     CHEM103TraditionalPlanelement.classList.remove("BASICSCIENCES");
     CHEM103TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM103TraditionalPlan", "BASICSCIENCES"]);
      CHEM103TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
     CHEM103TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM103TraditionalPlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM103TraditionalPlan");
      CHEM103TraditionalPlanflag=false
  }
};
$scope.ENGG100TraditionalPlanListener = function () {
  var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
 if (!ENGG100TraditionalPlanflag) {
     if (ENGG100TraditionalPlanelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG100TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG100TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG100TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG100TraditionalPlan", "ENGINEERINGPROFESSION"]);
      ENGG100TraditionalPlanflag=true
  }
 else {
     ENGG100TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG100TraditionalPlan");
      ENGG100TraditionalPlanflag=false
  }
};
$scope.ENGG130TraditionalPlanListener = function () {
  var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
 if (!ENGG130TraditionalPlanflag) {
     if (ENGG130TraditionalPlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     ENGG130TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENGG130TraditionalPlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine5());
      that.addLine(getLine9());
      that.addLine(getLine16());
     ENGG130TraditionalPlanelement.classList.remove("BASICSCIENCES");
     ENGG130TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENGG130TraditionalPlan", "BASICSCIENCES"]);
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
      that.removeLine(getLine9());
      that.removeLine(getLine16());
     ENGG130TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENGG130TraditionalPlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENGG130TraditionalPlan");
      ENGG130TraditionalPlanflag=false
  }
};
$scope.ENGL199TraditionalPlanListener = function () {
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
  var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
 if (!MATH100TraditionalPlanflag) {
     if (MATH100TraditionalPlanelement.classList.contains("MATH-highlighted")) { 
     MATH100TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH100TraditionalPlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine1());
      that.addLine(getLine4());
      that.addLine(getLine7());
      that.addLine(getLine8());
      that.addLine(getLine13());
     MATH100TraditionalPlanelement.classList.remove("MATH");
     MATH100TraditionalPlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH100TraditionalPlan", "MATH"]);
      MATH100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine1());
      that.removeLine(getLine4());
      that.removeLine(getLine7());
      that.removeLine(getLine8());
      that.removeLine(getLine13());
     MATH100TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH100TraditionalPlanelement.classList.add("MATH");
     that.removeFromClicked("MATH100TraditionalPlan");
      MATH100TraditionalPlanflag=false
  }
};
$scope.PHYS130TraditionalPlanListener = function () {
  var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
 if (!PHYS130TraditionalPlanflag) {
     if (PHYS130TraditionalPlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     PHYS130TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     PHYS130TraditionalPlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine1());
     PHYS130TraditionalPlanelement.classList.remove("BASICSCIENCES");
     PHYS130TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["PHYS130TraditionalPlan", "BASICSCIENCES"]);
      PHYS130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
     PHYS130TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     PHYS130TraditionalPlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("PHYS130TraditionalPlan");
      PHYS130TraditionalPlanflag=false
  }
};
$scope.CHEM105TraditionalPlanListener = function () {
  var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
 if (!CHEM105TraditionalPlanflag) {
     if (CHEM105TraditionalPlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM105TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM105TraditionalPlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine2());
      that.addLine(getLine19());
     CHEM105TraditionalPlanelement.classList.remove("BASICSCIENCES");
     CHEM105TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM105TraditionalPlan", "BASICSCIENCES"]);
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine19());
     CHEM105TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM105TraditionalPlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM105TraditionalPlan");
      CHEM105TraditionalPlanflag=false
  }
};
$scope.ENCMP100TraditionalPlanListener = function () {
  var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
 if (!ENCMP100TraditionalPlanflag) {
     if (ENCMP100TraditionalPlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     ENCMP100TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100TraditionalPlanelement.classList.add("BASICSCIENCES");
      return;
}     ENCMP100TraditionalPlanelement.classList.remove("BASICSCIENCES");
     ENCMP100TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENCMP100TraditionalPlan", "BASICSCIENCES"]);
      ENCMP100TraditionalPlanflag=true
  }
 else {
     ENCMP100TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100TraditionalPlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENCMP100TraditionalPlan");
      ENCMP100TraditionalPlanflag=false
  }
};
$scope.ENGG160TraditionalPlanListener = function () {
  var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
 if (!ENGG160TraditionalPlanflag) {
     if (ENGG160TraditionalPlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     ENGG160TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine3());
      that.addLine(getLine23());
     ENGG160TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
     ENGG160TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["ENGG160TraditionalPlan", "ENGINEERINGDESIGN"]);
      ENGG160TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
      that.removeLine(getLine23());
     ENGG160TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("ENGG160TraditionalPlan");
      ENGG160TraditionalPlanflag=false
  }
};
$scope.ENPH131TraditionalPlanListener = function () {
  var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
 if (!ENPH131TraditionalPlanflag) {
     if (ENPH131TraditionalPlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     ENPH131TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENPH131TraditionalPlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine4());
      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine17());
      that.addLine(getLine22());
     ENPH131TraditionalPlanelement.classList.remove("BASICSCIENCES");
     ENPH131TraditionalPlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENPH131TraditionalPlan", "BASICSCIENCES"]);
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine17());
      that.removeLine(getLine22());
     ENPH131TraditionalPlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENPH131TraditionalPlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENPH131TraditionalPlan");
      ENPH131TraditionalPlanflag=false
  }
};
$scope.MATH101TraditionalPlanListener = function () {
  var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
 if (!MATH101TraditionalPlanflag) {
     if (MATH101TraditionalPlanelement.classList.contains("MATH-highlighted")) { 
     MATH101TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH101TraditionalPlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine6());
      that.addLine(getLine7());
      that.addLine(getLine10());
      that.addLine(getLine11());
      that.addLine(getLine14());
      that.addLine(getLine15());
      that.addLine(getLine18());
      that.addLine(getLine21());
     MATH101TraditionalPlanelement.classList.remove("MATH");
     MATH101TraditionalPlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH101TraditionalPlan", "MATH"]);
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
     MATH101TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH101TraditionalPlanelement.classList.add("MATH");
     that.removeFromClicked("MATH101TraditionalPlan");
      MATH101TraditionalPlanflag=false
  }
};
$scope.MATH102TraditionalPlanListener = function () {
  var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
 if (!MATH102TraditionalPlanflag) {
     if (MATH102TraditionalPlanelement.classList.contains("MATH-highlighted")) { 
     MATH102TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH102TraditionalPlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine8());
      that.addLine(getLine12());
      that.addLine(getLine49());
     MATH102TraditionalPlanelement.classList.remove("MATH");
     MATH102TraditionalPlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH102TraditionalPlan", "MATH"]);
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine12());
      that.removeLine(getLine49());
     MATH102TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH102TraditionalPlanelement.classList.add("MATH");
     that.removeFromClicked("MATH102TraditionalPlan");
      MATH102TraditionalPlanflag=false
  }
};
$scope.CIVE270TraditionalPlanListener = function () {
  var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
 if (!CIVE270TraditionalPlanflag) {
     if (CIVE270TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CIVE270TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine9());
      that.addLine(getLine10());
      that.addLine(getLine24());
      that.addLine(getLine28());
      that.addLine(getLine41());
      that.addLine(getLine46());
     CIVE270TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     CIVE270TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CIVE270TraditionalPlan", "ENGINEERINGSCIENCES"]);
      CIVE270TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine24());
      that.removeLine(getLine28());
      that.removeLine(getLine41());
      that.removeLine(getLine46());
     CIVE270TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CIVE270TraditionalPlan");
      CIVE270TraditionalPlanflag=false
  }
};
$scope.MATH209TraditionalPlanListener = function () {
  var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
 if (!MATH209TraditionalPlanflag) {
     if (MATH209TraditionalPlanelement.classList.contains("MATH-highlighted")) { 
     MATH209TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH209TraditionalPlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine11());
      that.addLine(getLine12());
      that.addLine(getLine20());
      that.addLine(getLine27());
      that.addLine(getLine35());
      that.addLine(getLine59());
     MATH209TraditionalPlanelement.classList.remove("MATH");
     MATH209TraditionalPlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH209TraditionalPlan", "MATH"]);
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine12());
      that.removeLine(getLine20());
      that.removeLine(getLine27());
      that.removeLine(getLine35());
      that.removeLine(getLine59());
     MATH209TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH209TraditionalPlanelement.classList.add("MATH");
     that.removeFromClicked("MATH209TraditionalPlan");
      MATH209TraditionalPlanflag=false
  }
};
$scope.STAT235TraditionalPlanListener = function () {
  var STAT235TraditionalPlanelement = document.getElementById("STAT235TraditionalPlan");
 if (!STAT235TraditionalPlanflag) {
     if (STAT235TraditionalPlanelement.classList.contains("MATH-highlighted")) { 
     STAT235TraditionalPlanelement.classList.remove("MATH-highlighted");
     STAT235TraditionalPlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine13());
      that.addLine(getLine14());
      that.addLine(getLine30());
     STAT235TraditionalPlanelement.classList.remove("MATH");
     STAT235TraditionalPlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["STAT235TraditionalPlan", "MATH"]);
      STAT235TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      that.removeLine(getLine30());
     STAT235TraditionalPlanelement.classList.remove("MATH-highlighted");
     STAT235TraditionalPlanelement.classList.add("MATH");
     that.removeFromClicked("STAT235TraditionalPlan");
      STAT235TraditionalPlanflag=false
  }
};
$scope.CHE243TraditionalPlanListener = function () {
  var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
 if (!CHE243TraditionalPlanflag) {
     if (CHE243TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE243TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine15());
      that.addLine(getLine36());
      that.addLine(getLine38());
      that.addLine(getLine42());
     CHE243TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     CHE243TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE243TraditionalPlan", "ENGINEERINGSCIENCES"]);
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine15());
      that.removeLine(getLine36());
      that.removeLine(getLine38());
      that.removeLine(getLine42());
     CHE243TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE243TraditionalPlan");
      CHE243TraditionalPlanflag=false
  }
};
$scope.MECE200TraditionalPlanListener = function () {
  var MECE200TraditionalPlanelement = document.getElementById("MECE200TraditionalPlan");
 if (!MECE200TraditionalPlanflag) {
     if (MECE200TraditionalPlanelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     MECE200TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine69());
     MECE200TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION");
     MECE200TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["MECE200TraditionalPlan", "ENGINEERINGPROFESSION"]);
      MECE200TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine69());
     MECE200TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("MECE200TraditionalPlan");
      MECE200TraditionalPlanflag=false
  }
};
$scope.MECE250TraditionalPlanListener = function () {
  var MECE250TraditionalPlanelement = document.getElementById("MECE250TraditionalPlan");
 if (!MECE250TraditionalPlanflag) {
     if (MECE250TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE250TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine16());
      that.addLine(getLine17());
      that.addLine(getLine18());
      that.addLine(getLine34());
      that.addLine(getLine48());
      that.addLine(getLine67());
     MECE250TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE250TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE250TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE250TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
      that.removeLine(getLine17());
      that.removeLine(getLine18());
      that.removeLine(getLine34());
      that.removeLine(getLine48());
      that.removeLine(getLine67());
     MECE250TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE250TraditionalPlan");
      MECE250TraditionalPlanflag=false
  }
};
$scope.ECE209TraditionalPlanListener = function () {
  var ECE209TraditionalPlanelement = document.getElementById("ECE209TraditionalPlan");
 if (!ECE209TraditionalPlanflag) {
     if (ECE209TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     ECE209TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine29());
     ECE209TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     ECE209TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["ECE209TraditionalPlan", "ENGINEERINGSCIENCES"]);
      ECE209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
     ECE209TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("ECE209TraditionalPlan");
      ECE209TraditionalPlanflag=false
  }
};
$scope.MATE202TraditionalPlanListener = function () {
  var MATE202TraditionalPlanelement = document.getElementById("MATE202TraditionalPlan");
 if (!MATE202TraditionalPlanflag) {
     if (MATE202TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MATE202TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine19());
      that.addLine(getLine45());
     MATE202TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MATE202TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MATE202TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MATE202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
      that.removeLine(getLine45());
     MATE202TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MATE202TraditionalPlan");
      MATE202TraditionalPlanflag=false
  }
};
$scope.MATH201TraditionalPlanListener = function () {
  var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
 if (!MATH201TraditionalPlanflag) {
     if (MATH201TraditionalPlanelement.classList.contains("MATH-highlighted")) { 
     MATH201TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH201TraditionalPlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine20());
      that.addLine(getLine26());
      that.addLine(getLine50());
      that.addLine(getLine58());
     MATH201TraditionalPlanelement.classList.remove("MATH");
     MATH201TraditionalPlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH201TraditionalPlan", "MATH"]);
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine26());
      that.removeLine(getLine50());
      that.removeLine(getLine58());
     MATH201TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH201TraditionalPlanelement.classList.add("MATH");
     that.removeFromClicked("MATH201TraditionalPlan");
      MATH201TraditionalPlanflag=false
  }
};
$scope.MECE230TraditionalPlanListener = function () {
  var MECE230TraditionalPlanelement = document.getElementById("MECE230TraditionalPlan");
 if (!MECE230TraditionalPlanflag) {
     if (MECE230TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE230TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine21());
      that.addLine(getLine22());
      that.addLine(getLine33());
      that.addLine(getLine37());
     MECE230TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE230TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE230TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE230TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine22());
      that.removeLine(getLine33());
      that.removeLine(getLine37());
     MECE230TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE230TraditionalPlan");
      MECE230TraditionalPlanflag=false
  }
};
$scope.MECE260TraditionalPlanListener = function () {
  var MECE260TraditionalPlanelement = document.getElementById("MECE260TraditionalPlan");
 if (!MECE260TraditionalPlanflag) {
     if (MECE260TraditionalPlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE260TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine23());
      that.addLine(getLine24());
      that.addLine(getLine25());
      that.addLine(getLine43());
     MECE260TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE260TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE260TraditionalPlan", "ENGINEERINGDESIGN"]);
      MECE260TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine23());
      that.removeLine(getLine24());
      that.removeLine(getLine25());
      that.removeLine(getLine43());
     MECE260TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE260TraditionalPlan");
      MECE260TraditionalPlanflag=false
  }
};
$scope.MECE265TraditionalPlanListener = function () {
  var MECE265TraditionalPlanelement = document.getElementById("MECE265TraditionalPlan");
 if (!MECE265TraditionalPlanflag) {
     if (MECE265TraditionalPlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE265TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine25());
      that.addLine(getLine44());
     MECE265TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE265TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE265TraditionalPlan", "ENGINEERINGDESIGN"]);
      MECE265TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine25());
      that.removeLine(getLine44());
     MECE265TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE265TraditionalPlan");
      MECE265TraditionalPlanflag=false
  }
};
$scope.MATH300TraditionalPlanListener = function () {
  var MATH300TraditionalPlanelement = document.getElementById("MATH300TraditionalPlan");
 if (!MATH300TraditionalPlanflag) {
     if (MATH300TraditionalPlanelement.classList.contains("MATH-highlighted")) { 
     MATH300TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH300TraditionalPlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine26());
      that.addLine(getLine27());
      that.addLine(getLine39());
      that.addLine(getLine54());
      that.addLine(getLine68());
     MATH300TraditionalPlanelement.classList.remove("MATH");
     MATH300TraditionalPlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH300TraditionalPlan", "MATH"]);
      MATH300TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      that.removeLine(getLine27());
      that.removeLine(getLine39());
      that.removeLine(getLine54());
      that.removeLine(getLine68());
     MATH300TraditionalPlanelement.classList.remove("MATH-highlighted");
     MATH300TraditionalPlanelement.classList.add("MATH");
     that.removeFromClicked("MATH300TraditionalPlan");
      MATH300TraditionalPlanflag=false
  }
};
$scope.MECE300TraditionalPlanListener = function () {
  var MECE300TraditionalPlanelement = document.getElementById("MECE300TraditionalPlan");
 if (!MECE300TraditionalPlanflag) {
     if (MECE300TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE300TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine28());
      that.addLine(getLine29());
      that.addLine(getLine30());
      that.addLine(getLine31());
      that.addLine(getLine32());
      that.addLine(getLine63());
     MECE300TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE300TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE300TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE300TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine29());
      that.removeLine(getLine30());
      that.removeLine(getLine31());
      that.removeLine(getLine32());
      that.removeLine(getLine63());
     MECE300TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE300TraditionalPlan");
      MECE300TraditionalPlanflag=false
  }
};
$scope.MECE301TraditionalPlanListener = function () {
  var MECE301TraditionalPlanelement = document.getElementById("MECE301TraditionalPlan");
 if (!MECE301TraditionalPlanflag) {
     if (MECE301TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE301TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine32());
      that.addLine(getLine64());
     MECE301TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE301TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE301TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE301TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine32());
      that.removeLine(getLine64());
     MECE301TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE301TraditionalPlan");
      MECE301TraditionalPlanflag=false
  }
};
$scope.MECE331TraditionalPlanListener = function () {
  var MECE331TraditionalPlanelement = document.getElementById("MECE331TraditionalPlan");
 if (!MECE331TraditionalPlanflag) {
     if (MECE331TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE331TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine31());
      that.addLine(getLine33());
      that.addLine(getLine34());
      that.addLine(getLine35());
      that.addLine(getLine36());
      that.addLine(getLine40());
      that.addLine(getLine51());
      that.addLine(getLine55());
      that.addLine(getLine60());
      that.addLine(getLine70());
     MECE331TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE331TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE331TraditionalPlan", "ENGINEERINGSCIENCES"]);
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
      that.removeLine(getLine55());
      that.removeLine(getLine60());
      that.removeLine(getLine70());
     MECE331TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE331TraditionalPlan");
      MECE331TraditionalPlanflag=false
  }
};
$scope.MECE371TraditionalPlanListener = function () {
  var MECE371TraditionalPlanelement = document.getElementById("MECE371TraditionalPlan");
 if (!MECE371TraditionalPlanflag) {
     if (MECE371TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE371TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine37());
      that.addLine(getLine38());
      that.addLine(getLine39());
      that.addLine(getLine40());
      that.addLine(getLine57());
      that.addLine(getLine61());
      that.addLine(getLine74());
     MECE371TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE371TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE371TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE371TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine38());
      that.removeLine(getLine39());
      that.removeLine(getLine40());
      that.removeLine(getLine57());
      that.removeLine(getLine61());
      that.removeLine(getLine74());
     MECE371TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE371TraditionalPlan");
      MECE371TraditionalPlanflag=false
  }
};
$scope.MECE380TraditionalPlanListener = function () {
  var MECE380TraditionalPlanelement = document.getElementById("MECE380TraditionalPlan");
 if (!MECE380TraditionalPlanflag) {
     if (MECE380TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE380TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine41());
      that.addLine(getLine53());
      that.addLine(getLine75());
     MECE380TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE380TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE380TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE380TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine53());
      that.removeLine(getLine75());
     MECE380TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE380TraditionalPlan");
      MECE380TraditionalPlanflag=false
  }
};
$scope.ENGM310TraditionalPlanListener = function () {
  var ENGM310TraditionalPlanelement = document.getElementById("ENGM310TraditionalPlan");
 if (!ENGM310TraditionalPlanflag) {
     if (ENGM310TraditionalPlanelement.classList.contains("Other-highlighted")) { 
     ENGM310TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM310TraditionalPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine76());
     ENGM310TraditionalPlanelement.classList.remove("Other");
     ENGM310TraditionalPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310TraditionalPlan", "Other"]);
      ENGM310TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine76());
     ENGM310TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM310TraditionalPlanelement.classList.add("Other");
     that.removeFromClicked("ENGM310TraditionalPlan");
      ENGM310TraditionalPlanflag=false
  }
};
$scope.ENGM401TraditionalPlanListener = function () {
  var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
 if (!ENGM401TraditionalPlanflag) {
     if (ENGM401TraditionalPlanelement.classList.contains("Other-highlighted")) { 
     ENGM401TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM401TraditionalPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine77());
     ENGM401TraditionalPlanelement.classList.remove("Other");
     ENGM401TraditionalPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401TraditionalPlan", "Other"]);
      ENGM401TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine77());
     ENGM401TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM401TraditionalPlanelement.classList.add("Other");
     that.removeFromClicked("ENGM401TraditionalPlan");
      ENGM401TraditionalPlanflag=false
  }
};
$scope.MECE340TraditionalPlanListener = function () {
  var MECE340TraditionalPlanelement = document.getElementById("MECE340TraditionalPlan");
 if (!MECE340TraditionalPlanflag) {
     if (MECE340TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE340TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine42());
      that.addLine(getLine56());
      that.addLine(getLine65());
      that.addLine(getLine71());
     MECE340TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE340TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE340TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE340TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine42());
      that.removeLine(getLine56());
      that.removeLine(getLine65());
      that.removeLine(getLine71());
     MECE340TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE340TraditionalPlan");
      MECE340TraditionalPlanflag=false
  }
};
$scope.MECE360TraditionalPlanListener = function () {
  var MECE360TraditionalPlanelement = document.getElementById("MECE360TraditionalPlan");
 if (!MECE360TraditionalPlanflag) {
     if (MECE360TraditionalPlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE360TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine43());
      that.addLine(getLine44());
      that.addLine(getLine45());
      that.addLine(getLine46());
      that.addLine(getLine47());
      that.addLine(getLine52());
      that.addLine(getLine66());
      that.addLine(getLine72());
     MECE360TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE360TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE360TraditionalPlan", "ENGINEERINGDESIGN"]);
      MECE360TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine43());
      that.removeLine(getLine44());
      that.removeLine(getLine45());
      that.removeLine(getLine46());
      that.removeLine(getLine47());
      that.removeLine(getLine52());
      that.removeLine(getLine66());
      that.removeLine(getLine72());
     MECE360TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE360TraditionalPlan");
      MECE360TraditionalPlanflag=false
  }
};
$scope.MECE362TraditionalPlanListener = function () {
  var MECE362TraditionalPlanelement = document.getElementById("MECE362TraditionalPlan");
 if (!MECE362TraditionalPlanflag) {
     if (MECE362TraditionalPlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE362TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine47());
      that.addLine(getLine48());
      that.addLine(getLine73());
     MECE362TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE362TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE362TraditionalPlan", "ENGINEERINGDESIGN"]);
      MECE362TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine47());
      that.removeLine(getLine48());
      that.removeLine(getLine73());
     MECE362TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE362TraditionalPlan");
      MECE362TraditionalPlanflag=false
  }
};
$scope.MECE390TraditionalPlanListener = function () {
  var MECE390TraditionalPlanelement = document.getElementById("MECE390TraditionalPlan");
 if (!MECE390TraditionalPlanflag) {
     if (MECE390TraditionalPlanelement.classList.contains("MATH-highlighted")) { 
     MECE390TraditionalPlanelement.classList.remove("MATH-highlighted");
     MECE390TraditionalPlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine49());
      that.addLine(getLine50());
      that.addLine(getLine62());
     MECE390TraditionalPlanelement.classList.remove("MATH");
     MECE390TraditionalPlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MECE390TraditionalPlan", "MATH"]);
      MECE390TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine49());
      that.removeLine(getLine50());
      that.removeLine(getLine62());
     MECE390TraditionalPlanelement.classList.remove("MATH-highlighted");
     MECE390TraditionalPlanelement.classList.add("MATH");
     that.removeFromClicked("MECE390TraditionalPlan");
      MECE390TraditionalPlanflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan0Listener = function () {
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
  var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
 if (!ENGG404TraditionalPlanflag) {
     if (ENGG404TraditionalPlanelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG404TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG404TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG404TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG404TraditionalPlan", "ENGINEERINGPROFESSION"]);
      ENGG404TraditionalPlanflag=true
  }
 else {
     ENGG404TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG404TraditionalPlan");
      ENGG404TraditionalPlanflag=false
  }
};
$scope.MECE430TraditionalPlanListener = function () {
  var MECE430TraditionalPlanelement = document.getElementById("MECE430TraditionalPlan");
 if (!MECE430TraditionalPlanflag) {
     if (MECE430TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE430TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine51());
     MECE430TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE430TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE430TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE430TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine51());
     MECE430TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE430TraditionalPlan");
      MECE430TraditionalPlanflag=false
  }
};
$scope.MECE480TraditionalPlanListener = function () {
  var MECE480TraditionalPlanelement = document.getElementById("MECE480TraditionalPlan");
 if (!MECE480TraditionalPlanflag) {
     if (MECE480TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE480TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine52());
      that.addLine(getLine53());
      that.addLine(getLine54());
     MECE480TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE480TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE480TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE480TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine52());
      that.removeLine(getLine53());
      that.removeLine(getLine54());
     MECE480TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE480TraditionalPlan");
      MECE480TraditionalPlanflag=false
  }
};
$scope.MECE463TraditionalPlanListener = function () {
  var MECE463TraditionalPlanelement = document.getElementById("MECE463TraditionalPlan");
 if (!MECE463TraditionalPlanflag) {
     if (MECE463TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE463TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine55());
      that.addLine(getLine56());
      that.addLine(getLine57());
     MECE463TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE463TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE463TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE463TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine56());
      that.removeLine(getLine57());
     MECE463TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE463TraditionalPlan");
      MECE463TraditionalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan0Listener = function () {
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
$scope.ProgramTechnicalElectiveTraditionalPlan2Listener = function () {
  var ProgramTechnicalElectiveTraditionalPlan2element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan2");
 if (!ProgramTechnicalElectiveTraditionalPlan2flag) {
     if (ProgramTechnicalElectiveTraditionalPlan2element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveTraditionalPlan2element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan2element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveTraditionalPlan2element.classList.remove("PROG");
     ProgramTechnicalElectiveTraditionalPlan2element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveTraditionalPlan2", "PROG"]);
      ProgramTechnicalElectiveTraditionalPlan2flag=true
  }
 else {
     ProgramTechnicalElectiveTraditionalPlan2element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan2element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan2");
      ProgramTechnicalElectiveTraditionalPlan2flag=false
  }
};
$scope.CHE448TraditionalPlanListener = function () {
  var CHE448TraditionalPlanelement = document.getElementById("CHE448TraditionalPlan");
 if (!CHE448TraditionalPlanflag) {
     if (CHE448TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE448TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine58());
      that.addLine(getLine59());
      that.addLine(getLine60());
      that.addLine(getLine61());
     CHE448TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     CHE448TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE448TraditionalPlan", "ENGINEERINGSCIENCES"]);
      CHE448TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine58());
      that.removeLine(getLine59());
      that.removeLine(getLine60());
      that.removeLine(getLine61());
     CHE448TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE448TraditionalPlan");
      CHE448TraditionalPlanflag=false
  }
};
$scope.MECE420TraditionalPlanListener = function () {
  var MECE420TraditionalPlanelement = document.getElementById("MECE420TraditionalPlan");
 if (!MECE420TraditionalPlanflag) {
     if (MECE420TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE420TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine62());
     MECE420TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE420TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE420TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE420TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine62());
     MECE420TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE420TraditionalPlan");
      MECE420TraditionalPlanflag=false
  }
};
$scope.ENGG400TraditionalPlanListener = function () {
  var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
 if (!ENGG400TraditionalPlanflag) {
     if (ENGG400TraditionalPlanelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG400TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG400TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG400TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG400TraditionalPlan", "ENGINEERINGPROFESSION"]);
      ENGG400TraditionalPlanflag=true
  }
 else {
     ENGG400TraditionalPlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400TraditionalPlanelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG400TraditionalPlan");
      ENGG400TraditionalPlanflag=false
  }
};
$scope.MECE403TraditionalPlanListener = function () {
  var MECE403TraditionalPlanelement = document.getElementById("MECE403TraditionalPlan");
 if (!MECE403TraditionalPlanflag) {
     if (MECE403TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE403TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine63());
      that.addLine(getLine64());
      that.addLine(getLine65());
      that.addLine(getLine66());
     MECE403TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE403TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE403TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE403TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine63());
      that.removeLine(getLine64());
      that.removeLine(getLine65());
      that.removeLine(getLine66());
     MECE403TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE403TraditionalPlan");
      MECE403TraditionalPlanflag=false
  }
};
$scope.MECE451TraditionalPlanListener = function () {
  var MECE451TraditionalPlanelement = document.getElementById("MECE451TraditionalPlan");
 if (!MECE451TraditionalPlanflag) {
     if (MECE451TraditionalPlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE451TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine67());
      that.addLine(getLine68());
     MECE451TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE451TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE451TraditionalPlan", "ENGINEERINGSCIENCES"]);
      MECE451TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine67());
      that.removeLine(getLine68());
     MECE451TraditionalPlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451TraditionalPlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE451TraditionalPlan");
      MECE451TraditionalPlanflag=false
  }
};
$scope.MECE460TraditionalPlanListener = function () {
  var MECE460TraditionalPlanelement = document.getElementById("MECE460TraditionalPlan");
 if (!MECE460TraditionalPlanflag) {
     if (MECE460TraditionalPlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE460TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine69());
      that.addLine(getLine70());
      that.addLine(getLine71());
      that.addLine(getLine72());
      that.addLine(getLine73());
      that.addLine(getLine74());
      that.addLine(getLine75());
      that.addLine(getLine76());
      that.addLine(getLine77());
     MECE460TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE460TraditionalPlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE460TraditionalPlan", "ENGINEERINGDESIGN"]);
      MECE460TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine69());
      that.removeLine(getLine70());
      that.removeLine(getLine71());
      that.removeLine(getLine72());
      that.removeLine(getLine73());
      that.removeLine(getLine74());
      that.removeLine(getLine75());
      that.removeLine(getLine76());
      that.removeLine(getLine77());
     MECE460TraditionalPlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460TraditionalPlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE460TraditionalPlan");
      MECE460TraditionalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan3Listener = function () {
  var ProgramTechnicalElectiveTraditionalPlan3element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan3");
 if (!ProgramTechnicalElectiveTraditionalPlan3flag) {
     if (ProgramTechnicalElectiveTraditionalPlan3element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveTraditionalPlan3element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan3element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveTraditionalPlan3element.classList.remove("PROG");
     ProgramTechnicalElectiveTraditionalPlan3element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveTraditionalPlan3", "PROG"]);
      ProgramTechnicalElectiveTraditionalPlan3flag=true
  }
 else {
     ProgramTechnicalElectiveTraditionalPlan3element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan3element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan3");
      ProgramTechnicalElectiveTraditionalPlan3flag=false
  }
};
$scope.ITSElectiveTraditionalPlan0Listener = function () {
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
  var ENGM401AlternatePlanflag = false;
  var ENGG404AlternatePlanflag = false;
  var MATH201AlternatePlanflag = false;
  var MATH209AlternatePlanflag = false;
  var ComplementaryElectiveAlternatePlan0flag = false;
  var ITSElectiveAlternatePlan0flag = false;
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
  var ProgramTechnicalElectiveAlternatePlan0flag = false;
  var MECE430AlternatePlanflag = false;
  var MECE480AlternatePlanflag = false;
  var MECE463AlternatePlanflag = false;
  var ProgramTechnicalElectiveAlternatePlan1flag = false;
  var ProgramTechnicalElectiveAlternatePlan2flag = false;
  var ProgramTechnicalElectiveAlternatePlan3flag = false;
  var CHE448AlternatePlanflag = false;
  var MECE420AlternatePlanflag = false;
  var ENGG400AlternatePlanflag = false;
  var MECE403AlternatePlanflag = false;
  var MECE451AlternatePlanflag = false;
  var MECE460AlternatePlanflag = false;
$scope.CHEM103AlternatePlanListener = function () {
  var CHEM103AlternatePlanelement = document.getElementById("CHEM103AlternatePlan");
 if (!CHEM103AlternatePlanflag) {
     if (CHEM103AlternatePlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM103AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM103AlternatePlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine80());
     CHEM103AlternatePlanelement.classList.remove("BASICSCIENCES");
     CHEM103AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM103AlternatePlan", "BASICSCIENCES"]);
      CHEM103AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine80());
     CHEM103AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM103AlternatePlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM103AlternatePlan");
      CHEM103AlternatePlanflag=false
  }
};
$scope.ENGG100AlternatePlanListener = function () {
  var ENGG100AlternatePlanelement = document.getElementById("ENGG100AlternatePlan");
 if (!ENGG100AlternatePlanflag) {
     if (ENGG100AlternatePlanelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG100AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG100AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG100AlternatePlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG100AlternatePlan", "ENGINEERINGPROFESSION"]);
      ENGG100AlternatePlanflag=true
  }
 else {
     ENGG100AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG100AlternatePlan");
      ENGG100AlternatePlanflag=false
  }
};
$scope.ENGG130AlternatePlanListener = function () {
  var ENGG130AlternatePlanelement = document.getElementById("ENGG130AlternatePlan");
 if (!ENGG130AlternatePlanflag) {
     if (ENGG130AlternatePlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     ENGG130AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENGG130AlternatePlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine78());
      that.addLine(getLine83());
      that.addLine(getLine90());
      that.addLine(getLine101());
     ENGG130AlternatePlanelement.classList.remove("BASICSCIENCES");
     ENGG130AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENGG130AlternatePlan", "BASICSCIENCES"]);
      ENGG130AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine78());
      that.removeLine(getLine83());
      that.removeLine(getLine90());
      that.removeLine(getLine101());
     ENGG130AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENGG130AlternatePlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENGG130AlternatePlan");
      ENGG130AlternatePlanflag=false
  }
};
$scope.ENGL199AlternatePlanListener = function () {
  var ENGL199AlternatePlanelement = document.getElementById("ENGL199AlternatePlan");
 if (!ENGL199AlternatePlanflag) {
     if (ENGL199AlternatePlanelement.classList.contains("Other-highlighted")) { 
     ENGL199AlternatePlanelement.classList.remove("Other-highlighted");
     ENGL199AlternatePlanelement.classList.add("Other");
      return;
}      that.addLine(getLine81());
     ENGL199AlternatePlanelement.classList.remove("Other");
     ENGL199AlternatePlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199AlternatePlan", "Other"]);
      ENGL199AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine81());
     ENGL199AlternatePlanelement.classList.remove("Other-highlighted");
     ENGL199AlternatePlanelement.classList.add("Other");
     that.removeFromClicked("ENGL199AlternatePlan");
      ENGL199AlternatePlanflag=false
  }
};
$scope.MATH100AlternatePlanListener = function () {
  var MATH100AlternatePlanelement = document.getElementById("MATH100AlternatePlan");
 if (!MATH100AlternatePlanflag) {
     if (MATH100AlternatePlanelement.classList.contains("MATH-highlighted")) { 
     MATH100AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH100AlternatePlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine78());
      that.addLine(getLine79());
      that.addLine(getLine82());
      that.addLine(getLine85());
      that.addLine(getLine86());
      that.addLine(getLine97());
     MATH100AlternatePlanelement.classList.remove("MATH");
     MATH100AlternatePlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH100AlternatePlan", "MATH"]);
      MATH100AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine78());
      that.removeLine(getLine79());
      that.removeLine(getLine82());
      that.removeLine(getLine85());
      that.removeLine(getLine86());
      that.removeLine(getLine97());
     MATH100AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH100AlternatePlanelement.classList.add("MATH");
     that.removeFromClicked("MATH100AlternatePlan");
      MATH100AlternatePlanflag=false
  }
};
$scope.PHYS130AlternatePlanListener = function () {
  var PHYS130AlternatePlanelement = document.getElementById("PHYS130AlternatePlan");
 if (!PHYS130AlternatePlanflag) {
     if (PHYS130AlternatePlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     PHYS130AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     PHYS130AlternatePlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine79());
     PHYS130AlternatePlanelement.classList.remove("BASICSCIENCES");
     PHYS130AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["PHYS130AlternatePlan", "BASICSCIENCES"]);
      PHYS130AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine79());
     PHYS130AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     PHYS130AlternatePlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("PHYS130AlternatePlan");
      PHYS130AlternatePlanflag=false
  }
};
$scope.CHEM105AlternatePlanListener = function () {
  var CHEM105AlternatePlanelement = document.getElementById("CHEM105AlternatePlan");
 if (!CHEM105AlternatePlanflag) {
     if (CHEM105AlternatePlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM105AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM105AlternatePlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine80());
      that.addLine(getLine100());
     CHEM105AlternatePlanelement.classList.remove("BASICSCIENCES");
     CHEM105AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM105AlternatePlan", "BASICSCIENCES"]);
      CHEM105AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine80());
      that.removeLine(getLine100());
     CHEM105AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM105AlternatePlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM105AlternatePlan");
      CHEM105AlternatePlanflag=false
  }
};
$scope.ENCMP100AlternatePlanListener = function () {
  var ENCMP100AlternatePlanelement = document.getElementById("ENCMP100AlternatePlan");
 if (!ENCMP100AlternatePlanflag) {
     if (ENCMP100AlternatePlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     ENCMP100AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100AlternatePlanelement.classList.add("BASICSCIENCES");
      return;
}     ENCMP100AlternatePlanelement.classList.remove("BASICSCIENCES");
     ENCMP100AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENCMP100AlternatePlan", "BASICSCIENCES"]);
      ENCMP100AlternatePlanflag=true
  }
 else {
     ENCMP100AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100AlternatePlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENCMP100AlternatePlan");
      ENCMP100AlternatePlanflag=false
  }
};
$scope.ENGG160AlternatePlanListener = function () {
  var ENGG160AlternatePlanelement = document.getElementById("ENGG160AlternatePlan");
 if (!ENGG160AlternatePlanflag) {
     if (ENGG160AlternatePlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     ENGG160AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine81());
      that.addLine(getLine94());
     ENGG160AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
     ENGG160AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["ENGG160AlternatePlan", "ENGINEERINGDESIGN"]);
      ENGG160AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine81());
      that.removeLine(getLine94());
     ENGG160AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("ENGG160AlternatePlan");
      ENGG160AlternatePlanflag=false
  }
};
$scope.ENPH131AlternatePlanListener = function () {
  var ENPH131AlternatePlanelement = document.getElementById("ENPH131AlternatePlan");
 if (!ENPH131AlternatePlanflag) {
     if (ENPH131AlternatePlanelement.classList.contains("BASICSCIENCES-highlighted")) { 
     ENPH131AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENPH131AlternatePlanelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine82());
      that.addLine(getLine83());
      that.addLine(getLine84());
      that.addLine(getLine93());
      that.addLine(getLine102());
     ENPH131AlternatePlanelement.classList.remove("BASICSCIENCES");
     ENPH131AlternatePlanelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENPH131AlternatePlan", "BASICSCIENCES"]);
      ENPH131AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine82());
      that.removeLine(getLine83());
      that.removeLine(getLine84());
      that.removeLine(getLine93());
      that.removeLine(getLine102());
     ENPH131AlternatePlanelement.classList.remove("BASICSCIENCES-highlighted");
     ENPH131AlternatePlanelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENPH131AlternatePlan");
      ENPH131AlternatePlanflag=false
  }
};
$scope.MATH101AlternatePlanListener = function () {
  var MATH101AlternatePlanelement = document.getElementById("MATH101AlternatePlan");
 if (!MATH101AlternatePlanflag) {
     if (MATH101AlternatePlanelement.classList.contains("MATH-highlighted")) { 
     MATH101AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH101AlternatePlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine84());
      that.addLine(getLine85());
      that.addLine(getLine88());
      that.addLine(getLine91());
      that.addLine(getLine92());
      that.addLine(getLine98());
      that.addLine(getLine99());
      that.addLine(getLine103());
     MATH101AlternatePlanelement.classList.remove("MATH");
     MATH101AlternatePlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH101AlternatePlan", "MATH"]);
      MATH101AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine84());
      that.removeLine(getLine85());
      that.removeLine(getLine88());
      that.removeLine(getLine91());
      that.removeLine(getLine92());
      that.removeLine(getLine98());
      that.removeLine(getLine99());
      that.removeLine(getLine103());
     MATH101AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH101AlternatePlanelement.classList.add("MATH");
     that.removeFromClicked("MATH101AlternatePlan");
      MATH101AlternatePlanflag=false
  }
};
$scope.MATH102AlternatePlanListener = function () {
  var MATH102AlternatePlanelement = document.getElementById("MATH102AlternatePlan");
 if (!MATH102AlternatePlanflag) {
     if (MATH102AlternatePlanelement.classList.contains("MATH-highlighted")) { 
     MATH102AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH102AlternatePlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine86());
      that.addLine(getLine89());
      that.addLine(getLine127());
     MATH102AlternatePlanelement.classList.remove("MATH");
     MATH102AlternatePlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH102AlternatePlan", "MATH"]);
      MATH102AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine86());
      that.removeLine(getLine89());
      that.removeLine(getLine127());
     MATH102AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH102AlternatePlanelement.classList.add("MATH");
     that.removeFromClicked("MATH102AlternatePlan");
      MATH102AlternatePlanflag=false
  }
};
$scope.ENGM310AlternatePlanListener = function () {
  var ENGM310AlternatePlanelement = document.getElementById("ENGM310AlternatePlan");
 if (!ENGM310AlternatePlanflag) {
     if (ENGM310AlternatePlanelement.classList.contains("Other-highlighted")) { 
     ENGM310AlternatePlanelement.classList.remove("Other-highlighted");
     ENGM310AlternatePlanelement.classList.add("Other");
      return;
}      that.addLine(getLine154());
     ENGM310AlternatePlanelement.classList.remove("Other");
     ENGM310AlternatePlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310AlternatePlan", "Other"]);
      ENGM310AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine154());
     ENGM310AlternatePlanelement.classList.remove("Other-highlighted");
     ENGM310AlternatePlanelement.classList.add("Other");
     that.removeFromClicked("ENGM310AlternatePlan");
      ENGM310AlternatePlanflag=false
  }
};
$scope.ENGM401AlternatePlanListener = function () {
  var ENGM401AlternatePlanelement = document.getElementById("ENGM401AlternatePlan");
 if (!ENGM401AlternatePlanflag) {
     if (ENGM401AlternatePlanelement.classList.contains("Other-highlighted")) { 
     ENGM401AlternatePlanelement.classList.remove("Other-highlighted");
     ENGM401AlternatePlanelement.classList.add("Other");
      return;
}      that.addLine(getLine155());
     ENGM401AlternatePlanelement.classList.remove("Other");
     ENGM401AlternatePlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401AlternatePlan", "Other"]);
      ENGM401AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine155());
     ENGM401AlternatePlanelement.classList.remove("Other-highlighted");
     ENGM401AlternatePlanelement.classList.add("Other");
     that.removeFromClicked("ENGM401AlternatePlan");
      ENGM401AlternatePlanflag=false
  }
};
$scope.ENGG404AlternatePlanListener = function () {
  var ENGG404AlternatePlanelement = document.getElementById("ENGG404AlternatePlan");
 if (!ENGG404AlternatePlanflag) {
     if (ENGG404AlternatePlanelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG404AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG404AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG404AlternatePlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG404AlternatePlan", "ENGINEERINGPROFESSION"]);
      ENGG404AlternatePlanflag=true
  }
 else {
     ENGG404AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG404AlternatePlan");
      ENGG404AlternatePlanflag=false
  }
};
$scope.MATH201AlternatePlanListener = function () {
  var MATH201AlternatePlanelement = document.getElementById("MATH201AlternatePlan");
 if (!MATH201AlternatePlanflag) {
     if (MATH201AlternatePlanelement.classList.contains("MATH-highlighted")) { 
     MATH201AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH201AlternatePlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine87());
      that.addLine(getLine104());
      that.addLine(getLine128());
      that.addLine(getLine136());
     MATH201AlternatePlanelement.classList.remove("MATH");
     MATH201AlternatePlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH201AlternatePlan", "MATH"]);
      MATH201AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine87());
      that.removeLine(getLine104());
      that.removeLine(getLine128());
      that.removeLine(getLine136());
     MATH201AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH201AlternatePlanelement.classList.add("MATH");
     that.removeFromClicked("MATH201AlternatePlan");
      MATH201AlternatePlanflag=false
  }
};
$scope.MATH209AlternatePlanListener = function () {
  var MATH209AlternatePlanelement = document.getElementById("MATH209AlternatePlan");
 if (!MATH209AlternatePlanflag) {
     if (MATH209AlternatePlanelement.classList.contains("MATH-highlighted")) { 
     MATH209AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH209AlternatePlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine87());
      that.addLine(getLine88());
      that.addLine(getLine89());
      that.addLine(getLine105());
      that.addLine(getLine113());
      that.addLine(getLine137());
     MATH209AlternatePlanelement.classList.remove("MATH");
     MATH209AlternatePlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH209AlternatePlan", "MATH"]);
      MATH209AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine87());
      that.removeLine(getLine88());
      that.removeLine(getLine89());
      that.removeLine(getLine105());
      that.removeLine(getLine113());
      that.removeLine(getLine137());
     MATH209AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH209AlternatePlanelement.classList.add("MATH");
     that.removeFromClicked("MATH209AlternatePlan");
      MATH209AlternatePlanflag=false
  }
};
$scope.ComplementaryElectiveAlternatePlan0Listener = function () {
  var ComplementaryElectiveAlternatePlan0element = document.getElementById("ComplementaryElectiveAlternatePlan0");
 if (!ComplementaryElectiveAlternatePlan0flag) {
     if (ComplementaryElectiveAlternatePlan0element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveAlternatePlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveAlternatePlan0element.classList.add("COMP");
      return;
}     ComplementaryElectiveAlternatePlan0element.classList.remove("COMP");
     ComplementaryElectiveAlternatePlan0element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveAlternatePlan0", "COMP"]);
      ComplementaryElectiveAlternatePlan0flag=true
  }
 else {
     ComplementaryElectiveAlternatePlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveAlternatePlan0element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveAlternatePlan0");
      ComplementaryElectiveAlternatePlan0flag=false
  }
};
$scope.ITSElectiveAlternatePlan0Listener = function () {
  var ITSElectiveAlternatePlan0element = document.getElementById("ITSElectiveAlternatePlan0");
 if (!ITSElectiveAlternatePlan0flag) {
     if (ITSElectiveAlternatePlan0element.classList.contains("ITS-highlighted")) { 
     ITSElectiveAlternatePlan0element.classList.remove("ITS-highlighted");
     ITSElectiveAlternatePlan0element.classList.add("ITS");
      return;
}     ITSElectiveAlternatePlan0element.classList.remove("ITS");
     ITSElectiveAlternatePlan0element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveAlternatePlan0", "ITS"]);
      ITSElectiveAlternatePlan0flag=true
  }
 else {
     ITSElectiveAlternatePlan0element.classList.remove("ITS-highlighted");
     ITSElectiveAlternatePlan0element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveAlternatePlan0");
      ITSElectiveAlternatePlan0flag=false
  }
};
$scope.CIVE270AlternatePlanListener = function () {
  var CIVE270AlternatePlanelement = document.getElementById("CIVE270AlternatePlan");
 if (!CIVE270AlternatePlanflag) {
     if (CIVE270AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CIVE270AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine90());
      that.addLine(getLine91());
      that.addLine(getLine96());
      that.addLine(getLine106());
      that.addLine(getLine119());
      that.addLine(getLine124());
     CIVE270AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     CIVE270AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CIVE270AlternatePlan", "ENGINEERINGSCIENCES"]);
      CIVE270AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine90());
      that.removeLine(getLine91());
      that.removeLine(getLine96());
      that.removeLine(getLine106());
      that.removeLine(getLine119());
      that.removeLine(getLine124());
     CIVE270AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CIVE270AlternatePlan");
      CIVE270AlternatePlanflag=false
  }
};
$scope.MECE230AlternatePlanListener = function () {
  var MECE230AlternatePlanelement = document.getElementById("MECE230AlternatePlan");
 if (!MECE230AlternatePlanflag) {
     if (MECE230AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE230AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine92());
      that.addLine(getLine93());
      that.addLine(getLine111());
      that.addLine(getLine115());
     MECE230AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE230AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE230AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE230AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine92());
      that.removeLine(getLine93());
      that.removeLine(getLine111());
      that.removeLine(getLine115());
     MECE230AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE230AlternatePlan");
      MECE230AlternatePlanflag=false
  }
};
$scope.MECE260AlternatePlanListener = function () {
  var MECE260AlternatePlanelement = document.getElementById("MECE260AlternatePlan");
 if (!MECE260AlternatePlanflag) {
     if (MECE260AlternatePlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE260AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine94());
      that.addLine(getLine95());
      that.addLine(getLine96());
      that.addLine(getLine121());
     MECE260AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE260AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE260AlternatePlan", "ENGINEERINGDESIGN"]);
      MECE260AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine94());
      that.removeLine(getLine95());
      that.removeLine(getLine96());
      that.removeLine(getLine121());
     MECE260AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE260AlternatePlan");
      MECE260AlternatePlanflag=false
  }
};
$scope.MECE265AlternatePlanListener = function () {
  var MECE265AlternatePlanelement = document.getElementById("MECE265AlternatePlan");
 if (!MECE265AlternatePlanflag) {
     if (MECE265AlternatePlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE265AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine95());
      that.addLine(getLine122());
     MECE265AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE265AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE265AlternatePlan", "ENGINEERINGDESIGN"]);
      MECE265AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine95());
      that.removeLine(getLine122());
     MECE265AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE265AlternatePlan");
      MECE265AlternatePlanflag=false
  }
};
$scope.STAT235AlternatePlanListener = function () {
  var STAT235AlternatePlanelement = document.getElementById("STAT235AlternatePlan");
 if (!STAT235AlternatePlanflag) {
     if (STAT235AlternatePlanelement.classList.contains("MATH-highlighted")) { 
     STAT235AlternatePlanelement.classList.remove("MATH-highlighted");
     STAT235AlternatePlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine97());
      that.addLine(getLine98());
      that.addLine(getLine108());
     STAT235AlternatePlanelement.classList.remove("MATH");
     STAT235AlternatePlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["STAT235AlternatePlan", "MATH"]);
      STAT235AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine97());
      that.removeLine(getLine98());
      that.removeLine(getLine108());
     STAT235AlternatePlanelement.classList.remove("MATH-highlighted");
     STAT235AlternatePlanelement.classList.add("MATH");
     that.removeFromClicked("STAT235AlternatePlan");
      STAT235AlternatePlanflag=false
  }
};
$scope.CHE243AlternatePlanListener = function () {
  var CHE243AlternatePlanelement = document.getElementById("CHE243AlternatePlan");
 if (!CHE243AlternatePlanflag) {
     if (CHE243AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE243AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine99());
      that.addLine(getLine114());
      that.addLine(getLine116());
      that.addLine(getLine120());
     CHE243AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     CHE243AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE243AlternatePlan", "ENGINEERINGSCIENCES"]);
      CHE243AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine99());
      that.removeLine(getLine114());
      that.removeLine(getLine116());
      that.removeLine(getLine120());
     CHE243AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE243AlternatePlan");
      CHE243AlternatePlanflag=false
  }
};
$scope.ECE209AlternatePlanListener = function () {
  var ECE209AlternatePlanelement = document.getElementById("ECE209AlternatePlan");
 if (!ECE209AlternatePlanflag) {
     if (ECE209AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     ECE209AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine107());
     ECE209AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     ECE209AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["ECE209AlternatePlan", "ENGINEERINGSCIENCES"]);
      ECE209AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine107());
     ECE209AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("ECE209AlternatePlan");
      ECE209AlternatePlanflag=false
  }
};
$scope.MATE202AlternatePlanListener = function () {
  var MATE202AlternatePlanelement = document.getElementById("MATE202AlternatePlan");
 if (!MATE202AlternatePlanflag) {
     if (MATE202AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MATE202AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine100());
      that.addLine(getLine123());
     MATE202AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MATE202AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MATE202AlternatePlan", "ENGINEERINGSCIENCES"]);
      MATE202AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine100());
      that.removeLine(getLine123());
     MATE202AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MATE202AlternatePlan");
      MATE202AlternatePlanflag=false
  }
};
$scope.MECE200AlternatePlanListener = function () {
  var MECE200AlternatePlanelement = document.getElementById("MECE200AlternatePlan");
 if (!MECE200AlternatePlanflag) {
     if (MECE200AlternatePlanelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     MECE200AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine147());
     MECE200AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION");
     MECE200AlternatePlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["MECE200AlternatePlan", "ENGINEERINGPROFESSION"]);
      MECE200AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine147());
     MECE200AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("MECE200AlternatePlan");
      MECE200AlternatePlanflag=false
  }
};
$scope.MECE250AlternatePlanListener = function () {
  var MECE250AlternatePlanelement = document.getElementById("MECE250AlternatePlan");
 if (!MECE250AlternatePlanflag) {
     if (MECE250AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE250AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine101());
      that.addLine(getLine102());
      that.addLine(getLine103());
      that.addLine(getLine112());
      that.addLine(getLine126());
      that.addLine(getLine145());
     MECE250AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE250AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE250AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE250AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine101());
      that.removeLine(getLine102());
      that.removeLine(getLine103());
      that.removeLine(getLine112());
      that.removeLine(getLine126());
      that.removeLine(getLine145());
     MECE250AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE250AlternatePlan");
      MECE250AlternatePlanflag=false
  }
};
$scope.MATH300AlternatePlanListener = function () {
  var MATH300AlternatePlanelement = document.getElementById("MATH300AlternatePlan");
 if (!MATH300AlternatePlanflag) {
     if (MATH300AlternatePlanelement.classList.contains("MATH-highlighted")) { 
     MATH300AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH300AlternatePlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine104());
      that.addLine(getLine105());
      that.addLine(getLine117());
      that.addLine(getLine132());
      that.addLine(getLine146());
     MATH300AlternatePlanelement.classList.remove("MATH");
     MATH300AlternatePlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH300AlternatePlan", "MATH"]);
      MATH300AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine104());
      that.removeLine(getLine105());
      that.removeLine(getLine117());
      that.removeLine(getLine132());
      that.removeLine(getLine146());
     MATH300AlternatePlanelement.classList.remove("MATH-highlighted");
     MATH300AlternatePlanelement.classList.add("MATH");
     that.removeFromClicked("MATH300AlternatePlan");
      MATH300AlternatePlanflag=false
  }
};
$scope.MECE300AlternatePlanListener = function () {
  var MECE300AlternatePlanelement = document.getElementById("MECE300AlternatePlan");
 if (!MECE300AlternatePlanflag) {
     if (MECE300AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE300AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine106());
      that.addLine(getLine107());
      that.addLine(getLine108());
      that.addLine(getLine109());
      that.addLine(getLine110());
      that.addLine(getLine141());
     MECE300AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE300AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE300AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE300AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine106());
      that.removeLine(getLine107());
      that.removeLine(getLine108());
      that.removeLine(getLine109());
      that.removeLine(getLine110());
      that.removeLine(getLine141());
     MECE300AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE300AlternatePlan");
      MECE300AlternatePlanflag=false
  }
};
$scope.MECE301AlternatePlanListener = function () {
  var MECE301AlternatePlanelement = document.getElementById("MECE301AlternatePlan");
 if (!MECE301AlternatePlanflag) {
     if (MECE301AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE301AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine110());
      that.addLine(getLine142());
     MECE301AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE301AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE301AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE301AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine110());
      that.removeLine(getLine142());
     MECE301AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE301AlternatePlan");
      MECE301AlternatePlanflag=false
  }
};
$scope.MECE331AlternatePlanListener = function () {
  var MECE331AlternatePlanelement = document.getElementById("MECE331AlternatePlan");
 if (!MECE331AlternatePlanflag) {
     if (MECE331AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE331AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine109());
      that.addLine(getLine111());
      that.addLine(getLine112());
      that.addLine(getLine113());
      that.addLine(getLine114());
      that.addLine(getLine118());
      that.addLine(getLine129());
      that.addLine(getLine133());
      that.addLine(getLine138());
      that.addLine(getLine148());
     MECE331AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE331AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE331AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE331AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine109());
      that.removeLine(getLine111());
      that.removeLine(getLine112());
      that.removeLine(getLine113());
      that.removeLine(getLine114());
      that.removeLine(getLine118());
      that.removeLine(getLine129());
      that.removeLine(getLine133());
      that.removeLine(getLine138());
      that.removeLine(getLine148());
     MECE331AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE331AlternatePlan");
      MECE331AlternatePlanflag=false
  }
};
$scope.MECE371AlternatePlanListener = function () {
  var MECE371AlternatePlanelement = document.getElementById("MECE371AlternatePlan");
 if (!MECE371AlternatePlanflag) {
     if (MECE371AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE371AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine115());
      that.addLine(getLine116());
      that.addLine(getLine117());
      that.addLine(getLine118());
      that.addLine(getLine135());
      that.addLine(getLine139());
      that.addLine(getLine152());
     MECE371AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE371AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE371AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE371AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine115());
      that.removeLine(getLine116());
      that.removeLine(getLine117());
      that.removeLine(getLine118());
      that.removeLine(getLine135());
      that.removeLine(getLine139());
      that.removeLine(getLine152());
     MECE371AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE371AlternatePlan");
      MECE371AlternatePlanflag=false
  }
};
$scope.MECE380AlternatePlanListener = function () {
  var MECE380AlternatePlanelement = document.getElementById("MECE380AlternatePlan");
 if (!MECE380AlternatePlanflag) {
     if (MECE380AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE380AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine119());
      that.addLine(getLine131());
      that.addLine(getLine153());
     MECE380AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE380AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE380AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE380AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine119());
      that.removeLine(getLine131());
      that.removeLine(getLine153());
     MECE380AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE380AlternatePlan");
      MECE380AlternatePlanflag=false
  }
};
$scope.MECE340AlternatePlanListener = function () {
  var MECE340AlternatePlanelement = document.getElementById("MECE340AlternatePlan");
 if (!MECE340AlternatePlanflag) {
     if (MECE340AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE340AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine120());
      that.addLine(getLine134());
      that.addLine(getLine143());
      that.addLine(getLine149());
     MECE340AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE340AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE340AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE340AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine120());
      that.removeLine(getLine134());
      that.removeLine(getLine143());
      that.removeLine(getLine149());
     MECE340AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE340AlternatePlan");
      MECE340AlternatePlanflag=false
  }
};
$scope.MECE360AlternatePlanListener = function () {
  var MECE360AlternatePlanelement = document.getElementById("MECE360AlternatePlan");
 if (!MECE360AlternatePlanflag) {
     if (MECE360AlternatePlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE360AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine121());
      that.addLine(getLine122());
      that.addLine(getLine123());
      that.addLine(getLine124());
      that.addLine(getLine125());
      that.addLine(getLine130());
      that.addLine(getLine144());
      that.addLine(getLine150());
     MECE360AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE360AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE360AlternatePlan", "ENGINEERINGDESIGN"]);
      MECE360AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine122());
      that.removeLine(getLine123());
      that.removeLine(getLine124());
      that.removeLine(getLine125());
      that.removeLine(getLine130());
      that.removeLine(getLine144());
      that.removeLine(getLine150());
     MECE360AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE360AlternatePlan");
      MECE360AlternatePlanflag=false
  }
};
$scope.MECE362AlternatePlanListener = function () {
  var MECE362AlternatePlanelement = document.getElementById("MECE362AlternatePlan");
 if (!MECE362AlternatePlanflag) {
     if (MECE362AlternatePlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE362AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine125());
      that.addLine(getLine126());
      that.addLine(getLine151());
     MECE362AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE362AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE362AlternatePlan", "ENGINEERINGDESIGN"]);
      MECE362AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine125());
      that.removeLine(getLine126());
      that.removeLine(getLine151());
     MECE362AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE362AlternatePlan");
      MECE362AlternatePlanflag=false
  }
};
$scope.MECE390AlternatePlanListener = function () {
  var MECE390AlternatePlanelement = document.getElementById("MECE390AlternatePlan");
 if (!MECE390AlternatePlanflag) {
     if (MECE390AlternatePlanelement.classList.contains("MATH-highlighted")) { 
     MECE390AlternatePlanelement.classList.remove("MATH-highlighted");
     MECE390AlternatePlanelement.classList.add("MATH");
      return;
}      that.addLine(getLine127());
      that.addLine(getLine128());
      that.addLine(getLine140());
     MECE390AlternatePlanelement.classList.remove("MATH");
     MECE390AlternatePlanelement.classList.add("MATH-highlighted");
     that.addToClicked(["MECE390AlternatePlan", "MATH"]);
      MECE390AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine128());
      that.removeLine(getLine140());
     MECE390AlternatePlanelement.classList.remove("MATH-highlighted");
     MECE390AlternatePlanelement.classList.add("MATH");
     that.removeFromClicked("MECE390AlternatePlan");
      MECE390AlternatePlanflag=false
  }
};
$scope.ProgramTechnicalElectiveAlternatePlan0Listener = function () {
  var ProgramTechnicalElectiveAlternatePlan0element = document.getElementById("ProgramTechnicalElectiveAlternatePlan0");
 if (!ProgramTechnicalElectiveAlternatePlan0flag) {
     if (ProgramTechnicalElectiveAlternatePlan0element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveAlternatePlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveAlternatePlan0element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveAlternatePlan0element.classList.remove("PROG");
     ProgramTechnicalElectiveAlternatePlan0element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveAlternatePlan0", "PROG"]);
      ProgramTechnicalElectiveAlternatePlan0flag=true
  }
 else {
     ProgramTechnicalElectiveAlternatePlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveAlternatePlan0element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveAlternatePlan0");
      ProgramTechnicalElectiveAlternatePlan0flag=false
  }
};
$scope.MECE430AlternatePlanListener = function () {
  var MECE430AlternatePlanelement = document.getElementById("MECE430AlternatePlan");
 if (!MECE430AlternatePlanflag) {
     if (MECE430AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE430AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine129());
     MECE430AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE430AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE430AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE430AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine129());
     MECE430AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE430AlternatePlan");
      MECE430AlternatePlanflag=false
  }
};
$scope.MECE480AlternatePlanListener = function () {
  var MECE480AlternatePlanelement = document.getElementById("MECE480AlternatePlan");
 if (!MECE480AlternatePlanflag) {
     if (MECE480AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE480AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine130());
      that.addLine(getLine131());
      that.addLine(getLine132());
     MECE480AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE480AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE480AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE480AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine130());
      that.removeLine(getLine131());
      that.removeLine(getLine132());
     MECE480AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE480AlternatePlan");
      MECE480AlternatePlanflag=false
  }
};
$scope.MECE463AlternatePlanListener = function () {
  var MECE463AlternatePlanelement = document.getElementById("MECE463AlternatePlan");
 if (!MECE463AlternatePlanflag) {
     if (MECE463AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE463AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine133());
      that.addLine(getLine134());
      that.addLine(getLine135());
     MECE463AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE463AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE463AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE463AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine133());
      that.removeLine(getLine134());
      that.removeLine(getLine135());
     MECE463AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE463AlternatePlan");
      MECE463AlternatePlanflag=false
  }
};
$scope.ProgramTechnicalElectiveAlternatePlan1Listener = function () {
  var ProgramTechnicalElectiveAlternatePlan1element = document.getElementById("ProgramTechnicalElectiveAlternatePlan1");
 if (!ProgramTechnicalElectiveAlternatePlan1flag) {
     if (ProgramTechnicalElectiveAlternatePlan1element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveAlternatePlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveAlternatePlan1element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveAlternatePlan1element.classList.remove("PROG");
     ProgramTechnicalElectiveAlternatePlan1element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveAlternatePlan1", "PROG"]);
      ProgramTechnicalElectiveAlternatePlan1flag=true
  }
 else {
     ProgramTechnicalElectiveAlternatePlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveAlternatePlan1element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveAlternatePlan1");
      ProgramTechnicalElectiveAlternatePlan1flag=false
  }
};
$scope.ProgramTechnicalElectiveAlternatePlan2Listener = function () {
  var ProgramTechnicalElectiveAlternatePlan2element = document.getElementById("ProgramTechnicalElectiveAlternatePlan2");
 if (!ProgramTechnicalElectiveAlternatePlan2flag) {
     if (ProgramTechnicalElectiveAlternatePlan2element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveAlternatePlan2element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveAlternatePlan2element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveAlternatePlan2element.classList.remove("PROG");
     ProgramTechnicalElectiveAlternatePlan2element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveAlternatePlan2", "PROG"]);
      ProgramTechnicalElectiveAlternatePlan2flag=true
  }
 else {
     ProgramTechnicalElectiveAlternatePlan2element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveAlternatePlan2element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveAlternatePlan2");
      ProgramTechnicalElectiveAlternatePlan2flag=false
  }
};
$scope.ProgramTechnicalElectiveAlternatePlan3Listener = function () {
  var ProgramTechnicalElectiveAlternatePlan3element = document.getElementById("ProgramTechnicalElectiveAlternatePlan3");
 if (!ProgramTechnicalElectiveAlternatePlan3flag) {
     if (ProgramTechnicalElectiveAlternatePlan3element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveAlternatePlan3element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveAlternatePlan3element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveAlternatePlan3element.classList.remove("PROG");
     ProgramTechnicalElectiveAlternatePlan3element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveAlternatePlan3", "PROG"]);
      ProgramTechnicalElectiveAlternatePlan3flag=true
  }
 else {
     ProgramTechnicalElectiveAlternatePlan3element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveAlternatePlan3element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveAlternatePlan3");
      ProgramTechnicalElectiveAlternatePlan3flag=false
  }
};
$scope.CHE448AlternatePlanListener = function () {
  var CHE448AlternatePlanelement = document.getElementById("CHE448AlternatePlan");
 if (!CHE448AlternatePlanflag) {
     if (CHE448AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE448AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine136());
      that.addLine(getLine137());
      that.addLine(getLine138());
      that.addLine(getLine139());
     CHE448AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     CHE448AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE448AlternatePlan", "ENGINEERINGSCIENCES"]);
      CHE448AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine136());
      that.removeLine(getLine137());
      that.removeLine(getLine138());
      that.removeLine(getLine139());
     CHE448AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE448AlternatePlan");
      CHE448AlternatePlanflag=false
  }
};
$scope.MECE420AlternatePlanListener = function () {
  var MECE420AlternatePlanelement = document.getElementById("MECE420AlternatePlan");
 if (!MECE420AlternatePlanflag) {
     if (MECE420AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE420AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine140());
     MECE420AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE420AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE420AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE420AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine140());
     MECE420AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE420AlternatePlan");
      MECE420AlternatePlanflag=false
  }
};
$scope.ENGG400AlternatePlanListener = function () {
  var ENGG400AlternatePlanelement = document.getElementById("ENGG400AlternatePlan");
 if (!ENGG400AlternatePlanflag) {
     if (ENGG400AlternatePlanelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG400AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG400AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG400AlternatePlanelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG400AlternatePlan", "ENGINEERINGPROFESSION"]);
      ENGG400AlternatePlanflag=true
  }
 else {
     ENGG400AlternatePlanelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400AlternatePlanelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG400AlternatePlan");
      ENGG400AlternatePlanflag=false
  }
};
$scope.MECE403AlternatePlanListener = function () {
  var MECE403AlternatePlanelement = document.getElementById("MECE403AlternatePlan");
 if (!MECE403AlternatePlanflag) {
     if (MECE403AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE403AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine141());
      that.addLine(getLine142());
      that.addLine(getLine143());
      that.addLine(getLine144());
     MECE403AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE403AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE403AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE403AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine141());
      that.removeLine(getLine142());
      that.removeLine(getLine143());
      that.removeLine(getLine144());
     MECE403AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE403AlternatePlan");
      MECE403AlternatePlanflag=false
  }
};
$scope.MECE451AlternatePlanListener = function () {
  var MECE451AlternatePlanelement = document.getElementById("MECE451AlternatePlan");
 if (!MECE451AlternatePlanflag) {
     if (MECE451AlternatePlanelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE451AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine145());
      that.addLine(getLine146());
     MECE451AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES");
     MECE451AlternatePlanelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE451AlternatePlan", "ENGINEERINGSCIENCES"]);
      MECE451AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine145());
      that.removeLine(getLine146());
     MECE451AlternatePlanelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451AlternatePlanelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE451AlternatePlan");
      MECE451AlternatePlanflag=false
  }
};
$scope.MECE460AlternatePlanListener = function () {
  var MECE460AlternatePlanelement = document.getElementById("MECE460AlternatePlan");
 if (!MECE460AlternatePlanflag) {
     if (MECE460AlternatePlanelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE460AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine147());
      that.addLine(getLine148());
      that.addLine(getLine149());
      that.addLine(getLine150());
      that.addLine(getLine151());
      that.addLine(getLine152());
      that.addLine(getLine153());
      that.addLine(getLine154());
      that.addLine(getLine155());
     MECE460AlternatePlanelement.classList.remove("ENGINEERINGDESIGN");
     MECE460AlternatePlanelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE460AlternatePlan", "ENGINEERINGDESIGN"]);
      MECE460AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine147());
      that.removeLine(getLine148());
      that.removeLine(getLine149());
      that.removeLine(getLine150());
      that.removeLine(getLine151());
      that.removeLine(getLine152());
      that.removeLine(getLine153());
      that.removeLine(getLine154());
      that.removeLine(getLine155());
     MECE460AlternatePlanelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460AlternatePlanelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE460AlternatePlan");
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
  var ENGM401CoopPlan1flag = false;
  var MECE340CoopPlan1flag = false;
  var MECE360CoopPlan1flag = false;
  var MECE362CoopPlan1flag = false;
  var MECE390CoopPlan1flag = false;
  var ComplementaryElectiveCoopPlan10flag = false;
  var ENGG404CoopPlan1flag = false;
  var MECE430CoopPlan1flag = false;
  var MECE480CoopPlan1flag = false;
  var MECE463CoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan10flag = false;
  var ProgramTechnicalElectiveCoopPlan11flag = false;
  var ProgramTechnicalElectiveCoopPlan12flag = false;
  var WKEXP905CoopPlan1flag = false;
  var CHE448CoopPlan1flag = false;
  var MECE420CoopPlan1flag = false;
  var ENGG400CoopPlan1flag = false;
  var MECE403CoopPlan1flag = false;
  var MECE451CoopPlan1flag = false;
  var MECE460CoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan13flag = false;
  var ITSElectiveCoopPlan10flag = false;
$scope.CHEM103CoopPlan1Listener = function () {
  var CHEM103CoopPlan1element = document.getElementById("CHEM103CoopPlan1");
 if (!CHEM103CoopPlan1flag) {
     if (CHEM103CoopPlan1element.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM103CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     CHEM103CoopPlan1element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine158());
     CHEM103CoopPlan1element.classList.remove("BASICSCIENCES");
     CHEM103CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM103CoopPlan1", "BASICSCIENCES"]);
      CHEM103CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine158());
     CHEM103CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     CHEM103CoopPlan1element.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM103CoopPlan1");
      CHEM103CoopPlan1flag=false
  }
};
$scope.ENGG100CoopPlan1Listener = function () {
  var ENGG100CoopPlan1element = document.getElementById("ENGG100CoopPlan1");
 if (!ENGG100CoopPlan1flag) {
     if (ENGG100CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG100CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG100CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     ENGG100CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG100CoopPlan1", "ENGINEERINGPROFESSION"]);
      ENGG100CoopPlan1flag=true
  }
 else {
     ENGG100CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG100CoopPlan1");
      ENGG100CoopPlan1flag=false
  }
};
$scope.ENGG130CoopPlan1Listener = function () {
  var ENGG130CoopPlan1element = document.getElementById("ENGG130CoopPlan1");
 if (!ENGG130CoopPlan1flag) {
     if (ENGG130CoopPlan1element.classList.contains("BASICSCIENCES-highlighted")) { 
     ENGG130CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     ENGG130CoopPlan1element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine156());
      that.addLine(getLine161());
      that.addLine(getLine165());
      that.addLine(getLine179());
     ENGG130CoopPlan1element.classList.remove("BASICSCIENCES");
     ENGG130CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENGG130CoopPlan1", "BASICSCIENCES"]);
      ENGG130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine156());
      that.removeLine(getLine161());
      that.removeLine(getLine165());
      that.removeLine(getLine179());
     ENGG130CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     ENGG130CoopPlan1element.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENGG130CoopPlan1");
      ENGG130CoopPlan1flag=false
  }
};
$scope.ENGL199CoopPlan1Listener = function () {
  var ENGL199CoopPlan1element = document.getElementById("ENGL199CoopPlan1");
 if (!ENGL199CoopPlan1flag) {
     if (ENGL199CoopPlan1element.classList.contains("Other-highlighted")) { 
     ENGL199CoopPlan1element.classList.remove("Other-highlighted");
     ENGL199CoopPlan1element.classList.add("Other");
      return;
}      that.addLine(getLine159());
     ENGL199CoopPlan1element.classList.remove("Other");
     ENGL199CoopPlan1element.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199CoopPlan1", "Other"]);
      ENGL199CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine159());
     ENGL199CoopPlan1element.classList.remove("Other-highlighted");
     ENGL199CoopPlan1element.classList.add("Other");
     that.removeFromClicked("ENGL199CoopPlan1");
      ENGL199CoopPlan1flag=false
  }
};
$scope.MATH100CoopPlan1Listener = function () {
  var MATH100CoopPlan1element = document.getElementById("MATH100CoopPlan1");
 if (!MATH100CoopPlan1flag) {
     if (MATH100CoopPlan1element.classList.contains("MATH-highlighted")) { 
     MATH100CoopPlan1element.classList.remove("MATH-highlighted");
     MATH100CoopPlan1element.classList.add("MATH");
      return;
}      that.addLine(getLine156());
      that.addLine(getLine157());
      that.addLine(getLine160());
      that.addLine(getLine163());
      that.addLine(getLine164());
      that.addLine(getLine174());
     MATH100CoopPlan1element.classList.remove("MATH");
     MATH100CoopPlan1element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH100CoopPlan1", "MATH"]);
      MATH100CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine156());
      that.removeLine(getLine157());
      that.removeLine(getLine160());
      that.removeLine(getLine163());
      that.removeLine(getLine164());
      that.removeLine(getLine174());
     MATH100CoopPlan1element.classList.remove("MATH-highlighted");
     MATH100CoopPlan1element.classList.add("MATH");
     that.removeFromClicked("MATH100CoopPlan1");
      MATH100CoopPlan1flag=false
  }
};
$scope.PHYS130CoopPlan1Listener = function () {
  var PHYS130CoopPlan1element = document.getElementById("PHYS130CoopPlan1");
 if (!PHYS130CoopPlan1flag) {
     if (PHYS130CoopPlan1element.classList.contains("BASICSCIENCES-highlighted")) { 
     PHYS130CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     PHYS130CoopPlan1element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine157());
     PHYS130CoopPlan1element.classList.remove("BASICSCIENCES");
     PHYS130CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["PHYS130CoopPlan1", "BASICSCIENCES"]);
      PHYS130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine157());
     PHYS130CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     PHYS130CoopPlan1element.classList.add("BASICSCIENCES");
     that.removeFromClicked("PHYS130CoopPlan1");
      PHYS130CoopPlan1flag=false
  }
};
$scope.CHEM105CoopPlan1Listener = function () {
  var CHEM105CoopPlan1element = document.getElementById("CHEM105CoopPlan1");
 if (!CHEM105CoopPlan1flag) {
     if (CHEM105CoopPlan1element.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM105CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     CHEM105CoopPlan1element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine158());
      that.addLine(getLine177());
     CHEM105CoopPlan1element.classList.remove("BASICSCIENCES");
     CHEM105CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM105CoopPlan1", "BASICSCIENCES"]);
      CHEM105CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine158());
      that.removeLine(getLine177());
     CHEM105CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     CHEM105CoopPlan1element.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM105CoopPlan1");
      CHEM105CoopPlan1flag=false
  }
};
$scope.ENCMP100CoopPlan1Listener = function () {
  var ENCMP100CoopPlan1element = document.getElementById("ENCMP100CoopPlan1");
 if (!ENCMP100CoopPlan1flag) {
     if (ENCMP100CoopPlan1element.classList.contains("BASICSCIENCES-highlighted")) { 
     ENCMP100CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100CoopPlan1element.classList.add("BASICSCIENCES");
      return;
}     ENCMP100CoopPlan1element.classList.remove("BASICSCIENCES");
     ENCMP100CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENCMP100CoopPlan1", "BASICSCIENCES"]);
      ENCMP100CoopPlan1flag=true
  }
 else {
     ENCMP100CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100CoopPlan1element.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENCMP100CoopPlan1");
      ENCMP100CoopPlan1flag=false
  }
};
$scope.ENGG160CoopPlan1Listener = function () {
  var ENGG160CoopPlan1element = document.getElementById("ENGG160CoopPlan1");
 if (!ENGG160CoopPlan1flag) {
     if (ENGG160CoopPlan1element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     ENGG160CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160CoopPlan1element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine159());
      that.addLine(getLine171());
     ENGG160CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
     ENGG160CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["ENGG160CoopPlan1", "ENGINEERINGDESIGN"]);
      ENGG160CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine159());
      that.removeLine(getLine171());
     ENGG160CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160CoopPlan1element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("ENGG160CoopPlan1");
      ENGG160CoopPlan1flag=false
  }
};
$scope.ENPH131CoopPlan1Listener = function () {
  var ENPH131CoopPlan1element = document.getElementById("ENPH131CoopPlan1");
 if (!ENPH131CoopPlan1flag) {
     if (ENPH131CoopPlan1element.classList.contains("BASICSCIENCES-highlighted")) { 
     ENPH131CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     ENPH131CoopPlan1element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine160());
      that.addLine(getLine161());
      that.addLine(getLine162());
      that.addLine(getLine170());
      that.addLine(getLine180());
     ENPH131CoopPlan1element.classList.remove("BASICSCIENCES");
     ENPH131CoopPlan1element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENPH131CoopPlan1", "BASICSCIENCES"]);
      ENPH131CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine160());
      that.removeLine(getLine161());
      that.removeLine(getLine162());
      that.removeLine(getLine170());
      that.removeLine(getLine180());
     ENPH131CoopPlan1element.classList.remove("BASICSCIENCES-highlighted");
     ENPH131CoopPlan1element.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENPH131CoopPlan1");
      ENPH131CoopPlan1flag=false
  }
};
$scope.MATH101CoopPlan1Listener = function () {
  var MATH101CoopPlan1element = document.getElementById("MATH101CoopPlan1");
 if (!MATH101CoopPlan1flag) {
     if (MATH101CoopPlan1element.classList.contains("MATH-highlighted")) { 
     MATH101CoopPlan1element.classList.remove("MATH-highlighted");
     MATH101CoopPlan1element.classList.add("MATH");
      return;
}      that.addLine(getLine162());
      that.addLine(getLine163());
      that.addLine(getLine166());
      that.addLine(getLine167());
      that.addLine(getLine169());
      that.addLine(getLine175());
      that.addLine(getLine176());
      that.addLine(getLine181());
     MATH101CoopPlan1element.classList.remove("MATH");
     MATH101CoopPlan1element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH101CoopPlan1", "MATH"]);
      MATH101CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine162());
      that.removeLine(getLine163());
      that.removeLine(getLine166());
      that.removeLine(getLine167());
      that.removeLine(getLine169());
      that.removeLine(getLine175());
      that.removeLine(getLine176());
      that.removeLine(getLine181());
     MATH101CoopPlan1element.classList.remove("MATH-highlighted");
     MATH101CoopPlan1element.classList.add("MATH");
     that.removeFromClicked("MATH101CoopPlan1");
      MATH101CoopPlan1flag=false
  }
};
$scope.MATH102CoopPlan1Listener = function () {
  var MATH102CoopPlan1element = document.getElementById("MATH102CoopPlan1");
 if (!MATH102CoopPlan1flag) {
     if (MATH102CoopPlan1element.classList.contains("MATH-highlighted")) { 
     MATH102CoopPlan1element.classList.remove("MATH-highlighted");
     MATH102CoopPlan1element.classList.add("MATH");
      return;
}      that.addLine(getLine164());
      that.addLine(getLine168());
      that.addLine(getLine209());
     MATH102CoopPlan1element.classList.remove("MATH");
     MATH102CoopPlan1element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH102CoopPlan1", "MATH"]);
      MATH102CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine164());
      that.removeLine(getLine168());
      that.removeLine(getLine209());
     MATH102CoopPlan1element.classList.remove("MATH-highlighted");
     MATH102CoopPlan1element.classList.add("MATH");
     that.removeFromClicked("MATH102CoopPlan1");
      MATH102CoopPlan1flag=false
  }
};
$scope.CIVE270CoopPlan1Listener = function () {
  var CIVE270CoopPlan1element = document.getElementById("CIVE270CoopPlan1");
 if (!CIVE270CoopPlan1flag) {
     if (CIVE270CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CIVE270CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine165());
      that.addLine(getLine166());
      that.addLine(getLine173());
      that.addLine(getLine186());
      that.addLine(getLine199());
      that.addLine(getLine206());
     CIVE270CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     CIVE270CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CIVE270CoopPlan1", "ENGINEERINGSCIENCES"]);
      CIVE270CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine165());
      that.removeLine(getLine166());
      that.removeLine(getLine173());
      that.removeLine(getLine186());
      that.removeLine(getLine199());
      that.removeLine(getLine206());
     CIVE270CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CIVE270CoopPlan1");
      CIVE270CoopPlan1flag=false
  }
};
$scope.ENGG299CoopPlan1Listener = function () {
  var ENGG299CoopPlan1element = document.getElementById("ENGG299CoopPlan1");
 if (!ENGG299CoopPlan1flag) {
     if (ENGG299CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG299CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG299CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine182());
     ENGG299CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     ENGG299CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG299CoopPlan1", "ENGINEERINGPROFESSION"]);
      ENGG299CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine182());
     ENGG299CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG299CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG299CoopPlan1");
      ENGG299CoopPlan1flag=false
  }
};
$scope.MATH209CoopPlan1Listener = function () {
  var MATH209CoopPlan1element = document.getElementById("MATH209CoopPlan1");
 if (!MATH209CoopPlan1flag) {
     if (MATH209CoopPlan1element.classList.contains("MATH-highlighted")) { 
     MATH209CoopPlan1element.classList.remove("MATH-highlighted");
     MATH209CoopPlan1element.classList.add("MATH");
      return;
}      that.addLine(getLine167());
      that.addLine(getLine168());
      that.addLine(getLine178());
      that.addLine(getLine185());
      that.addLine(getLine193());
      that.addLine(getLine220());
     MATH209CoopPlan1element.classList.remove("MATH");
     MATH209CoopPlan1element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH209CoopPlan1", "MATH"]);
      MATH209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine167());
      that.removeLine(getLine168());
      that.removeLine(getLine178());
      that.removeLine(getLine185());
      that.removeLine(getLine193());
      that.removeLine(getLine220());
     MATH209CoopPlan1element.classList.remove("MATH-highlighted");
     MATH209CoopPlan1element.classList.add("MATH");
     that.removeFromClicked("MATH209CoopPlan1");
      MATH209CoopPlan1flag=false
  }
};
$scope.MECE230CoopPlan1Listener = function () {
  var MECE230CoopPlan1element = document.getElementById("MECE230CoopPlan1");
 if (!MECE230CoopPlan1flag) {
     if (MECE230CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE230CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine169());
      that.addLine(getLine170());
      that.addLine(getLine191());
      that.addLine(getLine195());
     MECE230CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE230CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE230CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE230CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine169());
      that.removeLine(getLine170());
      that.removeLine(getLine191());
      that.removeLine(getLine195());
     MECE230CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE230CoopPlan1");
      MECE230CoopPlan1flag=false
  }
};
$scope.MECE260CoopPlan1Listener = function () {
  var MECE260CoopPlan1element = document.getElementById("MECE260CoopPlan1");
 if (!MECE260CoopPlan1flag) {
     if (MECE260CoopPlan1element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE260CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260CoopPlan1element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine171());
      that.addLine(getLine172());
      that.addLine(getLine173());
      that.addLine(getLine203());
     MECE260CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
     MECE260CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE260CoopPlan1", "ENGINEERINGDESIGN"]);
      MECE260CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine171());
      that.removeLine(getLine172());
      that.removeLine(getLine173());
      that.removeLine(getLine203());
     MECE260CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260CoopPlan1element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE260CoopPlan1");
      MECE260CoopPlan1flag=false
  }
};
$scope.MECE265CoopPlan1Listener = function () {
  var MECE265CoopPlan1element = document.getElementById("MECE265CoopPlan1");
 if (!MECE265CoopPlan1flag) {
     if (MECE265CoopPlan1element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE265CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265CoopPlan1element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine172());
      that.addLine(getLine204());
     MECE265CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
     MECE265CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE265CoopPlan1", "ENGINEERINGDESIGN"]);
      MECE265CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine172());
      that.removeLine(getLine204());
     MECE265CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265CoopPlan1element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE265CoopPlan1");
      MECE265CoopPlan1flag=false
  }
};
$scope.STAT235CoopPlan1Listener = function () {
  var STAT235CoopPlan1element = document.getElementById("STAT235CoopPlan1");
 if (!STAT235CoopPlan1flag) {
     if (STAT235CoopPlan1element.classList.contains("MATH-highlighted")) { 
     STAT235CoopPlan1element.classList.remove("MATH-highlighted");
     STAT235CoopPlan1element.classList.add("MATH");
      return;
}      that.addLine(getLine174());
      that.addLine(getLine175());
      that.addLine(getLine188());
     STAT235CoopPlan1element.classList.remove("MATH");
     STAT235CoopPlan1element.classList.add("MATH-highlighted");
     that.addToClicked(["STAT235CoopPlan1", "MATH"]);
      STAT235CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine174());
      that.removeLine(getLine175());
      that.removeLine(getLine188());
     STAT235CoopPlan1element.classList.remove("MATH-highlighted");
     STAT235CoopPlan1element.classList.add("MATH");
     that.removeFromClicked("STAT235CoopPlan1");
      STAT235CoopPlan1flag=false
  }
};
$scope.CHE243CoopPlan1Listener = function () {
  var CHE243CoopPlan1element = document.getElementById("CHE243CoopPlan1");
 if (!CHE243CoopPlan1flag) {
     if (CHE243CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE243CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine176());
      that.addLine(getLine194());
      that.addLine(getLine196());
      that.addLine(getLine202());
     CHE243CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     CHE243CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE243CoopPlan1", "ENGINEERINGSCIENCES"]);
      CHE243CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine176());
      that.removeLine(getLine194());
      that.removeLine(getLine196());
      that.removeLine(getLine202());
     CHE243CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE243CoopPlan1");
      CHE243CoopPlan1flag=false
  }
};
$scope.ECE209CoopPlan1Listener = function () {
  var ECE209CoopPlan1element = document.getElementById("ECE209CoopPlan1");
 if (!ECE209CoopPlan1flag) {
     if (ECE209CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     ECE209CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine187());
     ECE209CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     ECE209CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["ECE209CoopPlan1", "ENGINEERINGSCIENCES"]);
      ECE209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine187());
     ECE209CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("ECE209CoopPlan1");
      ECE209CoopPlan1flag=false
  }
};
$scope.MATE202CoopPlan1Listener = function () {
  var MATE202CoopPlan1element = document.getElementById("MATE202CoopPlan1");
 if (!MATE202CoopPlan1flag) {
     if (MATE202CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MATE202CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine177());
      that.addLine(getLine205());
     MATE202CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MATE202CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MATE202CoopPlan1", "ENGINEERINGSCIENCES"]);
      MATE202CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine177());
      that.removeLine(getLine205());
     MATE202CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MATE202CoopPlan1");
      MATE202CoopPlan1flag=false
  }
};
$scope.MATH201CoopPlan1Listener = function () {
  var MATH201CoopPlan1element = document.getElementById("MATH201CoopPlan1");
 if (!MATH201CoopPlan1flag) {
     if (MATH201CoopPlan1element.classList.contains("MATH-highlighted")) { 
     MATH201CoopPlan1element.classList.remove("MATH-highlighted");
     MATH201CoopPlan1element.classList.add("MATH");
      return;
}      that.addLine(getLine178());
      that.addLine(getLine184());
      that.addLine(getLine210());
      that.addLine(getLine219());
     MATH201CoopPlan1element.classList.remove("MATH");
     MATH201CoopPlan1element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH201CoopPlan1", "MATH"]);
      MATH201CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine178());
      that.removeLine(getLine184());
      that.removeLine(getLine210());
      that.removeLine(getLine219());
     MATH201CoopPlan1element.classList.remove("MATH-highlighted");
     MATH201CoopPlan1element.classList.add("MATH");
     that.removeFromClicked("MATH201CoopPlan1");
      MATH201CoopPlan1flag=false
  }
};
$scope.MECE200CoopPlan1Listener = function () {
  var MECE200CoopPlan1element = document.getElementById("MECE200CoopPlan1");
 if (!MECE200CoopPlan1flag) {
     if (MECE200CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     MECE200CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine230());
     MECE200CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     MECE200CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["MECE200CoopPlan1", "ENGINEERINGPROFESSION"]);
      MECE200CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine230());
     MECE200CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("MECE200CoopPlan1");
      MECE200CoopPlan1flag=false
  }
};
$scope.MECE250CoopPlan1Listener = function () {
  var MECE250CoopPlan1element = document.getElementById("MECE250CoopPlan1");
 if (!MECE250CoopPlan1flag) {
     if (MECE250CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE250CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine179());
      that.addLine(getLine180());
      that.addLine(getLine181());
      that.addLine(getLine192());
      that.addLine(getLine208());
      that.addLine(getLine228());
     MECE250CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE250CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE250CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE250CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine179());
      that.removeLine(getLine180());
      that.removeLine(getLine181());
      that.removeLine(getLine192());
      that.removeLine(getLine208());
      that.removeLine(getLine228());
     MECE250CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE250CoopPlan1");
      MECE250CoopPlan1flag=false
  }
};
$scope.WKEXP901CoopPlan1Listener = function () {
  var WKEXP901CoopPlan1element = document.getElementById("WKEXP901CoopPlan1");
 if (!WKEXP901CoopPlan1flag) {
     if (WKEXP901CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP901CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP901CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine182());
      that.addLine(getLine183());
     WKEXP901CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP901CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP901CoopPlan1", "ENGINEERINGPROFESSION"]);
      WKEXP901CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine182());
      that.removeLine(getLine183());
     WKEXP901CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP901CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP901CoopPlan1");
      WKEXP901CoopPlan1flag=false
  }
};
$scope.WKEXP902CoopPlan1Listener = function () {
  var WKEXP902CoopPlan1element = document.getElementById("WKEXP902CoopPlan1");
 if (!WKEXP902CoopPlan1flag) {
     if (WKEXP902CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP902CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP902CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine183());
      that.addLine(getLine200());
     WKEXP902CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP902CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP902CoopPlan1", "ENGINEERINGPROFESSION"]);
      WKEXP902CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine183());
      that.removeLine(getLine200());
     WKEXP902CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP902CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP902CoopPlan1");
      WKEXP902CoopPlan1flag=false
  }
};
$scope.MATH300CoopPlan1Listener = function () {
  var MATH300CoopPlan1element = document.getElementById("MATH300CoopPlan1");
 if (!MATH300CoopPlan1flag) {
     if (MATH300CoopPlan1element.classList.contains("MATH-highlighted")) { 
     MATH300CoopPlan1element.classList.remove("MATH-highlighted");
     MATH300CoopPlan1element.classList.add("MATH");
      return;
}      that.addLine(getLine184());
      that.addLine(getLine185());
      that.addLine(getLine197());
      that.addLine(getLine214());
      that.addLine(getLine229());
     MATH300CoopPlan1element.classList.remove("MATH");
     MATH300CoopPlan1element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH300CoopPlan1", "MATH"]);
      MATH300CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine184());
      that.removeLine(getLine185());
      that.removeLine(getLine197());
      that.removeLine(getLine214());
      that.removeLine(getLine229());
     MATH300CoopPlan1element.classList.remove("MATH-highlighted");
     MATH300CoopPlan1element.classList.add("MATH");
     that.removeFromClicked("MATH300CoopPlan1");
      MATH300CoopPlan1flag=false
  }
};
$scope.MECE300CoopPlan1Listener = function () {
  var MECE300CoopPlan1element = document.getElementById("MECE300CoopPlan1");
 if (!MECE300CoopPlan1flag) {
     if (MECE300CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE300CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine186());
      that.addLine(getLine187());
      that.addLine(getLine188());
      that.addLine(getLine189());
      that.addLine(getLine190());
      that.addLine(getLine224());
     MECE300CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE300CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE300CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE300CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine186());
      that.removeLine(getLine187());
      that.removeLine(getLine188());
      that.removeLine(getLine189());
      that.removeLine(getLine190());
      that.removeLine(getLine224());
     MECE300CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE300CoopPlan1");
      MECE300CoopPlan1flag=false
  }
};
$scope.MECE301CoopPlan1Listener = function () {
  var MECE301CoopPlan1element = document.getElementById("MECE301CoopPlan1");
 if (!MECE301CoopPlan1flag) {
     if (MECE301CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE301CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine190());
      that.addLine(getLine225());
     MECE301CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE301CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE301CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE301CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine190());
      that.removeLine(getLine225());
     MECE301CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE301CoopPlan1");
      MECE301CoopPlan1flag=false
  }
};
$scope.MECE331CoopPlan1Listener = function () {
  var MECE331CoopPlan1element = document.getElementById("MECE331CoopPlan1");
 if (!MECE331CoopPlan1flag) {
     if (MECE331CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE331CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine189());
      that.addLine(getLine191());
      that.addLine(getLine192());
      that.addLine(getLine193());
      that.addLine(getLine194());
      that.addLine(getLine198());
      that.addLine(getLine211());
      that.addLine(getLine215());
      that.addLine(getLine221());
      that.addLine(getLine231());
     MECE331CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE331CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE331CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE331CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine189());
      that.removeLine(getLine191());
      that.removeLine(getLine192());
      that.removeLine(getLine193());
      that.removeLine(getLine194());
      that.removeLine(getLine198());
      that.removeLine(getLine211());
      that.removeLine(getLine215());
      that.removeLine(getLine221());
      that.removeLine(getLine231());
     MECE331CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE331CoopPlan1");
      MECE331CoopPlan1flag=false
  }
};
$scope.MECE371CoopPlan1Listener = function () {
  var MECE371CoopPlan1element = document.getElementById("MECE371CoopPlan1");
 if (!MECE371CoopPlan1flag) {
     if (MECE371CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE371CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine195());
      that.addLine(getLine196());
      that.addLine(getLine197());
      that.addLine(getLine198());
      that.addLine(getLine217());
      that.addLine(getLine222());
      that.addLine(getLine235());
     MECE371CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE371CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE371CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE371CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine195());
      that.removeLine(getLine196());
      that.removeLine(getLine197());
      that.removeLine(getLine198());
      that.removeLine(getLine217());
      that.removeLine(getLine222());
      that.removeLine(getLine235());
     MECE371CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE371CoopPlan1");
      MECE371CoopPlan1flag=false
  }
};
$scope.MECE380CoopPlan1Listener = function () {
  var MECE380CoopPlan1element = document.getElementById("MECE380CoopPlan1");
 if (!MECE380CoopPlan1flag) {
     if (MECE380CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE380CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine199());
      that.addLine(getLine213());
      that.addLine(getLine236());
     MECE380CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE380CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE380CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE380CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine199());
      that.removeLine(getLine213());
      that.removeLine(getLine236());
     MECE380CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE380CoopPlan1");
      MECE380CoopPlan1flag=false
  }
};
$scope.WKEXP903CoopPlan1Listener = function () {
  var WKEXP903CoopPlan1element = document.getElementById("WKEXP903CoopPlan1");
 if (!WKEXP903CoopPlan1flag) {
     if (WKEXP903CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP903CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP903CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine200());
      that.addLine(getLine201());
     WKEXP903CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP903CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP903CoopPlan1", "ENGINEERINGPROFESSION"]);
      WKEXP903CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine200());
      that.removeLine(getLine201());
     WKEXP903CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP903CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP903CoopPlan1");
      WKEXP903CoopPlan1flag=false
  }
};
$scope.WKEXP904CoopPlan1Listener = function () {
  var WKEXP904CoopPlan1element = document.getElementById("WKEXP904CoopPlan1");
 if (!WKEXP904CoopPlan1flag) {
     if (WKEXP904CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP904CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP904CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine201());
      that.addLine(getLine218());
     WKEXP904CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP904CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP904CoopPlan1", "ENGINEERINGPROFESSION"]);
      WKEXP904CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine201());
      that.removeLine(getLine218());
     WKEXP904CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP904CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP904CoopPlan1");
      WKEXP904CoopPlan1flag=false
  }
};
$scope.ENGM310CoopPlan1Listener = function () {
  var ENGM310CoopPlan1element = document.getElementById("ENGM310CoopPlan1");
 if (!ENGM310CoopPlan1flag) {
     if (ENGM310CoopPlan1element.classList.contains("Other-highlighted")) { 
     ENGM310CoopPlan1element.classList.remove("Other-highlighted");
     ENGM310CoopPlan1element.classList.add("Other");
      return;
}      that.addLine(getLine237());
     ENGM310CoopPlan1element.classList.remove("Other");
     ENGM310CoopPlan1element.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310CoopPlan1", "Other"]);
      ENGM310CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine237());
     ENGM310CoopPlan1element.classList.remove("Other-highlighted");
     ENGM310CoopPlan1element.classList.add("Other");
     that.removeFromClicked("ENGM310CoopPlan1");
      ENGM310CoopPlan1flag=false
  }
};
$scope.ENGM401CoopPlan1Listener = function () {
  var ENGM401CoopPlan1element = document.getElementById("ENGM401CoopPlan1");
 if (!ENGM401CoopPlan1flag) {
     if (ENGM401CoopPlan1element.classList.contains("Other-highlighted")) { 
     ENGM401CoopPlan1element.classList.remove("Other-highlighted");
     ENGM401CoopPlan1element.classList.add("Other");
      return;
}      that.addLine(getLine238());
     ENGM401CoopPlan1element.classList.remove("Other");
     ENGM401CoopPlan1element.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401CoopPlan1", "Other"]);
      ENGM401CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine238());
     ENGM401CoopPlan1element.classList.remove("Other-highlighted");
     ENGM401CoopPlan1element.classList.add("Other");
     that.removeFromClicked("ENGM401CoopPlan1");
      ENGM401CoopPlan1flag=false
  }
};
$scope.MECE340CoopPlan1Listener = function () {
  var MECE340CoopPlan1element = document.getElementById("MECE340CoopPlan1");
 if (!MECE340CoopPlan1flag) {
     if (MECE340CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE340CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine202());
      that.addLine(getLine216());
      that.addLine(getLine226());
      that.addLine(getLine232());
     MECE340CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE340CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE340CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE340CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine202());
      that.removeLine(getLine216());
      that.removeLine(getLine226());
      that.removeLine(getLine232());
     MECE340CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE340CoopPlan1");
      MECE340CoopPlan1flag=false
  }
};
$scope.MECE360CoopPlan1Listener = function () {
  var MECE360CoopPlan1element = document.getElementById("MECE360CoopPlan1");
 if (!MECE360CoopPlan1flag) {
     if (MECE360CoopPlan1element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE360CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360CoopPlan1element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine203());
      that.addLine(getLine204());
      that.addLine(getLine205());
      that.addLine(getLine206());
      that.addLine(getLine207());
      that.addLine(getLine212());
      that.addLine(getLine227());
      that.addLine(getLine233());
     MECE360CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
     MECE360CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE360CoopPlan1", "ENGINEERINGDESIGN"]);
      MECE360CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine203());
      that.removeLine(getLine204());
      that.removeLine(getLine205());
      that.removeLine(getLine206());
      that.removeLine(getLine207());
      that.removeLine(getLine212());
      that.removeLine(getLine227());
      that.removeLine(getLine233());
     MECE360CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360CoopPlan1element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE360CoopPlan1");
      MECE360CoopPlan1flag=false
  }
};
$scope.MECE362CoopPlan1Listener = function () {
  var MECE362CoopPlan1element = document.getElementById("MECE362CoopPlan1");
 if (!MECE362CoopPlan1flag) {
     if (MECE362CoopPlan1element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE362CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362CoopPlan1element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine207());
      that.addLine(getLine208());
      that.addLine(getLine234());
     MECE362CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
     MECE362CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE362CoopPlan1", "ENGINEERINGDESIGN"]);
      MECE362CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine207());
      that.removeLine(getLine208());
      that.removeLine(getLine234());
     MECE362CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362CoopPlan1element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE362CoopPlan1");
      MECE362CoopPlan1flag=false
  }
};
$scope.MECE390CoopPlan1Listener = function () {
  var MECE390CoopPlan1element = document.getElementById("MECE390CoopPlan1");
 if (!MECE390CoopPlan1flag) {
     if (MECE390CoopPlan1element.classList.contains("MATH-highlighted")) { 
     MECE390CoopPlan1element.classList.remove("MATH-highlighted");
     MECE390CoopPlan1element.classList.add("MATH");
      return;
}      that.addLine(getLine209());
      that.addLine(getLine210());
      that.addLine(getLine223());
     MECE390CoopPlan1element.classList.remove("MATH");
     MECE390CoopPlan1element.classList.add("MATH-highlighted");
     that.addToClicked(["MECE390CoopPlan1", "MATH"]);
      MECE390CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine209());
      that.removeLine(getLine210());
      that.removeLine(getLine223());
     MECE390CoopPlan1element.classList.remove("MATH-highlighted");
     MECE390CoopPlan1element.classList.add("MATH");
     that.removeFromClicked("MECE390CoopPlan1");
      MECE390CoopPlan1flag=false
  }
};
$scope.ComplementaryElectiveCoopPlan10Listener = function () {
  var ComplementaryElectiveCoopPlan10element = document.getElementById("ComplementaryElectiveCoopPlan10");
 if (!ComplementaryElectiveCoopPlan10flag) {
     if (ComplementaryElectiveCoopPlan10element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlan10element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan10element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlan10element.classList.remove("COMP");
     ComplementaryElectiveCoopPlan10element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlan10", "COMP"]);
      ComplementaryElectiveCoopPlan10flag=true
  }
 else {
     ComplementaryElectiveCoopPlan10element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan10element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlan10");
      ComplementaryElectiveCoopPlan10flag=false
  }
};
$scope.ENGG404CoopPlan1Listener = function () {
  var ENGG404CoopPlan1element = document.getElementById("ENGG404CoopPlan1");
 if (!ENGG404CoopPlan1flag) {
     if (ENGG404CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG404CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG404CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     ENGG404CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG404CoopPlan1", "ENGINEERINGPROFESSION"]);
      ENGG404CoopPlan1flag=true
  }
 else {
     ENGG404CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG404CoopPlan1");
      ENGG404CoopPlan1flag=false
  }
};
$scope.MECE430CoopPlan1Listener = function () {
  var MECE430CoopPlan1element = document.getElementById("MECE430CoopPlan1");
 if (!MECE430CoopPlan1flag) {
     if (MECE430CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE430CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine211());
     MECE430CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE430CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE430CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE430CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine211());
     MECE430CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE430CoopPlan1");
      MECE430CoopPlan1flag=false
  }
};
$scope.MECE480CoopPlan1Listener = function () {
  var MECE480CoopPlan1element = document.getElementById("MECE480CoopPlan1");
 if (!MECE480CoopPlan1flag) {
     if (MECE480CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE480CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine212());
      that.addLine(getLine213());
      that.addLine(getLine214());
     MECE480CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE480CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE480CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE480CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine212());
      that.removeLine(getLine213());
      that.removeLine(getLine214());
     MECE480CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE480CoopPlan1");
      MECE480CoopPlan1flag=false
  }
};
$scope.MECE463CoopPlan1Listener = function () {
  var MECE463CoopPlan1element = document.getElementById("MECE463CoopPlan1");
 if (!MECE463CoopPlan1flag) {
     if (MECE463CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE463CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine215());
      that.addLine(getLine216());
      that.addLine(getLine217());
     MECE463CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE463CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE463CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE463CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine215());
      that.removeLine(getLine216());
      that.removeLine(getLine217());
     MECE463CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE463CoopPlan1");
      MECE463CoopPlan1flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan10Listener = function () {
  var ProgramTechnicalElectiveCoopPlan10element = document.getElementById("ProgramTechnicalElectiveCoopPlan10");
 if (!ProgramTechnicalElectiveCoopPlan10flag) {
     if (ProgramTechnicalElectiveCoopPlan10element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan10element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan10element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan10element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan10element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan10", "PROG"]);
      ProgramTechnicalElectiveCoopPlan10flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan10element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan10element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan10");
      ProgramTechnicalElectiveCoopPlan10flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan11Listener = function () {
  var ProgramTechnicalElectiveCoopPlan11element = document.getElementById("ProgramTechnicalElectiveCoopPlan11");
 if (!ProgramTechnicalElectiveCoopPlan11flag) {
     if (ProgramTechnicalElectiveCoopPlan11element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan11element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan11element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan11element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan11element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan11", "PROG"]);
      ProgramTechnicalElectiveCoopPlan11flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan11element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan11element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan11");
      ProgramTechnicalElectiveCoopPlan11flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan12Listener = function () {
  var ProgramTechnicalElectiveCoopPlan12element = document.getElementById("ProgramTechnicalElectiveCoopPlan12");
 if (!ProgramTechnicalElectiveCoopPlan12flag) {
     if (ProgramTechnicalElectiveCoopPlan12element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan12element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan12element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan12element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan12element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan12", "PROG"]);
      ProgramTechnicalElectiveCoopPlan12flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan12element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan12element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan12");
      ProgramTechnicalElectiveCoopPlan12flag=false
  }
};
$scope.WKEXP905CoopPlan1Listener = function () {
  var WKEXP905CoopPlan1element = document.getElementById("WKEXP905CoopPlan1");
 if (!WKEXP905CoopPlan1flag) {
     if (WKEXP905CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP905CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP905CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine218());
     WKEXP905CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP905CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP905CoopPlan1", "ENGINEERINGPROFESSION"]);
      WKEXP905CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine218());
     WKEXP905CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP905CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP905CoopPlan1");
      WKEXP905CoopPlan1flag=false
  }
};
$scope.CHE448CoopPlan1Listener = function () {
  var CHE448CoopPlan1element = document.getElementById("CHE448CoopPlan1");
 if (!CHE448CoopPlan1flag) {
     if (CHE448CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE448CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine219());
      that.addLine(getLine220());
      that.addLine(getLine221());
      that.addLine(getLine222());
     CHE448CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     CHE448CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE448CoopPlan1", "ENGINEERINGSCIENCES"]);
      CHE448CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine219());
      that.removeLine(getLine220());
      that.removeLine(getLine221());
      that.removeLine(getLine222());
     CHE448CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE448CoopPlan1");
      CHE448CoopPlan1flag=false
  }
};
$scope.MECE420CoopPlan1Listener = function () {
  var MECE420CoopPlan1element = document.getElementById("MECE420CoopPlan1");
 if (!MECE420CoopPlan1flag) {
     if (MECE420CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE420CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine223());
     MECE420CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE420CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE420CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE420CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine223());
     MECE420CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE420CoopPlan1");
      MECE420CoopPlan1flag=false
  }
};
$scope.ENGG400CoopPlan1Listener = function () {
  var ENGG400CoopPlan1element = document.getElementById("ENGG400CoopPlan1");
 if (!ENGG400CoopPlan1flag) {
     if (ENGG400CoopPlan1element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG400CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG400CoopPlan1element.classList.remove("ENGINEERINGPROFESSION");
     ENGG400CoopPlan1element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG400CoopPlan1", "ENGINEERINGPROFESSION"]);
      ENGG400CoopPlan1flag=true
  }
 else {
     ENGG400CoopPlan1element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400CoopPlan1element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG400CoopPlan1");
      ENGG400CoopPlan1flag=false
  }
};
$scope.MECE403CoopPlan1Listener = function () {
  var MECE403CoopPlan1element = document.getElementById("MECE403CoopPlan1");
 if (!MECE403CoopPlan1flag) {
     if (MECE403CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE403CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine224());
      that.addLine(getLine225());
      that.addLine(getLine226());
      that.addLine(getLine227());
     MECE403CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE403CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE403CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE403CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine224());
      that.removeLine(getLine225());
      that.removeLine(getLine226());
      that.removeLine(getLine227());
     MECE403CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE403CoopPlan1");
      MECE403CoopPlan1flag=false
  }
};
$scope.MECE451CoopPlan1Listener = function () {
  var MECE451CoopPlan1element = document.getElementById("MECE451CoopPlan1");
 if (!MECE451CoopPlan1flag) {
     if (MECE451CoopPlan1element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE451CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine228());
      that.addLine(getLine229());
     MECE451CoopPlan1element.classList.remove("ENGINEERINGSCIENCES");
     MECE451CoopPlan1element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE451CoopPlan1", "ENGINEERINGSCIENCES"]);
      MECE451CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine228());
      that.removeLine(getLine229());
     MECE451CoopPlan1element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451CoopPlan1element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE451CoopPlan1");
      MECE451CoopPlan1flag=false
  }
};
$scope.MECE460CoopPlan1Listener = function () {
  var MECE460CoopPlan1element = document.getElementById("MECE460CoopPlan1");
 if (!MECE460CoopPlan1flag) {
     if (MECE460CoopPlan1element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE460CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460CoopPlan1element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine230());
      that.addLine(getLine231());
      that.addLine(getLine232());
      that.addLine(getLine233());
      that.addLine(getLine234());
      that.addLine(getLine235());
      that.addLine(getLine236());
      that.addLine(getLine237());
      that.addLine(getLine238());
     MECE460CoopPlan1element.classList.remove("ENGINEERINGDESIGN");
     MECE460CoopPlan1element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE460CoopPlan1", "ENGINEERINGDESIGN"]);
      MECE460CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine230());
      that.removeLine(getLine231());
      that.removeLine(getLine232());
      that.removeLine(getLine233());
      that.removeLine(getLine234());
      that.removeLine(getLine235());
      that.removeLine(getLine236());
      that.removeLine(getLine237());
      that.removeLine(getLine238());
     MECE460CoopPlan1element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460CoopPlan1element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE460CoopPlan1");
      MECE460CoopPlan1flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan13Listener = function () {
  var ProgramTechnicalElectiveCoopPlan13element = document.getElementById("ProgramTechnicalElectiveCoopPlan13");
 if (!ProgramTechnicalElectiveCoopPlan13flag) {
     if (ProgramTechnicalElectiveCoopPlan13element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan13element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan13element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan13element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan13element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan13", "PROG"]);
      ProgramTechnicalElectiveCoopPlan13flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan13element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan13element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan13");
      ProgramTechnicalElectiveCoopPlan13flag=false
  }
};
$scope.ITSElectiveCoopPlan10Listener = function () {
  var ITSElectiveCoopPlan10element = document.getElementById("ITSElectiveCoopPlan10");
 if (!ITSElectiveCoopPlan10flag) {
     if (ITSElectiveCoopPlan10element.classList.contains("ITS-highlighted")) { 
     ITSElectiveCoopPlan10element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan10element.classList.add("ITS");
      return;
}     ITSElectiveCoopPlan10element.classList.remove("ITS");
     ITSElectiveCoopPlan10element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveCoopPlan10", "ITS"]);
      ITSElectiveCoopPlan10flag=true
  }
 else {
     ITSElectiveCoopPlan10element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan10element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveCoopPlan10");
      ITSElectiveCoopPlan10flag=false
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
  var ENGM401CoopPlan2flag = false;
  var MECE340CoopPlan2flag = false;
  var MECE360CoopPlan2flag = false;
  var MECE362CoopPlan2flag = false;
  var MECE390CoopPlan2flag = false;
  var ComplementaryElectiveCoopPlan20flag = false;
  var WKEXP904CoopPlan2flag = false;
  var MECE403CoopPlan2flag = false;
  var MECE451CoopPlan2flag = false;
  var MECE460CoopPlan2flag = false;
  var ProgramTechnicalElectiveCoopPlan20flag = false;
  var ProgramTechnicalElectiveCoopPlan21flag = false;
  var ITSElectiveCoopPlan20flag = false;
  var WKEXP905CoopPlan2flag = false;
  var CHE448CoopPlan2flag = false;
  var MECE420CoopPlan2flag = false;
  var ENGG400CoopPlan2flag = false;
  var ENGG404CoopPlan2flag = false;
  var MECE430CoopPlan2flag = false;
  var MECE480CoopPlan2flag = false;
  var MECE463CoopPlan2flag = false;
  var ProgramTechnicalElectiveCoopPlan22flag = false;
  var ProgramTechnicalElectiveCoopPlan23flag = false;
$scope.CHEM103CoopPlan2Listener = function () {
  var CHEM103CoopPlan2element = document.getElementById("CHEM103CoopPlan2");
 if (!CHEM103CoopPlan2flag) {
     if (CHEM103CoopPlan2element.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM103CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     CHEM103CoopPlan2element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine241());
     CHEM103CoopPlan2element.classList.remove("BASICSCIENCES");
     CHEM103CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM103CoopPlan2", "BASICSCIENCES"]);
      CHEM103CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine241());
     CHEM103CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     CHEM103CoopPlan2element.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM103CoopPlan2");
      CHEM103CoopPlan2flag=false
  }
};
$scope.ENGG100CoopPlan2Listener = function () {
  var ENGG100CoopPlan2element = document.getElementById("ENGG100CoopPlan2");
 if (!ENGG100CoopPlan2flag) {
     if (ENGG100CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG100CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG100CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     ENGG100CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG100CoopPlan2", "ENGINEERINGPROFESSION"]);
      ENGG100CoopPlan2flag=true
  }
 else {
     ENGG100CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG100CoopPlan2");
      ENGG100CoopPlan2flag=false
  }
};
$scope.ENGG130CoopPlan2Listener = function () {
  var ENGG130CoopPlan2element = document.getElementById("ENGG130CoopPlan2");
 if (!ENGG130CoopPlan2flag) {
     if (ENGG130CoopPlan2element.classList.contains("BASICSCIENCES-highlighted")) { 
     ENGG130CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     ENGG130CoopPlan2element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine239());
      that.addLine(getLine244());
      that.addLine(getLine249());
      that.addLine(getLine253());
     ENGG130CoopPlan2element.classList.remove("BASICSCIENCES");
     ENGG130CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENGG130CoopPlan2", "BASICSCIENCES"]);
      ENGG130CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine239());
      that.removeLine(getLine244());
      that.removeLine(getLine249());
      that.removeLine(getLine253());
     ENGG130CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     ENGG130CoopPlan2element.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENGG130CoopPlan2");
      ENGG130CoopPlan2flag=false
  }
};
$scope.ENGL199CoopPlan2Listener = function () {
  var ENGL199CoopPlan2element = document.getElementById("ENGL199CoopPlan2");
 if (!ENGL199CoopPlan2flag) {
     if (ENGL199CoopPlan2element.classList.contains("Other-highlighted")) { 
     ENGL199CoopPlan2element.classList.remove("Other-highlighted");
     ENGL199CoopPlan2element.classList.add("Other");
      return;
}      that.addLine(getLine242());
     ENGL199CoopPlan2element.classList.remove("Other");
     ENGL199CoopPlan2element.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199CoopPlan2", "Other"]);
      ENGL199CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine242());
     ENGL199CoopPlan2element.classList.remove("Other-highlighted");
     ENGL199CoopPlan2element.classList.add("Other");
     that.removeFromClicked("ENGL199CoopPlan2");
      ENGL199CoopPlan2flag=false
  }
};
$scope.MATH100CoopPlan2Listener = function () {
  var MATH100CoopPlan2element = document.getElementById("MATH100CoopPlan2");
 if (!MATH100CoopPlan2flag) {
     if (MATH100CoopPlan2element.classList.contains("MATH-highlighted")) { 
     MATH100CoopPlan2element.classList.remove("MATH-highlighted");
     MATH100CoopPlan2element.classList.add("MATH");
      return;
}      that.addLine(getLine239());
      that.addLine(getLine240());
      that.addLine(getLine243());
      that.addLine(getLine246());
      that.addLine(getLine247());
      that.addLine(getLine256());
     MATH100CoopPlan2element.classList.remove("MATH");
     MATH100CoopPlan2element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH100CoopPlan2", "MATH"]);
      MATH100CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine239());
      that.removeLine(getLine240());
      that.removeLine(getLine243());
      that.removeLine(getLine246());
      that.removeLine(getLine247());
      that.removeLine(getLine256());
     MATH100CoopPlan2element.classList.remove("MATH-highlighted");
     MATH100CoopPlan2element.classList.add("MATH");
     that.removeFromClicked("MATH100CoopPlan2");
      MATH100CoopPlan2flag=false
  }
};
$scope.PHYS130CoopPlan2Listener = function () {
  var PHYS130CoopPlan2element = document.getElementById("PHYS130CoopPlan2");
 if (!PHYS130CoopPlan2flag) {
     if (PHYS130CoopPlan2element.classList.contains("BASICSCIENCES-highlighted")) { 
     PHYS130CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     PHYS130CoopPlan2element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine240());
     PHYS130CoopPlan2element.classList.remove("BASICSCIENCES");
     PHYS130CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["PHYS130CoopPlan2", "BASICSCIENCES"]);
      PHYS130CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine240());
     PHYS130CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     PHYS130CoopPlan2element.classList.add("BASICSCIENCES");
     that.removeFromClicked("PHYS130CoopPlan2");
      PHYS130CoopPlan2flag=false
  }
};
$scope.CHEM105CoopPlan2Listener = function () {
  var CHEM105CoopPlan2element = document.getElementById("CHEM105CoopPlan2");
 if (!CHEM105CoopPlan2flag) {
     if (CHEM105CoopPlan2element.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM105CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     CHEM105CoopPlan2element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine241());
      that.addLine(getLine259());
     CHEM105CoopPlan2element.classList.remove("BASICSCIENCES");
     CHEM105CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM105CoopPlan2", "BASICSCIENCES"]);
      CHEM105CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine241());
      that.removeLine(getLine259());
     CHEM105CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     CHEM105CoopPlan2element.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM105CoopPlan2");
      CHEM105CoopPlan2flag=false
  }
};
$scope.ENCMP100CoopPlan2Listener = function () {
  var ENCMP100CoopPlan2element = document.getElementById("ENCMP100CoopPlan2");
 if (!ENCMP100CoopPlan2flag) {
     if (ENCMP100CoopPlan2element.classList.contains("BASICSCIENCES-highlighted")) { 
     ENCMP100CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100CoopPlan2element.classList.add("BASICSCIENCES");
      return;
}     ENCMP100CoopPlan2element.classList.remove("BASICSCIENCES");
     ENCMP100CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENCMP100CoopPlan2", "BASICSCIENCES"]);
      ENCMP100CoopPlan2flag=true
  }
 else {
     ENCMP100CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100CoopPlan2element.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENCMP100CoopPlan2");
      ENCMP100CoopPlan2flag=false
  }
};
$scope.ENGG160CoopPlan2Listener = function () {
  var ENGG160CoopPlan2element = document.getElementById("ENGG160CoopPlan2");
 if (!ENGG160CoopPlan2flag) {
     if (ENGG160CoopPlan2element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     ENGG160CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160CoopPlan2element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine242());
      that.addLine(getLine263());
     ENGG160CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
     ENGG160CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["ENGG160CoopPlan2", "ENGINEERINGDESIGN"]);
      ENGG160CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine242());
      that.removeLine(getLine263());
     ENGG160CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160CoopPlan2element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("ENGG160CoopPlan2");
      ENGG160CoopPlan2flag=false
  }
};
$scope.ENPH131CoopPlan2Listener = function () {
  var ENPH131CoopPlan2element = document.getElementById("ENPH131CoopPlan2");
 if (!ENPH131CoopPlan2flag) {
     if (ENPH131CoopPlan2element.classList.contains("BASICSCIENCES-highlighted")) { 
     ENPH131CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     ENPH131CoopPlan2element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine243());
      that.addLine(getLine244());
      that.addLine(getLine245());
      that.addLine(getLine254());
      that.addLine(getLine262());
     ENPH131CoopPlan2element.classList.remove("BASICSCIENCES");
     ENPH131CoopPlan2element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENPH131CoopPlan2", "BASICSCIENCES"]);
      ENPH131CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine243());
      that.removeLine(getLine244());
      that.removeLine(getLine245());
      that.removeLine(getLine254());
      that.removeLine(getLine262());
     ENPH131CoopPlan2element.classList.remove("BASICSCIENCES-highlighted");
     ENPH131CoopPlan2element.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENPH131CoopPlan2");
      ENPH131CoopPlan2flag=false
  }
};
$scope.MATH101CoopPlan2Listener = function () {
  var MATH101CoopPlan2element = document.getElementById("MATH101CoopPlan2");
 if (!MATH101CoopPlan2flag) {
     if (MATH101CoopPlan2element.classList.contains("MATH-highlighted")) { 
     MATH101CoopPlan2element.classList.remove("MATH-highlighted");
     MATH101CoopPlan2element.classList.add("MATH");
      return;
}      that.addLine(getLine245());
      that.addLine(getLine246());
      that.addLine(getLine248());
      that.addLine(getLine250());
      that.addLine(getLine251());
      that.addLine(getLine255());
      that.addLine(getLine257());
      that.addLine(getLine261());
     MATH101CoopPlan2element.classList.remove("MATH");
     MATH101CoopPlan2element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH101CoopPlan2", "MATH"]);
      MATH101CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine245());
      that.removeLine(getLine246());
      that.removeLine(getLine248());
      that.removeLine(getLine250());
      that.removeLine(getLine251());
      that.removeLine(getLine255());
      that.removeLine(getLine257());
      that.removeLine(getLine261());
     MATH101CoopPlan2element.classList.remove("MATH-highlighted");
     MATH101CoopPlan2element.classList.add("MATH");
     that.removeFromClicked("MATH101CoopPlan2");
      MATH101CoopPlan2flag=false
  }
};
$scope.MATH102CoopPlan2Listener = function () {
  var MATH102CoopPlan2element = document.getElementById("MATH102CoopPlan2");
 if (!MATH102CoopPlan2flag) {
     if (MATH102CoopPlan2element.classList.contains("MATH-highlighted")) { 
     MATH102CoopPlan2element.classList.remove("MATH-highlighted");
     MATH102CoopPlan2element.classList.add("MATH");
      return;
}      that.addLine(getLine247());
      that.addLine(getLine252());
      that.addLine(getLine291());
     MATH102CoopPlan2element.classList.remove("MATH");
     MATH102CoopPlan2element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH102CoopPlan2", "MATH"]);
      MATH102CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine247());
      that.removeLine(getLine252());
      that.removeLine(getLine291());
     MATH102CoopPlan2element.classList.remove("MATH-highlighted");
     MATH102CoopPlan2element.classList.add("MATH");
     that.removeFromClicked("MATH102CoopPlan2");
      MATH102CoopPlan2flag=false
  }
};
$scope.CHE243CoopPlan2Listener = function () {
  var CHE243CoopPlan2element = document.getElementById("CHE243CoopPlan2");
 if (!CHE243CoopPlan2flag) {
     if (CHE243CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE243CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine248());
      that.addLine(getLine276());
      that.addLine(getLine278());
      that.addLine(getLine284());
     CHE243CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     CHE243CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE243CoopPlan2", "ENGINEERINGSCIENCES"]);
      CHE243CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine248());
      that.removeLine(getLine276());
      that.removeLine(getLine278());
      that.removeLine(getLine284());
     CHE243CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE243CoopPlan2");
      CHE243CoopPlan2flag=false
  }
};
$scope.CIVE270CoopPlan2Listener = function () {
  var CIVE270CoopPlan2element = document.getElementById("CIVE270CoopPlan2");
 if (!CIVE270CoopPlan2flag) {
     if (CIVE270CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CIVE270CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine249());
      that.addLine(getLine250());
      that.addLine(getLine264());
      that.addLine(getLine268());
      that.addLine(getLine281());
      that.addLine(getLine288());
     CIVE270CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     CIVE270CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CIVE270CoopPlan2", "ENGINEERINGSCIENCES"]);
      CIVE270CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine249());
      that.removeLine(getLine250());
      that.removeLine(getLine264());
      that.removeLine(getLine268());
      that.removeLine(getLine281());
      that.removeLine(getLine288());
     CIVE270CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CIVE270CoopPlan2");
      CIVE270CoopPlan2flag=false
  }
};
$scope.ENGG299CoopPlan2Listener = function () {
  var ENGG299CoopPlan2element = document.getElementById("ENGG299CoopPlan2");
 if (!ENGG299CoopPlan2flag) {
     if (ENGG299CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG299CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG299CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine258());
     ENGG299CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     ENGG299CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG299CoopPlan2", "ENGINEERINGPROFESSION"]);
      ENGG299CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine258());
     ENGG299CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG299CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG299CoopPlan2");
      ENGG299CoopPlan2flag=false
  }
};
$scope.MATH209CoopPlan2Listener = function () {
  var MATH209CoopPlan2element = document.getElementById("MATH209CoopPlan2");
 if (!MATH209CoopPlan2flag) {
     if (MATH209CoopPlan2element.classList.contains("MATH-highlighted")) { 
     MATH209CoopPlan2element.classList.remove("MATH-highlighted");
     MATH209CoopPlan2element.classList.add("MATH");
      return;
}      that.addLine(getLine251());
      that.addLine(getLine252());
      that.addLine(getLine260());
      that.addLine(getLine267());
      that.addLine(getLine275());
      that.addLine(getLine311());
     MATH209CoopPlan2element.classList.remove("MATH");
     MATH209CoopPlan2element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH209CoopPlan2", "MATH"]);
      MATH209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine251());
      that.removeLine(getLine252());
      that.removeLine(getLine260());
      that.removeLine(getLine267());
      that.removeLine(getLine275());
      that.removeLine(getLine311());
     MATH209CoopPlan2element.classList.remove("MATH-highlighted");
     MATH209CoopPlan2element.classList.add("MATH");
     that.removeFromClicked("MATH209CoopPlan2");
      MATH209CoopPlan2flag=false
  }
};
$scope.MECE200CoopPlan2Listener = function () {
  var MECE200CoopPlan2element = document.getElementById("MECE200CoopPlan2");
 if (!MECE200CoopPlan2flag) {
     if (MECE200CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     MECE200CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine300());
     MECE200CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     MECE200CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["MECE200CoopPlan2", "ENGINEERINGPROFESSION"]);
      MECE200CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine300());
     MECE200CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("MECE200CoopPlan2");
      MECE200CoopPlan2flag=false
  }
};
$scope.MECE250CoopPlan2Listener = function () {
  var MECE250CoopPlan2element = document.getElementById("MECE250CoopPlan2");
 if (!MECE250CoopPlan2flag) {
     if (MECE250CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE250CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine253());
      that.addLine(getLine254());
      that.addLine(getLine255());
      that.addLine(getLine274());
      that.addLine(getLine290());
      that.addLine(getLine298());
     MECE250CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE250CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE250CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE250CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine253());
      that.removeLine(getLine254());
      that.removeLine(getLine255());
      that.removeLine(getLine274());
      that.removeLine(getLine290());
      that.removeLine(getLine298());
     MECE250CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE250CoopPlan2");
      MECE250CoopPlan2flag=false
  }
};
$scope.STAT235CoopPlan2Listener = function () {
  var STAT235CoopPlan2element = document.getElementById("STAT235CoopPlan2");
 if (!STAT235CoopPlan2flag) {
     if (STAT235CoopPlan2element.classList.contains("MATH-highlighted")) { 
     STAT235CoopPlan2element.classList.remove("MATH-highlighted");
     STAT235CoopPlan2element.classList.add("MATH");
      return;
}      that.addLine(getLine256());
      that.addLine(getLine257());
      that.addLine(getLine270());
     STAT235CoopPlan2element.classList.remove("MATH");
     STAT235CoopPlan2element.classList.add("MATH-highlighted");
     that.addToClicked(["STAT235CoopPlan2", "MATH"]);
      STAT235CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine256());
      that.removeLine(getLine257());
      that.removeLine(getLine270());
     STAT235CoopPlan2element.classList.remove("MATH-highlighted");
     STAT235CoopPlan2element.classList.add("MATH");
     that.removeFromClicked("STAT235CoopPlan2");
      STAT235CoopPlan2flag=false
  }
};
$scope.WKEXP901CoopPlan2Listener = function () {
  var WKEXP901CoopPlan2element = document.getElementById("WKEXP901CoopPlan2");
 if (!WKEXP901CoopPlan2flag) {
     if (WKEXP901CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP901CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP901CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine258());
      that.addLine(getLine282());
     WKEXP901CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP901CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP901CoopPlan2", "ENGINEERINGPROFESSION"]);
      WKEXP901CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine258());
      that.removeLine(getLine282());
     WKEXP901CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP901CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP901CoopPlan2");
      WKEXP901CoopPlan2flag=false
  }
};
$scope.ECE209CoopPlan2Listener = function () {
  var ECE209CoopPlan2element = document.getElementById("ECE209CoopPlan2");
 if (!ECE209CoopPlan2flag) {
     if (ECE209CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     ECE209CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine269());
     ECE209CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     ECE209CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["ECE209CoopPlan2", "ENGINEERINGSCIENCES"]);
      ECE209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine269());
     ECE209CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("ECE209CoopPlan2");
      ECE209CoopPlan2flag=false
  }
};
$scope.MATE202CoopPlan2Listener = function () {
  var MATE202CoopPlan2element = document.getElementById("MATE202CoopPlan2");
 if (!MATE202CoopPlan2flag) {
     if (MATE202CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MATE202CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine259());
      that.addLine(getLine287());
     MATE202CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MATE202CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MATE202CoopPlan2", "ENGINEERINGSCIENCES"]);
      MATE202CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine259());
      that.removeLine(getLine287());
     MATE202CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MATE202CoopPlan2");
      MATE202CoopPlan2flag=false
  }
};
$scope.MATH201CoopPlan2Listener = function () {
  var MATH201CoopPlan2element = document.getElementById("MATH201CoopPlan2");
 if (!MATH201CoopPlan2flag) {
     if (MATH201CoopPlan2element.classList.contains("MATH-highlighted")) { 
     MATH201CoopPlan2element.classList.remove("MATH-highlighted");
     MATH201CoopPlan2element.classList.add("MATH");
      return;
}      that.addLine(getLine260());
      that.addLine(getLine266());
      that.addLine(getLine292());
      that.addLine(getLine310());
     MATH201CoopPlan2element.classList.remove("MATH");
     MATH201CoopPlan2element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH201CoopPlan2", "MATH"]);
      MATH201CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine260());
      that.removeLine(getLine266());
      that.removeLine(getLine292());
      that.removeLine(getLine310());
     MATH201CoopPlan2element.classList.remove("MATH-highlighted");
     MATH201CoopPlan2element.classList.add("MATH");
     that.removeFromClicked("MATH201CoopPlan2");
      MATH201CoopPlan2flag=false
  }
};
$scope.MECE230CoopPlan2Listener = function () {
  var MECE230CoopPlan2element = document.getElementById("MECE230CoopPlan2");
 if (!MECE230CoopPlan2flag) {
     if (MECE230CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE230CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine261());
      that.addLine(getLine262());
      that.addLine(getLine273());
      that.addLine(getLine277());
     MECE230CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE230CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE230CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE230CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine261());
      that.removeLine(getLine262());
      that.removeLine(getLine273());
      that.removeLine(getLine277());
     MECE230CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE230CoopPlan2");
      MECE230CoopPlan2flag=false
  }
};
$scope.MECE260CoopPlan2Listener = function () {
  var MECE260CoopPlan2element = document.getElementById("MECE260CoopPlan2");
 if (!MECE260CoopPlan2flag) {
     if (MECE260CoopPlan2element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE260CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260CoopPlan2element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine263());
      that.addLine(getLine264());
      that.addLine(getLine265());
      that.addLine(getLine285());
     MECE260CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
     MECE260CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE260CoopPlan2", "ENGINEERINGDESIGN"]);
      MECE260CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine263());
      that.removeLine(getLine264());
      that.removeLine(getLine265());
      that.removeLine(getLine285());
     MECE260CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260CoopPlan2element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE260CoopPlan2");
      MECE260CoopPlan2flag=false
  }
};
$scope.MECE265CoopPlan2Listener = function () {
  var MECE265CoopPlan2element = document.getElementById("MECE265CoopPlan2");
 if (!MECE265CoopPlan2flag) {
     if (MECE265CoopPlan2element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE265CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265CoopPlan2element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine265());
      that.addLine(getLine286());
     MECE265CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
     MECE265CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE265CoopPlan2", "ENGINEERINGDESIGN"]);
      MECE265CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine265());
      that.removeLine(getLine286());
     MECE265CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265CoopPlan2element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE265CoopPlan2");
      MECE265CoopPlan2flag=false
  }
};
$scope.MATH300CoopPlan2Listener = function () {
  var MATH300CoopPlan2element = document.getElementById("MATH300CoopPlan2");
 if (!MATH300CoopPlan2flag) {
     if (MATH300CoopPlan2element.classList.contains("MATH-highlighted")) { 
     MATH300CoopPlan2element.classList.remove("MATH-highlighted");
     MATH300CoopPlan2element.classList.add("MATH");
      return;
}      that.addLine(getLine266());
      that.addLine(getLine267());
      that.addLine(getLine279());
      that.addLine(getLine299());
      that.addLine(getLine318());
     MATH300CoopPlan2element.classList.remove("MATH");
     MATH300CoopPlan2element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH300CoopPlan2", "MATH"]);
      MATH300CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine266());
      that.removeLine(getLine267());
      that.removeLine(getLine279());
      that.removeLine(getLine299());
      that.removeLine(getLine318());
     MATH300CoopPlan2element.classList.remove("MATH-highlighted");
     MATH300CoopPlan2element.classList.add("MATH");
     that.removeFromClicked("MATH300CoopPlan2");
      MATH300CoopPlan2flag=false
  }
};
$scope.MECE300CoopPlan2Listener = function () {
  var MECE300CoopPlan2element = document.getElementById("MECE300CoopPlan2");
 if (!MECE300CoopPlan2flag) {
     if (MECE300CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE300CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine268());
      that.addLine(getLine269());
      that.addLine(getLine270());
      that.addLine(getLine271());
      that.addLine(getLine272());
      that.addLine(getLine294());
     MECE300CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE300CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE300CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE300CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine268());
      that.removeLine(getLine269());
      that.removeLine(getLine270());
      that.removeLine(getLine271());
      that.removeLine(getLine272());
      that.removeLine(getLine294());
     MECE300CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE300CoopPlan2");
      MECE300CoopPlan2flag=false
  }
};
$scope.MECE301CoopPlan2Listener = function () {
  var MECE301CoopPlan2element = document.getElementById("MECE301CoopPlan2");
 if (!MECE301CoopPlan2flag) {
     if (MECE301CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE301CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine272());
      that.addLine(getLine295());
     MECE301CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE301CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE301CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE301CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine272());
      that.removeLine(getLine295());
     MECE301CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE301CoopPlan2");
      MECE301CoopPlan2flag=false
  }
};
$scope.MECE331CoopPlan2Listener = function () {
  var MECE331CoopPlan2element = document.getElementById("MECE331CoopPlan2");
 if (!MECE331CoopPlan2flag) {
     if (MECE331CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE331CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine271());
      that.addLine(getLine273());
      that.addLine(getLine274());
      that.addLine(getLine275());
      that.addLine(getLine276());
      that.addLine(getLine280());
      that.addLine(getLine301());
      that.addLine(getLine312());
      that.addLine(getLine315());
      that.addLine(getLine319());
     MECE331CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE331CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE331CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE331CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine271());
      that.removeLine(getLine273());
      that.removeLine(getLine274());
      that.removeLine(getLine275());
      that.removeLine(getLine276());
      that.removeLine(getLine280());
      that.removeLine(getLine301());
      that.removeLine(getLine312());
      that.removeLine(getLine315());
      that.removeLine(getLine319());
     MECE331CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE331CoopPlan2");
      MECE331CoopPlan2flag=false
  }
};
$scope.MECE371CoopPlan2Listener = function () {
  var MECE371CoopPlan2element = document.getElementById("MECE371CoopPlan2");
 if (!MECE371CoopPlan2flag) {
     if (MECE371CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE371CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine277());
      that.addLine(getLine278());
      that.addLine(getLine279());
      that.addLine(getLine280());
      that.addLine(getLine305());
      that.addLine(getLine313());
      that.addLine(getLine321());
     MECE371CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE371CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE371CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE371CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine277());
      that.removeLine(getLine278());
      that.removeLine(getLine279());
      that.removeLine(getLine280());
      that.removeLine(getLine305());
      that.removeLine(getLine313());
      that.removeLine(getLine321());
     MECE371CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE371CoopPlan2");
      MECE371CoopPlan2flag=false
  }
};
$scope.MECE380CoopPlan2Listener = function () {
  var MECE380CoopPlan2element = document.getElementById("MECE380CoopPlan2");
 if (!MECE380CoopPlan2flag) {
     if (MECE380CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE380CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine281());
      that.addLine(getLine306());
      that.addLine(getLine317());
     MECE380CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE380CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE380CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE380CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine281());
      that.removeLine(getLine306());
      that.removeLine(getLine317());
     MECE380CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE380CoopPlan2");
      MECE380CoopPlan2flag=false
  }
};
$scope.WKEXP902CoopPlan2Listener = function () {
  var WKEXP902CoopPlan2element = document.getElementById("WKEXP902CoopPlan2");
 if (!WKEXP902CoopPlan2flag) {
     if (WKEXP902CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP902CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP902CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine282());
      that.addLine(getLine283());
     WKEXP902CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP902CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP902CoopPlan2", "ENGINEERINGPROFESSION"]);
      WKEXP902CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine282());
      that.removeLine(getLine283());
     WKEXP902CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP902CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP902CoopPlan2");
      WKEXP902CoopPlan2flag=false
  }
};
$scope.WKEXP903CoopPlan2Listener = function () {
  var WKEXP903CoopPlan2element = document.getElementById("WKEXP903CoopPlan2");
 if (!WKEXP903CoopPlan2flag) {
     if (WKEXP903CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP903CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP903CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine283());
      that.addLine(getLine293());
     WKEXP903CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP903CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP903CoopPlan2", "ENGINEERINGPROFESSION"]);
      WKEXP903CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine283());
      that.removeLine(getLine293());
     WKEXP903CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP903CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP903CoopPlan2");
      WKEXP903CoopPlan2flag=false
  }
};
$scope.ENGM310CoopPlan2Listener = function () {
  var ENGM310CoopPlan2element = document.getElementById("ENGM310CoopPlan2");
 if (!ENGM310CoopPlan2flag) {
     if (ENGM310CoopPlan2element.classList.contains("Other-highlighted")) { 
     ENGM310CoopPlan2element.classList.remove("Other-highlighted");
     ENGM310CoopPlan2element.classList.add("Other");
      return;
}      that.addLine(getLine307());
     ENGM310CoopPlan2element.classList.remove("Other");
     ENGM310CoopPlan2element.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310CoopPlan2", "Other"]);
      ENGM310CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine307());
     ENGM310CoopPlan2element.classList.remove("Other-highlighted");
     ENGM310CoopPlan2element.classList.add("Other");
     that.removeFromClicked("ENGM310CoopPlan2");
      ENGM310CoopPlan2flag=false
  }
};
$scope.ENGM401CoopPlan2Listener = function () {
  var ENGM401CoopPlan2element = document.getElementById("ENGM401CoopPlan2");
 if (!ENGM401CoopPlan2flag) {
     if (ENGM401CoopPlan2element.classList.contains("Other-highlighted")) { 
     ENGM401CoopPlan2element.classList.remove("Other-highlighted");
     ENGM401CoopPlan2element.classList.add("Other");
      return;
}      that.addLine(getLine308());
     ENGM401CoopPlan2element.classList.remove("Other");
     ENGM401CoopPlan2element.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401CoopPlan2", "Other"]);
      ENGM401CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine308());
     ENGM401CoopPlan2element.classList.remove("Other-highlighted");
     ENGM401CoopPlan2element.classList.add("Other");
     that.removeFromClicked("ENGM401CoopPlan2");
      ENGM401CoopPlan2flag=false
  }
};
$scope.MECE340CoopPlan2Listener = function () {
  var MECE340CoopPlan2element = document.getElementById("MECE340CoopPlan2");
 if (!MECE340CoopPlan2flag) {
     if (MECE340CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE340CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine284());
      that.addLine(getLine296());
      that.addLine(getLine302());
      that.addLine(getLine320());
     MECE340CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE340CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE340CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE340CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine284());
      that.removeLine(getLine296());
      that.removeLine(getLine302());
      that.removeLine(getLine320());
     MECE340CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE340CoopPlan2");
      MECE340CoopPlan2flag=false
  }
};
$scope.MECE360CoopPlan2Listener = function () {
  var MECE360CoopPlan2element = document.getElementById("MECE360CoopPlan2");
 if (!MECE360CoopPlan2flag) {
     if (MECE360CoopPlan2element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE360CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360CoopPlan2element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine285());
      that.addLine(getLine286());
      that.addLine(getLine287());
      that.addLine(getLine288());
      that.addLine(getLine289());
      that.addLine(getLine297());
      that.addLine(getLine303());
      that.addLine(getLine316());
     MECE360CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
     MECE360CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE360CoopPlan2", "ENGINEERINGDESIGN"]);
      MECE360CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine285());
      that.removeLine(getLine286());
      that.removeLine(getLine287());
      that.removeLine(getLine288());
      that.removeLine(getLine289());
      that.removeLine(getLine297());
      that.removeLine(getLine303());
      that.removeLine(getLine316());
     MECE360CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360CoopPlan2element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE360CoopPlan2");
      MECE360CoopPlan2flag=false
  }
};
$scope.MECE362CoopPlan2Listener = function () {
  var MECE362CoopPlan2element = document.getElementById("MECE362CoopPlan2");
 if (!MECE362CoopPlan2flag) {
     if (MECE362CoopPlan2element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE362CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362CoopPlan2element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine289());
      that.addLine(getLine290());
      that.addLine(getLine304());
     MECE362CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
     MECE362CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE362CoopPlan2", "ENGINEERINGDESIGN"]);
      MECE362CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine289());
      that.removeLine(getLine290());
      that.removeLine(getLine304());
     MECE362CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362CoopPlan2element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE362CoopPlan2");
      MECE362CoopPlan2flag=false
  }
};
$scope.MECE390CoopPlan2Listener = function () {
  var MECE390CoopPlan2element = document.getElementById("MECE390CoopPlan2");
 if (!MECE390CoopPlan2flag) {
     if (MECE390CoopPlan2element.classList.contains("MATH-highlighted")) { 
     MECE390CoopPlan2element.classList.remove("MATH-highlighted");
     MECE390CoopPlan2element.classList.add("MATH");
      return;
}      that.addLine(getLine291());
      that.addLine(getLine292());
      that.addLine(getLine314());
     MECE390CoopPlan2element.classList.remove("MATH");
     MECE390CoopPlan2element.classList.add("MATH-highlighted");
     that.addToClicked(["MECE390CoopPlan2", "MATH"]);
      MECE390CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine291());
      that.removeLine(getLine292());
      that.removeLine(getLine314());
     MECE390CoopPlan2element.classList.remove("MATH-highlighted");
     MECE390CoopPlan2element.classList.add("MATH");
     that.removeFromClicked("MECE390CoopPlan2");
      MECE390CoopPlan2flag=false
  }
};
$scope.ComplementaryElectiveCoopPlan20Listener = function () {
  var ComplementaryElectiveCoopPlan20element = document.getElementById("ComplementaryElectiveCoopPlan20");
 if (!ComplementaryElectiveCoopPlan20flag) {
     if (ComplementaryElectiveCoopPlan20element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlan20element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan20element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlan20element.classList.remove("COMP");
     ComplementaryElectiveCoopPlan20element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlan20", "COMP"]);
      ComplementaryElectiveCoopPlan20flag=true
  }
 else {
     ComplementaryElectiveCoopPlan20element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan20element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlan20");
      ComplementaryElectiveCoopPlan20flag=false
  }
};
$scope.WKEXP904CoopPlan2Listener = function () {
  var WKEXP904CoopPlan2element = document.getElementById("WKEXP904CoopPlan2");
 if (!WKEXP904CoopPlan2flag) {
     if (WKEXP904CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP904CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP904CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine293());
      that.addLine(getLine309());
     WKEXP904CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP904CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP904CoopPlan2", "ENGINEERINGPROFESSION"]);
      WKEXP904CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine293());
      that.removeLine(getLine309());
     WKEXP904CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP904CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP904CoopPlan2");
      WKEXP904CoopPlan2flag=false
  }
};
$scope.MECE403CoopPlan2Listener = function () {
  var MECE403CoopPlan2element = document.getElementById("MECE403CoopPlan2");
 if (!MECE403CoopPlan2flag) {
     if (MECE403CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE403CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine294());
      that.addLine(getLine295());
      that.addLine(getLine296());
      that.addLine(getLine297());
     MECE403CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE403CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE403CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE403CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine294());
      that.removeLine(getLine295());
      that.removeLine(getLine296());
      that.removeLine(getLine297());
     MECE403CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE403CoopPlan2");
      MECE403CoopPlan2flag=false
  }
};
$scope.MECE451CoopPlan2Listener = function () {
  var MECE451CoopPlan2element = document.getElementById("MECE451CoopPlan2");
 if (!MECE451CoopPlan2flag) {
     if (MECE451CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE451CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine298());
      that.addLine(getLine299());
     MECE451CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE451CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE451CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE451CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine298());
      that.removeLine(getLine299());
     MECE451CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE451CoopPlan2");
      MECE451CoopPlan2flag=false
  }
};
$scope.MECE460CoopPlan2Listener = function () {
  var MECE460CoopPlan2element = document.getElementById("MECE460CoopPlan2");
 if (!MECE460CoopPlan2flag) {
     if (MECE460CoopPlan2element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE460CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460CoopPlan2element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine300());
      that.addLine(getLine301());
      that.addLine(getLine302());
      that.addLine(getLine303());
      that.addLine(getLine304());
      that.addLine(getLine305());
      that.addLine(getLine306());
      that.addLine(getLine307());
      that.addLine(getLine308());
     MECE460CoopPlan2element.classList.remove("ENGINEERINGDESIGN");
     MECE460CoopPlan2element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE460CoopPlan2", "ENGINEERINGDESIGN"]);
      MECE460CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine300());
      that.removeLine(getLine301());
      that.removeLine(getLine302());
      that.removeLine(getLine303());
      that.removeLine(getLine304());
      that.removeLine(getLine305());
      that.removeLine(getLine306());
      that.removeLine(getLine307());
      that.removeLine(getLine308());
     MECE460CoopPlan2element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460CoopPlan2element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE460CoopPlan2");
      MECE460CoopPlan2flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan20Listener = function () {
  var ProgramTechnicalElectiveCoopPlan20element = document.getElementById("ProgramTechnicalElectiveCoopPlan20");
 if (!ProgramTechnicalElectiveCoopPlan20flag) {
     if (ProgramTechnicalElectiveCoopPlan20element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan20element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan20element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan20element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan20element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan20", "PROG"]);
      ProgramTechnicalElectiveCoopPlan20flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan20element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan20element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan20");
      ProgramTechnicalElectiveCoopPlan20flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan21Listener = function () {
  var ProgramTechnicalElectiveCoopPlan21element = document.getElementById("ProgramTechnicalElectiveCoopPlan21");
 if (!ProgramTechnicalElectiveCoopPlan21flag) {
     if (ProgramTechnicalElectiveCoopPlan21element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan21element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan21element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan21element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan21element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan21", "PROG"]);
      ProgramTechnicalElectiveCoopPlan21flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan21element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan21element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan21");
      ProgramTechnicalElectiveCoopPlan21flag=false
  }
};
$scope.ITSElectiveCoopPlan20Listener = function () {
  var ITSElectiveCoopPlan20element = document.getElementById("ITSElectiveCoopPlan20");
 if (!ITSElectiveCoopPlan20flag) {
     if (ITSElectiveCoopPlan20element.classList.contains("ITS-highlighted")) { 
     ITSElectiveCoopPlan20element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan20element.classList.add("ITS");
      return;
}     ITSElectiveCoopPlan20element.classList.remove("ITS");
     ITSElectiveCoopPlan20element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveCoopPlan20", "ITS"]);
      ITSElectiveCoopPlan20flag=true
  }
 else {
     ITSElectiveCoopPlan20element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan20element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveCoopPlan20");
      ITSElectiveCoopPlan20flag=false
  }
};
$scope.WKEXP905CoopPlan2Listener = function () {
  var WKEXP905CoopPlan2element = document.getElementById("WKEXP905CoopPlan2");
 if (!WKEXP905CoopPlan2flag) {
     if (WKEXP905CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP905CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP905CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine309());
     WKEXP905CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP905CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP905CoopPlan2", "ENGINEERINGPROFESSION"]);
      WKEXP905CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine309());
     WKEXP905CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP905CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP905CoopPlan2");
      WKEXP905CoopPlan2flag=false
  }
};
$scope.CHE448CoopPlan2Listener = function () {
  var CHE448CoopPlan2element = document.getElementById("CHE448CoopPlan2");
 if (!CHE448CoopPlan2flag) {
     if (CHE448CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE448CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine310());
      that.addLine(getLine311());
      that.addLine(getLine312());
      that.addLine(getLine313());
     CHE448CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     CHE448CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE448CoopPlan2", "ENGINEERINGSCIENCES"]);
      CHE448CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine310());
      that.removeLine(getLine311());
      that.removeLine(getLine312());
      that.removeLine(getLine313());
     CHE448CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE448CoopPlan2");
      CHE448CoopPlan2flag=false
  }
};
$scope.MECE420CoopPlan2Listener = function () {
  var MECE420CoopPlan2element = document.getElementById("MECE420CoopPlan2");
 if (!MECE420CoopPlan2flag) {
     if (MECE420CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE420CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine314());
     MECE420CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE420CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE420CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE420CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine314());
     MECE420CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE420CoopPlan2");
      MECE420CoopPlan2flag=false
  }
};
$scope.ENGG400CoopPlan2Listener = function () {
  var ENGG400CoopPlan2element = document.getElementById("ENGG400CoopPlan2");
 if (!ENGG400CoopPlan2flag) {
     if (ENGG400CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG400CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG400CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     ENGG400CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG400CoopPlan2", "ENGINEERINGPROFESSION"]);
      ENGG400CoopPlan2flag=true
  }
 else {
     ENGG400CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG400CoopPlan2");
      ENGG400CoopPlan2flag=false
  }
};
$scope.ENGG404CoopPlan2Listener = function () {
  var ENGG404CoopPlan2element = document.getElementById("ENGG404CoopPlan2");
 if (!ENGG404CoopPlan2flag) {
     if (ENGG404CoopPlan2element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG404CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG404CoopPlan2element.classList.remove("ENGINEERINGPROFESSION");
     ENGG404CoopPlan2element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG404CoopPlan2", "ENGINEERINGPROFESSION"]);
      ENGG404CoopPlan2flag=true
  }
 else {
     ENGG404CoopPlan2element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404CoopPlan2element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG404CoopPlan2");
      ENGG404CoopPlan2flag=false
  }
};
$scope.MECE430CoopPlan2Listener = function () {
  var MECE430CoopPlan2element = document.getElementById("MECE430CoopPlan2");
 if (!MECE430CoopPlan2flag) {
     if (MECE430CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE430CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine315());
     MECE430CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE430CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE430CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE430CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine315());
     MECE430CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE430CoopPlan2");
      MECE430CoopPlan2flag=false
  }
};
$scope.MECE480CoopPlan2Listener = function () {
  var MECE480CoopPlan2element = document.getElementById("MECE480CoopPlan2");
 if (!MECE480CoopPlan2flag) {
     if (MECE480CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE480CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine316());
      that.addLine(getLine317());
      that.addLine(getLine318());
     MECE480CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE480CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE480CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE480CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine316());
      that.removeLine(getLine317());
      that.removeLine(getLine318());
     MECE480CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE480CoopPlan2");
      MECE480CoopPlan2flag=false
  }
};
$scope.MECE463CoopPlan2Listener = function () {
  var MECE463CoopPlan2element = document.getElementById("MECE463CoopPlan2");
 if (!MECE463CoopPlan2flag) {
     if (MECE463CoopPlan2element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE463CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine319());
      that.addLine(getLine320());
      that.addLine(getLine321());
     MECE463CoopPlan2element.classList.remove("ENGINEERINGSCIENCES");
     MECE463CoopPlan2element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE463CoopPlan2", "ENGINEERINGSCIENCES"]);
      MECE463CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine319());
      that.removeLine(getLine320());
      that.removeLine(getLine321());
     MECE463CoopPlan2element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463CoopPlan2element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE463CoopPlan2");
      MECE463CoopPlan2flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan22Listener = function () {
  var ProgramTechnicalElectiveCoopPlan22element = document.getElementById("ProgramTechnicalElectiveCoopPlan22");
 if (!ProgramTechnicalElectiveCoopPlan22flag) {
     if (ProgramTechnicalElectiveCoopPlan22element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan22element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan22element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan22element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan22element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan22", "PROG"]);
      ProgramTechnicalElectiveCoopPlan22flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan22element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan22element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan22");
      ProgramTechnicalElectiveCoopPlan22flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan23Listener = function () {
  var ProgramTechnicalElectiveCoopPlan23element = document.getElementById("ProgramTechnicalElectiveCoopPlan23");
 if (!ProgramTechnicalElectiveCoopPlan23flag) {
     if (ProgramTechnicalElectiveCoopPlan23element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan23element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan23element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan23element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan23element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan23", "PROG"]);
      ProgramTechnicalElectiveCoopPlan23flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan23element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan23element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan23");
      ProgramTechnicalElectiveCoopPlan23flag=false
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
  var ENGM401CoopPlan3Biomedicalflag = false;
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
  var ComplementaryElectiveCoopPlan3Biomedical0flag = false;
  var ProgramTechnicalElectiveCoopPlan3Biomedical0flag = false;
  var WKEXP904CoopPlan3Biomedicalflag = false;
  var WKEXP905CoopPlan3Biomedicalflag = false;
  var MECE430CoopPlan3Biomedicalflag = false;
  var MECE463CoopPlan3Biomedicalflag = false;
  var ProgramTechnicalElectiveCoopPlan3Biomedical1flag = false;
  var ProgramTechnicalElectiveCoopPlan3Biomedical2flag = false;
  var ITSElectiveCoopPlan3Biomedical0flag = false;
  var CHE448CoopPlan3Biomedicalflag = false;
  var MECE420CoopPlan3Biomedicalflag = false;
  var ENGG400CoopPlan3Biomedicalflag = false;
  var MECE485CoopPlan3Biomedicalflag = false;
  var MECE403CoopPlan3Biomedicalflag = false;
  var MECE451CoopPlan3Biomedicalflag = false;
  var MECE460CoopPlan3Biomedicalflag = false;
  var PHIL386CoopPlan3Biomedicalflag = false;
$scope.CHEM103CoopPlan3BiomedicalListener = function () {
  var CHEM103CoopPlan3Biomedicalelement = document.getElementById("CHEM103CoopPlan3Biomedical");
 if (!CHEM103CoopPlan3Biomedicalflag) {
     if (CHEM103CoopPlan3Biomedicalelement.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM103CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM103CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine324());
     CHEM103CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
     CHEM103CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM103CoopPlan3Biomedical", "BASICSCIENCES"]);
      CHEM103CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine324());
     CHEM103CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM103CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM103CoopPlan3Biomedical");
      CHEM103CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG100CoopPlan3BiomedicalListener = function () {
  var ENGG100CoopPlan3Biomedicalelement = document.getElementById("ENGG100CoopPlan3Biomedical");
 if (!ENGG100CoopPlan3Biomedicalflag) {
     if (ENGG100CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG100CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG100CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG100CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG100CoopPlan3Biomedical", "ENGINEERINGPROFESSION"]);
      ENGG100CoopPlan3Biomedicalflag=true
  }
 else {
     ENGG100CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG100CoopPlan3Biomedical");
      ENGG100CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG130CoopPlan3BiomedicalListener = function () {
  var ENGG130CoopPlan3Biomedicalelement = document.getElementById("ENGG130CoopPlan3Biomedical");
 if (!ENGG130CoopPlan3Biomedicalflag) {
     if (ENGG130CoopPlan3Biomedicalelement.classList.contains("BASICSCIENCES-highlighted")) { 
     ENGG130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     ENGG130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine322());
      that.addLine(getLine327());
      that.addLine(getLine331());
      that.addLine(getLine338());
     ENGG130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
     ENGG130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENGG130CoopPlan3Biomedical", "BASICSCIENCES"]);
      ENGG130CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine322());
      that.removeLine(getLine327());
      that.removeLine(getLine331());
      that.removeLine(getLine338());
     ENGG130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     ENGG130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENGG130CoopPlan3Biomedical");
      ENGG130CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGL199CoopPlan3BiomedicalListener = function () {
  var ENGL199CoopPlan3Biomedicalelement = document.getElementById("ENGL199CoopPlan3Biomedical");
 if (!ENGL199CoopPlan3Biomedicalflag) {
     if (ENGL199CoopPlan3Biomedicalelement.classList.contains("Other-highlighted")) { 
     ENGL199CoopPlan3Biomedicalelement.classList.remove("Other-highlighted");
     ENGL199CoopPlan3Biomedicalelement.classList.add("Other");
      return;
}      that.addLine(getLine325());
     ENGL199CoopPlan3Biomedicalelement.classList.remove("Other");
     ENGL199CoopPlan3Biomedicalelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199CoopPlan3Biomedical", "Other"]);
      ENGL199CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine325());
     ENGL199CoopPlan3Biomedicalelement.classList.remove("Other-highlighted");
     ENGL199CoopPlan3Biomedicalelement.classList.add("Other");
     that.removeFromClicked("ENGL199CoopPlan3Biomedical");
      ENGL199CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH100CoopPlan3BiomedicalListener = function () {
  var MATH100CoopPlan3Biomedicalelement = document.getElementById("MATH100CoopPlan3Biomedical");
 if (!MATH100CoopPlan3Biomedicalflag) {
     if (MATH100CoopPlan3Biomedicalelement.classList.contains("MATH-highlighted")) { 
     MATH100CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH100CoopPlan3Biomedicalelement.classList.add("MATH");
      return;
}      that.addLine(getLine322());
      that.addLine(getLine323());
      that.addLine(getLine326());
      that.addLine(getLine329());
      that.addLine(getLine330());
      that.addLine(getLine335());
     MATH100CoopPlan3Biomedicalelement.classList.remove("MATH");
     MATH100CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH100CoopPlan3Biomedical", "MATH"]);
      MATH100CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine322());
      that.removeLine(getLine323());
      that.removeLine(getLine326());
      that.removeLine(getLine329());
      that.removeLine(getLine330());
      that.removeLine(getLine335());
     MATH100CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH100CoopPlan3Biomedicalelement.classList.add("MATH");
     that.removeFromClicked("MATH100CoopPlan3Biomedical");
      MATH100CoopPlan3Biomedicalflag=false
  }
};
$scope.PHYS130CoopPlan3BiomedicalListener = function () {
  var PHYS130CoopPlan3Biomedicalelement = document.getElementById("PHYS130CoopPlan3Biomedical");
 if (!PHYS130CoopPlan3Biomedicalflag) {
     if (PHYS130CoopPlan3Biomedicalelement.classList.contains("BASICSCIENCES-highlighted")) { 
     PHYS130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     PHYS130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine323());
     PHYS130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
     PHYS130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["PHYS130CoopPlan3Biomedical", "BASICSCIENCES"]);
      PHYS130CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine323());
     PHYS130CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     PHYS130CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("PHYS130CoopPlan3Biomedical");
      PHYS130CoopPlan3Biomedicalflag=false
  }
};
$scope.CHEM105CoopPlan3BiomedicalListener = function () {
  var CHEM105CoopPlan3Biomedicalelement = document.getElementById("CHEM105CoopPlan3Biomedical");
 if (!CHEM105CoopPlan3Biomedicalflag) {
     if (CHEM105CoopPlan3Biomedicalelement.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM105CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM105CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine324());
      that.addLine(getLine341());
     CHEM105CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
     CHEM105CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM105CoopPlan3Biomedical", "BASICSCIENCES"]);
      CHEM105CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine324());
      that.removeLine(getLine341());
     CHEM105CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     CHEM105CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM105CoopPlan3Biomedical");
      CHEM105CoopPlan3Biomedicalflag=false
  }
};
$scope.ENCMP100CoopPlan3BiomedicalListener = function () {
  var ENCMP100CoopPlan3Biomedicalelement = document.getElementById("ENCMP100CoopPlan3Biomedical");
 if (!ENCMP100CoopPlan3Biomedicalflag) {
     if (ENCMP100CoopPlan3Biomedicalelement.classList.contains("BASICSCIENCES-highlighted")) { 
     ENCMP100CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
      return;
}     ENCMP100CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
     ENCMP100CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENCMP100CoopPlan3Biomedical", "BASICSCIENCES"]);
      ENCMP100CoopPlan3Biomedicalflag=true
  }
 else {
     ENCMP100CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENCMP100CoopPlan3Biomedical");
      ENCMP100CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG160CoopPlan3BiomedicalListener = function () {
  var ENGG160CoopPlan3Biomedicalelement = document.getElementById("ENGG160CoopPlan3Biomedical");
 if (!ENGG160CoopPlan3Biomedicalflag) {
     if (ENGG160CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     ENGG160CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine325());
      that.addLine(getLine345());
     ENGG160CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
     ENGG160CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["ENGG160CoopPlan3Biomedical", "ENGINEERINGDESIGN"]);
      ENGG160CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine325());
      that.removeLine(getLine345());
     ENGG160CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("ENGG160CoopPlan3Biomedical");
      ENGG160CoopPlan3Biomedicalflag=false
  }
};
$scope.ENPH131CoopPlan3BiomedicalListener = function () {
  var ENPH131CoopPlan3Biomedicalelement = document.getElementById("ENPH131CoopPlan3Biomedical");
 if (!ENPH131CoopPlan3Biomedicalflag) {
     if (ENPH131CoopPlan3Biomedicalelement.classList.contains("BASICSCIENCES-highlighted")) { 
     ENPH131CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     ENPH131CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine326());
      that.addLine(getLine327());
      that.addLine(getLine328());
      that.addLine(getLine339());
      that.addLine(getLine344());
     ENPH131CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES");
     ENPH131CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENPH131CoopPlan3Biomedical", "BASICSCIENCES"]);
      ENPH131CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine326());
      that.removeLine(getLine327());
      that.removeLine(getLine328());
      that.removeLine(getLine339());
      that.removeLine(getLine344());
     ENPH131CoopPlan3Biomedicalelement.classList.remove("BASICSCIENCES-highlighted");
     ENPH131CoopPlan3Biomedicalelement.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENPH131CoopPlan3Biomedical");
      ENPH131CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH101CoopPlan3BiomedicalListener = function () {
  var MATH101CoopPlan3Biomedicalelement = document.getElementById("MATH101CoopPlan3Biomedical");
 if (!MATH101CoopPlan3Biomedicalflag) {
     if (MATH101CoopPlan3Biomedicalelement.classList.contains("MATH-highlighted")) { 
     MATH101CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH101CoopPlan3Biomedicalelement.classList.add("MATH");
      return;
}      that.addLine(getLine328());
      that.addLine(getLine329());
      that.addLine(getLine332());
      that.addLine(getLine333());
      that.addLine(getLine336());
      that.addLine(getLine337());
      that.addLine(getLine340());
      that.addLine(getLine343());
     MATH101CoopPlan3Biomedicalelement.classList.remove("MATH");
     MATH101CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH101CoopPlan3Biomedical", "MATH"]);
      MATH101CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine328());
      that.removeLine(getLine329());
      that.removeLine(getLine332());
      that.removeLine(getLine333());
      that.removeLine(getLine336());
      that.removeLine(getLine337());
      that.removeLine(getLine340());
      that.removeLine(getLine343());
     MATH101CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH101CoopPlan3Biomedicalelement.classList.add("MATH");
     that.removeFromClicked("MATH101CoopPlan3Biomedical");
      MATH101CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH102CoopPlan3BiomedicalListener = function () {
  var MATH102CoopPlan3Biomedicalelement = document.getElementById("MATH102CoopPlan3Biomedical");
 if (!MATH102CoopPlan3Biomedicalflag) {
     if (MATH102CoopPlan3Biomedicalelement.classList.contains("MATH-highlighted")) { 
     MATH102CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH102CoopPlan3Biomedicalelement.classList.add("MATH");
      return;
}      that.addLine(getLine330());
      that.addLine(getLine334());
      that.addLine(getLine355());
     MATH102CoopPlan3Biomedicalelement.classList.remove("MATH");
     MATH102CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH102CoopPlan3Biomedical", "MATH"]);
      MATH102CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine330());
      that.removeLine(getLine334());
      that.removeLine(getLine355());
     MATH102CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH102CoopPlan3Biomedicalelement.classList.add("MATH");
     that.removeFromClicked("MATH102CoopPlan3Biomedical");
      MATH102CoopPlan3Biomedicalflag=false
  }
};
$scope.CIVE270CoopPlan3BiomedicalListener = function () {
  var CIVE270CoopPlan3Biomedicalelement = document.getElementById("CIVE270CoopPlan3Biomedical");
 if (!CIVE270CoopPlan3Biomedicalflag) {
     if (CIVE270CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CIVE270CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine331());
      that.addLine(getLine332());
      that.addLine(getLine346());
      that.addLine(getLine352());
      that.addLine(getLine360());
      that.addLine(getLine373());
     CIVE270CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     CIVE270CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CIVE270CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      CIVE270CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine331());
      that.removeLine(getLine332());
      that.removeLine(getLine346());
      that.removeLine(getLine352());
      that.removeLine(getLine360());
      that.removeLine(getLine373());
     CIVE270CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CIVE270CoopPlan3Biomedical");
      CIVE270CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG299CoopPlan3BiomedicalListener = function () {
  var ENGG299CoopPlan3Biomedicalelement = document.getElementById("ENGG299CoopPlan3Biomedical");
 if (!ENGG299CoopPlan3Biomedicalflag) {
     if (ENGG299CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG299CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG299CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG299CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG299CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG299CoopPlan3Biomedical", "ENGINEERINGPROFESSION"]);
      ENGG299CoopPlan3Biomedicalflag=true
  }
 else {
     ENGG299CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG299CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG299CoopPlan3Biomedical");
      ENGG299CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH209CoopPlan3BiomedicalListener = function () {
  var MATH209CoopPlan3Biomedicalelement = document.getElementById("MATH209CoopPlan3Biomedical");
 if (!MATH209CoopPlan3Biomedicalflag) {
     if (MATH209CoopPlan3Biomedicalelement.classList.contains("MATH-highlighted")) { 
     MATH209CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH209CoopPlan3Biomedicalelement.classList.add("MATH");
      return;
}      that.addLine(getLine333());
      that.addLine(getLine334());
      that.addLine(getLine342());
      that.addLine(getLine359());
      that.addLine(getLine367());
      that.addLine(getLine385());
     MATH209CoopPlan3Biomedicalelement.classList.remove("MATH");
     MATH209CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH209CoopPlan3Biomedical", "MATH"]);
      MATH209CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine333());
      that.removeLine(getLine334());
      that.removeLine(getLine342());
      that.removeLine(getLine359());
      that.removeLine(getLine367());
      that.removeLine(getLine385());
     MATH209CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH209CoopPlan3Biomedicalelement.classList.add("MATH");
     that.removeFromClicked("MATH209CoopPlan3Biomedical");
      MATH209CoopPlan3Biomedicalflag=false
  }
};
$scope.STAT235CoopPlan3BiomedicalListener = function () {
  var STAT235CoopPlan3Biomedicalelement = document.getElementById("STAT235CoopPlan3Biomedical");
 if (!STAT235CoopPlan3Biomedicalflag) {
     if (STAT235CoopPlan3Biomedicalelement.classList.contains("MATH-highlighted")) { 
     STAT235CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     STAT235CoopPlan3Biomedicalelement.classList.add("MATH");
      return;
}      that.addLine(getLine335());
      that.addLine(getLine336());
      that.addLine(getLine362());
     STAT235CoopPlan3Biomedicalelement.classList.remove("MATH");
     STAT235CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
     that.addToClicked(["STAT235CoopPlan3Biomedical", "MATH"]);
      STAT235CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine335());
      that.removeLine(getLine336());
      that.removeLine(getLine362());
     STAT235CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     STAT235CoopPlan3Biomedicalelement.classList.add("MATH");
     that.removeFromClicked("STAT235CoopPlan3Biomedical");
      STAT235CoopPlan3Biomedicalflag=false
  }
};
$scope.CHE243CoopPlan3BiomedicalListener = function () {
  var CHE243CoopPlan3Biomedicalelement = document.getElementById("CHE243CoopPlan3Biomedical");
 if (!CHE243CoopPlan3Biomedicalflag) {
     if (CHE243CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE243CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine337());
      that.addLine(getLine348());
      that.addLine(getLine368());
      that.addLine(getLine370());
     CHE243CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     CHE243CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE243CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      CHE243CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine337());
      that.removeLine(getLine348());
      that.removeLine(getLine368());
      that.removeLine(getLine370());
     CHE243CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE243CoopPlan3Biomedical");
      CHE243CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE200CoopPlan3BiomedicalListener = function () {
  var MECE200CoopPlan3Biomedicalelement = document.getElementById("MECE200CoopPlan3Biomedical");
 if (!MECE200CoopPlan3Biomedicalflag) {
     if (MECE200CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     MECE200CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine398());
     MECE200CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
     MECE200CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["MECE200CoopPlan3Biomedical", "ENGINEERINGPROFESSION"]);
      MECE200CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine398());
     MECE200CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("MECE200CoopPlan3Biomedical");
      MECE200CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE250CoopPlan3BiomedicalListener = function () {
  var MECE250CoopPlan3Biomedicalelement = document.getElementById("MECE250CoopPlan3Biomedical");
 if (!MECE250CoopPlan3Biomedicalflag) {
     if (MECE250CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE250CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine338());
      that.addLine(getLine339());
      that.addLine(getLine340());
      that.addLine(getLine354());
      that.addLine(getLine366());
      that.addLine(getLine396());
     MECE250CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE250CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE250CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE250CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine338());
      that.removeLine(getLine339());
      that.removeLine(getLine340());
      that.removeLine(getLine354());
      that.removeLine(getLine366());
      that.removeLine(getLine396());
     MECE250CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE250CoopPlan3Biomedical");
      MECE250CoopPlan3Biomedicalflag=false
  }
};
$scope.ECE209CoopPlan3BiomedicalListener = function () {
  var ECE209CoopPlan3Biomedicalelement = document.getElementById("ECE209CoopPlan3Biomedical");
 if (!ECE209CoopPlan3Biomedicalflag) {
     if (ECE209CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     ECE209CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine361());
     ECE209CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     ECE209CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["ECE209CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      ECE209CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine361());
     ECE209CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("ECE209CoopPlan3Biomedical");
      ECE209CoopPlan3Biomedicalflag=false
  }
};
$scope.MATE202CoopPlan3BiomedicalListener = function () {
  var MATE202CoopPlan3Biomedicalelement = document.getElementById("MATE202CoopPlan3Biomedical");
 if (!MATE202CoopPlan3Biomedicalflag) {
     if (MATE202CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MATE202CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine341());
      that.addLine(getLine351());
     MATE202CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MATE202CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MATE202CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MATE202CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine341());
      that.removeLine(getLine351());
     MATE202CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MATE202CoopPlan3Biomedical");
      MATE202CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH201CoopPlan3BiomedicalListener = function () {
  var MATH201CoopPlan3Biomedicalelement = document.getElementById("MATH201CoopPlan3Biomedical");
 if (!MATH201CoopPlan3Biomedicalflag) {
     if (MATH201CoopPlan3Biomedicalelement.classList.contains("MATH-highlighted")) { 
     MATH201CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH201CoopPlan3Biomedicalelement.classList.add("MATH");
      return;
}      that.addLine(getLine342());
      that.addLine(getLine356());
      that.addLine(getLine358());
      that.addLine(getLine384());
     MATH201CoopPlan3Biomedicalelement.classList.remove("MATH");
     MATH201CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH201CoopPlan3Biomedical", "MATH"]);
      MATH201CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine342());
      that.removeLine(getLine356());
      that.removeLine(getLine358());
      that.removeLine(getLine384());
     MATH201CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH201CoopPlan3Biomedicalelement.classList.add("MATH");
     that.removeFromClicked("MATH201CoopPlan3Biomedical");
      MATH201CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE230CoopPlan3BiomedicalListener = function () {
  var MECE230CoopPlan3Biomedicalelement = document.getElementById("MECE230CoopPlan3Biomedical");
 if (!MECE230CoopPlan3Biomedicalflag) {
     if (MECE230CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE230CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine343());
      that.addLine(getLine344());
      that.addLine(getLine365());
      that.addLine(getLine369());
     MECE230CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE230CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE230CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE230CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine343());
      that.removeLine(getLine344());
      that.removeLine(getLine365());
      that.removeLine(getLine369());
     MECE230CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE230CoopPlan3Biomedical");
      MECE230CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE260CoopPlan3BiomedicalListener = function () {
  var MECE260CoopPlan3Biomedicalelement = document.getElementById("MECE260CoopPlan3Biomedical");
 if (!MECE260CoopPlan3Biomedicalflag) {
     if (MECE260CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE260CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine345());
      that.addLine(getLine346());
      that.addLine(getLine347());
      that.addLine(getLine349());
     MECE260CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
     MECE260CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE260CoopPlan3Biomedical", "ENGINEERINGDESIGN"]);
      MECE260CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine345());
      that.removeLine(getLine346());
      that.removeLine(getLine347());
      that.removeLine(getLine349());
     MECE260CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE260CoopPlan3Biomedical");
      MECE260CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE265CoopPlan3BiomedicalListener = function () {
  var MECE265CoopPlan3Biomedicalelement = document.getElementById("MECE265CoopPlan3Biomedical");
 if (!MECE265CoopPlan3Biomedicalflag) {
     if (MECE265CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE265CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine347());
      that.addLine(getLine350());
     MECE265CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
     MECE265CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE265CoopPlan3Biomedical", "ENGINEERINGDESIGN"]);
      MECE265CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine347());
      that.removeLine(getLine350());
     MECE265CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE265CoopPlan3Biomedical");
      MECE265CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP902CoopPlan3BiomedicalListener = function () {
  var WKEXP902CoopPlan3Biomedicalelement = document.getElementById("WKEXP902CoopPlan3Biomedical");
 if (!WKEXP902CoopPlan3Biomedicalflag) {
     if (WKEXP902CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP902CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP902CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine357());
     WKEXP902CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
     WKEXP902CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP902CoopPlan3Biomedical", "ENGINEERINGPROFESSION"]);
      WKEXP902CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine357());
     WKEXP902CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP902CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP902CoopPlan3Biomedical");
      WKEXP902CoopPlan3Biomedicalflag=false
  }
};
$scope.BME320CoopPlan3BiomedicalListener = function () {
  var BME320CoopPlan3Biomedicalelement = document.getElementById("BME320CoopPlan3Biomedical");
 if (!BME320CoopPlan3Biomedicalflag) {
     if (BME320CoopPlan3Biomedicalelement.classList.contains("course-highlighted")) { 
     BME320CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     BME320CoopPlan3Biomedicalelement.classList.add("course");
      return;
}      that.addLine(getLine374());
      that.addLine(getLine389());
     BME320CoopPlan3Biomedicalelement.classList.remove("course");
     BME320CoopPlan3Biomedicalelement.classList.add("course-highlighted");
     that.addToClicked(["BME320CoopPlan3Biomedical", "course"]);
      BME320CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine374());
      that.removeLine(getLine389());
     BME320CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     BME320CoopPlan3Biomedicalelement.classList.add("course");
     that.removeFromClicked("BME320CoopPlan3Biomedical");
      BME320CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGM310CoopPlan3BiomedicalListener = function () {
  var ENGM310CoopPlan3Biomedicalelement = document.getElementById("ENGM310CoopPlan3Biomedical");
 if (!ENGM310CoopPlan3Biomedicalflag) {
     if (ENGM310CoopPlan3Biomedicalelement.classList.contains("Other-highlighted")) { 
     ENGM310CoopPlan3Biomedicalelement.classList.remove("Other-highlighted");
     ENGM310CoopPlan3Biomedicalelement.classList.add("Other");
      return;
}      that.addLine(getLine405());
     ENGM310CoopPlan3Biomedicalelement.classList.remove("Other");
     ENGM310CoopPlan3Biomedicalelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310CoopPlan3Biomedical", "Other"]);
      ENGM310CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine405());
     ENGM310CoopPlan3Biomedicalelement.classList.remove("Other-highlighted");
     ENGM310CoopPlan3Biomedicalelement.classList.add("Other");
     that.removeFromClicked("ENGM310CoopPlan3Biomedical");
      ENGM310CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGM401CoopPlan3BiomedicalListener = function () {
  var ENGM401CoopPlan3Biomedicalelement = document.getElementById("ENGM401CoopPlan3Biomedical");
 if (!ENGM401CoopPlan3Biomedicalflag) {
     if (ENGM401CoopPlan3Biomedicalelement.classList.contains("Other-highlighted")) { 
     ENGM401CoopPlan3Biomedicalelement.classList.remove("Other-highlighted");
     ENGM401CoopPlan3Biomedicalelement.classList.add("Other");
      return;
}      that.addLine(getLine406());
     ENGM401CoopPlan3Biomedicalelement.classList.remove("Other");
     ENGM401CoopPlan3Biomedicalelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401CoopPlan3Biomedical", "Other"]);
      ENGM401CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine406());
     ENGM401CoopPlan3Biomedicalelement.classList.remove("Other-highlighted");
     ENGM401CoopPlan3Biomedicalelement.classList.add("Other");
     that.removeFromClicked("ENGM401CoopPlan3Biomedical");
      ENGM401CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE340CoopPlan3BiomedicalListener = function () {
  var MECE340CoopPlan3Biomedicalelement = document.getElementById("MECE340CoopPlan3Biomedical");
 if (!MECE340CoopPlan3Biomedicalflag) {
     if (MECE340CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE340CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine348());
      that.addLine(getLine382());
      that.addLine(getLine394());
      that.addLine(getLine400());
     MECE340CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE340CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE340CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE340CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine348());
      that.removeLine(getLine382());
      that.removeLine(getLine394());
      that.removeLine(getLine400());
     MECE340CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE340CoopPlan3Biomedical");
      MECE340CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE360CoopPlan3BiomedicalListener = function () {
  var MECE360CoopPlan3Biomedicalelement = document.getElementById("MECE360CoopPlan3Biomedical");
 if (!MECE360CoopPlan3Biomedicalflag) {
     if (MECE360CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE360CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine349());
      that.addLine(getLine350());
      that.addLine(getLine351());
      that.addLine(getLine352());
      that.addLine(getLine353());
      that.addLine(getLine376());
      that.addLine(getLine395());
      that.addLine(getLine401());
     MECE360CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
     MECE360CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE360CoopPlan3Biomedical", "ENGINEERINGDESIGN"]);
      MECE360CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine349());
      that.removeLine(getLine350());
      that.removeLine(getLine351());
      that.removeLine(getLine352());
      that.removeLine(getLine353());
      that.removeLine(getLine376());
      that.removeLine(getLine395());
      that.removeLine(getLine401());
     MECE360CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE360CoopPlan3Biomedical");
      MECE360CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE362CoopPlan3BiomedicalListener = function () {
  var MECE362CoopPlan3Biomedicalelement = document.getElementById("MECE362CoopPlan3Biomedical");
 if (!MECE362CoopPlan3Biomedicalflag) {
     if (MECE362CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE362CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine353());
      that.addLine(getLine354());
      that.addLine(getLine402());
     MECE362CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
     MECE362CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE362CoopPlan3Biomedical", "ENGINEERINGDESIGN"]);
      MECE362CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine353());
      that.removeLine(getLine354());
      that.removeLine(getLine402());
     MECE362CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE362CoopPlan3Biomedical");
      MECE362CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE390CoopPlan3BiomedicalListener = function () {
  var MECE390CoopPlan3Biomedicalelement = document.getElementById("MECE390CoopPlan3Biomedical");
 if (!MECE390CoopPlan3Biomedicalflag) {
     if (MECE390CoopPlan3Biomedicalelement.classList.contains("MATH-highlighted")) { 
     MECE390CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MECE390CoopPlan3Biomedicalelement.classList.add("MATH");
      return;
}      that.addLine(getLine355());
      that.addLine(getLine356());
      that.addLine(getLine377());
      that.addLine(getLine388());
     MECE390CoopPlan3Biomedicalelement.classList.remove("MATH");
     MECE390CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
     that.addToClicked(["MECE390CoopPlan3Biomedical", "MATH"]);
      MECE390CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine355());
      that.removeLine(getLine356());
      that.removeLine(getLine377());
      that.removeLine(getLine388());
     MECE390CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MECE390CoopPlan3Biomedicalelement.classList.add("MATH");
     that.removeFromClicked("MECE390CoopPlan3Biomedical");
      MECE390CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP903CoopPlan3BiomedicalListener = function () {
  var WKEXP903CoopPlan3Biomedicalelement = document.getElementById("WKEXP903CoopPlan3Biomedical");
 if (!WKEXP903CoopPlan3Biomedicalflag) {
     if (WKEXP903CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP903CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP903CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine357());
      that.addLine(getLine378());
     WKEXP903CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
     WKEXP903CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP903CoopPlan3Biomedical", "ENGINEERINGPROFESSION"]);
      WKEXP903CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine357());
      that.removeLine(getLine378());
     WKEXP903CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP903CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP903CoopPlan3Biomedical");
      WKEXP903CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH300CoopPlan3BiomedicalListener = function () {
  var MATH300CoopPlan3Biomedicalelement = document.getElementById("MATH300CoopPlan3Biomedical");
 if (!MATH300CoopPlan3Biomedicalflag) {
     if (MATH300CoopPlan3Biomedicalelement.classList.contains("MATH-highlighted")) { 
     MATH300CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH300CoopPlan3Biomedicalelement.classList.add("MATH");
      return;
}      that.addLine(getLine358());
      that.addLine(getLine359());
      that.addLine(getLine371());
      that.addLine(getLine375());
      that.addLine(getLine397());
     MATH300CoopPlan3Biomedicalelement.classList.remove("MATH");
     MATH300CoopPlan3Biomedicalelement.classList.add("MATH-highlighted");
     that.addToClicked(["MATH300CoopPlan3Biomedical", "MATH"]);
      MATH300CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine358());
      that.removeLine(getLine359());
      that.removeLine(getLine371());
      that.removeLine(getLine375());
      that.removeLine(getLine397());
     MATH300CoopPlan3Biomedicalelement.classList.remove("MATH-highlighted");
     MATH300CoopPlan3Biomedicalelement.classList.add("MATH");
     that.removeFromClicked("MATH300CoopPlan3Biomedical");
      MATH300CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE300CoopPlan3BiomedicalListener = function () {
  var MECE300CoopPlan3Biomedicalelement = document.getElementById("MECE300CoopPlan3Biomedical");
 if (!MECE300CoopPlan3Biomedicalflag) {
     if (MECE300CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE300CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine360());
      that.addLine(getLine361());
      that.addLine(getLine362());
      that.addLine(getLine363());
      that.addLine(getLine364());
      that.addLine(getLine392());
     MECE300CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE300CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE300CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE300CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine360());
      that.removeLine(getLine361());
      that.removeLine(getLine362());
      that.removeLine(getLine363());
      that.removeLine(getLine364());
      that.removeLine(getLine392());
     MECE300CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE300CoopPlan3Biomedical");
      MECE300CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE301CoopPlan3BiomedicalListener = function () {
  var MECE301CoopPlan3Biomedicalelement = document.getElementById("MECE301CoopPlan3Biomedical");
 if (!MECE301CoopPlan3Biomedicalflag) {
     if (MECE301CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE301CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine364());
      that.addLine(getLine393());
     MECE301CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE301CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE301CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE301CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine364());
      that.removeLine(getLine393());
     MECE301CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE301CoopPlan3Biomedical");
      MECE301CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE331CoopPlan3BiomedicalListener = function () {
  var MECE331CoopPlan3Biomedicalelement = document.getElementById("MECE331CoopPlan3Biomedical");
 if (!MECE331CoopPlan3Biomedicalflag) {
     if (MECE331CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE331CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine363());
      that.addLine(getLine365());
      that.addLine(getLine366());
      that.addLine(getLine367());
      that.addLine(getLine368());
      that.addLine(getLine372());
      that.addLine(getLine380());
      that.addLine(getLine381());
      that.addLine(getLine386());
      that.addLine(getLine391());
      that.addLine(getLine399());
     MECE331CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE331CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE331CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE331CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine363());
      that.removeLine(getLine365());
      that.removeLine(getLine366());
      that.removeLine(getLine367());
      that.removeLine(getLine368());
      that.removeLine(getLine372());
      that.removeLine(getLine380());
      that.removeLine(getLine381());
      that.removeLine(getLine386());
      that.removeLine(getLine391());
      that.removeLine(getLine399());
     MECE331CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE331CoopPlan3Biomedical");
      MECE331CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE371CoopPlan3BiomedicalListener = function () {
  var MECE371CoopPlan3Biomedicalelement = document.getElementById("MECE371CoopPlan3Biomedical");
 if (!MECE371CoopPlan3Biomedicalflag) {
     if (MECE371CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE371CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine369());
      that.addLine(getLine370());
      that.addLine(getLine371());
      that.addLine(getLine372());
      that.addLine(getLine383());
      that.addLine(getLine387());
      that.addLine(getLine403());
     MECE371CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE371CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE371CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE371CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine369());
      that.removeLine(getLine370());
      that.removeLine(getLine371());
      that.removeLine(getLine372());
      that.removeLine(getLine383());
      that.removeLine(getLine387());
      that.removeLine(getLine403());
     MECE371CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE371CoopPlan3Biomedical");
      MECE371CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE380CoopPlan3BiomedicalListener = function () {
  var MECE380CoopPlan3Biomedicalelement = document.getElementById("MECE380CoopPlan3Biomedical");
 if (!MECE380CoopPlan3Biomedicalflag) {
     if (MECE380CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE380CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine373());
      that.addLine(getLine404());
     MECE380CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE380CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE380CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE380CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine373());
      that.removeLine(getLine404());
     MECE380CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE380CoopPlan3Biomedical");
      MECE380CoopPlan3Biomedicalflag=false
  }
};
$scope.BME321CoopPlan3BiomedicalListener = function () {
  var BME321CoopPlan3Biomedicalelement = document.getElementById("BME321CoopPlan3Biomedical");
 if (!BME321CoopPlan3Biomedicalflag) {
     if (BME321CoopPlan3Biomedicalelement.classList.contains("course-highlighted")) { 
     BME321CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     BME321CoopPlan3Biomedicalelement.classList.add("course");
      return;
}      that.addLine(getLine374());
      that.addLine(getLine390());
     BME321CoopPlan3Biomedicalelement.classList.remove("course");
     BME321CoopPlan3Biomedicalelement.classList.add("course-highlighted");
     that.addToClicked(["BME321CoopPlan3Biomedical", "course"]);
      BME321CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine374());
      that.removeLine(getLine390());
     BME321CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     BME321CoopPlan3Biomedicalelement.classList.add("course");
     that.removeFromClicked("BME321CoopPlan3Biomedical");
      BME321CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG404CoopPlan3BiomedicalListener = function () {
  var ENGG404CoopPlan3Biomedicalelement = document.getElementById("ENGG404CoopPlan3Biomedical");
 if (!ENGG404CoopPlan3Biomedicalflag) {
     if (ENGG404CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG404CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG404CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG404CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG404CoopPlan3Biomedical", "ENGINEERINGPROFESSION"]);
      ENGG404CoopPlan3Biomedicalflag=true
  }
 else {
     ENGG404CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG404CoopPlan3Biomedical");
      ENGG404CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE563CoopPlan3BiomedicalListener = function () {
  var MECE563CoopPlan3Biomedicalelement = document.getElementById("MECE563CoopPlan3Biomedical");
 if (!MECE563CoopPlan3Biomedicalflag) {
     if (MECE563CoopPlan3Biomedicalelement.classList.contains("course-highlighted")) { 
     MECE563CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE563CoopPlan3Biomedicalelement.classList.add("course");
      return;
}      that.addLine(getLine375());
      that.addLine(getLine376());
      that.addLine(getLine377());
     MECE563CoopPlan3Biomedicalelement.classList.remove("course");
     MECE563CoopPlan3Biomedicalelement.classList.add("course-highlighted");
     that.addToClicked(["MECE563CoopPlan3Biomedical", "course"]);
      MECE563CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine375());
      that.removeLine(getLine376());
      that.removeLine(getLine377());
     MECE563CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE563CoopPlan3Biomedicalelement.classList.add("course");
     that.removeFromClicked("MECE563CoopPlan3Biomedical");
      MECE563CoopPlan3Biomedicalflag=false
  }
};
$scope.STAT337CoopPlan3BiomedicalListener = function () {
  var STAT337CoopPlan3Biomedicalelement = document.getElementById("STAT337CoopPlan3Biomedical");
 if (!STAT337CoopPlan3Biomedicalflag) {
     if (STAT337CoopPlan3Biomedicalelement.classList.contains("course-highlighted")) { 
     STAT337CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     STAT337CoopPlan3Biomedicalelement.classList.add("course");
      return;
}     STAT337CoopPlan3Biomedicalelement.classList.remove("course");
     STAT337CoopPlan3Biomedicalelement.classList.add("course-highlighted");
     that.addToClicked(["STAT337CoopPlan3Biomedical", "course"]);
      STAT337CoopPlan3Biomedicalflag=true
  }
 else {
     STAT337CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     STAT337CoopPlan3Biomedicalelement.classList.add("course");
     that.removeFromClicked("STAT337CoopPlan3Biomedical");
      STAT337CoopPlan3Biomedicalflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan3Biomedical0Listener = function () {
  var ComplementaryElectiveCoopPlan3Biomedical0element = document.getElementById("ComplementaryElectiveCoopPlan3Biomedical0");
 if (!ComplementaryElectiveCoopPlan3Biomedical0flag) {
     if (ComplementaryElectiveCoopPlan3Biomedical0element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlan3Biomedical0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan3Biomedical0element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlan3Biomedical0element.classList.remove("COMP");
     ComplementaryElectiveCoopPlan3Biomedical0element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlan3Biomedical0", "COMP"]);
      ComplementaryElectiveCoopPlan3Biomedical0flag=true
  }
 else {
     ComplementaryElectiveCoopPlan3Biomedical0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan3Biomedical0element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlan3Biomedical0");
      ComplementaryElectiveCoopPlan3Biomedical0flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan3Biomedical0Listener = function () {
  var ProgramTechnicalElectiveCoopPlan3Biomedical0element = document.getElementById("ProgramTechnicalElectiveCoopPlan3Biomedical0");
 if (!ProgramTechnicalElectiveCoopPlan3Biomedical0flag) {
     if (ProgramTechnicalElectiveCoopPlan3Biomedical0element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan3Biomedical0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan3Biomedical0element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan3Biomedical0element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan3Biomedical0element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan3Biomedical0", "PROG"]);
      ProgramTechnicalElectiveCoopPlan3Biomedical0flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan3Biomedical0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan3Biomedical0element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan3Biomedical0");
      ProgramTechnicalElectiveCoopPlan3Biomedical0flag=false
  }
};
$scope.WKEXP904CoopPlan3BiomedicalListener = function () {
  var WKEXP904CoopPlan3Biomedicalelement = document.getElementById("WKEXP904CoopPlan3Biomedical");
 if (!WKEXP904CoopPlan3Biomedicalflag) {
     if (WKEXP904CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP904CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP904CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine378());
      that.addLine(getLine379());
     WKEXP904CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
     WKEXP904CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP904CoopPlan3Biomedical", "ENGINEERINGPROFESSION"]);
      WKEXP904CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine378());
      that.removeLine(getLine379());
     WKEXP904CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP904CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP904CoopPlan3Biomedical");
      WKEXP904CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP905CoopPlan3BiomedicalListener = function () {
  var WKEXP905CoopPlan3Biomedicalelement = document.getElementById("WKEXP905CoopPlan3Biomedical");
 if (!WKEXP905CoopPlan3Biomedicalflag) {
     if (WKEXP905CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP905CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP905CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine379());
     WKEXP905CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
     WKEXP905CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP905CoopPlan3Biomedical", "ENGINEERINGPROFESSION"]);
      WKEXP905CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine379());
     WKEXP905CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP905CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP905CoopPlan3Biomedical");
      WKEXP905CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE430CoopPlan3BiomedicalListener = function () {
  var MECE430CoopPlan3Biomedicalelement = document.getElementById("MECE430CoopPlan3Biomedical");
 if (!MECE430CoopPlan3Biomedicalflag) {
     if (MECE430CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE430CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine380());
     MECE430CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE430CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE430CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE430CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine380());
     MECE430CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE430CoopPlan3Biomedical");
      MECE430CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE463CoopPlan3BiomedicalListener = function () {
  var MECE463CoopPlan3Biomedicalelement = document.getElementById("MECE463CoopPlan3Biomedical");
 if (!MECE463CoopPlan3Biomedicalflag) {
     if (MECE463CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE463CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine381());
      that.addLine(getLine382());
      that.addLine(getLine383());
     MECE463CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE463CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE463CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE463CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine381());
      that.removeLine(getLine382());
      that.removeLine(getLine383());
     MECE463CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE463CoopPlan3Biomedical");
      MECE463CoopPlan3Biomedicalflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan3Biomedical1Listener = function () {
  var ProgramTechnicalElectiveCoopPlan3Biomedical1element = document.getElementById("ProgramTechnicalElectiveCoopPlan3Biomedical1");
 if (!ProgramTechnicalElectiveCoopPlan3Biomedical1flag) {
     if (ProgramTechnicalElectiveCoopPlan3Biomedical1element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan3Biomedical1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan3Biomedical1element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan3Biomedical1element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan3Biomedical1element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan3Biomedical1", "PROG"]);
      ProgramTechnicalElectiveCoopPlan3Biomedical1flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan3Biomedical1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan3Biomedical1element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan3Biomedical1");
      ProgramTechnicalElectiveCoopPlan3Biomedical1flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan3Biomedical2Listener = function () {
  var ProgramTechnicalElectiveCoopPlan3Biomedical2element = document.getElementById("ProgramTechnicalElectiveCoopPlan3Biomedical2");
 if (!ProgramTechnicalElectiveCoopPlan3Biomedical2flag) {
     if (ProgramTechnicalElectiveCoopPlan3Biomedical2element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan3Biomedical2element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan3Biomedical2element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan3Biomedical2element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan3Biomedical2element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan3Biomedical2", "PROG"]);
      ProgramTechnicalElectiveCoopPlan3Biomedical2flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan3Biomedical2element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan3Biomedical2element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan3Biomedical2");
      ProgramTechnicalElectiveCoopPlan3Biomedical2flag=false
  }
};
$scope.ITSElectiveCoopPlan3Biomedical0Listener = function () {
  var ITSElectiveCoopPlan3Biomedical0element = document.getElementById("ITSElectiveCoopPlan3Biomedical0");
 if (!ITSElectiveCoopPlan3Biomedical0flag) {
     if (ITSElectiveCoopPlan3Biomedical0element.classList.contains("ITS-highlighted")) { 
     ITSElectiveCoopPlan3Biomedical0element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan3Biomedical0element.classList.add("ITS");
      return;
}     ITSElectiveCoopPlan3Biomedical0element.classList.remove("ITS");
     ITSElectiveCoopPlan3Biomedical0element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveCoopPlan3Biomedical0", "ITS"]);
      ITSElectiveCoopPlan3Biomedical0flag=true
  }
 else {
     ITSElectiveCoopPlan3Biomedical0element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan3Biomedical0element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveCoopPlan3Biomedical0");
      ITSElectiveCoopPlan3Biomedical0flag=false
  }
};
$scope.CHE448CoopPlan3BiomedicalListener = function () {
  var CHE448CoopPlan3Biomedicalelement = document.getElementById("CHE448CoopPlan3Biomedical");
 if (!CHE448CoopPlan3Biomedicalflag) {
     if (CHE448CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE448CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine384());
      that.addLine(getLine385());
      that.addLine(getLine386());
      that.addLine(getLine387());
     CHE448CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     CHE448CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE448CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      CHE448CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine384());
      that.removeLine(getLine385());
      that.removeLine(getLine386());
      that.removeLine(getLine387());
     CHE448CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE448CoopPlan3Biomedical");
      CHE448CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE420CoopPlan3BiomedicalListener = function () {
  var MECE420CoopPlan3Biomedicalelement = document.getElementById("MECE420CoopPlan3Biomedical");
 if (!MECE420CoopPlan3Biomedicalflag) {
     if (MECE420CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE420CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine388());
     MECE420CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE420CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE420CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE420CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine388());
     MECE420CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE420CoopPlan3Biomedical");
      MECE420CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG400CoopPlan3BiomedicalListener = function () {
  var ENGG400CoopPlan3Biomedicalelement = document.getElementById("ENGG400CoopPlan3Biomedical");
 if (!ENGG400CoopPlan3Biomedicalflag) {
     if (ENGG400CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG400CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG400CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION");
     ENGG400CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG400CoopPlan3Biomedical", "ENGINEERINGPROFESSION"]);
      ENGG400CoopPlan3Biomedicalflag=true
  }
 else {
     ENGG400CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400CoopPlan3Biomedicalelement.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG400CoopPlan3Biomedical");
      ENGG400CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE485CoopPlan3BiomedicalListener = function () {
  var MECE485CoopPlan3Biomedicalelement = document.getElementById("MECE485CoopPlan3Biomedical");
 if (!MECE485CoopPlan3Biomedicalflag) {
     if (MECE485CoopPlan3Biomedicalelement.classList.contains("course-highlighted")) { 
     MECE485CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE485CoopPlan3Biomedicalelement.classList.add("course");
      return;
}      that.addLine(getLine389());
      that.addLine(getLine390());
      that.addLine(getLine391());
     MECE485CoopPlan3Biomedicalelement.classList.remove("course");
     MECE485CoopPlan3Biomedicalelement.classList.add("course-highlighted");
     that.addToClicked(["MECE485CoopPlan3Biomedical", "course"]);
      MECE485CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine389());
      that.removeLine(getLine390());
      that.removeLine(getLine391());
     MECE485CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     MECE485CoopPlan3Biomedicalelement.classList.add("course");
     that.removeFromClicked("MECE485CoopPlan3Biomedical");
      MECE485CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE403CoopPlan3BiomedicalListener = function () {
  var MECE403CoopPlan3Biomedicalelement = document.getElementById("MECE403CoopPlan3Biomedical");
 if (!MECE403CoopPlan3Biomedicalflag) {
     if (MECE403CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE403CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine392());
      that.addLine(getLine393());
      that.addLine(getLine394());
      that.addLine(getLine395());
     MECE403CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE403CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE403CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE403CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine392());
      that.removeLine(getLine393());
      that.removeLine(getLine394());
      that.removeLine(getLine395());
     MECE403CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE403CoopPlan3Biomedical");
      MECE403CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE451CoopPlan3BiomedicalListener = function () {
  var MECE451CoopPlan3Biomedicalelement = document.getElementById("MECE451CoopPlan3Biomedical");
 if (!MECE451CoopPlan3Biomedicalflag) {
     if (MECE451CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE451CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine396());
      that.addLine(getLine397());
     MECE451CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES");
     MECE451CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE451CoopPlan3Biomedical", "ENGINEERINGSCIENCES"]);
      MECE451CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine396());
      that.removeLine(getLine397());
     MECE451CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451CoopPlan3Biomedicalelement.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE451CoopPlan3Biomedical");
      MECE451CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE460CoopPlan3BiomedicalListener = function () {
  var MECE460CoopPlan3Biomedicalelement = document.getElementById("MECE460CoopPlan3Biomedical");
 if (!MECE460CoopPlan3Biomedicalflag) {
     if (MECE460CoopPlan3Biomedicalelement.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE460CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine398());
      that.addLine(getLine399());
      that.addLine(getLine400());
      that.addLine(getLine401());
      that.addLine(getLine402());
      that.addLine(getLine403());
      that.addLine(getLine404());
      that.addLine(getLine405());
      that.addLine(getLine406());
     MECE460CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN");
     MECE460CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE460CoopPlan3Biomedical", "ENGINEERINGDESIGN"]);
      MECE460CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine398());
      that.removeLine(getLine399());
      that.removeLine(getLine400());
      that.removeLine(getLine401());
      that.removeLine(getLine402());
      that.removeLine(getLine403());
      that.removeLine(getLine404());
      that.removeLine(getLine405());
      that.removeLine(getLine406());
     MECE460CoopPlan3Biomedicalelement.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460CoopPlan3Biomedicalelement.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE460CoopPlan3Biomedical");
      MECE460CoopPlan3Biomedicalflag=false
  }
};
$scope.PHIL386CoopPlan3BiomedicalListener = function () {
  var PHIL386CoopPlan3Biomedicalelement = document.getElementById("PHIL386CoopPlan3Biomedical");
 if (!PHIL386CoopPlan3Biomedicalflag) {
     if (PHIL386CoopPlan3Biomedicalelement.classList.contains("course-highlighted")) { 
     PHIL386CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     PHIL386CoopPlan3Biomedicalelement.classList.add("course");
      return;
}     PHIL386CoopPlan3Biomedicalelement.classList.remove("course");
     PHIL386CoopPlan3Biomedicalelement.classList.add("course-highlighted");
     that.addToClicked(["PHIL386CoopPlan3Biomedical", "course"]);
      PHIL386CoopPlan3Biomedicalflag=true
  }
 else {
     PHIL386CoopPlan3Biomedicalelement.classList.remove("course-highlighted");
     PHIL386CoopPlan3Biomedicalelement.classList.add("course");
     that.removeFromClicked("PHIL386CoopPlan3Biomedical");
      PHIL386CoopPlan3Biomedicalflag=false
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
  var ENGM401CoopPlan4flag = false;
  var MECE340CoopPlan4flag = false;
  var MECE360CoopPlan4flag = false;
  var MECE362CoopPlan4flag = false;
  var MECE390CoopPlan4flag = false;
  var ComplementaryElectiveCoopPlan40flag = false;
  var WKEXP903CoopPlan4flag = false;
  var WKEXP904CoopPlan4flag = false;
  var WKEXP905CoopPlan4flag = false;
  var ENGG404CoopPlan4flag = false;
  var MECE430CoopPlan4flag = false;
  var MECE480CoopPlan4flag = false;
  var MECE463CoopPlan4flag = false;
  var ProgramTechnicalElectiveCoopPlan40flag = false;
  var ProgramTechnicalElectiveCoopPlan41flag = false;
  var ProgramTechnicalElectiveCoopPlan42flag = false;
  var CHE448CoopPlan4flag = false;
  var MECE420CoopPlan4flag = false;
  var ENGG400CoopPlan4flag = false;
  var MECE403CoopPlan4flag = false;
  var MECE451CoopPlan4flag = false;
  var MECE460CoopPlan4flag = false;
  var ProgramTechnicalElectiveCoopPlan43flag = false;
  var ITSElectiveCoopPlan40flag = false;
$scope.CHEM103CoopPlan4Listener = function () {
  var CHEM103CoopPlan4element = document.getElementById("CHEM103CoopPlan4");
 if (!CHEM103CoopPlan4flag) {
     if (CHEM103CoopPlan4element.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM103CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     CHEM103CoopPlan4element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine409());
     CHEM103CoopPlan4element.classList.remove("BASICSCIENCES");
     CHEM103CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM103CoopPlan4", "BASICSCIENCES"]);
      CHEM103CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine409());
     CHEM103CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     CHEM103CoopPlan4element.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM103CoopPlan4");
      CHEM103CoopPlan4flag=false
  }
};
$scope.ENGG100CoopPlan4Listener = function () {
  var ENGG100CoopPlan4element = document.getElementById("ENGG100CoopPlan4");
 if (!ENGG100CoopPlan4flag) {
     if (ENGG100CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG100CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG100CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     ENGG100CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG100CoopPlan4", "ENGINEERINGPROFESSION"]);
      ENGG100CoopPlan4flag=true
  }
 else {
     ENGG100CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG100CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG100CoopPlan4");
      ENGG100CoopPlan4flag=false
  }
};
$scope.ENGG130CoopPlan4Listener = function () {
  var ENGG130CoopPlan4element = document.getElementById("ENGG130CoopPlan4");
 if (!ENGG130CoopPlan4flag) {
     if (ENGG130CoopPlan4element.classList.contains("BASICSCIENCES-highlighted")) { 
     ENGG130CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     ENGG130CoopPlan4element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine407());
      that.addLine(getLine412());
      that.addLine(getLine416());
      that.addLine(getLine430());
     ENGG130CoopPlan4element.classList.remove("BASICSCIENCES");
     ENGG130CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENGG130CoopPlan4", "BASICSCIENCES"]);
      ENGG130CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine407());
      that.removeLine(getLine412());
      that.removeLine(getLine416());
      that.removeLine(getLine430());
     ENGG130CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     ENGG130CoopPlan4element.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENGG130CoopPlan4");
      ENGG130CoopPlan4flag=false
  }
};
$scope.ENGL199CoopPlan4Listener = function () {
  var ENGL199CoopPlan4element = document.getElementById("ENGL199CoopPlan4");
 if (!ENGL199CoopPlan4flag) {
     if (ENGL199CoopPlan4element.classList.contains("Other-highlighted")) { 
     ENGL199CoopPlan4element.classList.remove("Other-highlighted");
     ENGL199CoopPlan4element.classList.add("Other");
      return;
}      that.addLine(getLine410());
     ENGL199CoopPlan4element.classList.remove("Other");
     ENGL199CoopPlan4element.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199CoopPlan4", "Other"]);
      ENGL199CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine410());
     ENGL199CoopPlan4element.classList.remove("Other-highlighted");
     ENGL199CoopPlan4element.classList.add("Other");
     that.removeFromClicked("ENGL199CoopPlan4");
      ENGL199CoopPlan4flag=false
  }
};
$scope.MATH100CoopPlan4Listener = function () {
  var MATH100CoopPlan4element = document.getElementById("MATH100CoopPlan4");
 if (!MATH100CoopPlan4flag) {
     if (MATH100CoopPlan4element.classList.contains("MATH-highlighted")) { 
     MATH100CoopPlan4element.classList.remove("MATH-highlighted");
     MATH100CoopPlan4element.classList.add("MATH");
      return;
}      that.addLine(getLine407());
      that.addLine(getLine408());
      that.addLine(getLine411());
      that.addLine(getLine414());
      that.addLine(getLine415());
      that.addLine(getLine420());
     MATH100CoopPlan4element.classList.remove("MATH");
     MATH100CoopPlan4element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH100CoopPlan4", "MATH"]);
      MATH100CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine407());
      that.removeLine(getLine408());
      that.removeLine(getLine411());
      that.removeLine(getLine414());
      that.removeLine(getLine415());
      that.removeLine(getLine420());
     MATH100CoopPlan4element.classList.remove("MATH-highlighted");
     MATH100CoopPlan4element.classList.add("MATH");
     that.removeFromClicked("MATH100CoopPlan4");
      MATH100CoopPlan4flag=false
  }
};
$scope.PHYS130CoopPlan4Listener = function () {
  var PHYS130CoopPlan4element = document.getElementById("PHYS130CoopPlan4");
 if (!PHYS130CoopPlan4flag) {
     if (PHYS130CoopPlan4element.classList.contains("BASICSCIENCES-highlighted")) { 
     PHYS130CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     PHYS130CoopPlan4element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine408());
     PHYS130CoopPlan4element.classList.remove("BASICSCIENCES");
     PHYS130CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["PHYS130CoopPlan4", "BASICSCIENCES"]);
      PHYS130CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine408());
     PHYS130CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     PHYS130CoopPlan4element.classList.add("BASICSCIENCES");
     that.removeFromClicked("PHYS130CoopPlan4");
      PHYS130CoopPlan4flag=false
  }
};
$scope.CHEM105CoopPlan4Listener = function () {
  var CHEM105CoopPlan4element = document.getElementById("CHEM105CoopPlan4");
 if (!CHEM105CoopPlan4flag) {
     if (CHEM105CoopPlan4element.classList.contains("BASICSCIENCES-highlighted")) { 
     CHEM105CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     CHEM105CoopPlan4element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine409());
      that.addLine(getLine429());
     CHEM105CoopPlan4element.classList.remove("BASICSCIENCES");
     CHEM105CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["CHEM105CoopPlan4", "BASICSCIENCES"]);
      CHEM105CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine409());
      that.removeLine(getLine429());
     CHEM105CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     CHEM105CoopPlan4element.classList.add("BASICSCIENCES");
     that.removeFromClicked("CHEM105CoopPlan4");
      CHEM105CoopPlan4flag=false
  }
};
$scope.ENCMP100CoopPlan4Listener = function () {
  var ENCMP100CoopPlan4element = document.getElementById("ENCMP100CoopPlan4");
 if (!ENCMP100CoopPlan4flag) {
     if (ENCMP100CoopPlan4element.classList.contains("BASICSCIENCES-highlighted")) { 
     ENCMP100CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100CoopPlan4element.classList.add("BASICSCIENCES");
      return;
}     ENCMP100CoopPlan4element.classList.remove("BASICSCIENCES");
     ENCMP100CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENCMP100CoopPlan4", "BASICSCIENCES"]);
      ENCMP100CoopPlan4flag=true
  }
 else {
     ENCMP100CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     ENCMP100CoopPlan4element.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENCMP100CoopPlan4");
      ENCMP100CoopPlan4flag=false
  }
};
$scope.ENGG160CoopPlan4Listener = function () {
  var ENGG160CoopPlan4element = document.getElementById("ENGG160CoopPlan4");
 if (!ENGG160CoopPlan4flag) {
     if (ENGG160CoopPlan4element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     ENGG160CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160CoopPlan4element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine410());
      that.addLine(getLine424());
     ENGG160CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
     ENGG160CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["ENGG160CoopPlan4", "ENGINEERINGDESIGN"]);
      ENGG160CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine410());
      that.removeLine(getLine424());
     ENGG160CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     ENGG160CoopPlan4element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("ENGG160CoopPlan4");
      ENGG160CoopPlan4flag=false
  }
};
$scope.ENPH131CoopPlan4Listener = function () {
  var ENPH131CoopPlan4element = document.getElementById("ENPH131CoopPlan4");
 if (!ENPH131CoopPlan4flag) {
     if (ENPH131CoopPlan4element.classList.contains("BASICSCIENCES-highlighted")) { 
     ENPH131CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     ENPH131CoopPlan4element.classList.add("BASICSCIENCES");
      return;
}      that.addLine(getLine411());
      that.addLine(getLine412());
      that.addLine(getLine413());
      that.addLine(getLine423());
      that.addLine(getLine431());
     ENPH131CoopPlan4element.classList.remove("BASICSCIENCES");
     ENPH131CoopPlan4element.classList.add("BASICSCIENCES-highlighted");
     that.addToClicked(["ENPH131CoopPlan4", "BASICSCIENCES"]);
      ENPH131CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine411());
      that.removeLine(getLine412());
      that.removeLine(getLine413());
      that.removeLine(getLine423());
      that.removeLine(getLine431());
     ENPH131CoopPlan4element.classList.remove("BASICSCIENCES-highlighted");
     ENPH131CoopPlan4element.classList.add("BASICSCIENCES");
     that.removeFromClicked("ENPH131CoopPlan4");
      ENPH131CoopPlan4flag=false
  }
};
$scope.MATH101CoopPlan4Listener = function () {
  var MATH101CoopPlan4element = document.getElementById("MATH101CoopPlan4");
 if (!MATH101CoopPlan4flag) {
     if (MATH101CoopPlan4element.classList.contains("MATH-highlighted")) { 
     MATH101CoopPlan4element.classList.remove("MATH-highlighted");
     MATH101CoopPlan4element.classList.add("MATH");
      return;
}      that.addLine(getLine413());
      that.addLine(getLine414());
      that.addLine(getLine417());
      that.addLine(getLine418());
      that.addLine(getLine421());
      that.addLine(getLine422());
      that.addLine(getLine428());
      that.addLine(getLine432());
     MATH101CoopPlan4element.classList.remove("MATH");
     MATH101CoopPlan4element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH101CoopPlan4", "MATH"]);
      MATH101CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine413());
      that.removeLine(getLine414());
      that.removeLine(getLine417());
      that.removeLine(getLine418());
      that.removeLine(getLine421());
      that.removeLine(getLine422());
      that.removeLine(getLine428());
      that.removeLine(getLine432());
     MATH101CoopPlan4element.classList.remove("MATH-highlighted");
     MATH101CoopPlan4element.classList.add("MATH");
     that.removeFromClicked("MATH101CoopPlan4");
      MATH101CoopPlan4flag=false
  }
};
$scope.MATH102CoopPlan4Listener = function () {
  var MATH102CoopPlan4element = document.getElementById("MATH102CoopPlan4");
 if (!MATH102CoopPlan4flag) {
     if (MATH102CoopPlan4element.classList.contains("MATH-highlighted")) { 
     MATH102CoopPlan4element.classList.remove("MATH-highlighted");
     MATH102CoopPlan4element.classList.add("MATH");
      return;
}      that.addLine(getLine415());
      that.addLine(getLine419());
      that.addLine(getLine458());
     MATH102CoopPlan4element.classList.remove("MATH");
     MATH102CoopPlan4element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH102CoopPlan4", "MATH"]);
      MATH102CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine415());
      that.removeLine(getLine419());
      that.removeLine(getLine458());
     MATH102CoopPlan4element.classList.remove("MATH-highlighted");
     MATH102CoopPlan4element.classList.add("MATH");
     that.removeFromClicked("MATH102CoopPlan4");
      MATH102CoopPlan4flag=false
  }
};
$scope.CIVE270CoopPlan4Listener = function () {
  var CIVE270CoopPlan4element = document.getElementById("CIVE270CoopPlan4");
 if (!CIVE270CoopPlan4flag) {
     if (CIVE270CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CIVE270CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine416());
      that.addLine(getLine417());
      that.addLine(getLine426());
      that.addLine(getLine435());
      that.addLine(getLine448());
      that.addLine(getLine455());
     CIVE270CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     CIVE270CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CIVE270CoopPlan4", "ENGINEERINGSCIENCES"]);
      CIVE270CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine416());
      that.removeLine(getLine417());
      that.removeLine(getLine426());
      that.removeLine(getLine435());
      that.removeLine(getLine448());
      that.removeLine(getLine455());
     CIVE270CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CIVE270CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CIVE270CoopPlan4");
      CIVE270CoopPlan4flag=false
  }
};
$scope.ENGG299CoopPlan4Listener = function () {
  var ENGG299CoopPlan4element = document.getElementById("ENGG299CoopPlan4");
 if (!ENGG299CoopPlan4flag) {
     if (ENGG299CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG299CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG299CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine449());
     ENGG299CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     ENGG299CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG299CoopPlan4", "ENGINEERINGPROFESSION"]);
      ENGG299CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine449());
     ENGG299CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG299CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG299CoopPlan4");
      ENGG299CoopPlan4flag=false
  }
};
$scope.MATH209CoopPlan4Listener = function () {
  var MATH209CoopPlan4element = document.getElementById("MATH209CoopPlan4");
 if (!MATH209CoopPlan4flag) {
     if (MATH209CoopPlan4element.classList.contains("MATH-highlighted")) { 
     MATH209CoopPlan4element.classList.remove("MATH-highlighted");
     MATH209CoopPlan4element.classList.add("MATH");
      return;
}      that.addLine(getLine418());
      that.addLine(getLine419());
      that.addLine(getLine427());
      that.addLine(getLine434());
      that.addLine(getLine442());
      that.addLine(getLine471());
     MATH209CoopPlan4element.classList.remove("MATH");
     MATH209CoopPlan4element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH209CoopPlan4", "MATH"]);
      MATH209CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine418());
      that.removeLine(getLine419());
      that.removeLine(getLine427());
      that.removeLine(getLine434());
      that.removeLine(getLine442());
      that.removeLine(getLine471());
     MATH209CoopPlan4element.classList.remove("MATH-highlighted");
     MATH209CoopPlan4element.classList.add("MATH");
     that.removeFromClicked("MATH209CoopPlan4");
      MATH209CoopPlan4flag=false
  }
};
$scope.STAT235CoopPlan4Listener = function () {
  var STAT235CoopPlan4element = document.getElementById("STAT235CoopPlan4");
 if (!STAT235CoopPlan4flag) {
     if (STAT235CoopPlan4element.classList.contains("MATH-highlighted")) { 
     STAT235CoopPlan4element.classList.remove("MATH-highlighted");
     STAT235CoopPlan4element.classList.add("MATH");
      return;
}      that.addLine(getLine420());
      that.addLine(getLine421());
      that.addLine(getLine437());
     STAT235CoopPlan4element.classList.remove("MATH");
     STAT235CoopPlan4element.classList.add("MATH-highlighted");
     that.addToClicked(["STAT235CoopPlan4", "MATH"]);
      STAT235CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine420());
      that.removeLine(getLine421());
      that.removeLine(getLine437());
     STAT235CoopPlan4element.classList.remove("MATH-highlighted");
     STAT235CoopPlan4element.classList.add("MATH");
     that.removeFromClicked("STAT235CoopPlan4");
      STAT235CoopPlan4flag=false
  }
};
$scope.MECE230CoopPlan4Listener = function () {
  var MECE230CoopPlan4element = document.getElementById("MECE230CoopPlan4");
 if (!MECE230CoopPlan4flag) {
     if (MECE230CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE230CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine422());
      that.addLine(getLine423());
      that.addLine(getLine440());
      that.addLine(getLine444());
     MECE230CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE230CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE230CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE230CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine422());
      that.removeLine(getLine423());
      that.removeLine(getLine440());
      that.removeLine(getLine444());
     MECE230CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE230CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE230CoopPlan4");
      MECE230CoopPlan4flag=false
  }
};
$scope.MECE260CoopPlan4Listener = function () {
  var MECE260CoopPlan4element = document.getElementById("MECE260CoopPlan4");
 if (!MECE260CoopPlan4flag) {
     if (MECE260CoopPlan4element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE260CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260CoopPlan4element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine424());
      that.addLine(getLine425());
      that.addLine(getLine426());
      that.addLine(getLine452());
     MECE260CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
     MECE260CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE260CoopPlan4", "ENGINEERINGDESIGN"]);
      MECE260CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine424());
      that.removeLine(getLine425());
      that.removeLine(getLine426());
      that.removeLine(getLine452());
     MECE260CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE260CoopPlan4element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE260CoopPlan4");
      MECE260CoopPlan4flag=false
  }
};
$scope.MECE265CoopPlan4Listener = function () {
  var MECE265CoopPlan4element = document.getElementById("MECE265CoopPlan4");
 if (!MECE265CoopPlan4flag) {
     if (MECE265CoopPlan4element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE265CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265CoopPlan4element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine425());
      that.addLine(getLine453());
     MECE265CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
     MECE265CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE265CoopPlan4", "ENGINEERINGDESIGN"]);
      MECE265CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine425());
      that.removeLine(getLine453());
     MECE265CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE265CoopPlan4element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE265CoopPlan4");
      MECE265CoopPlan4flag=false
  }
};
$scope.ECE209CoopPlan4Listener = function () {
  var ECE209CoopPlan4element = document.getElementById("ECE209CoopPlan4");
 if (!ECE209CoopPlan4flag) {
     if (ECE209CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     ECE209CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine436());
     ECE209CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     ECE209CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["ECE209CoopPlan4", "ENGINEERINGSCIENCES"]);
      ECE209CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine436());
     ECE209CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     ECE209CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("ECE209CoopPlan4");
      ECE209CoopPlan4flag=false
  }
};
$scope.MATH201CoopPlan4Listener = function () {
  var MATH201CoopPlan4element = document.getElementById("MATH201CoopPlan4");
 if (!MATH201CoopPlan4flag) {
     if (MATH201CoopPlan4element.classList.contains("MATH-highlighted")) { 
     MATH201CoopPlan4element.classList.remove("MATH-highlighted");
     MATH201CoopPlan4element.classList.add("MATH");
      return;
}      that.addLine(getLine427());
      that.addLine(getLine433());
      that.addLine(getLine459());
      that.addLine(getLine470());
     MATH201CoopPlan4element.classList.remove("MATH");
     MATH201CoopPlan4element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH201CoopPlan4", "MATH"]);
      MATH201CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine427());
      that.removeLine(getLine433());
      that.removeLine(getLine459());
      that.removeLine(getLine470());
     MATH201CoopPlan4element.classList.remove("MATH-highlighted");
     MATH201CoopPlan4element.classList.add("MATH");
     that.removeFromClicked("MATH201CoopPlan4");
      MATH201CoopPlan4flag=false
  }
};
$scope.CHE243CoopPlan4Listener = function () {
  var CHE243CoopPlan4element = document.getElementById("CHE243CoopPlan4");
 if (!CHE243CoopPlan4flag) {
     if (CHE243CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE243CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine428());
      that.addLine(getLine443());
      that.addLine(getLine445());
      that.addLine(getLine451());
     CHE243CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     CHE243CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE243CoopPlan4", "ENGINEERINGSCIENCES"]);
      CHE243CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine428());
      that.removeLine(getLine443());
      that.removeLine(getLine445());
      that.removeLine(getLine451());
     CHE243CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE243CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE243CoopPlan4");
      CHE243CoopPlan4flag=false
  }
};
$scope.MATE202CoopPlan4Listener = function () {
  var MATE202CoopPlan4element = document.getElementById("MATE202CoopPlan4");
 if (!MATE202CoopPlan4flag) {
     if (MATE202CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MATE202CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine429());
      that.addLine(getLine454());
     MATE202CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MATE202CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MATE202CoopPlan4", "ENGINEERINGSCIENCES"]);
      MATE202CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine429());
      that.removeLine(getLine454());
     MATE202CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MATE202CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MATE202CoopPlan4");
      MATE202CoopPlan4flag=false
  }
};
$scope.MECE200CoopPlan4Listener = function () {
  var MECE200CoopPlan4element = document.getElementById("MECE200CoopPlan4");
 if (!MECE200CoopPlan4flag) {
     if (MECE200CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     MECE200CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine481());
     MECE200CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     MECE200CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["MECE200CoopPlan4", "ENGINEERINGPROFESSION"]);
      MECE200CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine481());
     MECE200CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     MECE200CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("MECE200CoopPlan4");
      MECE200CoopPlan4flag=false
  }
};
$scope.MECE250CoopPlan4Listener = function () {
  var MECE250CoopPlan4element = document.getElementById("MECE250CoopPlan4");
 if (!MECE250CoopPlan4flag) {
     if (MECE250CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE250CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine430());
      that.addLine(getLine431());
      that.addLine(getLine432());
      that.addLine(getLine441());
      that.addLine(getLine457());
      that.addLine(getLine479());
     MECE250CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE250CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE250CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE250CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine430());
      that.removeLine(getLine431());
      that.removeLine(getLine432());
      that.removeLine(getLine441());
      that.removeLine(getLine457());
      that.removeLine(getLine479());
     MECE250CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE250CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE250CoopPlan4");
      MECE250CoopPlan4flag=false
  }
};
$scope.MATH300CoopPlan4Listener = function () {
  var MATH300CoopPlan4element = document.getElementById("MATH300CoopPlan4");
 if (!MATH300CoopPlan4flag) {
     if (MATH300CoopPlan4element.classList.contains("MATH-highlighted")) { 
     MATH300CoopPlan4element.classList.remove("MATH-highlighted");
     MATH300CoopPlan4element.classList.add("MATH");
      return;
}      that.addLine(getLine433());
      that.addLine(getLine434());
      that.addLine(getLine446());
      that.addLine(getLine466());
      that.addLine(getLine480());
     MATH300CoopPlan4element.classList.remove("MATH");
     MATH300CoopPlan4element.classList.add("MATH-highlighted");
     that.addToClicked(["MATH300CoopPlan4", "MATH"]);
      MATH300CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine433());
      that.removeLine(getLine434());
      that.removeLine(getLine446());
      that.removeLine(getLine466());
      that.removeLine(getLine480());
     MATH300CoopPlan4element.classList.remove("MATH-highlighted");
     MATH300CoopPlan4element.classList.add("MATH");
     that.removeFromClicked("MATH300CoopPlan4");
      MATH300CoopPlan4flag=false
  }
};
$scope.MECE300CoopPlan4Listener = function () {
  var MECE300CoopPlan4element = document.getElementById("MECE300CoopPlan4");
 if (!MECE300CoopPlan4flag) {
     if (MECE300CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE300CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine435());
      that.addLine(getLine436());
      that.addLine(getLine437());
      that.addLine(getLine438());
      that.addLine(getLine439());
      that.addLine(getLine475());
     MECE300CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE300CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE300CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE300CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine435());
      that.removeLine(getLine436());
      that.removeLine(getLine437());
      that.removeLine(getLine438());
      that.removeLine(getLine439());
      that.removeLine(getLine475());
     MECE300CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE300CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE300CoopPlan4");
      MECE300CoopPlan4flag=false
  }
};
$scope.MECE301CoopPlan4Listener = function () {
  var MECE301CoopPlan4element = document.getElementById("MECE301CoopPlan4");
 if (!MECE301CoopPlan4flag) {
     if (MECE301CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE301CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine439());
      that.addLine(getLine476());
     MECE301CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE301CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE301CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE301CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine439());
      that.removeLine(getLine476());
     MECE301CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE301CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE301CoopPlan4");
      MECE301CoopPlan4flag=false
  }
};
$scope.MECE331CoopPlan4Listener = function () {
  var MECE331CoopPlan4element = document.getElementById("MECE331CoopPlan4");
 if (!MECE331CoopPlan4flag) {
     if (MECE331CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE331CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine438());
      that.addLine(getLine440());
      that.addLine(getLine441());
      that.addLine(getLine442());
      that.addLine(getLine443());
      that.addLine(getLine447());
      that.addLine(getLine463());
      that.addLine(getLine467());
      that.addLine(getLine472());
      that.addLine(getLine482());
     MECE331CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE331CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE331CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE331CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine438());
      that.removeLine(getLine440());
      that.removeLine(getLine441());
      that.removeLine(getLine442());
      that.removeLine(getLine443());
      that.removeLine(getLine447());
      that.removeLine(getLine463());
      that.removeLine(getLine467());
      that.removeLine(getLine472());
      that.removeLine(getLine482());
     MECE331CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE331CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE331CoopPlan4");
      MECE331CoopPlan4flag=false
  }
};
$scope.MECE371CoopPlan4Listener = function () {
  var MECE371CoopPlan4element = document.getElementById("MECE371CoopPlan4");
 if (!MECE371CoopPlan4flag) {
     if (MECE371CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE371CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine444());
      that.addLine(getLine445());
      that.addLine(getLine446());
      that.addLine(getLine447());
      that.addLine(getLine469());
      that.addLine(getLine473());
      that.addLine(getLine486());
     MECE371CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE371CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE371CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE371CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine444());
      that.removeLine(getLine445());
      that.removeLine(getLine446());
      that.removeLine(getLine447());
      that.removeLine(getLine469());
      that.removeLine(getLine473());
      that.removeLine(getLine486());
     MECE371CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE371CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE371CoopPlan4");
      MECE371CoopPlan4flag=false
  }
};
$scope.MECE380CoopPlan4Listener = function () {
  var MECE380CoopPlan4element = document.getElementById("MECE380CoopPlan4");
 if (!MECE380CoopPlan4flag) {
     if (MECE380CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE380CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine448());
      that.addLine(getLine465());
      that.addLine(getLine487());
     MECE380CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE380CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE380CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE380CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine448());
      that.removeLine(getLine465());
      that.removeLine(getLine487());
     MECE380CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE380CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE380CoopPlan4");
      MECE380CoopPlan4flag=false
  }
};
$scope.WKEXP901CoopPlan4Listener = function () {
  var WKEXP901CoopPlan4element = document.getElementById("WKEXP901CoopPlan4");
 if (!WKEXP901CoopPlan4flag) {
     if (WKEXP901CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP901CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP901CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine449());
      that.addLine(getLine450());
     WKEXP901CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP901CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP901CoopPlan4", "ENGINEERINGPROFESSION"]);
      WKEXP901CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine449());
      that.removeLine(getLine450());
     WKEXP901CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP901CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP901CoopPlan4");
      WKEXP901CoopPlan4flag=false
  }
};
$scope.WKEXP902CoopPlan4Listener = function () {
  var WKEXP902CoopPlan4element = document.getElementById("WKEXP902CoopPlan4");
 if (!WKEXP902CoopPlan4flag) {
     if (WKEXP902CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP902CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP902CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine450());
      that.addLine(getLine460());
     WKEXP902CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP902CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP902CoopPlan4", "ENGINEERINGPROFESSION"]);
      WKEXP902CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine450());
      that.removeLine(getLine460());
     WKEXP902CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP902CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP902CoopPlan4");
      WKEXP902CoopPlan4flag=false
  }
};
$scope.ENGM310CoopPlan4Listener = function () {
  var ENGM310CoopPlan4element = document.getElementById("ENGM310CoopPlan4");
 if (!ENGM310CoopPlan4flag) {
     if (ENGM310CoopPlan4element.classList.contains("Other-highlighted")) { 
     ENGM310CoopPlan4element.classList.remove("Other-highlighted");
     ENGM310CoopPlan4element.classList.add("Other");
      return;
}      that.addLine(getLine488());
     ENGM310CoopPlan4element.classList.remove("Other");
     ENGM310CoopPlan4element.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310CoopPlan4", "Other"]);
      ENGM310CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine488());
     ENGM310CoopPlan4element.classList.remove("Other-highlighted");
     ENGM310CoopPlan4element.classList.add("Other");
     that.removeFromClicked("ENGM310CoopPlan4");
      ENGM310CoopPlan4flag=false
  }
};
$scope.ENGM401CoopPlan4Listener = function () {
  var ENGM401CoopPlan4element = document.getElementById("ENGM401CoopPlan4");
 if (!ENGM401CoopPlan4flag) {
     if (ENGM401CoopPlan4element.classList.contains("Other-highlighted")) { 
     ENGM401CoopPlan4element.classList.remove("Other-highlighted");
     ENGM401CoopPlan4element.classList.add("Other");
      return;
}      that.addLine(getLine489());
     ENGM401CoopPlan4element.classList.remove("Other");
     ENGM401CoopPlan4element.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401CoopPlan4", "Other"]);
      ENGM401CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine489());
     ENGM401CoopPlan4element.classList.remove("Other-highlighted");
     ENGM401CoopPlan4element.classList.add("Other");
     that.removeFromClicked("ENGM401CoopPlan4");
      ENGM401CoopPlan4flag=false
  }
};
$scope.MECE340CoopPlan4Listener = function () {
  var MECE340CoopPlan4element = document.getElementById("MECE340CoopPlan4");
 if (!MECE340CoopPlan4flag) {
     if (MECE340CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE340CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine451());
      that.addLine(getLine468());
      that.addLine(getLine477());
      that.addLine(getLine483());
     MECE340CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE340CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE340CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE340CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine451());
      that.removeLine(getLine468());
      that.removeLine(getLine477());
      that.removeLine(getLine483());
     MECE340CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE340CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE340CoopPlan4");
      MECE340CoopPlan4flag=false
  }
};
$scope.MECE360CoopPlan4Listener = function () {
  var MECE360CoopPlan4element = document.getElementById("MECE360CoopPlan4");
 if (!MECE360CoopPlan4flag) {
     if (MECE360CoopPlan4element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE360CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360CoopPlan4element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine452());
      that.addLine(getLine453());
      that.addLine(getLine454());
      that.addLine(getLine455());
      that.addLine(getLine456());
      that.addLine(getLine464());
      that.addLine(getLine478());
      that.addLine(getLine484());
     MECE360CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
     MECE360CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE360CoopPlan4", "ENGINEERINGDESIGN"]);
      MECE360CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine452());
      that.removeLine(getLine453());
      that.removeLine(getLine454());
      that.removeLine(getLine455());
      that.removeLine(getLine456());
      that.removeLine(getLine464());
      that.removeLine(getLine478());
      that.removeLine(getLine484());
     MECE360CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE360CoopPlan4element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE360CoopPlan4");
      MECE360CoopPlan4flag=false
  }
};
$scope.MECE362CoopPlan4Listener = function () {
  var MECE362CoopPlan4element = document.getElementById("MECE362CoopPlan4");
 if (!MECE362CoopPlan4flag) {
     if (MECE362CoopPlan4element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE362CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362CoopPlan4element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine456());
      that.addLine(getLine457());
      that.addLine(getLine485());
     MECE362CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
     MECE362CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE362CoopPlan4", "ENGINEERINGDESIGN"]);
      MECE362CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine456());
      that.removeLine(getLine457());
      that.removeLine(getLine485());
     MECE362CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE362CoopPlan4element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE362CoopPlan4");
      MECE362CoopPlan4flag=false
  }
};
$scope.MECE390CoopPlan4Listener = function () {
  var MECE390CoopPlan4element = document.getElementById("MECE390CoopPlan4");
 if (!MECE390CoopPlan4flag) {
     if (MECE390CoopPlan4element.classList.contains("MATH-highlighted")) { 
     MECE390CoopPlan4element.classList.remove("MATH-highlighted");
     MECE390CoopPlan4element.classList.add("MATH");
      return;
}      that.addLine(getLine458());
      that.addLine(getLine459());
      that.addLine(getLine474());
     MECE390CoopPlan4element.classList.remove("MATH");
     MECE390CoopPlan4element.classList.add("MATH-highlighted");
     that.addToClicked(["MECE390CoopPlan4", "MATH"]);
      MECE390CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine458());
      that.removeLine(getLine459());
      that.removeLine(getLine474());
     MECE390CoopPlan4element.classList.remove("MATH-highlighted");
     MECE390CoopPlan4element.classList.add("MATH");
     that.removeFromClicked("MECE390CoopPlan4");
      MECE390CoopPlan4flag=false
  }
};
$scope.ComplementaryElectiveCoopPlan40Listener = function () {
  var ComplementaryElectiveCoopPlan40element = document.getElementById("ComplementaryElectiveCoopPlan40");
 if (!ComplementaryElectiveCoopPlan40flag) {
     if (ComplementaryElectiveCoopPlan40element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlan40element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan40element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlan40element.classList.remove("COMP");
     ComplementaryElectiveCoopPlan40element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlan40", "COMP"]);
      ComplementaryElectiveCoopPlan40flag=true
  }
 else {
     ComplementaryElectiveCoopPlan40element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan40element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlan40");
      ComplementaryElectiveCoopPlan40flag=false
  }
};
$scope.WKEXP903CoopPlan4Listener = function () {
  var WKEXP903CoopPlan4element = document.getElementById("WKEXP903CoopPlan4");
 if (!WKEXP903CoopPlan4flag) {
     if (WKEXP903CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP903CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP903CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine460());
      that.addLine(getLine461());
     WKEXP903CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP903CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP903CoopPlan4", "ENGINEERINGPROFESSION"]);
      WKEXP903CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine460());
      that.removeLine(getLine461());
     WKEXP903CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP903CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP903CoopPlan4");
      WKEXP903CoopPlan4flag=false
  }
};
$scope.WKEXP904CoopPlan4Listener = function () {
  var WKEXP904CoopPlan4element = document.getElementById("WKEXP904CoopPlan4");
 if (!WKEXP904CoopPlan4flag) {
     if (WKEXP904CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP904CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP904CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine461());
      that.addLine(getLine462());
     WKEXP904CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP904CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP904CoopPlan4", "ENGINEERINGPROFESSION"]);
      WKEXP904CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine461());
      that.removeLine(getLine462());
     WKEXP904CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP904CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP904CoopPlan4");
      WKEXP904CoopPlan4flag=false
  }
};
$scope.WKEXP905CoopPlan4Listener = function () {
  var WKEXP905CoopPlan4element = document.getElementById("WKEXP905CoopPlan4");
 if (!WKEXP905CoopPlan4flag) {
     if (WKEXP905CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     WKEXP905CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP905CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}      that.addLine(getLine462());
     WKEXP905CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     WKEXP905CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["WKEXP905CoopPlan4", "ENGINEERINGPROFESSION"]);
      WKEXP905CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine462());
     WKEXP905CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     WKEXP905CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("WKEXP905CoopPlan4");
      WKEXP905CoopPlan4flag=false
  }
};
$scope.ENGG404CoopPlan4Listener = function () {
  var ENGG404CoopPlan4element = document.getElementById("ENGG404CoopPlan4");
 if (!ENGG404CoopPlan4flag) {
     if (ENGG404CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG404CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG404CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     ENGG404CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG404CoopPlan4", "ENGINEERINGPROFESSION"]);
      ENGG404CoopPlan4flag=true
  }
 else {
     ENGG404CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG404CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG404CoopPlan4");
      ENGG404CoopPlan4flag=false
  }
};
$scope.MECE430CoopPlan4Listener = function () {
  var MECE430CoopPlan4element = document.getElementById("MECE430CoopPlan4");
 if (!MECE430CoopPlan4flag) {
     if (MECE430CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE430CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine463());
     MECE430CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE430CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE430CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE430CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine463());
     MECE430CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE430CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE430CoopPlan4");
      MECE430CoopPlan4flag=false
  }
};
$scope.MECE480CoopPlan4Listener = function () {
  var MECE480CoopPlan4element = document.getElementById("MECE480CoopPlan4");
 if (!MECE480CoopPlan4flag) {
     if (MECE480CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE480CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine464());
      that.addLine(getLine465());
      that.addLine(getLine466());
     MECE480CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE480CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE480CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE480CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine464());
      that.removeLine(getLine465());
      that.removeLine(getLine466());
     MECE480CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE480CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE480CoopPlan4");
      MECE480CoopPlan4flag=false
  }
};
$scope.MECE463CoopPlan4Listener = function () {
  var MECE463CoopPlan4element = document.getElementById("MECE463CoopPlan4");
 if (!MECE463CoopPlan4flag) {
     if (MECE463CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE463CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine467());
      that.addLine(getLine468());
      that.addLine(getLine469());
     MECE463CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE463CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE463CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE463CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine467());
      that.removeLine(getLine468());
      that.removeLine(getLine469());
     MECE463CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE463CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE463CoopPlan4");
      MECE463CoopPlan4flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan40Listener = function () {
  var ProgramTechnicalElectiveCoopPlan40element = document.getElementById("ProgramTechnicalElectiveCoopPlan40");
 if (!ProgramTechnicalElectiveCoopPlan40flag) {
     if (ProgramTechnicalElectiveCoopPlan40element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan40element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan40element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan40element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan40element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan40", "PROG"]);
      ProgramTechnicalElectiveCoopPlan40flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan40element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan40element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan40");
      ProgramTechnicalElectiveCoopPlan40flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan41Listener = function () {
  var ProgramTechnicalElectiveCoopPlan41element = document.getElementById("ProgramTechnicalElectiveCoopPlan41");
 if (!ProgramTechnicalElectiveCoopPlan41flag) {
     if (ProgramTechnicalElectiveCoopPlan41element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan41element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan41element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan41element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan41element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan41", "PROG"]);
      ProgramTechnicalElectiveCoopPlan41flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan41element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan41element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan41");
      ProgramTechnicalElectiveCoopPlan41flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan42Listener = function () {
  var ProgramTechnicalElectiveCoopPlan42element = document.getElementById("ProgramTechnicalElectiveCoopPlan42");
 if (!ProgramTechnicalElectiveCoopPlan42flag) {
     if (ProgramTechnicalElectiveCoopPlan42element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan42element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan42element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan42element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan42element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan42", "PROG"]);
      ProgramTechnicalElectiveCoopPlan42flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan42element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan42element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan42");
      ProgramTechnicalElectiveCoopPlan42flag=false
  }
};
$scope.CHE448CoopPlan4Listener = function () {
  var CHE448CoopPlan4element = document.getElementById("CHE448CoopPlan4");
 if (!CHE448CoopPlan4flag) {
     if (CHE448CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     CHE448CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine470());
      that.addLine(getLine471());
      that.addLine(getLine472());
      that.addLine(getLine473());
     CHE448CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     CHE448CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["CHE448CoopPlan4", "ENGINEERINGSCIENCES"]);
      CHE448CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine470());
      that.removeLine(getLine471());
      that.removeLine(getLine472());
      that.removeLine(getLine473());
     CHE448CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     CHE448CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("CHE448CoopPlan4");
      CHE448CoopPlan4flag=false
  }
};
$scope.MECE420CoopPlan4Listener = function () {
  var MECE420CoopPlan4element = document.getElementById("MECE420CoopPlan4");
 if (!MECE420CoopPlan4flag) {
     if (MECE420CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE420CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine474());
     MECE420CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE420CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE420CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE420CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine474());
     MECE420CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE420CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE420CoopPlan4");
      MECE420CoopPlan4flag=false
  }
};
$scope.ENGG400CoopPlan4Listener = function () {
  var ENGG400CoopPlan4element = document.getElementById("ENGG400CoopPlan4");
 if (!ENGG400CoopPlan4flag) {
     if (ENGG400CoopPlan4element.classList.contains("ENGINEERINGPROFESSION-highlighted")) { 
     ENGG400CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
      return;
}     ENGG400CoopPlan4element.classList.remove("ENGINEERINGPROFESSION");
     ENGG400CoopPlan4element.classList.add("ENGINEERINGPROFESSION-highlighted");
     that.addToClicked(["ENGG400CoopPlan4", "ENGINEERINGPROFESSION"]);
      ENGG400CoopPlan4flag=true
  }
 else {
     ENGG400CoopPlan4element.classList.remove("ENGINEERINGPROFESSION-highlighted");
     ENGG400CoopPlan4element.classList.add("ENGINEERINGPROFESSION");
     that.removeFromClicked("ENGG400CoopPlan4");
      ENGG400CoopPlan4flag=false
  }
};
$scope.MECE403CoopPlan4Listener = function () {
  var MECE403CoopPlan4element = document.getElementById("MECE403CoopPlan4");
 if (!MECE403CoopPlan4flag) {
     if (MECE403CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE403CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine475());
      that.addLine(getLine476());
      that.addLine(getLine477());
      that.addLine(getLine478());
     MECE403CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE403CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE403CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE403CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine475());
      that.removeLine(getLine476());
      that.removeLine(getLine477());
      that.removeLine(getLine478());
     MECE403CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE403CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE403CoopPlan4");
      MECE403CoopPlan4flag=false
  }
};
$scope.MECE451CoopPlan4Listener = function () {
  var MECE451CoopPlan4element = document.getElementById("MECE451CoopPlan4");
 if (!MECE451CoopPlan4flag) {
     if (MECE451CoopPlan4element.classList.contains("ENGINEERINGSCIENCES-highlighted")) { 
     MECE451CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
      return;
}      that.addLine(getLine479());
      that.addLine(getLine480());
     MECE451CoopPlan4element.classList.remove("ENGINEERINGSCIENCES");
     MECE451CoopPlan4element.classList.add("ENGINEERINGSCIENCES-highlighted");
     that.addToClicked(["MECE451CoopPlan4", "ENGINEERINGSCIENCES"]);
      MECE451CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine479());
      that.removeLine(getLine480());
     MECE451CoopPlan4element.classList.remove("ENGINEERINGSCIENCES-highlighted");
     MECE451CoopPlan4element.classList.add("ENGINEERINGSCIENCES");
     that.removeFromClicked("MECE451CoopPlan4");
      MECE451CoopPlan4flag=false
  }
};
$scope.MECE460CoopPlan4Listener = function () {
  var MECE460CoopPlan4element = document.getElementById("MECE460CoopPlan4");
 if (!MECE460CoopPlan4flag) {
     if (MECE460CoopPlan4element.classList.contains("ENGINEERINGDESIGN-highlighted")) { 
     MECE460CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460CoopPlan4element.classList.add("ENGINEERINGDESIGN");
      return;
}      that.addLine(getLine481());
      that.addLine(getLine482());
      that.addLine(getLine483());
      that.addLine(getLine484());
      that.addLine(getLine485());
      that.addLine(getLine486());
      that.addLine(getLine487());
      that.addLine(getLine488());
      that.addLine(getLine489());
     MECE460CoopPlan4element.classList.remove("ENGINEERINGDESIGN");
     MECE460CoopPlan4element.classList.add("ENGINEERINGDESIGN-highlighted");
     that.addToClicked(["MECE460CoopPlan4", "ENGINEERINGDESIGN"]);
      MECE460CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine481());
      that.removeLine(getLine482());
      that.removeLine(getLine483());
      that.removeLine(getLine484());
      that.removeLine(getLine485());
      that.removeLine(getLine486());
      that.removeLine(getLine487());
      that.removeLine(getLine488());
      that.removeLine(getLine489());
     MECE460CoopPlan4element.classList.remove("ENGINEERINGDESIGN-highlighted");
     MECE460CoopPlan4element.classList.add("ENGINEERINGDESIGN");
     that.removeFromClicked("MECE460CoopPlan4");
      MECE460CoopPlan4flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan43Listener = function () {
  var ProgramTechnicalElectiveCoopPlan43element = document.getElementById("ProgramTechnicalElectiveCoopPlan43");
 if (!ProgramTechnicalElectiveCoopPlan43flag) {
     if (ProgramTechnicalElectiveCoopPlan43element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan43element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan43element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan43element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan43element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan43", "PROG"]);
      ProgramTechnicalElectiveCoopPlan43flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan43element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan43element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan43");
      ProgramTechnicalElectiveCoopPlan43flag=false
  }
};
$scope.ITSElectiveCoopPlan40Listener = function () {
  var ITSElectiveCoopPlan40element = document.getElementById("ITSElectiveCoopPlan40");
 if (!ITSElectiveCoopPlan40flag) {
     if (ITSElectiveCoopPlan40element.classList.contains("ITS-highlighted")) { 
     ITSElectiveCoopPlan40element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan40element.classList.add("ITS");
      return;
}     ITSElectiveCoopPlan40element.classList.remove("ITS");
     ITSElectiveCoopPlan40element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveCoopPlan40", "ITS"]);
      ITSElectiveCoopPlan40flag=true
  }
 else {
     ITSElectiveCoopPlan40element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan40element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveCoopPlan40");
      ITSElectiveCoopPlan40flag=false
  }
};
});