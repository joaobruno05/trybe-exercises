const sum = require('./script1.js');

// 1. A função sum(a, b) retorna a soma do parâmetro a com o b

describe('Check the return of the function sum', () => {
  // 1. Teste se o retorno de sum(4, 5) é 9
  test('test if sum of the 4 and 5 is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  // 2. Teste se o retorno de sum(0, 0) é 0
  test('test if sum of the 0 and 0 is 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  // 3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  test('test if the sum function return an error', () => {
    expect(() => {
      sum(4, '5');
  }).toThrow();
  });
  // 4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  test('test if the sum function return an error with the message "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
  }).toThrow('parameters must be numbers');
  });
});