import React from 'react';
import {
	Typography,
	TextField,
	Button,
	Grid,
	Radio,
	RadioGroup,
    FormControlLabel,
    IconButton
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import moment from 'moment';


const styles = {
    expenseContainer: {
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: 'auto',
            marginBottom: 'auto'
            
    }
}
// moment(props.values.start_date).add(props.values.days, 'days').format("YYYY-MM-DD")}

export default function AddExpenseForm(props) {
	return (
		<React.Fragment>

            <Grid container spacing={24} style={styles.expenseContainer}>
  
            <Grid item xs={12}> 
			<Typography variant="h4" gutterBottom style={{float: 'left'}}>
				Add Expense
			</Typography>
            <Link to={`/`} style={{float: 'right', color: 'inherit', textDecoration: 'none' }}>
						<IconButton>
							<FontAwesomeIcon icon="times" />
						</IconButton>
					</Link>
            </Grid>
				<Grid item xs={12} sm={12}>
                <Typography>How much?</Typography>
					<TextField
						required
						id="amount"
						name="amount"
						placeholder="in euro's"
						value={props.values.ammount}
						onChange={props.onChange}
						InputProps={{
							startAdornment: <InputAdornment position="start">€</InputAdornment>,
						}}
					/>
				</Grid>
				<Grid item xs={6}>
                <Typography>On what?</Typography>
					<RadioGroup
						required
						label="Category"
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
				<Grid item xs={6}>
					{props.values.category === 'Accommodation' && (
						<div>
						    <Typography>What kind of {props.values.category.toLowerCase()}?</Typography>
							<RadioGroup
								label="subcategory"
								name="subcategory"
								value={props.values.subcategory}
								onChange={props.onChange}
							>
								<FormControlLabel value="Hotel" control={<Radio />} label="Hotel" />
								<FormControlLabel value="Camping" control={<Radio />} label="Camping" />
								<FormControlLabel value="Hut" control={<Radio />} label="Hut" />
								<FormControlLabel value="Hostel" control={<Radio />} label="Hostel" />
								<FormControlLabel
									value="Bed and Breakfast"
									control={<Radio />}
									label="Bed and Breakfast"
								/>
								<FormControlLabel value="AirBnB" control={<Radio />} label="AirBnB" />
							</RadioGroup>
						</div>
					)}
					{props.values.category === 'Food' && (
						<div>
							<Typography>What kind of {props.values.category.toLowerCase()}?</Typography>
							<RadioGroup
								label="subcategory"
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
					)}
					{props.values.category === 'Transport' && (
						<div>
							<Typography>What kind of {props.values.category.toLowerCase()}?</Typography>
							<RadioGroup
								label="subcategory"
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
					)}
					{props.values.category === 'Fun' && (
						<div>
							<Typography>What kind of {props.values.category.toLowerCase()}?</Typography>
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
					)}
				</Grid>
				<Grid item xs={6}>
					<TextField
						id="start_date"
						label="Start date"
						name="start_date"
						type="date"
						onChange={props.onChange}
						defaultValue={moment().format('YYYY-MM-DD')}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						id="end_date"
						label="End date"
						name="end_date"
						type="date"
						onChange={props.onChange}
						defaultValue={moment().format('YYYY-MM-DD')}
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
				<Grid item xs={12}>
                <Typography>Anything to add?</Typography>
					<TextField
						label="description"
						id="description"
						name="description"
						value={props.values.description}
						onChange={props.onChange}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<form onSubmit={props.onSubmit}>
						<Button type="submit" variant="contained">
							Submit
						</Button>
					</form>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}