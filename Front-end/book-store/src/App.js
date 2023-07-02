import React from "react";

import About from "./components/About";
import Header from "./components/Header";
import Books from "./components/Book/Books";
import AddBook from "./components/AddBook";
import Home from "./components/Home";
//importing components from react-router-dom to setup 'routes' inside the react app:- 
import {Route,Routes} from "react-router-dom";
import BookDetail from "./components/Book/BookDetail";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} exact />
        <Route path="/books" element={<Books />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/books/:bid" element={<BookDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
