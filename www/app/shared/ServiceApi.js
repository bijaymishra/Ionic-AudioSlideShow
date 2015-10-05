(function () {
    'use strict';

    angular.module('starter').factory('serviceApi', ['$http', '$rootScope', '$q', '$ionicLoading', '$cordovaDevice', 'GENERAL_CONFIG', 'commonHelper', 'applicationLocalStorageService', serviceApi]);

    function serviceApi($http, $rootScope, $q, $ionicLoading, $cordovaDevice, GENERAL_CONFIG, commonHelper, applicationLocalStorageService) {

        // To get Device information object for API call. 
        function getDeviceInformation() {
            var deviceInfomation = commonHelper.getDeviceInformation();

            // Create API object
            var data = {
                Model: deviceInfomation.model,
                Version: deviceInfomation.version,
                Uuid: deviceInfomation.uuid,
                Platform: deviceInfomation.platform,
            };

            return data
        }

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


        function doPostHttpWithTag(functionName, url, widgetName) {
            var deferred = $q.defer();

            busyCursorStart();

            var dashboardWidgetViewModel = {
                Name: widgetName,
                ETag: ''
            };


            // Create data for API call 
            var data = dashboardWidgetViewModel;


            $http.post(url, data).success(function (response) {

                //console.log(" Post call Success " + widgetName);

                busyCursorEnd();


                console.log("Request " + data.Name);
                console.log("Response " + response.Name);


                deferred.resolve(response);

            }).error(function (error, status) {

                busyCursorEnd();

                if (status == "304") {
                    console.log("Tag not modified for " + widgetName);

                    // resolved cached object. 
                    deferred.resolve(cachedObject);
                }
                else {
                    console.log(" Error In :" + functionName);
                    console.log(" Error :" + error);

                    // reject . 
                    deferred.reject(error, status);
                };
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

        function doPutHttpWithData(data, url, functionName) {
            var deferred = $q.defer();

            busyCursorStart();

            $http(
			{
			    method: 'PUT',
			    url: url,
			    data: data
			})
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
            getPromotions: getPromotions,
            getStores: getStores,
            getProductList: getProductList,
            getItemList: getItemList,
            getBanners: getBanners,
            getStoreDetail: getStoreDetail,
            getOffer: getOffer,
            getUpdatedLocation: getUpdatedLocation,
            loginCTRL: loginCTRL,
            signUpCTRL: signUpCTRL,
            getOfferTerms: getOfferTerms,
            getTopCategory: getTopCategory,
            refineItem: refineItem,
            getFavoriteStore: getFavoriteStore,
            getFavoriteItems: getFavoriteItems,
            getDeviceInformation: getDeviceInformation,
            getConfig : getConfig,
            zipcode: '',
            city: '',
            state: '',
            stateindex: 0
        };

        function getPromotions() {
            console.log("calling Promotions");

            var url = GENERAL_CONFIG.API_URL + 'Offers?key=' + GENERAL_CONFIG.APP_KEY;

            // Create data for API call 
            var data = {};

            return doGetHttpWithoutData("getPromotions", url);
        }

        function getOffer(offerId) {
            console.log("calling Offers");

            var url = GENERAL_CONFIG.API_URL + 'Offers/' + offerId + '?key=' + GENERAL_CONFIG.APP_KEY;

            // Create data for API call 
            var data = {};

            return doGetHttpWithoutData("getOffer", url);
        }

        function getBanners() {
            console.log("calling Banner");
          var banners = applicationLocalStorageService.getCache('BannerList');
            if( banners == undefined ||  banners == null)
            {

              var url = GENERAL_CONFIG.API_URL + 'offers/rotator?key=' + GENERAL_CONFIG.APP_KEY;

            // Create data for API call 
            var data = {};

            var getBannerData = doGetHttpWithoutData("getBanners", url);

            getBannerData.then(function (response) {
                banners = response;
                applicationLocalStorageService.storeCache('BannerList', response);

                });
            
            
            }return  banners;
           

        }

        function getStoreDetail(storeId) {
            console.log("calling Store Detail");

            var url = GENERAL_CONFIG.API_URL + 'stores/' + storeId + '?key=' + GENERAL_CONFIG.APP_KEY;

            // Create data for API call 
            var data = {};

            return doGetHttpWithoutData("getStoreDetail", url);
        }

        function getStores(pageNumber) {
            console.log("calling Stores");
            var location = getLatLng();
            var lat = $rootScope.Latitude;//? $rootScope.Latitude : 32.961876;
            var long = $rootScope.longitude;// ? $rootScope.longitude : -96.99606;
            //var url = GENERAL_CONFIG.API_URL + 'stores?p=' + pageNumber + '&s=10&lat='+ location.lat +'&lng='+ location.lng +'&key=' + GENERAL_CONFIG.APP_KEY;
            var url = GENERAL_CONFIG.API_URL + 'stores?p=' + pageNumber + '&s=10&lat=' + lat + '&lng=' + long + '&key=' + GENERAL_CONFIG.APP_KEY;
            // Create data for API call 
            var data = {};

            return doGetHttpWithoutData("getStores", url);
        }

        function getProductList() {
           
             var products = applicationLocalStorageService.getCache('ProductList');
            if( products == undefined ||  products == null)
            {

              var url = GENERAL_CONFIG.API_URL + 'categories?key=' + GENERAL_CONFIG.APP_KEY;

            // Create data for API call 
            var data = {};

            var getProducts = doGetHttpWithoutData("getProductList", url);

            getProducts.then(function (response) {
                products = response;
                applicationLocalStorageService.storeCache('ProductList', response);

                });
            
            
            }return  products;
           
             

            
        }

        function getItemList(categoryId, pageNumber, searchterm) {
            console.log("calling getItemList");
            var location = getLatLng();
            var lat = $rootScope.Latitude;// ? $rootScope.Latitude : 32.961876;
            var long = $rootScope.longitude;// ? $rootScope.longitude : -96.99606;
            var devicedata = getDeviceInformation();
            var url = GENERAL_CONFIG.API_URL + 'Items?c=' + categoryId + '&p=' + pageNumber + '&s=10&lat=' + lat + '&lng=' + long + '&u=' + devicedata.Uuid + '&r=500&t=' + searchterm + '&key=' + GENERAL_CONFIG.APP_KEY;
            // Create data for API call 
            var data = {};

            return doGetHttpWithoutData("getItemList", url);
        }

        function getLatLng() {

            if (applicationLocalStorageService.checkKey('Latitude') && applicationLocalStorageService.checkKey('Longitude')) {

                var data = {};
                data.lat = applicationLocalStorageService.getCache('Latitude');
                data.lng = applicationLocalStorageService.getCache('Longitude');
                return data;
            }
        }

        function getUpdatedLocation(search) {

            var url = GENERAL_CONFIG.GEO_CODE_URL + search;
            return doGetHttpWithoutData("getUpdatedLocation", url);

        }

        function loginCTRL(user) {
            console.log("calling loginCTRL");

            var url = GENERAL_CONFIG.API_URL + "users/" + user + "?key=" + GENERAL_CONFIG.APP_KEY;

            // Create data for API call 
            var data = {};

            return doGetHttpWithoutData("loginCTRL", url);
        }

        function signUpCTRL(data) {
            var url = GENERAL_CONFIG.API_URL + "Users?key=" + GENERAL_CONFIG.APP_KEY;

            // Create data for API call 
            //var data = {};
            return doPutHttpWithData(data, url, "signUpCTRL");
        }

        function refineItem(data) {

            var url = GENERAL_CONFIG.API_URL + 'Items?key=' + GENERAL_CONFIG.APP_KEY;
            return doPutHttpWithData(data, url, "refineItem");

        }
        function getFavoriteStore(data) {

            var url = GENERAL_CONFIG.API_URL + 'stores/favorite?key=' + GENERAL_CONFIG.APP_KEY;
            return doPostHttp("getFavoriteStore", url, data);

        }
        function getFavoriteItems(data) {
            var url = GENERAL_CONFIG.API_URL + "Items/favorite?key=" + GENERAL_CONFIG.APP_KEY;

            return doPutHttpWithData(data, url, "getFavoriteItems");
        }
        function getOfferTerms(offerId) {

            console.log("calling loginCTRL");

            var url = GENERAL_CONFIG.API_URL + 'Offers/' + offerId + '/terms?key=' + GENERAL_CONFIG.APP_KEY;

            // Create data for API call 
            var data = {};

            return doGetHttpWithoutData("getOfferTerms", url);
        }

        function getTopCategory() {

            console.log("calling topcategory");
            var topcategory = applicationLocalStorageService.getCache('TopCategorylist');
            if( topcategory == undefined ||  topcategory == null)
            {

              var url = GENERAL_CONFIG.API_URL + 'categories/top?key=' + GENERAL_CONFIG.APP_KEY;


            // Create data for API call 
            var data = {};

            var getTopCategoryData = doGetHttpWithoutData("getTopCategory", url);

            getTopCategoryData.then(function (response) {
                topcategory = response;
                applicationLocalStorageService.storeCache('TopCategorylist', response);

                });
            
            
            }return  topcategory;


        }

        function getConfig()
        {
            console.log("calling getConfig");
           
            var devicedata = getDeviceInformation();
            var url = GENERAL_CONFIG.API_URL + '/configs?deviceID='+devicedata.Uuid +'&key='+ GENERAL_CONFIG.APP_KEY;

            return doGetHttpWithoutData("getConfig", url);
        }
    };

})();



