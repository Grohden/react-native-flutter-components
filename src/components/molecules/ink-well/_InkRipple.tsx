import type { Color } from '@lib/styles';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import type { EasingFunction } from 'react-native';

export type InkRippleProps = {
  faded: boolean;
  duration: number;
  easing: EasingFunction;
  color: Color;
  position: { x: number; y: number };
  onComplete: () => void;
};

const UNMEASURED = -1;

export const InkRipple = ({
  duration,
  easing,
  color,
  position,
  faded,
  onComplete,
}: InkRippleProps) => {
  const [radius, setRadius] = useState(UNMEASURED);
  const animation = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const baseAnimation = {
      duration,
      easing,
      useNativeDriver: true,
    };

    if (faded) {
      Animated.timing(opacity, { ...baseAnimation, toValue: 0 }).start(
        onComplete,
      );
    } else {
      Animated.timing(animation, { ...baseAnimation, toValue: 1 }).start();
    }
  }, [animation, duration, easing, faded, onComplete, opacity]);

  return (
    <View
      style={styles.rippleContainer}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;

        setRadius(Math.sqrt(width ** 2 + height ** 2));
      }}
    >
      <Animated.View
        pointerEvents="none"
        style={{
          borderRadius: radius,
          backgroundColor: color,
          width: radius * 2,
          height: radius * 2,
          opacity: opacity,
          transform: [
            { translateX: -radius },
            { translateY: -radius },
            { translateX: position.x },
            { translateY: position.y },
            { scale: animation },
          ],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rippleContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
});
