export const board = {
  a1: {
    location: "a1",
    color: "black",
    pawn: "black"
  },
  a2: {
    location: "a2",
    color: "white",
    pawn: "black"
  },
  a3: {
    location: "a3",
    color: "black",
    pawn: "black"
  },
  b1: { location: "b1", color: "white", pawn: null },
  b2: {
    location: "b2",
    color: "black",
    pawn: "black"
  },
  b3: { location: "b3", color: "white", pawn: null },
  c1: {
    location: "c1",
    color: "black",
    pawn: "white"
  },
  c2: {
    location: "c2",
    color: "white",
    pawn: "white"
  },
  c3: {
    location: "c3",
    color: "black",
    pawn: "white"
  }
};

export const playerRules = {
  white: { movementOrder: ["c", "b", "a"], enemy: 'black', win: 'a' },
  black: { movementOrder: ["a", "b", "c"], enemy: 'white', win: 'c' }
};