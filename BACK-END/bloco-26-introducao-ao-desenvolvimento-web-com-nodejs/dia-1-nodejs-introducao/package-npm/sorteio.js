const { questionInt, question } = require('readline-sync');

const jogarNovamente = () => {
  const jogar = question('Deseja jogar novamente (sim ou não)?\nR:');
  if (jogar === 'sim' || jogar === 's') {
    sorteio();
  } else {
    console.log('Até o próximo sorteio!!!');
  }
}

const sorteio = () => {
  const numeroEscolhido = questionInt('Escolha um número entre 0 e 10\nR:');
  const numeroSorteado = Math.ceil(Math.random()*10);
  if (numeroEscolhido === numeroSorteado) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numeroSorteado}.`);
  }
  jogarNovamente();
}

sorteio();

module.exports = sorteio;
