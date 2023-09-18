import React from 'react';

import type { AlignmentGeometry } from '@lib/painting';
import { Container } from './Container';

export const Align = Container as React.FC<
  { alignment: AlignmentGeometry; widthFactor?: number; heightFactor?: number }
>;
