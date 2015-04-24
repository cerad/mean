'use strict';
/* global expect */

describe("A suite", function() 
{
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  
  describe('view1 controller', function(){

    it('should ....', function() 
    {
      //spec body
      var x = {};
      expect(x).toBeDefined();
    });

  });

});

