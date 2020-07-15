//const name = prompt("Hi, please enter your name");
//const age = prompt("Please enter your age");
//alert(`Hi ${name}, you are ${age} years old`);

const num1 = prompt("Please enter first number ");
const num2 = prompt("Please enter second number");
// parseInt() function converted String to Int
// I use this function, because num1 and num2 are strings, but I need integer

const sum = parseInt(num1) + parseInt(num2);
alert(`The sum of your entered number will be ${sum}`);