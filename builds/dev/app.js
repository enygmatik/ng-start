;(function () {
    'use strict';

    appController.$inject = ["$scope"];
    angular.module('myApp', [])
        .controller('appController', appController);

    /**
     * Main app controller
     * @param $scope
     */
    function appController($scope) {
        $scope.aloha = "Privet";
    } /* appController */
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxDQUFBLFlBQUE7SUFDQTs7O0lBRUEsUUFBQSxPQUFBLFNBQUE7U0FDQSxXQUFBLGlCQUFBOzs7Ozs7SUFNQSxTQUFBLGNBQUEsUUFBQTtRQUNBLE9BQUEsUUFBQTs7O0FBR0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ215QXBwJywgW10pXG4gICAgICAgIC5jb250cm9sbGVyKCdhcHBDb250cm9sbGVyJywgYXBwQ29udHJvbGxlcik7XG5cbiAgICAvKipcbiAgICAgKiBNYWluIGFwcCBjb250cm9sbGVyXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFwcENvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgICAgICRzY29wZS5hbG9oYSA9IFwiUHJpdmV0XCI7XG4gICAgfSAvKiBhcHBDb250cm9sbGVyICovXG59KSgpO1xuIl19
