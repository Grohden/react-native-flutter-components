import { useTextTheme } from '@lib/theme-data';
import type { TextThemeData } from '@lib/theme-data';
import React from 'react';
import { Text as RNText } from 'react-native';

export const Text = ({
  style,
  children,
}: React.PropsWithChildren<{ style?: Partial<TextThemeData> }>) => {
  const effectiveStyle = { ...useTextTheme(), ...style };

  return (
    <RNText style={effectiveStyle}>
      {children}
    </RNText>
  );
};
