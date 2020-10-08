Stemwijzer 2020

note on for loop 
for (initialExpression, condition, incrementExpression) {
    statements
}
initial expression defines an expression
condition compares the initial expression, as long as the value is true, the for loop will run
incrementExpression; add an operator to increment the initial expression


for(let i = 0; i <5;) {
    console.log('hello World');
}
i = index/loop variable
i<5: run as long as the value of i is less than 5, a value above 5 means the condition is not met
++ = increment operator
statements run as long as the for loop runs

dot notation is json object related 
myObj = { "name":"John", "age":30, "car":null };
x = myObj.name; 
"name" is defined in the braces, and dot notation lets you access it.

function() {

}
between curly brackets is the "body" and is where
you program logic/statements, between parentheses is "inputs", referred to as "parameters"
a parameter is a variable only active in the function

a parameter is a declaration, an argument is the value 

function greet(name) {
    console.log('hello' + name):
}

greet('John')


example of .map:
/*const numbers = [1, 2, 3];

const items = numbers.map(n => {
    const obj = { value: n };
    return obj;

});
*/