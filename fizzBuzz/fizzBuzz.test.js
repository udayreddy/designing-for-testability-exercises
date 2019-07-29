import { play } from './fizzBuzz';

test('Expect Fizz %3', () => {
    expect(play(6)).toBe('Fizz');
});

test('Expect Buzz %5', () => {
    expect(play(10)).toBe('Buzz');
});

test('Expect FizzBuzz %3 && %5', () => {
    expect(play(15)).toBe('FizzBuzz');
});

test('Expect number when !%3 || !%5', () => {
    expect(play(46)).toBe('46');
});

test('Expect FizzBuzz for 0', () => {
    expect(play(0)).toBe('FizzBuzz');
});
