function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

console.log("Sum: " + add);
console.log("Subtract: " + subtract);
console.log("Multiply: " + multiply);
console.log("Quotient: " + divide);

