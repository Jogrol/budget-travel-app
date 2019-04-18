
import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm'
import gql from "graphql-tag";
import { graphql} from "react-apollo"

const CREATE_EXPENSE = gql`
  mutation createExpense($description: String!, $ammount: Float!) {
    createExpense(description: $description, ammount: $ammount) {
      id
      description
      amount
    }
  }
`
class AddExpenseContainer extends Component {

    state = {
        description: '',
        amount: ' ',
        open: false,
   
    }
    
    handleClickOpen = () => {
      this.setState({ open: true });
    };

    handleClickClose = () => {
      this.setState({ open: false });
    };
 
    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    onSubmit = (event) => {
        event.preventDefault()
        const description = this.state.description
        const amount = Number(this.state.amount)
        this.props.createExpense({
          variables: {description, amount}
        })
        .catch(error => console.log(error))
        this.setState({ open: false , description: '', amount: ' '});
      }

    render() {
        return (
        <div>
            <AddExpenseForm  
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                handleClickOpen={this.handleClickOpen}
                open={this.state.open}
                handleClickClose={this.handleClickClose}
                />
        </div>
        )
    }
}

const NewEntryWithData = graphql(CREATE_EXPENSE, {
  name: "createExpense",
  options: {
    refetchQueries: ['Expenses']
  }
})(AddExpenseContainer);

export default NewEntryWithData


