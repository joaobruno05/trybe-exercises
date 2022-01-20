const express = require('express');
const {
  getPing, getInfoByCEP, addInfoAdress,
} = require('./controllers/cepController');
const { login } = require('./controllers/login');
const { createUsersController, getUserController } = require('./controllers/users');
const auth = require('./middlewares/auth');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/ping', getPing);

app.get('/cep/:cep', getInfoByCEP);

app.post('/cep', auth, addInfoAdress);

app.post('/login', login);

app.post('/users', createUsersController);

app.get('/users/me', auth, getUserController);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
