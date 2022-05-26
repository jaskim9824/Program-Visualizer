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
    if (index == -1) {
        line.show();
        this.TraditionalPlanList.push([line, 1])
    }
    else {
        this.TraditionalPlanList[index][1]++;
    }
    break;
 case "AlternatePlan":
    var index = this.AlternatePlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show();
        this.AlternatePlanList.push([line, 1])
    }
    else {
        this.AlternatePlanList[index][1]++;
    }
    break;
 case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show();
        this.CoopPlan1List.push([line, 1])
    }
    else {
        this.CoopPlan1List[index][1]++;
    }
    break;
 case "CoopPlan2":
    var index = this.CoopPlan2List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show();
        this.CoopPlan2List.push([line, 1])
    }
    else {
        this.CoopPlan2List[index][1]++;
    }
    break;
 case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show();
        this.CoopPlan3BiomedicalList.push([line, 1])
    }
    else {
        this.CoopPlan3BiomedicalList[index][1]++;
    }
    break;
 case "CoopPlan4":
    var index = this.CoopPlan4List.findIndex((element) => element[0] == line);
    if (index == -1) {
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
$scope.CHEM103TraditionalPlanListener = function () {
 if (!CHEM103TraditionalPlanflag) {
      that.addLine(getLine1());
      CHEM103TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
      CHEM103TraditionalPlanflag=false
  }
};
$scope.ENGG130TraditionalPlanListener = function () {
 if (!ENGG130TraditionalPlanflag) {
      that.addLine(getLine0());
      that.addLine(getLine2());
      that.addLine(getLine5());
      that.addLine(getLine12());
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine2());
      that.removeLine(getLine5());
      that.removeLine(getLine12());
      ENGG130TraditionalPlanflag=false
  }
};
$scope.MATH100TraditionalPlanListener = function () {
 if (!MATH100TraditionalPlanflag) {
      that.addLine(getLine0());
      that.addLine(getLine3());
      that.addLine(getLine4());
      that.addLine(getLine9());
      MATH100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine3());
      that.removeLine(getLine4());
      that.removeLine(getLine9());
      MATH100TraditionalPlanflag=false
  }
};
$scope.CHEM105TraditionalPlanListener = function () {
 if (!CHEM105TraditionalPlanflag) {
      that.addLine(getLine1());
      that.addLine(getLine15());
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
      that.removeLine(getLine15());
      CHEM105TraditionalPlanflag=false
  }
};
$scope.ENGG160TraditionalPlanListener = function () {
 if (!ENGG160TraditionalPlanflag) {
      that.addLine(getLine18());
      ENGG160TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine18());
      ENGG160TraditionalPlanflag=false
  }
};
$scope.ENPH131TraditionalPlanListener = function () {
 if (!ENPH131TraditionalPlanflag) {
      that.addLine(getLine2());
      that.addLine(getLine13());
      that.addLine(getLine17());
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine13());
      that.removeLine(getLine17());
      ENPH131TraditionalPlanflag=false
  }
};
$scope.MATH101TraditionalPlanListener = function () {
 if (!MATH101TraditionalPlanflag) {
      that.addLine(getLine3());
      that.addLine(getLine6());
      that.addLine(getLine7());
      that.addLine(getLine10());
      that.addLine(getLine11());
      that.addLine(getLine14());
      that.addLine(getLine16());
      MATH101TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
      that.removeLine(getLine6());
      that.removeLine(getLine7());
      that.removeLine(getLine10());
      that.removeLine(getLine11());
      that.removeLine(getLine14());
      that.removeLine(getLine16());
      MATH101TraditionalPlanflag=false
  }
};
$scope.MATH102TraditionalPlanListener = function () {
 if (!MATH102TraditionalPlanflag) {
      that.addLine(getLine4());
      that.addLine(getLine8());
      that.addLine(getLine43());
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine8());
      that.removeLine(getLine43());
      MATH102TraditionalPlanflag=false
  }
};
$scope.CIVE270TraditionalPlanListener = function () {
 if (!CIVE270TraditionalPlanflag) {
      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine20());
      that.addLine(getLine23());
      that.addLine(getLine35());
      that.addLine(getLine40());
      CIVE270TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine20());
      that.removeLine(getLine23());
      that.removeLine(getLine35());
      that.removeLine(getLine40());
      CIVE270TraditionalPlanflag=false
  }
};
$scope.MATH209TraditionalPlanListener = function () {
 if (!MATH209TraditionalPlanflag) {
      that.addLine(getLine7());
      that.addLine(getLine8());
      that.addLine(getLine22());
      that.addLine(getLine29());
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine7());
      that.removeLine(getLine8());
      that.removeLine(getLine22());
      that.removeLine(getLine29());
      MATH209TraditionalPlanflag=false
  }
};
$scope.STAT235TraditionalPlanListener = function () {
 if (!STAT235TraditionalPlanflag) {
      that.addLine(getLine9());
      that.addLine(getLine10());
      that.addLine(getLine25());
      STAT235TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine25());
      STAT235TraditionalPlanflag=false
  }
};
$scope.CHE243ATraditionalPlanListener = function () {
 if (!CHE243ATraditionalPlanflag) {
      that.addLine(getLine11());
      CHE243ATraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      CHE243ATraditionalPlanflag=false
  }
};
$scope.MECE250ATraditionalPlanListener = function () {
 if (!MECE250ATraditionalPlanflag) {
      that.addLine(getLine12());
      that.addLine(getLine13());
      that.addLine(getLine14());
      MECE250ATraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      MECE250ATraditionalPlanflag=false
  }
};
$scope.ECE209TraditionalPlanListener = function () {
 if (!ECE209TraditionalPlanflag) {
      that.addLine(getLine24());
      ECE209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine24());
      ECE209TraditionalPlanflag=false
  }
};
$scope.MATE202TraditionalPlanListener = function () {
 if (!MATE202TraditionalPlanflag) {
      that.addLine(getLine15());
      that.addLine(getLine39());
      MATE202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine15());
      that.removeLine(getLine39());
      MATE202TraditionalPlanflag=false
  }
};
$scope.MATH201TraditionalPlanListener = function () {
 if (!MATH201TraditionalPlanflag) {
      that.addLine(getLine21());
      that.addLine(getLine44());
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine44());
      MATH201TraditionalPlanflag=false
  }
};
$scope.MECE230BTraditionalPlanListener = function () {
 if (!MECE230BTraditionalPlanflag) {
      that.addLine(getLine16());
      that.addLine(getLine17());
      MECE230BTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
      that.removeLine(getLine17());
      MECE230BTraditionalPlanflag=false
  }
};
$scope.MECE260BTraditionalPlanListener = function () {
 if (!MECE260BTraditionalPlanflag) {
      that.addLine(getLine18());
      that.addLine(getLine19());
      that.addLine(getLine20());
      MECE260BTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine18());
      that.removeLine(getLine19());
      that.removeLine(getLine20());
      MECE260BTraditionalPlanflag=false
  }
};
$scope.MATH300ATraditionalPlanListener = function () {
 if (!MATH300ATraditionalPlanflag) {
      that.addLine(getLine21());
      that.addLine(getLine22());
      MATH300ATraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine22());
      MATH300ATraditionalPlanflag=false
  }
};
$scope.MECE300ATraditionalPlanListener = function () {
 if (!MECE300ATraditionalPlanflag) {
      that.addLine(getLine23());
      that.addLine(getLine24());
      that.addLine(getLine25());
      MECE300ATraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine23());
      that.removeLine(getLine24());
      that.removeLine(getLine25());
      MECE300ATraditionalPlanflag=false
  }
};
$scope.MECE301ATraditionalPlanListener = function () {
 if (!MECE301ATraditionalPlanflag) {
      that.addLine(getLine26());
      MECE301ATraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      MECE301ATraditionalPlanflag=false
  }
};
$scope.MECE331ATraditionalPlanListener = function () {
 if (!MECE331ATraditionalPlanflag) {
      that.addLine(getLine27());
      that.addLine(getLine28());
      that.addLine(getLine29());
      that.addLine(getLine30());
      MECE331ATraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine27());
      that.removeLine(getLine28());
      that.removeLine(getLine29());
      that.removeLine(getLine30());
      MECE331ATraditionalPlanflag=false
  }
};
$scope.MECE371ATraditionalPlanListener = function () {
 if (!MECE371ATraditionalPlanflag) {
      that.addLine(getLine31());
      that.addLine(getLine32());
      that.addLine(getLine33());
      that.addLine(getLine34());
      MECE371ATraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
      that.removeLine(getLine32());
      that.removeLine(getLine33());
      that.removeLine(getLine34());
      MECE371ATraditionalPlanflag=false
  }
};
$scope.MECE380ATraditionalPlanListener = function () {
 if (!MECE380ATraditionalPlanflag) {
      that.addLine(getLine35());
      MECE380ATraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine35());
      MECE380ATraditionalPlanflag=false
  }
};
$scope.MECE340BTraditionalPlanListener = function () {
 if (!MECE340BTraditionalPlanflag) {
      that.addLine(getLine36());
      MECE340BTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine36());
      MECE340BTraditionalPlanflag=false
  }
};
$scope.MECE360BTraditionalPlanListener = function () {
 if (!MECE360BTraditionalPlanflag) {
      that.addLine(getLine37());
      that.addLine(getLine38());
      that.addLine(getLine39());
      that.addLine(getLine40());
      that.addLine(getLine41());
      MECE360BTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine38());
      that.removeLine(getLine39());
      that.removeLine(getLine40());
      that.removeLine(getLine41());
      MECE360BTraditionalPlanflag=false
  }
};
$scope.MECE362BTraditionalPlanListener = function () {
 if (!MECE362BTraditionalPlanflag) {
      that.addLine(getLine42());
      MECE362BTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine42());
      MECE362BTraditionalPlanflag=false
  }
};
$scope.MECE390BTraditionalPlanListener = function () {
 if (!MECE390BTraditionalPlanflag) {
      that.addLine(getLine43());
      that.addLine(getLine44());
      MECE390BTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine43());
      that.removeLine(getLine44());
      MECE390BTraditionalPlanflag=false
  }
};
$scope.MECE463ATraditionalPlanListener = function () {
 if (!MECE463ATraditionalPlanflag) {
      that.addLine(getLine45());
      MECE463ATraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine45());
      MECE463ATraditionalPlanflag=false
  }
};
$scope.MECE403BTraditionalPlanListener = function () {
 if (!MECE403BTraditionalPlanflag) {
      that.addLine(getLine46());
      that.addLine(getLine47());
      that.addLine(getLine48());
      that.addLine(getLine49());
      MECE403BTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine46());
      that.removeLine(getLine47());
      that.removeLine(getLine48());
      that.removeLine(getLine49());
      MECE403BTraditionalPlanflag=false
  }
};
$scope.MECE451BTraditionalPlanListener = function () {
 if (!MECE451BTraditionalPlanflag) {
      that.addLine(getLine50());
      that.addLine(getLine51());
      MECE451BTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine50());
      that.removeLine(getLine51());
      MECE451BTraditionalPlanflag=false
  }
};
$scope.MECE460BTraditionalPlanListener = function () {
 if (!MECE460BTraditionalPlanflag) {
      that.addLine(getLine52());
      that.addLine(getLine53());
      that.addLine(getLine54());
      that.addLine(getLine55());
      that.addLine(getLine56());
      MECE460BTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine52());
      that.removeLine(getLine53());
      that.removeLine(getLine54());
      that.removeLine(getLine55());
      that.removeLine(getLine56());
      MECE460BTraditionalPlanflag=false
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
$scope.CHEM103AlternatePlanListener = function () {
 if (!CHEM103AlternatePlanflag) {
      that.addLine(getLine58());
      CHEM103AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine58());
      CHEM103AlternatePlanflag=false
  }
};
$scope.ENGG130AlternatePlanListener = function () {
 if (!ENGG130AlternatePlanflag) {
      that.addLine(getLine57());
      that.addLine(getLine59());
      that.addLine(getLine64());
      that.addLine(getLine75());
      ENGG130AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine57());
      that.removeLine(getLine59());
      that.removeLine(getLine64());
      that.removeLine(getLine75());
      ENGG130AlternatePlanflag=false
  }
};
$scope.MATH100AlternatePlanListener = function () {
 if (!MATH100AlternatePlanflag) {
      that.addLine(getLine57());
      that.addLine(getLine60());
      that.addLine(getLine61());
      that.addLine(getLine71());
      MATH100AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine57());
      that.removeLine(getLine60());
      that.removeLine(getLine61());
      that.removeLine(getLine71());
      MATH100AlternatePlanflag=false
  }
};
$scope.CHEM105AlternatePlanListener = function () {
 if (!CHEM105AlternatePlanflag) {
      that.addLine(getLine58());
      that.addLine(getLine74());
      CHEM105AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine58());
      that.removeLine(getLine74());
      CHEM105AlternatePlanflag=false
  }
};
$scope.ENGG160AlternatePlanListener = function () {
 if (!ENGG160AlternatePlanflag) {
      that.addLine(getLine68());
      ENGG160AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine68());
      ENGG160AlternatePlanflag=false
  }
};
$scope.ENPH131AlternatePlanListener = function () {
 if (!ENPH131AlternatePlanflag) {
      that.addLine(getLine59());
      that.addLine(getLine67());
      that.addLine(getLine76());
      ENPH131AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine59());
      that.removeLine(getLine67());
      that.removeLine(getLine76());
      ENPH131AlternatePlanflag=false
  }
};
$scope.MATH101AlternatePlanListener = function () {
 if (!MATH101AlternatePlanflag) {
      that.addLine(getLine60());
      that.addLine(getLine62());
      that.addLine(getLine65());
      that.addLine(getLine66());
      that.addLine(getLine72());
      that.addLine(getLine73());
      that.addLine(getLine77());
      MATH101AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine60());
      that.removeLine(getLine62());
      that.removeLine(getLine65());
      that.removeLine(getLine66());
      that.removeLine(getLine72());
      that.removeLine(getLine73());
      that.removeLine(getLine77());
      MATH101AlternatePlanflag=false
  }
};
$scope.MATH102AlternatePlanListener = function () {
 if (!MATH102AlternatePlanflag) {
      that.addLine(getLine61());
      that.addLine(getLine63());
      that.addLine(getLine100());
      MATH102AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine61());
      that.removeLine(getLine63());
      that.removeLine(getLine100());
      MATH102AlternatePlanflag=false
  }
};
$scope.MATH201AlternatePlanListener = function () {
 if (!MATH201AlternatePlanflag) {
      that.addLine(getLine78());
      that.addLine(getLine101());
      that.addLine(getLine103());
      MATH201AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine78());
      that.removeLine(getLine101());
      that.removeLine(getLine103());
      MATH201AlternatePlanflag=false
  }
};
$scope.MATH209AlternatePlanListener = function () {
 if (!MATH209AlternatePlanflag) {
      that.addLine(getLine62());
      that.addLine(getLine63());
      that.addLine(getLine79());
      that.addLine(getLine86());
      that.addLine(getLine104());
      MATH209AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine63());
      that.removeLine(getLine79());
      that.removeLine(getLine86());
      that.removeLine(getLine104());
      MATH209AlternatePlanflag=false
  }
};
$scope.CIVE270AlternatePlanListener = function () {
 if (!CIVE270AlternatePlanflag) {
      that.addLine(getLine64());
      that.addLine(getLine65());
      that.addLine(getLine70());
      that.addLine(getLine80());
      that.addLine(getLine92());
      that.addLine(getLine97());
      CIVE270AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine64());
      that.removeLine(getLine65());
      that.removeLine(getLine70());
      that.removeLine(getLine80());
      that.removeLine(getLine92());
      that.removeLine(getLine97());
      CIVE270AlternatePlanflag=false
  }
};
$scope.MECE230AlternatePlanListener = function () {
 if (!MECE230AlternatePlanflag) {
      that.addLine(getLine66());
      that.addLine(getLine67());
      that.addLine(getLine84());
      that.addLine(getLine88());
      MECE230AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine66());
      that.removeLine(getLine67());
      that.removeLine(getLine84());
      that.removeLine(getLine88());
      MECE230AlternatePlanflag=false
  }
};
$scope.MECE260AlternatePlanListener = function () {
 if (!MECE260AlternatePlanflag) {
      that.addLine(getLine68());
      that.addLine(getLine69());
      that.addLine(getLine70());
      that.addLine(getLine94());
      MECE260AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine68());
      that.removeLine(getLine69());
      that.removeLine(getLine70());
      that.removeLine(getLine94());
      MECE260AlternatePlanflag=false
  }
};
$scope.MECE265AlternatePlanListener = function () {
 if (!MECE265AlternatePlanflag) {
      that.addLine(getLine69());
      that.addLine(getLine95());
      MECE265AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine69());
      that.removeLine(getLine95());
      MECE265AlternatePlanflag=false
  }
};
$scope.STAT235AlternatePlanListener = function () {
 if (!STAT235AlternatePlanflag) {
      that.addLine(getLine71());
      that.addLine(getLine72());
      that.addLine(getLine82());
      STAT235AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine71());
      that.removeLine(getLine72());
      that.removeLine(getLine82());
      STAT235AlternatePlanflag=false
  }
};
$scope.CHE243AlternatePlanListener = function () {
 if (!CHE243AlternatePlanflag) {
      that.addLine(getLine73());
      that.addLine(getLine87());
      that.addLine(getLine89());
      that.addLine(getLine93());
      CHE243AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine73());
      that.removeLine(getLine87());
      that.removeLine(getLine89());
      that.removeLine(getLine93());
      CHE243AlternatePlanflag=false
  }
};
$scope.ECE209AlternatePlanListener = function () {
 if (!ECE209AlternatePlanflag) {
      that.addLine(getLine81());
      ECE209AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine81());
      ECE209AlternatePlanflag=false
  }
};
$scope.MATE202AlternatePlanListener = function () {
 if (!MATE202AlternatePlanflag) {
      that.addLine(getLine74());
      that.addLine(getLine96());
      MATE202AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine74());
      that.removeLine(getLine96());
      MATE202AlternatePlanflag=false
  }
};
$scope.MECE200AlternatePlanListener = function () {
 if (!MECE200AlternatePlanflag) {
      that.addLine(getLine111());
      MECE200AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine111());
      MECE200AlternatePlanflag=false
  }
};
$scope.MECE250AlternatePlanListener = function () {
 if (!MECE250AlternatePlanflag) {
      that.addLine(getLine75());
      that.addLine(getLine76());
      that.addLine(getLine77());
      that.addLine(getLine85());
      that.addLine(getLine99());
      that.addLine(getLine109());
      MECE250AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine75());
      that.removeLine(getLine76());
      that.removeLine(getLine77());
      that.removeLine(getLine85());
      that.removeLine(getLine99());
      that.removeLine(getLine109());
      MECE250AlternatePlanflag=false
  }
};
$scope.MATH300AAlternatePlanListener = function () {
 if (!MATH300AAlternatePlanflag) {
      that.addLine(getLine78());
      that.addLine(getLine79());
      MATH300AAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine78());
      that.removeLine(getLine79());
      MATH300AAlternatePlanflag=false
  }
};
$scope.MECE300AAlternatePlanListener = function () {
 if (!MECE300AAlternatePlanflag) {
      that.addLine(getLine80());
      that.addLine(getLine81());
      that.addLine(getLine82());
      MECE300AAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine80());
      that.removeLine(getLine81());
      that.removeLine(getLine82());
      MECE300AAlternatePlanflag=false
  }
};
$scope.MECE301AAlternatePlanListener = function () {
 if (!MECE301AAlternatePlanflag) {
      that.addLine(getLine83());
      MECE301AAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine83());
      MECE301AAlternatePlanflag=false
  }
};
$scope.MECE331AAlternatePlanListener = function () {
 if (!MECE331AAlternatePlanflag) {
      that.addLine(getLine84());
      that.addLine(getLine85());
      that.addLine(getLine86());
      that.addLine(getLine87());
      MECE331AAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine84());
      that.removeLine(getLine85());
      that.removeLine(getLine86());
      that.removeLine(getLine87());
      MECE331AAlternatePlanflag=false
  }
};
$scope.MECE371AAlternatePlanListener = function () {
 if (!MECE371AAlternatePlanflag) {
      that.addLine(getLine88());
      that.addLine(getLine89());
      that.addLine(getLine90());
      that.addLine(getLine91());
      MECE371AAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine88());
      that.removeLine(getLine89());
      that.removeLine(getLine90());
      that.removeLine(getLine91());
      MECE371AAlternatePlanflag=false
  }
};
$scope.MECE380AAlternatePlanListener = function () {
 if (!MECE380AAlternatePlanflag) {
      that.addLine(getLine92());
      MECE380AAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine92());
      MECE380AAlternatePlanflag=false
  }
};
$scope.MECE340BAlternatePlanListener = function () {
 if (!MECE340BAlternatePlanflag) {
      that.addLine(getLine93());
      MECE340BAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine93());
      MECE340BAlternatePlanflag=false
  }
};
$scope.MECE360BAlternatePlanListener = function () {
 if (!MECE360BAlternatePlanflag) {
      that.addLine(getLine94());
      that.addLine(getLine95());
      that.addLine(getLine96());
      that.addLine(getLine97());
      that.addLine(getLine98());
      MECE360BAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine94());
      that.removeLine(getLine95());
      that.removeLine(getLine96());
      that.removeLine(getLine97());
      that.removeLine(getLine98());
      MECE360BAlternatePlanflag=false
  }
};
$scope.MECE362BAlternatePlanListener = function () {
 if (!MECE362BAlternatePlanflag) {
      that.addLine(getLine99());
      MECE362BAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine99());
      MECE362BAlternatePlanflag=false
  }
};
$scope.MECE390BAlternatePlanListener = function () {
 if (!MECE390BAlternatePlanflag) {
      that.addLine(getLine100());
      that.addLine(getLine101());
      MECE390BAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine100());
      that.removeLine(getLine101());
      MECE390BAlternatePlanflag=false
  }
};
$scope.MECE463AAlternatePlanListener = function () {
 if (!MECE463AAlternatePlanflag) {
      that.addLine(getLine102());
      MECE463AAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine102());
      MECE463AAlternatePlanflag=false
  }
};
$scope.CHE448AlternatePlanListener = function () {
 if (!CHE448AlternatePlanflag) {
      that.addLine(getLine103());
      that.addLine(getLine104());
      CHE448AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine103());
      that.removeLine(getLine104());
      CHE448AlternatePlanflag=false
  }
};
$scope.MECE403BAlternatePlanListener = function () {
 if (!MECE403BAlternatePlanflag) {
      that.addLine(getLine105());
      that.addLine(getLine106());
      that.addLine(getLine107());
      that.addLine(getLine108());
      MECE403BAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine105());
      that.removeLine(getLine106());
      that.removeLine(getLine107());
      that.removeLine(getLine108());
      MECE403BAlternatePlanflag=false
  }
};
$scope.MECE451BAlternatePlanListener = function () {
 if (!MECE451BAlternatePlanflag) {
      that.addLine(getLine109());
      that.addLine(getLine110());
      MECE451BAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine109());
      that.removeLine(getLine110());
      MECE451BAlternatePlanflag=false
  }
};
$scope.MECE460BAlternatePlanListener = function () {
 if (!MECE460BAlternatePlanflag) {
      that.addLine(getLine111());
      that.addLine(getLine112());
      that.addLine(getLine113());
      that.addLine(getLine114());
      that.addLine(getLine115());
      MECE460BAlternatePlanflag=true
  }
 else {
      that.removeLine(getLine111());
      that.removeLine(getLine112());
      that.removeLine(getLine113());
      that.removeLine(getLine114());
      that.removeLine(getLine115());
      MECE460BAlternatePlanflag=false
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
$scope.CHEM103CoopPlan1Listener = function () {
 if (!CHEM103CoopPlan1flag) {
      that.addLine(getLine117());
      CHEM103CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine117());
      CHEM103CoopPlan1flag=false
  }
};
$scope.ENGG130CoopPlan1Listener = function () {
 if (!ENGG130CoopPlan1flag) {
      that.addLine(getLine116());
      that.addLine(getLine118());
      that.addLine(getLine121());
      that.addLine(getLine134());
      ENGG130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine116());
      that.removeLine(getLine118());
      that.removeLine(getLine121());
      that.removeLine(getLine134());
      ENGG130CoopPlan1flag=false
  }
};
$scope.MATH100CoopPlan1Listener = function () {
 if (!MATH100CoopPlan1flag) {
      that.addLine(getLine116());
      that.addLine(getLine119());
      that.addLine(getLine120());
      that.addLine(getLine130());
      MATH100CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine116());
      that.removeLine(getLine119());
      that.removeLine(getLine120());
      that.removeLine(getLine130());
      MATH100CoopPlan1flag=false
  }
};
$scope.CHEM105CoopPlan1Listener = function () {
 if (!CHEM105CoopPlan1flag) {
      that.addLine(getLine117());
      that.addLine(getLine133());
      CHEM105CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine117());
      that.removeLine(getLine133());
      CHEM105CoopPlan1flag=false
  }
};
$scope.ENGG160CoopPlan1Listener = function () {
 if (!ENGG160CoopPlan1flag) {
      that.addLine(getLine127());
      ENGG160CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine127());
      ENGG160CoopPlan1flag=false
  }
};
$scope.ENPH131CoopPlan1Listener = function () {
 if (!ENPH131CoopPlan1flag) {
      that.addLine(getLine118());
      that.addLine(getLine126());
      that.addLine(getLine135());
      ENPH131CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine118());
      that.removeLine(getLine126());
      that.removeLine(getLine135());
      ENPH131CoopPlan1flag=false
  }
};
$scope.MATH101CoopPlan1Listener = function () {
 if (!MATH101CoopPlan1flag) {
      that.addLine(getLine119());
      that.addLine(getLine122());
      that.addLine(getLine123());
      that.addLine(getLine125());
      that.addLine(getLine131());
      that.addLine(getLine132());
      that.addLine(getLine136());
      MATH101CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine119());
      that.removeLine(getLine122());
      that.removeLine(getLine123());
      that.removeLine(getLine125());
      that.removeLine(getLine131());
      that.removeLine(getLine132());
      that.removeLine(getLine136());
      MATH101CoopPlan1flag=false
  }
};
$scope.MATH102CoopPlan1Listener = function () {
 if (!MATH102CoopPlan1flag) {
      that.addLine(getLine120());
      that.addLine(getLine124());
      that.addLine(getLine163());
      MATH102CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine120());
      that.removeLine(getLine124());
      that.removeLine(getLine163());
      MATH102CoopPlan1flag=false
  }
};
$scope.CIVE270CoopPlan1Listener = function () {
 if (!CIVE270CoopPlan1flag) {
      that.addLine(getLine121());
      that.addLine(getLine122());
      that.addLine(getLine129());
      that.addLine(getLine141());
      that.addLine(getLine153());
      that.addLine(getLine160());
      CIVE270CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine122());
      that.removeLine(getLine129());
      that.removeLine(getLine141());
      that.removeLine(getLine153());
      that.removeLine(getLine160());
      CIVE270CoopPlan1flag=false
  }
};
$scope.ENGG299CoopPlan1Listener = function () {
 if (!ENGG299CoopPlan1flag) {
      that.addLine(getLine137());
      ENGG299CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine137());
      ENGG299CoopPlan1flag=false
  }
};
$scope.MATH209CoopPlan1Listener = function () {
 if (!MATH209CoopPlan1flag) {
      that.addLine(getLine123());
      that.addLine(getLine124());
      that.addLine(getLine140());
      that.addLine(getLine147());
      that.addLine(getLine168());
      MATH209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine123());
      that.removeLine(getLine124());
      that.removeLine(getLine140());
      that.removeLine(getLine147());
      that.removeLine(getLine168());
      MATH209CoopPlan1flag=false
  }
};
$scope.MECE230CoopPlan1Listener = function () {
 if (!MECE230CoopPlan1flag) {
      that.addLine(getLine125());
      that.addLine(getLine126());
      that.addLine(getLine145());
      that.addLine(getLine149());
      MECE230CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine125());
      that.removeLine(getLine126());
      that.removeLine(getLine145());
      that.removeLine(getLine149());
      MECE230CoopPlan1flag=false
  }
};
$scope.MECE260CoopPlan1Listener = function () {
 if (!MECE260CoopPlan1flag) {
      that.addLine(getLine127());
      that.addLine(getLine128());
      that.addLine(getLine129());
      that.addLine(getLine157());
      MECE260CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine128());
      that.removeLine(getLine129());
      that.removeLine(getLine157());
      MECE260CoopPlan1flag=false
  }
};
$scope.MECE265CoopPlan1Listener = function () {
 if (!MECE265CoopPlan1flag) {
      that.addLine(getLine128());
      that.addLine(getLine158());
      MECE265CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine128());
      that.removeLine(getLine158());
      MECE265CoopPlan1flag=false
  }
};
$scope.STAT235CoopPlan1Listener = function () {
 if (!STAT235CoopPlan1flag) {
      that.addLine(getLine130());
      that.addLine(getLine131());
      that.addLine(getLine143());
      STAT235CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine130());
      that.removeLine(getLine131());
      that.removeLine(getLine143());
      STAT235CoopPlan1flag=false
  }
};
$scope.CHE243CoopPlan1Listener = function () {
 if (!CHE243CoopPlan1flag) {
      that.addLine(getLine132());
      that.addLine(getLine148());
      that.addLine(getLine150());
      that.addLine(getLine156());
      CHE243CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine132());
      that.removeLine(getLine148());
      that.removeLine(getLine150());
      that.removeLine(getLine156());
      CHE243CoopPlan1flag=false
  }
};
$scope.ECE209CoopPlan1Listener = function () {
 if (!ECE209CoopPlan1flag) {
      that.addLine(getLine142());
      ECE209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine142());
      ECE209CoopPlan1flag=false
  }
};
$scope.MATE201CoopPlan1Listener = function () {
 if (!MATE201CoopPlan1flag) {
      that.addLine(getLine133());
      MATE201CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine133());
      MATE201CoopPlan1flag=false
  }
};
$scope.MATH201CoopPlan1Listener = function () {
 if (!MATH201CoopPlan1flag) {
      that.addLine(getLine139());
      that.addLine(getLine164());
      that.addLine(getLine167());
      MATH201CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine139());
      that.removeLine(getLine164());
      that.removeLine(getLine167());
      MATH201CoopPlan1flag=false
  }
};
$scope.MECE200CoopPlan1Listener = function () {
 if (!MECE200CoopPlan1flag) {
      that.addLine(getLine175());
      MECE200CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine175());
      MECE200CoopPlan1flag=false
  }
};
$scope.MECE250CoopPlan1Listener = function () {
 if (!MECE250CoopPlan1flag) {
      that.addLine(getLine134());
      that.addLine(getLine135());
      that.addLine(getLine136());
      that.addLine(getLine146());
      that.addLine(getLine162());
      that.addLine(getLine173());
      MECE250CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine134());
      that.removeLine(getLine135());
      that.removeLine(getLine136());
      that.removeLine(getLine146());
      that.removeLine(getLine162());
      that.removeLine(getLine173());
      MECE250CoopPlan1flag=false
  }
};
$scope.WKEXP901CoopPlan1Listener = function () {
 if (!WKEXP901CoopPlan1flag) {
      that.addLine(getLine137());
      that.addLine(getLine138());
      WKEXP901CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine137());
      that.removeLine(getLine138());
      WKEXP901CoopPlan1flag=false
  }
};
$scope.WKEXP902CoopPlan1Listener = function () {
 if (!WKEXP902CoopPlan1flag) {
      that.addLine(getLine138());
      that.addLine(getLine154());
      WKEXP902CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine138());
      that.removeLine(getLine154());
      WKEXP902CoopPlan1flag=false
  }
};
$scope.MATH300ACoopPlan1Listener = function () {
 if (!MATH300ACoopPlan1flag) {
      that.addLine(getLine139());
      that.addLine(getLine140());
      MATH300ACoopPlan1flag=true
  }
 else {
      that.removeLine(getLine139());
      that.removeLine(getLine140());
      MATH300ACoopPlan1flag=false
  }
};
$scope.MECE300ACoopPlan1Listener = function () {
 if (!MECE300ACoopPlan1flag) {
      that.addLine(getLine141());
      that.addLine(getLine142());
      that.addLine(getLine143());
      MECE300ACoopPlan1flag=true
  }
 else {
      that.removeLine(getLine141());
      that.removeLine(getLine142());
      that.removeLine(getLine143());
      MECE300ACoopPlan1flag=false
  }
};
$scope.MECE301ACoopPlan1Listener = function () {
 if (!MECE301ACoopPlan1flag) {
      that.addLine(getLine144());
      MECE301ACoopPlan1flag=true
  }
 else {
      that.removeLine(getLine144());
      MECE301ACoopPlan1flag=false
  }
};
$scope.MECE331ACoopPlan1Listener = function () {
 if (!MECE331ACoopPlan1flag) {
      that.addLine(getLine145());
      that.addLine(getLine146());
      that.addLine(getLine147());
      that.addLine(getLine148());
      MECE331ACoopPlan1flag=true
  }
 else {
      that.removeLine(getLine145());
      that.removeLine(getLine146());
      that.removeLine(getLine147());
      that.removeLine(getLine148());
      MECE331ACoopPlan1flag=false
  }
};
$scope.MECE371ACoopPlan1Listener = function () {
 if (!MECE371ACoopPlan1flag) {
      that.addLine(getLine149());
      that.addLine(getLine150());
      that.addLine(getLine151());
      that.addLine(getLine152());
      MECE371ACoopPlan1flag=true
  }
 else {
      that.removeLine(getLine149());
      that.removeLine(getLine150());
      that.removeLine(getLine151());
      that.removeLine(getLine152());
      MECE371ACoopPlan1flag=false
  }
};
$scope.MECE380ACoopPlan1Listener = function () {
 if (!MECE380ACoopPlan1flag) {
      that.addLine(getLine153());
      MECE380ACoopPlan1flag=true
  }
 else {
      that.removeLine(getLine153());
      MECE380ACoopPlan1flag=false
  }
};
$scope.WKEXP903CoopPlan1Listener = function () {
 if (!WKEXP903CoopPlan1flag) {
      that.addLine(getLine154());
      that.addLine(getLine155());
      WKEXP903CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine154());
      that.removeLine(getLine155());
      WKEXP903CoopPlan1flag=false
  }
};
$scope.WKEXP904CoopPlan1Listener = function () {
 if (!WKEXP904CoopPlan1flag) {
      that.addLine(getLine155());
      that.addLine(getLine166());
      WKEXP904CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine155());
      that.removeLine(getLine166());
      WKEXP904CoopPlan1flag=false
  }
};
$scope.MECE340BCoopPlan1Listener = function () {
 if (!MECE340BCoopPlan1flag) {
      that.addLine(getLine156());
      MECE340BCoopPlan1flag=true
  }
 else {
      that.removeLine(getLine156());
      MECE340BCoopPlan1flag=false
  }
};
$scope.MECE360BCoopPlan1Listener = function () {
 if (!MECE360BCoopPlan1flag) {
      that.addLine(getLine157());
      that.addLine(getLine158());
      that.addLine(getLine159());
      that.addLine(getLine160());
      that.addLine(getLine161());
      MECE360BCoopPlan1flag=true
  }
 else {
      that.removeLine(getLine157());
      that.removeLine(getLine158());
      that.removeLine(getLine159());
      that.removeLine(getLine160());
      that.removeLine(getLine161());
      MECE360BCoopPlan1flag=false
  }
};
$scope.MECE362BCoopPlan1Listener = function () {
 if (!MECE362BCoopPlan1flag) {
      that.addLine(getLine162());
      MECE362BCoopPlan1flag=true
  }
 else {
      that.removeLine(getLine162());
      MECE362BCoopPlan1flag=false
  }
};
$scope.MECE390BCoopPlan1Listener = function () {
 if (!MECE390BCoopPlan1flag) {
      that.addLine(getLine163());
      that.addLine(getLine164());
      MECE390BCoopPlan1flag=true
  }
 else {
      that.removeLine(getLine163());
      that.removeLine(getLine164());
      MECE390BCoopPlan1flag=false
  }
};
$scope.MECE463CoopPlan1Listener = function () {
 if (!MECE463CoopPlan1flag) {
      that.addLine(getLine165());
      MECE463CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine165());
      MECE463CoopPlan1flag=false
  }
};
$scope.WKEXP905CoopPlan1Listener = function () {
 if (!WKEXP905CoopPlan1flag) {
      that.addLine(getLine166());
      WKEXP905CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine166());
      WKEXP905CoopPlan1flag=false
  }
};
$scope.CHE448CoopPlan1Listener = function () {
 if (!CHE448CoopPlan1flag) {
      that.addLine(getLine167());
      that.addLine(getLine168());
      CHE448CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine167());
      that.removeLine(getLine168());
      CHE448CoopPlan1flag=false
  }
};
$scope.MECE403CoopPlan1Listener = function () {
 if (!MECE403CoopPlan1flag) {
      that.addLine(getLine169());
      that.addLine(getLine170());
      that.addLine(getLine171());
      that.addLine(getLine172());
      MECE403CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine169());
      that.removeLine(getLine170());
      that.removeLine(getLine171());
      that.removeLine(getLine172());
      MECE403CoopPlan1flag=false
  }
};
$scope.MECE451CoopPlan1Listener = function () {
 if (!MECE451CoopPlan1flag) {
      that.addLine(getLine173());
      that.addLine(getLine174());
      MECE451CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine173());
      that.removeLine(getLine174());
      MECE451CoopPlan1flag=false
  }
};
$scope.MECE460CoopPlan1Listener = function () {
 if (!MECE460CoopPlan1flag) {
      that.addLine(getLine175());
      that.addLine(getLine176());
      that.addLine(getLine177());
      that.addLine(getLine178());
      that.addLine(getLine179());
      MECE460CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine175());
      that.removeLine(getLine176());
      that.removeLine(getLine177());
      that.removeLine(getLine178());
      that.removeLine(getLine179());
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
$scope.CHEM103CoopPlan2Listener = function () {
 if (!CHEM103CoopPlan2flag) {
      that.addLine(getLine181());
      CHEM103CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine181());
      CHEM103CoopPlan2flag=false
  }
};
$scope.ENGG130CoopPlan2Listener = function () {
 if (!ENGG130CoopPlan2flag) {
      that.addLine(getLine180());
      that.addLine(getLine182());
      that.addLine(getLine186());
      that.addLine(getLine190());
      ENGG130CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine180());
      that.removeLine(getLine182());
      that.removeLine(getLine186());
      that.removeLine(getLine190());
      ENGG130CoopPlan2flag=false
  }
};
$scope.MATH100CoopPlan2Listener = function () {
 if (!MATH100CoopPlan2flag) {
      that.addLine(getLine180());
      that.addLine(getLine183());
      that.addLine(getLine184());
      that.addLine(getLine193());
      MATH100CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine180());
      that.removeLine(getLine183());
      that.removeLine(getLine184());
      that.removeLine(getLine193());
      MATH100CoopPlan2flag=false
  }
};
$scope.CHEM105CoopPlan2Listener = function () {
 if (!CHEM105CoopPlan2flag) {
      that.addLine(getLine181());
      that.addLine(getLine196());
      CHEM105CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine181());
      that.removeLine(getLine196());
      CHEM105CoopPlan2flag=false
  }
};
$scope.ENGG160CoopPlan2Listener = function () {
 if (!ENGG160CoopPlan2flag) {
      that.addLine(getLine199());
      ENGG160CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine199());
      ENGG160CoopPlan2flag=false
  }
};
$scope.ENPH131CoopPlan2Listener = function () {
 if (!ENPH131CoopPlan2flag) {
      that.addLine(getLine182());
      that.addLine(getLine191());
      that.addLine(getLine198());
      ENPH131CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine182());
      that.removeLine(getLine191());
      that.removeLine(getLine198());
      ENPH131CoopPlan2flag=false
  }
};
$scope.MATH101CoopPlan2Listener = function () {
 if (!MATH101CoopPlan2flag) {
      that.addLine(getLine183());
      that.addLine(getLine185());
      that.addLine(getLine187());
      that.addLine(getLine188());
      that.addLine(getLine192());
      that.addLine(getLine194());
      that.addLine(getLine197());
      MATH101CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine183());
      that.removeLine(getLine185());
      that.removeLine(getLine187());
      that.removeLine(getLine188());
      that.removeLine(getLine192());
      that.removeLine(getLine194());
      that.removeLine(getLine197());
      MATH101CoopPlan2flag=false
  }
};
$scope.MATH102CoopPlan2Listener = function () {
 if (!MATH102CoopPlan2flag) {
      that.addLine(getLine184());
      that.addLine(getLine189());
      that.addLine(getLine226());
      MATH102CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine184());
      that.removeLine(getLine189());
      that.removeLine(getLine226());
      MATH102CoopPlan2flag=false
  }
};
$scope.CHE243CoopPlan2Listener = function () {
 if (!CHE243CoopPlan2flag) {
      that.addLine(getLine185());
      that.addLine(getLine211());
      that.addLine(getLine213());
      that.addLine(getLine219());
      CHE243CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine185());
      that.removeLine(getLine211());
      that.removeLine(getLine213());
      that.removeLine(getLine219());
      CHE243CoopPlan2flag=false
  }
};
$scope.CIVE270CoopPlan2Listener = function () {
 if (!CIVE270CoopPlan2flag) {
      that.addLine(getLine186());
      that.addLine(getLine187());
      that.addLine(getLine201());
      that.addLine(getLine204());
      that.addLine(getLine216());
      that.addLine(getLine223());
      CIVE270CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine186());
      that.removeLine(getLine187());
      that.removeLine(getLine201());
      that.removeLine(getLine204());
      that.removeLine(getLine216());
      that.removeLine(getLine223());
      CIVE270CoopPlan2flag=false
  }
};
$scope.ENGG299CoopPlan2Listener = function () {
 if (!ENGG299CoopPlan2flag) {
      that.addLine(getLine195());
      ENGG299CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine195());
      ENGG299CoopPlan2flag=false
  }
};
$scope.MATH209CoopPlan2Listener = function () {
 if (!MATH209CoopPlan2flag) {
      that.addLine(getLine188());
      that.addLine(getLine189());
      that.addLine(getLine203());
      that.addLine(getLine210());
      that.addLine(getLine242());
      MATH209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine188());
      that.removeLine(getLine189());
      that.removeLine(getLine203());
      that.removeLine(getLine210());
      that.removeLine(getLine242());
      MATH209CoopPlan2flag=false
  }
};
$scope.MECE200CoopPlan2Listener = function () {
 if (!MECE200CoopPlan2flag) {
      that.addLine(getLine235());
      MECE200CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine235());
      MECE200CoopPlan2flag=false
  }
};
$scope.MECE250CoopPlan2Listener = function () {
 if (!MECE250CoopPlan2flag) {
      that.addLine(getLine190());
      that.addLine(getLine191());
      that.addLine(getLine192());
      that.addLine(getLine209());
      that.addLine(getLine225());
      that.addLine(getLine233());
      MECE250CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine190());
      that.removeLine(getLine191());
      that.removeLine(getLine192());
      that.removeLine(getLine209());
      that.removeLine(getLine225());
      that.removeLine(getLine233());
      MECE250CoopPlan2flag=false
  }
};
$scope.STAT235CoopPlan2Listener = function () {
 if (!STAT235CoopPlan2flag) {
      that.addLine(getLine193());
      that.addLine(getLine194());
      that.addLine(getLine206());
      STAT235CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine193());
      that.removeLine(getLine194());
      that.removeLine(getLine206());
      STAT235CoopPlan2flag=false
  }
};
$scope.WKEXP901CoopPlan2Listener = function () {
 if (!WKEXP901CoopPlan2flag) {
      that.addLine(getLine195());
      that.addLine(getLine217());
      WKEXP901CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine195());
      that.removeLine(getLine217());
      WKEXP901CoopPlan2flag=false
  }
};
$scope.ECE209CoopPlan2Listener = function () {
 if (!ECE209CoopPlan2flag) {
      that.addLine(getLine205());
      ECE209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine205());
      ECE209CoopPlan2flag=false
  }
};
$scope.MATE202CoopPlan2Listener = function () {
 if (!MATE202CoopPlan2flag) {
      that.addLine(getLine196());
      that.addLine(getLine222());
      MATE202CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine196());
      that.removeLine(getLine222());
      MATE202CoopPlan2flag=false
  }
};
$scope.MATH201CoopPlan2Listener = function () {
 if (!MATH201CoopPlan2flag) {
      that.addLine(getLine202());
      that.addLine(getLine227());
      that.addLine(getLine241());
      MATH201CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine202());
      that.removeLine(getLine227());
      that.removeLine(getLine241());
      MATH201CoopPlan2flag=false
  }
};
$scope.MECE230CoopPlan2Listener = function () {
 if (!MECE230CoopPlan2flag) {
      that.addLine(getLine197());
      that.addLine(getLine198());
      that.addLine(getLine208());
      that.addLine(getLine212());
      MECE230CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine197());
      that.removeLine(getLine198());
      that.removeLine(getLine208());
      that.removeLine(getLine212());
      MECE230CoopPlan2flag=false
  }
};
$scope.MECE260CoopPlan2Listener = function () {
 if (!MECE260CoopPlan2flag) {
      that.addLine(getLine199());
      that.addLine(getLine200());
      that.addLine(getLine201());
      that.addLine(getLine220());
      MECE260CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine199());
      that.removeLine(getLine200());
      that.removeLine(getLine201());
      that.removeLine(getLine220());
      MECE260CoopPlan2flag=false
  }
};
$scope.MECE265CoopPlan2Listener = function () {
 if (!MECE265CoopPlan2flag) {
      that.addLine(getLine200());
      that.addLine(getLine221());
      MECE265CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine200());
      that.removeLine(getLine221());
      MECE265CoopPlan2flag=false
  }
};
$scope.MATH300ACoopPlan2Listener = function () {
 if (!MATH300ACoopPlan2flag) {
      that.addLine(getLine202());
      that.addLine(getLine203());
      MATH300ACoopPlan2flag=true
  }
 else {
      that.removeLine(getLine202());
      that.removeLine(getLine203());
      MATH300ACoopPlan2flag=false
  }
};
$scope.MECE300ACoopPlan2Listener = function () {
 if (!MECE300ACoopPlan2flag) {
      that.addLine(getLine204());
      that.addLine(getLine205());
      that.addLine(getLine206());
      MECE300ACoopPlan2flag=true
  }
 else {
      that.removeLine(getLine204());
      that.removeLine(getLine205());
      that.removeLine(getLine206());
      MECE300ACoopPlan2flag=false
  }
};
$scope.MECE301ACoopPlan2Listener = function () {
 if (!MECE301ACoopPlan2flag) {
      that.addLine(getLine207());
      MECE301ACoopPlan2flag=true
  }
 else {
      that.removeLine(getLine207());
      MECE301ACoopPlan2flag=false
  }
};
$scope.MECE331ACoopPlan2Listener = function () {
 if (!MECE331ACoopPlan2flag) {
      that.addLine(getLine208());
      that.addLine(getLine209());
      that.addLine(getLine210());
      that.addLine(getLine211());
      MECE331ACoopPlan2flag=true
  }
 else {
      that.removeLine(getLine208());
      that.removeLine(getLine209());
      that.removeLine(getLine210());
      that.removeLine(getLine211());
      MECE331ACoopPlan2flag=false
  }
};
$scope.MECE371ACoopPlan2Listener = function () {
 if (!MECE371ACoopPlan2flag) {
      that.addLine(getLine212());
      that.addLine(getLine213());
      that.addLine(getLine214());
      that.addLine(getLine215());
      MECE371ACoopPlan2flag=true
  }
 else {
      that.removeLine(getLine212());
      that.removeLine(getLine213());
      that.removeLine(getLine214());
      that.removeLine(getLine215());
      MECE371ACoopPlan2flag=false
  }
};
$scope.MECE380ACoopPlan2Listener = function () {
 if (!MECE380ACoopPlan2flag) {
      that.addLine(getLine216());
      MECE380ACoopPlan2flag=true
  }
 else {
      that.removeLine(getLine216());
      MECE380ACoopPlan2flag=false
  }
};
$scope.WKEXP902CoopPlan2Listener = function () {
 if (!WKEXP902CoopPlan2flag) {
      that.addLine(getLine217());
      that.addLine(getLine218());
      WKEXP902CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine217());
      that.removeLine(getLine218());
      WKEXP902CoopPlan2flag=false
  }
};
$scope.WKEXP903CoopPlan2Listener = function () {
 if (!WKEXP903CoopPlan2flag) {
      that.addLine(getLine218());
      that.addLine(getLine228());
      WKEXP903CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine218());
      that.removeLine(getLine228());
      WKEXP903CoopPlan2flag=false
  }
};
$scope.MECE340BCoopPlan2Listener = function () {
 if (!MECE340BCoopPlan2flag) {
      that.addLine(getLine219());
      MECE340BCoopPlan2flag=true
  }
 else {
      that.removeLine(getLine219());
      MECE340BCoopPlan2flag=false
  }
};
$scope.MECE360BCoopPlan2Listener = function () {
 if (!MECE360BCoopPlan2flag) {
      that.addLine(getLine220());
      that.addLine(getLine221());
      that.addLine(getLine222());
      that.addLine(getLine223());
      that.addLine(getLine224());
      MECE360BCoopPlan2flag=true
  }
 else {
      that.removeLine(getLine220());
      that.removeLine(getLine221());
      that.removeLine(getLine222());
      that.removeLine(getLine223());
      that.removeLine(getLine224());
      MECE360BCoopPlan2flag=false
  }
};
$scope.MECE362BCoopPlan2Listener = function () {
 if (!MECE362BCoopPlan2flag) {
      that.addLine(getLine225());
      MECE362BCoopPlan2flag=true
  }
 else {
      that.removeLine(getLine225());
      MECE362BCoopPlan2flag=false
  }
};
$scope.MECE390BCoopPlan2Listener = function () {
 if (!MECE390BCoopPlan2flag) {
      that.addLine(getLine226());
      that.addLine(getLine227());
      MECE390BCoopPlan2flag=true
  }
 else {
      that.removeLine(getLine226());
      that.removeLine(getLine227());
      MECE390BCoopPlan2flag=false
  }
};
$scope.WKEXP904CoopPlan2Listener = function () {
 if (!WKEXP904CoopPlan2flag) {
      that.addLine(getLine228());
      that.addLine(getLine240());
      WKEXP904CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine228());
      that.removeLine(getLine240());
      WKEXP904CoopPlan2flag=false
  }
};
$scope.MECE403CoopPlan2Listener = function () {
 if (!MECE403CoopPlan2flag) {
      that.addLine(getLine229());
      that.addLine(getLine230());
      that.addLine(getLine231());
      that.addLine(getLine232());
      MECE403CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine229());
      that.removeLine(getLine230());
      that.removeLine(getLine231());
      that.removeLine(getLine232());
      MECE403CoopPlan2flag=false
  }
};
$scope.MECE451CoopPlan2Listener = function () {
 if (!MECE451CoopPlan2flag) {
      that.addLine(getLine233());
      that.addLine(getLine234());
      MECE451CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine233());
      that.removeLine(getLine234());
      MECE451CoopPlan2flag=false
  }
};
$scope.MECE460CoopPlan2Listener = function () {
 if (!MECE460CoopPlan2flag) {
      that.addLine(getLine235());
      that.addLine(getLine236());
      that.addLine(getLine237());
      that.addLine(getLine238());
      that.addLine(getLine239());
      MECE460CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine235());
      that.removeLine(getLine236());
      that.removeLine(getLine237());
      that.removeLine(getLine238());
      that.removeLine(getLine239());
      MECE460CoopPlan2flag=false
  }
};
$scope.WKEXP905CoopPlan2Listener = function () {
 if (!WKEXP905CoopPlan2flag) {
      that.addLine(getLine240());
      WKEXP905CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine240());
      WKEXP905CoopPlan2flag=false
  }
};
$scope.CHE448CoopPlan2Listener = function () {
 if (!CHE448CoopPlan2flag) {
      that.addLine(getLine241());
      that.addLine(getLine242());
      CHE448CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine241());
      that.removeLine(getLine242());
      CHE448CoopPlan2flag=false
  }
};
$scope.MECE463CoopPlan2Listener = function () {
 if (!MECE463CoopPlan2flag) {
      that.addLine(getLine243());
      MECE463CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine243());
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
$scope.CHEM103CoopPlan3BiomedicalListener = function () {
 if (!CHEM103CoopPlan3Biomedicalflag) {
      that.addLine(getLine245());
      CHEM103CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine245());
      CHEM103CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG130CoopPlan3BiomedicalListener = function () {
 if (!ENGG130CoopPlan3Biomedicalflag) {
      that.addLine(getLine244());
      that.addLine(getLine246());
      that.addLine(getLine249());
      that.addLine(getLine256());
      ENGG130CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine244());
      that.removeLine(getLine246());
      that.removeLine(getLine249());
      that.removeLine(getLine256());
      ENGG130CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH100CoopPlan3BiomedicalListener = function () {
 if (!MATH100CoopPlan3Biomedicalflag) {
      that.addLine(getLine244());
      that.addLine(getLine247());
      that.addLine(getLine248());
      that.addLine(getLine253());
      MATH100CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine244());
      that.removeLine(getLine247());
      that.removeLine(getLine248());
      that.removeLine(getLine253());
      MATH100CoopPlan3Biomedicalflag=false
  }
};
$scope.CHEM105CoopPlan3BiomedicalListener = function () {
 if (!CHEM105CoopPlan3Biomedicalflag) {
      that.addLine(getLine245());
      that.addLine(getLine259());
      CHEM105CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine245());
      that.removeLine(getLine259());
      CHEM105CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG160CoopPlan3BiomedicalListener = function () {
 if (!ENGG160CoopPlan3Biomedicalflag) {
      that.addLine(getLine262());
      ENGG160CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine262());
      ENGG160CoopPlan3Biomedicalflag=false
  }
};
$scope.ENPH131CoopPlan3BiomedicalListener = function () {
 if (!ENPH131CoopPlan3Biomedicalflag) {
      that.addLine(getLine246());
      that.addLine(getLine257());
      that.addLine(getLine261());
      ENPH131CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine246());
      that.removeLine(getLine257());
      that.removeLine(getLine261());
      ENPH131CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH101CoopPlan3BiomedicalListener = function () {
 if (!MATH101CoopPlan3Biomedicalflag) {
      that.addLine(getLine247());
      that.addLine(getLine250());
      that.addLine(getLine251());
      that.addLine(getLine254());
      that.addLine(getLine255());
      that.addLine(getLine258());
      that.addLine(getLine260());
      MATH101CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine247());
      that.removeLine(getLine250());
      that.removeLine(getLine251());
      that.removeLine(getLine254());
      that.removeLine(getLine255());
      that.removeLine(getLine258());
      that.removeLine(getLine260());
      MATH101CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH102CoopPlan3BiomedicalListener = function () {
 if (!MATH102CoopPlan3Biomedicalflag) {
      that.addLine(getLine248());
      that.addLine(getLine252());
      that.addLine(getLine273());
      MATH102CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine248());
      that.removeLine(getLine252());
      that.removeLine(getLine273());
      MATH102CoopPlan3Biomedicalflag=false
  }
};
$scope.CIVE270CoopPlan3BiomedicalListener = function () {
 if (!CIVE270CoopPlan3Biomedicalflag) {
      that.addLine(getLine249());
      that.addLine(getLine250());
      that.addLine(getLine264());
      that.addLine(getLine270());
      that.addLine(getLine278());
      that.addLine(getLine290());
      CIVE270CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine249());
      that.removeLine(getLine250());
      that.removeLine(getLine264());
      that.removeLine(getLine270());
      that.removeLine(getLine278());
      that.removeLine(getLine290());
      CIVE270CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH209CoopPlan3BiomedicalListener = function () {
 if (!MATH209CoopPlan3Biomedicalflag) {
      that.addLine(getLine251());
      that.addLine(getLine252());
      that.addLine(getLine277());
      that.addLine(getLine284());
      that.addLine(getLine299());
      MATH209CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine251());
      that.removeLine(getLine252());
      that.removeLine(getLine277());
      that.removeLine(getLine284());
      that.removeLine(getLine299());
      MATH209CoopPlan3Biomedicalflag=false
  }
};
$scope.STAT235CoopPlan3BiomedicalListener = function () {
 if (!STAT235CoopPlan3Biomedicalflag) {
      that.addLine(getLine253());
      that.addLine(getLine254());
      that.addLine(getLine280());
      STAT235CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine253());
      that.removeLine(getLine254());
      that.removeLine(getLine280());
      STAT235CoopPlan3Biomedicalflag=false
  }
};
$scope.CHE243CoopPlan3BiomedicalListener = function () {
 if (!CHE243CoopPlan3Biomedicalflag) {
      that.addLine(getLine255());
      that.addLine(getLine266());
      that.addLine(getLine285());
      that.addLine(getLine287());
      CHE243CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine255());
      that.removeLine(getLine266());
      that.removeLine(getLine285());
      that.removeLine(getLine287());
      CHE243CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE200CoopPlan3BiomedicalListener = function () {
 if (!MECE200CoopPlan3Biomedicalflag) {
      that.addLine(getLine310());
      MECE200CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine310());
      MECE200CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE250CoopPlan3BiomedicalListener = function () {
 if (!MECE250CoopPlan3Biomedicalflag) {
      that.addLine(getLine256());
      that.addLine(getLine257());
      that.addLine(getLine258());
      that.addLine(getLine272());
      that.addLine(getLine283());
      that.addLine(getLine308());
      MECE250CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine256());
      that.removeLine(getLine257());
      that.removeLine(getLine258());
      that.removeLine(getLine272());
      that.removeLine(getLine283());
      that.removeLine(getLine308());
      MECE250CoopPlan3Biomedicalflag=false
  }
};
$scope.ECE209CoopPlan3BiomedicalListener = function () {
 if (!ECE209CoopPlan3Biomedicalflag) {
      that.addLine(getLine279());
      ECE209CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine279());
      ECE209CoopPlan3Biomedicalflag=false
  }
};
$scope.MATE202CoopPlan3BiomedicalListener = function () {
 if (!MATE202CoopPlan3Biomedicalflag) {
      that.addLine(getLine259());
      that.addLine(getLine269());
      MATE202CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine259());
      that.removeLine(getLine269());
      MATE202CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH201CoopPlan3BiomedicalListener = function () {
 if (!MATH201CoopPlan3Biomedicalflag) {
      that.addLine(getLine274());
      that.addLine(getLine276());
      that.addLine(getLine298());
      MATH201CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine274());
      that.removeLine(getLine276());
      that.removeLine(getLine298());
      MATH201CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE230CoopPlan3BiomedicalListener = function () {
 if (!MECE230CoopPlan3Biomedicalflag) {
      that.addLine(getLine260());
      that.addLine(getLine261());
      that.addLine(getLine282());
      that.addLine(getLine286());
      MECE230CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine260());
      that.removeLine(getLine261());
      that.removeLine(getLine282());
      that.removeLine(getLine286());
      MECE230CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE260CoopPlan3BiomedicalListener = function () {
 if (!MECE260CoopPlan3Biomedicalflag) {
      that.addLine(getLine262());
      that.addLine(getLine263());
      that.addLine(getLine264());
      that.addLine(getLine267());
      MECE260CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine262());
      that.removeLine(getLine263());
      that.removeLine(getLine264());
      that.removeLine(getLine267());
      MECE260CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE265CoopPlan3BiomedicalListener = function () {
 if (!MECE265CoopPlan3Biomedicalflag) {
      that.addLine(getLine263());
      that.addLine(getLine268());
      MECE265CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine263());
      that.removeLine(getLine268());
      MECE265CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP902CoopPlan3BiomedicalListener = function () {
 if (!WKEXP902CoopPlan3Biomedicalflag) {
      that.addLine(getLine265());
      that.addLine(getLine275());
      WKEXP902CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine265());
      that.removeLine(getLine275());
      WKEXP902CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE340CoopPlan3BiomedicalListener = function () {
 if (!MECE340CoopPlan3Biomedicalflag) {
      that.addLine(getLine266());
      that.addLine(getLine297());
      that.addLine(getLine306());
      that.addLine(getLine311());
      MECE340CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine266());
      that.removeLine(getLine297());
      that.removeLine(getLine306());
      that.removeLine(getLine311());
      MECE340CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE360CoopPlan3BiomedicalListener = function () {
 if (!MECE360CoopPlan3Biomedicalflag) {
      that.addLine(getLine267());
      that.addLine(getLine268());
      that.addLine(getLine269());
      that.addLine(getLine270());
      that.addLine(getLine271());
      that.addLine(getLine292());
      that.addLine(getLine307());
      that.addLine(getLine312());
      MECE360CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine267());
      that.removeLine(getLine268());
      that.removeLine(getLine269());
      that.removeLine(getLine270());
      that.removeLine(getLine271());
      that.removeLine(getLine292());
      that.removeLine(getLine307());
      that.removeLine(getLine312());
      MECE360CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE362CoopPlan3BiomedicalListener = function () {
 if (!MECE362CoopPlan3Biomedicalflag) {
      that.addLine(getLine271());
      that.addLine(getLine272());
      that.addLine(getLine313());
      MECE362CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine271());
      that.removeLine(getLine272());
      that.removeLine(getLine313());
      MECE362CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE390CoopPlan3BiomedicalListener = function () {
 if (!MECE390CoopPlan3Biomedicalflag) {
      that.addLine(getLine273());
      that.addLine(getLine274());
      that.addLine(getLine293());
      MECE390CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine273());
      that.removeLine(getLine274());
      that.removeLine(getLine293());
      MECE390CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP903CoopPlan3BiomedicalListener = function () {
 if (!WKEXP903CoopPlan3Biomedicalflag) {
      that.addLine(getLine275());
      that.addLine(getLine295());
      WKEXP903CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine275());
      that.removeLine(getLine295());
      WKEXP903CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH300CoopPlan3BiomedicalListener = function () {
 if (!MATH300CoopPlan3Biomedicalflag) {
      that.addLine(getLine276());
      that.addLine(getLine277());
      that.addLine(getLine288());
      that.addLine(getLine291());
      that.addLine(getLine309());
      MATH300CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine276());
      that.removeLine(getLine277());
      that.removeLine(getLine288());
      that.removeLine(getLine291());
      that.removeLine(getLine309());
      MATH300CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE300CoopPlan3BiomedicalListener = function () {
 if (!MECE300CoopPlan3Biomedicalflag) {
      that.addLine(getLine278());
      that.addLine(getLine279());
      that.addLine(getLine280());
      that.addLine(getLine281());
      that.addLine(getLine304());
      MECE300CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine278());
      that.removeLine(getLine279());
      that.removeLine(getLine280());
      that.removeLine(getLine281());
      that.removeLine(getLine304());
      MECE300CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE301CoopPlan3BiomedicalListener = function () {
 if (!MECE301CoopPlan3Biomedicalflag) {
      that.addLine(getLine281());
      that.addLine(getLine305());
      MECE301CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine281());
      that.removeLine(getLine305());
      MECE301CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE331CoopPlan3BiomedicalListener = function () {
 if (!MECE331CoopPlan3Biomedicalflag) {
      that.addLine(getLine282());
      that.addLine(getLine283());
      that.addLine(getLine284());
      that.addLine(getLine285());
      that.addLine(getLine289());
      MECE331CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine282());
      that.removeLine(getLine283());
      that.removeLine(getLine284());
      that.removeLine(getLine285());
      that.removeLine(getLine289());
      MECE331CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE371CoopPlan3BiomedicalListener = function () {
 if (!MECE371CoopPlan3Biomedicalflag) {
      that.addLine(getLine286());
      that.addLine(getLine287());
      that.addLine(getLine288());
      that.addLine(getLine289());
      MECE371CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine286());
      that.removeLine(getLine287());
      that.removeLine(getLine288());
      that.removeLine(getLine289());
      MECE371CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE380CoopPlan3BiomedicalListener = function () {
 if (!MECE380CoopPlan3Biomedicalflag) {
      that.addLine(getLine290());
      that.addLine(getLine314());
      MECE380CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine290());
      that.removeLine(getLine314());
      MECE380CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE563CoopPlan3BiomedicalListener = function () {
 if (!MECE563CoopPlan3Biomedicalflag) {
      that.addLine(getLine291());
      that.addLine(getLine292());
      that.addLine(getLine293());
      MECE563CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine291());
      that.removeLine(getLine292());
      that.removeLine(getLine293());
      MECE563CoopPlan3Biomedicalflag=false
  }
};
$scope.STAT337CoopPlan3BiomedicalListener = function () {
 if (!STAT337CoopPlan3Biomedicalflag) {
      that.addLine(getLine294());
      STAT337CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine294());
      STAT337CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP904CoopPlan3BiomedicalListener = function () {
 if (!WKEXP904CoopPlan3Biomedicalflag) {
      that.addLine(getLine295());
      that.addLine(getLine296());
      WKEXP904CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine295());
      that.removeLine(getLine296());
      WKEXP904CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP905CoopPlan3BiomedicalListener = function () {
 if (!WKEXP905CoopPlan3Biomedicalflag) {
      that.addLine(getLine296());
      WKEXP905CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine296());
      WKEXP905CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE463CoopPlan3BiomedicalListener = function () {
 if (!MECE463CoopPlan3Biomedicalflag) {
      that.addLine(getLine297());
      MECE463CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine297());
      MECE463CoopPlan3Biomedicalflag=false
  }
};
$scope.CHE448CoopPlan3BiomedicalListener = function () {
 if (!CHE448CoopPlan3Biomedicalflag) {
      that.addLine(getLine298());
      that.addLine(getLine299());
      CHE448CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine298());
      that.removeLine(getLine299());
      CHE448CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE485CoopPlan3BiomedicalListener = function () {
 if (!MECE485CoopPlan3Biomedicalflag) {
      that.addLine(getLine300());
      that.addLine(getLine301());
      that.addLine(getLine302());
      that.addLine(getLine303());
      MECE485CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine300());
      that.removeLine(getLine301());
      that.removeLine(getLine302());
      that.removeLine(getLine303());
      MECE485CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE403CoopPlan3BiomedicalListener = function () {
 if (!MECE403CoopPlan3Biomedicalflag) {
      that.addLine(getLine304());
      that.addLine(getLine305());
      that.addLine(getLine306());
      that.addLine(getLine307());
      MECE403CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine304());
      that.removeLine(getLine305());
      that.removeLine(getLine306());
      that.removeLine(getLine307());
      MECE403CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE451CoopPlan3BiomedicalListener = function () {
 if (!MECE451CoopPlan3Biomedicalflag) {
      that.addLine(getLine308());
      that.addLine(getLine309());
      MECE451CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine308());
      that.removeLine(getLine309());
      MECE451CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE460CoopPlan3BiomedicalListener = function () {
 if (!MECE460CoopPlan3Biomedicalflag) {
      that.addLine(getLine310());
      that.addLine(getLine311());
      that.addLine(getLine312());
      that.addLine(getLine313());
      that.addLine(getLine314());
      MECE460CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine310());
      that.removeLine(getLine311());
      that.removeLine(getLine312());
      that.removeLine(getLine313());
      that.removeLine(getLine314());
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
$scope.CHEM103CoopPlan4Listener = function () {
 if (!CHEM103CoopPlan4flag) {
      that.addLine(getLine316());
      CHEM103CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine316());
      CHEM103CoopPlan4flag=false
  }
};
$scope.ENGG130CoopPlan4Listener = function () {
 if (!ENGG130CoopPlan4flag) {
      that.addLine(getLine315());
      that.addLine(getLine317());
      that.addLine(getLine320());
      that.addLine(getLine333());
      ENGG130CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine315());
      that.removeLine(getLine317());
      that.removeLine(getLine320());
      that.removeLine(getLine333());
      ENGG130CoopPlan4flag=false
  }
};
$scope.MATH100CoopPlan4Listener = function () {
 if (!MATH100CoopPlan4flag) {
      that.addLine(getLine315());
      that.addLine(getLine318());
      that.addLine(getLine319());
      that.addLine(getLine324());
      MATH100CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine315());
      that.removeLine(getLine318());
      that.removeLine(getLine319());
      that.removeLine(getLine324());
      MATH100CoopPlan4flag=false
  }
};
$scope.CHEM105CoopPlan4Listener = function () {
 if (!CHEM105CoopPlan4flag) {
      that.addLine(getLine316());
      that.addLine(getLine332());
      CHEM105CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine316());
      that.removeLine(getLine332());
      CHEM105CoopPlan4flag=false
  }
};
$scope.ENGG160CoopPlan4Listener = function () {
 if (!ENGG160CoopPlan4flag) {
      that.addLine(getLine328());
      ENGG160CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine328());
      ENGG160CoopPlan4flag=false
  }
};
$scope.ENPH131CoopPlan4Listener = function () {
 if (!ENPH131CoopPlan4flag) {
      that.addLine(getLine317());
      that.addLine(getLine327());
      that.addLine(getLine334());
      ENPH131CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine317());
      that.removeLine(getLine327());
      that.removeLine(getLine334());
      ENPH131CoopPlan4flag=false
  }
};
$scope.MATH101CoopPlan4Listener = function () {
 if (!MATH101CoopPlan4flag) {
      that.addLine(getLine318());
      that.addLine(getLine321());
      that.addLine(getLine322());
      that.addLine(getLine325());
      that.addLine(getLine326());
      that.addLine(getLine331());
      that.addLine(getLine335());
      MATH101CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine318());
      that.removeLine(getLine321());
      that.removeLine(getLine322());
      that.removeLine(getLine325());
      that.removeLine(getLine326());
      that.removeLine(getLine331());
      that.removeLine(getLine335());
      MATH101CoopPlan4flag=false
  }
};
$scope.MATH102CoopPlan4Listener = function () {
 if (!MATH102CoopPlan4flag) {
      that.addLine(getLine319());
      that.addLine(getLine323());
      that.addLine(getLine360());
      MATH102CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine319());
      that.removeLine(getLine323());
      that.removeLine(getLine360());
      MATH102CoopPlan4flag=false
  }
};
$scope.CIVE270CoopPlan4Listener = function () {
 if (!CIVE270CoopPlan4flag) {
      that.addLine(getLine320());
      that.addLine(getLine321());
      that.addLine(getLine330());
      that.addLine(getLine338());
      that.addLine(getLine350());
      that.addLine(getLine357());
      CIVE270CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine320());
      that.removeLine(getLine321());
      that.removeLine(getLine330());
      that.removeLine(getLine338());
      that.removeLine(getLine350());
      that.removeLine(getLine357());
      CIVE270CoopPlan4flag=false
  }
};
$scope.ENGG299CoopPlan4Listener = function () {
 if (!ENGG299CoopPlan4flag) {
      that.addLine(getLine351());
      ENGG299CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine351());
      ENGG299CoopPlan4flag=false
  }
};
$scope.MATH209CoopPlan4Listener = function () {
 if (!MATH209CoopPlan4flag) {
      that.addLine(getLine322());
      that.addLine(getLine323());
      that.addLine(getLine337());
      that.addLine(getLine344());
      that.addLine(getLine367());
      MATH209CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine322());
      that.removeLine(getLine323());
      that.removeLine(getLine337());
      that.removeLine(getLine344());
      that.removeLine(getLine367());
      MATH209CoopPlan4flag=false
  }
};
$scope.STAT235CoopPlan4Listener = function () {
 if (!STAT235CoopPlan4flag) {
      that.addLine(getLine324());
      that.addLine(getLine325());
      that.addLine(getLine340());
      STAT235CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine324());
      that.removeLine(getLine325());
      that.removeLine(getLine340());
      STAT235CoopPlan4flag=false
  }
};
$scope.MECE230CoopPlan4Listener = function () {
 if (!MECE230CoopPlan4flag) {
      that.addLine(getLine326());
      that.addLine(getLine327());
      that.addLine(getLine342());
      that.addLine(getLine346());
      MECE230CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine326());
      that.removeLine(getLine327());
      that.removeLine(getLine342());
      that.removeLine(getLine346());
      MECE230CoopPlan4flag=false
  }
};
$scope.MECE260CoopPlan4Listener = function () {
 if (!MECE260CoopPlan4flag) {
      that.addLine(getLine328());
      that.addLine(getLine329());
      that.addLine(getLine330());
      that.addLine(getLine354());
      MECE260CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine328());
      that.removeLine(getLine329());
      that.removeLine(getLine330());
      that.removeLine(getLine354());
      MECE260CoopPlan4flag=false
  }
};
$scope.MECE265CoopPlan4Listener = function () {
 if (!MECE265CoopPlan4flag) {
      that.addLine(getLine329());
      that.addLine(getLine355());
      MECE265CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine329());
      that.removeLine(getLine355());
      MECE265CoopPlan4flag=false
  }
};
$scope.ECE209CoopPlan4Listener = function () {
 if (!ECE209CoopPlan4flag) {
      that.addLine(getLine339());
      ECE209CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine339());
      ECE209CoopPlan4flag=false
  }
};
$scope.MATH201CoopPlan4Listener = function () {
 if (!MATH201CoopPlan4flag) {
      that.addLine(getLine336());
      that.addLine(getLine361());
      that.addLine(getLine366());
      MATH201CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine336());
      that.removeLine(getLine361());
      that.removeLine(getLine366());
      MATH201CoopPlan4flag=false
  }
};
$scope.CHE243CoopPlan4Listener = function () {
 if (!CHE243CoopPlan4flag) {
      that.addLine(getLine331());
      that.addLine(getLine345());
      that.addLine(getLine347());
      that.addLine(getLine353());
      CHE243CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine331());
      that.removeLine(getLine345());
      that.removeLine(getLine347());
      that.removeLine(getLine353());
      CHE243CoopPlan4flag=false
  }
};
$scope.MATE202CoopPlan4Listener = function () {
 if (!MATE202CoopPlan4flag) {
      that.addLine(getLine332());
      that.addLine(getLine356());
      MATE202CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine332());
      that.removeLine(getLine356());
      MATE202CoopPlan4flag=false
  }
};
$scope.MECE200CoopPlan4Listener = function () {
 if (!MECE200CoopPlan4flag) {
      that.addLine(getLine374());
      MECE200CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine374());
      MECE200CoopPlan4flag=false
  }
};
$scope.MECE250CoopPlan4Listener = function () {
 if (!MECE250CoopPlan4flag) {
      that.addLine(getLine333());
      that.addLine(getLine334());
      that.addLine(getLine335());
      that.addLine(getLine343());
      that.addLine(getLine359());
      that.addLine(getLine372());
      MECE250CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine333());
      that.removeLine(getLine334());
      that.removeLine(getLine335());
      that.removeLine(getLine343());
      that.removeLine(getLine359());
      that.removeLine(getLine372());
      MECE250CoopPlan4flag=false
  }
};
$scope.MATH300ACoopPlan4Listener = function () {
 if (!MATH300ACoopPlan4flag) {
      that.addLine(getLine336());
      that.addLine(getLine337());
      MATH300ACoopPlan4flag=true
  }
 else {
      that.removeLine(getLine336());
      that.removeLine(getLine337());
      MATH300ACoopPlan4flag=false
  }
};
$scope.MECE300ACoopPlan4Listener = function () {
 if (!MECE300ACoopPlan4flag) {
      that.addLine(getLine338());
      that.addLine(getLine339());
      that.addLine(getLine340());
      MECE300ACoopPlan4flag=true
  }
 else {
      that.removeLine(getLine338());
      that.removeLine(getLine339());
      that.removeLine(getLine340());
      MECE300ACoopPlan4flag=false
  }
};
$scope.MECE301ACoopPlan4Listener = function () {
 if (!MECE301ACoopPlan4flag) {
      that.addLine(getLine341());
      MECE301ACoopPlan4flag=true
  }
 else {
      that.removeLine(getLine341());
      MECE301ACoopPlan4flag=false
  }
};
$scope.MECE331ACoopPlan4Listener = function () {
 if (!MECE331ACoopPlan4flag) {
      that.addLine(getLine342());
      that.addLine(getLine343());
      that.addLine(getLine344());
      that.addLine(getLine345());
      MECE331ACoopPlan4flag=true
  }
 else {
      that.removeLine(getLine342());
      that.removeLine(getLine343());
      that.removeLine(getLine344());
      that.removeLine(getLine345());
      MECE331ACoopPlan4flag=false
  }
};
$scope.MECE371ACoopPlan4Listener = function () {
 if (!MECE371ACoopPlan4flag) {
      that.addLine(getLine346());
      that.addLine(getLine347());
      that.addLine(getLine348());
      that.addLine(getLine349());
      MECE371ACoopPlan4flag=true
  }
 else {
      that.removeLine(getLine346());
      that.removeLine(getLine347());
      that.removeLine(getLine348());
      that.removeLine(getLine349());
      MECE371ACoopPlan4flag=false
  }
};
$scope.MECE380ACoopPlan4Listener = function () {
 if (!MECE380ACoopPlan4flag) {
      that.addLine(getLine350());
      MECE380ACoopPlan4flag=true
  }
 else {
      that.removeLine(getLine350());
      MECE380ACoopPlan4flag=false
  }
};
$scope.WKEXP901CoopPlan4Listener = function () {
 if (!WKEXP901CoopPlan4flag) {
      that.addLine(getLine351());
      that.addLine(getLine352());
      WKEXP901CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine351());
      that.removeLine(getLine352());
      WKEXP901CoopPlan4flag=false
  }
};
$scope.WKEXP902CoopPlan4Listener = function () {
 if (!WKEXP902CoopPlan4flag) {
      that.addLine(getLine352());
      that.addLine(getLine362());
      WKEXP902CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine352());
      that.removeLine(getLine362());
      WKEXP902CoopPlan4flag=false
  }
};
$scope.MECE340BCoopPlan4Listener = function () {
 if (!MECE340BCoopPlan4flag) {
      that.addLine(getLine353());
      MECE340BCoopPlan4flag=true
  }
 else {
      that.removeLine(getLine353());
      MECE340BCoopPlan4flag=false
  }
};
$scope.MECE360BCoopPlan4Listener = function () {
 if (!MECE360BCoopPlan4flag) {
      that.addLine(getLine354());
      that.addLine(getLine355());
      that.addLine(getLine356());
      that.addLine(getLine357());
      that.addLine(getLine358());
      MECE360BCoopPlan4flag=true
  }
 else {
      that.removeLine(getLine354());
      that.removeLine(getLine355());
      that.removeLine(getLine356());
      that.removeLine(getLine357());
      that.removeLine(getLine358());
      MECE360BCoopPlan4flag=false
  }
};
$scope.MECE362BCoopPlan4Listener = function () {
 if (!MECE362BCoopPlan4flag) {
      that.addLine(getLine359());
      MECE362BCoopPlan4flag=true
  }
 else {
      that.removeLine(getLine359());
      MECE362BCoopPlan4flag=false
  }
};
$scope.MECE390BCoopPlan4Listener = function () {
 if (!MECE390BCoopPlan4flag) {
      that.addLine(getLine360());
      that.addLine(getLine361());
      MECE390BCoopPlan4flag=true
  }
 else {
      that.removeLine(getLine360());
      that.removeLine(getLine361());
      MECE390BCoopPlan4flag=false
  }
};
$scope.WKEXP903CoopPlan4Listener = function () {
 if (!WKEXP903CoopPlan4flag) {
      that.addLine(getLine362());
      that.addLine(getLine363());
      WKEXP903CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine362());
      that.removeLine(getLine363());
      WKEXP903CoopPlan4flag=false
  }
};
$scope.WKEXP904CoopPlan4Listener = function () {
 if (!WKEXP904CoopPlan4flag) {
      that.addLine(getLine363());
      that.addLine(getLine364());
      WKEXP904CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine363());
      that.removeLine(getLine364());
      WKEXP904CoopPlan4flag=false
  }
};
$scope.WKEXP905CoopPlan4Listener = function () {
 if (!WKEXP905CoopPlan4flag) {
      that.addLine(getLine364());
      WKEXP905CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine364());
      WKEXP905CoopPlan4flag=false
  }
};
$scope.MECE463CoopPlan4Listener = function () {
 if (!MECE463CoopPlan4flag) {
      that.addLine(getLine365());
      MECE463CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine365());
      MECE463CoopPlan4flag=false
  }
};
$scope.CHE448CoopPlan4Listener = function () {
 if (!CHE448CoopPlan4flag) {
      that.addLine(getLine366());
      that.addLine(getLine367());
      CHE448CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine366());
      that.removeLine(getLine367());
      CHE448CoopPlan4flag=false
  }
};
$scope.MECE403CoopPlan4Listener = function () {
 if (!MECE403CoopPlan4flag) {
      that.addLine(getLine368());
      that.addLine(getLine369());
      that.addLine(getLine370());
      that.addLine(getLine371());
      MECE403CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine368());
      that.removeLine(getLine369());
      that.removeLine(getLine370());
      that.removeLine(getLine371());
      MECE403CoopPlan4flag=false
  }
};
$scope.MECE451CoopPlan4Listener = function () {
 if (!MECE451CoopPlan4flag) {
      that.addLine(getLine372());
      that.addLine(getLine373());
      MECE451CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine372());
      that.removeLine(getLine373());
      MECE451CoopPlan4flag=false
  }
};
$scope.MECE460CoopPlan4Listener = function () {
 if (!MECE460CoopPlan4flag) {
      that.addLine(getLine374());
      that.addLine(getLine375());
      that.addLine(getLine376());
      that.addLine(getLine377());
      that.addLine(getLine378());
      MECE460CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine374());
      that.removeLine(getLine375());
      that.removeLine(getLine376());
      that.removeLine(getLine377());
      that.removeLine(getLine378());
      MECE460CoopPlan4flag=false
  }
};
});