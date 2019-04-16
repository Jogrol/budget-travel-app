import React, { Component } from 'react';
import NavBar from './components/NavBar';
import AddExpenseContainer from './components/AddExpenseContainer'
import ExpenseListContainer from './components/ExpensesListContainer'
import ExpenseDetailsContainer from './components/ExpenseDetailsContainer'

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
          <ExpenseListContainer />
          <ExpenseDetailsContainer />
      </div>
    );
  }
}

export default App;
