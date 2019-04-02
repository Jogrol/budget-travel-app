
import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm'
import gql from "graphql-tag";
import { graphql} from "react-apollo"


class AddExpenseContainer extends Component {

    state = {
        description: '',
        ammount: 0
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

        this.props.mutate({
          variables: {description, ammount}
        })
      }

    render() {
        return (
    
        <div>
            <AddExpenseForm  
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state} />
        </div>
        )
    }

    static propTypes = {
      
    }
}

const CREATE_EXPENSE = gql`
  mutation createExpense($description: String!, $ammount: Float!) {
    createExpense(description: $description, ammount: $ammount) {
      description
      ammount
    }
  }
`
const NewEntryWithData = graphql(CREATE_EXPENSE)(AddExpenseContainer);


export default NewEntryWithData


