import { WORD_TO_MULTIPLIER, WORD_TO_NUMBER } from "./constants.ts";

export function stringToNumber(input: string): number {
  const words = input.split(" ");
  let result = 0;
  let currentNumber = 0;

  for (const word of words) {
    if (word in WORD_TO_NUMBER) {
      currentNumber += WORD_TO_NUMBER[word];
    } else if (word in WORD_TO_MULTIPLIER) {
      currentNumber *= WORD_TO_MULTIPLIER[word];

      if (word !== "hundred") {
        result += currentNumber;
        currentNumber = 0;
      }
    }
  }

  return result + currentNumber;
}
