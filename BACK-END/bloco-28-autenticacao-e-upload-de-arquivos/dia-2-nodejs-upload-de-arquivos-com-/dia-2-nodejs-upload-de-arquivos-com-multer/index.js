require('dotenv').config();
const express = require('express');
const multer = require('multer');

const app = express();
const { PORT } = process.env;

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, 'uploads'),
  filename: (req, file, callback) => callback(null, `${Date.now()} - ${file.originalname}`),
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => res.status(200).json({ message: 'Deu certo!!!' }));

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
