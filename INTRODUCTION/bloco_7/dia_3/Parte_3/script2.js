const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let numberVowel = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      numberVowel += 1;
      results += numberVowel;
    } else {
      results += characters[index];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

// Testes:

// 1 - Testar se removeVowels é uma função
assert.strictEqual(typeof removeVowels, 'function');

// 2 - Testar se o retorno de removeVowels(parameter) é result
assert.strictEqual(removeVowels(parameter), result);