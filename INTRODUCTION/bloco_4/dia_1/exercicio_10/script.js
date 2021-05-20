let custoProduto = 49.90;
let valorDeVenda = 89.90;

const impostoSobreCusto = 0.20;

let valorCustoTotal = custoProduto + impostoSobreCusto*custoProduto;

//Lucro de um produto
let lucro = valorDeVenda -  valorCustoTotal;

//Lucro de mil produtos
lucro = lucro * 1000;

if (custoProduto < 0 || valorDeVenda < 0) {
  console.log('Ocorreu um erro')
}

console.log('Ao vender mil produtos, a empresa terá um lucro de R$' + lucro.toFixed(2))
