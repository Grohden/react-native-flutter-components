import React from 'react';
import { Container } from './Container';

import type { BoxConstraints } from '@lib/rendering';

export const ConstrainedBox = Container as React.FC<{
  constraints: BoxConstraints;
}>;
