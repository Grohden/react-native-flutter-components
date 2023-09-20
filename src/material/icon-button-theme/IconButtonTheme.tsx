import React, { createContext, useContext } from 'react';

import type { IconButtonThemeData } from '@lib/material/icon-button-theme-data';

const Context = createContext<IconButtonThemeData | null>(null);

export const useIconButtonTheme = () => {
  const theme = useContext(Context);

  if (!theme) {
    throw new Error('IconButtonTheme context is required');
  }

  return theme;
};

export const IconButtonTheme = (
  props: {
    data: IconButtonThemeData;
    children: React.ReactChild;
  },
) => (
  <Context.Provider value={props.data}>
    {props.children}
  </Context.Provider>
);
