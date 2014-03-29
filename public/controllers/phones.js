function PhoneCtrl($scope){
    $scope.phones = {
        "NXS5": {
            "id": "NXS5",
            "img": "../images/NXS5.jpg",
            "name": "Nexus 5",
            "price": 29000,
            "camera": "8 megapixel",
            "secondary": true
        },

        "MTG": {
            "id": "MTG",
            "img": "../images/MTG.jpg",
            "name": "Moto G",
            "price": 14000,
            "camera": "5 megapixel",
            "secondary": true
        },

        "XPZ": {
            "id": "XPZ",
            "img": "../images/XPZ.jpg",
            "name": "Sony Xperia Z",
            "price": 27000,
            "camera": "8 megapixel",
            "secondary": true
        },

        "CPL2": {
            "id": "CPL2",
            "img": "../images/CPL2.jpg",
            "name": "Canvas Plus 2",
            "price": "9200",
            "camera": "8 megapixel",
            "secondary": true
        },

        "MTX": {
            "id": "MTX",
            "img": "../images/MTX.jpg",
            "name": "Moto X",
            "price": "24000",
            "camera": "10 megapixel",
            "secondary": true
        },

        "NL520": {
            "id": "NL520",
            "img": "../images/NL520.jpg",
            "name": "Nokia Lumia 520",
            "price": "7375",
            "camera": "5 megapixel",
            "secondary": false
        },

        "XPM": {
            "id": "XPM",
            "img": "../images/XPM.jpg",
            "name": "Sony Xperia M",
            "price": "12300",
            "camera": "5 megapixel",
            "secondary": true
        },

        "HTC700": {
            "id": "HTC700",
            "img": "../images/HTC700.jpg",
            "name": "HTC Desire 700",
            "price": "23000",
            "camera": "12 megapixel",
            "secondary": true
        },

        "LGGP": {
            "id": "LGGP",
            "img": "../images/LGGP.jpg",
            "name": "LG G Pro",
            "price": "29000",
            "camera": "13 megapixel",
            "secondary": true
        },

        "APL5S": {
            "id": "APL5S",
            "img": "../images/APL5S.jpg",
            "name": "Apple iPhone 5S",
            "price": "52000",
            "camera": "8 megapixel",
            "secondary": true
        }
    };

    $scope.currentPhone = null;
    $scope.setPhone = function (id){
        $scope.currentPhone = $scope.phones[id];
    };

    $scope.thumb = 'partials/thumb.html';
}