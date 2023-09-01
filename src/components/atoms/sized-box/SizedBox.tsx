import type { Size } from '@lib/styles';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { ViewStyle } from 'react-native';

export const SizedBox = (
  props: PropsWithChildren<{
    width?: ViewStyle['width'];
    height?: ViewStyle['height'];
  }>,
) => <View style={[styles.defaults, props]}>{props.children}</View>;

SizedBox.fromSize = ({ size, children }: PropsWithChildren<{ size: Size }>) => {
  const styles: ViewStyle = {
    width: isFinite(size.width) ? size.width : '100%',
    height: isFinite(size.height) ? size.height : '100%',
  };

  return <View style={styles}>{children}</View>;
};

const styles = StyleSheet.create({
  defaults: {
    width: '100%',
    height: '100%',
  },
});
