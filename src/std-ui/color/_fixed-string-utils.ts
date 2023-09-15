/* eslint-disable no-bitwise */

const getUintParts = (uInt: number) => [
  (0xFF000000 & uInt) >>> 24,
  (0x00FF0000 & uInt) >>> 16,
  (0x0000FF00 & uInt) >>> 8,
  0x000000FF & uInt,
];

// Functions bellow were needed because material foundation opted
// to use hex as AARRGGBB.
// Thank you material foundation for just simply not using alpha
// channel on the functions, amazing!
// https://github.com/material-foundation/material-color-utilities/issues/33

export const rgbaHexFromArgb = (argb: number): string => {
  const [a, r, g, b] = getUintParts(argb);
  const rgba = [r, g, b, a]
    .map(part => part!.toString(16).padStart(2, '0'))
    .join('');

  return '#' + rgba.toUpperCase();
};

export const argbFromHex = (hex: string): number => {
  hex = hex.replace('#', '');
  const r = hex.slice(0, 2);
  const g = hex.slice(2, 4);
  const b = hex.slice(4, 6);
  const a = hex.slice(6, 8);

  return parseInt([a, r, g, b].join(''), 16);
};
