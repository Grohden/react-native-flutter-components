import type { BoxDecoration } from '@lib/styles';
import React from 'react';
import { Container } from './Container';

export const DecoratedBox = Container as React.FC<{
  boxDecoration: BoxDecoration;
  // FIXME: maybe its better to make this a component, but its usually a practice to
  //  clip children when using radius, so for now it makes sense
  clipsChildren?: boolean;
}>;
