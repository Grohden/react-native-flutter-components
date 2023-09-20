import { clampDouble } from '@material/material-color-utilities';
import type { ViewStyle } from 'react-native';

export type EdgeInsetsSymmetric = { vertical?: number; horizontal?: number };

export type EdgeInsetsOnly = {
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
};

// To bypass circular declaration refs
let cachedInfinity: MixedEdgeInsets | null = null;

export abstract class EdgeInsetsGeometry {
  static get infinity() {
    // eslint-disable-next-line no-return-assign
    return cachedInfinity ||= MixedEdgeInsets.fromLRSETB(
      Infinity,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
    );
  }

  get top() {
    return this._top;
  }
  get start() {
    return this._start;
  }
  get left() {
    return this._left;
  }
  get end() {
    return this._end;
  }
  get right() {
    return this._right;
  }
  get bottom() {
    return this._bottom;
  }

  protected constructor(
    protected _left: number,
    protected _right: number,
    protected _start: number,
    protected _end: number,
    protected _top: number,
    protected _bottom: number,
  ) {}

  add(other: EdgeInsetsGeometry): EdgeInsetsGeometry {
    return MixedEdgeInsets.fromLRSETB(
      this._left + other._left,
      this._right + other._right,
      this._start + other._start,
      this._end + other._end,
      this._top + other._top,
      this._bottom + other._bottom,
    );
  }

  clamp(min: EdgeInsetsGeometry, max: EdgeInsetsGeometry): EdgeInsetsGeometry {
    return MixedEdgeInsets.fromLRSETB(
      clampDouble(min._left, max._left, this._left),
      clampDouble(min._right, max._right, this._right),
      clampDouble(min._start, max._start, this._start),
      clampDouble(min._end, max._end, this._end),
      clampDouble(min._top, max._top, this._top),
      clampDouble(min._bottom, max._bottom, this._bottom),
    );
  }

  toPaddingStyles() {
    const values: ViewStyle = {};

    if (this._top !== 0) {
      values.paddingTop = this._top;
    }
    if (this._bottom !== 0) {
      values.paddingBottom = this._bottom;
    }

    if (this._start !== 0) {
      values.paddingStart = this._start;
    }
    if (this._end !== 0) {
      values.paddingEnd = this._start;
    }

    if (this._left !== 0) {
      values.paddingLeft = this._left;
    }
    if (this._right !== 0) {
      values.paddingRight = this._right;
    }

    return values;
  }
}

// Users will not be able to call the only constructor, so it's ok
// to keep it as class
export class EdgeInsets extends EdgeInsetsGeometry {
  private constructor(
    _top: number,
    _left: number,
    _right: number,
    _bottom: number,
  ) {
    super(_left, _right, 0, 0, _top, _bottom);
  }

  static zero = new EdgeInsets(0, 0, 0, 0);

  static fromLTRB(left: number, top: number, right: number, bottom: number) {
    return new EdgeInsets(top, left, right, bottom);
  }

  static only(values: EdgeInsetsOnly) {
    return new EdgeInsets(
      values.top ?? 0,
      values.left ?? 0,
      values.right ?? 0,
      values.bottom ?? 0,
    );
  }

  static symmetric(values: EdgeInsetsSymmetric) {
    return new EdgeInsets(
      values.vertical ?? 0,
      values.horizontal ?? 0,
      values.horizontal ?? 0,
      values.vertical ?? 0,
    );
  }

  static all(value: number) {
    return new EdgeInsets(value, value, value, value);
  }

  add(other: EdgeInsetsGeometry): EdgeInsetsGeometry {
    if (other instanceof EdgeInsets) {
      return this.sum(other);
    }

    return super.add(other);
  }

  // operators
  sum(other: EdgeInsets): EdgeInsets {
    return EdgeInsets.fromLTRB(
      this.left + other.left,
      this.top + other.top,
      this.right + other.right,
      this.bottom + other.bottom,
    );
  }
}

class MixedEdgeInsets extends EdgeInsetsGeometry {
  static fromLRSETB(
    left: number,
    right: number,
    start: number,
    end: number,
    top: number,
    bottom: number,
  ) {
    return new MixedEdgeInsets(left, right, start, end, top, bottom);
  }

  get isNonNegative() {
    return this._left >= 0.0
      && this._right >= 0.0
      && this._start >= 0.0
      && this._end >= 0.0
      && this._top >= 0.0
      && this._bottom >= 0.0;
  }
}
