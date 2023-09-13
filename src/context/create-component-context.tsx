import React, { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

export const createComponentContext = <T,>(
  initial: T,
  merger?: (oldValue: T, newValue: T) => T,
) => {
  const Context = createContext(initial);

  const useComponentContext = () => useContext(Context);

  const Provider = (props: { children?: ReactNode | undefined; value: T }) => {
    const parent = useComponentContext();

    let effectiveValue = props.value;

    if (merger) {
      // 'behavior' is a const defined in the upper closure,
      // this should not change between renders, so it's not a truly
      // conditional 'on render' hook call
      // eslint-disable-next-line react-hooks/rules-of-hooks
      effectiveValue = useMemo(
        () => (merger(parent, props.value)),
        [parent, props.value],
      );
    }

    return (
      <Context.Provider value={effectiveValue}>
        {props.children}
      </Context.Provider>
    );
  };

  return { Provider, useComponentContext };
};
