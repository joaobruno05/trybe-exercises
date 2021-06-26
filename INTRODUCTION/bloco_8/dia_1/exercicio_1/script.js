const newEmployees = (nameAndEmail) => {
  const employees = {
    id1: nameAndEmail('Pedro_Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nameAndEmail('Luiza_Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nameAndEmail('Carla_Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const nameAndEmail = (name) => {
  const object = {
    nome: name,
    email: `${name}@trybe.com`,
  };
  return object;
};

console.log(newEmployees(nameAndEmail));