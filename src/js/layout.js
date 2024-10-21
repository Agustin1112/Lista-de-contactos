// src/js/layout.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/home';         
import AddContact from './views/addContact';
const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;






