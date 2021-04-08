import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Navbar'
import React from 'react'
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content />
    </div>
  );
}

export default App;
