const { questionFloat } = require('readline-sync');

const peso = questionFloat('Qual o seu peso(Kg)?\nR:')
const altura = questionFloat('Qual a sua altura(m)?\nR:')

const calcularIMC = () => {
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  if (imc < 18.5) {
    console.log(`IMC: ${imc} - Situação: Abaixo do peso (magreza)`);
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`IMC: ${imc} Situação: Peso normal`);
  } else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`IMC: ${imc} Situação: Acima do peso (sobrepeso)`);
  } else if (imc >= 30.0 && imc <= 34.9) {
    console.log(`IMC: ${imc} Situação: Obesidade grau I`);
  } else if (imc >= 35.0 && imc <= 24.9) {
    console.log(`IMC: ${imc} Situação: Obesidade grau II`);
  } else {
    console.log(`IMC: ${imc} Situação: Obesidade grau III`);
  }
}

calcularIMC();

module.exports = calcularIMC;
