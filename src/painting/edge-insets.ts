export type EdgeInsetsSymmetric = { vertical?: number; horizontal?: number };

export type EdgeInsetsOnly = {
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
};

export class EdgeInsets {
  private constructor(
    public top: number | undefined,
    public left: number | undefined,
    public right: number | undefined,
    public bottom: number | undefined,
  ) {}

  static zero = new EdgeInsets(0, 0, 0, 0);

  static only(values: EdgeInsetsOnly) {
    return new EdgeInsets(values.top, values.left, values.right, values.bottom);
  }

  static symmetric(values: EdgeInsetsSymmetric) {
    return new EdgeInsets(
      values.vertical,
      values.horizontal,
      values.horizontal,
      values.vertical,
    );
  }

  static all(value: number) {
    return new EdgeInsets(value, value, value, value);
  }

  toPrefixedStyles<K extends string>(prefix: K) {
    type Keys = `${K}${Capitalize<keyof EdgeInsetsOnly>}`;

    const values: { [key in Keys]?: number } = {};

    if (this.top !== undefined) {
      values[`${prefix}Top`] = this.top;
    }
    if (this.left !== undefined) {
      values[`${prefix}Left`] = this.left;
    }
    if (this.right !== undefined) {
      values[`${prefix}Right`] = this.right;
    }
    if (this.bottom !== undefined) {
      values[`${prefix}Bottom`] = this.bottom;
    }

    return values;
  }
}
