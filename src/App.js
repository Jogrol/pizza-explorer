import React, { Component } from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer'
import PizzaDetailsContainer from './components/PizzaDetailsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PizzaListContainer />
          <PizzaDetailsContainer />
        </header>
        
      </div>
    );
  }
}

export default App;
