
import React, { Component } from 'react'
import AddExpenseForm from './AddExpenseForm'
// import PropTypes from 'prop-types'

export class AddExpenseContainer extends Component {

    state = {
        name: '',
        amount: ''
    }


    static propTypes = {

    }

    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            name: '',
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
}

export default AddExpenseContainer
