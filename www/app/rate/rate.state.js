/**
 * Created by 310031267 on 2016/10/16.
 */
'use strict';
(function() {
  angular.module('app')
    .config(function($stateProvider) {
      $stateProvider
        .state('tab.rate', {
          url: '/rate',
          views: {
            'tab-rate': {
              templateUrl: 'app/rate/rate.html'
            }
          }
        })
        .state('tab.rates', {
          url: '/rates',
          views: {
            'tab-rate': {
              templateUrl: 'app/rate/rates/rates.html',
              controller: 'RatesController'
            }
          }
        })
        .state('tab.rates-detail', {
          url: '/rates/:currency',
          views: {
            'tab-rate': {
              templateUrl: 'app/rate/rates/detail/detail.html',
              controller: 'RatesDetailController'
            }
          }
        })
        .state('tab.history', {
          url:'/history',
          views: {
            'tab-rate': {
              templateUrl: 'app/rate/history/history.html',
              controller: 'HistoryController'
            }
          }
        })
        .state('tab.currencies', {
          url:'/currencies',
          views: {
            'tab-rate': {
              templateUrl: 'app/rate/currencies/currencies.html',
              controller: 'CurrenciesController'
            }
          }
        })
    });
})();
