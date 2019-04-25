
import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm'
import gql from "graphql-tag";
import { graphql} from "react-apollo"

const CREATE_EXPENSE = gql`
  mutation createExpense( 
      $description: String!
      $amount: Int!
      $category: String!
      $subcategory: String
      $start_date: Date!
      $end_date: Date
      $days: Float!) {
        createExpense(description: $description, 
                      amount: $amount, 
                      category: $category, 
                      subcategory: $subcategory, 
                      start_date: $start_date, 
                      end_date: $end_date, 
                      days: $days) {
                          id
                          description
                          amount
                          category
                          subcategory
                          start_date
                          end_date
                          days
                        }
  }
`
class AddExpenseContainer extends Component {

    state = {
        description: '',
        amount: ' ',
        category: '',
        subcategory: '',
        start_date: '',
        end_date: '',
        days: '',
        country: ''
   
    }
    
    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    onSubmit = (event) => {
        event.preventDefault()
        const description = this.state.description
        const amount = Number(this.state.amount)
        const category = this.state.category
        const subcategory = this.state.subcategory
        const start_date = this.state.start_date
        const end_date = this.state.end_date
        const days = Number(this.state.days)
        this.props.createExpense({
          variables: {description, amount, category, subcategory, start_date, end_date, days}
        })
        .catch(error => console.log(error))
        this.setState({ open: false , description: '', amount: ' ', category: '', subcategory: '', start_date: '', end_date: '', days: ''});
      }

    render() {
      console.log(this.state)
        return (
        <div>
            <AddExpenseForm  
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
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


