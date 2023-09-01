// https://m3.material.io/styles/typography/type-scale-tokens

import { Platform } from 'react-native';
import type { TextStyle } from 'react-native';

export type TypeScaleTokens = {
  displayLarge: TextStyle;
  displayMedium: TextStyle;
  displaySmall: TextStyle;
  headlineLarge: TextStyle;
  headlineMedium: TextStyle;
  headlineSmall: TextStyle;
  titleLarge: TextStyle;
  titleMedium: TextStyle;
  titleSmall: TextStyle;
  labelLarge: TextStyle;
  labelMedium: TextStyle;
  labelSmall: TextStyle;
  bodyLarge: TextStyle;
  bodyMedium: TextStyle;
  bodySmall: TextStyle;
};

const font = Platform.OS === 'ios' ? undefined : 'Roboto';

export const typeScaleTokens = {
  displayLarge: {
    fontFamily: font,
    lineHeight: 64,
    fontSize: 57,
    letterSpacing: -0.25,
    fontWeight: '400',
  },
  displayMedium: {
    fontFamily: font,
    lineHeight: 52,
    fontSize: 45,
    letterSpacing: 0,
    fontWeight: '400',
  },
  displaySmall: {
    fontFamily: font,
    lineHeight: 44,
    fontSize: 36,
    letterSpacing: 0,
    fontWeight: '400',
  },
  headlineLarge: {
    fontFamily: font,
    lineHeight: 40,
    fontSize: 32,
    letterSpacing: 0,
    fontWeight: '400',
  },
  headlineMedium: {
    fontFamily: font,
    lineHeight: 36,
    fontSize: 28,
    letterSpacing: 0,
    fontWeight: '400',
  },
  headlineSmall: {
    fontFamily: font,
    lineHeight: 32,
    fontSize: 24,
    letterSpacing: 0,
    fontWeight: '400',
  },
  titleLarge: {
    fontFamily: font,
    lineHeight: 28,
    fontSize: 22,
    letterSpacing: 0,
    fontWeight: '400',
  },
  titleMedium: {
    fontFamily: font,
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeight: '500',
  },
  titleSmall: {
    fontFamily: font,
    lineHeight: 20,
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: '500',
  },
  labelLarge: {
    fontFamily: font,
    lineHeight: 20,
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: '500',
  },
  labelMedium: {
    fontFamily: font,
    lineHeight: 16,
    fontSize: 12,
    letterSpacing: 0.5,
    fontWeight: '500',
  },
  labelSmall: {
    fontFamily: font,
    lineHeight: 16,
    fontSize: 11,
    letterSpacing: 0.5,
    fontWeight: '500',
  },
  bodyLarge: {
    fontFamily: font,
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: '400',
  },
  bodyMedium: {
    fontFamily: font,
    lineHeight: 20,
    fontSize: 14,
    letterSpacing: 0.25,
    fontWeight: '400',
  },
  bodySmall: {
    fontFamily: font,
    lineHeight: 16,
    fontSize: 12,
    letterSpacing: 0.4,
    fontWeight: '400',
  },
} satisfies TypeScaleTokens;
