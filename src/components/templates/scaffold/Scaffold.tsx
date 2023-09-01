import { Expanded } from '@lib/components';
import React from 'react';
import type { ReactNode } from 'react';

export const Scaffold = (props: {
  topAppBar?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <Expanded>
      {props.topAppBar}
      {props.children}
    </Expanded>
  );
};
