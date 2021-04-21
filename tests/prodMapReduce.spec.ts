import 'mocha';
import { expect } from 'chai';
import { ProdMapReduce } from '../src/prodMapReduce';

const pmrInstance: ProdMapReduce =
  new ProdMapReduce([1, 2, 3], (val: number) => {
    val = val + 1;
    return val;
  });
describe('ProdMapReduce class methods tested with a class instance',
  () => {
    describe('Testing map', () => {
      it('pmrInstance.map should be [2, 3, 4]', () => {
        expect(pmrInstance.map()).to.eql([2, 3, 4]);
      });
    });
    describe('Testing run', () => {
      it('pmrInstance.run should be 24', () => {
        expect(pmrInstance.run()).to.eql(24);
      });
    });
  });
