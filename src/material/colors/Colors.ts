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

  static readonly orange = ColorSwatch(
    '#FF9800FF',
    {
      50: Color('#FFF3E0FF'),
      100: Color('#FFE0B2FF'),
      200: Color('#FFCC80FF'),
      300: Color('#FFB74DFF'),
      400: Color('#FFA726FF'),
      500: Color('#FF9800FF'),
      600: Color('#FB8C00FF'),
      700: Color('#F57C00FF'),
      800: Color('#EF6C00FF'),
      900: Color('#E65100FF'),
    },
  );

  static readonly teal = ColorSwatch(
    '#008080FF',
    {
      50: Color('#E1F7FBFF'),
      100: Color('#B4EBF5FF'),
      200: Color('#84DDEEFF'),
      300: Color('#56CFE6FF'),
      400: Color('#38C5DFFF'),
      500: Color('#2BBBD8FF'),
      600: Color('#27ABC5FF'),
      700: Color('#27ABC5FF'),
      800: Color('#008080FF'),
      900: Color('#156067FF'),
    },
  );
}
