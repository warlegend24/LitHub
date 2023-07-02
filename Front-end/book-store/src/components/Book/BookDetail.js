import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';

const BookDetail = () => {
  const history = useNavigate();
  //first we retrieve the 'id' passes in the url which the user tries to access:-
  //using the useParams react hook to extract the react routing parameter 'books/:bid' :-
  const bid = useParams().bid;

  //we have the book id now and now as soon as this component is rendered
  //we search and fetch the desired book document from the server
  // using the axios->get method:-
  useEffect(()=>{
    axios.get("https://lithub.onrender.com/books/"+bid)
    .then((res)=>{
      setFormData(res.data.bookFound);
      setChecked(res.data.bookFound.availability);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[bid])




  //STATE VARIABLE:-
  
  const [formData, setFormData] = useState({
    name:'',
    author:'',
    description:'',
    price:0,
    image:'',
  });

  const [checked, setChecked] = useState(false);

  

  //FUNCTIONS:-
  function handleSubmit(e){
    //preventing the form to refresh the complete form 
    e.preventDefault();
    //now when the user submits the from for updation we make a 
    //'put' request to the server to udpate the required document using axios:-
    axios.put(`https://lithub.onrender.com/books/${bid}`,{
      name:formData.name,
      author:formData.author,
      description:formData.description,
      price:formData.price,
      image:formData.image,
      availability:checked
    })
    .then((res)=>{
      console.log(res);
      history("/books");
    })
    .catch((err)=>{console.log(err)});
  }

  function handleChange(e){
    setFormData((prevForm)=>{
      return({...prevForm,[e.target.name]:e.target.value});
    });
  }


  
  

  // whenever the user clicks on the update button we display the information of the clicked book 
  // in a form in which user can update the information and then click on the update button to update the book item:-
  return (
    <div>
    {formData && <form onSubmit={handleSubmit}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={'center'}
      maxWidth={700} 
      alignContent={"center"}
      alignSelf={"center"}
      marginLeft={"auto"}
      marginRight={"auto"}
      marginTop={7}   
    >

      
      <FormLabel>Name</FormLabel>
      <TextField value={formData.name} onChange={handleChange} name="name" fullWidth margin='normal' variant='outlined' />

      <FormLabel>Author</FormLabel>
      <TextField value={formData.author} onChange={handleChange} name="author" fullWidth margin='normal' variant='outlined' />

      <FormLabel>Description</FormLabel>
      <TextField value={formData.description} onChange={handleChange} name="description" fullWidth margin='normal' variant='outlined' />

      <FormLabel>Price</FormLabel>
      <TextField value={formData.price} onChange={handleChange} type='number' name="price" fullWidth margin='normal' variant='outlined' />

      <FormLabel>Image URL</FormLabel>
      <TextField value={formData.image} onChange={handleChange} name="image" fullWidth margin='normal' variant='outlined' />
      
      <FormControlLabel required control={<Checkbox checked={checked} onChange={()=>{setChecked(!checked)}} />} label="Available" />


      <Button variant='contained' sx={{mt:1}} type='submit'>UPDATE BOOK</Button>
      </Box>
      </form>}
      
    </div>
  );
}

export default BookDetail;