var app = angular.module("main", []);
app.controller("main", function(scope) { 
$scope.selectedPlan = "PlanA";
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
this.PlanAList = [];
this.PlanBList = [];
this.PlanCList = [];
this.PlanDList = [];
this.disable = function(plan) {
switch (plan) { 
  case "PlanA": 
    for (let i = 0; i < this.PlanAList.length; i++) {
        this.PlanAList[i][0].hide();
    }
    break; 
  case "PlanB": 
    for (let i = 0; i < this.PlanBList.length; i++) {
        this.PlanBList[i][0].hide();
    }
    break; 
  case "PlanC": 
    for (let i = 0; i < this.PlanCList.length; i++) {
        this.PlanCList[i][0].hide();
    }
    break; 
  case "PlanD": 
    for (let i = 0; i < this.PlanDList.length; i++) {
        this.PlanDList[i][0].hide();
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
this.enable = function(plan) {
switch (plan) { 
  case "PlanA": 
    for (let i = 0; i < this.PlanAList.length; i++) {
        this.PlanAList[i][0].show();
    }
    break; 
  case "PlanB": 
    for (let i = 0; i < this.PlanBList.length; i++) {
        this.PlanBList[i][0].show();
    }
    break; 
  case "PlanC": 
    for (let i = 0; i < this.PlanCList.length; i++) {
        this.PlanCList[i][0].show();
    }
    break; 
  case "PlanD": 
    for (let i = 0; i < this.PlanDList.length; i++) {
        this.PlanDList[i][0].show();
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
});