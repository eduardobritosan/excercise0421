import 'mocha';
import { expect } from 'chai';
import { AddMapReduce } from '../src/addMapReduce';

const amrInstance: AddMapReduce = new AddMapReduce([1, 2, 3])
describe('AddMapReduce class methods tested with a AddMapReduce class instance', () => {
  describe('Testing map', () => {
    it('amrInstance should be [2, 3, 4]', () => {
      expect(amrInstance.map((val) => {
        val = val + 1;
      }).length).to.eql([2, 3, 4]);
    });
  });
});