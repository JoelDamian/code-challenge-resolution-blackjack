export const MAX_VALUE: number = 21;

export const CARD_NAMES = {
  ACE: "ace",
  TWO: "two",
  THREE: "three",
  FOUR: "four",
  FIVE: "five",
  SIX: "six",
  SEVEN: "seven",
  EIGHT: "eight",
  NINE: "nine",
  TEN: "ten",
  JACK: "jack",
  QUEEN: "queen",
  KING: "king",
} as const;

export type CardName = (typeof CARD_NAMES)[keyof typeof CARD_NAMES];

export const cardValues: Record<CardName, number> = {
  [CARD_NAMES.ACE]: 1,
  [CARD_NAMES.TWO]: 2,
  [CARD_NAMES.THREE]: 3,
  [CARD_NAMES.FOUR]: 4,
  [CARD_NAMES.FIVE]: 5,
  [CARD_NAMES.SIX]: 6,
  [CARD_NAMES.SEVEN]: 7,
  [CARD_NAMES.EIGHT]: 8,
  [CARD_NAMES.NINE]: 9,
  [CARD_NAMES.TEN]: 10,
  [CARD_NAMES.JACK]: 10,
  [CARD_NAMES.QUEEN]: 10,
  [CARD_NAMES.KING]: 10,
};

export const cardPriority: Partial<Record<CardName, number>> = {
  [CARD_NAMES.TEN]: 0,
  [CARD_NAMES.JACK]: 1,
  [CARD_NAMES.QUEEN]: 2,
  [CARD_NAMES.KING]: 3,
};

export const RESULT_VALUES = {
  BLACKJACK: "blackjack",
  ABOVE: "above",
  BELOW: "below",
} as const;

export type ResultValue = (typeof RESULT_VALUES)[keyof typeof RESULT_VALUES];