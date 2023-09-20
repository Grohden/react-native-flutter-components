import { clampDouble } from '@material/material-color-utilities';

import { BoxConstraints } from '@lib/rendering';
import { Offset } from '@lib/std-ui';

export type VisualDensity = {
  horizontal: number;
  vertical: number;
  baseSizeAdjustment: Offset;
  effectiveConstraints: (constraints: BoxConstraints) => BoxConstraints;
};

type VisualDensityProps = {
  horizontal?: number;
  vertical?: number;
};

export const VisualDensity = ({
  vertical = 0,
  horizontal = 0,
}: VisualDensityProps): VisualDensity => ({
  horizontal,
  vertical,
  get baseSizeAdjustment() {
    const interval = 4.0;

    return Offset(horizontal, vertical).multiply(interval);
  },
  effectiveConstraints(constraints) {
    // assert(constraints.debugAssertIsValid());
    return constraints.copyWith({
      minWidth: clampDouble(
        0.0,
        constraints.maxWidth,
        constraints.minWidth + this.baseSizeAdjustment.dx,
      ),
      minHeight: clampDouble(
        0.0,
        constraints.maxHeight,
        constraints.minHeight + this.baseSizeAdjustment.dy,
      ),
    });
  },
});
