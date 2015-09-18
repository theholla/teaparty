describe("printSong", function() {
  it("displays couplets for all numbers between a number (user's choice) and 0", function() {
    expect(printSong(4)).to.have.string("4 cups of tea");
  })

  it("uses standard grammar when there is only one cup", function() {
    expect(printSong(4)).to.have.string("1 cup of tea");
  })

  it("uses standard grammar when there are no cups of tea", function() {
    expect(printSong(5)).to.have.string("no cups of tea");
  })
});
