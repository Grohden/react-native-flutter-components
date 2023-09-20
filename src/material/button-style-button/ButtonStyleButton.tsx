/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';

import type { ButtonStyle } from '@lib/material/button-style';
import { kInkEasing } from '@lib/material/constants';
import { InkWell } from '@lib/material/ink-well';
import { MaterialState } from '@lib/material/material-state';
import { MaterialStateProperty } from '@lib/material/material-state';
import { EdgeInsets, EdgeInsetsGeometry } from '@lib/painting';
import { BoxConstraints } from '@lib/rendering';
import { Color } from '@lib/std-ui';
import {
  Align,
  ConstrainedBox,
  IconTheme,
  IconThemeData,
  Padding,
  Semantics,
} from '@lib/widgets';

type GetProp<T> = (
  style: ButtonStyle | undefined,
) => T | undefined;

// FIXME: implement material states controller
const FIXME_IMPLEMENT_MATERIAL_CTRL = new Set<MaterialState>();

export const ButtonStyleButton = ({
  style,
  themeStyle,
  defaultStyle,
  children,
  onPress,
  onLongPress,
  isSemanticButton = true,
  autofocus,
}: {
  children: React.ReactChild;
  style?: ButtonStyle;
  themeStyle?: ButtonStyle;
  defaultStyle?: ButtonStyle;
  onPress?: () => void;
  onLongPress?: () => void;
  isSemanticButton?: boolean;
  autofocus?: boolean;
}) => {
  const enabled = !onPress || !onLongPress;

  const effectiveValue = <T,>(getProperty: GetProp<T>) => {
    const widgetValue = getProperty(style);
    const themeValue = getProperty(themeStyle);
    const defaultValue = getProperty(defaultStyle);

    return widgetValue ?? themeValue ?? defaultValue;
  };

  const resolve = <T,>(getProperty: GetProp<MaterialStateProperty<T>>) => {
    return effectiveValue(getProperty)?.resolve(FIXME_IMPLEMENT_MATERIAL_CTRL);
  };

  // const resolvedElevation = resolve((style) => style?.elevation);
  // const resolvedTextStyle = resolve((style) => style?.textStyle);
  // let resolvedBackgroundColor = resolve((style) => style?.backgroundColor);
  const resolvedForegroundColor = resolve((style) => style?.foregroundColor);
  // const resolvedShadowColor = resolve((style) => style?.shadowColor);
  // const resolvedSurfaceTintColor = resolve((style) => style?.surfaceTintColor);
  const resolvedPadding = resolve((style) => style?.padding);
  const resolvedMinimumSize = resolve((style) => style?.minimumSize)!;
  const resolvedFixedSize = resolve((style) => style?.fixedSize);
  const resolvedMaximumSize = resolve((style) => style?.maximumSize)!;
  const resolvedIconColor = resolve((style) => style?.iconColor);
  const resolvedIconSize = resolve((style) => style?.iconSize);
  // const resolvedSide = resolve((style) => style?.side);
  // const resolvedShape = resolve<OutlinedBorder?>((style) => style?.shape);

  const overlayColor: MaterialStateProperty<Color | undefined> = {
    resolve: (states) =>
      effectiveValue((style) => style?.overlayColor?.resolve(states)),
  };

  const resolvedVisualDensity = effectiveValue((style) =>
    style?.visualDensity
  )!;
  const resolvedAnimationDuration = effectiveValue((style) =>
    style?.animationDuration
  );
  const resolvedAlignment = effectiveValue((style) => style?.alignment);
  const densityAdjustment = resolvedVisualDensity!.baseSizeAdjustment;

  let effectiveConstraints = resolvedVisualDensity.effectiveConstraints(
    BoxConstraints.new({
      minWidth: resolvedMinimumSize.width,
      minHeight: resolvedMinimumSize.height,
      maxWidth: resolvedMaximumSize.width,
      maxHeight: resolvedMaximumSize.height,
    }),
  );

  if (resolvedFixedSize != null) {
    const size = effectiveConstraints.constrain(resolvedFixedSize);
    if (isFinite(size.width)) {
      effectiveConstraints = effectiveConstraints.copyWith({
        minWidth: size.width,
        maxWidth: size.width,
      });
    }
    if (isFinite(size.height)) {
      effectiveConstraints = effectiveConstraints.copyWith({
        minHeight: size.height,
        maxHeight: size.height,
      });
    }
  }

  // https://github.com/flutter/flutter/blob/367f9ea16b/packages/flutter/lib/src/material/button_style_button.dart#L339C4-L347C88
  const dy = densityAdjustment.dy;
  const dx = Math.max(0, densityAdjustment.dx);
  const padding = resolvedPadding!
    .add(EdgeInsets.fromLTRB(dx, dy, dx, dy))
    .clamp(EdgeInsets.zero, EdgeInsetsGeometry.infinity);

  // FIXME: implement splash factories for ink wheel
  const result = (
    <ConstrainedBox constraints={effectiveConstraints}>
      <InkWell
        onPress={onPress}
        duration={resolvedAnimationDuration!}
        autofocus={autofocus}
        easing={kInkEasing}
        rippleColor={overlayColor.resolve(new Set())!}
      >
        <IconTheme.merge
          data={IconThemeData({
            color: resolvedIconColor ?? resolvedForegroundColor,
            size: resolvedIconSize,
          })}
        >
          <Padding padding={padding}>
            <Align
              alignment={resolvedAlignment!}
              widthFactor={1.0}
              heightFactor={1.0}
            >
              {children}
            </Align>
          </Padding>
        </IconTheme.merge>
      </InkWell>
    </ConstrainedBox>
  );

  // FIXME: we're not implementing _InputPadding
  return (
    <Semantics
      container
      button={isSemanticButton}
      enabled={enabled}
    >
      {result}
    </Semantics>
  );
};

ButtonStyleButton.allOrNull = <T,>(
  value: T | undefined,
): MaterialStateProperty<T> | undefined =>
  !value ? undefined : {
    resolve: (_) => value,
  };
