import React, { useEffect, useState } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';

import { BoxConstraints } from '@lib/rendering';
import { Offset, Size, TextDirection } from '@lib/std-ui';

const sizeOfOnLayout = (event: {
  nativeEvent: { layout: { width: number; height: number } };
}) => {
  return Size(event.nativeEvent.layout.width, event.nativeEvent.layout.height);
};

type ChildrenProperties<T> = {
  leading?: T;
  middle?: T;
  trailing?: T;
};

export const NavigationToolbar = ({
  leading,
  middle,
  trailing,
  centerMiddle = true,
  textDirection,
  ...props
}: {
  leading?: React.ReactChild;
  middle?: React.ReactChild;
  trailing?: React.ReactChild;
  centerMiddle?: boolean;
  middleSpacing?: number;
  textDirection?: TextDirection;
}) => {
  const [toolbarSize, setToolbarSize] = useState<Size | null>(null);
  const [leadingSize, setLeadingSize] = useState<Size | null>(null);
  const [middleSize, setMiddleSize] = useState<Size | null>(null);
  const [trailingSize, setTrailingSize] = useState<Size | null>(null);

  const [childrenConstraints, setChildrenConstraints] = useState<
    ChildrenProperties<BoxConstraints>
  >({});

  const [childrenPositions, setChildrenPositions] = useState<
    ChildrenProperties<Offset>
  >({});

  const middleSpacing = props.middleSpacing ?? NavigationToolbar.kMiddleSpacing;
  // TODO: implement Directionality
  textDirection ||= TextDirection.ltr;

  useEffect(() => {
    if (!toolbarSize) {
      return;
    }

    let leadingWidth = 0.0;
    let trailingWidth = 0.0;
    const constraints: ChildrenProperties<BoxConstraints> = {};
    const positions: ChildrenProperties<Offset> = {};

    if (leading && leadingSize) {
      constraints.leading = BoxConstraints.new({
        maxWidth: toolbarSize.width,
        minHeight: toolbarSize.height, // The height should be exactly the height of the bar.
        maxHeight: toolbarSize.height,
      });
      // leadingWidth = layoutChild(_ToolbarSlot.leading, constraints).width;
      leadingWidth = leadingSize.width;
      let leadingX = 0.0;
      switch (textDirection) {
        case TextDirection.rtl:
          leadingX = toolbarSize.width - leadingWidth;
          break;
        case TextDirection.ltr:
          leadingX = 0.0;
          break;
      }
      // FIXME: discover why flutter decided to use 0.0 for dy
      // positionChild(_ToolbarSlot.leading, Offset(leadingX, 0.0));
      const middleY = (toolbarSize.height - leadingSize.height) / 2.0;
      positions.leading = Offset(leadingX, middleY);
    }

    if (trailing && trailingSize) {
      constraints.trailing = BoxConstraints.loose(toolbarSize);
      let trailingX = 0.0;
      switch (textDirection) {
        case TextDirection.rtl:
          trailingX = 0.0;
          break;
        case TextDirection.ltr:
          trailingX = toolbarSize.width - trailingSize.width;
          break;
      }
      const trailingY = (toolbarSize.height - trailingSize.height) / 2.0;
      trailingWidth = trailingSize.width;
      positions.trailing = Offset(trailingX, trailingY);
    }

    if (middle && middleSize) {
      const maxWidth = Math.max(
        toolbarSize.width - leadingWidth - trailingWidth - middleSpacing * 2.0,
        0.0,
      );
      // const middleSize = layoutChild(_ToolbarSlot.middle, constraints);
      constraints.middle = BoxConstraints.loose(toolbarSize).copyWith({
        maxWidth,
      });

      const middleStartMargin = leadingWidth + middleSpacing;
      let middleStart = middleStartMargin;
      const middleY = (toolbarSize.height - middleSize.height) / 2.0;
      if (centerMiddle) {
        middleStart = (toolbarSize.width - middleSize.width) / 2.0;
        if (
          middleStart + middleSize.width > toolbarSize.width - trailingWidth
        ) {
          middleStart = toolbarSize.width - trailingWidth - middleSize.width
            - middleSpacing;
        } else if (middleStart < middleStartMargin) {
          middleStart = middleStartMargin;
        }
      }

      let middleX = 0;
      switch (textDirection) {
        case TextDirection.rtl:
          middleX = toolbarSize.width - middleSize.width - middleStart;
          break;
        case TextDirection.ltr:
          middleX = middleStart;
          break;
      }

      positions.middle = Offset(middleX, middleY);
    }

    setChildrenConstraints(constraints);
    setChildrenPositions(positions);
  }, [
    centerMiddle,
    leading,
    leadingSize,
    middle,
    middleSize,
    middleSpacing,
    textDirection,
    toolbarSize,
    trailing,
    trailingSize,
  ]);

  let leadingStyle: ViewStyle = { position: 'absolute' };
  if (childrenConstraints.leading && childrenPositions.leading) {
    leadingStyle = {
      ...leadingStyle,
      ...childrenConstraints.leading.toHorizontalStyles(),
      top: childrenPositions.leading.dy,
      left: childrenPositions.leading.dx,
    };
  }

  let middleStyle: ViewStyle = { position: 'absolute' };
  if (childrenConstraints.middle && childrenPositions.middle) {
    middleStyle = {
      ...middleStyle,
      ...childrenConstraints.middle.toHorizontalStyles(),
      top: childrenPositions.middle.dy,
      left: childrenPositions.middle.dx,
    };
  }

  let trailingStyle: ViewStyle = { position: 'absolute' };
  if (childrenConstraints.trailing && childrenPositions.trailing) {
    trailingStyle = {
      ...trailingStyle,
      ...childrenConstraints.trailing.toHorizontalStyles(),
      top: childrenPositions.trailing.dy,
      left: childrenPositions.trailing.dx,
    };
  }

  return (
    <View
      onLayout={event => setToolbarSize(sizeOfOnLayout(event))}
      style={{ height: '100%' }}
    >
      <View
        onLayout={event => setLeadingSize(sizeOfOnLayout(event))}
        style={leadingStyle}
      >
        {leading}
      </View>
      <View
        onLayout={event => setMiddleSize(sizeOfOnLayout(event))}
        style={middleStyle}
      >
        {middle}
      </View>
      <View
        onLayout={event => setTrailingSize(sizeOfOnLayout(event))}
        style={trailingStyle}
      >
        {trailing}
      </View>
    </View>
  );
};

NavigationToolbar.kMiddleSpacing = 16;
