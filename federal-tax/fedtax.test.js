import { calulateTax } from './fedtax';

test('When you have no income', () => {
    expect(calulateTax(0, 0, 0)).toBe(0);
    expect(calulateTax(70, 0, 0)).toBe(0);
    expect(calulateTax(0, 90, 0)).toBe(0);
    expect(calulateTax(70, 90, 0)).toBe(0);
});

test('Single , income higher than all brackets', () => {
    expect(calulateTax(0, 0, 10000)).toBeCloseTo(3103.48);
});

test('Married , income higher than all brackets', () => {
    expect(calulateTax(1, 0, 10000)).toBeCloseTo(2854.45);
});
