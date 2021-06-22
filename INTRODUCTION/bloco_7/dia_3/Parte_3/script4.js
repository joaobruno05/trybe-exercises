const assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

// Testes:

// 1 - Verificar se secondThirdSmallest é uma função
assert.strictEqual(typeof secondThirdSmallest, 'function');

// 2 - Verificar se o retorno de secondThirdSmallest(parameter) é result
assert.deepStrictEqual(secondThirdSmallest(parameter), result);