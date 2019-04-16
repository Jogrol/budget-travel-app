import React, { Component } from 'react'
import ExpenseDetails from './ExpenseDetails'
import gql from 'graphql-tag'
import {Query, graphql} from 'react-apollo'

const GET_EXPENSE = gql`
  query Expense{
    expense(id: "cjui8j3dr00040711vek3gli0"){
        description
        ammount
    }
  }
`;

const UPDATE_EXPENSE = gql`
  mutation updateExpense($id: ID!, $description: String!, $ammount: Float!) {
    updateExpense(id: $id, description: $description, ammount: $ammount) {
        id
        description
        ammount
    }
  }
`

export default class ExpenseDetailsContainer extends Component {



  render() {
    return (
        <Query query={GET_EXPENSE}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          console.log(data)
          return (
            <div>
            <ExpenseDetails
                expenses={data.expense} 
                />
            </div>
          );
        }}
      </Query>)
  }
}
