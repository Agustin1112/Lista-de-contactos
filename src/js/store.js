// src/js/store.js

import { createStore } from 'redux';
import contactReducer from './views/reducers';


const store = createStore(contactReducer);

export default store;

