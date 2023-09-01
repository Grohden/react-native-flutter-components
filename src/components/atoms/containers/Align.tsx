import type { AlignmentGeometry } from '@lib/styles';
import React from 'react';
import { Container } from './Container';

export const Align = Container as React.FC<{ align: AlignmentGeometry }>;
