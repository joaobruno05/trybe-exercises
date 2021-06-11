//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N
//Valor de teste: N = 5
//Valor esperado no retorno da função: 1+2+3+4+5 = 15

function somaNumeros (numero) {
  let soma = 0;

  for (let index = 1; index <= numero; index += 1 ) {
    soma += index;
  }
  return soma;
}

console.log(somaNumeros(5));
