'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/createVinDetails', {
      templateUrl: 'partials/createVinDetails',
      controller: 'CreateVinCtrl'
    }).
    when('/createCampDetails', {
      templateUrl: 'partials/createCampDetails',
      controller: 'CreateCampCtrl'
    }).
    when('/associateVinCamp', {
      templateUrl: 'partials/associateVinCamp',
      controller: 'AssociateVinCampCtrl'
    }).
    when('/getCampDetails', {
      templateUrl: 'partials/getCampDetails',
      controller: 'CampDetCtrl'
    }).
    when('/getVinDetails', {
      templateUrl: 'partials/getVinDetails',
      controller: 'VinDetCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
});
