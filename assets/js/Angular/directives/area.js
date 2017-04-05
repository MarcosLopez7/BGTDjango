/**
 * Created by marcoslopez7 on 2/1/17.
 */
(function () {
    'use strict';
    angular.module('starterApp')
        .directive('skill', function () {
            return {
                restrict: 'E',
                templateUrl: '/static/js/Angular/templates/skill.html'
            };
        });
})();