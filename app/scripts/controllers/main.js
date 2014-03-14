'use strict';

angular.module('citationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.citations = [];
   
    $scope.formatCitation = function() {
      var citation = $scope.lastname + ', ' + $scope.firstname + ' ' + $scope.middle + '. ' + $scope.bookTitle + '. ' + $scope.publisher +
          ', ' + $scope.cityOfPublication + ': ' + $scope.yearOfPublication + '. ' + $scope.pageStart + '.' + $scope.pageEnd + '.';
      $scope.citations.push(citation);
    };
  });
