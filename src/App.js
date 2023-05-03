import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages';
//import Home from './pages/index';


function App() {
  return (
    <Router>

      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route></Route>
      </Routes>
      <p>test</p>

    </Router>
  );
}

export default App;
