import type {
  AlignmentGeometry,
  BoxConstraints,
  BoxDecoration,
  EdgeInsets,
} from '@lib/styles';
import React, { Children } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';

export const Container = ({
  children,
  boxDecoration,
  padding,
  constraints,
  clipsChildren,
  align,
}: React.PropsWithChildren<{
  boxDecoration?: BoxDecoration;
  padding?: EdgeInsets;
  align?: AlignmentGeometry;
  constraints?: BoxConstraints;
  // FIXME: maybe its better to make this a component, but its usually a practice to
  //  clip children when using radius, so for now it makes sense
  clipsChildren?: boolean;
}>) => {
  // For POTENTIAL perf improvements I've decided to put all styles in Container
  //  and make other components merely an alias for Container.
  //  It might be worth to investigate how flutter handles all that nesting it does
  //  on its original Container
  const style: ViewStyle = {
    ...boxDecoration?.toStyles(),
    ...padding?.toPrefixedStyles('padding'),
    ...align?.toStyles(),
    ...constraints?.toStyles(),
    overflow: clipsChildren ? 'hidden' : undefined,
  };

  return <View style={style}>{Children.only(children)}</View>;
};
