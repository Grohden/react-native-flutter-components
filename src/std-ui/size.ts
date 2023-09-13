export type Size = {
  width: number;
  height: number;
};
export const Size = (size: Size) => ({
  width: size.width,
  height: size.height,
});

Size.fromHeight = (height: number) => Size({ width: Infinity, height });

Size.fromWidth = (width: number) => Size({ width, height: Infinity });

Size.fromRadius = (radius: number) =>
  Size({ width: radius * 2, height: radius * 2 });

Size.square = (dimension: number) =>
  Size({ width: dimension, height: dimension });
