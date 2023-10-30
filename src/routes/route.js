const express = require('express');
const router = express.Router();
const bookController = require('../Controller/BookController');

router.post('/books', bookController.createBook);
router.get('/getbooks', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/updatebooks/:id', bookController.updateBook);
router.delete('/deletebooks/:id', bookController.deleteBook);

module.exports = router;
