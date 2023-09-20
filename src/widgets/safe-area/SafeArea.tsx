import React, { Children } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';

import { useMediaQuery } from '@lib/widgets/media-query';

export const SafeArea = (
  {
    left = true,
    top = true,
    right = true,
    bottom = true,
    children,
  }: {
    left?: boolean;
    top?: boolean;
    bottom?: boolean;
    right?: boolean;
    children: React.ReactChild;
  },
) => {
  const paddings = useMediaQuery().padding;
  const styles: ViewStyle = {};

  if (top) {
    styles.paddingTop = paddings.top;
  }
  if (left) {
    styles.paddingLeft = paddings.left;
  }
  if (right) {
    styles.paddingRight = paddings.right;
  }
  if (bottom) {
    styles.paddingBottom = paddings.bottom;
  }

  return (
    <View style={styles}>
      {Children.only(children)}
    </View>
  );
};
