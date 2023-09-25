import type { Double, Shadow } from '@lib/std-ui';
import { Color } from '@lib/std-ui';
import { clampDouble } from '@material/material-color-utilities';

type IconThemeDataProps = {
  size?: Double;
  color?: Color;
  fill?: Double;
  grade?: Double;
  opacity?: Double;
  opticalSize?: Double;
  weight?: Double;
  shadows?: Shadow[];
};

export type IconThemeData = IconThemeDataProps & {
  copyWith(data: IconThemeDataProps): IconThemeData;
  merge(other: IconThemeDataProps | undefined): IconThemeData;
};

export const IconThemeData = (
  { opacity, ...props }: IconThemeDataProps,
): IconThemeData => ({
  ...props,
  get opacity() {
    return !opacity ? undefined : clampDouble(0.0, 1.0, opacity);
  },
  copyWith(other) {
    return IconThemeData({
      size: other.size ?? this.size,
      fill: other.fill ?? this.fill,
      weight: other.weight ?? this.weight,
      grade: other.grade ?? this.grade,
      opticalSize: other.opticalSize ?? this.opticalSize,
      color: other.color || this.color,
      opacity: other.opacity ?? this.opacity,
      shadows: other.shadows || this.shadows,
    });
  },
  merge(other) {
    if (other == null) {
      return this;
    }

    return this.copyWith({
      size: other.size,
      fill: other.fill,
      weight: other.weight,
      grade: other.grade,
      opticalSize: other.opticalSize,
      color: other.color,
      opacity: other.opacity,
      shadows: other.shadows,
    });
  },
});

IconThemeData.fallback = () =>
  IconThemeData({
    size: 24.0,
    fill: 0.0,
    weight: 400.0,
    grade: 0.0,
    opticalSize: 48.0,
    color: Color('000000FF'),
    opacity: 1.0,
    shadows: undefined,
  });
