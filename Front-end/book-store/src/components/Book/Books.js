import React, { useEffect, useState } from 'react';

// we make the get request from our front-end-react-app to the back-end-server using the axios module:-

import axios from "axios";
import "./Book.css"
import Book from "./Book";

const URL = "https://lithub.onrender.com/books";





const Books = () => {
  //STATE VARIABLES:-
  //since the books displayed on the react app is dynamic data so we define a state variable for the same:-
  const [books, setBooks] = useState([]);


  //FUNCTION:-
  function handleDeleteClick(id){
    setBooks(books.filter((book)=>{
      return(book._id !== id);
    }));
  }





  // useEffect hook is used to fetch all the books data from the server only once
  // i.e only when the app renders for the first time and for this we pass an empty dependancy array: 
  useEffect(() => {
    axios.get(URL)
    .then((response)=>{
      setBooks(response.data.books);
      
    })
    .catch((error)=>{
      console.log(error);
    })
  }, []);
  

  console.log(books);

  return (
    <div>
    <ul>
      {books && books.map((book,index)=>{
        return(
        <li key={index}>
        <Book book={book} deleteBook={handleDeleteClick} />
        </li>
        );
      })}
    </ul>
    </div>
  );
}

export default Books;