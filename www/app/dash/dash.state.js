/**
 * Created by 310031267 on 2016/10/16.
 */

'use strict';
(function() {
  angular.module('app')
    .config(function($stateProvider) {
      $stateProvider
        .state('tab.dash', {
          url: '/dash',
          views: {
            'tab-dash': {
              templateUrl: 'app/dash/dash.html'
            }
          }
        })
        .state('tab.reservation', {
          url:'/reservation',
          views: {
            'tab-dash': {
              templateUrl: 'app/dash/reservation/reservation.html',
              controller: 'ReservationController'
            }
          }
        })
        .state('tab.whether', {
          url:'/weather',
          views: {
            'tab-dash': {
              templateUrl: 'app/dash/weather/weather.html',
              controller: 'WeatherController'
            }
          }
        })
        .state('tab.restaurants', {
          url:'/restaurants',
          views: {
            'tab-dash': {
              templateUrl: 'app/dash/restaurants/restaurants.html',
              controller: 'RestaurantsController'
            }
          }
        })
    });
})();
