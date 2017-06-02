/**
 * Created by marcoslopez7 on 6/1/17.
 */
(function () {
    'use strict';
    angular.module('starterApp')
        .controller('contactController', function ($scope, $window) {
            $scope.goContacto = function () {
                $window.location.href = '/contacto/';
            };
        });
})();