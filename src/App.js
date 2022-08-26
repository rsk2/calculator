import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Calculator />
        <Footer/>
      </div>
    );
  }
}

export default App;
