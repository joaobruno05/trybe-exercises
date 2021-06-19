const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addMorningShift = (lesson, chave, valor) => {
  lesson[chave] = valor;
  // console.log(lesson);
}

addMorningShift(lesson2, 'turno', 'manhã');

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listObjectsKeys = (lesson) => {
  let objectKeys = Object.keys(lesson);
  for (let index in objectKeys) {
    const key = objectKeys[index];
    console.log(key);
  }
}

listObjectsKeys(lesson1);
// listObjectsKeys(lesson2);
// listObjectsKeys(lesson3);

// 3. Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (lesson) => {
  let lengthObject = Object.keys(lesson);
  console.log(lengthObject.length);
}

objectLength(lesson1);
objectLength(lesson2);
objectLength(lesson3);

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listObjectValues = (lesson) => {
  let objectValues = Object.values(lesson);
  console.log(objectValues);
}

listObjectValues(lesson1);
listObjectValues(lesson2);
listObjectValues(lesson3);

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});

console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numberStudents = (lesson) => {
  let total = 0;
  const keys = Object.keys(lesson);
  for (let index in keys) {
    total += lesson[keys[index]].numeroEstudantes;
  }
  console.log(total);
}

numberStudents(allLessons);

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const keyValue = (lesson, position) => {
  const key = Object.keys(lesson);
  console.log(lesson[key[position]]);
}

keyValue(lesson1, 0);

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (lesson, key, value) => {
  const obj = Object.entries(lesson);
  let answer;
  
  for (index in obj) {
    if (obj[index][0] === key && obj[index][1] === value) {
      answer = true;
    } else {
      answer = false;
    }
  }
  console.log(answer);
}
    
verifyPair(lesson3, 'turno', 'noite');

verifyPair(lesson3, 'materia', 'Maria Clara');
