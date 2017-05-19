/**
 * Created by marcoslopez7 on 2/1/17.
 */
(function () {
    'use strict';
    angular.module('starterApp', [])
        .config(function ($interpolateProvider, $httpProvider) {
            $interpolateProvider.startSymbol('{$');
            $interpolateProvider.endSymbol('$}');

            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        });
}());
