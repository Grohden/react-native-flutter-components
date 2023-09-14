import React, { Children } from 'react';
import { Easing } from 'react-native';

import { InkWell } from '@lib/material/ink-well';
import { useTheme } from '@lib/material/theme';
import {
  BorderRadius,
  BoxDecoration,
  BoxShadow,
  EdgeInsets,
} from '@lib/painting';
import { Color } from '@lib/std-ui';
import {
  Center,
  DecoratedBox,
  IconTheme,
  IconThemeData,
  Padding,
  SizedBox,
} from '@lib/widgets';

export const FloatingActionButton = ({ children, onPressed }: {
  onPressed: () => void;
  foregroundColor?: Color;
  backgroundColor?: Color;
  // shape: TODO: use proper shape,
  children: React.ReactChild;
}) => {
  const { colorScheme } = useTheme();
  const primary = colorScheme.primary;
  const iconColor = colorScheme.onPrimaryContainer;
  const rippleColor = primary.withAlpha(0.5);
  const easing = Easing.bezier(0.2, 0, 0, 1);
  const shadowDecoration = BoxDecoration({
    shadow: BoxShadow.elevated({
      color: Color('black'),
      depth: 6,
    }),
  });
  const iconSize = 24;
  const effectiveContainerSize = 56;

  return (
    <Padding padding={EdgeInsets.only({ left: 16, right: 16 })}>
      <DecoratedBox
        boxDecoration={shadowDecoration}
      >
        <DecoratedBox
          clipsChildren
          boxDecoration={BoxDecoration({
            color: colorScheme.primaryContainer,
            borderRadius: BorderRadius.circular(16),
          })}
        >
          <InkWell
            duration={600}
            easing={easing}
            rippleColor={rippleColor}
            onPress={onPressed}
          >
            <SizedBox
              width={effectiveContainerSize}
              height={effectiveContainerSize}
            >
              <Center>
                <IconTheme
                  value={IconThemeData({
                    size: iconSize,
                    color: iconColor,
                  })}
                >
                  {Children.only(children)}
                </IconTheme>
              </Center>
            </SizedBox>
          </InkWell>
        </DecoratedBox>
      </DecoratedBox>
    </Padding>
  );
};
