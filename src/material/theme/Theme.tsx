import { AppBarTheme } from '@lib/material/app-bar-theme';
import { ThemeData } from '@lib/material/theme-data';
import React, { Children, createContext, useContext } from 'react';

const Context = createContext<ThemeData | null>(null);

export const useTheme = () => {
  const theme = useContext(Context);

  if (!theme) {
    throw new Error('Theme context is required');
  }

  return theme;
};

export const Theme = (
  {
    themeData,
    children,
  }: {
    themeData: ThemeData;
    children: React.ReactChild;
  },
) => (
  <Context.Provider value={themeData}>
    <AppBarTheme themeData={themeData.appBarTheme}>
      {Children.only(children)}
    </AppBarTheme>
  </Context.Provider>
);
