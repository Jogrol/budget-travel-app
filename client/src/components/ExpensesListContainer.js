import React, { Component } from 'react'
import ExpensesList from './ExpensesList'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'

const GET_EXPENSES = gql`
{
    expenses{
        id
        description
        ammount
  }
}
`;

export default class ExpensesListContainer extends Component {
   
  render() {
    return (
    <Query query={GET_EXPENSES}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <div>
        <ExpensesList expenses={data.expenses} />
      </div>
      );
    }}
  </Query>)
  }
}