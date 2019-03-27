import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

export default function AddExpenseForm (props) {

    return(
        <div>
        <Card>
            <CardContent>
                <Typography component="h4" variant="h4" gutterBottom>
                    Add expense
                </Typography>
                <form onSubmit={props.onSubmit} >
                    <TextField
                        id="outlined-with-placeholder"
                        label="Name"
                        placeholder="Name"
                        name="name" value={props.values.name}
                        onChange={props.onChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </CardContent>
        </Card>
    </div>
    )
} 