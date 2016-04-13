/**
 * controller de vehicles
 */
app.controller('testController', ['$scope', function ($scope) {
        $scope.newUser = {
            user: "",
            name: "",
            lastName: ""
        };

        $scope.searchText = "";
        $scope.users = [];

        $scope.tempUsers = [];

        $scope.addNewUser = function (user) {
            $scope.users.push(angular.extend({}, user));
        };

        $scope.searchByName = function (user) {
            if ($scope.searchText.trim() === "") {
                return true;
            }
            if (user.name.indexOf($scope.searchText) !== -1) {
                return true;
            }
            return false;
        };
        $scope.showDetails = function (user) {
            console.log(user);
        };
        $(window).resize();
    }]);