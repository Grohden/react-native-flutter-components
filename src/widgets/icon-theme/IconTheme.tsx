import { IconThemeData } from '@lib/widgets/icon-theme-data';
import React, { createContext, useContext } from 'react';

const Context = createContext<IconThemeData | null>(IconThemeData({
  size: 24,
}));

export const useIconTheme = () => {
  const theme = useContext(Context);

  if (!theme) {
    throw new Error('IconTheme context is required');
  }

  return theme;
};

export const IconTheme = (
  props: {
    data: IconThemeData;
    children: React.ReactChild;
  },
) => (
  <Context.Provider value={props.data}>
    {props.children}
  </Context.Provider>
);

IconTheme.merge = (
  props: {
    data: IconThemeData;
    children: React.ReactChild;
  },
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useIconTheme();

  return <IconTheme data={data.merge(props.data)}>{props.children}</IconTheme>;
};
