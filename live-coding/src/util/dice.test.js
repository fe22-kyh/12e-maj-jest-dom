import { throwDice } from "./dice";

test("dice value not more than size value", () => {
  const result = throwDice(6);

  expect(result).toBeGreaterThan(0);
  expect(result).toBeLessThan(7);
});