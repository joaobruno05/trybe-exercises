const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./src/routes/bookRoutes');
const bookController = require('./src/controllers/bookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', bookController.findAllBooks);

app.use('/book', bookRouter);

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
