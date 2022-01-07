const express = require('express');
const userModel = require('./models/MySQL/user.model');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/user', async (req, res) => {
  try {
    const {
      firstName, lastName, email, password,
    } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    if (typeof (password) !== 'string' || password.length < 6) {
      return res.status(400).json({ message: 'O campo "password" deve ter pelo menos 6 caracteres' });
    }

    const emailREGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailREGEX.test(email)) {
      return res.status(400).json({ message: 'Digite um email válido' });
    }

    const newUserId = await userModel.addUser(firstName, lastName, email, password);

    const result = {
      id: newUserId,
      firstName,
      lastName,
      email,
    };

    return res.status(201).json(result);
  } catch (error) {
    console.log(`Error:${error.message}`);
  }
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));