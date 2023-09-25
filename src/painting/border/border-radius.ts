import type { Double } from '@lib/std-ui';

export class BorderRadius {
  private constructor(private value: number) {}

  // For now, we only support circular.
  static circular(radius: Double) {
    return new BorderRadius(radius);
  }

  toStyle() {
    return {
      borderRadius: this.value,
    };
  }
}
