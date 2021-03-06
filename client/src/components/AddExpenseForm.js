import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent, IconButton } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddExpenseForm (props) {

    return(
        <div>
        <IconButton onClick={props.handleClickOpen}><FontAwesomeIcon icon="plus-circle" /></IconButton>
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <Card style={{display: 'inline-block'}}>
            <IconButton  style={{float: 'right'}} onClick={props.handleClickClose}><FontAwesomeIcon icon="times" /></IconButton>
            <CardContent>
                <Typography component="h4" variant="h5" gutterBottom>
                    What did you spend?
                </Typography>
                <form onSubmit={props.onSubmit} >
                    <TextField
                        id="description"
                        label="description"
                        placeholder="description"
                        name="description" 
                        value={props.values.description}
                        onChange={props.onChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="ammount"
                        label="ammount"
                        placeholder="ammount"
                        name="ammount" 
                        value={props.values.ammount}
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
        </Dialog>
    </div>
    )
} 
