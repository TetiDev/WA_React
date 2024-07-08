import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>,
);

reportWebVitals();
