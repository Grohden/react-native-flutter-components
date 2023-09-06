import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';

export const Center = (props: { children?: React.ReactChild }) => (
  <View style={styles.center}>
    {Children.only(props.children)}
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
