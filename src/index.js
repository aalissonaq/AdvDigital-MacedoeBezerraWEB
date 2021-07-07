import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';
//import Login from "./pages/login";
import Home from "./pages/home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
