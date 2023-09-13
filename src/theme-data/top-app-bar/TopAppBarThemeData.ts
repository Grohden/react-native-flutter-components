import { createComponentContext } from '@lib/context';
import { lightColorTokens, typeScaleTokens } from '@lib/design-tokens';
import type { IconButtonTheme } from '../icon-button';
import type { TextThemeData } from '../text';

import { Color } from '@lib/std-ui';

export type TopAppBarThemeData = {
  insets: { top: number; bottom: number; left: number; right: number };
  headline: TextThemeData;
  icon: IconButtonTheme;
  container: { color: Color; colorOnScroll: Color };
};

export const TopAppBarDataDefaults: TopAppBarThemeData = {
  insets: { top: 0, bottom: 0, left: 0, right: 0 },
  icon: {
    color: Color('black'),
    containerSize: 48,
    size: 24,
  },
  container: {
    color: lightColorTokens.surface,
    colorOnScroll: lightColorTokens.surfaceContainer,
  },
  headline: {
    color: lightColorTokens.onSurface.hex(),
    ...typeScaleTokens.titleLarge,
  },
};

export const {
  Provider: TopAppBarTheme,
  useComponentContext: useTopAppBarTheme,
} = createComponentContext<TopAppBarThemeData>(TopAppBarDataDefaults);
