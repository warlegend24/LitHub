const express = require("express");
const router = express.Router();
const Book = require("../model/book.js");
const bookController = require("../controllers/books-controller.js");

//to fetch all the book data from the database:-
router.get("/",bookController.getAllBooks);

//to add a new book document in the database:-
router.post("/",bookController.addBook);

//to get a particular book document by usingits id property:-
router.get("/:id",bookController.getBookById);

//to update a single book document by passing its id and data in the 'put' request:-

router.put("/:id",bookController.updateBook);

//to delete a specific book document our server will recieve a delete request with some params in the url:-
router.delete("/:id",bookController.deleteBook);

module.exports = router;