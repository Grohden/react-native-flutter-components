export enum MaterialState {
  hovered,
  focused,
  pressed,
  dragged,
  selected,
  scrolledUnder,
  disabled,
  error,
}

export type MaterialStateProperty<T> = {
  resolve: (state: Set<MaterialState>) => T;
};

export const MaterialStateProperty = {
  all: <T>(value: T): MaterialStateProperty<T> => ({
    resolve: (_) => value,
  }),
};

export type MaterialStatesController = {
  value: Set<MaterialState>;
  addListener(listener: () => void): void;
  removeListener(listener: () => void): void;
  notifyListeners(): void;
  dispose(): void;
  update(state: MaterialState, add: boolean): void;
};
export const MaterialStatesController = (
  initials: MaterialState[],
): MaterialStatesController => {
  const states = new Set(initials);
  let listeners: (() => void)[] = [];
  let disposed = false;

  const assertNotDisposed = () => {
    if (disposed) {
      throw new Error('MaterialStateController is disposed');
    }

    return true;
  };

  // Naive implementation, but do we need a lib for this?
  return {
    value: states,
    addListener: (listener) => {
      assertNotDisposed();
      listeners.push(listener);
    },
    removeListener: (listener) => {
      assertNotDisposed();
      listeners = listeners.filter((l) => l !== listener);
    },
    notifyListeners: () => {
      assertNotDisposed();
      listeners.forEach((listener) => listener());
    },
    dispose() {
      disposed = true;
      listeners = [];
    },
    update(state, add) {
      assertNotDisposed();
      const changed = add ? states.add(state) : states.delete(state);

      if (changed) {
        this.notifyListeners();
      }
    },
  };
};
