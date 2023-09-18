import React from 'react';

import { EdgeInsetsGeometry } from '@lib/painting';
import { Container } from './Container';

export const Padding = Container as React.FC<{ padding: EdgeInsetsGeometry }>;
