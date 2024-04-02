const express = require('express');
const router = express.Router();
const {getBooks,createBook, getBookById, deleteBook, updateBook}= require("./Controllers/bookController");
const {getCustomers,createCustomer, getCustomerById, deleteCustomer, updateCustomer}= require("./Controllers/customerController");


router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get("/books", getBooks);
router.post("/bookCreate", createBook);
router.post("/books/getBook", getBookById);
router.delete("/books/deleteBook", deleteBook);
router.put("/books/updateBook", updateBook);

router.get("/customers", getCustomers);
router.post("/customerCreate", createCustomer);
router.post("/customers/getCustomer", getCustomerById);
router.delete("/customers/deleteCustomer", deleteCustomer);
router.put("/customers/updateCustomer", updateCustomer);

module.exports = router;
