import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function AddExpenseForm (props) {

    return(
        <div style={{ textAlign: 'center'}}>
        <Card style={{display: 'inline-block', margin: '5px'}}>
            <CardContent  >
                <Typography component="h4" variant="h5" gutterBottom>
                    ADD EXPENSIVE
                </Typography>
                <form onSubmit={props.onSubmit} >
                    <TextField
                        id="description"
                        label=" description"
                        placeholder=" description"
                        name=" description" 
                        value={props.values.name}
                        onChange={props.onChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
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
                    <Button type="submit" variant="contained">ADD</Button>
                </form>
            </CardContent>
        </Card>
    </div>
    )
} 