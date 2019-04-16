import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ExpenseListContainer from './components/ExpensesListContainer'
import ExpenseDetailsContainer from './components/ExpenseDetailsContainer'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
          <Route path="/" exact component={ExpenseListContainer} />
          <Route path="/expenses/:id" exact component={ExpenseDetailsContainer} />
      </div>
    );
  }
}

export default App;
