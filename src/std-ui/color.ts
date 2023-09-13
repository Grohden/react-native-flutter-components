import chroma from 'chroma-js';

export type Color = {
  hex: () => string;
  luminance: () => number;
  withAlpha: (a: number) => Color;
};

export const Color = (value: string | chroma.Color): Color => {
  const parsed = typeof value === 'string' ? chroma(value) : value;

  return {
    hex: () => parsed.hex(),
    luminance: () => parsed.luminance(),
    withAlpha: (a) => Color(parsed.alpha(a)),
  };
};
