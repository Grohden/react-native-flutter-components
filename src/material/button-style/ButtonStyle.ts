import type { MaterialStateProperty } from '@lib/material/material-state';
import type { VisualDensity } from '@lib/material/theme-data';
import type { AlignmentGeometry, BorderSide, TextStyle } from '@lib/painting';
import { EdgeInsetsGeometry } from '@lib/painting';
import type { Color, Double, Size } from '@lib/std-ui';

type ButtonStyleProps = {
  textStyle?: MaterialStateProperty<TextStyle | undefined>;
  backgroundColor?: MaterialStateProperty<Color | undefined>;
  foregroundColor?: MaterialStateProperty<Color | undefined>;
  overlayColor?: MaterialStateProperty<Color | undefined>;
  shadowColor?: MaterialStateProperty<Color | undefined>;
  surfaceTintColor?: MaterialStateProperty<Color | undefined>;
  elevation?: MaterialStateProperty<number | undefined>;
  padding?: MaterialStateProperty<EdgeInsetsGeometry | undefined>;
  minimumSize?: MaterialStateProperty<Size | undefined>;
  fixedSize?: MaterialStateProperty<Size | undefined>;
  maximumSize?: MaterialStateProperty<Size | undefined>;
  iconColor?: MaterialStateProperty<Color | undefined>;
  iconSize?: MaterialStateProperty<Double | undefined>;
  side?: MaterialStateProperty<BorderSide | undefined>;
  // this.shape,
  // this.mouseCursor,
  visualDensity?: VisualDensity;
  // this.tapTargetSize,
  animationDuration?: number;
  // this.enableFeedback,
  alignment?: AlignmentGeometry;
  // this.splashFactory,
};

export type ButtonStyle = ButtonStyleProps & {
  copyWith(other: ButtonStyleProps): ButtonStyle;
  merge(style: ButtonStyleProps | undefined): ButtonStyle;
};

export const ButtonStyle = (props: ButtonStyleProps): ButtonStyle => ({
  ...props,
  copyWith(other) {
    return ButtonStyle({
      textStyle: other.textStyle || this.textStyle,
      backgroundColor: other.backgroundColor || this.backgroundColor,
      foregroundColor: other.foregroundColor || this.foregroundColor,
      overlayColor: other.overlayColor || this.overlayColor,
      shadowColor: other.shadowColor || this.shadowColor,
      surfaceTintColor: other.surfaceTintColor || this.surfaceTintColor,
      elevation: other.elevation ?? this.elevation,
      padding: other.padding || this.padding,
      minimumSize: other.minimumSize || this.minimumSize,
      fixedSize: other.fixedSize || this.fixedSize,
      maximumSize: other.maximumSize || this.maximumSize,
      iconColor: other.iconColor || this.iconColor,
      iconSize: other.iconSize ?? this.iconSize,
      side: other.side || this.side,
      visualDensity: other.visualDensity || this.visualDensity,
      animationDuration: other.animationDuration ?? this.animationDuration,
      alignment: other.alignment || this.alignment,
    });
  },
  merge(style) {
    if (style == null) {
      return this;
    }

    return this.copyWith({
      textStyle: this.textStyle ?? style.textStyle,
      backgroundColor: this.backgroundColor ?? style.backgroundColor,
      foregroundColor: this.foregroundColor ?? style.foregroundColor,
      overlayColor: this.overlayColor ?? style.overlayColor,
      shadowColor: this.shadowColor ?? style.shadowColor,
      surfaceTintColor: this.surfaceTintColor ?? style.surfaceTintColor,
      elevation: this.elevation ?? style.elevation,
      padding: this.padding ?? style.padding,
      minimumSize: this.minimumSize ?? style.minimumSize,
      fixedSize: this.fixedSize ?? style.fixedSize,
      maximumSize: this.maximumSize ?? style.maximumSize,
      iconColor: this.iconColor ?? style.iconColor,
      iconSize: this.iconSize ?? style.iconSize,
      side: this.side ?? style.side,
      // shape: this.shape ?? style.shape,
      // mouseCursor: this.mouseCursor ?? style.mouseCursor,
      visualDensity: this.visualDensity ?? style.visualDensity,
      // tapTargetSize: this.tapTargetSize ?? style.tapTargetSize,
      animationDuration: this.animationDuration ?? style.animationDuration,
      // enableFeedback: this.enableFeedback ?? style.enableFeedback,
      alignment: this.alignment ?? style.alignment,
      // splashFactory: this.splashFactory ?? style.splashFactory,
    });
  },
});
