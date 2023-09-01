import { AlignmentDirectional } from '@lib/styles';
import React from 'react';
import { Container } from './Container';

export const Center = (props: { children?: React.ReactNode | undefined }) => (
  <Container {...props} align={AlignmentDirectional.center} />
);
