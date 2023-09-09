import React from 'react';

import type { EdgeInsets } from '@lib/painting';
import { Container } from './Container';

export const Padding = Container as React.FC<{ padding: EdgeInsets }>;
