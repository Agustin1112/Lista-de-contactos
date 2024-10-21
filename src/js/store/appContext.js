// src/store/appContext.js
import React, { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const getContacts = () => {
        
    };

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    return (
        <Context.Provider value={{ store: { contacts }, actions: { getContacts, addContact } }}>
            {children}
        </Context.Provider>
    );
};

export default AppContext;


