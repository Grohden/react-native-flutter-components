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
