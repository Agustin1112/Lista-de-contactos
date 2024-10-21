// src/js/reducers.js

const initialState = {
    contacts: [],
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case 'REMOVE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter((contact) => contact.id !== action.payload.id),
        };
      case 'UPDATE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id === action.payload.id ? { ...contact, ...action.payload } : contact
          ),
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;
  