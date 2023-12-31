import { clampDouble } from '@material/material-color-utilities';
import type { ViewStyle } from 'react-native';

import { Size } from '@lib/std-ui';
import type { Double } from '@lib/std-ui';

const finiteOrExpanded = (v: Double) => (isFinite(v) ? v : ('100%' as const));

export class BoxConstraints {
  static expand(size?: { width?: Double; height?: Double }) {
    return new BoxConstraints(
      size?.width ?? Infinity,
      size?.width ?? Infinity,
      size?.height ?? Infinity,
      size?.height ?? Infinity,
    );
  }

  static loose(size: Size) {
    return new BoxConstraints(0, size.width, 0, size.height);
  }

  static tight(size: Size) {
    return new BoxConstraints(size.width, size.width, size.width, size.height);
  }

  static tightFor({ width, height }: { width?: Double; height?: Double }) {
    return new BoxConstraints(
      width ?? 0.0,
      width ?? Infinity,
      height ?? 0.0,
      height ?? Infinity,
    );
  }

  static new(constraints: {
    minWidth?: Double;
    maxWidth?: Double;
    minHeight?: Double;
    maxHeight?: Double;
  }) {
    return new BoxConstraints(
      constraints.minWidth,
      constraints.maxWidth,
      constraints.minHeight,
      constraints.maxHeight,
    );
  }

  private constructor(
    public readonly minWidth = 0.0,
    public readonly maxWidth = Infinity,
    public readonly minHeight = 0.0,
    public readonly maxHeight = Infinity,
  ) {}

  toStyles() {
    return {
      ...this.toVerticalStyles(),
      ...this.toHorizontalStyles(),
    };
  }

  toHorizontalStyles() {
    const styles: ViewStyle = {};

    if (this.minWidth === this.maxWidth) {
      styles.width = finiteOrExpanded(this.maxWidth);
    } else {
      styles.minWidth = finiteOrExpanded(this.minWidth);
      styles.maxWidth = finiteOrExpanded(this.maxWidth);
    }

    return styles;
  }

  toVerticalStyles() {
    const styles: ViewStyle = {};

    if (this.minHeight === this.maxHeight) {
      styles.height = finiteOrExpanded(this.maxHeight);
    } else {
      styles.minHeight = finiteOrExpanded(this.minHeight);
      styles.maxHeight = finiteOrExpanded(this.maxHeight);
    }

    return styles;
  }

  copyWith(props: {
    minWidth?: Double;
    maxWidth?: Double;
    minHeight?: Double;
    maxHeight?: Double;
  }): BoxConstraints {
    return new BoxConstraints(
      props.minWidth ?? this.minWidth,
      props.maxWidth ?? this.maxWidth,
      props.minHeight ?? this.minHeight,
      props.maxHeight ?? this.maxHeight,
    );
  }

  constrainHeight(height = Infinity): Double {
    return clampDouble(this.minHeight, this.maxHeight, height);
  }

  constrainWidth(width = Infinity): Double {
    return clampDouble(this.minWidth, this.maxWidth, width);
  }

  constrain(size: Size): Size {
    return Size(
      this.constrainWidth(size.width),
      this.constrainHeight(size.height),
    );
  }
}
