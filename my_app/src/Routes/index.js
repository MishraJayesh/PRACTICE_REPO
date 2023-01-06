import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Components/Pages/About/About';
import Contact from '../Components/Pages/Contact/Contact';

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<About />} />
            <Route exact path='/' element={<Contact />} />
        </Routes>
    )
}

export default Routing;
