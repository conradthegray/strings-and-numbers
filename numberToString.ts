import { MULTIPLIER_TO_WORD, NUMBER_TO_WORD } from "./constants.ts";

const multipliers = Object.keys(MULTIPLIER_TO_WORD)
  .map(Number)
  .sort((a, b) => b - a);

export function numberToString(num: number): string {
  if (num === 0) {
    return NUMBER_TO_WORD[0];
  }

  function chunkNumber(n: number): string[] {
    const parts: string[] = [];

    if (n < 20) {
      parts.push(NUMBER_TO_WORD[n]);
    } else if (n < 100) {
      const tens = Math.floor(n / 10) * 10;
      const remainder = n % 10;
      parts.push(NUMBER_TO_WORD[tens]);

      if (remainder) {
        parts.push(NUMBER_TO_WORD[remainder]);
      }
    } else {
      const hundreds = Math.floor(n / 100);
      const remainder = n % 100;
      parts.push(NUMBER_TO_WORD[hundreds], MULTIPLIER_TO_WORD[100]);

      if (remainder) {
        parts.push(...chunkNumber(remainder));
      }
    }

    return parts;
  }

  const result: string[] = [];

  for (const multiplier of multipliers) {
    if (num >= multiplier) {
      const currentChunk = Math.floor(num / multiplier);
      num %= multiplier;
      result.push(...chunkNumber(currentChunk), MULTIPLIER_TO_WORD[multiplier]);
    }
  }

  if (num > 0) {
    result.push(...chunkNumber(num));
  }

  return result.join(" ");
}
