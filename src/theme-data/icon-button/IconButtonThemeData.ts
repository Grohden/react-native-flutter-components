import { createComponentContext } from '@lib/context';
import { Size } from '@lib/styles';
import type { Color } from '@lib/styles';

export type IconButtonTheme = {
  color: Color;
  containerSize: Size;
  size: number;
};

export const {
  Provider: IconButtonThemeData,
  useComponentContext: useIconButtonTheme,
} = createComponentContext({
  containerSize: Size.square(48),
  size: 24,
});
