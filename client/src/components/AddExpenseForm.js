import React from 'react';
import { Typography, InputLabel, Select, MenuItem, FormControl,  FormLabel, TextField, Button, IconButton , Grid, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {countries} from './countries'

export default function AddExpenseForm (props) {

    return(
        <React.Fragment>
            <Link to ={`/`} style={{ color: 'inherit', textDecoration: 'none'}}><IconButton  style={{float: 'right'}}><FontAwesomeIcon icon="times" /></IconButton></Link>
            <Grid container spacing={24}>
                <Grid>
                    <Typography gutterBottom variant="h4" component="h2">
                        What did you spend?
                    </Typography>
                </Grid>
                <Grid >
                    <TextField
                            id="description"
                            label="description"
                            placeholder="description"
                            name="description" 
                            value={props.values.description}
                            onChange={props.onChange}
                        />
                </Grid>
                <Grid>
                    <TextField
                            id="amount"
                            label="amount"
                            placeholder="amount"
                            name="amount" 
                            value={props.values.ammount}
                            onChange={props.onChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">€</InputAdornment>,
                            }}
                        />
                </Grid>
                <Grid>
                    <FormLabel>Category</FormLabel>
                            <RadioGroup
                                aria-label="Category"
                                name="category"
                                value={props.values.category}
                                onChange={props.onChange}
                                >
                                <FormControlLabel value="Accommodation" control={<Radio />} label="Accommodation" />
                                <FormControlLabel value="Food" control={<Radio />} label="Food" />
                                <FormControlLabel value="Transport" control={<Radio />} label="Transport" />
                                <FormControlLabel value="Shopping" control={<Radio />} label="Shopping" />
                                <FormControlLabel value="Fun" control={<Radio />} label="Fun" />
                            </RadioGroup>
                </Grid>
                <Grid>
                    {props.values.category === "Accommodation" && 
                    <div>
                        <FormLabel>Subcategory</FormLabel>
                            <RadioGroup
                                aria-label="subcategory"
                                name="subcategory"
                                value={props.values.subcategory}
                                onChange={props.onChange}
                            >
                                <FormControlLabel value="Hotel" control={<Radio />} label="Hotel" />
                                <FormControlLabel value="Camping" control={<Radio />} label="Camping" />
                                <FormControlLabel value="Hut" control={<Radio />} label="Hut" />
                                <FormControlLabel value="Hostel" control={<Radio />} label="Hostel" />
                                <FormControlLabel value="Bed and Breakfast" control={<Radio />} label="Bed and Breakfast" />
                                <FormControlLabel value="AirBnB" control={<Radio />} label="AirBnB" />
                            </RadioGroup>
                        </div>
                        }
                        {props.values.category === "Food" && 
                        <div>
                        <FormLabel>Subcategory</FormLabel>
                            <RadioGroup
                                aria-label="subcategory"
                                name="subcategory"
                                value={props.values.subcategory}
                                onChange={props.onChange}
                            >
                                <FormControlLabel value="Breakfast" control={<Radio />} label="Breakfast" />
                                <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
                                <FormControlLabel value="Dinner" control={<Radio />} label="Dinner" />
                                <FormControlLabel value="Snacks" control={<Radio />} label="Snacks" />
                                <FormControlLabel value="Drinks" control={<Radio />} label="Drinks" />
                                <FormControlLabel value="Coffee" control={<Radio />} label="Coffee" />
                            </RadioGroup>
                        </div>
                        }
                        {props.values.category === "Transport" && 
                        <div>
                        <FormLabel>Subcategory</FormLabel>
                            <RadioGroup
                                aria-label="subcategory"
                                name="subcategory"
                                value={props.values.subcategory}
                                onChange={props.onChange}
                            >
                                <FormControlLabel value="Taxi" control={<Radio />} label="Taxi" />
                                <FormControlLabel value="Car Rental" control={<Radio />} label="Car Rental" />
                                <FormControlLabel value="Flight" control={<Radio />} label="Flight" />
                                <FormControlLabel value="Train" control={<Radio />} label="Train" />
                                <FormControlLabel value="Bike Rental" control={<Radio />} label="Bike Rental" />
                                <FormControlLabel value="Fuel" control={<Radio />} label="Fuel" />

                            </RadioGroup>
                        </div>
                        }
                              {props.values.category === "Fun" && 
                        <div>
                        <FormLabel>Subcategory</FormLabel>
                            <RadioGroup
                                aria-label="subcategory"
                                name="subcategory"
                                value={props.values.subcategory}
                                onChange={props.onChange}
                            >
                                <FormControlLabel value="Entertainment" control={<Radio />} label="Entertainment" />
                                <FormControlLabel value="Sports" control={<Radio />} label="Sports" />
                                <FormControlLabel value="Culture" control={<Radio />} label="Culture" />
                            </RadioGroup>
                        </div>
                        }
                </Grid>
                <Grid>
                    <FormControl>
                    <InputLabel>
                        country
                        </InputLabel>
                        <Select
                            value={props.values.country}
                            onChange={props.handleChange}
                        >
                        {countries.map(country => {
                        return <MenuItem value={country}>{country}</MenuItem>})}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid>
                    <form>
                        <TextField
                            id="date"
                            label="Start date"
                            name="start_date"
                            type="date"
                            defaultValue={new Date()}
                            onChange={props.onChange}
                            value={props.values.start_date}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>        
                </Grid>
                <Grid>
                    <TextField
                        id="filled-number"
                        label="Days"
                        name="days"
                        value={props.values.days}
                        type="number"
                        onChange={props.onChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                <Grid>
                    <form>
                        <TextField
                            id="date"
                            label="End date"
                            name="end_date"
                            type="date"
                            onChange={props.onChange}
                            defaultValue={props.values.start_date+props.values.days}
                            value={props.values.end_date}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>        
                </Grid>
                <form onSubmit={props.onSubmit} >
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
                
            </Grid>
     </React.Fragment>
    )
} 
