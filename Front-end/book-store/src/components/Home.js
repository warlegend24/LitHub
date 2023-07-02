import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  //the below code works as when the user comes on the "/" home route we use a 
  // useeffect hook to implement some functionality whener this component is rendered for the first time:/
  // and in the functionality we use  a useNavigate hook which we use to redirect the user
  // to the "/books" where all the books will be displayed:-

  const goToBooks = useNavigate();

  useEffect(()=>{
    goToBooks("/books");
  },[])

  

  return (
    <div></div>
  );
}

export default Home;