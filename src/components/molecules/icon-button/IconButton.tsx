import { Center, DecoratedBox, InkWell, SizedBox } from '@lib/components';
import { lightColorTokens, motionTokens } from '@lib/design-tokens';
import { BorderRadius, BoxDecoration } from '@lib/styles';
import { IconThemeData, useIconButtonTheme } from '@lib/theme-data';
import chroma from 'chroma-js';
import React, { Children, useMemo } from 'react';
import { Easing } from 'react-native';

export const IconButton = ({ children, containerSize, size, onPressed }: {
  onPressed: () => void;
  children: React.ReactChild;
  containerSize?: number;
  size?: number;
}) => {
  const theme = useIconButtonTheme();
  const { easing, iconColor, rippleColor } = useMemo(() => {
    const primary = chroma(lightColorTokens.primary);

    return {
      easing: Easing.bezier(...motionTokens.easing.emphasized),
      iconColor: primary.luminance() < 0.5 ? 'black' : 'white',
      rippleColor: primary.alpha(0.5).hex(),
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
            <IconThemeData
              value={{
                size: effectiveSize,
                color: iconColor,
              }}
            >
              {Children.only(children)}
            </IconThemeData>
          </Center>
        </SizedBox>
      </InkWell>
    </DecoratedBox>
  );
};
