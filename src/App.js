import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import MemeGenerator from './components/MemeGenerator.js'
import Calculator from './components/Calculator.js'

class App extends Component {
  render() {
    return (
      <div>
        
       
        <Calculator />
        {
          // <Header />
        //<MemeGenerator />
        }
      </div>
    );
  }
}

export default App;