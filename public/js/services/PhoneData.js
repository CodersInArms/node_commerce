app.factory('phoneData', function($http, $log){
    return {
        phonesData : function(successData){
            $http({method: 'GET', url: 'lib/phones/phones.json'})
                .success(function(data, status, header, config){
                    $log.info(data, status, header, config);
                    successData(data);
                })
                .error(function(data, status, header, config){
                    $log.warn(data, status, header(), config);
                });
        }
    };
});