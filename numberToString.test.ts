import { assertEquals } from "@std/assert";
import { numberToString } from "./numberToString.ts";

const testCases = [
  { number: 0, result: "zero" },
  { number: 1, result: "one" },
  { number: 10, result: "ten" },
  { number: 11, result: "eleven" },
  { number: 21, result: "twenty one" },
  { number: 100, result: "one hundred" },
  { number: 123, result: "one hundred twenty three" },
  { number: 1000, result: "one thousand" },
  { number: 1500, result: "one thousand five hundred" },
  { number: 20000, result: "twenty thousand" },
  { number: 25345, result: "twenty five thousand three hundred forty five" },
  { number: 100000, result: "one hundred thousand" },
  { number: 3000000, result: "three million" },
  { number: 2300000, result: "two million three hundred thousand" },
  {
    number: 4567890,
    result:
      "four million five hundred sixty seven thousand eight hundred ninety",
  },
  { number: 1000000000, result: "one billion" },
  {
    number: 2147483647,
    result:
      "two billion one hundred forty seven million four hundred eighty three thousand six hundred forty seven",
  },
  { number: 900000000000, result: "nine hundred billion" },
];

Deno.test("numberToString", () => {
  testCases.forEach(({ number, result }) => {
    assertEquals(numberToString(number), result, `${number} -> ${result}`);
  });
});
