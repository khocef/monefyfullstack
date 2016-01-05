'use strict';

angular.module('monefyApp')
  .service('utils', function (moment) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    this.getMonthDateRange = function(year, month) {

      // month in moment is 0 based, so 9 is actually october
      // array is 'year', 'month', 'day', etc
      // 
      // for unknown reason until now i dont know why moment conciders 
      // january as month 1 even when passed 0
      var startDate = moment([year, month + 1], "YYYY MM");

      // Clone the value before .endOf()
      var endDate = moment(startDate).endOf('month');
      
      // make sure to call toDate() for plain JavaScript date type
      return { start: startDate.toDate(), end: endDate.toDate() };
    }


  });
