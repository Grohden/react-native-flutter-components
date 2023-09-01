export type EdgeInsetsSymmetric = { vertical?: number; horizontal?: number };

export type EdgeInsetsOnly = {
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
};

export class EdgeInsets {
  private constructor(
    public values: (EdgeInsetsSymmetric & EdgeInsetsOnly) | number,
  ) {}

  static only(value: EdgeInsetsOnly) {
    return new EdgeInsets(value);
  }

  static symmetric(values: EdgeInsetsSymmetric) {
    return new EdgeInsets(values);
  }

  static all(value: number) {
    return new EdgeInsets(value);
  }

  toPrefixedStyles<K extends string>(prefix: K) {
    type Keys =
      | `${K}${Capitalize<keyof (EdgeInsetsSymmetric & EdgeInsetsOnly)>}`
      | K;

    const values: { [key in Keys]?: number } = {};

    if (typeof this.values === 'number') {
      values[prefix] = this.values;

      return values;
    }

    if (this.values.horizontal !== undefined) {
      values[`${prefix}Horizontal`] = this.values.horizontal;
    }
    if (this.values.vertical !== undefined) {
      values[`${prefix}Vertical`] = this.values.vertical;
    }
    if (this.values.top !== undefined) {
      values[`${prefix}Top`] = this.values.top;
    }
    if (this.values.bottom !== undefined) {
      values[`${prefix}Bottom`] = this.values.bottom;
    }
    if (this.values.left !== undefined) {
      values[`${prefix}Left`] = this.values.left;
    }
    if (this.values.right !== undefined) {
      values[`${prefix}Right`] = this.values.right;
    }

    return values;
  }
}
