import { Colors } from '@lib/material';
import { Color } from '@lib/std-ui';
import { Brightness } from '@lib/std-ui';

export type ColorScheme = {
  brightness: Brightness;
  primary: Color;
  onPrimary: Color;
  primaryContainer?: Color;
  onPrimaryContainer?: Color;
  secondary: Color;
  onSecondary: Color;
  secondaryContainer?: Color;
  onSecondaryContainer?: Color;
  tertiary?: Color;
  onTertiary?: Color;
  tertiaryContainer?: Color;
  onTertiaryContainer?: Color;
  error: Color;
  onError: Color;
  errorContainer?: Color;
  onErrorContainer?: Color;
  background: Color;
  onBackground: Color;
  surface: Color;
  onSurface: Color;
  surfaceVariant?: Color;
  onSurfaceVariant?: Color;
  outline?: Color;
  outlineVariant?: Color;
  shadow?: Color;
  scrim?: Color;
  inverseSurface?: Color;
  onInverseSurface?: Color;
  inversePrimary?: Color;
  surfaceTint?: Color;
};

export const ColorScheme = (props: ColorScheme) => props;

ColorScheme.light = (props: Partial<ColorScheme> = {}) => {
  return ColorScheme({
    brightness: Brightness.light,
    primary: Color('#6200EEFF'),
    onPrimary: Colors.white,
    secondary: Color('#03DAC6FF'),
    onSecondary: Colors.black,
    error: Color('#B00020FF'),
    onError: Colors.white,
    background: Colors.white,
    onBackground: Colors.black,
    surface: Colors.white,
    onSurface: Colors.black,
    ...props,
  });
};

ColorScheme.dark = (props: Partial<ColorScheme> = {}) =>
  ColorScheme({
    brightness: Brightness.dark,
    primary: Color('#BB86FCFF'),
    onPrimary: Colors.black,
    secondary: Color('#03DAC6FF'),
    onSecondary: Colors.black,
    error: Color('#CF6679FF'),
    onError: Colors.black,
    background: Color('#121212FF'),
    onBackground: Colors.white,
    surface: Color('#121212FF'),
    onSurface: Colors.white,
    ...props,
  });

// FIXME: we need seed, then we can remove this
ColorScheme.lightM3 = () =>
  ColorScheme({
    brightness: Brightness.light,
    primary: Color('#6750A4FF'),
    onPrimary: Color('#FFFFFFFF'),
    primaryContainer: Color('#EADDFFFF'),
    onPrimaryContainer: Color('#21005DFF'),
    secondary: Color('#625B71FF'),
    onSecondary: Color('#FFFFFFFF'),
    secondaryContainer: Color('#E8DEF8FF'),
    onSecondaryContainer: Color('#1D192BFF'),
    tertiary: Color('#7D5260FF'),
    onTertiary: Color('#FFFFFFFF'),
    tertiaryContainer: Color('#FFD8E4FF'),
    onTertiaryContainer: Color('#31111DFF'),
    error: Color('#B3261EFF'),
    onError: Color('#FFFFFFFF'),
    errorContainer: Color('#F9DEDCFF'),
    onErrorContainer: Color('#410E0BFF'),
    background: Color('#FFFBFEFF'),
    onBackground: Color('#1C1B1FFF'),
    surface: Color('#FFFBFEFF'),
    onSurface: Color('#1C1B1FFF'),
    surfaceVariant: Color('#E7E0ECFF'),
    onSurfaceVariant: Color('#49454FFF'),
    outline: Color('#79747EFF'),
    outlineVariant: Color('#CAC4D0FF'),
    shadow: Color('#000000FF'),
    scrim: Color('#000000FF'),
    inverseSurface: Color('#313033FF'),
    onInverseSurface: Color('#F4EFF4FF'),
    inversePrimary: Color('#D0BCFFFF'),
    // The surfaceTint color is set to the same color as the primary.
    surfaceTint: Color('#6750A4FF'),
  });

// FIXME: we need seed, then we can remove this
ColorScheme.darkM3 = () =>
  ColorScheme({
    brightness: Brightness.dark,
    primary: Color('#D0BCFFFF'),
    onPrimary: Color('#381E72FF'),
    primaryContainer: Color('#4F378BFF'),
    onPrimaryContainer: Color('#EADDFFFF'),
    secondary: Color('#CCC2DCFF'),
    onSecondary: Color('#332D41FF'),
    secondaryContainer: Color('#4A4458FF'),
    onSecondaryContainer: Color('#E8DEF8FF'),
    tertiary: Color('#EFB8C8FF'),
    onTertiary: Color('#492532FF'),
    tertiaryContainer: Color('#633B48FF'),
    onTertiaryContainer: Color('#FFD8E4FF'),
    error: Color('#F2B8B5FF'),
    onError: Color('#601410FF'),
    errorContainer: Color('#8C1D18FF'),
    onErrorContainer: Color('#F9DEDCFF'),
    background: Color('#1C1B1FFF'),
    onBackground: Color('#E6E1E5FF'),
    surface: Color('#1C1B1FFF'),
    onSurface: Color('#E6E1E5FF'),
    surfaceVariant: Color('#49454FFF'),
    onSurfaceVariant: Color('#CAC4D0FF'),
    outline: Color('#938F99FF'),
    outlineVariant: Color('#49454FFF'),
    shadow: Color('#000000FF'),
    scrim: Color('#000000FF'),
    inverseSurface: Color('#E6E1E5FF'),
    onInverseSurface: Color('#313033FF'),
    inversePrimary: Color('#6750A4FF'),
    // The surfaceTint color is set to the same color as the primary.
    surfaceTint: Color('#D0BCFFFF'),
  });
