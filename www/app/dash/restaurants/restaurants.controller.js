/**
 * Created by 310031267 on 2016/10/16.
 */
'use strict';
(function() {
  angular.module('app')
    .controller('RestaurantsController', RestaurantsController);

  RestaurantsController.$inject = ['$scope', '$http'];
  function RestaurantsController($scope, $http) {
    $scope.page = 0;
    $scope.total = 1;
    $scope.restaurants = [];

    $scope.getRestaurants = getRestaurants;

    activate();

    function activate() {
      $scope.getRestaurants();
    }

    function getRestaurants() {
      $scope.page ++;
      $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?age=' + $scope.page)
        .success( function(response) {
          $scope.restaurants = response.restaurants;
          $scope.total = response.totalPages;
          $scope.$broadcast('scroll.infiniteScrollComplete');
        })
        .error( function(err) {
          $scope.$broadcast('scroll.infiniteScrollComplete');
          console.log(err);
        });
    }
  }
})();
