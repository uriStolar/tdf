const chai = require('chai');
const { expect, assert } = require('chai');
const should = require('chai').should();
const { add } = require('./calc');

describe('add() tests', () => {
  it('should return 3 when called with 1 and 2', () => {
    const esperado = 3;
    const resultado = add(1, 2);

    resultado.should.equal(esperado);
    expect(resultado).to.equal(esperado);
    assert.equal(resultado, esperado);
  });

  it('should return 10 when called with 6 and 4', () => {
    add(6,4).should.equal(10);
    expect(add(6, 4)).to.equal(10);
    assert.equal(add(6, 4), 10);
  });

  it('shouldn\'t return 10 when called with 6 and 5', () => {
    add(6, 5).should.not.equal(10);
    expect(add(6, 5)).to.not.equal(10);
    assert.notEqual(add(6, 5), 10);
  });
});