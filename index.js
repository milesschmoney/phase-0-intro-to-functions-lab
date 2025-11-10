const name = "Susan";
const height = 39; // must be a NUMBER < 40
const message = `${name} is ${height} inches tall`;

module.exports = { name, height, message };

function sayHello() {
  console.log("Hello!");
}

function sayHelloTo(person) {
  console.log(`Hello, ${person}!`);
}

function add(x, y) {
  return x + y;
}

// demo output
console.log(add(5, 10));
sayHelloTo("Miles");
