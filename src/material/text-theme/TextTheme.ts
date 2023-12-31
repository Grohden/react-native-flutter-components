import type { TextStyle, TextStyleProps } from '@lib/painting';
import type { Color } from '@lib/std-ui';

type TextThemeProps = {
  displayLarge?: TextStyle;
  displayMedium?: TextStyle;
  displaySmall?: TextStyle;
  headlineLarge?: TextStyle;
  headlineMedium?: TextStyle;
  headlineSmall?: TextStyle;
  titleLarge?: TextStyle;
  titleMedium?: TextStyle;
  titleSmall?: TextStyle;
  labelLarge?: TextStyle;
  labelMedium?: TextStyle;
  labelSmall?: TextStyle;
  bodyLarge?: TextStyle;
  bodyMedium?: TextStyle;
  bodySmall?: TextStyle;
};

export type TextTheme = TextThemeProps & {
  apply: (props: {
    displayColor?: Color;
    bodyColor?: Color;
    fontFamily?: TextStyleProps['fontFamily'];
    decoration?: TextStyleProps['decoration'];
    decorationColor?: Color;
    decorationStyle?: TextStyleProps['decorationStyle'];
    fontSizeFactor?: number;
    fontSizeDelta?: number;
  }) => TextTheme;
  copyWith: (other: Partial<TextThemeProps>) => TextTheme;
  merge: (other: TextTheme | undefined) => TextTheme;
};

export const TextTheme = (props: TextThemeProps): TextTheme => ({
  ...props,
  apply({
    displayColor,
    bodyColor,
    fontFamily,
    decoration,
    decorationStyle,
    decorationColor,
    fontSizeFactor,
    fontSizeDelta,
  }) {
    return TextTheme({
      displayLarge: this.displayLarge?.apply({
        color: displayColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      displayMedium: this.displayMedium?.apply({
        color: displayColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      displaySmall: this.displaySmall?.apply({
        color: displayColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      headlineLarge: this.headlineLarge?.apply({
        color: displayColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      headlineMedium: this.headlineMedium?.apply({
        color: displayColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      headlineSmall: this.headlineSmall?.apply({
        color: bodyColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      titleLarge: this.titleLarge?.apply({
        color: bodyColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      titleMedium: this.titleMedium?.apply({
        color: bodyColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      titleSmall: this.titleSmall?.apply({
        color: bodyColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      bodyLarge: this.bodyLarge?.apply({
        color: bodyColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      bodyMedium: this.bodyMedium?.apply({
        color: bodyColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      bodySmall: this.bodySmall?.apply({
        color: displayColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      labelLarge: this.labelLarge?.apply({
        color: bodyColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      labelMedium: this.labelMedium?.apply({
        color: bodyColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
      labelSmall: this.labelSmall?.apply({
        color: bodyColor,
        decoration: decoration,
        decorationColor: decorationColor,
        decorationStyle: decorationStyle,
        fontFamily: fontFamily,
        fontSizeFactor: fontSizeFactor,
        fontSizeDelta: fontSizeDelta,
      }),
    });
  },
  copyWith(other) {
    return TextTheme({
      bodyLarge: other.bodyLarge || this.bodyLarge,
      bodyMedium: other.bodyMedium || this.bodyMedium,
      bodySmall: other.bodySmall || this.bodySmall,
      displayLarge: other.displayLarge || this.displayLarge,
      displayMedium: other.displayMedium || this.displayMedium,
      displaySmall: other.displaySmall || this.displaySmall,
      headlineLarge: other.headlineLarge || this.headlineLarge,
      headlineMedium: other.headlineMedium || this.headlineMedium,
      headlineSmall: other.headlineSmall || this.headlineSmall,
      labelLarge: other.labelLarge || this.labelLarge,
      labelMedium: other.labelMedium || this.labelMedium,
      labelSmall: other.labelSmall || this.labelSmall,
      titleLarge: other.titleLarge || this.titleLarge,
      titleMedium: other.titleMedium || this.titleMedium,
      titleSmall: other.titleSmall || this.titleSmall,
    });
  },
  merge(other) {
    if (!other) {
      return this;
    }

    return this.copyWith({
      displayLarge: this.displayLarge?.merge(other.displayLarge)
        || other.displayLarge,
      displayMedium: this.displayMedium?.merge(other.displayMedium)
        || other.displayMedium,
      displaySmall: this.displaySmall?.merge(other.displaySmall)
        || other.displaySmall,
      headlineLarge: this.headlineLarge?.merge(other.headlineLarge)
        || other.headlineLarge,
      headlineMedium: this.headlineMedium?.merge(other.headlineMedium)
        || other.headlineMedium,
      headlineSmall: this.headlineSmall?.merge(other.headlineSmall)
        || other.headlineSmall,
      titleLarge: this.titleLarge?.merge(other.titleLarge)
        || other.titleLarge,
      titleMedium: this.titleMedium?.merge(other.titleMedium)
        || other.titleMedium,
      titleSmall: this.titleSmall?.merge(other.titleSmall)
        || other.titleSmall,
      bodyLarge: this.bodyLarge?.merge(other.bodyLarge)
        || other.bodyLarge,
      bodyMedium: this.bodyMedium?.merge(other.bodyMedium)
        || other.bodyMedium,
      bodySmall: this.bodySmall?.merge(other.bodySmall)
        || other.bodySmall,
      labelLarge: this.labelLarge?.merge(other.labelLarge)
        || other.labelLarge,
      labelMedium: this.labelMedium?.merge(other.labelMedium)
        || other.labelMedium,
      labelSmall: this.labelSmall?.merge(other.labelSmall)
        || other.labelSmall,
    });
  },
});
