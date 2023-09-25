import type { ViewStyle } from 'react-native';

import type { Double } from '@lib/std-ui';

export class BorderRadius {
  private readonly topLeft: Double;
  private readonly topRight: Double;
  private readonly bottomLeft: Double;
  private readonly bottomRight: Double;

  private constructor(props: {
    topLeft: Double;
    topRight: Double;
    bottomLeft: Double;
    bottomRight: Double;
  }) {
    this.topLeft = props.topLeft;
    this.topRight = props.topRight;
    this.bottomLeft = props.bottomLeft;
    this.bottomRight = props.bottomRight;
  }

  // FIXME: need to implement radius class
  static all(radius: Double) {
    return BorderRadius.only({
      topLeft: radius,
      topRight: radius,
      bottomLeft: radius,
      bottomRight: radius,
    });
  }

  static circular(radius: Double) {
    return BorderRadius.all(radius);
  }

  static only({
    topLeft = 0.0,
    topRight = 0.0,
    bottomLeft = 0.0,
    bottomRight = 0.0,
  }) {
    return new BorderRadius({
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    });
  }

  static horizontal({ left = 0.0, right = 0.0 }) {
    return new BorderRadius({
      topLeft: left,
      topRight: right,
      bottomLeft: left,
      bottomRight: right,
    });
  }

  static vertical({ top = 0.0, bottom = 0.0 }) {
    return new BorderRadius({
      topLeft: top,
      topRight: top,
      bottomLeft: bottom,
      bottomRight: bottom,
    });
  }

  static zero = BorderRadius.all(0.0);

  multiply(other: Double) {
    return BorderRadius.only({
      topLeft: this.topLeft * other,
      topRight: this.topRight * other,
      bottomLeft: this.bottomLeft * other,
      bottomRight: this.bottomRight * other,
    });
  }

  toStyle(): ViewStyle {
    return {
      borderTopLeftRadius: this.topLeft,
      borderTopRightRadius: this.topRight,
      borderBottomLeftRadius: this.bottomLeft,
      borderBottomRightRadius: this.bottomRight,
    };
  }
}
