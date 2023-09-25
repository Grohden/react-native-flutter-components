import type { Double } from '@lib/std-ui';
import { Color } from '@lib/std-ui';

import { BorderStyle } from './border-style';

export type BorderSideArgs = {
  color?: Color;
  width?: Double;
  style?: BorderStyle;
  strokeAlign?: Double;
};

export class BorderSide {
  public color: Color;
  public width: Double;
  public style: BorderStyle;
  public strokeAlign: Double;

  get strokeInset() {
    return this.width * (1 - (1 + this.strokeAlign) / 2);
  }

  private constructor(values: BorderSideArgs) {
    this.color = values.color || Color('#000000FF');
    this.width = values.width ?? 1.0;
    this.style = values.style ?? BorderStyle.solid;
    this.strokeAlign = values.strokeAlign ?? BorderSide.strokeAlignInside;
  }

  static new(values: BorderSideArgs) {
    return new BorderSide(values);
  }

  static none = new BorderSide({ width: 0.0, style: BorderStyle.none });

  static strokeAlignInside = -1.0;

  scale(t: Double): BorderSide {
    return new BorderSide({
      color: this.color,
      width: Math.max(0.0, this.width * t),
      style: t <= 0.0 ? BorderStyle.none : this.style,
    });
  }
}
