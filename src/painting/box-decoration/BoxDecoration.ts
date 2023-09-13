import type { ViewStyle } from 'react-native';

import type { Border, BorderRadius } from '@lib/painting/border';
import type { BoxShadow } from '@lib/painting/box-shadow';
import type { Color } from '@lib/std-ui';

type BoxDecorationProps = {
  border?: Border;
  borderRadius?: BorderRadius;
  color?: Color;
  shadow?: BoxShadow;
};

export type BoxDecoration = BoxDecorationProps & {
  toStyles(): ViewStyle;
};

export const BoxDecoration = (props: BoxDecorationProps): BoxDecoration => ({
  border: props.border,
  shadow: props.shadow,
  color: props.color,
  borderRadius: props.borderRadius,
  toStyles: () => ({
    backgroundColor: props.color?.hex(),
    ...props.border?.toStyle(),
    ...props.borderRadius?.toStyle(),
    ...props.shadow?.toStyle(),
  }),
});
