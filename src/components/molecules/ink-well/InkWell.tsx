import type { Color } from '@lib/styles';
import React, { useRef, useState } from 'react';
import { Animated, Pressable } from 'react-native';
import type { EasingFunction } from 'react-native';
import { InkRipple } from './_InkRipple';
import type { InkRippleProps } from './_InkRipple';

// Should we do as flutter? the base for Ink stuff is Material
export const InkWell = ({
  role,
  rippleColor,
  duration,
  easing,
  onPress,
  children,
}: React.PropsWithChildren<{
  role?: 'button';
  duration: number;
  easing: EasingFunction;
  rippleColor: Color;
  onPress?: () => void;
}>) => {
  const rippleIds = useRef(0);
  const [ripples, setRipples] = useState<(InkRippleProps & { key: number })[]>(
    [],
  );

  const removeRipple = (key: number) => () => {
    setRipples((definitions) =>
      definitions.filter((value) => value.key !== key)
    );
  };

  return (
    <Pressable
      role={role}
      onPressIn={(event) => {
        const key = ++rippleIds.current;
        // FIXME: in flutter (material?) the inkwell animation
        //  is slower on hold, when released it accelerates
        //  we're not doing the same here
        const ripple: InkRippleProps & { key: number } = {
          key,
          duration,
          easing,
          color: rippleColor,
          faded: false,
          position: {
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY,
          },
          onComplete: removeRipple(key),
        };

        setRipples((values) => [
          ...values.map((props) => ({ ...props, faded: true })),
          ripple,
        ]);
      }}
      onPressOut={() => {
        setRipples((values) =>
          values.map((value) => ({ ...value!, faded: true }))
        );
      }}
      onPress={onPress}
    >
      <Animated.View>
        {children}
        {ripples.map((ripple) => <InkRipple {...ripple} />)}
      </Animated.View>
    </Pressable>
  );
};
