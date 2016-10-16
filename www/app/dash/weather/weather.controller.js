/**
 * Created by 310031267 on 2016/10/16.
 */


'use strict';
(function() {
  angular.module('app')
    .controller('WeatherController', WeatherController);

  WeatherController.$inject = ['$scope', '$http', '$ionicLoading'];
  function WeatherController($scope, $http, $ionicLoading) {
    $scope.weather = {};
    $scope.getDirection = getDirection;

    activate($ionicLoading);

    function activate($ionicLoading) {
      $ionicLoading.show();
      $http.get('https://ionic-in-action-api.herokuapp.com/weather')
        .success( function(weather) {
          $scope.weather = weather;
          $ionicLoading.hide();
        })
        .error( function(err) {
          $ionicLoading.show({
            template: 'Could not load weather. Please try again later.',
            duration: 2000
          });
        });
    }

    function getDirection(degree) {
      var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      if (degree > 338) degree = 360-degree;
      var index = Math.floor( (degree+22) / 45 );
      return directions[index];
    }
  }
})();
