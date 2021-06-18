const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numbersCrescentOrders = numeros => {
  oddsAndEvens.sort(function(a, b) {return a-b});
  console.log(oddsAndEvens);
}

numbersCrescentOrders(oddsAndEvens);