import type { TextStyle as RNTextStyle } from 'react-native';

import type { Color } from '@lib/std-ui';

export type TextStyleProps = {
  color?: Color;
  fontFamily?: RNTextStyle['fontFamily'];
  fontSize?: RNTextStyle['fontSize'];
  fontWeight?: RNTextStyle['fontWeight'];
  letterSpacing?: RNTextStyle['letterSpacing'];
  height?: RNTextStyle['lineHeight'];
  decoration?: RNTextStyle['textDecorationLine'];
  decorationColor?: Color;
  decorationStyle?: RNTextStyle['textDecorationStyle'];
};

export type TextStyle = TextStyleProps & {
  apply: (props: {
    fontFamily?: string;
    color?: Color;
    foreground?: Color;
    decoration?: RNTextStyle['textDecorationLine'];
    decorationColor?: Color;
    decorationStyle?: RNTextStyle['textDecorationStyle'];
    fontSizeFactor?: number;
    fontSizeDelta?: number;
    letterSpacingFactor?: number;
    letterSpacingDelta?: number;
    heightFactor?: number;
    heightDelta?: number;
  }) => TextStyle;
  copyWith: (other: Partial<TextStyleProps>) => TextStyle;
  toStyle: () => RNTextStyle;
  merge: (other: TextStyle | undefined) => TextStyle;
};

export const TextStyle = (props: TextStyleProps): TextStyle => ({
  ...props,
  apply({
    fontFamily,
    color,
    foreground,
    decoration,
    decorationColor,
    decorationStyle,
    fontSizeFactor = 1.0,
    fontSizeDelta = 0.0,
    letterSpacingFactor = 1.0,
    letterSpacingDelta = 0.0,
    heightFactor = 1.0,
    heightDelta = 0.0,
  }) {
    return TextStyle({
      color: !foreground ? color || this.color : undefined,
      fontFamily: fontFamily || this.fontFamily,
      fontSize: !this.fontSize
        ? undefined
        : this.fontSize * fontSizeFactor + fontSizeDelta,
      // FIXME: will need to solve weight delta
      // fontWeight: fontWeight == null ? null : FontWeight.values[(fontWeight!.index + fontWeightDelta).clamp(0, FontWeight.values.length - 1)], // ignore_clamp_double_lint
      fontWeight: this.fontWeight,
      letterSpacing: !this.letterSpacing
        ? undefined
        : this.letterSpacing * letterSpacingFactor + letterSpacingDelta,
      height: !this.height
        ? undefined
        : this.height * heightFactor + heightDelta,
      decoration: decoration || this.decoration,
      decorationStyle: decorationStyle || this.decorationStyle,
      decorationColor: decorationColor || this.decorationColor,
    });
  },
  copyWith(other) {
    return TextStyle({
      color: other.color || this.color,
      fontFamily: other.fontFamily || this.fontFamily,
      fontWeight: other.fontWeight || this.fontWeight,
      fontSize: other.fontSize ?? this.fontSize,
      letterSpacing: other.letterSpacing ?? this.letterSpacing,
      height: other.height ?? this.height,
      decoration: other.decoration || this.decoration,
      decorationColor: other.decorationColor || this.decorationColor,
      decorationStyle: other.decorationStyle || this.decorationStyle,
    });
  },
  merge(other) {
    if (!other) {
      return this;
    }

    return this.copyWith(other);
  },
  toStyle() {
    return {
      color: this.color?.hex(),
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      fontWeight: this.fontWeight,
      lineHeight: this.fontSize && this.height
        ? this.fontSize * this.height
        : undefined,
      letterSpacing: this.letterSpacing,
      textDecorationLine: this.decoration,
      textDecorationColor: this.decorationColor?.hex(),
      textDecorationStyle: this.decorationStyle,
    };
  },
});
