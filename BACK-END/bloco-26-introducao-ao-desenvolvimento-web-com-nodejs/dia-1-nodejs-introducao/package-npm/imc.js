const { questionFloat } = require('readline-sync');

const peso = questionFloat('Qual o seu peso?')
const altura = questionFloat('Qual a sua altura?')

const imc = () => {
  return (peso / Math.pow(altura, 2));
}

console.log(imc(60, 1.68));
