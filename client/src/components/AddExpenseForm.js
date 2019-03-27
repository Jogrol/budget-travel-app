import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function AddExpenseForm (props) {

    return(
        <div>
        <Card>
            <CardContent>
                <Typography component="h6" variant="h4" gutterBottom>
                    Add expense
                </Typography>
                <p>What did you spent it for?</p>
                <form onSubmit={props.onSubmit} >
                    <TextField
                        id="name"
                        label="name"
                        placeholder="name"
                        name="name" 
                        value={props.values.name}
                        onChange={props.onChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <p>How much do you spent?</p>
                    <TextField
                        id="amount"
                        label="amount"
                        placeholder="amount"
                        name="amount" 
                        value={props.values.amount}
                        onChange={props.onChange}
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                    />
                    <br/>
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </CardContent>
        </Card>
    </div>
    )
} 