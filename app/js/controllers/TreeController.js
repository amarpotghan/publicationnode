

myApp.controller("TreeController", ['$scope','TreeService','FileService', function($scope,TreeService,FileService) {

    //DATAPROVIDER FOR ADDING THE TABS
    $scope.panes = [];

    //DATAPROVIDER FOR ADDING THE TREE
    $scope.tree = TreeService.query(function(tree){
        $scope.tree = tree;
        $scope.childVisible= false;
    });

    //FUNCTION FOR ADDING TAB DYNAMICALLY ON CLICK OF THE ANY FILE IN TREE
    $scope.addTab = function(data){
            if(data.type == 'file'){
                data.fileContent = FileService.getFileData(data.path).query({path:data.path},function(fileContent){
                    data.fileContent = fileContent;
                    var tabService= new TabService($scope.panes.length,$scope.panes,data);
                    tabService.addTab();

                });
            }
            else{
                $scope.childVisible = true;
            }
    }

}]);


