import React, { useState } from 'react';

import { Colors } from '@lib/material/colors';
import { kInkEasing } from '@lib/material/constants';
import { InkWell } from '@lib/material/ink-well';
import {
  MaterialStateProperty,
  MaterialStatesController,
} from '@lib/material/material-state';
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
  const [controller] = useState(() => MaterialStatesController([]));
  const { colorScheme } = useTheme();
  const primary = colorScheme.primary;
  const iconColor = colorScheme.onPrimaryContainer;
  const rippleColor = MaterialStateProperty.all(primary.withOpacity(0.5));
  const shadowDecoration = BoxDecoration({
    shadow: BoxShadow.elevated({
      color: Colors.black,
      depth: 6,
    }),
  });
  const iconSize = 24.0;
  const effectiveContainerSize = 56.0;

  return (
    <Padding padding={EdgeInsets.symmetric({ horizontal: 16 })}>
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
            statesController={controller}
            duration={600}
            easing={kInkEasing}
            rippleColor={rippleColor}
            onPress={onPressed}
          >
            <SizedBox
              width={effectiveContainerSize}
              height={effectiveContainerSize}
            >
              <Center>
                <IconTheme
                  data={IconThemeData({
                    size: iconSize,
                    color: iconColor,
                  })}
                >
                  {children}
                </IconTheme>
              </Center>
            </SizedBox>
          </InkWell>
        </DecoratedBox>
      </DecoratedBox>
    </Padding>
  );
};
