/*global describe, it, before */

import chai from 'chai';
import RLK from '../lib/RLK.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my library',  () => {
  before(() => {
    lib = new RLK();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('RLK');
    });
  });
});
