import 'mocha';
import { expect } from 'chai';
import { DivMapReduce } from '../src/divMapReduce';

const dmrInstance: DivMapReduce =
  new DivMapReduce([0, 1, 3], (val: number) => {
    val = val + 1;
    return val;
  });
describe('DivMapReduce class methods tested with a class instance',
  () => {
    describe('Testing run', () => {
      it('dmrInstance.run should be 2', () => {
        expect(dmrInstance.run()).to.eql(2);
      });
    });
  });
