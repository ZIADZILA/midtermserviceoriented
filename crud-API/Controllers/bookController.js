const book = require("../Models/bookModel");
const getBooks = (req, res) => {
book.find().then(books=>res.send(books)).catch(err=>res.send(err));

};

const getBookById = (req, res)=>{
    book.findById(req.body.id).then(book=>res.send(book)).catch(err=>res.send(err));
}
const updateBook = (req, res) => {
    const bk = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
     
    };
    book.findByIdAndUpdate(req.body.id, bk, { new: true })
      .then(updatedBook => res.send(updatedBook))
      .catch(err => res.status(400).send(err));
  }
  
const deleteBook = (req, res)=>{
  book.findByIdAndDelete(req.body.id).then(book => res.send(book)).catch(err=>res.send(err));
}
  
  const createBook = async (req, res) => {
    const bk = new book({
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear, 
      });
  
    try {
      const savedBook = await bk.save();
      res.json(savedBook);
    } catch (err) {
      res.send(err);
    }
  };
  

module.exports = {
    getBooks,
    createBook, getBookById, deleteBook, updateBook
};

  

