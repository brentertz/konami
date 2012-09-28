/*! Konami - v0.1.0 - 2012-09-27
* Copyright (c) 2012 Brent Ertz; Licensed MIT, GPL */

(function($){

  /*
   * Detect keystrokes matching Konami (or custom) code and execute callback method
   *
   * @param {Function} callback - required - Function to be called if entered code is matched
   * @param {Integer[]} code - optional - Ordered array of keycodes to be matched.  Defaults to original Konami code. ↑ ↑ ↓ ↓ ← → ← → B A
   * @returns {Function} this - Allow chaining of $.konami() calls
   */
  $.konami = function(callback, code){
    code = code || [38,38,40,40,37,39,37,39,66,65];
    var entered = [];
    $(document).keyup(function(e){
      var key = e.keyCode || e.which,
          next_key = parseInt(code.slice(entered.length), 10);
      if(key === next_key){
        entered.push(key);
        if(entered.length === code.length){
          callback();
          entered = [];
        }
      } else {
        entered = [];
      }
    });
    return this;
  };

}(jQuery));
