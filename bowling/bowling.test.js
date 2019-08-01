import { bowl } from './bowling';

test('total number of frames', () => {
    result = bowl();
    expect(result.frames.length).toBe(10);
});

test('total min & max test', () => {
    result = bowl();
    expect(result.total).toBeGreaterThanOrEqual(0);
    expect(result.total).toBeLessThanOrEqual(300);
});
