// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

function updateVariable() {
    let number = 30;
    console.log("Initial value:", number);

    number = 50;
    console.log("Updated value:", number);
}

updateVariable();

console.log("\n");

// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function swapValues() {
    let a = 5, b = 10;
    console.log("Before swap: a =", a, "b =", b);

    let temp = a;
    a = b;
    b = temp;

    console.log("After swap: a =", a, "b =", b);
}

swapValues();

console.log("\n");

// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

function useCompoundOperators() {
    let x = 4;
    console.log("Initial x:", x);

    x += 2;
    console.log("After addition:", x);

    x -= 1;
    console.log("After subtraction:", x);

    x *= 3; 
    console.log("After multiplication:", x);

    x /= 2;
    console.log("After division:", x);
}

useCompoundOperators();