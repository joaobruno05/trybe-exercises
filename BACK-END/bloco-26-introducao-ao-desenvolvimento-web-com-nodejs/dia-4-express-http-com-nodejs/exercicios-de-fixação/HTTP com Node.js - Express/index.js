const express = require('express');

const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (_req, res) => {
  res.send(drinks);
});

app.get('/drinks-alphabetical_order', (req, res) => {
  const newDrinks = drinks.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  res.send(newDrinks);
});

app.get('/drink/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json(drinks[id - 1]);
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.listen(3000, () => console.log('Aplicação rodando na porta 3000'));
