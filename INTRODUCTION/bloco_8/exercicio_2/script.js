const prizeDraw = (betNumber, func) => {
  let drawnNumber = Math.ceil(Math.random() * 5);
  console.log(`Número apostado: ${betNumber}`);
  console.log(`Número sorteado: ${drawnNumber}`);
  func();
};

const checkNumber = (betNumber, drawnNumber) => {
  if (betNumber === drawnNumber) {
    console.log('Parabéns, você ganhou!');
  } else {
    console.log('Tente novamente');
  }
};

prizeDraw(2, checkNumber);
