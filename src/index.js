import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StateProvider from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>

    <BrowserRouter>
    <App />
    </BrowserRouter>

    </StateProvider>
  </React.StrictMode>
);