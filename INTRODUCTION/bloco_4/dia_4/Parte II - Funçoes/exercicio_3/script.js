//Crie uma função que receba um array de inteiros e retorne o índice do menor valor

function mostrarIndiceDeMenorValor (numeros) {
  let indiceMenor = 0;
  let numeroMenor = 1000;

  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] < numeroMenor){
      numeroMenor = numeros[index];
      indiceMenor = index;
    }
  }
  return indiceMenor;
}

console.log(mostrarIndiceDeMenorValor([2, 4, 6, 7, 10, 0, -3]));