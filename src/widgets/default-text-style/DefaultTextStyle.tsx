import { createComponentContext } from '@lib/context';
import { TextStyle } from '@lib/painting';
import { Color } from '@lib/std-ui';

// FIXME: remove export, let people use material theme
export const {
  Provider: DefaultTextStyle,
  useComponentContext: useDefaultTextStyle,
} = createComponentContext({
  style: new TextStyle({
    fontFamily: undefined,
    color: Color('black'),
  }),
});
