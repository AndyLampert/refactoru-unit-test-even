describe("evenArray", function() {
  it("should take the even numbers from the inputArray and put them in outputArray", function() {
    expect(evenArray([0,1,2,3,4])).toEqual([0,2,4]);
    expect(evenArray([0,4])).toEqual([0,4]);
  });
});