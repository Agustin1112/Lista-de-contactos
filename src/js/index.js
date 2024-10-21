import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Asegúrate de que esta ruta sea correcta
import App from './views/App'; // Asegúrate de que esta ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root')); // Aquí se busca el elemento con ID "root"

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);




