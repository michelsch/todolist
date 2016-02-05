"use strict";

var myApp = angular.module('toDoApp', []);

myApp.controller ('myController',['$scope', function($scope) {
  var currentTime = new Date().getHours();
  //var currentTime = new Date(2016,1,1,7).getHours();
  //var currentTime = new Date(2016,1,1,14).getHours();
  //var currentTime = new Date(2016,1,1,23).getHours();
  if (currentTime>6 && currentTime<12) {
    document.body.background = './img/morning.jpg';
    $scope.greeting = 'morning';
  }

  else if (currentTime>=12 && currentTime<18) {
    document.body.background = './img/afternoon.jpg';
    $scope.greeting = 'afternoon';
  }
  else {
    document.body.background = './img/evening.jpg';
    $scope.greeting = 'evening';
  }

  $scope.toDos = [];

  $scope.toDoText = '';

  $scope.getTotalToDos = function () {
    return $scope.toDos.length;
  };

  $scope.addToDo = function () {
    $scope.toDos.push({text:$scope.toDoText, done:false});
    $scope.toDoText = '';
  };

}]);
