
var findMissing = require ('../src/missingNumber.js')

describe("Find missing number two lists: ", function() {

  describe("Case for en empty list", function() {

    it("should return 0 for empty list", function() {
      expect(findMissing([], [])).toEqual(0);
    });

  });

  describe("Case for lists with the same entries", function() {

    it("should return 0 for [2],[2]", function() {
      expect(findMissing([2], [2])).toEqual(0);
    });

    it("should return 0 for [4],[4]", function() {
      expect(findMissing([4], [4])).toEqual(0);
    });

    it("should return 0 for [7],[7]", function() {
      expect(findMissing([7], [7])).toEqual(0);
    });
     it("should return 0 for [18],[18]", function() {
      expect(findMissing([18], [18])).toEqual(0);
    });

  });

  describe("Case for lists with similar entries and a missing number", function() {

    it("should return 5 for [1,2],[1,2,5]", function() {
      expect(findMissing([1, 2], [1, 2, 5])).toEqual(5);
    });

    it("should return 10 for [4, 6, 8],[4, 6, 8, 10]", function() {
      expect(findMissing([4, 6, 8], [4, 6, 8, 10])).toEqual(10);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function() {
      expect(findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66])).toEqual(1);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 22, 7, 6, 11, 66]", function() {
      expect(findMissing([5, 4, 7, 6, 11, 66], [5, 4, 22, 7, 6, 11, 66])).toEqual(22);
    });

    it("should return 1 for [5, 4, 6, 7, 11, 66],[5, 4, 55, 7, 6, 11, 66]", function() {
      expect(findMissing([5, 4, 6, 7, 11, 66], [5, 4, 55, 7, 6, 11, 66])).toEqual(55);
    });

  });

});

