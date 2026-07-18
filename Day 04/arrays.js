let fruits = ["Apple", "Orange", "Banana"];

fruits.push("Mango");

fruits.pop();

fruits.unshift("Grapes");

fruits.shift();

console.log(fruits);

let numbers = [5, 10, 15, 20];

let doubled = numbers.map(item => item * 2);

let even = numbers.filter(item => item % 2 === 0);

let total = numbers.reduce((sum, item) => sum + item, 0);

console.log(doubled);
console.log(even);
console.log(total);