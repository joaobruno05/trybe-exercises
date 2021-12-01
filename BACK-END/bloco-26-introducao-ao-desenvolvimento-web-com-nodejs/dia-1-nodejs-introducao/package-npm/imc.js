const { questionFloat } = require('readline-sync');

const peso = questionFloat('Qual o seu peso(Kg)?\nR:')
const altura = questionFloat('Qual a sua altura(m)?\nR:')

const imc = () => {
  return (peso / Math.pow(altura, 2)).toFixed(2);
}

console.log(imc(60, 1.68));
