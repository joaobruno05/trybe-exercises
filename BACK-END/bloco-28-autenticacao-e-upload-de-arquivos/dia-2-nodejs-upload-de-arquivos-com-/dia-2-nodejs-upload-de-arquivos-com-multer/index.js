require('dotenv').config();
const express = require('express');
const multer = require('multer');

const app = express();
const { PORT } = process.env;

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, 'uploads'),
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()} - ${file.originalname}`);
  },
});

// const fileFilter = (req, file, callback) => {

// };

const upload = multer({
  storage,
});

// const fileFilter = (req, file) => {

// };

app.use(express.static(`${__dirname}/uploads`));

app.post('/upload', upload.single('arquivo'), (req, res) => {
  if (req.file.originalname.split('.')[1] === 'png') {
    return res.status(403).json({ error: { message: 'Extension must be `png`' } });
  }
});

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
