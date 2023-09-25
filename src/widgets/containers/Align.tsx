import React from 'react';

import type { AlignmentGeometry } from '@lib/painting';
import type { Double } from '@lib/std-ui';

import { Container } from './Container';

export const Align = Container as React.FC<
  { alignment: AlignmentGeometry; widthFactor?: Double; heightFactor?: Double }
>;
