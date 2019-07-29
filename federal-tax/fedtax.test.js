import { calulateTax } from "./fedtax";

test("When you pay no taxes", () => {
  expect(calulateTax(0, 0, 0)).toBe(0);
});


test("single with 2 allowance increment", () => {
    expect(calulateTax(0, 0, 0)).toBe(0);
  });