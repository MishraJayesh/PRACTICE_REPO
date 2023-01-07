import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import About from '../Components/Pages/About/About';
import Contact from '../Components/Pages/Contact/Contact';

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default Routing;
