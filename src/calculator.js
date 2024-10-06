function calculator(...args) {
    let num = 0;
    let operator = '+';
    let stack = [];
    // we rach the end of the array +1 so we can add the last number to the stack
    // and then perform the final operation on it.
    for (let i = 0; i <= args.length; i++) {
        if (i % 2 === 0 && typeof args[i] !== 'number') {
            throw new Error('Invalid input type');
        }
        if (typeof args[i] == 'number') {
            num = args[i] % 1001;
        } else {
            switch (operator) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(num * -1);
                    break;
                case '*':
                    // we garantee that the stack is not empty
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    if (num === 0) {
                        throw new Error('Division by zero');
                    }
                    // we garantee that the stack is not empty
                    stack.push(stack.pop() / num);
                    break;
                default:
                    throw new Error('Invalid operator');
            }
            operator = args[i];
        }
    }
    return stack.reduce((a, b) => a + b, 0);
}

module.exports = calculator;