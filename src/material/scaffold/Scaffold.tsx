import type { ReactChild } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '@lib/material/theme';
import { SafeArea } from '@lib/widgets';

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
      {props.appBar}
      {props.children}
      {props.floatingActionButton && (
        <View style={styles.fab}>
          <SafeArea top>
            {props.floatingActionButton}
          </SafeArea>
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
    bottom: 0,
  },
});
