import { BorderSide } from './border-side';
import type { BorderSideArgs } from './border-side';

type BorderDefinition = {
  top?: BorderSide;
  bottom?: BorderSide;
  left?: BorderSide;
  right?: BorderSide;
};

type Direction = 'left' | 'right' | 'top' | 'bottom';

type BorderStyles =
  & {
    [k in `border${Capitalize<Direction>}Color`]?: string;
  }
  & {
    [k in `border${Capitalize<Direction>}Width`]?: number;
  };

export class Border {
  constructor(private values: BorderDefinition) {}

  static debug(color = 'red') {
    return Border.all({ color, width: 1 });
  }

  static only(values: BorderDefinition) {
    return new Border(values);
  }

  static all(args: BorderSideArgs) {
    const side = BorderSide.new(args);

    return new Border({
      left: side,
      right: side,
      top: side,
      bottom: side,
    });
  }

  toStyle() {
    return this.toWidthStyles(this.toColorStyles({}));
  }

  private toColorStyles(ref: BorderStyles) {
    if (this.values.top?.color) {
      ref.borderTopColor = this.values.top.color;
    }
    if (this.values.bottom?.color) {
      ref.borderBottomColor = this.values.bottom.color;
    }
    if (this.values.left?.color) {
      ref.borderLeftColor = this.values.left.color;
    }
    if (this.values.right?.color) {
      ref.borderRightColor = this.values.right.color;
    }

    return ref;
  }

  private toWidthStyles(ref: BorderStyles) {
    if (this.values.top?.width !== undefined) {
      ref.borderTopWidth = this.values.top.width;
    }
    if (this.values.bottom?.width !== undefined) {
      ref.borderBottomWidth = this.values.bottom.width;
    }
    if (this.values.left?.width !== undefined) {
      ref.borderLeftWidth = this.values.left.width;
    }
    if (this.values.right?.width !== undefined) {
      ref.borderRightWidth = this.values.right.width;
    }

    return ref;
  }
}
