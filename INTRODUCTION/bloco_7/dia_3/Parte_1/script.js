const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// 1.1 - Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9, '4 + 5 = 9!');

// 1.2 - Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');

// 1.3 e 1.4 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.strictEqual(sum(4, "5"), 45);