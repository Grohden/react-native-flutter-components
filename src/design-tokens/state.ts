// FIXME: I couldn't find in the MD site the table for state token values
//  these are just guesses

type StateToken = {
  stateLayerOpacity: number;
};

export type StateTokens = {
  pressed: StateToken;
};
export const stateTokens = {
  pressed: {
    stateLayerOpacity: 0.2,
  },
} satisfies StateTokens;
