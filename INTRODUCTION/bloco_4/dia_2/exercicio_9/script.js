let listaNumeros = [];

let divisaoNumeros = 0;

for (index = 0; index < 25; index += 1) {
  let listaCompleta = listaNumeros.push(index + 1);
  divisaoNumeros = listaCompleta / 2;
  console.log(divisaoNumeros);
}
