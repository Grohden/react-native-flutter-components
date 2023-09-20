import type { PlatformOSType } from 'react-native';

import { ColorScheme } from '@lib/material/color-scheme';
import { Colors } from '@lib/material/colors';
import { TextTheme } from '@lib/material/text-theme';
import { TextStyle } from '@lib/painting';
import { Brightness } from '@lib/std-ui';

// We, in theory should have two different fonts for iOS, I'm preserving
//  semantics with this consts
// Undefined to use San Francisco (which is hopefully the default?)
const sfUiDisplay = undefined;
const sfUiText = undefined;

export class Typography {
  static readonly blackMountainView = TextTheme({
    displayLarge: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    displayMedium: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    displaySmall: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    headlineLarge: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    headlineMedium: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    headlineSmall: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black87,
    }),
    titleLarge: TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    titleMedium: TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    titleSmall: TextStyle({ fontFamily: 'Roboto', color: Colors.black }),
    bodyLarge: TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    bodyMedium: TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    bodySmall: TextStyle({ fontFamily: 'Roboto', color: Colors.black54 }),
    labelLarge: TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    labelMedium: TextStyle({ fontFamily: 'Roboto', color: Colors.black }),
    labelSmall: TextStyle({ fontFamily: 'Roboto', color: Colors.black }),
  });

  static readonly whiteMountainView = TextTheme({
    displayLarge: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    displayMedium: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    displaySmall: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    headlineLarge: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    headlineMedium: TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    headlineSmall: TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    titleLarge: TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    titleMedium: TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    titleSmall: TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    bodyLarge: TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    bodyMedium: TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    bodySmall: TextStyle({ fontFamily: 'Roboto', color: Colors.white70 }),
    labelLarge: TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    labelMedium: TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    labelSmall: TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
  });

  static readonly whiteCupertino = TextTheme({
    displayLarge: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    displayMedium: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    displaySmall: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    headlineLarge: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    headlineMedium: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    headlineSmall: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white,
    }),
    titleLarge: TextStyle({ fontFamily: sfUiDisplay, color: Colors.white }),
    titleMedium: TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    titleSmall: TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    bodyLarge: TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    bodyMedium: TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    bodySmall: TextStyle({ fontFamily: sfUiText, color: Colors.white70 }),
    labelLarge: TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    labelMedium: TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    labelSmall: TextStyle({ fontFamily: sfUiText, color: Colors.white }),
  });

  static englishLike2021 = TextTheme({
    displayLarge: TextStyle({
      fontSize: 57.0,
      fontWeight: '400',
      letterSpacing: -0.25,
      height: 1.12,
    }),
    displayMedium: TextStyle({
      fontSize: 45.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.16,
    }),
    displaySmall: TextStyle({
      fontSize: 36.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.22,
    }),
    headlineLarge: TextStyle({
      fontSize: 32.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.25,
    }),
    headlineMedium: TextStyle({
      fontSize: 28.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.29,
    }),
    headlineSmall: TextStyle({
      fontSize: 24.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.33,
    }),
    titleLarge: TextStyle({
      fontSize: 22.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.27,
    }),
    titleMedium: TextStyle({
      fontSize: 16.0,
      fontWeight: '500',
      letterSpacing: 0.15,
      height: 1.50,
    }),
    titleSmall: TextStyle({
      fontSize: 14.0,
      fontWeight: '500',
      letterSpacing: 0.1,
      height: 1.43,
    }),
    labelLarge: TextStyle({
      fontSize: 14.0,
      fontWeight: '500',
      letterSpacing: 0.1,
      height: 1.43,
    }),
    labelMedium: TextStyle({
      fontSize: 12.0,
      fontWeight: '500',
      letterSpacing: 0.5,
      height: 1.33,
    }),
    labelSmall: TextStyle({
      fontSize: 11.0,
      fontWeight: '500',
      letterSpacing: 0.5,
      height: 1.45,
    }),
    bodyLarge: TextStyle({
      fontSize: 16.0,
      fontWeight: '400',
      letterSpacing: 0.5,
      height: 1.50,
    }),
    bodyMedium: TextStyle({
      fontSize: 14.0,
      fontWeight: '400',
      letterSpacing: 0.25,
      height: 1.43,
    }),
    bodySmall: TextStyle({
      fontSize: 12.0,
      fontWeight: '400',
      letterSpacing: 0.4,
      height: 1.33,
    }),
  });

  static readonly blackCupertino = TextTheme({
    displayLarge: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    displayMedium: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    displaySmall: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    headlineLarge: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    headlineMedium: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    headlineSmall: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black87,
    }),
    titleLarge: TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black87,
    }),
    titleMedium: TextStyle({ fontFamily: sfUiText, color: Colors.black87 }),
    titleSmall: TextStyle({ fontFamily: sfUiText, color: Colors.black }),
    bodyLarge: TextStyle({ fontFamily: sfUiText, color: Colors.black87 }),
    bodyMedium: TextStyle({ fontFamily: sfUiText, color: Colors.black87 }),
    bodySmall: TextStyle({ fontFamily: sfUiText, color: Colors.black54 }),
    labelLarge: TextStyle({ fontFamily: sfUiText, color: Colors.black87 }),
    labelMedium: TextStyle({ fontFamily: sfUiText, color: Colors.black }),
    labelSmall: TextStyle({ fontFamily: sfUiText, color: Colors.black }),
  });

  static material2021(
    {
      platform = 'android',
      black,
      white,
      englishLike,
      colorScheme = ColorScheme.light(),
    }: {
      platform?: PlatformOSType;
      colorScheme?: ColorScheme;
      black?: TextTheme;
      white?: TextTheme;
      englishLike?: TextTheme;
    },
  ) {
    const effectiveEnglishLike = englishLike || this.englishLike2021;
    const base = Typography.withPlatform(
      platform,
      black,
      white,
      effectiveEnglishLike,
    );
    const dark = colorScheme?.brightness === Brightness.light
      ? colorScheme.onSurface
      : colorScheme.surface;
    const light = colorScheme?.brightness === Brightness.light
      ? colorScheme.surface
      : colorScheme.onSurface;

    return base.copyWith({
      black: base.black.apply({
        displayColor: dark,
        bodyColor: dark,
        decorationColor: dark,
      }),
      white: base.white.apply({
        displayColor: light,
        bodyColor: light,
        decorationColor: light,
      }),
    });
  }

  private static withPlatform(
    platform: PlatformOSType,
    black: TextTheme | undefined,
    white: TextTheme | undefined,
    englishLike: TextTheme | undefined,
  ) {
    switch (platform) {
      case 'ios':
        black ||= Typography.blackCupertino;
        white ||= white || Typography.whiteCupertino;
        break;
      case 'android':
      default:
        black ||= Typography.blackMountainView;
        white ||= white || Typography.whiteMountainView;
        break;
    }

    return new Typography(platform, black!, white!, englishLike);
  }

  private constructor(
    public readonly platform: PlatformOSType | null,
    public readonly black: TextTheme,
    public readonly white: TextTheme,
    public readonly englishLike: TextTheme | undefined,
  ) {
  }

  copyWith(props: {
    platform?: PlatformOSType;
    black?: TextTheme;
    white?: TextTheme;
    englishLike?: TextTheme;
  }) {
    return new Typography(
      props.platform || this.platform,
      props.black || this.black,
      props.white || this.white,
      props.englishLike || this.englishLike,
    );
  }
}
