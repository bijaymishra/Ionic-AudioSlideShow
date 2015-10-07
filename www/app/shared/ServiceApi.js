(function () {
    'use strict';

    angular.module('starter').factory('serviceApi', ['$http', '$rootScope', '$q', '$ionicLoading','GENERAL_CONFIG',serviceApi]);

    function serviceApi($http, $rootScope, $q, $ionicLoading, GENERAL_CONFIG) {

       
       
        // Common method to peroform post http call.
        function doPostHttp(functionName, url, data) {
            var deferred = $q.defer();

            busyCursorStart();

            $http.post(url, data)
                .success(function (response) {
                    console.log(functionName + " Success");

                    busyCursorEnd();

                    deferred.resolve(response);
                }).error(function (error, status) {
                    console.log(functionName + " Error :" + error);

                    busyCursorEnd();

                    deferred.reject(error, status);
                });

            return deferred.promise;
        };


      
       // Common method to peroform get http call.
        function doGetHttp(functionName, url, data) {
            var deferred = $q.defer();

            busyCursorStart();

            $http.get(url, { params: data })
                .success(function (response) {
                    console.log(functionName + "Success");
                    console.log(response);

                    busyCursorEnd();

                    deferred.resolve(response);
                }).error(function (error) {
                    console.log(functionName + " Error :" + error);

                    busyCursorEnd();

                    deferred.reject(error);
                });

            return deferred.promise;
        };

        function doGetHttpWithoutData(functionName, url) {
            var deferred = $q.defer();

            busyCursorStart();

            $http.get(url)
                .success(function (response, status) {
                    console.log(functionName + "Success");
                    console.log("Status: " + status);
                    busyCursorEnd();
                    if (status == '204') {
                        deferred.resolve(status);
                    }
                    else {
                        deferred.resolve(response);
                    }

                }).error(function (error) {
                    console.log(functionName + " Error :" + error);

                    busyCursorEnd();

                    deferred.reject(error);
                });

            return deferred.promise;
        };

        
        function busyCursorStart() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };

        function busyCursorEnd() {

            $ionicLoading.hide();
        };

        // Public methood avalible to use. 
        return {
            loginCTRL: loginCTRL,
            signUpCTRL: signUpCTRL,
         };

  
        function loginCTRL(user) {
            console.log("calling loginCTRL");

            var url = GENERAL_CONFIG.API_URL + "CheckUserDetails?username=" + user.Name + "&password=" + user.password;

            //var url = "http://52.64.209.238/api/DiabaticPump/CheckUserDetails?username=yariva&password=fdgghfh";

            // Create data for API call 
            var data = {};

            return doGetHttpWithoutData("loginCTRL", url);
        }

        function signUpCTRL(data) {
           var url = GENERAL_CONFIG.API_URL + "SendNewUser?username="+data.Name+'&emailid='+data.Email+'&postcode='+data.ZipCode+'&password='+data.Password;
            console.log(data);
           /* var url ="http://52.64.209.238/api/DiabaticPump/SendNewUser?username=Shrutiv&emailid=Shrutiv%40abc.com&postcode=123456&password=Shrutiv%407612";*/

            // Create data for API call 
            //var data = {};
            return doGetHttp(data, url, "signUpCTRL");
        }

     


       
    };

})();



