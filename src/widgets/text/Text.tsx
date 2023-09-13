import React from 'react';
import { Text as RNText } from 'react-native';

import { TextStyle } from '@lib/painting';
import { useDefaultTextStyle } from '@lib/widgets/default-text-style';

export const Text = ({
  style,
  children,
}: {
  style?: TextStyle;
  children: string | number;
}) => {
  const defaults = useDefaultTextStyle();
  const effectiveStyle = defaults.style.merge(style).toStyle();

  return (
    <RNText style={effectiveStyle}>
      {children}
    </RNText>
  );
};
