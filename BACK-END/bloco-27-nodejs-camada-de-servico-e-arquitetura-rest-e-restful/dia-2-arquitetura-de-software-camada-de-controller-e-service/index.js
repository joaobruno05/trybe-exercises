const express = require('express');
const { getPing, getInfoByCEP } = require('./controllers/cepController');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/ping', getPing);

app.get('/cep/:cep', getInfoByCEP);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
