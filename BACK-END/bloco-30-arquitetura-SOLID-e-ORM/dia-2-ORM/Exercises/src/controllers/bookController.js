const { Book } = require('../models');
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

const create = async (req, res) => {
  try {
    const {
      title, author, pageQuantity,
    } = req.body;
    const infosBook = {
      title, author, pageQuantity,
    };

    const book = await Book.create(infosBook);

    return res.status(200).json(book);
  } catch (err) {
    console.log(`Error create: ${err.message}`);
    return res.status(error.status).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.destroy({ where: { id } });
    console.log(book);

    return res.status(200).json({ message: 'Livro deletado com sucesso!!!' });
  } catch (err) {
    console.log(`Error delete: ${err.message}`);
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  findAllBooks,
  findById,
  create,
  remove,
};
