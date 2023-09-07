import { createComponentContext } from '@lib/context';
import type { Color } from '@lib/styles';

export type IconTheme = {
  color: Color;
  size: number;
};

export const {
  Provider: IconThemeData,
  useComponentContext: useIconTheme,
} = createComponentContext({
  color: 'black',
  size: 24,
});
