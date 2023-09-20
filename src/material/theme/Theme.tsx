import React, { Children, createContext, useContext } from 'react';

import { AppBarTheme } from '@lib/material/app-bar-theme';
import { IconButtonTheme } from '@lib/material/icon-button-theme';
import { ThemeData } from '@lib/material/theme-data';
import { DefaultTextStyle } from '@lib/widgets';

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
) => {
  let root = Children.only(children);
  root = (
    <DefaultTextStyle value={{ style: themeData.textTheme.bodySmall! }}>
      {root}
    </DefaultTextStyle>
  );
  root = (
    <IconButtonTheme data={themeData.iconButtonTheme}>
      {root}
    </IconButtonTheme>
  );
  root = (
    <AppBarTheme themeData={themeData.appBarTheme}>
      {root}
    </AppBarTheme>
  );

  return <Context.Provider value={themeData}>{root}</Context.Provider>;
};
