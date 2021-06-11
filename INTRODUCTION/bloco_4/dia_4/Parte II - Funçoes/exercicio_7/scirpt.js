//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word
//Valor de teste: 'trybe' e 'be'
//Valor esperado no retorno da função: true

function verificaFimPalavra (word, ending) {
  let resultado = false;
  let i = ending.length - 1;

  for (let j = word.length - 1; j >= 0; j -= 1) {
    if (ending.length > word.length){
      resultado = 'Erro! A string ending é maior que a string word.'
    } else {
      if (i >= 0) {
        if (word[j] === ending[i]){
          resultado = true;
          i -= 1;  
        } else {
          resultado = false;
          break;
        }
      } else {
        break;
      }
    } 
  }
  return resultado;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
