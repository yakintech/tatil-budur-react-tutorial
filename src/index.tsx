import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/CounterContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter>
    <CartProvider>
      <FavoritesProvider>
        <CounterProvider>
          <React.StrictMode>
            <App></App>
          </React.StrictMode>
        </CounterProvider>
      </FavoritesProvider>
    </CartProvider>
  </BrowserRouter>

);





