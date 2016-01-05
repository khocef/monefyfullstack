'use strict';

angular.module('monefyApp')
  .directive('calendar', function (moment, costService) {
    return {
      templateUrl: 'app/calendar/calendar.html',
      restrict: 'EA',
      scope: {
      	currentMonth: "="
      },
      controller: ['$scope', '$log', function($scope, $log) {

      	$scope.months = [];
      	// scope.currentMonth = null;
      	$scope.nextMonth = null;
      	$scope.lastMonth = null;

      	//$scope.currentMonth = costService.selectedMonth;

		$scope.init = function() {
			var monthsNames = moment.months();
			
			for (var i = 0; i < monthsNames.length; i++) {
				$scope.months.push({'month': i, name: monthsNames[i]})
			};

			$scope.currentMonth = {
				'month': _.findWhere($scope.months, {'month': moment().month()}),
				'moment' : moment()
			};

      		$scope.nextMonth = {
      			'month': _.findWhere($scope.months, {'month': moment($scope.currentMonth.moment).add(1, 'months').month()}),
      			'moment' : moment($scope.currentMonth.moment).add(1, 'months')
      		};

      		$scope.lastMonth = {
      			'month': _.findWhere($scope.months, {'month': moment($scope.currentMonth.moment).subtract(1, 'months').month()}),
      			'moment' : moment($scope.currentMonth.moment).subtract(1, 'months')
      		};

      		// costService.setSelectedMonth(scope.currentMonth);
		}

		$scope.init();

		$scope.setToLastMonth = function(month) {
			$scope.nextMonth = $scope.currentMonth;

			$scope.currentMonth = month;

			$scope.lastMonth = {
      			'month': _.findWhere($scope.months, {'month': moment($scope.currentMonth.moment).subtract(1, 'months').month()}),
      			'moment' : moment($scope.currentMonth.moment).subtract(1, 'months')
      		};

      		// costService.setSelectedMonth($scope.currentMonth);
		}

		$scope.setToNextMonth = function(month) {
			$scope.lastMonth = $scope.currentMonth;

			$scope.currentMonth = month;
			
			$scope.nextMonth = {
      			'month': _.findWhere($scope.months, {'month': moment($scope.currentMonth.moment).add(1, 'months').month()}),
      			'moment' : moment($scope.currentMonth.moment).add(1, 'months')
      		};

      		// costService.setSelectedMonth(scope.currentMonth);
		}

      }]
    };
  });