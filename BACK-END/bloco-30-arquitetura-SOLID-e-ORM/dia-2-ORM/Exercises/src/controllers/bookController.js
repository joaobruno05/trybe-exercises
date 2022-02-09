const { Book } = require('../models/book');
const error = require('../errors/errorResponse')();

const findAllBooks = async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (err) {
    console.log(`Error findAll: ${err.message}`);
    return res.status(error.status).json({ message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    return res.status(200).json(book);
  } catch (err) {
    console.log(`Error findById: ${err.message}`);
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  findAllBooks,
  findById,
};
