myApp.controller("TreeController", ['$scope','TreeService', function($scope,TreeService) {

    //DATAPROVIDER FOR ADDING THE TABS
    $scope.panes = [];

    //DATAPROVIDER FOR ADDING THE TREE
    $scope.tree = TreeService.query(function(tree){
        $scope.tree = tree;
    });

    //FUNCTION FOR ADDING TAB DYNAMICALLY ON CLICK OF THE ANY FILE IN TREE
    $scope.addTab = function(data){
        var tabService= new TabService($scope.panes.length,$scope.panes,data);
        tabService.addTab();
    }

}]);


