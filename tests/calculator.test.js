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
    });

    // Test case: Invalid operator
    describe('Invalid Operator', () => {
        it('should throw an error for an invalid operator', () => {
            expect(() => calc(5, '$', 3)).toThrow('Invalid operator');
        });
        // Test case: Invalid input type
        it('should throw an error for invalid input types', () => {
            expect(() => calc('2', '+', 3)).toThrow('Invalid input type');
        });
    });

});