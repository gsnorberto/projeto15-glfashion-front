import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>
);