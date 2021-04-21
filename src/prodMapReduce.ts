import { ArrayMethods, MapCallback } from './arrayMethods';

/**
 * @description Class that reduces all elements in an array,
 * using preexisting array methods defined in a super class
 */
export class ProdMapReduce extends ArrayMethods {
  constructor(array: number[], cb: MapCallback) {
    super(array, cb);
  }

  /**
   * Multiplies all elements in array.
   * @param n the array to be reduced
   * @returns the resulting number of the reduction
   */
  public reduce(n: number[]): number {
    let acc = 1;
    n.forEach((val) => {
      acc = acc * val;
    });
    return acc;
  }
}
