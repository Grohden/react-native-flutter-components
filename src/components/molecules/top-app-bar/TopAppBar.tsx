import {
  Center,
  Column,
  Container,
  DecoratedBox,
  Expanded,
  Padding,
  Row,
} from '@lib/components';
import {
  CrossAxisAlignment,
  MainAxisAlignment,
  MainAxisSize,
} from '@lib/styles';
import {
  AlignmentDirectional,
  BoxConstraints,
  BoxDecoration,
  EdgeInsets,
  Size,
} from '@lib/styles';
import {
  IconButtonThemeData,
  TextTheme,
  useTopAppBarTheme,
} from '@lib/theme-data';
import type { ReactNode } from 'react';
import React from 'react';

// https://m3.material.io/components/top-app-bar/specs
// we're for now just implementing the small top appbar
// https://m3.material.io/components/top-app-bar/specs#14e23895-ac2e-40d8-b0f7-8d016c10a225
export const TopAppBar = (props: {
  leadingAction?: ReactNode;
  children?: ReactNode;
  centered?: boolean;
}) => {
  const { insets, container, icon, headline } = useTopAppBarTheme();

  let title = <TextTheme value={headline}>{props.children}</TextTheme>;
  if (props.centered) {
    title = <Center>{title}</Center>;
  } else if (!props.leadingAction) {
    title = <Padding padding={EdgeInsets.only({ left: 16 })}>{title}</Padding>;
  }

  const hasIcons = !!props.leadingAction;

  return (
    <DecoratedBox boxDecoration={BoxDecoration.new({ color: container.color })}>
      <Padding padding={EdgeInsets.only({ top: insets.top })}>
        <Container
          constraints={BoxConstraints.tight(Size.fromHeight(64))}
          align={AlignmentDirectional.center}
        >
          <IconButtonThemeData value={icon}>
            <Column
              mainAxisSize={MainAxisSize.max}
              mainAxisAlignment={MainAxisAlignment.center}
            >
              <Row
                mainAxisSize={MainAxisSize.max}
                crossAxisAlignment={CrossAxisAlignment.center}
              >
                {hasIcons && (
                  <Container
                    constraints={BoxConstraints.tight(Size.square(48))}
                  >
                    {props.leadingAction}
                  </Container>
                )}
                <Expanded>{title}</Expanded>
                {hasIcons && <Expanded />}
              </Row>
            </Column>
          </IconButtonThemeData>
        </Container>
      </Padding>
    </DecoratedBox>
  );
};
