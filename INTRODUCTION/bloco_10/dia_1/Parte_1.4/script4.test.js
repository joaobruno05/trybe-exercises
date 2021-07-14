const myFizzBuzz = require('./script4');

// 4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

describe('Check the function myFizzBuzz(num)', () => {
  // 1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  test('if the function return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // 2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  test('if the function return fizz', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  // 3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  test('if the function return buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
  // 4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  test('if the function return the num expected', () => {
    expect(myFizzBuzz(11)).toEqual(11);
  });
  // 5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  test('if the function return false', () => {
    expect(myFizzBuzz('20')).toBe(false);
  });
});