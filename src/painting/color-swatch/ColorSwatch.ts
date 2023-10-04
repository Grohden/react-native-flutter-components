import { Color } from '@lib/std-ui';

export type ColorSwatch = Color & {
  at: (idx: number) => Color | undefined;
};

export const ColorSwatch = (
  color: string,
  swatch: Record<number, Color>,
): ColorSwatch => ({
  ...Color(color),
  at: (idx) => swatch[idx],
});
