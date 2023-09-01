import type { BoxConstraints } from '@lib/styles';
import React from 'react';
import { Container } from './Container';

export const ConstrainedBox = Container as React.FC<{
  constraints: BoxConstraints;
}>;
