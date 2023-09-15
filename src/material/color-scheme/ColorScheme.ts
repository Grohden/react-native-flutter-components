import { Scheme } from '@material/material-color-utilities';

import { Colors } from '@lib/material/colors';
import { Brightness, Color } from '@lib/std-ui';

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

ColorScheme.fromSeed = ({
  seedColor,
  brightness = Brightness.light,
  ...props
}: {
  seedColor: Color;
  brightness?: Brightness;
  primary?: Color;
  onPrimary?: Color;
  primaryContainer?: Color;
  onPrimaryContainer?: Color;
  secondary?: Color;
  onSecondary?: Color;
  secondaryContainer?: Color;
  onSecondaryContainer?: Color;
  tertiary?: Color;
  onTertiary?: Color;
  tertiaryContainer?: Color;
  onTertiaryContainer?: Color;
  error?: Color;
  onError?: Color;
  errorContainer?: Color;
  onErrorContainer?: Color;
  outline?: Color;
  outlineVariant?: Color;
  background?: Color;
  onBackground?: Color;
  surface?: Color;
  onSurface?: Color;
  surfaceVariant?: Color;
  onSurfaceVariant?: Color;
  inverseSurface?: Color;
  onInverseSurface?: Color;
  inversePrimary?: Color;
  shadow?: Color;
  scrim?: Color;
  surfaceTint?: Color;
}) => {
  const scheme = brightness === Brightness.light
    ? Scheme.light(seedColor.argb())
    : Scheme.dark(seedColor.argb());

  return ColorScheme({
    primary: props.primary || Color.fromArgb(scheme.primary),
    onPrimary: props.onPrimary || Color.fromArgb(scheme.onPrimary),
    primaryContainer: props.primaryContainer
      || Color.fromArgb(scheme.primaryContainer),
    onPrimaryContainer: props.onPrimaryContainer
      || Color.fromArgb(scheme.onPrimaryContainer),
    secondary: props.secondary || Color.fromArgb(scheme.secondary),
    onSecondary: props.onSecondary || Color.fromArgb(scheme.onSecondary),
    secondaryContainer: props.secondaryContainer
      || Color.fromArgb(scheme.secondaryContainer),
    onSecondaryContainer: props.onSecondaryContainer
      || Color.fromArgb(scheme.onSecondaryContainer),
    tertiary: props.tertiary || Color.fromArgb(scheme.tertiary),
    onTertiary: props.onTertiary || Color.fromArgb(scheme.onTertiary),
    tertiaryContainer: props.tertiaryContainer
      || Color.fromArgb(scheme.tertiaryContainer),
    onTertiaryContainer: props.onTertiaryContainer
      || Color.fromArgb(scheme.onTertiaryContainer),
    error: props.error || Color.fromArgb(scheme.error),
    onError: props.onError || Color.fromArgb(scheme.onError),
    errorContainer: props.errorContainer
      || Color.fromArgb(scheme.errorContainer),
    onErrorContainer: props.onErrorContainer
      || Color.fromArgb(scheme.onErrorContainer),
    outline: props.outline || Color.fromArgb(scheme.outline),
    outlineVariant: props.outlineVariant
      || Color.fromArgb(scheme.outlineVariant),
    background: props.background || Color.fromArgb(scheme.background),
    onBackground: props.onBackground || Color.fromArgb(scheme.onBackground),
    surface: props.surface || Color.fromArgb(scheme.surface),
    onSurface: props.onSurface || Color.fromArgb(scheme.onSurface),
    surfaceVariant: props.surfaceVariant
      || Color.fromArgb(scheme.surfaceVariant),
    onSurfaceVariant: props.onSurfaceVariant
      || Color.fromArgb(scheme.onSurfaceVariant),
    inverseSurface: props.inverseSurface
      || Color.fromArgb(scheme.inverseSurface),
    onInverseSurface: props.onInverseSurface
      || Color.fromArgb(scheme.inverseOnSurface),
    inversePrimary: props.inversePrimary
      || Color.fromArgb(scheme.inversePrimary),
    shadow: props.shadow || Color.fromArgb(scheme.shadow),
    scrim: props.scrim || Color.fromArgb(scheme.scrim),
    surfaceTint: props.surfaceTint || Color.fromArgb(scheme.primary),
    brightness: brightness,
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
