

myApp.controller("TreeController", ['$scope','TreeService','FileService', function($scope,TreeService,FileService) {

    //DATAPROVIDER FOR ADDING THE TABS
    $scope.panes = [];

    //DATAPROVIDER FOR ADDING THE TREE
    $scope.tree = TreeService.query(function(tree){
        $scope.tree = tree;
    });

    //FUNCTION FOR ADDING TAB DYNAMICALLY ON CLICK OF THE ANY FILE IN TREE
    $scope.addTab = function(data){
    
   		
            if(data.type == 'file'){
                fileContent = FileService.getFileData(data.path).query({path:data.path},function(fileContent){
                    fileContent = fileContent;
                    var tabService= new TabService($scope.panes.length,$scope.panes,data,fileContent);
                    tabService.addTab();

                });
            }
            else{
                //Do nothing
            }
    }

}]);


