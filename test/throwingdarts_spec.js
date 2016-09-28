const Chai = require('chai');
const Expect = Chai.expect;
const scoreThrows = require('../throwingdarts.js');
const score = scoreThrows;

describe('darts', () => {
  it('Should Exist', () => {
    Expect(score).to.not.be.undefined;
    Expect(score).to.be.a('function');
  });

  describe('scoreThrows Method', () => {
     it('scoreThrows should return a number', ()=> {
      Expect(score([1,5,7])).to.equal(20);
      Expect(score([1,2,2])).to.equal(130);
      Expect(score('this')).to.equal('This is not an array')
    });

  });
});