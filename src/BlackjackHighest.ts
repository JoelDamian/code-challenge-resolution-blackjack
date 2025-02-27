import { CARD_NAMES, cardValues, cardPriority, MAX_VALUE, CardName, ResultValue, RESULT_VALUES } from "./constants";

const selectMaxCard = (highCard: string, actualCard: CardName): CardName => {
  if (highCard === "") return actualCard;
  if (cardValues[highCard as CardName] > cardValues[actualCard]) return highCard as CardName;
  if (cardValues[highCard as CardName] === cardValues[actualCard]) {
    return (cardPriority[highCard as CardName] ?? 0) > (cardPriority[actualCard] ?? 0) ? highCard as CardName : actualCard;
  }
  return actualCard;
};

const getResultValue = (total: number): ResultValue => {
  if (total === MAX_VALUE) return RESULT_VALUES.BLACKJACK;
  if (total > MAX_VALUE) return RESULT_VALUES.ABOVE;
  return RESULT_VALUES.BELOW;
};

export function blackjackHighest(dealedCards: CardName[]) {
    let total = 0;
    let selectedCard: string = "";
    let aceCards = 0;
  
    dealedCards.forEach((card: string) => {
      if (card !== CARD_NAMES.ACE) {
        total += cardValues[card as CardName];
      } else {
        aceCards += 1;
      }
      selectedCard = selectMaxCard(selectedCard, card as CardName);
    });
  
    if (aceCards > 0) {
      total += aceCards;
      if (total + 10 <= MAX_VALUE) {
        total += 10;
        selectedCard = CARD_NAMES.ACE;
      }
    }
    return `${getResultValue(total)} ${selectedCard}`;
}
