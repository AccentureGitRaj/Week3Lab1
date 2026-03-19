/**
 * Unit tests for calculator.js
 *
 * Covers all seven supported operations:
 *   - Addition (+)
 *   - Subtraction (−)
 *   - Multiplication (×)
 *   - Division (÷)
 *   - Modulo (%)
 *   - Exponentiation (**)
 *   - Square Root (√)
 *
 * Includes example operations from the images:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 *   5 % 2, 2 ^ 3, √16
 * Plus edge cases for each operation.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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
  test('5 % 2 = 1 (image example)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when a is perfectly divisible by b', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('returns the remainder for larger dividend', () => {
    expect(modulo(17, 4)).toBe(1);
  });

  test('works with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('works with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('returns zero when dividend is zero', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test('throws an error when divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
  });
});

// ─── Exponentiation (**) ─────────────────────────────────────────────────────
describe('power', () => {
  test('2 ^ 3 = 8 (image example)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of zero returns one', () => {
    expect(power(99, 0)).toBe(1);
  });

  test('raises a number to the power of one returns itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a positive base to a positive exponent', () => {
    expect(power(3, 4)).toBe(81);
  });

  test('raises a negative base to an even exponent returns positive', () => {
    expect(power(-2, 4)).toBe(16);
  });

  test('raises a negative base to an odd exponent returns negative', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('raises a base to a fractional exponent (square root via power)', () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });

  test('zero raised to any positive power is zero', () => {
    expect(power(0, 5)).toBe(0);
  });
});

// ─── Square Root (√) ─────────────────────────────────────────────────────────
describe('squareRoot', () => {
  test('√16 = 4 (image example)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('√144 = 12', () => {
    expect(squareRoot(144)).toBe(12);
  });

  test('√0 = 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('√1 = 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('returns a decimal for non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142);
  });

  test('√25 = 5', () => {
    expect(squareRoot(25)).toBe(5);
  });

  // Edge case: negative input
  test('throws an error for square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed');
  });

  test('throws an error for square root of a large negative number', () => {
    expect(() => squareRoot(-100)).toThrow('Square root of a negative number is not allowed');
  });
});
