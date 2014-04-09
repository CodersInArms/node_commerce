var app = angular.module('phoneApp', ['ngRoute']);

app.config(phoneRouter);

function phoneRouter($routeProvider){
    $routeProvider
        .when('/', {templateUrl:'partials/home.html'})
        .when('/phones/:phoneid', {templateUrl:'partials/phone.html',
            controller:'PhoneDetailCtrl'})
        .when('/compare', {template: "<h3 style='text-align: center'>The phone compare module is yet to be made.</h3>"})
        .otherwise({redirectTo: '/'});
}

app.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams){
            $scope.currentPhone = $scope.phones[$routeParams.phoneid];
}]);

