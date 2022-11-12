import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
