// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <BrowserRouter>
     <NavBar />
     <div className="container mt-5 pt-4 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:fromTo" element={<Details />} />
      </Routes>
     </div>
    </BrowserRouter>
  );
};

export default App;
