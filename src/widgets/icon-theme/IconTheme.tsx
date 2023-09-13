import { createComponentContext } from '@lib/context';

import { IconThemeData } from '@lib/widgets/icon-theme-data';

export const {
  Provider: IconTheme,
  useComponentContext: useIconTheme,
} = createComponentContext(
  IconThemeData({
    size: 24,
  }),
);
