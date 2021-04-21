/**
 * Tipo de callback para map
 */
type MapCallback = (n: number) => number;
/**
 * Base template class for ArrayMethods
 */
export abstract class ArrayMethods {
  constructor(protected array: number[]) {
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
  public map(cb: MapCallback): number[] {
    const result: number[] = [];
    this.getArray().forEach((val) => {
      result.push(cb(val));
    });
    return result;
  }

  protected abstract reduce(): number
}
