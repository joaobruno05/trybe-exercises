const myRemove = require('./script2.js');

// 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

describe('Check the function myRemove(arr, item)', () => {
  // 1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  test('if the return is the array expected', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // 2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  test('if the return is not the array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  });
  // 3. Verifique se o array passado por parâmetro não sofreu alterações
  test('if the parameter array was not altered', () => {
    expect(myRemove([1, 2, 3, 4])).toHaveLength(4);
  });
  // 4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  test('if the return is [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
