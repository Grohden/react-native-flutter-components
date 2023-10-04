import React, { createContext, useContext } from 'react';

import { AppBarThemeData } from '@lib/material/app-bar-theme-data';

const Context = createContext<AppBarThemeData | null>(null);

export const useAppBarTheme = () => {
  const theme = useContext(Context);

  if (!theme) {
    throw new Error('AppBar context is required');
  }

  return theme;
};

export const AppBarTheme = (
  {
    themeData,
    children,
  }: {
    themeData: AppBarThemeData;
    children: React.ReactChild;
  },
) => (
  <Context.Provider value={themeData}>
    {children}
  </Context.Provider>
);
