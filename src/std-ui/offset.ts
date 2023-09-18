export type Offset = {
  dx: number;
  dy: number;
  direction: number;
  multiply: (operand: number) => Offset;
};
export const Offset = (dx: number, dy: number): Offset => ({
  dx,
  dy,
  get direction() {
    return Math.atan2(dy, dx);
  },
  multiply: (operand) => Offset(dx * operand, dy * operand),
});

Offset.zero = Offset(0, 0);
