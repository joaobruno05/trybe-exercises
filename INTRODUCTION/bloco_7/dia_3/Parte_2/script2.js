const assert = require('assert');

const wordLengths = () => {
  let array = [];
  for (let index = 0; index < words.length; index += 1) {
    array.push(words[index].length);
  }
  return array;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);