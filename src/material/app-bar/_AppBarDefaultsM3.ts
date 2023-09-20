import { AppBarThemeData } from '@lib/material/app-bar-theme-data';
import { ColorScheme } from '@lib/material/color-scheme';
import { Colors } from '@lib/material/colors';
import { TextTheme } from '@lib/material/text-theme';
import { IconThemeData, NavigationToolbar } from '@lib/widgets';

export const AppBarDefaultsM3 = (props: {
  colors: ColorScheme;
  textTheme: TextTheme;
}): AppBarThemeData =>
  AppBarThemeData({
    elevation: 0.0,
    scrolledUnderElevation: 3.0,
    titleSpacing: NavigationToolbar.kMiddleSpacing,
    toolbarHeight: 64.0,
    // FIXME: this is .surface
    //  but maybe material state makes it use the this value
    //  (at least the counter app results in inv primary it seems)
    backgroundColor: props.colors.inversePrimary,
    foregroundColor: props.colors.onSurface,
    shadowColor: Colors.transparent,
    surfaceTintColor: props.colors.surfaceTint,
    iconTheme: IconThemeData({
      color: props.colors.onSurface,
      size: 24.0,
    }),
    actionsIconTheme: IconThemeData({
      color: props.colors.onSurfaceVariant,
      size: 24.0,
    }),
    toolbarTextStyle: props.textTheme.bodyMedium,
    titleTextStyle: props.textTheme.titleLarge,
  });
