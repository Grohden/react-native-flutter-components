import type { PlatformOSType } from 'react-native';

import { TextStyle } from '@lib/painting';
import { Brightness } from '@lib/std-ui';
import { ColorScheme } from '../color-scheme';
import { Colors } from '../colors';
import { TextTheme } from '../text-theme';

// We, in theory should have two different fonts for iOS, I'm preserving
//  semantics with this consts
// Undefined to use San Francisco (which is hopefully the default?)
const sfUiDisplay = undefined;
const sfUiText = undefined;

export class Typography {
  static readonly blackMountainView = new TextTheme({
    displayLarge: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    displayMedium: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    displaySmall: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    headlineLarge: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    headlineMedium: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black54,
    }),
    headlineSmall: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.black87,
    }),
    titleLarge: new TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    titleMedium: new TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    titleSmall: new TextStyle({ fontFamily: 'Roboto', color: Colors.black }),
    bodyLarge: new TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    bodyMedium: new TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    bodySmall: new TextStyle({ fontFamily: 'Roboto', color: Colors.black54 }),
    labelLarge: new TextStyle({ fontFamily: 'Roboto', color: Colors.black87 }),
    labelMedium: new TextStyle({ fontFamily: 'Roboto', color: Colors.black }),
    labelSmall: new TextStyle({ fontFamily: 'Roboto', color: Colors.black }),
  });

  static readonly whiteMountainView = new TextTheme({
    displayLarge: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    displayMedium: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    displaySmall: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    headlineLarge: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    headlineMedium: new TextStyle({
      fontFamily: 'Roboto',
      color: Colors.white70,
    }),
    headlineSmall: new TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    titleLarge: new TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    titleMedium: new TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    titleSmall: new TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    bodyLarge: new TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    bodyMedium: new TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    bodySmall: new TextStyle({ fontFamily: 'Roboto', color: Colors.white70 }),
    labelLarge: new TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    labelMedium: new TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
    labelSmall: new TextStyle({ fontFamily: 'Roboto', color: Colors.white }),
  });

  static readonly whiteCupertino = new TextTheme({
    displayLarge: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    displayMedium: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    displaySmall: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    headlineLarge: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    headlineMedium: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white70,
    }),
    headlineSmall: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.white,
    }),
    titleLarge: new TextStyle({ fontFamily: sfUiDisplay, color: Colors.white }),
    titleMedium: new TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    titleSmall: new TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    bodyLarge: new TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    bodyMedium: new TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    bodySmall: new TextStyle({ fontFamily: sfUiText, color: Colors.white70 }),
    labelLarge: new TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    labelMedium: new TextStyle({ fontFamily: sfUiText, color: Colors.white }),
    labelSmall: new TextStyle({ fontFamily: sfUiText, color: Colors.white }),
  });

  static englishLike2021 = new TextTheme({
    displayLarge: new TextStyle({
      fontSize: 57.0,
      fontWeight: '400',
      letterSpacing: -0.25,
      height: 1.12,
    }),
    displayMedium: new TextStyle({
      fontSize: 45.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.16,
    }),
    displaySmall: new TextStyle({
      fontSize: 36.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.22,
    }),
    headlineLarge: new TextStyle({
      fontSize: 32.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.25,
    }),
    headlineMedium: new TextStyle({
      fontSize: 28.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.29,
    }),
    headlineSmall: new TextStyle({
      fontSize: 24.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.33,
    }),
    titleLarge: new TextStyle({
      fontSize: 22.0,
      fontWeight: '400',
      letterSpacing: 0.0,
      height: 1.27,
    }),
    titleMedium: new TextStyle({
      fontSize: 16.0,
      fontWeight: '500',
      letterSpacing: 0.15,
      height: 1.50,
    }),
    titleSmall: new TextStyle({
      fontSize: 14.0,
      fontWeight: '500',
      letterSpacing: 0.1,
      height: 1.43,
    }),
    labelLarge: new TextStyle({
      fontSize: 14.0,
      fontWeight: '500',
      letterSpacing: 0.1,
      height: 1.43,
    }),
    labelMedium: new TextStyle({
      fontSize: 12.0,
      fontWeight: '500',
      letterSpacing: 0.5,
      height: 1.33,
    }),
    labelSmall: new TextStyle({
      fontSize: 11.0,
      fontWeight: '500',
      letterSpacing: 0.5,
      height: 1.45,
    }),
    bodyLarge: new TextStyle({
      fontSize: 16.0,
      fontWeight: '400',
      letterSpacing: 0.5,
      height: 1.50,
    }),
    bodyMedium: new TextStyle({
      fontSize: 14.0,
      fontWeight: '400',
      letterSpacing: 0.25,
      height: 1.43,
    }),
    bodySmall: new TextStyle({
      fontSize: 12.0,
      fontWeight: '400',
      letterSpacing: 0.4,
      height: 1.33,
    }),
  });

  static readonly blackCupertino = new TextTheme({
    displayLarge: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    displayMedium: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    displaySmall: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    headlineLarge: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    headlineMedium: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black54,
    }),
    headlineSmall: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black87,
    }),
    titleLarge: new TextStyle({
      fontFamily: sfUiDisplay,
      color: Colors.black87,
    }),
    titleMedium: new TextStyle({ fontFamily: sfUiText, color: Colors.black87 }),
    titleSmall: new TextStyle({ fontFamily: sfUiText, color: Colors.black }),
    bodyLarge: new TextStyle({ fontFamily: sfUiText, color: Colors.black87 }),
    bodyMedium: new TextStyle({ fontFamily: sfUiText, color: Colors.black87 }),
    bodySmall: new TextStyle({ fontFamily: sfUiText, color: Colors.black54 }),
    labelLarge: new TextStyle({ fontFamily: sfUiText, color: Colors.black87 }),
    labelMedium: new TextStyle({ fontFamily: sfUiText, color: Colors.black }),
    labelSmall: new TextStyle({ fontFamily: sfUiText, color: Colors.black }),
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
      case 'android':
        black ||= Typography.blackMountainView;
        white ||= white || Typography.whiteMountainView;
        break;
      case 'ios':
        black ||= Typography.blackCupertino;
        white ||= white || Typography.whiteCupertino;
        break;
      default:
        throw `Platform not supported: ${platform}`;
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
