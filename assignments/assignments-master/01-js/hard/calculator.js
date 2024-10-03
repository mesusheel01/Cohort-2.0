/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note:
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor() {
        this.result = 0; // Initialize result in constructor
    }

    add(a) {
        this.result += a; // Add a to result
    }

    subtract(a) {
        this.result -= a; // Subtract a from result
    }

    multiply(a) {
        this.result *= a; // Multiply result by a
    }

    divide(a) {
        if (a === 0) throw new Error("Cannot divide by zero"); // Check for division by zero
        this.result /= a; // Divide result by a
    }

    clear() {
        this.result = 0; // Reset result to 0
    }

    getResult() {
        return this.result; // Return the current result
    }

    calculate(expression) {
        // Remove all unnecessary spaces from the expression
        const sanitizedExpression = expression.replace(/\s+/g, '');

        // Validate that the expression only contains valid characters (numbers, operators, parentheses)
        if (!/^[0-9+\-*/().]+$/.test(sanitizedExpression)) {
            throw new Error('Invalid characters in expression');
        }

        try {
            // Use eval to calculate the result, but be cautious using it in production
            this.result = eval(sanitizedExpression);
        } catch (error) {
            throw new Error('Invalid mathematical expression');
        }
    }
}

module.exports = Calculator;
