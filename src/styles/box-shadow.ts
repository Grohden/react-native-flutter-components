import type { ViewStyle } from 'react-native';

import type { Color } from './color';

export class BoxShadow {
  static elevated({ color, depth }: { color: Color; depth: number }) {
    return new BoxShadow(color, depth);
  }

  constructor(private color: Color, private depth: number) {}

  private interpolate(i: number, a: number, b: number, a2: number, b2: number) {
    return ((i - a) * (b2 - a2)) / (b - a) + a2;
  }

  // from https://github.com/ethercreative/react-native-shadow-generator/blob/master/index.html
  toStyle(): ViewStyle {
    // Reminder: on iOS, shadow will only work
    //  on solid (?) backgrounds, luckily scaffold has a background
    return {
      shadowColor: this.color,
      shadowOffset: {
        width: 0,
        height: this.depth / 2,
      },
      shadowOpacity: this.interpolate(this.depth, 1, 24, 0.2, 0.6),
      // FIXME: this does not follow the linked impl.
      shadowRadius: this.interpolate(this.depth, 1, 38, 1, 16),
      elevation: this.depth,
    };
  }
}
