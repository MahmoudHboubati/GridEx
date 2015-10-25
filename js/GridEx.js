var app = angular.module('gridApp', []);

app.controller('gridController', function ($scope) {
  
  $scope.columnName = "col name";
  $scope.columns = [new column('Name'),
                    new column('Age'),
                    new column('Birth-date')];
  $scope.getColumnName = function(rowIndex){
    var found = $scope.columns[rowIndex]['name'];
  }

  $scope.addColumn = function(){
    $scope.columns.push(new column(this.columnName));
  }

  $scope.rows = [['Mahmoud','',''],['Ammar','',''],['Emran','','']]

  //get/set selected rows
  $scope.selected = [];
  $scope.select = function(rowIndex){
    //Todo: check if already selected
    $scope.selected.push(rowIndex);
  }
  $scope.unSelect = function(rowIndex){
    if (rowIndex > -1) {
      $scope.selected.splice(rowIndex, 1);
    }
  }

  //order by columns indexes
  $scope.order = [];

  //pagination

});

function column(caption) {
  this.caption = caption;
  this.name = "";
  this.dataType = "";
}