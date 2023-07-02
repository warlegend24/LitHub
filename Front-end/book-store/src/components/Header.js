import React,{useState} from 'react';

//using the built-in 'AppBar' react component from mui-material 
import {AppBar,Tab,Tabs,Toolbar} from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
// navlink component from react-router-dom is used for navigating to different routes on our react
//application without the need of reafreshing the page(i.e single page application)
import { NavLink } from "react-router-dom";

const Header = () => {
    //STATE VARIABLES:-
    //1:- for dynamically updating the 'value' prop of <Tabs /> so that we can display on which Tab the user has clicked on/is present 'on':-
    const [value, setValue] = useState(null);

    //FUNCTIONS:-
    function handleTabChange(event,value){
        //here 'value' stores the value of the tab on which the clicks on out of all the tabs:-
        setValue(value);
    }



  return (
    //to prevent the overlapping of the AppBar over rendering of components inside it/over it we 
    //give a prop => position='sticky'....
    <div>
    <AppBar position="sticky" sx={{backgroundColor:"#3C486B"}}>
        <Toolbar>
            {/* icon */}
            <NavLink to="/books" >
            <AutoStoriesIcon sx={{color:"white"}} />
            </NavLink>
            {/* rendering tabs */}
            {/* value here is updated generally through a state variable which refers to the tab no. on which the user is on/clicked */}
            {/* textColor defines the color for the label names and indicator color is for the  underlining of current tab i.e where value refers to */}
            <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='primary' value={value} onChange={handleTabChange} >
                <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                <Tab LinkComponent={NavLink} to="/books" label="Books" />
                <Tab LinkComponent={NavLink} to="/about" label="About us" />
            </Tabs>
        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header;