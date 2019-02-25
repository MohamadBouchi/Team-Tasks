import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
      paddingRight: '6px',
      paddingTop: '6px',
      paddingLeft: '25px',
      paddingBottom: '10px !important'
    },
    userImg: {
      float: 'right',
      borderRadius: '10%'
    },
    changeDate: {
      lineHeight: '1.66'
    },
    dueDate: {
      lineHeight: '1.66'
    },
    taskDetail: {
      marginBottom: '12px'
    }
  };

function TaskCard(props) {
  
  const onDragStart = (e) => {
      let data = {
              task_id: props.task.id,
              status: props.task.status
          };
      let stringData = JSON.stringify(data);
      e.dataTransfer.setData('text',stringData);
    }
  const { classes } = props;
  let change_date = new Date (props.task.change_date);
  let due_date = new Date (props.task.due_date);
  change_date = change_date.getFullYear() + '.' + change_date.getMonth()+1 + '.' + change_date.getDate();
  due_date = due_date.getFullYear() + '.' + (due_date.getMonth()+1) + '.' + due_date.getDate();
  return (
    <Card draggable onDragStart={(e) => onDragStart(e)} className={classes.taskCard}>
        <CardContent className={classes.cardContent}>
            <Typography  color="textSecondary">
              {props.task.title}
              <img src={`images/${props.user_name}.png`} width="30" height="30" className={classes.userImg} alt=""/>
            </Typography>
            <Typography variant="subheading" className={classes.taskDetail}>
              {props.task.detail}
            </Typography>
            { props.task.status!=='open' && 
              <Typography variant="overline" className={classes.changeDate}>
                {change_date}
              </Typography>
            }
            <Typography variant="overline" className={classes.dueDate}>
              {due_date}
            </Typography>
        </CardContent>
    </Card>
  )
}
export default withStyles(styles)(TaskCard)