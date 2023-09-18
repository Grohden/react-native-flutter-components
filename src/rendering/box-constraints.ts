import { clampDouble } from '@material/material-color-utilities';
import type { ViewStyle } from 'react-native';

import { Size } from '@lib/std-ui';

const finiteOrExpanded = (v: number) => (isFinite(v) ? v : ('100%' as const));

export class BoxConstraints {
  static expand(size?: { width?: number; height?: number }) {
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

  static new(constraints: {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
  }) {
    return new BoxConstraints(
      constraints.minWidth,
      constraints.maxWidth,
      constraints.minHeight,
      constraints.maxHeight,
    );
  }

  private constructor(
    public readonly minWidth = 0,
    public readonly maxWidth = Infinity,
    public readonly minHeight = 0,
    public readonly maxHeight = Infinity,
  ) {}

  toStyles() {
    const styles: ViewStyle = {};

    if (this.minHeight === this.maxHeight) {
      styles.height = finiteOrExpanded(this.maxHeight);
    } else {
      styles.minHeight = finiteOrExpanded(this.minHeight);
      styles.maxHeight = finiteOrExpanded(this.maxHeight);
    }

    if (this.minWidth === this.maxWidth) {
      styles.width = finiteOrExpanded(this.maxWidth);
    } else {
      styles.minWidth = finiteOrExpanded(this.minWidth);
      styles.maxWidth = finiteOrExpanded(this.maxWidth);
    }

    return styles;
  }

  copyWith(props: {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
  }): BoxConstraints {
    return new BoxConstraints(
      props.minWidth ?? this.minWidth,
      props.maxWidth ?? this.maxWidth,
      props.minHeight ?? this.minHeight,
      props.maxHeight ?? this.maxHeight,
    );
  }

  constrainHeight(height = Infinity): number {
    return clampDouble(height, this.minHeight, this.maxHeight);
  }

  constrainWidth(width = Infinity): number {
    return clampDouble(width, this.minWidth, this.maxWidth);
  }

  constrain(size: Size): Size {
    return Size(
      this.constrainWidth(size.width),
      this.constrainHeight(size.height),
    );
  }
}
