/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition (+): adds two numbers together
 *   subtract   - Subtraction (−): finds the difference between two numbers
 *   multiply   - Multiplication (×): computes the product of two numbers
 *   divide     - Division (÷): divides the first number by the second (error on divide-by-zero)
 *   modulo     - Modulo (%): returns the remainder of dividing the first number by the second
 *   power      - Exponentiation (**): raises base to the given exponent
 *   squareRoot - Square Root (√): returns the square root of a number (error on negative input)
 *
 * Usage:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 *   node calculator.js modulo 10 3
 *   node calculator.js power 2 8
 *   node calculator.js squareRoot 144
 */

// Addition (+): returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction (−): returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication (×): returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division (÷): returns the quotient of a divided by b; throws on division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Modulo (%): returns the remainder of a divided by b; throws on modulo by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// Exponentiation (**): returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root (√): returns the square root of n; throws on negative input
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Only run CLI logic when this file is executed directly (not when required by tests)
if (require.main === module) {

// CLI entry point — parses arguments from process.argv
const [, , operation, rawA, rawB] = process.argv;

if (!operation || rawA === undefined) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]');
  process.exit(1);
}

const a = parseFloat(rawA);
const b = rawB !== undefined ? parseFloat(rawB) : NaN;

if (isNaN(a)) {
  console.error('Error: First argument must be a valid number');
  process.exit(1);
}

// squareRoot only needs one argument; all others need two
const needsTwoArgs = operation !== 'squareRoot';
if (needsTwoArgs && (rawB === undefined || isNaN(b))) {
  console.error('Error: Second argument must be a valid number for this operation');
  process.exit(1);
}

let result;
switch (operation) {
  case 'add':
    result = add(a, b);
    break;
  case 'subtract':
    result = subtract(a, b);
    break;
  case 'multiply':
    result = multiply(a, b);
    break;
  case 'divide':
    try {
      result = divide(a, b);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    break;
  case 'modulo':
    try {
      result = modulo(a, b);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    break;
  case 'power':
    result = power(a, b);
    break;
  case 'squareRoot':
    try {
      result = squareRoot(a);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    break;
  default:
    console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareRoot.`);
    process.exit(1);
}

console.log(operation === 'squareRoot' ? `√${a} = ${result}` : `${a} ${operation} ${b} = ${result}`);
}
