import { createComponentContext } from '@lib/context';
import { lightColorTokens, typeScaleTokens } from '@lib/design-tokens';
import type { Color } from '@lib/styles';
import { Size } from '@lib/styles';
import type { IconButtonTheme } from './IconButtonThemeData';
import type { TextThemeData } from './TextThemeData';

export type TopAppBarThemeData = {
  insets: { top: number; bottom: number; left: number; right: number };
  headline: TextThemeData;
  icon: IconButtonTheme;
  container: { color: Color; colorOnScroll: string };
};

export const TopAppBarDataDefaults: TopAppBarThemeData = {
  insets: { top: 0, bottom: 0, left: 0, right: 0 },
  icon: {
    color: 'black',
    size: 24,
    containerSize: Size.square(48),
  },
  container: {
    color: lightColorTokens.surface,
    colorOnScroll: lightColorTokens.surfaceContainer,
  },
  headline: {
    color: lightColorTokens.onSurface,
    ...typeScaleTokens,
  },
};

export const {
  Provider: TopAppBarTheme,
  useComponentContext: useTopAppBarTheme,
} = createComponentContext<TopAppBarThemeData>(TopAppBarDataDefaults);
