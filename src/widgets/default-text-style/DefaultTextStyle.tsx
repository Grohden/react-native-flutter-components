import { createComponentContext } from '@lib/context';
import { TextStyle } from '@lib/painting';
import { Color } from '@lib/std-ui';

// FIXME: remove export, let people use material theme
export const {
  Provider: DefaultTextStyle,
  useComponentContext: useDefaultTextStyle,
} = createComponentContext({
  style: TextStyle({
    fontFamily: undefined,
    color: Color('#000000FF'),
  }),
});
