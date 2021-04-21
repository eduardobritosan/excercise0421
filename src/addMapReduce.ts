import { ArrayMethods, MapCallback } from './arrayMethods';

export class AddMapReduce extends ArrayMethods {
  constructor(array: number[], cb: MapCallback) {
    super(array, cb);
  }


  public reduce(n: number[]): number {
    let acc = 0;
    const mapArray = this.map();
    mapArray.forEach((val) => {
      acc = acc + val;
    });
    return acc;
  }
}
