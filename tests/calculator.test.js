const calc = require('../src/calculator');

describe('Calculator', () => {
    // Test case: Addition
    describe('Addition', () => {
        it('should return the correct sum of two numbers', () => {
            expect(calc(2, '+', 3)).toBe(5);
        });
        describe('Addition With Negative Numbers', () => {
            // Test case: Negative numbers
            it('should handle negative numbers correctly', () => {
                expect(calc(-8, '+', 5)).toBe(-3);
            });
        });
    });
    // Test case: Subtraction
    describe('Subtraction', () => {
        it('should return the correct difference of two numbers', () => {
            expect(calc(5, '-', 2)).toBe(3);
        });
    });
    // Test case: Multiplication
    describe('Multiplication', () => {
        it('should return the correct product of two numbers', () => {
            expect(calc(4, '*', 6)).toBe(24);
        });
    });
    // Test case: Division
    describe('Division', () => {
        it('should return the correct quotient of two numbers', () => {
            expect(calc(10, '/', 2)).toBe(5);
        });
        // Test case: Division by zero

        it('should throw an error when dividing by zero', () => {
            expect(() => calc(6, '/', 0)).toThrow('Division by zero');
        });
    });

    describe("Decimal Numbers", () => {
        // Test case: Decimal numbers
        it('should handle decimal numbers correctly', () => {
            expect(calc(3.5, '*', 2)).toBe(7);
        });
    });
    // Test case: Order of operations
    describe('Order of Operations', () => {
        it('should follow the correct order of operations', () => {
            expect(calc(2, '+', 3, '*', 4)).toBe(14);
        });
        it('should follow the correct order of operations', () => {
            expect(calc(2, '*', 3, '+', 4)).toBe(10);
        });
    });

    // Test case: Invalid operator
    describe('Invalid input', () => {
        it('should throw an error for an invalid operator', () => {
            expect(() => calc(5, '$', 3)).toThrow('Invalid operator');
        });
        // Test case: Invalid input type
        it('should throw an error for invalid input types', () => {
            expect(() => calc('2', '+', 3)).toThrow('Invalid input');
        });
        // Test case: Invalid input
        it('should throw an error for invalid input', () => {
            expect(() => calc(2, '+', 3, 3, 3)).toThrow('Invalid input');
        });
        // Test case: Less than 3 arguments
        it('should throw an error for less than 3 arguments', () => {
            expect(() => calc(2)).toThrow('Invalid input');
        });

        // test case: all input is operators
        it('should throw an error for all input is operators', () => {
            expect(() => calc('+', '+', '+')).toThrow('Invalid input');
        });

        // test case: all input is numbers
        it('should throw an error for all input is numbers', () => {
            expect(() => calc(1, 2, 3)).toThrow('Invalid input');
        });
        // test case: all input is zeros
        it('should return 0 for all input is zeros', () => {
            expect(() => calc(0, 0, 0)).toThrow('Invalid input');
        });

        // test case: all operators are the same
        it('should throw an error for all operators are the same', () => {
            expect(() => calc(1, '+', '+')).toThrow('Invalid input');
        });

        // test case: operator is the first element
        it('should throw an error for operator is the first element', () => {
            expect(() => calc('+', 2, 3)).toThrow('Invalid input type');
        });

        // test case: operator is the last element
        it('should throw an error for operator is the last element', () => {
            expect(() => calc(2, 3, '+')).toThrow('Invalid input type');
        });

        // test case: operator is the first and last element
        it('should throw an error for operator is the first and last element', () => {
            expect(() => calc('+', 2, 3, '+')).toThrow('Invalid input type');
        });

        // test case: operator is a decimal number
        it('should throw an error for operator is a decimal number', () => {
            expect(() => calc(2, 3.5, 4)).toThrow('Invalid input type');
        });

        // test case: operator is a string decimal number
        it('should throw an error for operator is a string decimal number', () => {
            expect(() => calc(2, '3.5', 4)).toThrow('Invalid operator');
        });

        // test case: string number in the middle
        it('should throw an error for string number in the middle', () => {
            expect(() => calc(2, '+', 5, '*', '4', '/', 0)).toThrow('Invalid input type');
        });
    });
    describe('Numbers greater than 1000', () => {
        // Test case: Numbers greater than 1000
        it('should ignore numbers greater than 1000', () => {
            expect(calc(1001, '+', 2)).toBe(2);
        });
    });
    // Test case: Empty input
    describe('Empty input', () => {
        it('should throw an error for empty input', () => {
            expect(() => calc()).toThrow('Invalid input');
        });
    });

    // Test case: multiple numbers greater than 1000
    describe('Multiple numbers greater than 1000', () => {
        it('should ignore numbers greater than 1000', () => {
            expect(calc(1001, '+', 1001)).toBe(0);
        });
    });
    // Test case: multiple numbers greater than 1000
    describe('Multiple numbers greater than 1000 with also numbers les than zero', () => {
        it('should ignore numbers greater than 1000', () => {
            expect(calc(1001, '+', 2, '-', 1, '*', 1002)).toBe(1);
        });
    });
    // Test case: multiple numbers greater than 1000
    describe('Multiple numbers greater than 1000 with also numbers les than zero', () => {
        it('should ignore numbers greater than 1000', () => {
            expect(calc(2, '-', 10005, '*', 1002)).toBe(2);
        });
    });
    describe("Floating Point Numbers", () => {
        expect(calc(-1.5, '*', 4)).toBe(-6);
        expect(calc(2, '/', -2)).toBe(-1);
        expect(calc(-3, '-', -2)).toBe(-1);
    });
});