//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for

function verificaPalindrome (palavra) {
  let nome = '';
  for (let index = (palavra.length) - 1; index >= 0; index -= 1) {
    nome += palavra[index];
  }
  if (palavra === nome) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
console.log(verificaPalindrome('ovo'));
