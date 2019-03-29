import React, { Component } from 'react';
import NavBar from './components/NavBar';
import AddExpenseContainer from './components/AddExpenseContainer'







class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
          <AddExpenseContainer />
      </div>
    );
  }
}

export default App;
