;(function () {
    'use strict';

    var myApp = angular.module('myApp', [
        'ui.router'
    ])
        .controller('appController', appController);

        myApp.config(function($stateProvider, $urlRouterProvider) {
          //
          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise("");
          //
          // Now set up the states
          $stateProvider
            .state('home', {
              url: "/",
              templateUrl: "app/home/home.html"
            })
            .state('about', {
              url: "about",
              templateUrl: "app/about/about.html",
            });
        });

    /**
     * Main app controller
     * @param $scope
     */
    function appController($scope) {
        $scope.aloha = "Hello";
        $scope.lungime = $scope.aloha.length;
    } /* appController */
})();
