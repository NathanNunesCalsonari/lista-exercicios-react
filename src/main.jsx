import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aparelhos from './routes/EditarProdutos/index.jsx';
import Home from './routes/Home/index.jsx';
import Error from './routes/Error/index.jsx';
import Error from './routes/Produtos/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
