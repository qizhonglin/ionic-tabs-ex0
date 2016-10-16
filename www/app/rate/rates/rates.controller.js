/**
 * Created by 310031267 on 2016/10/16.
 */
'use strict';
(function() {
  angular.module('app')
    .controller("RatesController", RatesController);

  RatesController.$inject = ['$scope', '$http', '$ionicPopover', 'Currencies'];
  function RatesController($scope, $http, $ionicPopover, Currencies) {
    $scope.currencies = Currencies;
    $scope.popover = {};

    $scope.load = load;
    $scope.openHelp = openHelp;

    activate();

    function activate() {
      $scope.load();

      $ionicPopover.fromTemplateUrl('app/rate/rates/help-popover.html', { scope: $scope})
        .then( function(popover) {
          $scope.popover = popover;
        });

      $scope.$on('destroy', function() {
        $scope.popover.remove();
      });
    }

    function load() {
      $http.get('https://api.bitcoinaverage.com/ticker/all')
        .success( function(tickers) {
          angular.forEach($scope.currencies, function(currency, index) {
            if ( tickers[currency.code] ) {
              currency.ticker = tickers[currency.code];
              currency.ticker.timestamp = new Date(currency.ticker.timestamp);
            }
          });
        })
        .finally( function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
    }

    function openHelp($event) {
      $scope.popover.show($event);
    }
  }
})();
