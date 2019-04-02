
import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm'
import gql from "graphql-tag";
import { graphql} from "react-apollo"

const CREATE_EXPENSE = gql`
  mutation createExpense($description: String!, $ammount: Float!) {
    createExpense(description: $description, ammount: $ammount) {
      id
      description
      ammount
    }
  }
`

class AddExpenseContainer extends Component {

    state = {
        description: '',
        ammount: ' '
    }
    

    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    onSubmit = (event) => {
        event.preventDefault()
        const description = this.state.description
        const ammount = Number(this.state.ammount)
        this.props.createExpense({
          variables: {description, ammount}
        })
        .then(({data}) => console.log(data))
        .catch(error => console.log(error))
      }

    render() {
        console.log(this.props)
        return (
        <div>
            <AddExpenseForm  
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state} />
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


