import chroma from 'chroma-js';

import { argbFromHex, rgbaHexFromArgb } from './_fixed-string-utils';

export type Color = {
  hex: () => string;
  argb: () => number;
  luminance: () => number;
  withAlpha: (a: number) => Color;
};

export const Color = (value: string): Color => ({
  hex: () => value,
  argb: () => argbFromHex(value),
  luminance() {
    return chroma(this.hex()).luminance();
  },
  withAlpha(alpha) {
    return Color(chroma(this.hex()).alpha(alpha).hex());
  },
});

Color.fromArgb = (argb: number) => Color(rgbaHexFromArgb(argb));
