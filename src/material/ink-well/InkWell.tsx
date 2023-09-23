import React, { useRef, useState } from 'react';
import type { EasingFunction } from 'react-native';
import { Animated, Pressable } from 'react-native';

import {
  MaterialState,
  MaterialStateProperty,
  MaterialStatesController,
} from '@lib/material/material-state';
import type { Color } from '@lib/std-ui';
import type { InkRippleProps } from './_InkRipple';
import { InkRipple } from './_InkRipple';

// Should we do as flutter? the base for Ink stuff is Material
// FIXME: implement splash factories for ink wheel
export const InkWell = ({
  role,
  rippleColor,
  duration,
  easing,
  onPress,
  statesController,
  children,
}: React.PropsWithChildren<{
  role?: 'button';
  duration: number;
  easing: EasingFunction;
  rippleColor: MaterialStateProperty<Color | undefined>;
  autofocus?: boolean;
  onPress?: () => void;
  statesController: MaterialStatesController;
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
        statesController.update(MaterialState.pressed, true);
        const key = ++rippleIds.current;
        // FIXME: in flutter (material?) the inkwell animation
        //  is slower on hold, when released it accelerates
        //  we're not doing the same here
        const ripple: InkRippleProps & { key: number } = {
          key,
          duration,
          easing,
          color: rippleColor.resolve(statesController.value)!,
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
        statesController.update(MaterialState.pressed, false);
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
