import { EdgeInsets } from '@lib/painting';
import { Color } from '@lib/std-ui';
import { Easing } from 'react-native';

// https://github.com/flutter/flutter/blob/c6fa26162f0b1b7bb6e71431065e284985ea6b7a/packages/flutter/lib/src/material/constants.dart#L22

export const kMinInteractiveDimension = 48.0;

export const kToolbarHeight = 56.0;

export const kBottomNavigationBarHeight = 56.0;

export const kTextTabBarHeight = kMinInteractiveDimension;

export const kRadialReactionRadius = 20.0;

export const kRadialReactionAlpha = 0x1F;

export const kTabLabelPadding = EdgeInsets.symmetric({ horizontal: 16.0 });

export const kMaterialListPadding = EdgeInsets.symmetric({ vertical: 8.0 });

export const kDefaultIconLightColor = Color('#FFFFFFFF');

export const kDefaultIconDarkColor = Color('#000000DD');

export const kThemeChangeDuration = 200; // ms

// FIXME: this probably need to be moved to ink factory when we have it
export const kInkEasing = Easing.bezier(0.2, 0, 0, 1);
