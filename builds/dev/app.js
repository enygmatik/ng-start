;(function () {
    'use strict';

    appController.$inject = ["$scope"];
    var myApp = angular.module('myApp', [
        'ui.router'
    ])
        .controller('appController', appController);

        myApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
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
        }]);

    /**
     * Main app controller
     * @param $scope
     */
    function appController($scope) {
        $scope.aloha = "Hello";
        $scope.lungime = $scope.aloha.length;
    } /* appController */
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxDQUFBLFlBQUE7SUFDQTs7O0lBRUEsSUFBQSxRQUFBLFFBQUEsT0FBQSxTQUFBO1FBQ0E7O1NBRUEsV0FBQSxpQkFBQTs7UUFFQSxNQUFBLGdEQUFBLFNBQUEsZ0JBQUEsb0JBQUE7OztVQUdBLG1CQUFBLFVBQUE7OztVQUdBO2FBQ0EsTUFBQSxRQUFBO2NBQ0EsS0FBQTtjQUNBLGFBQUE7O2FBRUEsTUFBQSxTQUFBO2NBQ0EsS0FBQTtjQUNBLGFBQUE7Ozs7Ozs7O0lBUUEsU0FBQSxjQUFBLFFBQUE7UUFDQSxPQUFBLFFBQUE7UUFDQSxPQUFBLFVBQUEsT0FBQSxNQUFBOzs7QUFHQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbXlBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbXG4gICAgICAgICd1aS5yb3V0ZXInXG4gICAgXSlcbiAgICAgICAgLmNvbnRyb2xsZXIoJ2FwcENvbnRyb2xsZXInLCBhcHBDb250cm9sbGVyKTtcblxuICAgICAgICBteUFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gRm9yIGFueSB1bm1hdGNoZWQgdXJsLCByZWRpcmVjdCB0byAvc3RhdGUxXG4gICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIlwiKTtcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIE5vdyBzZXQgdXAgdGhlIHN0YXRlc1xuICAgICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgICAgICAgIHVybDogXCIvXCIsXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9ob21lL2hvbWUuaHRtbFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXRlKCdhYm91dCcsIHtcbiAgICAgICAgICAgICAgdXJsOiBcImFib3V0XCIsXG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9hYm91dC9hYm91dC5odG1sXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBNYWluIGFwcCBjb250cm9sbGVyXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFwcENvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgICAgICRzY29wZS5hbG9oYSA9IFwiSGVsbG9cIjtcbiAgICAgICAgJHNjb3BlLmx1bmdpbWUgPSAkc2NvcGUuYWxvaGEubGVuZ3RoO1xuICAgIH0gLyogYXBwQ29udHJvbGxlciAqL1xufSkoKTtcbiJdfQ==
