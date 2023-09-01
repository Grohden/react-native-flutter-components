import { createComponentContext } from '@lib/context';
import { typeScaleTokens } from '@lib/design-tokens';
import type { TextStyle } from 'react-native';

export type TextThemeData = TextStyle;

export const TextThemeDataDefaults: TextThemeData = {
  color: 'black',
  ...typeScaleTokens.bodyMedium,
};

export const {
  Provider: TextTheme,
  useComponentContext: useTextTheme,
} = createComponentContext(TextThemeDataDefaults);
