/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition (+): adds two numbers together
 *   subtract - Subtraction (−): finds the difference between two numbers
 *   multiply - Multiplication (×): computes the product of two numbers
 *   divide   - Division (÷): divides the first number by the second (error on divide-by-zero)
 *
 * Usage:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
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

module.exports = { add, subtract, multiply, divide };

// Only run CLI logic when this file is executed directly (not when required by tests)
if (require.main === module) {

// CLI entry point — parses arguments from process.argv
const [, , operation, rawA, rawB] = process.argv;

if (!operation || rawA === undefined || rawB === undefined) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
  process.exit(1);
}

const a = parseFloat(rawA);
const b = parseFloat(rawB);

if (isNaN(a) || isNaN(b)) {
  console.error('Error: Both arguments must be valid numbers');
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
  default:
    console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
    process.exit(1);
}

console.log(`${a} ${operation} ${b} = ${result}`);
}
