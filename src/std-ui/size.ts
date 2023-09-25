import type { Double } from '@lib/std-ui/type-semantics';

export type Size = {
  width: Double;
  height: Double;
};
export const Size = (width: Double, height: Double): Size => ({
  width,
  height,
});

Size.infinite = Size(Infinity, Infinity);

Size.zero = Size(0.0, 0.0);

Size.fromHeight = (height: Double) => Size(Infinity, height);

Size.fromWidth = (width: Double) => Size(width, Infinity);

Size.fromRadius = (radius: Double) => Size(radius * 2.0, radius * 2.0);

Size.square = (dimension: Double) => Size(dimension, dimension);
