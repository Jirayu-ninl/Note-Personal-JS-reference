// Closures
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
