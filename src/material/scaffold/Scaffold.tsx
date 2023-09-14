import { useTheme } from '@lib/material';
import type { ReactChild } from 'react';
import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';

export const Scaffold = (props: {
  appBar?: ReactChild;
  floatingActionButton?: ReactChild;
  children: ReactChild;
}) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, {
        backgroundColor: theme.colorScheme.background.hex(),
      }]}
    >
      {props.appBar && Children.only(props.appBar)}
      {Children.only(props.children)}

      {props.floatingActionButton && (
        <View style={styles.fab}>
          {Children.only(props.floatingActionButton)}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 0,
    // FIXME: need to solve safe area constraints for scaffold
    bottom: 42,
  },
});
