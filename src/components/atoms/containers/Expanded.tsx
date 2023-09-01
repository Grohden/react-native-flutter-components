import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Expanded = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.expanded}>{children}</View>
);

export const styles = StyleSheet.create({
  expanded: {
    flex: 1,
  },
});
