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
      that.addLine(getLine47());
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine7());
      that.removeLine(getLine8());
      that.removeLine(getLine22());
      that.removeLine(getLine29());
      that.removeLine(getLine47());
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
$scope.CHE243TraditionalPlanListener = function () {
 if (!CHE243TraditionalPlanflag) {
      that.addLine(getLine11());
      that.addLine(getLine30());
      that.addLine(getLine32());
      that.addLine(getLine36());
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine30());
      that.removeLine(getLine32());
      that.removeLine(getLine36());
      CHE243TraditionalPlanflag=false
  }
};
$scope.MECE200TraditionalPlanListener = function () {
 if (!MECE200TraditionalPlanflag) {
      that.addLine(getLine54());
      MECE200TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine54());
      MECE200TraditionalPlanflag=false
  }
};
$scope.MECE250TraditionalPlanListener = function () {
 if (!MECE250TraditionalPlanflag) {
      that.addLine(getLine12());
      that.addLine(getLine13());
      that.addLine(getLine14());
      that.addLine(getLine28());
      that.addLine(getLine42());
      that.addLine(getLine52());
      MECE250TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      that.removeLine(getLine28());
      that.removeLine(getLine42());
      that.removeLine(getLine52());
      MECE250TraditionalPlanflag=false
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
      that.addLine(getLine46());
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine44());
      that.removeLine(getLine46());
      MATH201TraditionalPlanflag=false
  }
};
$scope.MECE230TraditionalPlanListener = function () {
 if (!MECE230TraditionalPlanflag) {
      that.addLine(getLine16());
      that.addLine(getLine17());
      that.addLine(getLine27());
      that.addLine(getLine31());
      MECE230TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
      that.removeLine(getLine17());
      that.removeLine(getLine27());
      that.removeLine(getLine31());
      MECE230TraditionalPlanflag=false
  }
};
$scope.MECE260TraditionalPlanListener = function () {
 if (!MECE260TraditionalPlanflag) {
      that.addLine(getLine18());
      that.addLine(getLine19());
      that.addLine(getLine20());
      that.addLine(getLine37());
      MECE260TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine18());
      that.removeLine(getLine19());
      that.removeLine(getLine20());
      that.removeLine(getLine37());
      MECE260TraditionalPlanflag=false
  }
};
$scope.MECE265TraditionalPlanListener = function () {
 if (!MECE265TraditionalPlanflag) {
      that.addLine(getLine19());
      that.addLine(getLine38());
      MECE265TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
      that.removeLine(getLine38());
      MECE265TraditionalPlanflag=false
  }
};
$scope.MATH300TraditionalPlanListener = function () {
 if (!MATH300TraditionalPlanflag) {
      that.addLine(getLine21());
      that.addLine(getLine22());
      that.addLine(getLine33());
      that.addLine(getLine53());
      MATH300TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine22());
      that.removeLine(getLine33());
      that.removeLine(getLine53());
      MATH300TraditionalPlanflag=false
  }
};
$scope.MECE300TraditionalPlanListener = function () {
 if (!MECE300TraditionalPlanflag) {
      that.addLine(getLine23());
      that.addLine(getLine24());
      that.addLine(getLine25());
      that.addLine(getLine26());
      that.addLine(getLine48());
      MECE300TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine23());
      that.removeLine(getLine24());
      that.removeLine(getLine25());
      that.removeLine(getLine26());
      that.removeLine(getLine48());
      MECE300TraditionalPlanflag=false
  }
};
$scope.MECE301TraditionalPlanListener = function () {
 if (!MECE301TraditionalPlanflag) {
      that.addLine(getLine26());
      that.addLine(getLine49());
      MECE301TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      that.removeLine(getLine49());
      MECE301TraditionalPlanflag=false
  }
};
$scope.MECE331TraditionalPlanListener = function () {
 if (!MECE331TraditionalPlanflag) {
      that.addLine(getLine27());
      that.addLine(getLine28());
      that.addLine(getLine29());
      that.addLine(getLine30());
      that.addLine(getLine34());
      MECE331TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine27());
      that.removeLine(getLine28());
      that.removeLine(getLine29());
      that.removeLine(getLine30());
      that.removeLine(getLine34());
      MECE331TraditionalPlanflag=false
  }
};
$scope.MECE371TraditionalPlanListener = function () {
 if (!MECE371TraditionalPlanflag) {
      that.addLine(getLine31());
      that.addLine(getLine32());
      that.addLine(getLine33());
      that.addLine(getLine34());
      MECE371TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
      that.removeLine(getLine32());
      that.removeLine(getLine33());
      that.removeLine(getLine34());
      MECE371TraditionalPlanflag=false
  }
};
$scope.MECE380TraditionalPlanListener = function () {
 if (!MECE380TraditionalPlanflag) {
      that.addLine(getLine35());
      that.addLine(getLine58());
      MECE380TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine35());
      that.removeLine(getLine58());
      MECE380TraditionalPlanflag=false
  }
};
$scope.MECE340TraditionalPlanListener = function () {
 if (!MECE340TraditionalPlanflag) {
      that.addLine(getLine36());
      that.addLine(getLine45());
      that.addLine(getLine50());
      that.addLine(getLine55());
      MECE340TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine36());
      that.removeLine(getLine45());
      that.removeLine(getLine50());
      that.removeLine(getLine55());
      MECE340TraditionalPlanflag=false
  }
};
$scope.MECE360TraditionalPlanListener = function () {
 if (!MECE360TraditionalPlanflag) {
      that.addLine(getLine37());
      that.addLine(getLine38());
      that.addLine(getLine39());
      that.addLine(getLine40());
      that.addLine(getLine41());
      that.addLine(getLine51());
      that.addLine(getLine56());
      MECE360TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine38());
      that.removeLine(getLine39());
      that.removeLine(getLine40());
      that.removeLine(getLine41());
      that.removeLine(getLine51());
      that.removeLine(getLine56());
      MECE360TraditionalPlanflag=false
  }
};
$scope.MECE362TraditionalPlanListener = function () {
 if (!MECE362TraditionalPlanflag) {
      that.addLine(getLine41());
      that.addLine(getLine42());
      that.addLine(getLine57());
      MECE362TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine42());
      that.removeLine(getLine57());
      MECE362TraditionalPlanflag=false
  }
};
$scope.MECE390TraditionalPlanListener = function () {
 if (!MECE390TraditionalPlanflag) {
      that.addLine(getLine43());
      that.addLine(getLine44());
      MECE390TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine43());
      that.removeLine(getLine44());
      MECE390TraditionalPlanflag=false
  }
};
$scope.MECE463TraditionalPlanListener = function () {
 if (!MECE463TraditionalPlanflag) {
      that.addLine(getLine45());
      MECE463TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine45());
      MECE463TraditionalPlanflag=false
  }
};
$scope.CHE448TraditionalPlanListener = function () {
 if (!CHE448TraditionalPlanflag) {
      that.addLine(getLine46());
      that.addLine(getLine47());
      CHE448TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine46());
      that.removeLine(getLine47());
      CHE448TraditionalPlanflag=false
  }
};
$scope.MECE403TraditionalPlanListener = function () {
 if (!MECE403TraditionalPlanflag) {
      that.addLine(getLine48());
      that.addLine(getLine49());
      that.addLine(getLine50());
      that.addLine(getLine51());
      MECE403TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine48());
      that.removeLine(getLine49());
      that.removeLine(getLine50());
      that.removeLine(getLine51());
      MECE403TraditionalPlanflag=false
  }
};
$scope.MECE451TraditionalPlanListener = function () {
 if (!MECE451TraditionalPlanflag) {
      that.addLine(getLine52());
      that.addLine(getLine53());
      MECE451TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine52());
      that.removeLine(getLine53());
      MECE451TraditionalPlanflag=false
  }
};
$scope.MECE460TraditionalPlanListener = function () {
 if (!MECE460TraditionalPlanflag) {
      that.addLine(getLine54());
      that.addLine(getLine55());
      that.addLine(getLine56());
      that.addLine(getLine57());
      that.addLine(getLine58());
      MECE460TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine54());
      that.removeLine(getLine55());
      that.removeLine(getLine56());
      that.removeLine(getLine57());
      that.removeLine(getLine58());
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
 if (!CHEM103AlternatePlanflag) {
      that.addLine(getLine60());
      CHEM103AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine60());
      CHEM103AlternatePlanflag=false
  }
};
$scope.ENGG130AlternatePlanListener = function () {
 if (!ENGG130AlternatePlanflag) {
      that.addLine(getLine59());
      that.addLine(getLine61());
      that.addLine(getLine66());
      that.addLine(getLine77());
      ENGG130AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine59());
      that.removeLine(getLine61());
      that.removeLine(getLine66());
      that.removeLine(getLine77());
      ENGG130AlternatePlanflag=false
  }
};
$scope.MATH100AlternatePlanListener = function () {
 if (!MATH100AlternatePlanflag) {
      that.addLine(getLine59());
      that.addLine(getLine62());
      that.addLine(getLine63());
      that.addLine(getLine73());
      MATH100AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine59());
      that.removeLine(getLine62());
      that.removeLine(getLine63());
      that.removeLine(getLine73());
      MATH100AlternatePlanflag=false
  }
};
$scope.CHEM105AlternatePlanListener = function () {
 if (!CHEM105AlternatePlanflag) {
      that.addLine(getLine60());
      that.addLine(getLine76());
      CHEM105AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine60());
      that.removeLine(getLine76());
      CHEM105AlternatePlanflag=false
  }
};
$scope.ENGG160AlternatePlanListener = function () {
 if (!ENGG160AlternatePlanflag) {
      that.addLine(getLine70());
      ENGG160AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine70());
      ENGG160AlternatePlanflag=false
  }
};
$scope.ENPH131AlternatePlanListener = function () {
 if (!ENPH131AlternatePlanflag) {
      that.addLine(getLine61());
      that.addLine(getLine69());
      that.addLine(getLine78());
      ENPH131AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine61());
      that.removeLine(getLine69());
      that.removeLine(getLine78());
      ENPH131AlternatePlanflag=false
  }
};
$scope.MATH101AlternatePlanListener = function () {
 if (!MATH101AlternatePlanflag) {
      that.addLine(getLine62());
      that.addLine(getLine64());
      that.addLine(getLine67());
      that.addLine(getLine68());
      that.addLine(getLine74());
      that.addLine(getLine75());
      that.addLine(getLine79());
      MATH101AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine64());
      that.removeLine(getLine67());
      that.removeLine(getLine68());
      that.removeLine(getLine74());
      that.removeLine(getLine75());
      that.removeLine(getLine79());
      MATH101AlternatePlanflag=false
  }
};
$scope.MATH102AlternatePlanListener = function () {
 if (!MATH102AlternatePlanflag) {
      that.addLine(getLine63());
      that.addLine(getLine65());
      that.addLine(getLine102());
      MATH102AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine63());
      that.removeLine(getLine65());
      that.removeLine(getLine102());
      MATH102AlternatePlanflag=false
  }
};
$scope.MATH201AlternatePlanListener = function () {
 if (!MATH201AlternatePlanflag) {
      that.addLine(getLine80());
      that.addLine(getLine103());
      that.addLine(getLine105());
      MATH201AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine80());
      that.removeLine(getLine103());
      that.removeLine(getLine105());
      MATH201AlternatePlanflag=false
  }
};
$scope.MATH209AlternatePlanListener = function () {
 if (!MATH209AlternatePlanflag) {
      that.addLine(getLine64());
      that.addLine(getLine65());
      that.addLine(getLine81());
      that.addLine(getLine88());
      that.addLine(getLine106());
      MATH209AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine64());
      that.removeLine(getLine65());
      that.removeLine(getLine81());
      that.removeLine(getLine88());
      that.removeLine(getLine106());
      MATH209AlternatePlanflag=false
  }
};
$scope.CIVE270AlternatePlanListener = function () {
 if (!CIVE270AlternatePlanflag) {
      that.addLine(getLine66());
      that.addLine(getLine67());
      that.addLine(getLine72());
      that.addLine(getLine82());
      that.addLine(getLine94());
      that.addLine(getLine99());
      CIVE270AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine66());
      that.removeLine(getLine67());
      that.removeLine(getLine72());
      that.removeLine(getLine82());
      that.removeLine(getLine94());
      that.removeLine(getLine99());
      CIVE270AlternatePlanflag=false
  }
};
$scope.MECE230AlternatePlanListener = function () {
 if (!MECE230AlternatePlanflag) {
      that.addLine(getLine68());
      that.addLine(getLine69());
      that.addLine(getLine86());
      that.addLine(getLine90());
      MECE230AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine68());
      that.removeLine(getLine69());
      that.removeLine(getLine86());
      that.removeLine(getLine90());
      MECE230AlternatePlanflag=false
  }
};
$scope.MECE260AlternatePlanListener = function () {
 if (!MECE260AlternatePlanflag) {
      that.addLine(getLine70());
      that.addLine(getLine71());
      that.addLine(getLine72());
      that.addLine(getLine96());
      MECE260AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine70());
      that.removeLine(getLine71());
      that.removeLine(getLine72());
      that.removeLine(getLine96());
      MECE260AlternatePlanflag=false
  }
};
$scope.MECE265AlternatePlanListener = function () {
 if (!MECE265AlternatePlanflag) {
      that.addLine(getLine71());
      that.addLine(getLine97());
      MECE265AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine71());
      that.removeLine(getLine97());
      MECE265AlternatePlanflag=false
  }
};
$scope.STAT235AlternatePlanListener = function () {
 if (!STAT235AlternatePlanflag) {
      that.addLine(getLine73());
      that.addLine(getLine74());
      that.addLine(getLine84());
      STAT235AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine73());
      that.removeLine(getLine74());
      that.removeLine(getLine84());
      STAT235AlternatePlanflag=false
  }
};
$scope.CHE243AlternatePlanListener = function () {
 if (!CHE243AlternatePlanflag) {
      that.addLine(getLine75());
      that.addLine(getLine89());
      that.addLine(getLine91());
      that.addLine(getLine95());
      CHE243AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine75());
      that.removeLine(getLine89());
      that.removeLine(getLine91());
      that.removeLine(getLine95());
      CHE243AlternatePlanflag=false
  }
};
$scope.ECE209AlternatePlanListener = function () {
 if (!ECE209AlternatePlanflag) {
      that.addLine(getLine83());
      ECE209AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine83());
      ECE209AlternatePlanflag=false
  }
};
$scope.MATE202AlternatePlanListener = function () {
 if (!MATE202AlternatePlanflag) {
      that.addLine(getLine76());
      that.addLine(getLine98());
      MATE202AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine76());
      that.removeLine(getLine98());
      MATE202AlternatePlanflag=false
  }
};
$scope.MECE200AlternatePlanListener = function () {
 if (!MECE200AlternatePlanflag) {
      that.addLine(getLine113());
      MECE200AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine113());
      MECE200AlternatePlanflag=false
  }
};
$scope.MECE250AlternatePlanListener = function () {
 if (!MECE250AlternatePlanflag) {
      that.addLine(getLine77());
      that.addLine(getLine78());
      that.addLine(getLine79());
      that.addLine(getLine87());
      that.addLine(getLine101());
      that.addLine(getLine111());
      MECE250AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine77());
      that.removeLine(getLine78());
      that.removeLine(getLine79());
      that.removeLine(getLine87());
      that.removeLine(getLine101());
      that.removeLine(getLine111());
      MECE250AlternatePlanflag=false
  }
};
$scope.MATH300AlternatePlanListener = function () {
 if (!MATH300AlternatePlanflag) {
      that.addLine(getLine80());
      that.addLine(getLine81());
      that.addLine(getLine92());
      that.addLine(getLine112());
      MATH300AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine80());
      that.removeLine(getLine81());
      that.removeLine(getLine92());
      that.removeLine(getLine112());
      MATH300AlternatePlanflag=false
  }
};
$scope.MECE300AlternatePlanListener = function () {
 if (!MECE300AlternatePlanflag) {
      that.addLine(getLine82());
      that.addLine(getLine83());
      that.addLine(getLine84());
      that.addLine(getLine85());
      that.addLine(getLine107());
      MECE300AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine82());
      that.removeLine(getLine83());
      that.removeLine(getLine84());
      that.removeLine(getLine85());
      that.removeLine(getLine107());
      MECE300AlternatePlanflag=false
  }
};
$scope.MECE301AlternatePlanListener = function () {
 if (!MECE301AlternatePlanflag) {
      that.addLine(getLine85());
      that.addLine(getLine108());
      MECE301AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine85());
      that.removeLine(getLine108());
      MECE301AlternatePlanflag=false
  }
};
$scope.MECE331AlternatePlanListener = function () {
 if (!MECE331AlternatePlanflag) {
      that.addLine(getLine86());
      that.addLine(getLine87());
      that.addLine(getLine88());
      that.addLine(getLine89());
      that.addLine(getLine93());
      MECE331AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine86());
      that.removeLine(getLine87());
      that.removeLine(getLine88());
      that.removeLine(getLine89());
      that.removeLine(getLine93());
      MECE331AlternatePlanflag=false
  }
};
$scope.MECE371AlternatePlanListener = function () {
 if (!MECE371AlternatePlanflag) {
      that.addLine(getLine90());
      that.addLine(getLine91());
      that.addLine(getLine92());
      that.addLine(getLine93());
      MECE371AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine90());
      that.removeLine(getLine91());
      that.removeLine(getLine92());
      that.removeLine(getLine93());
      MECE371AlternatePlanflag=false
  }
};
$scope.MECE380AlternatePlanListener = function () {
 if (!MECE380AlternatePlanflag) {
      that.addLine(getLine94());
      that.addLine(getLine117());
      MECE380AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine94());
      that.removeLine(getLine117());
      MECE380AlternatePlanflag=false
  }
};
$scope.MECE340AlternatePlanListener = function () {
 if (!MECE340AlternatePlanflag) {
      that.addLine(getLine95());
      that.addLine(getLine104());
      that.addLine(getLine109());
      that.addLine(getLine114());
      MECE340AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine95());
      that.removeLine(getLine104());
      that.removeLine(getLine109());
      that.removeLine(getLine114());
      MECE340AlternatePlanflag=false
  }
};
$scope.MECE360AlternatePlanListener = function () {
 if (!MECE360AlternatePlanflag) {
      that.addLine(getLine96());
      that.addLine(getLine97());
      that.addLine(getLine98());
      that.addLine(getLine99());
      that.addLine(getLine100());
      that.addLine(getLine110());
      that.addLine(getLine115());
      MECE360AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine96());
      that.removeLine(getLine97());
      that.removeLine(getLine98());
      that.removeLine(getLine99());
      that.removeLine(getLine100());
      that.removeLine(getLine110());
      that.removeLine(getLine115());
      MECE360AlternatePlanflag=false
  }
};
$scope.MECE362AlternatePlanListener = function () {
 if (!MECE362AlternatePlanflag) {
      that.addLine(getLine100());
      that.addLine(getLine101());
      that.addLine(getLine116());
      MECE362AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine100());
      that.removeLine(getLine101());
      that.removeLine(getLine116());
      MECE362AlternatePlanflag=false
  }
};
$scope.MECE390AlternatePlanListener = function () {
 if (!MECE390AlternatePlanflag) {
      that.addLine(getLine102());
      that.addLine(getLine103());
      MECE390AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine102());
      that.removeLine(getLine103());
      MECE390AlternatePlanflag=false
  }
};
$scope.MECE463AlternatePlanListener = function () {
 if (!MECE463AlternatePlanflag) {
      that.addLine(getLine104());
      MECE463AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine104());
      MECE463AlternatePlanflag=false
  }
};
$scope.CHE448AlternatePlanListener = function () {
 if (!CHE448AlternatePlanflag) {
      that.addLine(getLine105());
      that.addLine(getLine106());
      CHE448AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine105());
      that.removeLine(getLine106());
      CHE448AlternatePlanflag=false
  }
};
$scope.MECE403AlternatePlanListener = function () {
 if (!MECE403AlternatePlanflag) {
      that.addLine(getLine107());
      that.addLine(getLine108());
      that.addLine(getLine109());
      that.addLine(getLine110());
      MECE403AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine107());
      that.removeLine(getLine108());
      that.removeLine(getLine109());
      that.removeLine(getLine110());
      MECE403AlternatePlanflag=false
  }
};
$scope.MECE451AlternatePlanListener = function () {
 if (!MECE451AlternatePlanflag) {
      that.addLine(getLine111());
      that.addLine(getLine112());
      MECE451AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine111());
      that.removeLine(getLine112());
      MECE451AlternatePlanflag=false
  }
};
$scope.MECE460AlternatePlanListener = function () {
 if (!MECE460AlternatePlanflag) {
      that.addLine(getLine113());
      that.addLine(getLine114());
      that.addLine(getLine115());
      that.addLine(getLine116());
      that.addLine(getLine117());
      MECE460AlternatePlanflag=true
  }
 else {
      that.removeLine(getLine113());
      that.removeLine(getLine114());
      that.removeLine(getLine115());
      that.removeLine(getLine116());
      that.removeLine(getLine117());
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
 if (!CHEM103CoopPlan1flag) {
      that.addLine(getLine119());
      CHEM103CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine119());
      CHEM103CoopPlan1flag=false
  }
};
$scope.ENGG130CoopPlan1Listener = function () {
 if (!ENGG130CoopPlan1flag) {
      that.addLine(getLine118());
      that.addLine(getLine120());
      that.addLine(getLine123());
      that.addLine(getLine136());
      ENGG130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine118());
      that.removeLine(getLine120());
      that.removeLine(getLine123());
      that.removeLine(getLine136());
      ENGG130CoopPlan1flag=false
  }
};
$scope.MATH100CoopPlan1Listener = function () {
 if (!MATH100CoopPlan1flag) {
      that.addLine(getLine118());
      that.addLine(getLine121());
      that.addLine(getLine122());
      that.addLine(getLine132());
      MATH100CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine118());
      that.removeLine(getLine121());
      that.removeLine(getLine122());
      that.removeLine(getLine132());
      MATH100CoopPlan1flag=false
  }
};
$scope.CHEM105CoopPlan1Listener = function () {
 if (!CHEM105CoopPlan1flag) {
      that.addLine(getLine119());
      that.addLine(getLine135());
      CHEM105CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine119());
      that.removeLine(getLine135());
      CHEM105CoopPlan1flag=false
  }
};
$scope.ENGG160CoopPlan1Listener = function () {
 if (!ENGG160CoopPlan1flag) {
      that.addLine(getLine129());
      ENGG160CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine129());
      ENGG160CoopPlan1flag=false
  }
};
$scope.ENPH131CoopPlan1Listener = function () {
 if (!ENPH131CoopPlan1flag) {
      that.addLine(getLine120());
      that.addLine(getLine128());
      that.addLine(getLine137());
      ENPH131CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine120());
      that.removeLine(getLine128());
      that.removeLine(getLine137());
      ENPH131CoopPlan1flag=false
  }
};
$scope.MATH101CoopPlan1Listener = function () {
 if (!MATH101CoopPlan1flag) {
      that.addLine(getLine121());
      that.addLine(getLine124());
      that.addLine(getLine125());
      that.addLine(getLine127());
      that.addLine(getLine133());
      that.addLine(getLine134());
      that.addLine(getLine138());
      MATH101CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine124());
      that.removeLine(getLine125());
      that.removeLine(getLine127());
      that.removeLine(getLine133());
      that.removeLine(getLine134());
      that.removeLine(getLine138());
      MATH101CoopPlan1flag=false
  }
};
$scope.MATH102CoopPlan1Listener = function () {
 if (!MATH102CoopPlan1flag) {
      that.addLine(getLine122());
      that.addLine(getLine126());
      that.addLine(getLine165());
      MATH102CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine122());
      that.removeLine(getLine126());
      that.removeLine(getLine165());
      MATH102CoopPlan1flag=false
  }
};
$scope.CIVE270CoopPlan1Listener = function () {
 if (!CIVE270CoopPlan1flag) {
      that.addLine(getLine123());
      that.addLine(getLine124());
      that.addLine(getLine131());
      that.addLine(getLine143());
      that.addLine(getLine155());
      that.addLine(getLine162());
      CIVE270CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine123());
      that.removeLine(getLine124());
      that.removeLine(getLine131());
      that.removeLine(getLine143());
      that.removeLine(getLine155());
      that.removeLine(getLine162());
      CIVE270CoopPlan1flag=false
  }
};
$scope.ENGG299CoopPlan1Listener = function () {
 if (!ENGG299CoopPlan1flag) {
      that.addLine(getLine139());
      ENGG299CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine139());
      ENGG299CoopPlan1flag=false
  }
};
$scope.MATH209CoopPlan1Listener = function () {
 if (!MATH209CoopPlan1flag) {
      that.addLine(getLine125());
      that.addLine(getLine126());
      that.addLine(getLine142());
      that.addLine(getLine149());
      that.addLine(getLine170());
      MATH209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine125());
      that.removeLine(getLine126());
      that.removeLine(getLine142());
      that.removeLine(getLine149());
      that.removeLine(getLine170());
      MATH209CoopPlan1flag=false
  }
};
$scope.MECE230CoopPlan1Listener = function () {
 if (!MECE230CoopPlan1flag) {
      that.addLine(getLine127());
      that.addLine(getLine128());
      that.addLine(getLine147());
      that.addLine(getLine151());
      MECE230CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine128());
      that.removeLine(getLine147());
      that.removeLine(getLine151());
      MECE230CoopPlan1flag=false
  }
};
$scope.MECE260CoopPlan1Listener = function () {
 if (!MECE260CoopPlan1flag) {
      that.addLine(getLine129());
      that.addLine(getLine130());
      that.addLine(getLine131());
      that.addLine(getLine159());
      MECE260CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine129());
      that.removeLine(getLine130());
      that.removeLine(getLine131());
      that.removeLine(getLine159());
      MECE260CoopPlan1flag=false
  }
};
$scope.MECE265CoopPlan1Listener = function () {
 if (!MECE265CoopPlan1flag) {
      that.addLine(getLine130());
      that.addLine(getLine160());
      MECE265CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine130());
      that.removeLine(getLine160());
      MECE265CoopPlan1flag=false
  }
};
$scope.STAT235CoopPlan1Listener = function () {
 if (!STAT235CoopPlan1flag) {
      that.addLine(getLine132());
      that.addLine(getLine133());
      that.addLine(getLine145());
      STAT235CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine132());
      that.removeLine(getLine133());
      that.removeLine(getLine145());
      STAT235CoopPlan1flag=false
  }
};
$scope.CHE243CoopPlan1Listener = function () {
 if (!CHE243CoopPlan1flag) {
      that.addLine(getLine134());
      that.addLine(getLine150());
      that.addLine(getLine152());
      that.addLine(getLine158());
      CHE243CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine134());
      that.removeLine(getLine150());
      that.removeLine(getLine152());
      that.removeLine(getLine158());
      CHE243CoopPlan1flag=false
  }
};
$scope.ECE209CoopPlan1Listener = function () {
 if (!ECE209CoopPlan1flag) {
      that.addLine(getLine144());
      ECE209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine144());
      ECE209CoopPlan1flag=false
  }
};
$scope.MATE202CoopPlan1Listener = function () {
 if (!MATE202CoopPlan1flag) {
      that.addLine(getLine135());
      that.addLine(getLine161());
      MATE202CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine135());
      that.removeLine(getLine161());
      MATE202CoopPlan1flag=false
  }
};
$scope.MATH201CoopPlan1Listener = function () {
 if (!MATH201CoopPlan1flag) {
      that.addLine(getLine141());
      that.addLine(getLine166());
      that.addLine(getLine169());
      MATH201CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine141());
      that.removeLine(getLine166());
      that.removeLine(getLine169());
      MATH201CoopPlan1flag=false
  }
};
$scope.MECE200CoopPlan1Listener = function () {
 if (!MECE200CoopPlan1flag) {
      that.addLine(getLine177());
      MECE200CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine177());
      MECE200CoopPlan1flag=false
  }
};
$scope.MECE250CoopPlan1Listener = function () {
 if (!MECE250CoopPlan1flag) {
      that.addLine(getLine136());
      that.addLine(getLine137());
      that.addLine(getLine138());
      that.addLine(getLine148());
      that.addLine(getLine164());
      that.addLine(getLine175());
      MECE250CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine136());
      that.removeLine(getLine137());
      that.removeLine(getLine138());
      that.removeLine(getLine148());
      that.removeLine(getLine164());
      that.removeLine(getLine175());
      MECE250CoopPlan1flag=false
  }
};
$scope.WKEXP901CoopPlan1Listener = function () {
 if (!WKEXP901CoopPlan1flag) {
      that.addLine(getLine139());
      that.addLine(getLine140());
      WKEXP901CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine139());
      that.removeLine(getLine140());
      WKEXP901CoopPlan1flag=false
  }
};
$scope.WKEXP902CoopPlan1Listener = function () {
 if (!WKEXP902CoopPlan1flag) {
      that.addLine(getLine140());
      that.addLine(getLine156());
      WKEXP902CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine140());
      that.removeLine(getLine156());
      WKEXP902CoopPlan1flag=false
  }
};
$scope.MATH300CoopPlan1Listener = function () {
 if (!MATH300CoopPlan1flag) {
      that.addLine(getLine141());
      that.addLine(getLine142());
      that.addLine(getLine153());
      that.addLine(getLine176());
      MATH300CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine141());
      that.removeLine(getLine142());
      that.removeLine(getLine153());
      that.removeLine(getLine176());
      MATH300CoopPlan1flag=false
  }
};
$scope.MECE300CoopPlan1Listener = function () {
 if (!MECE300CoopPlan1flag) {
      that.addLine(getLine143());
      that.addLine(getLine144());
      that.addLine(getLine145());
      that.addLine(getLine146());
      that.addLine(getLine171());
      MECE300CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine143());
      that.removeLine(getLine144());
      that.removeLine(getLine145());
      that.removeLine(getLine146());
      that.removeLine(getLine171());
      MECE300CoopPlan1flag=false
  }
};
$scope.MECE301CoopPlan1Listener = function () {
 if (!MECE301CoopPlan1flag) {
      that.addLine(getLine146());
      that.addLine(getLine172());
      MECE301CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine146());
      that.removeLine(getLine172());
      MECE301CoopPlan1flag=false
  }
};
$scope.MECE331CoopPlan1Listener = function () {
 if (!MECE331CoopPlan1flag) {
      that.addLine(getLine147());
      that.addLine(getLine148());
      that.addLine(getLine149());
      that.addLine(getLine150());
      that.addLine(getLine154());
      MECE331CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine147());
      that.removeLine(getLine148());
      that.removeLine(getLine149());
      that.removeLine(getLine150());
      that.removeLine(getLine154());
      MECE331CoopPlan1flag=false
  }
};
$scope.MECE371CoopPlan1Listener = function () {
 if (!MECE371CoopPlan1flag) {
      that.addLine(getLine151());
      that.addLine(getLine152());
      that.addLine(getLine153());
      that.addLine(getLine154());
      MECE371CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine151());
      that.removeLine(getLine152());
      that.removeLine(getLine153());
      that.removeLine(getLine154());
      MECE371CoopPlan1flag=false
  }
};
$scope.MECE380CoopPlan1Listener = function () {
 if (!MECE380CoopPlan1flag) {
      that.addLine(getLine155());
      that.addLine(getLine181());
      MECE380CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine155());
      that.removeLine(getLine181());
      MECE380CoopPlan1flag=false
  }
};
$scope.WKEXP903CoopPlan1Listener = function () {
 if (!WKEXP903CoopPlan1flag) {
      that.addLine(getLine156());
      that.addLine(getLine157());
      WKEXP903CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine156());
      that.removeLine(getLine157());
      WKEXP903CoopPlan1flag=false
  }
};
$scope.WKEXP904CoopPlan1Listener = function () {
 if (!WKEXP904CoopPlan1flag) {
      that.addLine(getLine157());
      that.addLine(getLine168());
      WKEXP904CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine157());
      that.removeLine(getLine168());
      WKEXP904CoopPlan1flag=false
  }
};
$scope.MECE340CoopPlan1Listener = function () {
 if (!MECE340CoopPlan1flag) {
      that.addLine(getLine158());
      that.addLine(getLine167());
      that.addLine(getLine173());
      that.addLine(getLine178());
      MECE340CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine158());
      that.removeLine(getLine167());
      that.removeLine(getLine173());
      that.removeLine(getLine178());
      MECE340CoopPlan1flag=false
  }
};
$scope.MECE360CoopPlan1Listener = function () {
 if (!MECE360CoopPlan1flag) {
      that.addLine(getLine159());
      that.addLine(getLine160());
      that.addLine(getLine161());
      that.addLine(getLine162());
      that.addLine(getLine163());
      that.addLine(getLine174());
      that.addLine(getLine179());
      MECE360CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine159());
      that.removeLine(getLine160());
      that.removeLine(getLine161());
      that.removeLine(getLine162());
      that.removeLine(getLine163());
      that.removeLine(getLine174());
      that.removeLine(getLine179());
      MECE360CoopPlan1flag=false
  }
};
$scope.MECE362CoopPlan1Listener = function () {
 if (!MECE362CoopPlan1flag) {
      that.addLine(getLine163());
      that.addLine(getLine164());
      that.addLine(getLine180());
      MECE362CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine163());
      that.removeLine(getLine164());
      that.removeLine(getLine180());
      MECE362CoopPlan1flag=false
  }
};
$scope.MECE390CoopPlan1Listener = function () {
 if (!MECE390CoopPlan1flag) {
      that.addLine(getLine165());
      that.addLine(getLine166());
      MECE390CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine165());
      that.removeLine(getLine166());
      MECE390CoopPlan1flag=false
  }
};
$scope.MECE463CoopPlan1Listener = function () {
 if (!MECE463CoopPlan1flag) {
      that.addLine(getLine167());
      MECE463CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine167());
      MECE463CoopPlan1flag=false
  }
};
$scope.WKEXP905CoopPlan1Listener = function () {
 if (!WKEXP905CoopPlan1flag) {
      that.addLine(getLine168());
      WKEXP905CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine168());
      WKEXP905CoopPlan1flag=false
  }
};
$scope.CHE448CoopPlan1Listener = function () {
 if (!CHE448CoopPlan1flag) {
      that.addLine(getLine169());
      that.addLine(getLine170());
      CHE448CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine169());
      that.removeLine(getLine170());
      CHE448CoopPlan1flag=false
  }
};
$scope.MECE403CoopPlan1Listener = function () {
 if (!MECE403CoopPlan1flag) {
      that.addLine(getLine171());
      that.addLine(getLine172());
      that.addLine(getLine173());
      that.addLine(getLine174());
      MECE403CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine171());
      that.removeLine(getLine172());
      that.removeLine(getLine173());
      that.removeLine(getLine174());
      MECE403CoopPlan1flag=false
  }
};
$scope.MECE451CoopPlan1Listener = function () {
 if (!MECE451CoopPlan1flag) {
      that.addLine(getLine175());
      that.addLine(getLine176());
      MECE451CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine175());
      that.removeLine(getLine176());
      MECE451CoopPlan1flag=false
  }
};
$scope.MECE460CoopPlan1Listener = function () {
 if (!MECE460CoopPlan1flag) {
      that.addLine(getLine177());
      that.addLine(getLine178());
      that.addLine(getLine179());
      that.addLine(getLine180());
      that.addLine(getLine181());
      MECE460CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine177());
      that.removeLine(getLine178());
      that.removeLine(getLine179());
      that.removeLine(getLine180());
      that.removeLine(getLine181());
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
 if (!CHEM103CoopPlan2flag) {
      that.addLine(getLine183());
      CHEM103CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine183());
      CHEM103CoopPlan2flag=false
  }
};
$scope.ENGG130CoopPlan2Listener = function () {
 if (!ENGG130CoopPlan2flag) {
      that.addLine(getLine182());
      that.addLine(getLine184());
      that.addLine(getLine188());
      that.addLine(getLine192());
      ENGG130CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine182());
      that.removeLine(getLine184());
      that.removeLine(getLine188());
      that.removeLine(getLine192());
      ENGG130CoopPlan2flag=false
  }
};
$scope.MATH100CoopPlan2Listener = function () {
 if (!MATH100CoopPlan2flag) {
      that.addLine(getLine182());
      that.addLine(getLine185());
      that.addLine(getLine186());
      that.addLine(getLine195());
      MATH100CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine182());
      that.removeLine(getLine185());
      that.removeLine(getLine186());
      that.removeLine(getLine195());
      MATH100CoopPlan2flag=false
  }
};
$scope.CHEM105CoopPlan2Listener = function () {
 if (!CHEM105CoopPlan2flag) {
      that.addLine(getLine183());
      that.addLine(getLine198());
      CHEM105CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine183());
      that.removeLine(getLine198());
      CHEM105CoopPlan2flag=false
  }
};
$scope.ENGG160CoopPlan2Listener = function () {
 if (!ENGG160CoopPlan2flag) {
      that.addLine(getLine201());
      ENGG160CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine201());
      ENGG160CoopPlan2flag=false
  }
};
$scope.ENPH131CoopPlan2Listener = function () {
 if (!ENPH131CoopPlan2flag) {
      that.addLine(getLine184());
      that.addLine(getLine193());
      that.addLine(getLine200());
      ENPH131CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine184());
      that.removeLine(getLine193());
      that.removeLine(getLine200());
      ENPH131CoopPlan2flag=false
  }
};
$scope.MATH101CoopPlan2Listener = function () {
 if (!MATH101CoopPlan2flag) {
      that.addLine(getLine185());
      that.addLine(getLine187());
      that.addLine(getLine189());
      that.addLine(getLine190());
      that.addLine(getLine194());
      that.addLine(getLine196());
      that.addLine(getLine199());
      MATH101CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine185());
      that.removeLine(getLine187());
      that.removeLine(getLine189());
      that.removeLine(getLine190());
      that.removeLine(getLine194());
      that.removeLine(getLine196());
      that.removeLine(getLine199());
      MATH101CoopPlan2flag=false
  }
};
$scope.MATH102CoopPlan2Listener = function () {
 if (!MATH102CoopPlan2flag) {
      that.addLine(getLine186());
      that.addLine(getLine191());
      that.addLine(getLine228());
      MATH102CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine186());
      that.removeLine(getLine191());
      that.removeLine(getLine228());
      MATH102CoopPlan2flag=false
  }
};
$scope.CHE243CoopPlan2Listener = function () {
 if (!CHE243CoopPlan2flag) {
      that.addLine(getLine187());
      that.addLine(getLine213());
      that.addLine(getLine215());
      that.addLine(getLine221());
      CHE243CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine187());
      that.removeLine(getLine213());
      that.removeLine(getLine215());
      that.removeLine(getLine221());
      CHE243CoopPlan2flag=false
  }
};
$scope.CIVE270CoopPlan2Listener = function () {
 if (!CIVE270CoopPlan2flag) {
      that.addLine(getLine188());
      that.addLine(getLine189());
      that.addLine(getLine203());
      that.addLine(getLine206());
      that.addLine(getLine218());
      that.addLine(getLine225());
      CIVE270CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine188());
      that.removeLine(getLine189());
      that.removeLine(getLine203());
      that.removeLine(getLine206());
      that.removeLine(getLine218());
      that.removeLine(getLine225());
      CIVE270CoopPlan2flag=false
  }
};
$scope.ENGG299CoopPlan2Listener = function () {
 if (!ENGG299CoopPlan2flag) {
      that.addLine(getLine197());
      ENGG299CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine197());
      ENGG299CoopPlan2flag=false
  }
};
$scope.MATH209CoopPlan2Listener = function () {
 if (!MATH209CoopPlan2flag) {
      that.addLine(getLine190());
      that.addLine(getLine191());
      that.addLine(getLine205());
      that.addLine(getLine212());
      that.addLine(getLine244());
      MATH209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine190());
      that.removeLine(getLine191());
      that.removeLine(getLine205());
      that.removeLine(getLine212());
      that.removeLine(getLine244());
      MATH209CoopPlan2flag=false
  }
};
$scope.MECE200CoopPlan2Listener = function () {
 if (!MECE200CoopPlan2flag) {
      that.addLine(getLine237());
      MECE200CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine237());
      MECE200CoopPlan2flag=false
  }
};
$scope.MECE250CoopPlan2Listener = function () {
 if (!MECE250CoopPlan2flag) {
      that.addLine(getLine192());
      that.addLine(getLine193());
      that.addLine(getLine194());
      that.addLine(getLine211());
      that.addLine(getLine227());
      that.addLine(getLine235());
      MECE250CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine192());
      that.removeLine(getLine193());
      that.removeLine(getLine194());
      that.removeLine(getLine211());
      that.removeLine(getLine227());
      that.removeLine(getLine235());
      MECE250CoopPlan2flag=false
  }
};
$scope.STAT235CoopPlan2Listener = function () {
 if (!STAT235CoopPlan2flag) {
      that.addLine(getLine195());
      that.addLine(getLine196());
      that.addLine(getLine208());
      STAT235CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine195());
      that.removeLine(getLine196());
      that.removeLine(getLine208());
      STAT235CoopPlan2flag=false
  }
};
$scope.WKEXP901CoopPlan2Listener = function () {
 if (!WKEXP901CoopPlan2flag) {
      that.addLine(getLine197());
      that.addLine(getLine219());
      WKEXP901CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine197());
      that.removeLine(getLine219());
      WKEXP901CoopPlan2flag=false
  }
};
$scope.ECE209CoopPlan2Listener = function () {
 if (!ECE209CoopPlan2flag) {
      that.addLine(getLine207());
      ECE209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine207());
      ECE209CoopPlan2flag=false
  }
};
$scope.MATE202CoopPlan2Listener = function () {
 if (!MATE202CoopPlan2flag) {
      that.addLine(getLine198());
      that.addLine(getLine224());
      MATE202CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine198());
      that.removeLine(getLine224());
      MATE202CoopPlan2flag=false
  }
};
$scope.MATH201CoopPlan2Listener = function () {
 if (!MATH201CoopPlan2flag) {
      that.addLine(getLine204());
      that.addLine(getLine229());
      that.addLine(getLine243());
      MATH201CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine204());
      that.removeLine(getLine229());
      that.removeLine(getLine243());
      MATH201CoopPlan2flag=false
  }
};
$scope.MECE230CoopPlan2Listener = function () {
 if (!MECE230CoopPlan2flag) {
      that.addLine(getLine199());
      that.addLine(getLine200());
      that.addLine(getLine210());
      that.addLine(getLine214());
      MECE230CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine199());
      that.removeLine(getLine200());
      that.removeLine(getLine210());
      that.removeLine(getLine214());
      MECE230CoopPlan2flag=false
  }
};
$scope.MECE260CoopPlan2Listener = function () {
 if (!MECE260CoopPlan2flag) {
      that.addLine(getLine201());
      that.addLine(getLine202());
      that.addLine(getLine203());
      that.addLine(getLine222());
      MECE260CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine201());
      that.removeLine(getLine202());
      that.removeLine(getLine203());
      that.removeLine(getLine222());
      MECE260CoopPlan2flag=false
  }
};
$scope.MECE265CoopPlan2Listener = function () {
 if (!MECE265CoopPlan2flag) {
      that.addLine(getLine202());
      that.addLine(getLine223());
      MECE265CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine202());
      that.removeLine(getLine223());
      MECE265CoopPlan2flag=false
  }
};
$scope.MATH300CoopPlan2Listener = function () {
 if (!MATH300CoopPlan2flag) {
      that.addLine(getLine204());
      that.addLine(getLine205());
      that.addLine(getLine216());
      that.addLine(getLine236());
      MATH300CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine204());
      that.removeLine(getLine205());
      that.removeLine(getLine216());
      that.removeLine(getLine236());
      MATH300CoopPlan2flag=false
  }
};
$scope.MECE300CoopPlan2Listener = function () {
 if (!MECE300CoopPlan2flag) {
      that.addLine(getLine206());
      that.addLine(getLine207());
      that.addLine(getLine208());
      that.addLine(getLine209());
      that.addLine(getLine231());
      MECE300CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine206());
      that.removeLine(getLine207());
      that.removeLine(getLine208());
      that.removeLine(getLine209());
      that.removeLine(getLine231());
      MECE300CoopPlan2flag=false
  }
};
$scope.MECE301CoopPlan2Listener = function () {
 if (!MECE301CoopPlan2flag) {
      that.addLine(getLine209());
      that.addLine(getLine232());
      MECE301CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine209());
      that.removeLine(getLine232());
      MECE301CoopPlan2flag=false
  }
};
$scope.MECE331CoopPlan2Listener = function () {
 if (!MECE331CoopPlan2flag) {
      that.addLine(getLine210());
      that.addLine(getLine211());
      that.addLine(getLine212());
      that.addLine(getLine213());
      that.addLine(getLine217());
      MECE331CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine210());
      that.removeLine(getLine211());
      that.removeLine(getLine212());
      that.removeLine(getLine213());
      that.removeLine(getLine217());
      MECE331CoopPlan2flag=false
  }
};
$scope.MECE371CoopPlan2Listener = function () {
 if (!MECE371CoopPlan2flag) {
      that.addLine(getLine214());
      that.addLine(getLine215());
      that.addLine(getLine216());
      that.addLine(getLine217());
      MECE371CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine214());
      that.removeLine(getLine215());
      that.removeLine(getLine216());
      that.removeLine(getLine217());
      MECE371CoopPlan2flag=false
  }
};
$scope.MECE380CoopPlan2Listener = function () {
 if (!MECE380CoopPlan2flag) {
      that.addLine(getLine218());
      that.addLine(getLine241());
      MECE380CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine218());
      that.removeLine(getLine241());
      MECE380CoopPlan2flag=false
  }
};
$scope.WKEXP902CoopPlan2Listener = function () {
 if (!WKEXP902CoopPlan2flag) {
      that.addLine(getLine219());
      that.addLine(getLine220());
      WKEXP902CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine219());
      that.removeLine(getLine220());
      WKEXP902CoopPlan2flag=false
  }
};
$scope.WKEXP903CoopPlan2Listener = function () {
 if (!WKEXP903CoopPlan2flag) {
      that.addLine(getLine220());
      that.addLine(getLine230());
      WKEXP903CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine220());
      that.removeLine(getLine230());
      WKEXP903CoopPlan2flag=false
  }
};
$scope.MECE340CoopPlan2Listener = function () {
 if (!MECE340CoopPlan2flag) {
      that.addLine(getLine221());
      that.addLine(getLine233());
      that.addLine(getLine238());
      that.addLine(getLine245());
      MECE340CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine221());
      that.removeLine(getLine233());
      that.removeLine(getLine238());
      that.removeLine(getLine245());
      MECE340CoopPlan2flag=false
  }
};
$scope.MECE360CoopPlan2Listener = function () {
 if (!MECE360CoopPlan2flag) {
      that.addLine(getLine222());
      that.addLine(getLine223());
      that.addLine(getLine224());
      that.addLine(getLine225());
      that.addLine(getLine226());
      that.addLine(getLine234());
      that.addLine(getLine239());
      MECE360CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine222());
      that.removeLine(getLine223());
      that.removeLine(getLine224());
      that.removeLine(getLine225());
      that.removeLine(getLine226());
      that.removeLine(getLine234());
      that.removeLine(getLine239());
      MECE360CoopPlan2flag=false
  }
};
$scope.MECE362CoopPlan2Listener = function () {
 if (!MECE362CoopPlan2flag) {
      that.addLine(getLine226());
      that.addLine(getLine227());
      that.addLine(getLine240());
      MECE362CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine226());
      that.removeLine(getLine227());
      that.removeLine(getLine240());
      MECE362CoopPlan2flag=false
  }
};
$scope.MECE390CoopPlan2Listener = function () {
 if (!MECE390CoopPlan2flag) {
      that.addLine(getLine228());
      that.addLine(getLine229());
      MECE390CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine228());
      that.removeLine(getLine229());
      MECE390CoopPlan2flag=false
  }
};
$scope.WKEXP904CoopPlan2Listener = function () {
 if (!WKEXP904CoopPlan2flag) {
      that.addLine(getLine230());
      that.addLine(getLine242());
      WKEXP904CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine230());
      that.removeLine(getLine242());
      WKEXP904CoopPlan2flag=false
  }
};
$scope.MECE403CoopPlan2Listener = function () {
 if (!MECE403CoopPlan2flag) {
      that.addLine(getLine231());
      that.addLine(getLine232());
      that.addLine(getLine233());
      that.addLine(getLine234());
      MECE403CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine231());
      that.removeLine(getLine232());
      that.removeLine(getLine233());
      that.removeLine(getLine234());
      MECE403CoopPlan2flag=false
  }
};
$scope.MECE451CoopPlan2Listener = function () {
 if (!MECE451CoopPlan2flag) {
      that.addLine(getLine235());
      that.addLine(getLine236());
      MECE451CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine235());
      that.removeLine(getLine236());
      MECE451CoopPlan2flag=false
  }
};
$scope.MECE460CoopPlan2Listener = function () {
 if (!MECE460CoopPlan2flag) {
      that.addLine(getLine237());
      that.addLine(getLine238());
      that.addLine(getLine239());
      that.addLine(getLine240());
      that.addLine(getLine241());
      MECE460CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine237());
      that.removeLine(getLine238());
      that.removeLine(getLine239());
      that.removeLine(getLine240());
      that.removeLine(getLine241());
      MECE460CoopPlan2flag=false
  }
};
$scope.WKEXP905CoopPlan2Listener = function () {
 if (!WKEXP905CoopPlan2flag) {
      that.addLine(getLine242());
      WKEXP905CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine242());
      WKEXP905CoopPlan2flag=false
  }
};
$scope.CHE448CoopPlan2Listener = function () {
 if (!CHE448CoopPlan2flag) {
      that.addLine(getLine243());
      that.addLine(getLine244());
      CHE448CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine243());
      that.removeLine(getLine244());
      CHE448CoopPlan2flag=false
  }
};
$scope.MECE463CoopPlan2Listener = function () {
 if (!MECE463CoopPlan2flag) {
      that.addLine(getLine245());
      MECE463CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine245());
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
 if (!CHEM103CoopPlan3Biomedicalflag) {
      that.addLine(getLine247());
      CHEM103CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine247());
      CHEM103CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG130CoopPlan3BiomedicalListener = function () {
 if (!ENGG130CoopPlan3Biomedicalflag) {
      that.addLine(getLine246());
      that.addLine(getLine248());
      that.addLine(getLine251());
      that.addLine(getLine258());
      ENGG130CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine246());
      that.removeLine(getLine248());
      that.removeLine(getLine251());
      that.removeLine(getLine258());
      ENGG130CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH100CoopPlan3BiomedicalListener = function () {
 if (!MATH100CoopPlan3Biomedicalflag) {
      that.addLine(getLine246());
      that.addLine(getLine249());
      that.addLine(getLine250());
      that.addLine(getLine255());
      MATH100CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine246());
      that.removeLine(getLine249());
      that.removeLine(getLine250());
      that.removeLine(getLine255());
      MATH100CoopPlan3Biomedicalflag=false
  }
};
$scope.CHEM105CoopPlan3BiomedicalListener = function () {
 if (!CHEM105CoopPlan3Biomedicalflag) {
      that.addLine(getLine247());
      that.addLine(getLine261());
      CHEM105CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine247());
      that.removeLine(getLine261());
      CHEM105CoopPlan3Biomedicalflag=false
  }
};
$scope.ENGG160CoopPlan3BiomedicalListener = function () {
 if (!ENGG160CoopPlan3Biomedicalflag) {
      that.addLine(getLine264());
      ENGG160CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine264());
      ENGG160CoopPlan3Biomedicalflag=false
  }
};
$scope.ENPH131CoopPlan3BiomedicalListener = function () {
 if (!ENPH131CoopPlan3Biomedicalflag) {
      that.addLine(getLine248());
      that.addLine(getLine259());
      that.addLine(getLine263());
      ENPH131CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine248());
      that.removeLine(getLine259());
      that.removeLine(getLine263());
      ENPH131CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH101CoopPlan3BiomedicalListener = function () {
 if (!MATH101CoopPlan3Biomedicalflag) {
      that.addLine(getLine249());
      that.addLine(getLine252());
      that.addLine(getLine253());
      that.addLine(getLine256());
      that.addLine(getLine257());
      that.addLine(getLine260());
      that.addLine(getLine262());
      MATH101CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine249());
      that.removeLine(getLine252());
      that.removeLine(getLine253());
      that.removeLine(getLine256());
      that.removeLine(getLine257());
      that.removeLine(getLine260());
      that.removeLine(getLine262());
      MATH101CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH102CoopPlan3BiomedicalListener = function () {
 if (!MATH102CoopPlan3Biomedicalflag) {
      that.addLine(getLine250());
      that.addLine(getLine254());
      that.addLine(getLine275());
      MATH102CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine250());
      that.removeLine(getLine254());
      that.removeLine(getLine275());
      MATH102CoopPlan3Biomedicalflag=false
  }
};
$scope.CIVE270CoopPlan3BiomedicalListener = function () {
 if (!CIVE270CoopPlan3Biomedicalflag) {
      that.addLine(getLine251());
      that.addLine(getLine252());
      that.addLine(getLine266());
      that.addLine(getLine272());
      that.addLine(getLine280());
      that.addLine(getLine292());
      CIVE270CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine251());
      that.removeLine(getLine252());
      that.removeLine(getLine266());
      that.removeLine(getLine272());
      that.removeLine(getLine280());
      that.removeLine(getLine292());
      CIVE270CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH209CoopPlan3BiomedicalListener = function () {
 if (!MATH209CoopPlan3Biomedicalflag) {
      that.addLine(getLine253());
      that.addLine(getLine254());
      that.addLine(getLine279());
      that.addLine(getLine286());
      that.addLine(getLine302());
      MATH209CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine253());
      that.removeLine(getLine254());
      that.removeLine(getLine279());
      that.removeLine(getLine286());
      that.removeLine(getLine302());
      MATH209CoopPlan3Biomedicalflag=false
  }
};
$scope.STAT235CoopPlan3BiomedicalListener = function () {
 if (!STAT235CoopPlan3Biomedicalflag) {
      that.addLine(getLine255());
      that.addLine(getLine256());
      that.addLine(getLine282());
      STAT235CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine255());
      that.removeLine(getLine256());
      that.removeLine(getLine282());
      STAT235CoopPlan3Biomedicalflag=false
  }
};
$scope.CHE243CoopPlan3BiomedicalListener = function () {
 if (!CHE243CoopPlan3Biomedicalflag) {
      that.addLine(getLine257());
      that.addLine(getLine268());
      that.addLine(getLine287());
      that.addLine(getLine289());
      CHE243CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine257());
      that.removeLine(getLine268());
      that.removeLine(getLine287());
      that.removeLine(getLine289());
      CHE243CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE200CoopPlan3BiomedicalListener = function () {
 if (!MECE200CoopPlan3Biomedicalflag) {
      that.addLine(getLine313());
      MECE200CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine313());
      MECE200CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE250CoopPlan3BiomedicalListener = function () {
 if (!MECE250CoopPlan3Biomedicalflag) {
      that.addLine(getLine258());
      that.addLine(getLine259());
      that.addLine(getLine260());
      that.addLine(getLine274());
      that.addLine(getLine285());
      that.addLine(getLine311());
      MECE250CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine258());
      that.removeLine(getLine259());
      that.removeLine(getLine260());
      that.removeLine(getLine274());
      that.removeLine(getLine285());
      that.removeLine(getLine311());
      MECE250CoopPlan3Biomedicalflag=false
  }
};
$scope.ECE209CoopPlan3BiomedicalListener = function () {
 if (!ECE209CoopPlan3Biomedicalflag) {
      that.addLine(getLine281());
      ECE209CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine281());
      ECE209CoopPlan3Biomedicalflag=false
  }
};
$scope.MATE202CoopPlan3BiomedicalListener = function () {
 if (!MATE202CoopPlan3Biomedicalflag) {
      that.addLine(getLine261());
      that.addLine(getLine271());
      MATE202CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine261());
      that.removeLine(getLine271());
      MATE202CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH201CoopPlan3BiomedicalListener = function () {
 if (!MATH201CoopPlan3Biomedicalflag) {
      that.addLine(getLine276());
      that.addLine(getLine278());
      that.addLine(getLine301());
      MATH201CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine276());
      that.removeLine(getLine278());
      that.removeLine(getLine301());
      MATH201CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE230CoopPlan3BiomedicalListener = function () {
 if (!MECE230CoopPlan3Biomedicalflag) {
      that.addLine(getLine262());
      that.addLine(getLine263());
      that.addLine(getLine284());
      that.addLine(getLine288());
      MECE230CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine262());
      that.removeLine(getLine263());
      that.removeLine(getLine284());
      that.removeLine(getLine288());
      MECE230CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE260CoopPlan3BiomedicalListener = function () {
 if (!MECE260CoopPlan3Biomedicalflag) {
      that.addLine(getLine264());
      that.addLine(getLine265());
      that.addLine(getLine266());
      that.addLine(getLine269());
      MECE260CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine264());
      that.removeLine(getLine265());
      that.removeLine(getLine266());
      that.removeLine(getLine269());
      MECE260CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE265CoopPlan3BiomedicalListener = function () {
 if (!MECE265CoopPlan3Biomedicalflag) {
      that.addLine(getLine265());
      that.addLine(getLine270());
      MECE265CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine265());
      that.removeLine(getLine270());
      MECE265CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP902CoopPlan3BiomedicalListener = function () {
 if (!WKEXP902CoopPlan3Biomedicalflag) {
      that.addLine(getLine267());
      that.addLine(getLine277());
      WKEXP902CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine267());
      that.removeLine(getLine277());
      WKEXP902CoopPlan3Biomedicalflag=false
  }
};
$scope.BME320CoopPlan3BiomedicalListener = function () {
 if (!BME320CoopPlan3Biomedicalflag) {
      that.addLine(getLine293());
      that.addLine(getLine303());
      BME320CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine293());
      that.removeLine(getLine303());
      BME320CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE340CoopPlan3BiomedicalListener = function () {
 if (!MECE340CoopPlan3Biomedicalflag) {
      that.addLine(getLine268());
      that.addLine(getLine300());
      that.addLine(getLine309());
      that.addLine(getLine314());
      MECE340CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine268());
      that.removeLine(getLine300());
      that.removeLine(getLine309());
      that.removeLine(getLine314());
      MECE340CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE360CoopPlan3BiomedicalListener = function () {
 if (!MECE360CoopPlan3Biomedicalflag) {
      that.addLine(getLine269());
      that.addLine(getLine270());
      that.addLine(getLine271());
      that.addLine(getLine272());
      that.addLine(getLine273());
      that.addLine(getLine295());
      that.addLine(getLine310());
      that.addLine(getLine315());
      MECE360CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine269());
      that.removeLine(getLine270());
      that.removeLine(getLine271());
      that.removeLine(getLine272());
      that.removeLine(getLine273());
      that.removeLine(getLine295());
      that.removeLine(getLine310());
      that.removeLine(getLine315());
      MECE360CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE362CoopPlan3BiomedicalListener = function () {
 if (!MECE362CoopPlan3Biomedicalflag) {
      that.addLine(getLine273());
      that.addLine(getLine274());
      that.addLine(getLine316());
      MECE362CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine273());
      that.removeLine(getLine274());
      that.removeLine(getLine316());
      MECE362CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE390CoopPlan3BiomedicalListener = function () {
 if (!MECE390CoopPlan3Biomedicalflag) {
      that.addLine(getLine275());
      that.addLine(getLine276());
      that.addLine(getLine296());
      MECE390CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine275());
      that.removeLine(getLine276());
      that.removeLine(getLine296());
      MECE390CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP903CoopPlan3BiomedicalListener = function () {
 if (!WKEXP903CoopPlan3Biomedicalflag) {
      that.addLine(getLine277());
      that.addLine(getLine298());
      WKEXP903CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine277());
      that.removeLine(getLine298());
      WKEXP903CoopPlan3Biomedicalflag=false
  }
};
$scope.MATH300CoopPlan3BiomedicalListener = function () {
 if (!MATH300CoopPlan3Biomedicalflag) {
      that.addLine(getLine278());
      that.addLine(getLine279());
      that.addLine(getLine290());
      that.addLine(getLine294());
      that.addLine(getLine312());
      MATH300CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine278());
      that.removeLine(getLine279());
      that.removeLine(getLine290());
      that.removeLine(getLine294());
      that.removeLine(getLine312());
      MATH300CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE300CoopPlan3BiomedicalListener = function () {
 if (!MECE300CoopPlan3Biomedicalflag) {
      that.addLine(getLine280());
      that.addLine(getLine281());
      that.addLine(getLine282());
      that.addLine(getLine283());
      that.addLine(getLine307());
      MECE300CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine280());
      that.removeLine(getLine281());
      that.removeLine(getLine282());
      that.removeLine(getLine283());
      that.removeLine(getLine307());
      MECE300CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE301CoopPlan3BiomedicalListener = function () {
 if (!MECE301CoopPlan3Biomedicalflag) {
      that.addLine(getLine283());
      that.addLine(getLine308());
      MECE301CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine283());
      that.removeLine(getLine308());
      MECE301CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE331CoopPlan3BiomedicalListener = function () {
 if (!MECE331CoopPlan3Biomedicalflag) {
      that.addLine(getLine284());
      that.addLine(getLine285());
      that.addLine(getLine286());
      that.addLine(getLine287());
      that.addLine(getLine291());
      MECE331CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine284());
      that.removeLine(getLine285());
      that.removeLine(getLine286());
      that.removeLine(getLine287());
      that.removeLine(getLine291());
      MECE331CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE371CoopPlan3BiomedicalListener = function () {
 if (!MECE371CoopPlan3Biomedicalflag) {
      that.addLine(getLine288());
      that.addLine(getLine289());
      that.addLine(getLine290());
      that.addLine(getLine291());
      MECE371CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine288());
      that.removeLine(getLine289());
      that.removeLine(getLine290());
      that.removeLine(getLine291());
      MECE371CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE380CoopPlan3BiomedicalListener = function () {
 if (!MECE380CoopPlan3Biomedicalflag) {
      that.addLine(getLine292());
      that.addLine(getLine317());
      MECE380CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine292());
      that.removeLine(getLine317());
      MECE380CoopPlan3Biomedicalflag=false
  }
};
$scope.BME321CoopPlan3BiomedicalListener = function () {
 if (!BME321CoopPlan3Biomedicalflag) {
      that.addLine(getLine293());
      that.addLine(getLine304());
      BME321CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine293());
      that.removeLine(getLine304());
      BME321CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE563CoopPlan3BiomedicalListener = function () {
 if (!MECE563CoopPlan3Biomedicalflag) {
      that.addLine(getLine294());
      that.addLine(getLine295());
      that.addLine(getLine296());
      MECE563CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine294());
      that.removeLine(getLine295());
      that.removeLine(getLine296());
      MECE563CoopPlan3Biomedicalflag=false
  }
};
$scope.STAT337CoopPlan3BiomedicalListener = function () {
 if (!STAT337CoopPlan3Biomedicalflag) {
      that.addLine(getLine297());
      STAT337CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine297());
      STAT337CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP904CoopPlan3BiomedicalListener = function () {
 if (!WKEXP904CoopPlan3Biomedicalflag) {
      that.addLine(getLine298());
      that.addLine(getLine299());
      WKEXP904CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine298());
      that.removeLine(getLine299());
      WKEXP904CoopPlan3Biomedicalflag=false
  }
};
$scope.WKEXP905CoopPlan3BiomedicalListener = function () {
 if (!WKEXP905CoopPlan3Biomedicalflag) {
      that.addLine(getLine299());
      WKEXP905CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine299());
      WKEXP905CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE463CoopPlan3BiomedicalListener = function () {
 if (!MECE463CoopPlan3Biomedicalflag) {
      that.addLine(getLine300());
      MECE463CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine300());
      MECE463CoopPlan3Biomedicalflag=false
  }
};
$scope.CHE448CoopPlan3BiomedicalListener = function () {
 if (!CHE448CoopPlan3Biomedicalflag) {
      that.addLine(getLine301());
      that.addLine(getLine302());
      CHE448CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine301());
      that.removeLine(getLine302());
      CHE448CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE485CoopPlan3BiomedicalListener = function () {
 if (!MECE485CoopPlan3Biomedicalflag) {
      that.addLine(getLine303());
      that.addLine(getLine304());
      that.addLine(getLine305());
      that.addLine(getLine306());
      MECE485CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine303());
      that.removeLine(getLine304());
      that.removeLine(getLine305());
      that.removeLine(getLine306());
      MECE485CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE403CoopPlan3BiomedicalListener = function () {
 if (!MECE403CoopPlan3Biomedicalflag) {
      that.addLine(getLine307());
      that.addLine(getLine308());
      that.addLine(getLine309());
      that.addLine(getLine310());
      MECE403CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine307());
      that.removeLine(getLine308());
      that.removeLine(getLine309());
      that.removeLine(getLine310());
      MECE403CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE451CoopPlan3BiomedicalListener = function () {
 if (!MECE451CoopPlan3Biomedicalflag) {
      that.addLine(getLine311());
      that.addLine(getLine312());
      MECE451CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine311());
      that.removeLine(getLine312());
      MECE451CoopPlan3Biomedicalflag=false
  }
};
$scope.MECE460CoopPlan3BiomedicalListener = function () {
 if (!MECE460CoopPlan3Biomedicalflag) {
      that.addLine(getLine313());
      that.addLine(getLine314());
      that.addLine(getLine315());
      that.addLine(getLine316());
      that.addLine(getLine317());
      MECE460CoopPlan3Biomedicalflag=true
  }
 else {
      that.removeLine(getLine313());
      that.removeLine(getLine314());
      that.removeLine(getLine315());
      that.removeLine(getLine316());
      that.removeLine(getLine317());
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
 if (!CHEM103CoopPlan4flag) {
      that.addLine(getLine319());
      CHEM103CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine319());
      CHEM103CoopPlan4flag=false
  }
};
$scope.ENGG130CoopPlan4Listener = function () {
 if (!ENGG130CoopPlan4flag) {
      that.addLine(getLine318());
      that.addLine(getLine320());
      that.addLine(getLine323());
      that.addLine(getLine336());
      ENGG130CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine318());
      that.removeLine(getLine320());
      that.removeLine(getLine323());
      that.removeLine(getLine336());
      ENGG130CoopPlan4flag=false
  }
};
$scope.MATH100CoopPlan4Listener = function () {
 if (!MATH100CoopPlan4flag) {
      that.addLine(getLine318());
      that.addLine(getLine321());
      that.addLine(getLine322());
      that.addLine(getLine327());
      MATH100CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine318());
      that.removeLine(getLine321());
      that.removeLine(getLine322());
      that.removeLine(getLine327());
      MATH100CoopPlan4flag=false
  }
};
$scope.CHEM105CoopPlan4Listener = function () {
 if (!CHEM105CoopPlan4flag) {
      that.addLine(getLine319());
      that.addLine(getLine335());
      CHEM105CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine319());
      that.removeLine(getLine335());
      CHEM105CoopPlan4flag=false
  }
};
$scope.ENGG160CoopPlan4Listener = function () {
 if (!ENGG160CoopPlan4flag) {
      that.addLine(getLine331());
      ENGG160CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine331());
      ENGG160CoopPlan4flag=false
  }
};
$scope.ENPH131CoopPlan4Listener = function () {
 if (!ENPH131CoopPlan4flag) {
      that.addLine(getLine320());
      that.addLine(getLine330());
      that.addLine(getLine337());
      ENPH131CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine320());
      that.removeLine(getLine330());
      that.removeLine(getLine337());
      ENPH131CoopPlan4flag=false
  }
};
$scope.MATH101CoopPlan4Listener = function () {
 if (!MATH101CoopPlan4flag) {
      that.addLine(getLine321());
      that.addLine(getLine324());
      that.addLine(getLine325());
      that.addLine(getLine328());
      that.addLine(getLine329());
      that.addLine(getLine334());
      that.addLine(getLine338());
      MATH101CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine321());
      that.removeLine(getLine324());
      that.removeLine(getLine325());
      that.removeLine(getLine328());
      that.removeLine(getLine329());
      that.removeLine(getLine334());
      that.removeLine(getLine338());
      MATH101CoopPlan4flag=false
  }
};
$scope.MATH102CoopPlan4Listener = function () {
 if (!MATH102CoopPlan4flag) {
      that.addLine(getLine322());
      that.addLine(getLine326());
      that.addLine(getLine363());
      MATH102CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine322());
      that.removeLine(getLine326());
      that.removeLine(getLine363());
      MATH102CoopPlan4flag=false
  }
};
$scope.CIVE270CoopPlan4Listener = function () {
 if (!CIVE270CoopPlan4flag) {
      that.addLine(getLine323());
      that.addLine(getLine324());
      that.addLine(getLine333());
      that.addLine(getLine341());
      that.addLine(getLine353());
      that.addLine(getLine360());
      CIVE270CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine323());
      that.removeLine(getLine324());
      that.removeLine(getLine333());
      that.removeLine(getLine341());
      that.removeLine(getLine353());
      that.removeLine(getLine360());
      CIVE270CoopPlan4flag=false
  }
};
$scope.ENGG299CoopPlan4Listener = function () {
 if (!ENGG299CoopPlan4flag) {
      that.addLine(getLine354());
      ENGG299CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine354());
      ENGG299CoopPlan4flag=false
  }
};
$scope.MATH209CoopPlan4Listener = function () {
 if (!MATH209CoopPlan4flag) {
      that.addLine(getLine325());
      that.addLine(getLine326());
      that.addLine(getLine340());
      that.addLine(getLine347());
      that.addLine(getLine370());
      MATH209CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine325());
      that.removeLine(getLine326());
      that.removeLine(getLine340());
      that.removeLine(getLine347());
      that.removeLine(getLine370());
      MATH209CoopPlan4flag=false
  }
};
$scope.STAT235CoopPlan4Listener = function () {
 if (!STAT235CoopPlan4flag) {
      that.addLine(getLine327());
      that.addLine(getLine328());
      that.addLine(getLine343());
      STAT235CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine327());
      that.removeLine(getLine328());
      that.removeLine(getLine343());
      STAT235CoopPlan4flag=false
  }
};
$scope.MECE230CoopPlan4Listener = function () {
 if (!MECE230CoopPlan4flag) {
      that.addLine(getLine329());
      that.addLine(getLine330());
      that.addLine(getLine345());
      that.addLine(getLine349());
      MECE230CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine329());
      that.removeLine(getLine330());
      that.removeLine(getLine345());
      that.removeLine(getLine349());
      MECE230CoopPlan4flag=false
  }
};
$scope.MECE260CoopPlan4Listener = function () {
 if (!MECE260CoopPlan4flag) {
      that.addLine(getLine331());
      that.addLine(getLine332());
      that.addLine(getLine333());
      that.addLine(getLine357());
      MECE260CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine331());
      that.removeLine(getLine332());
      that.removeLine(getLine333());
      that.removeLine(getLine357());
      MECE260CoopPlan4flag=false
  }
};
$scope.MECE265CoopPlan4Listener = function () {
 if (!MECE265CoopPlan4flag) {
      that.addLine(getLine332());
      that.addLine(getLine358());
      MECE265CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine332());
      that.removeLine(getLine358());
      MECE265CoopPlan4flag=false
  }
};
$scope.ECE209CoopPlan4Listener = function () {
 if (!ECE209CoopPlan4flag) {
      that.addLine(getLine342());
      ECE209CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine342());
      ECE209CoopPlan4flag=false
  }
};
$scope.MATH201CoopPlan4Listener = function () {
 if (!MATH201CoopPlan4flag) {
      that.addLine(getLine339());
      that.addLine(getLine364());
      that.addLine(getLine369());
      MATH201CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine339());
      that.removeLine(getLine364());
      that.removeLine(getLine369());
      MATH201CoopPlan4flag=false
  }
};
$scope.CHE243CoopPlan4Listener = function () {
 if (!CHE243CoopPlan4flag) {
      that.addLine(getLine334());
      that.addLine(getLine348());
      that.addLine(getLine350());
      that.addLine(getLine356());
      CHE243CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine334());
      that.removeLine(getLine348());
      that.removeLine(getLine350());
      that.removeLine(getLine356());
      CHE243CoopPlan4flag=false
  }
};
$scope.MATE202CoopPlan4Listener = function () {
 if (!MATE202CoopPlan4flag) {
      that.addLine(getLine335());
      that.addLine(getLine359());
      MATE202CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine335());
      that.removeLine(getLine359());
      MATE202CoopPlan4flag=false
  }
};
$scope.MECE200CoopPlan4Listener = function () {
 if (!MECE200CoopPlan4flag) {
      that.addLine(getLine377());
      MECE200CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine377());
      MECE200CoopPlan4flag=false
  }
};
$scope.MECE250CoopPlan4Listener = function () {
 if (!MECE250CoopPlan4flag) {
      that.addLine(getLine336());
      that.addLine(getLine337());
      that.addLine(getLine338());
      that.addLine(getLine346());
      that.addLine(getLine362());
      that.addLine(getLine375());
      MECE250CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine336());
      that.removeLine(getLine337());
      that.removeLine(getLine338());
      that.removeLine(getLine346());
      that.removeLine(getLine362());
      that.removeLine(getLine375());
      MECE250CoopPlan4flag=false
  }
};
$scope.MATH300CoopPlan4Listener = function () {
 if (!MATH300CoopPlan4flag) {
      that.addLine(getLine339());
      that.addLine(getLine340());
      that.addLine(getLine351());
      that.addLine(getLine376());
      MATH300CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine339());
      that.removeLine(getLine340());
      that.removeLine(getLine351());
      that.removeLine(getLine376());
      MATH300CoopPlan4flag=false
  }
};
$scope.MECE300CoopPlan4Listener = function () {
 if (!MECE300CoopPlan4flag) {
      that.addLine(getLine341());
      that.addLine(getLine342());
      that.addLine(getLine343());
      that.addLine(getLine344());
      that.addLine(getLine371());
      MECE300CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine341());
      that.removeLine(getLine342());
      that.removeLine(getLine343());
      that.removeLine(getLine344());
      that.removeLine(getLine371());
      MECE300CoopPlan4flag=false
  }
};
$scope.MECE301CoopPlan4Listener = function () {
 if (!MECE301CoopPlan4flag) {
      that.addLine(getLine344());
      that.addLine(getLine372());
      MECE301CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine344());
      that.removeLine(getLine372());
      MECE301CoopPlan4flag=false
  }
};
$scope.MECE331CoopPlan4Listener = function () {
 if (!MECE331CoopPlan4flag) {
      that.addLine(getLine345());
      that.addLine(getLine346());
      that.addLine(getLine347());
      that.addLine(getLine348());
      that.addLine(getLine352());
      MECE331CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine345());
      that.removeLine(getLine346());
      that.removeLine(getLine347());
      that.removeLine(getLine348());
      that.removeLine(getLine352());
      MECE331CoopPlan4flag=false
  }
};
$scope.MECE371CoopPlan4Listener = function () {
 if (!MECE371CoopPlan4flag) {
      that.addLine(getLine349());
      that.addLine(getLine350());
      that.addLine(getLine351());
      that.addLine(getLine352());
      MECE371CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine349());
      that.removeLine(getLine350());
      that.removeLine(getLine351());
      that.removeLine(getLine352());
      MECE371CoopPlan4flag=false
  }
};
$scope.MECE380CoopPlan4Listener = function () {
 if (!MECE380CoopPlan4flag) {
      that.addLine(getLine353());
      that.addLine(getLine381());
      MECE380CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine353());
      that.removeLine(getLine381());
      MECE380CoopPlan4flag=false
  }
};
$scope.WKEXP901CoopPlan4Listener = function () {
 if (!WKEXP901CoopPlan4flag) {
      that.addLine(getLine354());
      that.addLine(getLine355());
      WKEXP901CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine354());
      that.removeLine(getLine355());
      WKEXP901CoopPlan4flag=false
  }
};
$scope.WKEXP902CoopPlan4Listener = function () {
 if (!WKEXP902CoopPlan4flag) {
      that.addLine(getLine355());
      that.addLine(getLine365());
      WKEXP902CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine355());
      that.removeLine(getLine365());
      WKEXP902CoopPlan4flag=false
  }
};
$scope.MECE340CoopPlan4Listener = function () {
 if (!MECE340CoopPlan4flag) {
      that.addLine(getLine356());
      that.addLine(getLine368());
      that.addLine(getLine373());
      that.addLine(getLine378());
      MECE340CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine356());
      that.removeLine(getLine368());
      that.removeLine(getLine373());
      that.removeLine(getLine378());
      MECE340CoopPlan4flag=false
  }
};
$scope.MECE360CoopPlan4Listener = function () {
 if (!MECE360CoopPlan4flag) {
      that.addLine(getLine357());
      that.addLine(getLine358());
      that.addLine(getLine359());
      that.addLine(getLine360());
      that.addLine(getLine361());
      that.addLine(getLine374());
      that.addLine(getLine379());
      MECE360CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine357());
      that.removeLine(getLine358());
      that.removeLine(getLine359());
      that.removeLine(getLine360());
      that.removeLine(getLine361());
      that.removeLine(getLine374());
      that.removeLine(getLine379());
      MECE360CoopPlan4flag=false
  }
};
$scope.MECE362CoopPlan4Listener = function () {
 if (!MECE362CoopPlan4flag) {
      that.addLine(getLine361());
      that.addLine(getLine362());
      that.addLine(getLine380());
      MECE362CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine361());
      that.removeLine(getLine362());
      that.removeLine(getLine380());
      MECE362CoopPlan4flag=false
  }
};
$scope.MECE390CoopPlan4Listener = function () {
 if (!MECE390CoopPlan4flag) {
      that.addLine(getLine363());
      that.addLine(getLine364());
      MECE390CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine363());
      that.removeLine(getLine364());
      MECE390CoopPlan4flag=false
  }
};
$scope.WKEXP903CoopPlan4Listener = function () {
 if (!WKEXP903CoopPlan4flag) {
      that.addLine(getLine365());
      that.addLine(getLine366());
      WKEXP903CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine365());
      that.removeLine(getLine366());
      WKEXP903CoopPlan4flag=false
  }
};
$scope.WKEXP904CoopPlan4Listener = function () {
 if (!WKEXP904CoopPlan4flag) {
      that.addLine(getLine366());
      that.addLine(getLine367());
      WKEXP904CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine366());
      that.removeLine(getLine367());
      WKEXP904CoopPlan4flag=false
  }
};
$scope.WKEXP905CoopPlan4Listener = function () {
 if (!WKEXP905CoopPlan4flag) {
      that.addLine(getLine367());
      WKEXP905CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine367());
      WKEXP905CoopPlan4flag=false
  }
};
$scope.MECE463CoopPlan4Listener = function () {
 if (!MECE463CoopPlan4flag) {
      that.addLine(getLine368());
      MECE463CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine368());
      MECE463CoopPlan4flag=false
  }
};
$scope.CHE448CoopPlan4Listener = function () {
 if (!CHE448CoopPlan4flag) {
      that.addLine(getLine369());
      that.addLine(getLine370());
      CHE448CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine369());
      that.removeLine(getLine370());
      CHE448CoopPlan4flag=false
  }
};
$scope.MECE403CoopPlan4Listener = function () {
 if (!MECE403CoopPlan4flag) {
      that.addLine(getLine371());
      that.addLine(getLine372());
      that.addLine(getLine373());
      that.addLine(getLine374());
      MECE403CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine371());
      that.removeLine(getLine372());
      that.removeLine(getLine373());
      that.removeLine(getLine374());
      MECE403CoopPlan4flag=false
  }
};
$scope.MECE451CoopPlan4Listener = function () {
 if (!MECE451CoopPlan4flag) {
      that.addLine(getLine375());
      that.addLine(getLine376());
      MECE451CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine375());
      that.removeLine(getLine376());
      MECE451CoopPlan4flag=false
  }
};
$scope.MECE460CoopPlan4Listener = function () {
 if (!MECE460CoopPlan4flag) {
      that.addLine(getLine377());
      that.addLine(getLine378());
      that.addLine(getLine379());
      that.addLine(getLine380());
      that.addLine(getLine381());
      MECE460CoopPlan4flag=true
  }
 else {
      that.removeLine(getLine377());
      that.removeLine(getLine378());
      that.removeLine(getLine379());
      that.removeLine(getLine380());
      that.removeLine(getLine381());
      MECE460CoopPlan4flag=false
  }
};
});