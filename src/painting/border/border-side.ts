import type { Color, Double } from '@lib/std-ui';

export type BorderSideArgs = { color?: Color; width?: Double };

export class BorderSide {
  public color: Color | undefined;
  public width: Double | undefined;

  private constructor(values: BorderSideArgs) {
    this.color = values.color;
    this.width = values.width;
  }

  static new(values: BorderSideArgs) {
    return new BorderSide(values);
  }
}
