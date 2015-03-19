'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http','$location',function($scope, $http, $location) {
        $scope.showIndexs=true;

        $scope.search = function(keyword) {
            $scope.showIndexs=false;
            $http.get('json/search.json').success(function(results) {
                $scope.results = results;
            });
        };

        $scope.see = function(v) {
            $location.path('/view2').search({videoId: v.id})

        };

        $http.get('json/indexRecommendation.json').success(function(recommends) {
            $scope.recommends = recommends;
        });

        $http.get('json/recommendation.json').success(function(recommends) {
            $scope.recommends1 = recommends;
        });

//        $(function() {
//            $('#dg-container').gallery();
//        });

        $(function() {
            $('#dg-container').gallery({
                autoplay	:	true
            });
        });

}]);