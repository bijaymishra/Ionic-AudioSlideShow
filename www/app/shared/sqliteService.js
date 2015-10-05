(function () {
    'use strict';


    angular.module('starter').factory("sqliteService", ['$q', '$window', 'GENERAL_CONFIG', '$cordovaSQLite', function ($q, $window, GENERAL_CONFIG, $cordovaSQLite, $ionicPlatform) {
        var self = this;
        self.init = function () {

            if (window.cordova) {
                var isAndroid = ionic.Platform.isAndroid();
                if (isAndroid) {
                    self.db = window.sqlitePlugin.openDatabase({ name: "Casham.db", androidDatabaseImplementation: 2, androidLockWorkaround: 1 });
                }
                else {
                    self.db = window.sqlitePlugin.openDatabase("Casham.db");
                }
            } else {
                self.db = window.openDatabase(GENERAL_CONFIG.name, '1.0', 'Casham', 1024 * 1024 * 100); // browser
            }

            angular.forEach(GENERAL_CONFIG.tables, function (table) {
                var columns = [];

                angular.forEach(table.columns, function (column) {
                    columns.push(column.name + ' ' + column.type);
                });

                var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
                self.query(query);
            });
        };

        self.query = function (query, bindings) {
            //check if table exists.
            if (!self.db)
                this.init();

            var defer = $q.defer();
            self.db.transaction(function (transaction) {
                transaction.executeSql(query, bindings, function (transaction, result) {
                    defer.resolve(result);
                }, function (transaction, error) {
                    defer.reject(error);

                });
            });
            return defer.promise
        };
        return self;
    }]);
})();