import { createComponentContext } from '@lib/context';
import type { Color } from '@lib/styles';

export type IconButtonTheme = {
  color: Color;
  containerSize: number;
  size: number;
};

export const IconButtonThemeDefaults = {
  containerSize: 48,
  size: 24,
};

export const {
  Provider: IconButtonThemeData,
  useComponentContext: useIconButtonTheme,
} = createComponentContext({
  containerSize: 48,
  size: 24,
});
