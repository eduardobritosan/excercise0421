/**
 * Tipo de callback para map
 */
export type MapCallback = (n: number) => number;
/**
 * Base template class for ArrayMethods
 */
export abstract class ArrayMethods {
  constructor(protected array: number[], private cb: MapCallback) {
  }

  /**
   * @description Getter of the array property
   * @returns the array of the object
   */
  public getArray(): number[] {
    return this.array;
  }

  /**
   * @description Setter of the array property
   */
  public setArray(array: number[]): void {
    this.array = array;
  }

  /**
   * @description Runs function passed to the
   * @returns the array after the operation has been made
   */
  public map(): number[] {
    const result: number[] = [];
    this.getArray().forEach((val) => {
      result.push(this.cb(val));
    });
    return result;
  }

  /**
   * @description the template method
   */
  public run(): number {
    const mapArray = this.map();
    const reduceResult = this.reduce(mapArray);
    return reduceResult;
  }

  protected abstract reduce(n: number[]): number;
}
