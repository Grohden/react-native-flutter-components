import React, { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

export enum ContextBehavior {
  MERGE,
  OVERRIDE,
}

export const createComponentContext = <T,>(
  initial: T,
  behavior: ContextBehavior = ContextBehavior.OVERRIDE,
) => {
  const Context = createContext(initial);

  const useComponentContext = () => useContext(Context);

  const Provider = (props: { children?: ReactNode | undefined; value: T }) => {
    const parent = useComponentContext();

    let effectiveValue = props.value;

    if (behavior === ContextBehavior.MERGE) {
      // 'behavior' is a const defined in the upper closure,
      // this should not change between renders, so it's not a truly
      // conditional 'on render' hook call
      // eslint-disable-next-line react-hooks/rules-of-hooks
      effectiveValue = useMemo(
        () => ({
          ...parent,
          ...props.value,
        }),
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
