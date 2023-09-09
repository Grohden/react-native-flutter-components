import { createComponentContext } from '@lib/context';

import type { Color } from '@lib/std-ui';

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
