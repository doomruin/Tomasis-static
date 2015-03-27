'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope','$http','$location',function($scope, $http, $location) {

        $scope.showLine=false;

        $scope.search = function() {
            $scope.showLine=true;

        };
        $http.get('json/dic.json').success(function(content) {
            $scope.content = content;
        });
}])

;

