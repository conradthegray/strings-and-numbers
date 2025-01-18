const numberWords: Record<number, string> = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

const multiplierWords: Record<number, string> = {
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
};

const multipliers = Object.keys(multiplierWords)
  .map(Number)
  .sort((a, b) => b - a);

export function numberToString(num: number): string {
  if (num === 0) {
    return numberWords[0];
  }

  function chunkNumber(n: number): string[] {
    const parts: string[] = [];

    if (n < 20) {
      parts.push(numberWords[n]);
    } else if (n < 100) {
      const tens = Math.floor(n / 10) * 10;
      const remainder = n % 10;
      parts.push(numberWords[tens]);

      if (remainder) {
        parts.push(numberWords[remainder]);
      }
    } else {
      const hundreds = Math.floor(n / 100);
      const remainder = n % 100;
      parts.push(numberWords[hundreds], multiplierWords[100]);

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
      result.push(...chunkNumber(currentChunk), multiplierWords[multiplier]);
    }
  }

  if (num > 0) {
    result.push(...chunkNumber(num));
  }

  return result.join(" ");
}
