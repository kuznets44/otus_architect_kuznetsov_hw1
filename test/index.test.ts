const { solve } = require('../src/index');

expect.extend({
  toHaveEqualValues(received: number []) {
    const pass: boolean = received.length > 1 && (new Set(received).size === 1);
    if (pass) {
      return {
        message: () =>
          `expected ${received} to have equal values`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to have equal values`,
        pass: false,
      };
    }
  },
});

// #3
test('Should return the empty array for x^2 + 1 = 0', () => {
  expect(solve(1, 0, 1)).toEqual([]);
});

// #5
test('Should return the [1, -1] array for x^2 - 1 = 0', () => {
  expect(solve(1, 0, -1)).toEqual([1, -1]);
});

// #7
test('Should return the equal values in array for x^2 + 2x + 1 = 0', () => {
  expect(solve(1, 2, 1)).toHaveEqualValues();
});

// #9
test('Should throw the exception for 2x + 1 = 0 ( a = 0)', () => {
  expect(() => {
    solve(0, 2, 1)
  }).toThrow();
});

// #11
/**
 * EPS = 1e-5
 * d should be less than EPS
 * 
 * d = b^2 - 4ac, so
 * let b = 1
 * 
 * 1 - 4ac < EPS
 * let a = 0.5
 * 
 * 1 - 4*0.5*a < EPS
 * 1 - 2a < EPS
 * 1 - EPS < 2a
 * (1 - EPS) / 2 < a
 * 
 * let a = 0.499999
 */
test('Should return the equal values in array for 0.499999*x^2 + x + 0.5 = 0', () => {
  expect(solve(0.499999, 1, 0.5)).toHaveEqualValues();
});

// #13
test('Should throw for 5,5x^2 + 2x + 1.1 = 0', () => {
  expect(() => {
    solve("5,5", 2, 1.1)
  }).toThrow();
});

test('Should throw for x^2 + 2x + Infinity = 0', () => {
  expect(() => {
    solve(1, 2, Infinity)
  }).toThrow();
});