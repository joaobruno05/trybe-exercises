const assert = require('assert');

const greetPeople = (parameter) => {
  let greeting = [];
  let hello = 'Hello ';

  for (let person in parameter) {
    greeting.push(hello + parameter[person]);
  }
  return greeting;
};

// console.log(greetPeople(['Irina', 'Ashleigh', 'Elsa']));

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// Testes:

// 1 - Verificar se greetPeople é uma função
assert.strictEqual(typeof greetPeople, 'function');

// 2 - Verificar se o retorno de greetPeople(parameter) é result
assert.deepStrictEqual(greetPeople(parameter), result);