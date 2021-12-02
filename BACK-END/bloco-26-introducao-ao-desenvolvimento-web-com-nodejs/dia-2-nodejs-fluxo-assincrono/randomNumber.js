const operationNumbers = require('./index');

function generateRandomNumber() {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  const arrayNumbers = [a, b, c];

  return arrayNumbers;
}

operationNumbers(...generateRandomNumber())
  .then(result => console.log(`Sucesso: ${result}`))
  .catch(error => console.log(`Erro: ${error}`));