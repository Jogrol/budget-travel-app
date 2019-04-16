import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
                Test

            </CardContent>
        </Card>
    </div>
  )
}

ExpenseDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ExpenseDetails);
