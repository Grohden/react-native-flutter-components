import React, { Children, createContext, useContext } from 'react';

import { MediaQueryData } from '@lib/widgets/media-query-data';

const Context = createContext<MediaQueryData | null>(null);

export const useMediaQuery = () => {
  const query = useContext(Context);

  if (!query) {
    throw new Error('MediaQuery context is required');
  }

  return query;
};

export const MediaQuery = (
  {
    value,
    children,
  }: {
    value: MediaQueryData;
    children: React.ReactChild;
  },
) => (
  <Context.Provider value={value}>
    {Children.only(children)}
  </Context.Provider>
);
