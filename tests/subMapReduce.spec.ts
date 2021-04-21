import 'mocha';
import { expect } from 'chai';
import { SubMapReduce } from '../src/subMapReduce';

const smrInstance: SubMapReduce = new SubMapReduce([1, 2, 3], (val: number) => {
  val = val + 1;
  return val;
});
describe('SubMapReduce class methods tested with a SubMapReduce class instance',
  () => {
    describe('Testing map', () => {
      it('smrInstance.map should be [2, 3, 4]', () => {
        expect(smrInstance.map()).to.eql([2, 3, 4]);
      });
    });
    describe('Testing run', () => {
      it('smrInstance.run should be -9', () => {
        expect(smrInstance.run()).to.eql(-9);
      });
    });
  });
