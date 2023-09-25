import { EdgeInsets, EdgeInsetsGeometry } from '@lib/painting/edge-insets';
import type { Double } from '@lib/std-ui';

import { BorderRadius } from './border-radius';
import { BorderSide } from './border-side';

type ShapeBorderProps = {
  dimensions: EdgeInsetsGeometry;
  scale(t: Double): ShapeBorder;
};

export type ShapeBorder = ShapeBorderProps;

const ShapeBorder = (props: ShapeBorderProps) => {
  return {
    scale: props.scale,
    dimensions: props.dimensions,
    add(
      _other: ShapeBorder,
      _options: { reversed?: boolean },
    ): ShapeBorder | undefined {
      return undefined;
    },
  };
};

type OutlineBorderProps = {
  side?: BorderSide;
  scale: ShapeBorderProps['scale'];
};

const OutlineBorder = (props: OutlineBorderProps) => {
  const side = props.side || BorderSide.none;
  const superShape = ShapeBorder({
    get dimensions() {
      return EdgeInsets.all(Math.max(side.strokeInset, 0));
    },
    ...props,
  });

  return {
    ...superShape,
    side,
  };
};

export const RoundedRectangleBorder = ({
  borderRadius = BorderRadius.zero,
  side = BorderSide.none,
} = {}) => {
  const superShape = OutlineBorder({
    side,
    scale: (t) => {
      return RoundedRectangleBorder({
        side: side.scale(t),
        borderRadius: borderRadius.multiply(t),
      });
    },
  });

  return { ...superShape, borderRadius };
};

export const CircleBorder = ({
  eccentricity = 0.0,
  side = BorderSide.none,
} = {}) => {
  const superShape = OutlineBorder({
    side,
    scale: (t) => {
      return CircleBorder({ side: side.scale(t), eccentricity: eccentricity });
    },
  });

  return {
    ...superShape,
    eccentricity,
  };
};
