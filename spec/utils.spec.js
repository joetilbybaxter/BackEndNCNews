const { expect } = require('chai');
const { convertTimestampToDate } = require('../utils');

describe('convertTimestampToDate', () => {
  it('returns a new object', () => {
    const timestamp = 1557572706232;
    const input = { created_at: timestamp };
    const result = convertTimestampToDate(input);
    expect(result).to.not.equal(input);
    expect(result).to.be.an('object');
  });
  it('converts a created_at property to a date', () => {
    const timestamp = 1557572706232;
    const input = { created_at: timestamp };
    const result = convertTimestampToDate(input);
    expect(result.created_at).to.be.an.instanceof(Date);
    expect(result.created_at).to.eql(new Date(timestamp));
  });
  it('does not mutate the input', () => {
    const timestamp = 1557572706232;
    const input = { created_at: timestamp };
    convertTimestampToDate(input);
    const control = { created_at: timestamp };
    expect(input).to.eql(control);
  });
  it('ignores includes any other key-value-pairs in returned object', () => {
    const input = { created_at: 0, key1: true, key2: 1 };
    const result = convertTimestampToDate(input);
    expect(result.key1).to.be.true;
    expect(result.key2).to.equal(1);
  });
});
