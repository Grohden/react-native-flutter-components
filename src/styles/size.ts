export class Size {
  static fromHeight(height: number) {
    return new Size(Infinity, height);
  }
  static fromRadius(radius: number) {
    return new Size(radius * 2, radius * 2);
  }
  static fromWidth(width: number) {
    return new Size(width, Infinity);
  }
  static square(dimension: number) {
    return new Size(dimension, dimension);
  }

  constructor(public readonly width: number, public readonly height: number) {}
}
