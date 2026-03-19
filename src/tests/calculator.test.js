/**
 * Unit tests for calculator.js
 *
 * Covers all four supported operations:
 *   - Addition (+)
 *   - Subtraction (−)
 *   - Multiplication (×)
 *   - Division (÷)
 *
 * Includes example operations from the image:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 * Plus edge cases for each operation.
 */

const { add, subtract, multiply, divide, modulo, power, sqrt } = require('../calculator');

// ─── Addition (+) ────────────────────────────────────────────────────────────
describe('add', () => {
  test('2 + 3 = 5 (image example)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ─── Subtraction (−) ─────────────────────────────────────────────────────────
describe('subtract', () => {
  test('10 - 4 = 6 (image example)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('result is negative when second operand is larger', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ─── Multiplication (×) ──────────────────────────────────────────────────────
describe('multiply', () => {
  test('45 * 2 = 90 (image example)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplying by one returns the same number', () => {
    expect(multiply(15, 1)).toBe(15);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test('multiplies two negative numbers returns positive', () => {
    expect(multiply(-4, -3)).toBe(12);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ─── Division (÷) ────────────────────────────────────────────────────────────
describe('divide', () => {
  test('20 / 5 = 4 (image example)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(15, 3)).toBe(5);
  });

  test('returns a decimal for non-even division', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative by a positive', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers returns positive', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── Modulo (%) ──────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('modulo of a negative dividend', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('modulo of a negative divisor', () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test('modulo with decimal numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: division by zero
  test('throws an error when divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── Exponentiation (**) ─────────────────────────────────────────────────────
describe('power', () => {
  test('2 ** 8 = 256', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('raises a number to the power of 0 returns 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to the power of 1 returns itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a negative base to an even exponent returns positive', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent returns negative', () => {
    expect(power(-3, 3)).toBe(-27);
  });

  test('fractional exponent returns square root', () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });
});

// ─── Square Root (√) ─────────────────────────────────────────────────────────
describe('sqrt', () => {
  test('sqrt(25) = 5', () => {
    expect(sqrt(25)).toBe(5);
  });

  test('sqrt(0) = 0', () => {
    expect(sqrt(0)).toBe(0);
  });

  test('sqrt(2) returns irrational number', () => {
    expect(sqrt(2)).toBeCloseTo(1.41421);
  });

  test('sqrt of a perfect square returns integer', () => {
    expect(sqrt(144)).toBe(12);
  });

  test('sqrt(1) = 1', () => {
    expect(sqrt(1)).toBe(1);
  });

  // Edge case: negative number
  test('throws an error for negative input', () => {
    expect(() => sqrt(-1)).toThrow('Square root of a negative number is not allowed');
  });

  test('throws an error for negative input (large)', () => {
    expect(() => sqrt(-100)).toThrow('Square root of a negative number is not allowed');
  });
});
