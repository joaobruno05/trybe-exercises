function operationNumbers(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    const operation = (a + b) * c;
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error("Informe apenas números"));
    } else if (operation < 50) {
      reject(new Error("Valor muito baixo"));
      } else {
        resolve(operation);
      }
    }
  );
  return promise;
}

// operationNumbers(2, 4, 6)
//   .then(result => console.log(`Sucesso: ${result}`))
//   .catch(error => console.log(`Erro: ${error.message}`));

// operationNumbers(3, 8, 5)
//   .then(result => console.log(`Sucesso: ${result}`))
//   .catch(error => console.log(`Erro: ${error.message}`));

// operationNumbers(2, 4, 'olá')
//   .then(result => console.log(`Sucesso: ${result}`))
//   .catch(error => console.log(`Erro: ${error.message}`));


module.exports = operationNumbers;
