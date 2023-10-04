import React from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';

import type {
  AlignmentGeometry,
  BoxDecoration,
  EdgeInsetsGeometry,
} from '@lib/painting';
import { BoxConstraints } from '@lib/rendering';

export const Container = ({
  children,
  boxDecoration,
  padding,
  constraints,
  clipsChildren,
  alignment,
}: {
  children: React.ReactChild;
  boxDecoration?: BoxDecoration;
  padding?: EdgeInsetsGeometry;
  alignment?: AlignmentGeometry;
  constraints?: BoxConstraints;
  // FIXME: maybe its better to make this a component, but its usually a practice to
  //  clip children when using radius, so for now it makes sense
  clipsChildren?: boolean;
}) => {
  // For POTENTIAL perf improvements I've decided to put all styles in Container
  //  and make other components merely an alias for Container.
  //  It might be worth to investigate how flutter handles all that nesting it does
  //  on its original Container
  const style: ViewStyle = {
    ...boxDecoration?.toStyles(),
    ...padding?.toPaddingStyles(),
    ...alignment?.toStyles(),
    ...constraints?.toStyles(),
    overflow: clipsChildren ? 'hidden' : undefined,
  };

  return <View style={style}>{children}</View>;
};
