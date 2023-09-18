import React, { useMemo, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { Border, BoxDecoration } from '@lib/painting';
import { Color, Size } from '@lib/std-ui';
import { DecoratedBox } from '@lib/widgets/containers';

export const Placeholder = (props: { color?: Color }) => {
  const [size, setSize] = useState(Size.square(0));
  const effectiveColor = props.color || Color('red');
  const decoration = BoxDecoration({
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
        style={[styles.absPosition, {
          backgroundColor: effectiveColor.hex(),
          height: height,
          transform: transforms,
        }]}
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

          setSize(Size(sizes.width, sizes.width));
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
  absPosition: {
    position: 'absolute',
    width: 1,
  },
  expanded: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
