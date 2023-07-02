//by importing the Book model which is created using mongoose we include all the model functionalities
//int the 'Book' variable/model used to perform CRUD in 'books' collection in the 'bookstoreDB'
const { response } = require("express");
const Book = require("../model/book.js");

const getAllBooks = async (req,res,next)=>{
    
    //this route will provide all of the books 
    let books;
    try {
        //fetching data from the mongodb database:-
        books = await Book.find({});
    } catch (error) {
        console.log(error);
    }

    if(!books){
        return res.status(404).json({message:"No products found!!"});
    }
    else{
        //if books are successfully fetched then we return that using the below code:-
        return res.status(200).json({books});
    }


}

const getBookById = async (req,res,next)=>{

    //extracting the id passed in the req using express routing parameters:-
    const id = req.params.id;
    //now using this 'id' we find the corresponding document with the same 'id' in the database :-  
    let bookFound;
    try {
        bookFound = await Book.findById({_id:id});
    } catch (error) {
        console.log(error);
    }
    if(!bookFound){
        res.status(500).json({message:"Book not found !!"});
    }
    else{
        res.status(200).json({bookFound,message:"Successfully found your book !!"});
    }
}

const addBook = async (req,res,next)=>{
    //first we destructure the body being passed through the post request which this function will handle:-
    const {name,author,description,price,availability,image} = req.body;
    //now we create a new document and save it in our database:-
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            availability,
            image
        });
        //now new book document object is created 
        //now saving it in our database:-
        await book.save();
        if(!book){
            return res.status(500).json({message:"Unable to add the book !!"});
        }
        else{
            return res.status(201).json({message:"Successfully added a new book document !!"});
        }
    } catch (error) {
        console.log(error);
    }

}

//implementing the updateBook function to update a single book document completely replacing it by the 
//data passed in the body:-
const updateBook = async (req,res,next)=>{
    //extracting the 'id' from the url being passed as 'put' request
    //using the express routing parameters:-
    const id = req.params.id;
    //now deconstructing the object passed in the body with which we have to replace the book document with id=> 'id' passed in the request:-
    const { name,author,description,price,availability,image} = req.body;
    //now we update the equired document in the database:-
    let book;
    try {
        book = await Book.findByIdAndUpdate({_id:id},{name,author,description,price,availability,image});
        book = await book.save();
    } catch (error) {
        console.log(error);
    }

    //validation code:-
    if(!book){
        res.status(500).json({message:"Unable to Update using the given id"});
    }
    else{
        //if we get a valid response:-
        res.status(200).json({message:"Successfully updated the required book document !!"});
    }
        

}

//implementing the delete one book document with the help of id function :-
const deleteBook = async (req,res,next)=>{
    //we get the id of the book document we want to delete
    //using the express routing parameters:-
    const id = req.params.id;
    //now we delete this document with id=>'id':
    let response;
    try {
        response = await Book.findByIdAndDelete({_id:id});
    } catch (error) {
        console.log(error);
    }

    //validation code:-
    if(!response){
        res.status(500).json({message:"Could'nt delete with the given ID"});
    }
    else{
        //if successfull deletion i.e we get a valid response from the database after deletion:-
        res.status(200).json({message:"Successfully deleted the book with given ID !!"});
    }

}


exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;