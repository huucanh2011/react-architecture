import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './styles/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

if (import.meta.env.MODE === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
