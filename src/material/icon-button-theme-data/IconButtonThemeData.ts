import type { ButtonStyle } from '@lib/material/button-style';

export type IconButtonThemeData = {
  style?: ButtonStyle;
};

export const IconButtonThemeData = (
  data: IconButtonThemeData = {},
): IconButtonThemeData => data;
