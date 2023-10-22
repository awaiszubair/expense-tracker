import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Index from './testProject/index';
import Container from './testProject/container'
import Check from './check/check'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Index /> */}
    <Container />
    {/* <Check /> */}
  </React.StrictMode>
);
