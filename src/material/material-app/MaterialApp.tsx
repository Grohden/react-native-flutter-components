import { Theme } from '@lib/material/theme';
import { ThemeData } from '@lib/material/theme-data';
import { Brightness } from '@lib/std-ui';
import { MediaQuery, MediaQueryData } from '@lib/widgets';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const MaterialApp = ({
  brightness = Brightness.light,
  mediaQuery,
  theme,
  darkTheme,
  home,
}: {
  brightness?: Brightness;
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
    <MediaQuery data={mediaQuery}>
      {root}
    </MediaQuery>
  );

  return (
    <Theme themeData={brightness === Brightness.light ? theme : darkTheme}>
      {root}
    </Theme>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
