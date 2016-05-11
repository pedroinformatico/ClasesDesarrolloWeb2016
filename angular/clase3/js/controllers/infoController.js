app.controller('infoController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.curPage = "info";
        $rootScope.curPage = "info";
    }]);