/**
 * controller de vehicles
 */
app.controller('myController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.$parent.curPage = "home";
        $scope.curPage = $rootScope.curPage = "";
    }]);