import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/contactus/contact';
import About from './Pages/AboutUs/About';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
