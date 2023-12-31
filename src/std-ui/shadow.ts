import { Color } from '@lib/std-ui/color';
import { Offset } from '@lib/std-ui/offset';
import type { Double } from '@lib/std-ui/type-semantics';

// I'm assuming its this
// https://github.com/jamesr/flutter_engine/blob/master/lib/ui/painting.dart#L1186
const _kColorDefault = '#000000FF';

type ShadowProps = {
  color?: Color;
  offset?: Offset;
  blurRadius?: Double;
};

export type Shadow = {
  color: Color;
  offset: Offset;
  blurRadius: Double;
};

export const Shadow = ({
  color = Color(_kColorDefault),
  offset = Offset.zero,
  blurRadius = 0,
}: ShadowProps): Shadow => ({
  color,
  offset,
  blurRadius,
});
