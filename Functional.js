// ## Functional Programming
console.log(`## Functional Programming`)
// 1. Assign a function to a varible
const addAssigning = function(a, b) {
  return a + b;
}
console.log(`Assigning: ${addAssigning(1, 6)}`);
// 2. Returning a function
function addReturning(a, b) {
  return function() {
    return a + b;
  }
}
const addTwoNumber = addReturning(1, 6);
console.log(`Returning: ${addTwoNumber()}`)
// 3. Accepting a function as an argument
function addNumber(a, b) {
  return a + b;
}
function addAcception(add, a, b) {
  return add(a, b);
}
console.log(`Accepting: ${addAcception(addNumber, 1, 6)}`);

// ## Higher Order Function (have 2. and 3.)
console.log(`## Higher Order Function`)
let persons = [
  {name: "John", age: 17},
  {name: "Jane", age: 10},
  {name: "Jack", age: 15},
]
console.log(`Example arr: `, persons);

// 1. Filter
const pFilter = persons.filter(person => person.age <= 15);
console.log(`Filter: `, pFilter);

// 2. Map
const pMap = persons.map(person => ({...person, age: person.age *2}));
console.log(`Map: `, pMap);

// 3. Reduce
const pReduce = persons.reduce((age, person) => age + person.age, 0);
console.log(`Reduce: ${pReduce}`);
// const pReduce = persons.reduce((age, person) => {
//   return age + person.age;
// }, init value);

// 4. forEach
persons.forEach(person => console.log(`forEach: Name ${person.name}, age ${person.age}`));

// 5. find, findIndex
const findJane = persons.find(person => person.name === `Jane`);
console.log(`find "jane": `, findJane);
const findIndexJane = persons.findIndex(person => person.name === `Jane`);
console.log(`findIndex "jane": `, findJane);

// 6. Every, Some
const pEvery = persons.every(person => person.age <= 15);
console.log(`Every "<15": ${pEvery}`);
const pSome = persons.some(person => person.age <= 15);
console.log(`Some "<15": ${pSome}`);

// ## Closures
console.log(`## Closures`)

function outer() {
  const name = `Outer`;
  return function inner() {
    console.log(`Outer name: ${name}`);
  }
}
const innerFunction = outer();
innerFunction();

// Data Privacy
function createTimes() {
  let counter = 0;
  return function times() {
    counter += 1;
    console.log(`Counter: ${counter}`);
  }
}
const times = createTimes();
times();
times();
times();

// Stateful function
function sum(x) {
  return function(y) {
    return x + y;
  }
}

const addFive = sum(5);
const addTen = sum(10);

console.log(`add five: ${addFive(10)}`);
console.log(`add five: ${addTen(10)}`);

// ## Recursion
console.log(`## Recursion`)

function countDown(n) {
  if (n<0) return;
  console.log(`Countdown: ${n}`);
  countDown(n-1);
}
countDown(5);

// Example use 1
function factorial(n) {
  // Base case
  if (n===1) return 1;
  // Recursive case
  return n * factorial(n-1);
}

console.log(`Factorial: ${factorial(4)}`);

// Example use 2
function reverse(str) {
  if (str.length === 1) return str;
  const [firstCharacter] = str;
  const remainingCharacters = str.substring(1);
  return reverse(remainingCharacters) + firstCharacter;
}

console.log(`Reverse: ${reverse(`Jirayu`)}`)