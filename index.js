const name = "Susan";
const height = 39; // must be a NUMBER < 40
const message = `${name} is ${height} inches tall`;

function sayHello() {
  console.log("Hello!");
}

function sayHelloTo(person) {
  console.log(`Hello, ${person}!`);
}

function add(x, y) {
  return x + y;
}

// Export everything your tests might need
module.exports = { name, height, message, add, sayHello, sayHelloTo };

// optional demo output
console.log(add(5, 10));
sayHelloTo("Miles");
