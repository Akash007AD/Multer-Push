import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/contactus/contact';
import About from './Pages/AboutUs/About';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact-us' element={<Contact/>} />
            <Route path='/about-us' element={<About />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
