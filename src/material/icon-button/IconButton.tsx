import React, { Children, useMemo } from 'react';
import { Easing } from 'react-native';

import { lightColorTokens, motionTokens } from '@lib/design-tokens';
import { Colors } from '@lib/material/colors';
import { InkWell } from '@lib/material/ink-well';
import { BorderRadius, BoxDecoration } from '@lib/painting';
import { useIconButtonTheme } from '@lib/theme-data';
import {
  Center,
  DecoratedBox,
  IconTheme,
  IconThemeData,
  SizedBox,
} from '@lib/widgets';

export const IconButton = ({ children, containerSize, size, onPressed }: {
  onPressed: () => void;
  children: React.ReactChild;
  containerSize?: number;
  size?: number;
}) => {
  const theme = useIconButtonTheme();
  const { easing, iconColor, rippleColor } = useMemo(() => {
    const primary = lightColorTokens.primary;

    return {
      easing: Easing.bezier(...motionTokens.easing.emphasized),
      iconColor: primary.luminance() < 0.5 ? Colors.black : Colors.white,
      rippleColor: primary.withAlpha(0.5),
    };
  }, []);

  const effectiveSize = size ?? theme.size;
  const effectiveContainerSize = containerSize ?? theme.containerSize;

  // FIXME: we prob need a theme for each token kind
  // FIXME: need to review ripple duration
  return (
    <DecoratedBox
      clipsChildren
      boxDecoration={BoxDecoration.new({
        borderRadius: BorderRadius.circular(effectiveContainerSize),
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
            <IconTheme
              value={IconThemeData({
                size: effectiveSize,
                color: iconColor,
              })}
            >
              {Children.only(children)}
            </IconTheme>
          </Center>
        </SizedBox>
      </InkWell>
    </DecoratedBox>
  );
};
