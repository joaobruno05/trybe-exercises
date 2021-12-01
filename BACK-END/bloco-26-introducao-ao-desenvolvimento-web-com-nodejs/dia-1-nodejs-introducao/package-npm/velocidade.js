const { questionInt } = require('readline-sync');


const distancia = questionInt('Qual a distância percorrida pelo seu carro(m)?\nR:');
const tempo = questionInt('Quanto tempo você levou(s)?\nR:');

const velMedia = (distancia / tempo).toFixed(2);
console.log(`A velocidade média foi de ${velMedia} m/s`);

module.exports = velMedia;