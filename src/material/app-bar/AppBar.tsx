import type { ReactNode } from 'react';
import React from 'react';

import { useAppBarTheme } from '@lib/material/app-bar-theme';
import { kToolbarHeight } from '@lib/material/constants';
import { useTheme } from '@lib/material/theme';
import {
  AlignmentDirectional,
  BoxDecoration,
  EdgeInsets,
  TextStyle,
} from '@lib/painting';
import { BoxConstraints, MainAxisSize } from '@lib/rendering';
import type { Color } from '@lib/std-ui';
import {
  Center,
  Container,
  DefaultTextStyle,
  IconTheme,
  Padding,
  Row,
  SizedBox,
  useMediaQuery,
} from '@lib/widgets';

import { AppBarDefaultsM3 } from './_AppBarDefaultsM3';

// https://m3.material.io/components/top-app-bar/specs
// we're for now just implementing the small top appbar
// https://m3.material.io/components/top-app-bar/specs#14e23895-ac2e-40d8-b0f7-8d016c10a225
export const AppBar = (props: {
  leadingAction?: ReactNode;
  children?: ReactNode;
  titleCentered?: boolean;
  toolbarHeight?: number;
  foregroundColor?: Color;
  titleTextStyle?: TextStyle;
  toolbarTextStyle?: TextStyle;
}) => {
  const insets = useMediaQuery().padding;
  const theme = useTheme();
  const appBarTheme = useAppBarTheme();

  // FIXME: this is apparently inferred (probably based on actions)
  const effectiveCentered = props.titleCentered ?? true;
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

  // const toolbarTextStyle = props.toolbarTextStyle
  //   || appBarTheme.toolbarTextStyle
  //   || defaults.toolbarTextStyle?.copyWith({ color: foregroundColor });

  const titleTextStyle = props.titleTextStyle
    || appBarTheme.titleTextStyle
    || defaults.titleTextStyle?.copyWith({ color: foregroundColor });

  let title = (
    <DefaultTextStyle value={{ style: titleTextStyle! }}>
      {props.children}
    </DefaultTextStyle>
  );

  if (props.leadingAction) {
    title = <Padding padding={EdgeInsets.only({ left: 16 })}>{title}</Padding>;
  }
  if (effectiveCentered) {
    title = <Center>{title}</Center>;
  }

  const hasIcons = !!props.leadingAction;

  return (
    <Container
      boxDecoration={BoxDecoration({
        color: backgroundColor,
      })}
    >
      <Padding padding={EdgeInsets.only({ top: insets.top })}>
        <Container
          constraints={BoxConstraints.expand({ height: toolbarHeight })}
          align={AlignmentDirectional.centerStart}
        >
          <IconTheme value={defaults.iconTheme!}>
            <Row mainAxisSize={MainAxisSize.max}>
              {hasIcons && (
                <SizedBox
                  width={defaults.iconTheme!.size}
                  height={defaults.iconTheme!.size}
                >
                  {props.leadingAction}
                </SizedBox>
              )}
              {title}
              {
                /*
                 * FIXME: this is not a proper solution.. we need to figure out
                 *  how to implement proper centering with the interference
                 *  of side containers
                 */
              }
              {hasIcons && (
                <SizedBox
                  width={defaults.iconTheme!.size}
                  height={defaults.iconTheme!.size}
                />
              )}
            </Row>
          </IconTheme>
        </Container>
      </Padding>
    </Container>
  );
};
