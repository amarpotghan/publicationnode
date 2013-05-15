myApp.controller("LoginController", ['$scope','LoginService','$location', function($scope,LoginService,$location) {

    $scope.enterApp = function(){
        $scope.message = LoginService.query(function(msg){
            $scope.message = msg;
            if($scope.message != '' || $scope.message != null)
            {
                $location.url('/home');
            }
            else
            {
                alert("Your password do not match");
            }
        });
    }

}]);
