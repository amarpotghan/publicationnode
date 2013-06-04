'use strict';

// jasmine specs for controllers go here
describe('PubApp Controllers', function() {

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    describe('LoginController', function(){
        var $scope;
        var $controller;
        var $httpBackend;
        beforeEach(module('myApp'));
        beforeEach(inject(function ($injector) {
            $scope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            $httpBackend = $injector.get('$httpBackend');

        }));


        it('message should not be empty', function() {
            var params = {$scope: $scope};
            $controller('LoginController', params);
            expect($scope.message).toBeUndefined();
            $httpBackend.expectGET('login').
                respond([{"0":"O"},{"0":"K"}]);
            $scope.enterApp();

            $httpBackend.flush();
            expect($scope.message).toEqualData([{"0":"O"},{"0":"K"}]);

        });
    });

  describe('TreeController', function(){
        var $scope;
        var $controller;
        var $httpBackend;
        var $httpTab;

        var response = [{"path":"./app","name":"app","type":"folder","children":[{"path":"./app/css","name":"css","type":"folder","children":[{"path":"./app/css/bootstrap.css","name":"bootstrap.css","type":"file","children":[]},{"path":"./app/css/main.css","name":"main.css","type":"file","children":[]}]},{"path":"./app/images","name":"images","type":"folder","children":[{"path":"./app/images/icons.gif","name":"icons.gif","type":"file","children":[]},{"path":"./app/images/vline.png","name":"vline.png","type":"file","children":[]}]},{"path":"./app/index.html","name":"index.html","type":"file","children":[]},{"path":"./app/js","name":"js","type":"folder","children":[{"path":"./app/js/app.js","name":"app.js","type":"file","children":[]},{"path":"./app/js/controllers","name":"controllers","type":"folder","children":[{"path":"./app/js/controllers/LoginController.js","name":"LoginController.js","type":"file","children":[]},{"path":"./app/js/controllers/TreeController.js","name":"TreeController.js","type":"file","children":[]}]},{"path":"./app/js/directives","name":"directives","type":"folder","children":[{"path":"./app/js/directives/CustomeTreeDirective.js","name":"CustomeTreeDirective.js","type":"file","children":[]}]},{"path":"./app/js/services","name":"services","type":"folder","children":[{"path":"./app/js/services/FileService.js","name":"FileService.js","type":"file","children":[]},{"path":"./app/js/services/LoginService.js","name":"LoginService.js","type":"file","children":[]},{"path":"./app/js/services/TabService.js","name":"TabService.js","type":"file","children":[]},{"path":"./app/js/services/TreeService.js","name":"TreeService.js","type":"file","children":[]}]},{"path":"./app/js/utils","name":"utils","type":"folder","children":[{"path":"./app/js/utils/uiUtils","name":"uiUtils","type":"folder","children":[{"path":"./app/js/utils/uiUtils/TabUtils.js","name":"TabUtils.js","type":"file","children":[]}]}]}]},{"path":"./app/lib","name":"lib","type":"folder","children":[{"path":"./app/lib/angular","name":"angular","type":"folder","children":[{"path":"./app/lib/angular/angular-resource.js","name":"angular-resource.js","type":"file","children":[]},{"path":"./app/lib/angular/angular.js","name":"angular.js","type":"file","children":[]},{"path":"./app/lib/angular/angular1.0.5.js","name":"angular1.0.5.js","type":"file","children":[]},{"path":"./app/lib/angular/ui-bootstrap-min.js","name":"ui-bootstrap-min.js","type":"file","children":[]},{"path":"./app/lib/angular/version.txt","name":"version.txt","type":"file","children":[]}]}]},{"path":"./app/test","name":"test","type":"folder","children":[{"path":"./app/test/config","name":"config","type":"folder","children":[{"path":"./app/test/config/karma-e2e.conf.js","name":"karma-e2e.conf.js","type":"file","children":[]},{"path":"./app/test/config/karma.conf.js","name":"karma.conf.js","type":"file","children":[]}]},{"path":"./app/test/e2e","name":"e2e","type":"folder","children":[{"path":"./app/test/e2e/runner.html","name":"runner.html","type":"file","children":[]},{"path":"./app/test/e2e/scenarios.js","name":"scenarios.js","type":"file","children":[]}]},{"path":"./app/test/lib","name":"lib","type":"folder","children":[{"path":"./app/test/lib/angular","name":"angular","type":"folder","children":[{"path":"./app/test/lib/angular/angular-mocks.js","name":"angular-mocks.js","type":"file","children":[]},{"path":"./app/test/lib/angular/angular-scenario.js","name":"angular-scenario.js","type":"file","children":[]}]}]},{"path":"./app/test/scripts","name":"scripts","type":"folder","children":[{"path":"./app/test/scripts/e2e-test.sh","name":"e2e-test.sh","type":"file","children":[]},{"path":"./app/test/scripts/test.sh","name":"test.sh","type":"file","children":[]}]},{"path":"./app/test/unit","name":"unit","type":"folder","children":[{"path":"./app/test/unit/controllersSpec.js","name":"controllersSpec.js","type":"file","children":[]},{"path":"./app/test/unit/directivesSpec.js","name":"directivesSpec.js","type":"file","children":[]},{"path":"./app/test/unit/filtersSpec.js","name":"filtersSpec.js","type":"file","children":[]},{"path":"./app/test/unit/servicesSpec.js","name":"servicesSpec.js","type":"file","children":[]}]}]},{"path":"./app/views","name":"views","type":"folder","children":[{"path":"./app/views/Home.html","name":"Home.html","type":"file","children":[]},{"path":"./app/views/Login.html","name":"Login.html","type":"file","children":[]}]}]}];
        beforeEach(module('myApp'));
        beforeEach(inject(function ($injector) {
            $scope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
            $httpBackend = $injector.get('$httpBackend');
            $httpTab = $injector.get('$httpBackend');
            $httpBackend.expectGET('directory').
                respond([{"path":"./app","name":"app","type":"folder","children":[{"path":"./app/css","name":"css","type":"folder","children":[{"path":"./app/css/bootstrap.css","name":"bootstrap.css","type":"file","children":[]},{"path":"./app/css/main.css","name":"main.css","type":"file","children":[]}]},{"path":"./app/images","name":"images","type":"folder","children":[{"path":"./app/images/icons.gif","name":"icons.gif","type":"file","children":[]},{"path":"./app/images/vline.png","name":"vline.png","type":"file","children":[]}]},{"path":"./app/index.html","name":"index.html","type":"file","children":[]},{"path":"./app/js","name":"js","type":"folder","children":[{"path":"./app/js/app.js","name":"app.js","type":"file","children":[]},{"path":"./app/js/controllers","name":"controllers","type":"folder","children":[{"path":"./app/js/controllers/LoginController.js","name":"LoginController.js","type":"file","children":[]},{"path":"./app/js/controllers/TreeController.js","name":"TreeController.js","type":"file","children":[]}]},{"path":"./app/js/directives","name":"directives","type":"folder","children":[{"path":"./app/js/directives/CustomeTreeDirective.js","name":"CustomeTreeDirective.js","type":"file","children":[]}]},{"path":"./app/js/services","name":"services","type":"folder","children":[{"path":"./app/js/services/FileService.js","name":"FileService.js","type":"file","children":[]},{"path":"./app/js/services/LoginService.js","name":"LoginService.js","type":"file","children":[]},{"path":"./app/js/services/TabService.js","name":"TabService.js","type":"file","children":[]},{"path":"./app/js/services/TreeService.js","name":"TreeService.js","type":"file","children":[]}]},{"path":"./app/js/utils","name":"utils","type":"folder","children":[{"path":"./app/js/utils/uiUtils","name":"uiUtils","type":"folder","children":[{"path":"./app/js/utils/uiUtils/TabUtils.js","name":"TabUtils.js","type":"file","children":[]}]}]}]},{"path":"./app/lib","name":"lib","type":"folder","children":[{"path":"./app/lib/angular","name":"angular","type":"folder","children":[{"path":"./app/lib/angular/angular-resource.js","name":"angular-resource.js","type":"file","children":[]},{"path":"./app/lib/angular/angular.js","name":"angular.js","type":"file","children":[]},{"path":"./app/lib/angular/angular1.0.5.js","name":"angular1.0.5.js","type":"file","children":[]},{"path":"./app/lib/angular/ui-bootstrap-min.js","name":"ui-bootstrap-min.js","type":"file","children":[]},{"path":"./app/lib/angular/version.txt","name":"version.txt","type":"file","children":[]}]}]},{"path":"./app/test","name":"test","type":"folder","children":[{"path":"./app/test/config","name":"config","type":"folder","children":[{"path":"./app/test/config/karma-e2e.conf.js","name":"karma-e2e.conf.js","type":"file","children":[]},{"path":"./app/test/config/karma.conf.js","name":"karma.conf.js","type":"file","children":[]}]},{"path":"./app/test/e2e","name":"e2e","type":"folder","children":[{"path":"./app/test/e2e/runner.html","name":"runner.html","type":"file","children":[]},{"path":"./app/test/e2e/scenarios.js","name":"scenarios.js","type":"file","children":[]}]},{"path":"./app/test/lib","name":"lib","type":"folder","children":[{"path":"./app/test/lib/angular","name":"angular","type":"folder","children":[{"path":"./app/test/lib/angular/angular-mocks.js","name":"angular-mocks.js","type":"file","children":[]},{"path":"./app/test/lib/angular/angular-scenario.js","name":"angular-scenario.js","type":"file","children":[]}]}]},{"path":"./app/test/scripts","name":"scripts","type":"folder","children":[{"path":"./app/test/scripts/e2e-test.sh","name":"e2e-test.sh","type":"file","children":[]},{"path":"./app/test/scripts/test.sh","name":"test.sh","type":"file","children":[]}]},{"path":"./app/test/unit","name":"unit","type":"folder","children":[{"path":"./app/test/unit/controllersSpec.js","name":"controllersSpec.js","type":"file","children":[]},{"path":"./app/test/unit/directivesSpec.js","name":"directivesSpec.js","type":"file","children":[]},{"path":"./app/test/unit/filtersSpec.js","name":"filtersSpec.js","type":"file","children":[]},{"path":"./app/test/unit/servicesSpec.js","name":"servicesSpec.js","type":"file","children":[]}]}]},{"path":"./app/views","name":"views","type":"folder","children":[{"path":"./app/views/Home.html","name":"Home.html","type":"file","children":[]},{"path":"./app/views/Login.html","name":"Login.html","type":"file","children":[]}]}]}]);
            $controller('TreeController',{$scope: $scope});

        }));

        it('checking the tree structure', function() {
            //var params = {$scope: $scope};
            //$controller('TreeController', params);
            $httpBackend.flush();
            expect($scope.tree).toEqualData(response);
        });


        it('retreive the file content of the LoginController file',function(){
            var fileContent = [{"text":"myApp.controller(\"LoginController\", ['$scope','LoginService','$location', function($scope,LoginService,$location) {\n\n    $scope.enterApp = function(){\n        $scope.message = LoginService.query(function(msg){\n            $scope.message = msg;\n            if($scope.message != '' || $scope.message != null)\n            {\n                $location.url('/home');\n            }\n            else\n            {\n                alert(\"Your password do not match\");\n            }\n        });\n    }\n\n}]);\n"}];
            var data= {"path":"./app/js/controllers/LoginController.js","name":"LoginController.js","type":"file","children":[],"className":"eu_child eu_deselected","$$hashKey":"014"};
            $httpBackend.expectGET('file.%2Fapp%2Fjs%2Fcontrollers%2FLoginController.js').
                respond([{"text":"myApp.controller(\"LoginController\", ['$scope','LoginService','$location', function($scope,LoginService,$location) {\n\n    $scope.enterApp = function(){\n        $scope.message = LoginService.query(function(msg){\n            $scope.message = msg;\n            if($scope.message != '' || $scope.message != null)\n            {\n                $location.url('/home');\n            }\n            else\n            {\n                alert(\"Your password do not match\");\n            }\n        });\n    }\n\n}]);\n"}]);
            $scope.addTab(data);
            $httpBackend.flush();
            expect($scope.fileContent).toEqualData(fileContent);
        })
    });

});
