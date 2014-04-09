app.controller('PhoneCtrl', function($scope, phoneData){
    $scope.phones = phoneData.phones;

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

    $scope.phoneSearch = null;

});
