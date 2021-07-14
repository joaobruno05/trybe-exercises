const myRemoveWithoutCopy = require('./script3');

// 3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

describe('Check the function myRemoveWithoutCopy(arr, item)', () => {
  // 1. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  test('if the function return the array expected', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // 2. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  test('if the function does not return the array expected', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4,], 3)).not.toEqual([1, 2, 3, 4]);
  });
  // 3. Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  test('if the function has changed', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4])).toHaveLength(4);
  });
  // 4. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
  test('if the function return the array expected', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});