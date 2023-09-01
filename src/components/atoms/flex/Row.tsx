import { Axis } from '@lib/styles';
import React from 'react';
import { Flex } from './Flex';

export const Row = (
  props: Omit<React.ComponentProps<typeof Flex>, 'direction'>,
) => <Flex direction={Axis.horizontal} {...props} />;
