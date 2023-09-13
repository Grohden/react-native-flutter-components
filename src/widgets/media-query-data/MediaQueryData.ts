import { EdgeInsets } from '@lib/painting';

export class MediaQueryData {
  readonly padding: EdgeInsets;

  constructor({
    padding = EdgeInsets.zero,
  }: {
    padding?: EdgeInsets;
  }) {
    this.padding = padding;
  }
}
