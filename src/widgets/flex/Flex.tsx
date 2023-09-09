import type { PropsWithChildren } from 'react';
import React from 'react';
import type { FlexStyle, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { Axis } from '@lib/painting';
import {
  CrossAxisAlignment,
  MainAxisAlignment,
  MainAxisSize,
} from '@lib/rendering';

const mainAxisToFlex: Record<MainAxisAlignment, FlexStyle['justifyContent']> = {
  [MainAxisAlignment.spaceAround]: 'space-around',
  [MainAxisAlignment.spaceBetween]: 'space-between',
  [MainAxisAlignment.spaceEvenly]: 'space-evenly',
  [MainAxisAlignment.start]: 'flex-start',
  [MainAxisAlignment.center]: 'center',
  [MainAxisAlignment.end]: 'flex-end',
};

const crossAxisToFlex: Record<CrossAxisAlignment, FlexStyle['alignItems']> = {
  [CrossAxisAlignment.start]: 'flex-start',
  [CrossAxisAlignment.center]: 'center',
  [CrossAxisAlignment.end]: 'flex-end',
};

const axisToDirection: Record<Axis, FlexStyle['flexDirection']> = {
  [Axis.horizontal]: 'row',
  [Axis.vertical]: 'column',
};

export const Flex = ({
  direction,
  mainAxisSize = MainAxisSize.min,
  mainAxisAlignment = MainAxisAlignment.start,
  crossAxisAlignment = CrossAxisAlignment.center,
  children,
}: PropsWithChildren<{
  direction: Axis;
  mainAxisSize?: MainAxisSize;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
}>) => {
  const style: ViewStyle = { flexDirection: axisToDirection[direction] };

  switch (mainAxisSize) {
    case MainAxisSize.max:
      style.flex = 1;
      break;
  }

  style.justifyContent = mainAxisToFlex[mainAxisAlignment];
  style.alignItems = crossAxisToFlex[crossAxisAlignment];

  return <View style={style}>{children}</View>;
};
