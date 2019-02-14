import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



const styles = {
    taskCard: {
      boxShadow: 'none',
      /*borderBottom: '1px solid darkgrey',
      borderLeft: '1px solid darkgrey',
      borderRight: '1px solid darkgrey',*/
      border: '1px solid darkgrey',
      marginBottom: 'kpx',
      borderRadius: '0px'
    },
    cardContent: {
      padding: '6px',
      paddingBottom: '10px !important'
    }
  };

function TaskCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.taskCard}>
        <CardContent className={classes.cardContent}>
            <Typography  color="textSecondary">
            Word of the Day
            </Typography>
            <Typography variant="subtitle1" component="h4">
            be nev lent
            </Typography>
            {/* <Typography  color="textSecondary">
            adjective
            </Typography> */}
            {/* <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
            </Typography> */}
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
  )
}
export default withStyles(styles)(TaskCard)