import {calcTotal} from '../App/containers/Calculator'

describe('bet wager calculator', () => {
  it('it should return the proper amount for a positive wager', () => {
    expect(calcTotal('350', '200')).toEqual(700)
  });
  it('it should work for ints', () => {
    expect(calcTotal(350, 200)).toEqual(700)
  });
  it('it should work for mix ints and strings', () => {
    expect(calcTotal('350', 200)).toEqual(700)
    expect(calcTotal(350, '200')).toEqual(700)
  });
  it('should work for negative wagers', () => {
    expect(calcTotal('-350', '350')).toEqual(100)
    expect(calcTotal('-450', '900')).toEqual(200)
    expect(calcTotal('-350', '200')).toEqual(57)
    expect(calcTotal('-350', '700')).toEqual(200)
  });
});