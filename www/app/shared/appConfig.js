(function () {

    'use strict';

    var config_module = angular.module('starter.config', []);

    var config_data = {
        'GENERAL_CONFIG': {

           // 'APP_KEY': '23B5D06B-DC43-42A4-84E2-61A531736155', // staging
            //'APP_KEY': 'ZkXexCe3xuBcmGUrtxAQW26k4fToOhMZ', // production

            'APP_NAME': 'Medtronic',
            'APP_VERSION': '2.0.0',
            'API_VERSION': '2',
            'GA_enabled' : false,
            'API_USING': 'Staging',
            //'API_URL1': 'https://52.64.209.238/api/V1/',
            'API_URL': 'https://52.64.209.238/api/V2/',// staging url
           

            'DEFAULT_UUID': '3DDC0D0E-1B4A-421C-95CE-5A3A0F276A38', // My iphone 4 UUID for testing. 
            'GEO_CODE_URL': 'https://maps.googleapis.com/maps/api/geocode/json?address=',
           
         }   
            
    angular.forEach(config_data, function (key, value) {
        config_module.constant(value, key);
    });
})();

