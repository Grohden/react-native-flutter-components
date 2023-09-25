import type { Double } from '@lib/std-ui/type-semantics';

export type Offset = {
  dx: Double;
  dy: Double;
  direction: Double;
  multiply: (operand: Double) => Offset;
};
export const Offset = (dx: Double, dy: Double): Offset => ({
  dx,
  dy,
  get direction() {
    return Math.atan2(dy, dx);
  },
  multiply: (operand) => Offset(dx * operand, dy * operand),
});

Offset.zero = Offset(0.0, 0.0);
