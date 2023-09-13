import { Theme } from '@lib/material/theme';
import { ThemeData } from '@lib/material/theme-data';
import { MediaQuery, MediaQueryData } from '@lib/widgets';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const MaterialApp = ({
  mediaQuery,
  theme,
  home,
}: {
  mediaQuery: MediaQueryData;
  theme: ThemeData;
  darkTheme: ThemeData;
  home: React.ReactChild;
}) => {
  let root = (
    <View style={styles.root}>
      {home}
    </View>
  );

  // Flutter actually uses View which renders a FlutterView
  //  and that seems to be the root for MediaQuery
  root = (
    <MediaQuery value={mediaQuery}>
      {root}
    </MediaQuery>
  );

  return <Theme themeData={theme}>{root}</Theme>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
