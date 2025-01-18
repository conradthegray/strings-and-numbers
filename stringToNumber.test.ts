import { assertEquals } from "@std/assert";
import { stringToNumber } from "./stringToNumber.ts";

const testCases = [
  { string: "zero", result: 0 },
  { string: "one", result: 1 },
  { string: "ten", result: 10 },
  { string: "eleven", result: 11 },
  { string: "twenty", result: 20 },
  { string: "twenty one", result: 21 },
  { string: "one hundred", result: 100 },
  { string: "one hundred twenty", result: 120 },
  { string: "one hundred twenty three", result: 123 },
  { string: "one thousand", result: 1000 },
  { string: "two thousand five hundred", result: 2500 },
  { string: "ten thousand", result: 10000 },
  { string: "twenty five thousand three hundred forty five", result: 25345 },
  { string: "one hundred thousand", result: 100000 },
  { string: "one million", result: 1000000 },
  { string: "two million three hundred thousand", result: 2300000 },
  {
    string:
      "four million five hundred sixty seven thousand eight hundred ninety",
    result: 4567890,
  },
  { string: "one billion", result: 1000000000 },
  {
    string:
      "two billion one hundred forty seven million four hundred eighty three thousand six hundred forty seven",
    result: 2147483647,
  },
  { string: "nine hundred billion", result: 900000000000 },
  { string: "one trillion", result: 1000000000000 },
];

Deno.test("stringToNumber", () => {
  testCases.forEach(({ string, result }) => {
    assertEquals(stringToNumber(string), result, `${string} -> ${result}`);
  });
});
