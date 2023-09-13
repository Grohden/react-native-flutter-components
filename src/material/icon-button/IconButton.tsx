import React, { Children, useMemo } from 'react';
import { Easing } from 'react-native';

import { useTheme } from '@lib/material';
import { Colors } from '@lib/material/colors';
import { InkWell } from '@lib/material/ink-well';
import { BorderRadius, BoxDecoration } from '@lib/painting';
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
  const { colorScheme } = useTheme();
  const primary = colorScheme.primary;

  const { easing, iconColor, rippleColor } = useMemo(() => {
    return {
      easing: Easing.bezier(0.2, 0, 0, 1),
      iconColor: primary.luminance() < 0.5 ? Colors.black : Colors.white,
      rippleColor: primary.withAlpha(0.5),
    };
  }, [primary]);

  const effectiveSize = size ?? 32;
  const effectiveContainerSize = containerSize ?? 48;

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
