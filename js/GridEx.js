var app = angular.module('gridApp', []);

app.controller('gridController', function ($scope) {
  
  $scope.columnName = "col name";
  $scope.columns = [new column('Name'),
                    new column('Age'),
                    new column('BirthDate'),
                    new column('Salary')];
  $scope.getColumnName = function(colIndex){
    var found = $scope.columns[colIndex]['name'];
    return found;
  }

  $scope.addColumn = function(){
    $scope.columns.push(new column(this.columnName));
  }

  $scope.rows = [{Name:'Mahmoud', Age:'', BirthDate:'', Salary:1500},
                 {Name:'Ammar', Age:'', BirthDate:'', Salary:1000},
                 {Name:'Emran', Age:'', BirthDate:'', Salary:3000}]

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

  $scope.getOrderBy = function() {
    if($scope.order[0])
      {
        alert($scope.getColumnName($scope.order[0]));
        return $scope.getColumnName($scope.order[0]);
      }
  };

  //order by columns indexes
  $scope.order = [];
  $scope.orderBy = function(colIndex){
    $scope.order = [];
    alert(colIndex)
    $scope.order.push(colIndex);
  }

  //pagination

});

function column(caption) {
  this.caption = caption;
  this.name = caption;
  this.dataType = "";
  this.displayOrder = -1;
}