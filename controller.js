var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "TraditionalProgram";
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
this.TraditionalProgramList = [];
this.disable = function(plan) {
switch (plan) { 
  case "TraditionalProgram": 
    for (let i = 0; i < this.TraditionalProgramList.length; i++) {
        this.TraditionalProgramList[i][0].hide();
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
this.enable = function(plan) {
switch (plan) { 
  case "TraditionalProgram": 
    for (let i = 0; i < this.TraditionalProgramList.length; i++) {
        this.TraditionalProgramList[i][0].show();
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
});