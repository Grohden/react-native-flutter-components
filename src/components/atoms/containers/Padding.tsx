import type { EdgeInsets } from '@lib/styles';
import React from 'react';
import { Container } from './Container';

export const Padding = Container as React.FC<{ padding: EdgeInsets }>;
