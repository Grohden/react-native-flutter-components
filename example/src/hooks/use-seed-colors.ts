import {
  Brightness,
  ColorScheme,
  ColorSwatch,
  ThemeData,
} from '@grohden/react-native-flutter-components';
import { useMemo } from 'react';

export const useSeedColors = (seed: ColorSwatch) =>
  useMemo(() => ({
    theme: ThemeData.new({
      colorScheme: ColorScheme.fromSeed({
        brightness: Brightness.light,
        seedColor: seed,
      }),
    }),
    darkTheme: ThemeData.new({
      colorScheme: ColorScheme.fromSeed({
        brightness: Brightness.dark,
        seedColor: seed,
      }),
    }),
  }), [seed]);
