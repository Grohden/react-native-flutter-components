import React from 'react';

import { Axis } from '@lib/painting';
import { Flex } from './Flex';

export const Column = (
  props: Omit<React.ComponentProps<typeof Flex>, 'direction'>,
) => <Flex direction={Axis.vertical} {...props} />;
