import React from 'react';

import { ButtonStyle } from '@lib/material/button-style';
import { ButtonStyleButton } from '@lib/material/button-style-button';
import type { MaterialStateProperty } from '@lib/material/material-state';
import { MaterialState } from '@lib/material/material-state';
import type { VisualDensity } from '@lib/material/theme-data';
import {
  AlignmentGeometry,
  BorderSide,
  EdgeInsetsGeometry,
} from '@lib/painting';
import type { Color, Size } from '@lib/std-ui';

import { IconButtonM3 } from './_IconButtonM3';
import { IconButtonVariant } from './_IconButtonVariant';

export const IconButton = ({
  children,
  onPress,
  style,
  autofocus = false,
  variant = IconButtonVariant.standard,
}: {
  onPress: () => void;
  children: React.ReactChild;
  style?: ButtonStyle;
  autofocus?: boolean;
  variant?: IconButtonVariant;
}) => (
  <IconButtonM3
    // statesController{statesController}
    style={style}
    autofocus={autofocus}
    // focusNode={widget.focusNode}
    onPress={onPress}
    variant={variant}
  >
    {children}
  </IconButtonM3>
);

IconButton.styleFrom = (props: {
  foregroundColor?: Color;
  backgroundColor?: Color;
  disabledForegroundColor?: Color;
  disabledBackgroundColor?: Color;
  focusColor?: Color;
  hoverColor?: Color;
  highlightColor?: Color;
  shadowColor?: Color;
  surfaceTintColor?: Color;
  elevation?: number;
  minimumSize?: Size;
  fixedSize?: Size;
  maximumSize?: Size;
  iconSize?: number;
  side?: BorderSide;
  // shape: OutlinedBorder | undefined,
  padding?: EdgeInsetsGeometry;
  // enabledMouseCursor: MouseCursor | undefined,
  // disabledMouseCursor: MouseCursor | undefined,
  visualDensity?: VisualDensity;
  // tapTargetSize: MaterialTapTargetSize | undefined;
  // animationDuration: Duration | undefined;
  enableFeedback?: boolean;
  alignment?: AlignmentGeometry;
  // splashFactory: InteractiveInkFeatureFactory | undefined,
}) => {
  const buttonBackgroundColor =
    (!props.backgroundColor && !props.disabledBackgroundColor)
      ? undefined
      : IconButtonDefaultBackground(
        props.backgroundColor,
        props.disabledBackgroundColor,
      );
  const buttonForegroundColor =
    (!props.foregroundColor && !props.disabledForegroundColor)
      ? undefined
      : IconButtonDefaultForeground(
        props.foregroundColor,
        props.disabledForegroundColor,
      );
  const overlayColor =
    (!props.foregroundColor && !props.hoverColor && !props.focusColor
        && !props.highlightColor)
      ? undefined
      : IconButtonDefaultOverlay(
        props.foregroundColor,
        props.focusColor,
        props.hoverColor,
        props.highlightColor,
      );
  // const mouseCursor = _IconButtonDefaultMouseCursor(
  //   props.enabledMouseCursor,
  //   props.disabledMouseCursor,
  // );

  return ButtonStyle({
    backgroundColor: buttonBackgroundColor,
    foregroundColor: buttonForegroundColor,
    overlayColor: overlayColor,
    shadowColor: ButtonStyleButton.allOrNull(props.shadowColor),
    surfaceTintColor: ButtonStyleButton.allOrNull(props.surfaceTintColor),
    elevation: ButtonStyleButton.allOrNull(props.elevation),
    padding: ButtonStyleButton.allOrNull(props.padding),
    minimumSize: ButtonStyleButton.allOrNull(props.minimumSize),
    fixedSize: ButtonStyleButton.allOrNull(props.fixedSize),
    maximumSize: ButtonStyleButton.allOrNull(props.maximumSize),
    iconSize: ButtonStyleButton.allOrNull(props.iconSize),
    side: ButtonStyleButton.allOrNull(props.side),
    // shape: ButtonStyleButton.allOrNull<OutlinedBorder>(shape),
    // mouseCursor: mouseCursor,
    visualDensity: props.visualDensity,
    // tapTargetSize: props.tapTargetSize,
    // animationDuration: props.animationDuration,
    // enableFeedback: props.enableFeedback,
    alignment: props.alignment,
    // splashFactory: props.splashFactory,
  });
};

const IconButtonDefaultBackground = (
  background: Color | undefined,
  disabledBackground: Color | undefined,
): MaterialStateProperty<Color | undefined> => ({
  resolve: (states) => {
    if (states.has(MaterialState.disabled)) {
      return disabledBackground;
    }

    return background;
  },
});

const IconButtonDefaultForeground = (
  foregroundColor: Color | undefined,
  disabledForegroundColor: Color | undefined,
): MaterialStateProperty<Color | undefined> => ({
  resolve: (states) => {
    if (states.has(MaterialState.disabled)) {
      return disabledForegroundColor;
    }

    return foregroundColor;
  },
});

const IconButtonDefaultOverlay = (
  foregroundColor: Color | undefined,
  focusColor: Color | undefined,
  hoverColor: Color | undefined,
  highlightColor: Color | undefined,
): MaterialStateProperty<Color | undefined> => ({
  resolve: (states) => {
    if (states.has(MaterialState.selected)) {
      if (states.has(MaterialState.pressed)) {
        return highlightColor ?? foregroundColor?.withOpacity(0.12);
      }
      if (states.has(MaterialState.hovered)) {
        return hoverColor ?? foregroundColor?.withOpacity(0.08);
      }
      if (states.has(MaterialState.focused)) {
        return focusColor ?? foregroundColor?.withOpacity(0.12);
      }
    }
    if (states.has(MaterialState.pressed)) {
      return highlightColor ?? foregroundColor?.withOpacity(0.12);
    }
    if (states.has(MaterialState.hovered)) {
      return hoverColor ?? foregroundColor?.withOpacity(0.08);
    }
    if (states.has(MaterialState.focused)) {
      return focusColor ?? foregroundColor?.withOpacity(0.08);
    }

    return undefined;
  },
});
