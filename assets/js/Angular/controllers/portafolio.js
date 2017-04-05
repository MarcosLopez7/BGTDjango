/**
 * Created by marcoslopez7 on 2/1/17.
 */
(function () {
    'use strict';
    angular.module('starterApp')
        .controller('portaController', function ($scope, portaFactory) {
            $scope.areas = portaFactory.data();
            $scope.watching = false;
            $scope.area = null;

            $scope.toArea = function (area) {
                $scope.area = area;
                $scope.watching = true;
            };

            $scope.backToPorta = function () {
                $scope.watching = false;
            }
        });
})();