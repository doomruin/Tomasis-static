'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope','$http','$location',function($scope, $http, $location) {



        $scope.data1 = {
            series: ['准确率', 'Income', 'Expense', 'Laptops', 'Keyboards'],
            data: [{
                x: "-15",
                y: [5.12]
               // tooltip: "this is tooltip"
            }, {
                x: "-14",
                y: [5.14]
            }, {
                x: "-13",
                y: [5.33]
            }, {
                x: "-12",
                y: [6.98]
            }, {
                x: "-11",
                y: [12.44]
            }, {
                x: "-10",
                y: [10.21]
            }, {
                x: "-9",
                y: [5.98]
            }, {
                x: "-8",
                y: [5.74]
            }, {
                x: "-7",
                y: [9.67]
            }, {
                x: "-6",
                y: [4.78]
            }, {
                x: "-5",
                y: [4.98]
            }, {
                x: "-4",
                y: [6.98]
            }, {
                x: "-3",
                y: [6.32]
            }, {
                x: "-2",
                y: [5.98]
            }, {
                x: "-1",
                y: [8.28]
            }]
        };

        $scope.data2 = {
            series: ['召回率'],
            data: [{
                x: "-15",
                y: [8.12]
                // tooltip: "this is tooltip"
            }, {
                x: "-14",
                y: [9.14]
            }, {
                x: "-13",
                y: [4.33]
            }, {
                x: "-12",
                y: [10.98]
            }, {
                x: "-11",
                y: [11.44]
            }, {
                x: "-10",
                y: [9.21]
            }, {
                x: "-9",
                y: [8.98]
            }, {
                x: "-8",
                y: [12.74]
            }, {
                x: "-7",
                y: [19.67]
            }, {
                x: "-6",
                y: [4.78]
            }, {
                x: "-5",
                y: [8.98]
            }, {
                x: "-4",
                y: [16.98]
            }, {
                x: "-3",
                y: [7.32]
            }, {
                x: "-2",
                y: [6.98]
            }, {
                x: "-1",
                y: [8.28]
            }]
        }

        $scope.data3 = {
            series: ['优酷', '土豆', '爱奇艺', '搜狐'],
            data: [
                {

                x: "-7",
                y: [19.24,14.22,9.87,12.11]
            }, {
                x: "-6",
                y: [14.78,10.99,15.03,10.20]
            }, {
                x: "-5",
                y: [11.98,15.22,16.78,9.2]
            }, {
                x: "-4",
                y: [16.98,19.0,12.34,14.21]
            }, {
                x: "-3",
                y: [16.32,7.99,11,9.7]
            }, {
                x: "-2",
                y: [15.98,10.90,19.9,18.56]
            }, {
                x: "-1",
                y: [18.28,10.3,20.1,15.6]
            }]
        };
        $scope.data4 = {
            series: ['视频数(k)','用户数','CBR用时'],
            data: [
                {

                    x: "-7",
                    y: [54.3,78,9.87]
                }, {
                    x: "-6",
                    y: [56.1,99,15.03]
                }, {
                    x: "-5",
                    y: [51.5,15.22,16.78]
                }, {
                    x: "-4",
                    y: [53.3,100,12.34]
                }, {
                    x: "-3",
                    y: [55.8,102,11]
                }, {
                    x: "-2",
                    y: [57.8,133,19.9]
                }, {
                    x: "-1",
                    y: [59.9,140,20.1]
                }]
        };
        $scope.chartType = 'line';
        $scope.chartType1 = 'bar';

        $scope.config1 = {
            labels: false,
            title: "Precision",
            legend: {
                display: true,
                position: 'left'
            },
            innerRadius: 0
        };

        $scope.config2 = {
            labels: false,
            title: "Recall",
            legend: {
                display: true,
                htmlEnabled: true,
                position: 'left'
            }
           //lineLegend: 'traditional'
        };

        $scope.config3 = {
            labels: false,
            title: "数据获取模块",
            legend: {
                display: true,
                position: 'right'
            },
            innerRadius: 1
        };
        $scope.config4 = {
            labels: false,
            title: "离线计算模块",
            legend: {
                display: true,
                position: 'right'
            },
            innerRadius: 1
        }

}])

;

