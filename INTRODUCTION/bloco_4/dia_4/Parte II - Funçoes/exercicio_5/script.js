//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete

function mostrarNumeroQueMaisRepete (numeros) {
let somaMaior = 0;
let numeroRepetido = 0;

  for (let i = 0; i < numeros.length; i += 1) {
    let soma = 1;
    for (let j = 0; j < numeros.length; j += 1) {
      if (i !== j){
        if (numeros[i] === numeros[j]) {
          soma += 1;
          if (soma > somaMaior) {
            somaMaior = soma;
            numeroRepetido = numeros[i];
          }
        }
      }
    }
  }
  return numeroRepetido;
}

console.log(mostrarNumeroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]));
