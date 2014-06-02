app.controller('PhoneCtrl', function($scope, phoneData){

    phoneData.phonesData(function(phones){
        $scope.phones = phones
    });

    $scope.currentPhone = null;
    $scope.setPhone = function (id){
        $scope.currentPhone = $scope.phones[id];
    };

    $scope.thumb = 'partials/thumb.html';
    $scope.searchDropDown = 'partials/searchDropDown.html';

    $scope.numberOfPhones = 4;

    $scope.showMore = function(){
        $scope.numberOfPhones += 4;
    };

    $scope.clearSearch = function(){
        $scope.phoneSearch = null;
    };

    $scope.more = function(){
        return ($scope.numberOfPhones == 12);
    };

    $scope.phoneSearch = null;

});
