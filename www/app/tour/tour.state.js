/**
 * Created by 310031267 on 2016/10/16.
 */
'use strict';

(function() {
  angular.module('app')
    .config(function($stateProvider) {
      $stateProvider
        .state('tour', {
          url: '/tour',
          templateUrl: 'app/tour/tour.html'
        });
    });
})();
