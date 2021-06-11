//Crie uma função que receba um array de inteiros e retorne o índice do maior valor

function mostrarIndiceDeMaiorValor (numeros) {
  let indiceMaior = 0;
  let numeroMaior = 0;

  for (let index = 0; index < numeros.length; index += 1){
    if (numeros[index] > numeroMaior) {
      numeroMaior = numeros[index];
      indiceMaior = index;
    }
  }
  return indiceMaior;
}

console.log(mostrarIndiceDeMaiorValor ([2, 3, 6, 7, 10, 1]));
