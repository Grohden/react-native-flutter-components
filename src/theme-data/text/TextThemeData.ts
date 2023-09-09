import type { TextStyle } from 'react-native';

import { createComponentContext } from '@lib/context';
import { typeScaleTokens } from '@lib/design-tokens';

export type TextThemeData = TextStyle;

export const TextThemeDataDefaults: TextThemeData = {
  color: 'black',
  ...typeScaleTokens.bodyMedium,
};

export const {
  Provider: TextTheme,
  useComponentContext: useTextTheme,
} = createComponentContext(TextThemeDataDefaults);
