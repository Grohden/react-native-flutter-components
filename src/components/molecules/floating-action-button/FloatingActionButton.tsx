import {
  Center,
  DecoratedBox,
  InkWell,
  Padding,
  SizedBox,
} from '@lib/components';
import {
  elevationTokens,
  lightColorTokens,
  motionTokens,
} from '@lib/design-tokens';
import type { Color } from '@lib/styles';
import {
  BorderRadius,
  BoxDecoration,
  BoxShadow,
  EdgeInsets,
} from '@lib/styles';
import { IconThemeData } from '@lib/theme-data';
import chroma from 'chroma-js';
import React, { Children } from 'react';
import { Easing } from 'react-native';

export const FloatingActionButton = ({ children, onPressed }: {
  onPressed: () => void;
  foregroundColor?: Color;
  backgroundColor?: Color;
  // shape: TODO: use proper shape,
  children: React.ReactChild;
}) => {
  const primary = chroma(lightColorTokens.primary);
  const iconColor = lightColorTokens.onPrimaryContainer;
  const rippleColor = primary.alpha(0.5).hex();
  const easing = Easing.bezier(...motionTokens.easing.emphasized);
  const shadowDecoration = BoxDecoration.new({
    shadow: BoxShadow.elevated({
      color: 'black',
      depth: elevationTokens.level3,
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
          boxDecoration={BoxDecoration.new({
            color: lightColorTokens.primaryContainer,
            borderRadius: BorderRadius.circular(16),
          })}
        >
          <InkWell
            duration={motionTokens.duration.long4}
            easing={easing}
            rippleColor={rippleColor}
            onPress={onPressed}
          >
            <SizedBox
              width={effectiveContainerSize}
              height={effectiveContainerSize}
            >
              <Center>
                <IconThemeData
                  value={{
                    size: iconSize,
                    color: iconColor,
                  }}
                >
                  {Children.only(children)}
                </IconThemeData>
              </Center>
            </SizedBox>
          </InkWell>
        </DecoratedBox>
      </DecoratedBox>
    </Padding>
  );
};
