const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./src/routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/books', bookRouter);

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
