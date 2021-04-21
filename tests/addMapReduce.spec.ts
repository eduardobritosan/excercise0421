import 'mocha';
import { expect } from 'chai';
import { AddMapReduce } from '../src/addMapReduce';

const amrInstance: AddMapReduce = new AddMapReduce([1, 2, 3], (val: number) => {
  val = val + 1;
  return val;
});
describe('AddMapReduce class methods tested with a AddMapReduce class instance',
  () => {
    describe('Testing map', () => {
      it('amrInstance.map should be [2, 3, 4]', () => {
        expect(amrInstance.map()).to.eql([2, 3, 4]);
      });
    });
    describe('Testing run', () => {
      it('amrInstance.run should be 9', () => {
        expect(amrInstance.run()).to.eql(9);
      });
    });
  });
