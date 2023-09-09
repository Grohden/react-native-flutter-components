import type { Color } from '@lib/std-ui';

export type BorderSideArgs = { color?: Color; width?: number };

export class BorderSide {
  public color: Color | undefined;
  public width: number | undefined;

  private constructor(values: BorderSideArgs) {
    this.color = values.color;
    this.width = values.width;
  }

  static new(values: BorderSideArgs) {
    return new BorderSide(values);
  }
}
