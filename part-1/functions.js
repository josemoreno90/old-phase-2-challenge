// Export function.js to tests.js
// Write a function weekday(date) to find the weekday for
// a given Date object, returing
// either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.
  module.exports = {
    weekday: function(date) {
      date = new Date(date).getDay()
      return isNaN(date) ? null : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date];
    },
    snippet: function(string, maxlength) {
      if(string.length > maxlength) {
        return string.slice(0, (maxlength)) + '...';
      } else {
        return string;
      }
    },
    numProps: function(obj) {
      return Object.keys(obj).length;
    },
    filterBetween: function(array, min, max) {
      var newArray = [];
      array.forEach(function(x) {
        if(x >= min & x <= max ) {
          newArray.push(x);
        }
      })
      return newArray;  
    }
  }
