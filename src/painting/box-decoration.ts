import type { ViewStyle } from 'react-native';

import type { Color } from '@lib/std-ui';
import type { Border, BorderRadius } from './border';
import type { BoxShadow } from './box-shadow';

type BoxDecorationProps = {
  border?: Border;
  borderRadius?: BorderRadius;
  color?: Color;
  shadow?: BoxShadow;
};

export class BoxDecoration {
  static new(props: BoxDecorationProps) {
    return new BoxDecoration(
      props.border,
      props.borderRadius,
      props.color,
      props.shadow,
    );
  }

  private constructor(
    private border: BoxDecorationProps['border'],
    private borderRadius: BoxDecorationProps['borderRadius'],
    private color: BoxDecorationProps['color'],
    private shadow: BoxDecorationProps['shadow'],
  ) {}

  toStyles() {
    return {
      backgroundColor: this.color,
      ...this.border?.toStyle(),
      ...this.borderRadius?.toStyle(),
      ...this.shadow?.toStyle(),
    } satisfies ViewStyle;
  }
}
