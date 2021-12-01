const imc = (peso, altura) => {
  return (peso / Math.pow(altura, 2));
}

console.log(imc(60, 1.68));
