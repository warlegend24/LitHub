import { Button } from '@mui/material';
import React from 'react';
import "./Book.css";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
  //deconstructing the props :-
  const {_id,name,author,description,price,availability,image} = props.book;

  const history = useNavigate();


  function handleDeleteClick(e){

    axios.delete(`https://lithub.onrender.com/books/${_id}`)
    .then((res)=>{
      console.log(res);
      // now we need to call a function from the props and then 
      // pass on the id of the book being deleted and then we 
      // set the state variable by filtering out the books by using this id:-
      props.deleteBook(_id);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  //now making a general structure of each of the book card/componenet:-
  return (
    <>
    <div className='card'>
      <img src={image} alt={name}  />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>{price}</h3>
      <div>
      <Button LinkComponent={NavLink} to={`/books/${_id}`}  sx={{mt:'auto',display:"inline-block"}} style={{backgroundColor:"darkcyan",color:"white"}} >Update</Button>
      <Button onClick={handleDeleteClick} sx={{display:"inline-block",ml:"4px"}} style={{backgroundColor:"darkcyan",color:"white"}}>Delete</Button>
      </div>
      </div>
    </>
  );
}

export default Book;