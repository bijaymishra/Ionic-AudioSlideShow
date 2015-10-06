(function () {

    'use strict';

    var config_module = angular.module('starter.config', []);

    var config_data = {
        'GENERAL_CONFIG': {

            'APP_NAME': 'Medtronic',
            'APP_VERSION': '1.0.0',
            'API_VERSION': '1',
            'GA_enabled' : false,
            'API_USING': 'Staging',
            'API_URL': 'http://52.64.209.238/api/DiabaticPump/',// staging url
           

            
           }
         }   
            
    angular.forEach(config_data, function (key, value) {
        config_module.constant(value, key);
    });
})();

