export class BorderRadius {
  private constructor(private value: number) {}

  // For now we only support circular.
  static circular(value: number) {
    return new BorderRadius(value);
  }

  toStyle() {
    return {
      borderRadius: this.value,
    };
  }
}
