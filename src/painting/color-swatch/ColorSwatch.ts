import { Color } from '@lib/std-ui';

type ColorSwatch = Color & {
  at: (idx: number) => Color | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ColorSwatch = (
  color: string,
  swatch: Record<number, Color>,
): ColorSwatch => ({
  ...Color(color),
  at: (idx) => swatch[idx],
});
