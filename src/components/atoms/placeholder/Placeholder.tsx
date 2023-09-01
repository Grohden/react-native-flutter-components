import { DecoratedBox } from '@lib/components';
import type { Color } from '@lib/styles';
import { Border, BoxDecoration, Size } from '@lib/styles';
import React, { useMemo, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export const Placeholder = (props: { color?: Color }) => {
  const [size, setSize] = useState(Size.square(0));
  const effectiveColor = props.color || 'red';
  const decoration = BoxDecoration.new({
    border: Border.all({ color: effectiveColor, width: 1 }),
  });

  const lineData = useMemo(() => {
    if (!size.width || !size.height) {
      return null;
    }

    const radius = Math.sqrt(size.width ** 2 + size.height ** 2);
    return {
      radius,
      deg: ((Math.acos(size.height / radius)) * (180 / Math.PI)).toFixed(2),
    };
  }, [size.height, size.width]);

  const renderCrossLine = (deg: string, height: number) => {
    const transforms = [{ rotate: `${deg}deg` }];

    return (
      <Animated.View
        style={{
          position: 'absolute',
          width: 1,
          backgroundColor: effectiveColor,
          height: height,
          transform: transforms,
        }}
      />
    );
  };

  return (
    <DecoratedBox
      clipsChildren
      boxDecoration={decoration}
    >
      <View
        style={styles.expanded}
        onLayout={(event) => {
          const sizes = event.nativeEvent.layout;

          setSize(Size.new(sizes.width, sizes.height));
        }}
      >
        {lineData && (
          renderCrossLine(lineData.deg, lineData.radius)
        )}
        {lineData && (
          renderCrossLine('-' + lineData.deg, lineData.radius)
        )}
      </View>
    </DecoratedBox>
  );
};

const styles = StyleSheet.create({
  expanded: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
