/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery.konami', {
    setup: function() {
      this.output = $('#qunit-fixture #output');
    }
  });

  // Helper method to simulate keyboard events
  // @param {Integer[]} code - optional - Ordered array of keycodes to trigger.  Defaults to original Konami code. ↑ ↑ ↓ ↓ ← → ← → B A
  var trigger_keys = function(code){
    code = code || [38,38,40,40,37,39,37,39,66,65];
    $.each(code, function(i, key){
      var event = $.Event('keyup');
      event.keyCode = key;
      $(document).trigger(event);
    });
  };

  test('konami code', 1, function() {
    var self = this;

    $.konami(function(){
      self.output.html('konami');
    });

    trigger_keys();
    strictEqual(this.output.html(), 'konami', 'output should be konami');
  });

  test('custom code', 1, function() {
    var self = this,
        code = [38,38]; // ↑ ↑

    $.konami(function(){
      self.output.html('custom');
    }, code);

    trigger_keys(code);
    strictEqual(this.output.html(), 'custom', 'output should be custom');
  });

  test('chainable codes', 1, function() {
    var self = this,
        code1 = [38,38], // ↑ ↑
        code2 = [40,40]; // ↓ ↓

    $.konami(function(){
      self.output.append(':code1');
    }, code1)
    .konami(function(){
      self.output.append(':code2');
    }, code2)
    .konami(function(){
      self.output.append(':konami');
    });

    trigger_keys();
    strictEqual(this.output.html(), ':code1:code2:konami', 'output should be contain all three values');
  });

}(jQuery));
