import React, { useMemo } from 'react';

import { ButtonStyle } from '@lib/material/button-style';
import { ButtonStyleButton } from '@lib/material/button-style-button';
import { ColorScheme } from '@lib/material/color-scheme';
import { Colors } from '@lib/material/colors';
import {
  kDefaultIconDarkColor,
  kDefaultIconLightColor,
  kThemeChangeDuration,
} from '@lib/material/constants';
import { useIconButtonTheme } from '@lib/material/icon-button-theme';
import {
  MaterialState,
  MaterialStateProperty,
} from '@lib/material/material-state';
import { useTheme } from '@lib/material/theme';
import { EdgeInsets } from '@lib/painting';
import { Brightness, Color, Size } from '@lib/std-ui';
import { IconThemeData, Semantics, useIconTheme } from '@lib/widgets';

import { IconButton, VisualDensity } from '@lib/material';
import type { IconButtonVariant } from './_IconButtonVariant';

export const IconButtonM3 = ({
  style,
  autofocus,
  onPress,
  toggleable,
  isSelected,
  // variant,
  children,
}: {
  style?: ButtonStyle;
  autofocus?: boolean;
  onPress?: () => void;
  toggleable?: boolean;
  isSelected?: boolean;
  variant: IconButtonVariant;
  children: React.ReactChild;
}) => {
  const theme = useTheme();
  const isDark = theme.brightness === Brightness.dark;
  const iconTheme = useIconTheme();
  const iconButtonTheme = useIconButtonTheme();

  const defaultStyle = useMemo(() => {
    // TODO: implement variants
    return IconButtonDefaultsM3({ colors: theme.colorScheme }, toggleable);
  }, [theme.colorScheme, toggleable]);

  const themeStyle = useMemo(() => {
    const isIconThemeDefault = (color: Color | undefined) => {
      if (isDark) {
        return color === kDefaultIconLightColor;
      }
      return color === kDefaultIconDarkColor;
    };

    const isDefaultColor = isIconThemeDefault(iconTheme.color);
    const isDefaultSize = iconTheme.size === IconThemeData.fallback().size;

    const iconThemeStyle = IconButton.styleFrom({
      foregroundColor: isDefaultColor ? undefined : iconTheme.color,
      iconSize: isDefaultSize ? undefined : iconTheme.size,
    });

    return iconButtonTheme.style?.merge(iconThemeStyle)
      ?? iconThemeStyle;
  }, [iconButtonTheme.style, iconTheme.color, iconTheme.size, isDark]);

  return (
    <ButtonStyleButton
      style={style}
      themeStyle={themeStyle}
      defaultStyle={defaultStyle}
      // statesController={statesController}
      autofocus={autofocus}
      // focusNode={focusNode}
      onPress={onPress}
    >
      <Semantics isSelected={isSelected}>
        {children}
      </Semantics>
    </ButtonStyleButton>
  );
};

const IconButtonDefaultsM3 = (
  { colors }: { colors: ColorScheme },
  _toggleable: boolean | undefined,
): ButtonStyle =>
  ButtonStyle({
    animationDuration: kThemeChangeDuration,
    get backgroundColor() {
      return MaterialStateProperty.all(Colors.transparent);
    },
    get foregroundColor(): MaterialStateProperty<Color | undefined> {
      return {
        resolve: (states) => {
          if (states.has(MaterialState.disabled)) {
            return colors.onSurface.withOpacity(0.38);
          }
          if (states.has(MaterialState.selected)) {
            return colors.primary;
          }

          return colors.onSurfaceVariant;
        },
      };
    },
    get overlayColor(): MaterialStateProperty<Color | undefined> {
      return {
        resolve: (states) => {
          if (states.has(MaterialState.selected)) {
            if (states.has(MaterialState.pressed)) {
              return colors.primary.withOpacity(0.12);
            }
            if (states.has(MaterialState.hovered)) {
              return colors.primary.withOpacity(0.08);
            }
            if (states.has(MaterialState.focused)) {
              return colors.primary.withOpacity(0.12);
            }
          }
          if (states.has(MaterialState.pressed)) {
            return colors.onSurfaceVariant.withOpacity(0.12);
          }
          if (states.has(MaterialState.hovered)) {
            return colors.onSurfaceVariant.withOpacity(0.08);
          }
          if (states.has(MaterialState.focused)) {
            return colors.onSurfaceVariant.withOpacity(0.12);
          }

          return Colors.transparent;
        },
      };
    },
    get elevation() {
      return MaterialStateProperty.all(0);
    },
    get shadowColor() {
      return MaterialStateProperty.all(Colors.transparent);
    },
    get surfaceTintColor() {
      return MaterialStateProperty.all(Colors.transparent);
    },
    get padding() {
      return MaterialStateProperty.all(EdgeInsets.all(8));
    },
    get minimumSize() {
      return MaterialStateProperty.all(Size(40.0, 40.0));
    },
    // No default fixedSize
    get maximumSize() {
      return MaterialStateProperty.all(Size.infinite);
    },

    get iconSize() {
      return MaterialStateProperty.all(24.0);
    },
    side: undefined,
    // get shape() {
    //   return MaterialStateProperty.all(StadiumBorder());
    // },
    get visualDensity() {
      return VisualDensity.standard;
    },
  });
