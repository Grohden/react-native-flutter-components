import chroma from 'chroma-js';

import { argbFromHex, rgbaHexFromArgb } from './_fixed-string-utils';

export type Color = {
  hex: () => string;
  argb: () => number;
  luminance: () => number;
  withOpacity: (opacity: number) => Color;
};

export const Color = (value: string): Color => ({
  hex: () => value,
  argb: () => argbFromHex(value),
  luminance() {
    return chroma(this.hex()).luminance();
  },
  withOpacity(opacity) {
    return Color(chroma(this.hex()).alpha(opacity).hex());
  },
});

Color.fromArgb = (argb: number) => Color(rgbaHexFromArgb(argb));
