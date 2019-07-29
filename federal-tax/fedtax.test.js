import { calulateTax } from "./fedtax";

test("When you pay no taxes", () => {
  expect(calulateTax(0, 0, 0)).toBe(0);
});
