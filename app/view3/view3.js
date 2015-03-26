'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope','$http','$location',function($scope, $http, $location) {

        $scope.width = 600;
        $scope.height =350;
        $scope.yAxis = '销售成绩';
        $scope.xAxis = '2014年销售情况变化';
        //数据设置
        $scope.data = [
            {
                label: 'January',
                value: 36
            },
            {
                label: 'February',
                value: 54
            },
            {
                label: 'March',
                value: 62
            },
            {
                label: 'April',
                value: 82
            },
            {
                label: 'May',
                value: 96
            },
            {
                label: 'June',
                value: 104
            },
            {
                label: 'July',
                value: 122
            },
            {
                label: 'August',
                value: 112
            },
            {
                label: 'September',
                value: 176
            },
            {
                label: 'October',
                value: 150
            },
            {
                label: 'November',
                value: 84
            },
            {
                label: 'December',
                value: 123
            }
        ];



        $scope.max = 0;

        var arrLength = $scope.data.length;
        for (var i = 0; i < arrLength; i++) {
            // Find Maximum X Axis Value
            if ($scope.data[i].value > $scope.max)
                $scope.max = $scope.data[i].value;
        }

}])

;

