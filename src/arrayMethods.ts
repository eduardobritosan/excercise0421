

export abstract class ArrayMethods {
  constructor(protected array: number[]) {
  }

  public getArray(): number[] {
    return this.array;
  }

  public setArray(array: number[]): void {
    this.array = array;
  }
  protected map(cb: MapCallback): number[] {
    const result = cb(this.getArray());
    return result;
  }

  protected abstract reduce(cb: ReduceCallback): number
}
