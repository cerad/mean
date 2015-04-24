'use strict'; /* global expect */

var calculator = require("../app4/calc");
 
describe("multiplication", function () 
{
  it("should multiply 2 and 3", function () 
  {
    var product = calculator.multiply(2, 3);
    
    expect(product).toBe(6);
  });
});
