import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent, IconButton } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });

function AddExpenseForm (props) {
    console.log(props)

    const { classes } = props;

    return(
        <Paper className={classes.root}>
         <Grid container spacing={24}>
        <Card>
              <Link to ={`/`} style={{ color: 'inherit', textDecoration: 'none'}}><IconButton  style={{float: 'right'}}><FontAwesomeIcon icon="times" /></IconButton></Link>
            <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
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
                        id="amount"
                        label="amount"
                        placeholder="amount"
                        name="amount" 
                        value={props.values.ammount}
                        onChange={props.onChange}
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                    />
                     <FormLabel component="legend">Category</FormLabel>
                        <RadioGroup
                            aria-label="Category"
                            name="category"
                            value={props.values.value}
                            onChange={props.onChange}
                        >
                            <FormControlLabel value="Accommodation" control={<Radio />} label="Accommodation" />
                            <FormControlLabel value="Food" control={<Radio />} label="Food" />
                            <FormControlLabel value="Transport" control={<Radio />} label="Transport" />
                            <FormControlLabel value="Shopping" control={<Radio />} label="Shopping" />
                            <FormControlLabel value="Fun" control={<Radio />} label="Fun" />
                        </RadioGroup>
                    <br/>
                    <FormLabel component="legend">Subcategory</FormLabel>
                        <RadioGroup
                            aria-label="subcategory"
                            name="subcategory"
                            value={props.values.value}
                            onChange={props.onChange}
                        >
                            <FormControlLabel value="Accommodation" control={<Radio />} label="Accommodation" />
                            <FormControlLabel value="Food" control={<Radio />} label="Food" />
                            <FormControlLabel value="Transport" control={<Radio />} label="Transport" />
                            <FormControlLabel value="Shopping" control={<Radio />} label="Shopping" />
                            <FormControlLabel value="Fun" control={<Radio />} label="Fun" />
                        </RadioGroup>
                    <br/>
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
                </CardContent>
            </Card>
            </Grid>
        </Paper>
    )
} 
export default withStyles(styles)(AddExpenseForm);