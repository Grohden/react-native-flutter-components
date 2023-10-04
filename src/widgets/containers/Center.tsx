import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Center = (props: { children?: React.ReactChild }) => (
  <View style={styles.centerRow}>
    <View style={styles.centerCol}>
      {props.children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  centerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCol: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
