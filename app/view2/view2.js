'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http','$location',function($scope, $http, $location) {

        $scope.showRecommend=false;
        $scope.showRec = function(keyword) {
            $scope.showRecommend=true;

        };

        $http.get('json/videoDetail.json').success(function(result) {
            $scope.video = result;
        });
        $http.get('json/tags.json').success(function(tags) {
            $scope.tags = tags;
        });

        $http.get('json/recommendation.json').success(function(recommends) {
            $scope.recommends = recommends;
        });
}])

;

