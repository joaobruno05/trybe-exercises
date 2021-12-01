const { questionInt } = require('readline-sync');

const executarScript = () => {
  const script = questionInt('Qual script você quer executar?\n1.imc\n2.velocidade\n3.sorteio\nR:');
  if (script === 1) {
    const calcularIMC = require('./imc');
    calcularIMC;
  } else if (script === 2) {
    const velMedia = require('./velocidade');
    velMedia;
  } else if (script === 3) {
    const sorteio = require('./sorteio');
    sorteio();
  }
}

executarScript();
