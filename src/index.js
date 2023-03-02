import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './redux/store';


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/smart-shop">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
    </PersistGate> 
    </Provider>
 </React.StrictMode>
);

