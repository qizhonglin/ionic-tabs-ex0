/**
 * Created by 310031267 on 2016/10/16.
 */
'use strict';
(function() {
  angular.module('app')
    .controller('CurrenciesController', CurrenciesController);

  CurrenciesController.$inject = ['$scope', 'Currencies'];
  function CurrenciesController($scope, Currencies) {
    $scope.currencies = Currencies;
    $scope.state = { reordering: false };
    $scope.move = move;

    activate();

    function activate() {
      $scope.$on('$scopeChangeStart', function() {
        $scope.state.reordering = false;
      });
    }

    function move(currency, fromIndex, toIndex) {
      $scope.currencies.splice(fromIndex, 1);
      $scope.currencies.splice(toIndex, 0, currency);
    }
  }
})();
