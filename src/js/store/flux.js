const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            getContacts: async () => {
                try {
                    let response = await fetch('https://playground.4geeks.com/contact/agendas/Agustin/contacts');
                    if (response.ok) {
                        let data = await response.json();
                        setStore({ contacts: data });
                    }
                } catch (error) {
                    console.error(error);
                }
            },

            addContact: async (contact) => {
                try {
                    let response = await fetch('https://playground.4geeks.com/contact/agendas/Agustin/contacts', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });
                    if (response.ok) {
                        const newContact = await response.json();
                        setStore({ contacts: [...getStore().contacts, newContact] });
                    }
                } catch (error) {
                    console.error(error);
                }
            },

            updateContact: async (contactId, updatedContact) => {
                try {
                    let response = await fetch(`https://playground.4geeks.com/contact/agendas/Agustin/contacts/${contactId}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (response.ok) {
                        const updatedContactData = await response.json();
                        const updatedContacts = getStore().contacts.map(contact => 
                            contact.id === contactId ? updatedContactData : contact
                        );
                        setStore({ contacts: updatedContacts });
                    }
                } catch (error) {
                    console.error(error);
                }
            },

            deleteContact: async (contactId) => {
                try {
                    let response = await fetch(`https://playground.4geeks.com/contact/agendas/Agustin/contacts/${contactId}`, {
                        method: "DELETE"
                    });
                    if (response.ok) {
                        const filteredContacts = getStore().contacts.filter(contact => contact.id !== contactId);
                        setStore({ contacts: filteredContacts });
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
    };
};

export default getState;
