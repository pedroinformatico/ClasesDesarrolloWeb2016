/**
 * controller de vehicles
 */
app.controller('testController', ['$scope', function ($scope) {
        var test = this;
        test.users = [
            {
                user: "usuario1",
                name: "nombre1",
                lastName: "apellido1"
            },
            {
                user: "usuario2",
                name: "nombre2",
                lastName: "apellido2"
            }
        ];

        $scope.newUser = {
            user: "",
            name: "",
            lastName: ""
        };
        $scope.users = [
            {
                user: "usuario1",
                name: "nombre1",
                lastName: "apellido1"
            },
            {
                user: "usuario2",
                name: "nombre2",
                lastName: "apellido2"
            }
        ];
        $scope.showDetails = function (user) {
            console.log(user);
        };
        $(window).resize();
    }]);

app.controller('nuevoControlador', ['$scope', function ($scope) {

        var nuevo = this;
        nuevo.users = [
            {
                user: "usuario3",
                name: "nombre3",
                lastName: "apellido3"
            }
        ];
//        $scope.newUser = {
//            user: "",
//            name: "",
//            lastName: ""
//        };
//        $scope.users = [
//            {
//                user: "usuario3",
//                name: "nombre3",
//                lastName: "apellido3"
//            }
//        ];
//        $scope.showDetails = function (user) {
//            console.log(user);
//        };
        $(window).resize();
    }]);
