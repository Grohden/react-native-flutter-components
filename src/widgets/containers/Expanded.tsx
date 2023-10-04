import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Expanded = ({ children }: { children?: React.ReactChild }) => (
  <View style={styles.expanded}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  expanded: {
    flex: 1,
  },
});
