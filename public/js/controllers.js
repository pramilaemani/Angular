'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngRoute'])
.controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {    
    $http({
      method: 'GET',
      url: '/api/allVinDetails'
    }).
    success(function (data, status, headers, config) {
      $scope.allVinDetails = data.allVinDetails;      
    }).
    error(function (data, status, headers, config) {
      $scope.allVinDetails = 'Error!';
    });

    $http({
      method: 'GET',
      url: '/api/allCampDetails'
    }).
    success(function (data, status, headers, config) {
      $scope.allCampDetails = data.allCampDetails;      
    }).
    error(function (data, status, headers, config) {
      $scope.allCampDetails = 'Error!';
    });
  }]).
  controller('CreateVinCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {    
    
    $scope.createVinDetails = function(){ 
        $http({
          method: 'POST',
          url: '/api/createVinDetails',
          data: $scope.vin
          }).         
         success(function(data){
          $location.path('createVinDetails');
          if(data.errors){
            $scope.errorName="Value is required";
          } else {
            $scope.message = "Form is Complete";
          }
          
         });         
    };    
  }]).
  controller('CreateCampCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {    
    
    $scope.createCampDetails = function(){ 
         
          
    };    
  }]).
  controller('AssociateVinCampCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {    
    
    $scope.associateVinCamp = function(){ 
         
           
    };    
  }]).
  controller('CampDetCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {    
    
    $scope.getCampDetails = function(){ 
         
      $http.get('/api/getSelCampDetails/'+$scope.form.vinid).
      success(function(data){
        $location.path('/getCampDetails');
        $scope.selCampDetails = data.selCampDetails;
      });     
    };    
  }]).
  controller('VinDetCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {
    
    $scope.getVinDetails = function(){
    
      $http.get('/api/getSelVinDetails/'+$scope.form.campid).
      success(function(data){
        $location.path('/getVinDetails');
        $scope.selVinDetails = data.selVinDetails;
      });
    }; 

  }]);
