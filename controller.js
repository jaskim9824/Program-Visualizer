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
this.AlternatePlanList = [];
this.CoopPlan1List = [];
this.CoopPlan2List = [];
this.CoopPlan3BiomedicalList = [];
this.CoopPlan4List = [];
this.disable = function(plan) {
    switch (plan) { 
  case "TraditionalPlan": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide();
    }
    break; 
  case "AlternatePlan": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide();
    }
    break; 
  case "CoopPlan1": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide();
    }
    break; 
  case "CoopPlan2": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide();
    }
    break; 
  case "CoopPlan3Biomedical": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide();
    }
    break; 
  case "CoopPlan4": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide();
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
        this.TraditionalPlanList[i][0].show();
    }
    break; 
  case "AlternatePlan": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].show();
    }
    break; 
  case "CoopPlan1": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].show();
    }
    break; 
  case "CoopPlan2": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].show();
    }
    break; 
  case "CoopPlan3Biomedical": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].show();
    }
    break; 
  case "CoopPlan4": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].show();
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
    if (index != -1) {
        line.show();
        this.TraditionalPlanList.push([line, 1])
    }
    else {
        this.TraditionalPlanList[index][1]++;
    }
    break;
 case "AlternatePlan":
    var index = this.AlternatePlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        line.show();
        this.AlternatePlanList.push([line, 1])
    }
    else {
        this.AlternatePlanList[index][1]++;
    }
    break;
 case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index != -1) {
        line.show();
        this.CoopPlan1List.push([line, 1])
    }
    else {
        this.CoopPlan1List[index][1]++;
    }
    break;
 case "CoopPlan2":
    var index = this.CoopPlan2List.findIndex((element) => element[0] == line);
    if (index != -1) {
        line.show();
        this.CoopPlan2List.push([line, 1])
    }
    else {
        this.CoopPlan2List[index][1]++;
    }
    break;
 case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalList.findIndex((element) => element[0] == line);
    if (index != -1) {
        line.show();
        this.CoopPlan3BiomedicalList.push([line, 1])
    }
    else {
        this.CoopPlan3BiomedicalList[index][1]++;
    }
    break;
 case "CoopPlan4":
    var index = this.CoopPlan4List.findIndex((element) => element[0] == line);
    if (index != -1) {
        line.show();
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
            line.hide();
            this.TraditionalPlanList.splice(index, 1);
        }
    }
    break; case "AlternatePlan":
    var index = this.AlternatePlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.AlternatePlanList[index][1]--
        if (this.AlternatePlanList[index][1] <= 0) {
            line.hide();
            this.AlternatePlanList.splice(index, 1);
        }
    }
    break; case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan1List[index][1]--
        if (this.CoopPlan1List[index][1] <= 0) {
            line.hide();
            this.CoopPlan1List.splice(index, 1);
        }
    }
    break; case "CoopPlan2":
    var index = this.CoopPlan2List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan2List[index][1]--
        if (this.CoopPlan2List[index][1] <= 0) {
            line.hide();
            this.CoopPlan2List.splice(index, 1);
        }
    }
    break; case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan3BiomedicalList[index][1]--
        if (this.CoopPlan3BiomedicalList[index][1] <= 0) {
            line.hide();
            this.CoopPlan3BiomedicalList.splice(index, 1);
        }
    }
    break; case "CoopPlan4":
    var index = this.CoopPlan4List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan4List[index][1]--
        if (this.CoopPlan4List[index][1] <= 0) {
            line.hide();
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
  var CHE243ATraditionalPlanflag = false;
  var MECE200ATraditionalPlanflag = false;
  var MECE250ATraditionalPlanflag = false;
  var ECE209TraditionalPlanflag = false;
  var MATE202TraditionalPlanflag = false;
  var MATH201TraditionalPlanflag = false;
  var MECE230BTraditionalPlanflag = false;
  var MECE260BTraditionalPlanflag = false;
  var MECE265BTraditionalPlanflag = false;
  var MATH300ATraditionalPlanflag = false;
  var MECE300ATraditionalPlanflag = false;
  var MECE301ATraditionalPlanflag = false;
  var MECE331ATraditionalPlanflag = false;
  var MECE371ATraditionalPlanflag = false;
  var MECE380ATraditionalPlanflag = false;
  var ENGM310BTraditionalPlanflag = false;
  var MECE340BTraditionalPlanflag = false;
  var MECE360BTraditionalPlanflag = false;
  var MECE362BTraditionalPlanflag = false;
  var MECE390BTraditionalPlanflag = false;
  var ComplementaryElectiveTraditionalPlanflag = false;
  var ENGG404ATraditionalPlanflag = false;
  var MECE430ATraditionalPlanflag = false;
  var MECE463ATraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlanflag = false;
  var MECE403BTraditionalPlanflag = false;
  var MECE451BTraditionalPlanflag = false;
  var MECE460BTraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlanflag = false;
  var ProgramTechnicalElectiveTraditionalPlanflag = false;
  var ITSElectiveTraditionalPlanflag = false;
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
  var MATH300AAlternatePlanflag = false;
  var MECE300AAlternatePlanflag = false;
  var MECE301AAlternatePlanflag = false;
  var MECE331AAlternatePlanflag = false;
  var MECE371AAlternatePlanflag = false;
  var MECE380AAlternatePlanflag = false;
  var MECE340BAlternatePlanflag = false;
  var MECE360BAlternatePlanflag = false;
  var MECE362BAlternatePlanflag = false;
  var MECE390BAlternatePlanflag = false;
  var ProgramTechnicalElectiveAlternatePlanflag = false;
  var MECE430AAlternatePlanflag = false;
  var MECE463AAlternatePlanflag = false;
  var ProgramTechnicalElectiveAlternatePlanflag = false;
  var ProgramTechnicalElectiveAlternatePlanflag = false;
  var ProgramTechnicalElectiveAlternatePlanflag = false;
  var CHE448AlternatePlanflag = false;
  var ENGG400AlternatePlanflag = false;
  var MECE403BAlternatePlanflag = false;
  var MECE451BAlternatePlanflag = false;
  var MECE460BAlternatePlanflag = false;
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
  var MATE201CoopPlan1flag = false;
  var MATH201CoopPlan1flag = false;
  var MECE200CoopPlan1flag = false;
  var MECE250CoopPlan1flag = false;
  var WKEXP901CoopPlan1flag = false;
  var WKEXP902CoopPlan1flag = false;
  var MATH300ACoopPlan1flag = false;
  var MECE300ACoopPlan1flag = false;
  var MECE301ACoopPlan1flag = false;
  var MECE331ACoopPlan1flag = false;
  var MECE371ACoopPlan1flag = false;
  var MECE380ACoopPlan1flag = false;
  var WKEXP903CoopPlan1flag = false;
  var WKEXP904CoopPlan1flag = false;
  var ENGM310BCoopPlan1flag = false;
  var MECE340BCoopPlan1flag = false;
  var MECE360BCoopPlan1flag = false;
  var MECE362BCoopPlan1flag = false;
  var MECE390BCoopPlan1flag = false;
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
  var MATH300ACoopPlan2flag = false;
  var MECE300ACoopPlan2flag = false;
  var MECE301ACoopPlan2flag = false;
  var MECE331ACoopPlan2flag = false;
  var MECE371ACoopPlan2flag = false;
  var MECE380ACoopPlan2flag = false;
  var WKEXP902CoopPlan2flag = false;
  var WKEXP903CoopPlan2flag = false;
  var ENGM310BCoopPlan2flag = false;
  var MECE340BCoopPlan2flag = false;
  var MECE360BCoopPlan2flag = false;
  var MECE362BCoopPlan2flag = false;
  var MECE390BCoopPlan2flag = false;
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
  var MATH300ACoopPlan4flag = false;
  var MECE300ACoopPlan4flag = false;
  var MECE301ACoopPlan4flag = false;
  var MECE331ACoopPlan4flag = false;
  var MECE371ACoopPlan4flag = false;
  var MECE380ACoopPlan4flag = false;
  var WKEXP901CoopPlan4flag = false;
  var WKEXP902CoopPlan4flag = false;
  var ENGM310BCoopPlan4flag = false;
  var MECE340BCoopPlan4flag = false;
  var MECE360BCoopPlan4flag = false;
  var MECE362BCoopPlan4flag = false;
  var MECE390BCoopPlan4flag = false;
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
});