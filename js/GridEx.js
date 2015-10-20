function column() {
	this.caption = "";
	this.name = "";
	this.dataType = "";
}

function cell() {
this.text = "";
}

function table(){
	this.columns = [];
}

var app = angular.module('gridApp', []);

app.controller('gridController', function ($scope) {
  $scope.name = "col name";
  $scope.columns = [{caption:'Name'},{caption:'Age'},{caption:'Birth-date'}];
  $scope.addColumn = function()
  {
    $scope.columns.push({caption:this.name});
  }

  $scope.rows = [['Mahmoud','',''],['Ammar','',''],['Emran','','']]
});