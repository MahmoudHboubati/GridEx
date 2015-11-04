var app = angular.module('gridApp', []);

app.controller('gridController', function ($scope) {
  
  $scope.columnName = "col name";
  var allColumns = [new column('Name', false),
                       new column('Age'),
                       new column('BirthDate'),
                       new column('Salary')];

  $scope.columns = function(){
    var visibleCols = [];
    for (var i = 0; i <= allColumns.length - 1; i++) {
      if(allColumns[i].visible === true)
        visibleCols.push(allColumns[i]);
    };
    return visibleCols;
  }
  $scope.getColumnName = function(colIndex){
    var visibleCols = $scope.columns();
    var found = visibleCols[colIndex]['name'];
    return found;
  }

  $scope.addColumn = function() {
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
    if($scope.order[0]) {
        return $scope.getColumnName($scope.order[0]);
      }
  };

  //order by columns indexes
  $scope.order = [];
  $scope.orderBy = function(colIndex){
    $scope.order = [];
    $scope.order.push(colIndex);
  }

  //pagination

});

function column(caption,visible) {
  this.caption = caption;
  this.name = caption;
  this.dataType = "";
  this.displayOrder = -1;
  this.visible = typeof visible !== 'undefined' ? visible : true;
}