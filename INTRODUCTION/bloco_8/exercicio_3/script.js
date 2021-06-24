const totalScore = (rightAnswers, studentAnswers, func) => {
  func(rightAnswers, studentAnswers);
};

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = () => {
  let rigthAnswerscore = 0;
  let summationRigthAnswers = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (studentAnswers[index] === rightAnswers[index]) {
      summationRigthAnswers += 1;
      rigthAnswerscore += 1;
    }
    if (studentAnswers[index] === 'N.A') {
      rigthAnswerscore += 0;
    } else if (studentAnswers[index] !== rightAnswers[index]) {
      rigthAnswerscore -= 0.5;
    }
  };
  console.log(`Número de respostas corretas: ${summationRigthAnswers}`);
  console.log(`Pontos totais: ${rigthAnswerscore}`);
};

totalScore(rightAnswers, studentAnswers, checkAnswers);
