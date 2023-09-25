import { EdgeInsets, EdgeInsetsGeometry } from '@lib/painting';
import { Size } from '@lib/std-ui';
import type { Double } from '@lib/std-ui';

type MediaQueryDataProps = {
  size?: Size;
  padding?: EdgeInsetsGeometry;
  textScaleFactor?: Double;
};

export type MediaQueryData = {
  size: Size;
  padding: EdgeInsetsGeometry;
  textScaleFactor: Double;
  copyWith(other: MediaQueryDataProps): MediaQueryData;
};

export const MediaQueryData = (props: MediaQueryDataProps): MediaQueryData => ({
  padding: props.padding || EdgeInsets.zero,
  size: props.size || Size.zero,
  textScaleFactor: props.textScaleFactor ?? 1.0,
  copyWith(other) {
    return MediaQueryData({
      padding: other.padding || this.padding,
    });
  },
});
