const {expect} = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10).to.equal(''));
  }),
  it('Returns a string that creates breaklines based on the char max input', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20).to.equal("Lorem ipsum dolor \nsit eu amet, elit na \nmagna sem amet nulla \nvel purus ac ligula."))
  }),
  it('Has number of lines', () => {
    var str = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.";
    var columns = 20
    const numberOfLines = (str, columns) => {
      return str.length / columns;
    }
    expect(wrap(str, columns).numberOfLines).to.equal(4)
  })
})
