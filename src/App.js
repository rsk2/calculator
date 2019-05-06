import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Calculator from './components/Calculator.js'
import Footer from './components/Footer.js'

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
