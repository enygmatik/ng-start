;(function () {
    'use strict';

    angular.module('myApp', [
        'ui.router'
    ])
        .controller('appController', appController);

    /**
     * Main app controller
     * @param $scope
     */
    function appController($scope) {
        $scope.aloha = "Privet";
    } /* appController */
})();
