const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {}, 20)).to.equal('Error');
  });

  it('should return an error if "fullName"  arg is an empty string', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" contains only firstName or only lastName', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error'); 
  });

  it('should return an error if "fullName" contains more than two words', () => {
    expect(formatFullname('John Doe The Second')).to.equal('Error');
    expect(formatFullname('John Doe !')).to.equal('Error'); 
  });

  it('should return a string where for both: firstName and lastName - first letter is a capital letter and the rest is written in lowercase', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('John doe')).to.equal('John Doe');
    expect(formatFullname('JoHn dOe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');

  });

});