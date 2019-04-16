import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };

function ExpenseDetails(props) {


const { classes } = props;

  return (
    <div>
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Your expense in more detail
                </Typography>
                <Typography gutterBottom variant="h5" component="h3">
                    {props.expense.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h3">
                    € {props.expense.ammount}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

ExpenseDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ExpenseDetails);
