/**
 * Created by marcoslopez7 on 2/1/17.
 */
(function () {
    'use strict';
    angular.module('starterApp')
        .directive('menu', function () {
            return {
                restrict: 'E',
                templateUrl: '/static/js/Angular/templates/menu.html'
            };
        });
})();