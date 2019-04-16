import React, { Component } from 'react'
import ExpenseDetails from './ExpenseDetails'
import gql from 'graphql-tag'
import {Query, graphql, compose} from 'react-apollo'
import UpdateExpenseFormContainer from './UpdateExpenseFormContainer'

const GET_EXPENSE = gql`
  query Expense($id: ID!){
    expense(id: $id){
        id
        description
        ammount
    }
  }
`;

export default class ExpenseDetailsContainer extends Component {

  render() {
    let id = this.props.match.params.id
    return (
        <Query query={GET_EXPENSE} variables={{id}}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <div>
            <ExpenseDetails
                expense={data.expense} 
                />
            <UpdateExpenseFormContainer expense={data.expense}/>
            </div>
          );
        }}
      </Query>)
  }
}
