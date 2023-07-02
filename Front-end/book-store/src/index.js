import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//in order to navigate in the React-app using react-router-dom we need to:-
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //we wrap the whole application inside Browser Router 
  // so that we can use the components of react-router-dom in our react app:-
  <Router>
      <App />
  </Router>

  
);

