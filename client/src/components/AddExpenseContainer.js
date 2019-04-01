
import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm'
import ggl from 'graphql-tag'
import {graphql} from "react-apollo"

// import PropTypes from 'prop-types'

const createExpense = ggl`
  mutation($description: String!){
    createExpense (description: hotel, ammount: 150) {
      description
      ammount
    }
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
        event.preventDefault()
        // this.setState({
        //     description: '',
        //     amount: ''
        //   })
        this.props.createExpense()
        // this.props.mutate()
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

    static propTypes = {

    }
}

export default graphql(createExpense,{name: "createExpense"})(AddExpenseContainer)
