import type { TextStyle } from '@lib/painting';
import type { Color, Double } from '@lib/std-ui';
import type { IconThemeData } from '@lib/widgets';

type AppBarThemeValues = {
  color?: Color;
  backgroundColor?: Color;
  foregroundColor?: Color;
  elevation?: Double;
  scrolledUnderElevation?: Double;
  shadowColor?: Color;
  surfaceTintColor?: Color;
  // ShapeBorder? shape,
  iconTheme?: IconThemeData;
  actionsIconTheme?: IconThemeData;
  centerTitle?: boolean;
  titleSpacing?: Double;
  toolbarHeight?: Double;
  toolbarTextStyle?: TextStyle;
  titleTextStyle?: TextStyle;
};

export type AppBarThemeData = AppBarThemeValues;

export const AppBarThemeData = (
  props: AppBarThemeValues = {},
): AppBarThemeData => {
  return props;
};
