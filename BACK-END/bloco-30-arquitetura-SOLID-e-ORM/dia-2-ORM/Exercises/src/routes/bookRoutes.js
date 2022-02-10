const express = require('express');

const router = express.Router();

const bookController = require('../controllers/bookController');

// rotas
// router.get('/', bookController.findAllBooks);

router.get('/:id', bookController.findById);

router.post('/', bookController.create);

router.delete('/:id', bookController.remove);

module.exports = router;
