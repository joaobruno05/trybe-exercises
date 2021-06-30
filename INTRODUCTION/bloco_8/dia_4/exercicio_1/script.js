// 1 - Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const arrayReduce = arrays.reduce((acumulator, currentValue) => {
    const concatArrays = acumulator.concat(currentValue);
    return concatArrays;
  });
  return arrayReduce;
};

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);