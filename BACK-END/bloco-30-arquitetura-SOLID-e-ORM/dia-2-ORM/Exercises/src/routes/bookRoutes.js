const express = require('express');

const router = express.Router();

const bookController = require('../controllers/bookController');

// rotas
router.get('/', bookController.findAllBooks);

router.get('/:id', bookController.findById);

module.exports = router;
