export type Size = {
  width: number;
  height: number;
};
export const Size = (width: number, height: number): Size => ({
  width,
  height,
});

Size.infinite = Size(Infinity, Infinity);

Size.zero = Size(0.0, 0.0);

Size.fromHeight = (height: number) => Size(Infinity, height);

Size.fromWidth = (width: number) => Size(width, Infinity);

Size.fromRadius = (radius: number) => Size(radius * 2, radius * 2);

Size.square = (dimension: number) => Size(dimension, dimension);
