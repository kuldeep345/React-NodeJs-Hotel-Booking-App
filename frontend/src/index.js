import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchContextProvider from './context/searchContext/searchState';
import { AuthContextProvider } from './context/AuthContext/authState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <AuthContextProvider>
         <App />
      </AuthContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);

