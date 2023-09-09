import type { Color } from '@lib/std-ui';

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
  primary: '#6750A4',
  primaryContainer: '#EADDFF',
  onPrimaryContainer: '#21005E',
  surface: '#FEF7FF',
  surfaceContainer: '#F3EDF7',
  surfaceContainerHighest: '#E6E0E9',
  onSurface: '#1C1B1F',
  outline: '#79747E',
  background: '#FEF7FF',
  onBackground: '#1C1B1F',
} satisfies ColorTokens;
