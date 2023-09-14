import { Platform } from 'react-native';
import type { PlatformOSType } from 'react-native';

import { AppBarThemeData } from '@lib/material/app-bar-theme-data';
import { ColorScheme } from '@lib/material/color-scheme';
import { TextTheme } from '@lib/material/text-theme';
import { Typography } from '@lib/material/typography';
import { Brightness, Color } from '@lib/std-ui';

type ThemeDataProps = {
  platform: PlatformOSType;
  colorScheme: ColorScheme;
  typography: Typography;
  textTheme: TextTheme;
  primaryTextTheme: TextTheme;
  appBarTheme: AppBarThemeData;
};

type NewThemeDataProps = Partial<ThemeDataProps> & {
  colorScheme: ColorScheme;
};

// https://api.flutter.dev/flutter/material/ThemeData-class.html
export class ThemeData {
  readonly appBarTheme: AppBarThemeData;
  readonly colorScheme: ColorScheme;
  readonly textTheme: TextTheme;

  get brightness() {
    return this.colorScheme.brightness;
  }

  // https://github.com/flutter/flutter/blob/2524052335/packages/flutter/lib/src/material/theme_data.dart#L1842
  static estimateBrightnessForColor(color: Color): Brightness {
    const relativeLuminance = color.luminance();

    const kThreshold = 0.15;
    if ((relativeLuminance + 0.05) * (relativeLuminance + 0.05) > kThreshold) {
      return Brightness.light;
    }

    return Brightness.dark;
  }

  static new(
    {
      platform,
      typography,
      colorScheme,
      textTheme,
      primaryTextTheme,
      appBarTheme,
    }: NewThemeDataProps,
  ) {
    // General configs
    platform ||= Platform.OS;

    // Color
    const isDark = colorScheme.brightness === Brightness.dark;
    const estimatedPrimaryColorBrightness = ThemeData
      .estimateBrightnessForColor(colorScheme.primary);
    const primaryIsDark = estimatedPrimaryColorBrightness === Brightness.dark;

    // Typography
    typography ||= Typography.material2021({ platform, colorScheme });
    const defaultTextTheme = isDark ? typography.white : typography.black;
    const defaultPrimaryTextTheme = primaryIsDark
      ? typography.white
      : typography.black;

    // FIXME: geometry (englishLike) is applied at context use resolution
    //  using localization, since I'm not supporting localization right now
    //  I'll just apply it here
    textTheme = defaultTextTheme
      .merge(textTheme)
      .merge(typography.englishLike);
    primaryTextTheme = defaultPrimaryTextTheme.merge(primaryTextTheme);

    appBarTheme ||= AppBarThemeData();

    return new ThemeData({
      colorScheme,
      typography,
      platform,
      textTheme,
      primaryTextTheme,
      appBarTheme,
    });
  }

  private constructor(props: ThemeDataProps) {
    this.appBarTheme = props.appBarTheme;
    this.colorScheme = props.colorScheme;
    this.textTheme = props.textTheme;
  }
}
