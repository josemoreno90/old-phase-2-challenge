const assert = require('chai').assert;
const day = require('../part-1/functions').weekday;

describe("Weekday Function", function() {
  it('app should return Wed', function() {
    assert.equal(day(2017, 5, 21), 'Wed');
  });
});
