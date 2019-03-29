
import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm'
import ggl from 'graphql-tag'
import {graphql} from "react-apollo"

// import PropTypes from 'prop-types'

const createExpense = ggl`
  mutation createExpense ($description: String!, $ammount: Float!) {
    createExpense (description: $description, ammount: $ammount)
  }
`;



class AddExpenseContainer extends Component {

    state = {
        description: '',
        amount: ''
    }

  

    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    onSubmit = (event) => {
      console.log(this.props)
        this.props.createExpense()
        event.preventDefault()
        this.setState({
            description: '',
            amount: ''
          })
      }

    render() {
        console.log(this.state)
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

export default graphql(createExpense, {name: 'createExpense'})(AddExpenseContainer)
