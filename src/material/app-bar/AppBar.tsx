import React, { useMemo } from 'react';

import { useAppBarTheme } from '@lib/material/app-bar-theme';
import { kToolbarHeight } from '@lib/material/constants';
import { IconButton } from '@lib/material/icon-button';
import {
  IconButtonTheme,
  useIconButtonTheme,
} from '@lib/material/icon-button-theme';
import { IconButtonThemeData } from '@lib/material/icon-button-theme-data';
import { useTheme } from '@lib/material/theme';
import type { ShapeBorder } from '@lib/painting';
import { BoxDecoration, TextStyle } from '@lib/painting';
import { BoxConstraints } from '@lib/rendering';
import type { Color, Double } from '@lib/std-ui';
import {
  Center,
  ConstrainedBox,
  Container,
  DefaultTextStyle,
  IconThemeData,
  MediaQuery,
  NavigationToolbar,
  SafeArea,
  useMediaQuery,
} from '@lib/widgets';

import { AppBarDefaultsM3 } from './_AppBarDefaultsM3';

const _kMaxTitleTextScaleFactor = 1.34;
const _kLeadingWidth = kToolbarHeight; // so its squared
const actions: any = [];

// https://m3.material.io/components/top-app-bar/specs
// we're for now just implementing the small top appbar
// https://m3.material.io/components/top-app-bar/specs#14e23895-ac2e-40d8-b0f7-8d016c10a225
export const AppBar = (props: {
  leadingAction?: React.ReactChild;
  leadingWidth?: Double;
  shape?: ShapeBorder;
  children?: React.ReactChild;
  centerTitle?: boolean;
  titleSpacing?: Double;
  toolbarHeight?: Double;
  foregroundColor?: Color;
  titleTextStyle?: TextStyle;
  toolbarTextStyle?: TextStyle;
  iconTheme?: IconThemeData;
}) => {
  const mediaQueryData = useMediaQuery();
  const theme = useTheme();
  const appBarTheme = useAppBarTheme();
  const iconButtonTheme = useIconButtonTheme();

  // FIXME: this is apparently inferred (probably based on actions)
  const effectiveCentered = useMemo(() => {
    const platformCenter = () => {
      switch (theme.platform) {
        case 'ios':
        case 'macos':
          return !actions || actions?.length < 2;
        // case 'fuchsia':
        // case 'linux':
        // case 'android':
        // case 'windows':
        default:
          return false;
      }
    };

    return props.centerTitle
      ?? theme.appBarTheme.centerTitle
      ?? platformCenter();
  }, [props.centerTitle, theme.appBarTheme.centerTitle, theme.platform]);

  const toolbarHeight = props.toolbarHeight ?? appBarTheme.toolbarHeight
    ?? kToolbarHeight;
  const defaults = AppBarDefaultsM3({
    colors: theme.colorScheme,
    textTheme: theme.textTheme,
  });
  const backgroundColor = appBarTheme.backgroundColor
    || defaults.backgroundColor;
  const foregroundColor = props.foregroundColor
    || appBarTheme.foregroundColor
    || defaults.foregroundColor!;

  const overallIconTheme = props.iconTheme
    || appBarTheme.iconTheme
    || defaults.iconTheme!.copyWith({ color: foregroundColor });

  // const toolbarTextStyle = props.toolbarTextStyle
  //   || appBarTheme.toolbarTextStyle
  //   || defaults.toolbarTextStyle?.copyWith({ color: foregroundColor });

  const titleTextStyle = props.titleTextStyle
    || appBarTheme.titleTextStyle
    || defaults.titleTextStyle?.copyWith({ color: foregroundColor });

  let title = props.children;
  if (title) {
    // title = _AppBarTitleBox({ child: title });
    title = (
      <DefaultTextStyle
        value={{
          style: titleTextStyle!,
          // softWrap: false,
          // overflow: TextOverflow.ellipsis,
        }}
      >
        {title}
      </DefaultTextStyle>
    );

    // Set maximum text scale factor to [_kMaxTitleTextScaleFactor] for the
    // title to keep the visual hierarchy the same even with larger font
    // sizes. To opt out, wrap the [title] widget in a [MediaQuery] widget
    // with [MediaQueryData.textScaleFactor] set to
    // `MediaQuery.textScaleFactorOf(context)`.
    title = (
      <MediaQuery
        data={mediaQueryData.copyWith({
          textScaleFactor: Math.min(
            mediaQueryData.textScaleFactor,
            _kMaxTitleTextScaleFactor,
          ),
        })}
      >
        {title}
      </MediaQuery>
    );
  }

  let leading = props.leadingAction;
  if (leading) {
    let effectiveIconButtonTheme: IconButtonThemeData;
    const leadingIconButtonStyle = IconButton.styleFrom({
      foregroundColor: overallIconTheme.color,
      iconSize: overallIconTheme.size,
    });

    effectiveIconButtonTheme = IconButtonThemeData({
      style: iconButtonTheme.style?.copyWith({
        foregroundColor: leadingIconButtonStyle.foregroundColor,
        overlayColor: leadingIconButtonStyle.overlayColor,
        iconSize: leadingIconButtonStyle.iconSize,
      }),
    });

    // FIXME: how to check instances?
    // child: leading is IconButton ? Center(child: leading) : leading,
    leading = (
      <IconButtonTheme
        data={effectiveIconButtonTheme}
      >
        <Center>{leading}</Center>
      </IconButtonTheme>
    );

    leading = (
      <ConstrainedBox
        constraints={BoxConstraints.tightFor({
          width: props.leadingWidth ?? _kLeadingWidth,
        })}
      >
        {leading}
      </ConstrainedBox>
    );
  }

  const toolbar = (
    <NavigationToolbar
      leading={leading}
      middle={title}
      trailing={actions}
      centerMiddle={effectiveCentered}
      middleSpacing={props.titleSpacing
        ?? appBarTheme.titleSpacing
        ?? NavigationToolbar.kMiddleSpacing}
    />
  );

  return (
    <Container boxDecoration={BoxDecoration({ color: backgroundColor })}>
      <SafeArea bottom={false}>
        <ConstrainedBox
          constraints={BoxConstraints.expand({ height: toolbarHeight })}
        >
          {toolbar}
        </ConstrainedBox>
      </SafeArea>
    </Container>
  );
};
