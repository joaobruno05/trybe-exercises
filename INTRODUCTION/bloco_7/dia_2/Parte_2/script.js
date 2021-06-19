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

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addMorningShift = (lesson, chave, valor) => {
  lesson[chave] = valor;
  // console.log(lesson);
}

addMorningShift(lesson2, 'turno', 'manhã');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listObjectsKeys = (lesson) => {
  let objectKeys = Object.keys(lesson);
  for (index in objectKeys) {
    const key = objectKeys[index];
    console.log(key);
  }
}

listObjectsKeys(lesson1);
// listObjectsKeys(lesson2);
// listObjectsKeys(lesson3);

// Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (lesson) => {
  let lengthObject = Object.keys(lesson);
  console.log(lengthObject.length);
}

objectLength(lesson1);
objectLength(lesson2);
objectLength(lesson3);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectValues = (lesson) => {
  let objectValues = Object.values(lesson);
  console.log(objectValues);
}

listObjectValues(lesson1);
listObjectValues(lesson2);
listObjectValues(lesson3);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

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