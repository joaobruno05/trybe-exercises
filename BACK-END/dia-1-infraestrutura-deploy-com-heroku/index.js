const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.json({ message: 'Está vivo!!!' }));

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
