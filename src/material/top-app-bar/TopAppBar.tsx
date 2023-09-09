import type { ReactNode } from 'react';
import React from 'react';

import { AlignmentDirectional, BoxDecoration, EdgeInsets } from '@lib/painting';
import { BoxConstraints, MainAxisSize } from '@lib/rendering';
import {
  IconButtonThemeData,
  TextTheme,
  useTopAppBarTheme,
} from '@lib/theme-data';
import { Center, Container, Padding, Row, SizedBox } from '@lib/widgets';

// https://m3.material.io/components/top-app-bar/specs
// we're for now just implementing the small top appbar
// https://m3.material.io/components/top-app-bar/specs#14e23895-ac2e-40d8-b0f7-8d016c10a225
export const TopAppBar = (props: {
  leadingAction?: ReactNode;
  children?: ReactNode;
  titleCentered?: boolean;
}) => {
  // FIXME: this is apparently inferred (probably based on actions)
  const effectiveCentered = props.titleCentered ?? true;
  const { insets, container, icon, headline } = useTopAppBarTheme();

  let title = <TextTheme value={headline}>{props.children}</TextTheme>;
  if (props.leadingAction) {
    title = <Padding padding={EdgeInsets.only({ left: 16 })}>{title}</Padding>;
  }
  if (effectiveCentered) {
    title = <Center>{title}</Center>;
  }

  const hasIcons = !!props.leadingAction;

  return (
    <Container
      boxDecoration={BoxDecoration.new({ color: container.colorOnScroll })}
    >
      <Padding padding={EdgeInsets.only({ top: insets.top })}>
        <Container
          constraints={BoxConstraints.expand({ height: 64 })}
          align={AlignmentDirectional.centerStart}
        >
          <IconButtonThemeData value={icon}>
            <Row mainAxisSize={MainAxisSize.max}>
              {hasIcons && (
                <SizedBox
                  width={icon.containerSize}
                  height={icon.containerSize}
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
                  width={icon.containerSize}
                  height={icon.containerSize}
                />
              )}
            </Row>
          </IconButtonThemeData>
        </Container>
      </Padding>
    </Container>
  );
};
