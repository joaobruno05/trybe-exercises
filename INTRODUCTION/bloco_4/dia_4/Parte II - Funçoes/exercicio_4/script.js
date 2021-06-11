//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres

function mostrarNomeComMaiorCaracteres (nomes) {
  let maiorNumeroDeCaracteres = 0;
  let indiceMaior = 0;

  for (let index = 0; index < nomes.length; index += 1) {
    if (nomes[index].length > maiorNumeroDeCaracteres) {
      maiorNumeroDeCaracteres = nomes[index].length;
      indiceMaior = index;
    }
  }
  return nomes[indiceMaior];
}

console.log(mostrarNomeComMaiorCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
