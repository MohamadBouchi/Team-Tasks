import React from 'react'
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    taskCard: {
      boxShadow: 'none',
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
  
const onDragStart = (e) => {
    let data = {
            id: props.task.id,
            status: props.task.status
        };
    let stringData = JSON.stringify(data);
    e.dataTransfer.setData('text',stringData);
    console.log(stringData)
  }
  const { classes } = props;
  return (
    <Card draggable onDragStart={(e) => onDragStart(e)} className={classes.taskCard}>
        <CardContent className={classes.cardContent}>
            <Typography  color="textSecondary">
              {props.task.title}
            </Typography>
            <Typography variant="subtitle1" component="h4">
              {props.task.detail}
            </Typography>
        </CardContent>
    </Card>
  )
}
export default withStyles(styles)(TaskCard)