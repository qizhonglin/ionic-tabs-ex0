/**
 * Created by 310031267 on 2016/10/16.
 */
'use strict';
(function() {
  angular.module('app')
    .controller('RatesDetailController', RatesDetailController);

  RatesDetailController.$inject = ['$scope', '$stateParams', '$state', 'Currencies'];
  function RatesDetailController($scope, $stateParams, $state, Currencies) {
    angular.forEach(Currencies, function(currency, index) {
      if ( currency.code === $stateParams.currency) {
        $scope.currency = currency;
      }
    });

    if ( angular.isUndefined($scope.currency.ticker) ) {
      $state.go('tabs.rates');
    }
  }
})();
