import React from 'react';

// TODO: implement api usage
export const Semantics = (props: {
  container?: boolean;
  button?: boolean;
  enabled?: boolean;
  children: React.ReactChild;
}) => {
  return <>{props.children}</>;
};
