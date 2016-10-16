/**
 * Created by 310031267 on 2016/10/16.
 */

'use strict';
(function() {
  angular.module('app')
    .controller('ReservationController', ReservationController);

  ReservationController.$inject = ['$scope'];
  function ReservationController($scope) {
    $scope.reservation = {
      checkin: new Date(),
      checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      room: 156,
      rate: 121,
      wifi: 'resortwifi'
    };
  }
})();
