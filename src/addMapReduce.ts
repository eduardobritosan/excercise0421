import { ArrayMethods } from './arrayMethods';

export class AddMapReduce extends ArrayMethods {
  constructor(array: number[]) {
    super(array);
  }

  public reduce(): number {
    return 0;
  }

  // public reduce(): number {
  //   const mapArray = this.map((val) => {
  //     val = val + 1;
  //   });
  //   const acc = 0;
  //   mapArray.forEach((val) => {
  //     acc
  //   })
  // }
}
