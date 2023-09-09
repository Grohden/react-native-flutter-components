import type { ViewStyle } from 'react-native';

import { AlignmentGeometry } from './alignment-geometry';

const TOP = -1;
const BOTTOM = 1;
const CENTER = 0;
const START = -1;
const END = 1;

export class AlignmentDirectional extends AlignmentGeometry {
  static bottomCenter = new AlignmentDirectional(CENTER, BOTTOM);

  static bottomEnd = new AlignmentDirectional(END, BOTTOM);

  static bottomStart = new AlignmentDirectional(START, BOTTOM);

  static center = new AlignmentDirectional(CENTER, CENTER);

  static centerEnd = new AlignmentDirectional(END, CENTER);

  static centerStart = new AlignmentDirectional(START, CENTER);

  static topCenter = new AlignmentDirectional(CENTER, TOP);

  static topStart = new AlignmentDirectional(START, TOP);

  static topEnd = new AlignmentDirectional(END, TOP);

  // FIXME: We do not support proper coordinates here..
  private constructor(private x: number, private y: number) {
    super();
  }

  toStyles() {
    const styles: ViewStyle = {
      flexDirection: 'column',
    };

    switch (this.x) {
      case START:
        styles.alignItems = 'flex-start';
        break;
      case CENTER:
        styles.alignItems = 'center';
        break;
      case END:
        styles.alignItems = 'flex-end';
        break;
    }

    switch (this.y) {
      case TOP:
        styles.justifyContent = 'flex-start';
        break;
      case CENTER:
        styles.justifyContent = 'center';
        break;
      case BOTTOM:
        styles.justifyContent = 'flex-end';
        break;
    }

    return styles;
  }
}
