import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React,{useState} from 'react';

const AddBook = () => {
  //State variables:-
  const [checked,setChecked] = useState(false);
  //to manage each of the field of the form we use a dynamic state variable:-
  const [form, setForm] = useState({
    name:'',
    author:'',
    description:'',
    price:0,
    image:''
  });


  //functions:-

  function handleChange(event){
    setForm({...form,[event.target.name]:event.target.value});
  }

  function handleSubmit(e){
    //to prevent the form from refreshing whenever we click the submit button:-
    e.preventDefault();
    
    //now we have all the form data stored in the 'form' state variable as a javascript object
    //and the 'available' value in the 'checked' state variable:-

    //now we need to make a post request to the back-end server using axios and 
    //pass this form data as an object:-
    axios.post("https://lithub.onrender.com/books",{
      name:form.name,
      author:form.author,
      description:form.description,
      price:form.price,
      image:form.image,
      availability:checked
    })
    .then((response)=>{
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
    



  return (
    <form onSubmit={handleSubmit}>
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
      <TextField value={form.name} onChange={handleChange} name="name" fullWidth margin='normal' variant='outlined' />

      <FormLabel>Author</FormLabel>
      <TextField value={form.author} onChange={handleChange} name="author" fullWidth margin='normal' variant='outlined' />

      <FormLabel>Description</FormLabel>
      <TextField value={form.description} onChange={handleChange} name="description" fullWidth margin='normal' variant='outlined' />

      <FormLabel>Price</FormLabel>
      <TextField value={form.price} onChange={handleChange} type='number' name="price" fullWidth margin='normal' variant='outlined' />

      <FormLabel>Image URL</FormLabel>
      <TextField value={form.image} onChange={handleChange} name="image" fullWidth margin='normal' variant='outlined' />
      
      <FormControlLabel required control={<Checkbox checked={checked} onChange={()=>{setChecked(!checked)}} />} label="Available" />


      <Button variant='contained' sx={{mt:1}} type='submit'>ADD BOOK</Button>
      </Box>
    </form>
  );
}

export default AddBook;