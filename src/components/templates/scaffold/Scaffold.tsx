import type { ReactChild } from 'react';
import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';

export const Scaffold = (props: {
  topAppBar?: ReactChild;
  floatingActionButton?: ReactChild;
  children: ReactChild;
}) => {
  return (
    <View style={styles.container}>
      {props.topAppBar && Children.only(props.topAppBar)}
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
    // For shadows?
    backgroundColor: 'white',
  },
  fab: {
    position: 'absolute',
    right: 0,
    // FIXME: need to solve safe area constraints for scaffold
    bottom: 42,
  },
});
