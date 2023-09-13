import { Color } from '@lib/std-ui';

export type ColorTokens = {
  primary: Color;
  primaryContainer: Color;
  onPrimaryContainer: Color;
  surface: Color;
  surfaceContainer: Color;
  surfaceContainerHighest: Color;
  onSurface: Color;
  outline: Color;
  background: Color;
  onBackground: Color;
};

export const lightColorTokens = {
  primary: Color('#6750A4'),
  primaryContainer: Color('#EADDFF'),
  onPrimaryContainer: Color('#21005E'),
  surface: Color('#FEF7FF'),
  surfaceContainer: Color('#F3EDF7'),
  surfaceContainerHighest: Color('#E6E0E9'),
  onSurface: Color('#1C1B1F'),
  outline: Color('#79747E'),
  background: Color('#FEF7FF'),
  onBackground: Color('#1C1B1F'),
} satisfies ColorTokens;
