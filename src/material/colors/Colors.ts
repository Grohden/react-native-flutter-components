import { ColorSwatch } from '@lib/painting';
import { Color } from '@lib/std-ui';

export class Colors {
  static readonly black = Color('#000000FF');

  static readonly black87 = Color('#000000DD');

  static readonly black54 = Color('#0000008A');

  static readonly white = Color('#FFFFFFFF');

  static readonly white70 = Color('#FFFFFFB3');

  static readonly transparent = Color('#00000000');

  static readonly lime = ColorSwatch(
    '#CDDC39FF',
    {
      50: Color('#F9FBE7FF'),
      100: Color('#F0F4C3FF'),
      200: Color('#E6EE9CFF'),
      300: Color('#DCE775FF'),
      400: Color('#D4E157FF'),
      500: Color('#CDDC39FF'),
      600: Color('#C0CA33FF'),
      700: Color('#AFB42BFF'),
      800: Color('#9E9D24FF'),
      900: Color('#827717FF'),
    },
  );
}
