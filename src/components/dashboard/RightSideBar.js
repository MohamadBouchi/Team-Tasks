import React from 'react'
import Grid from '@material-ui/core/Grid';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux';

const USER_COLORS = ['#0088FE', '#00e676', '#FFBB28', '#FF8042', '#00C49F','#1de9b6'];
const TASK_COLORS = ['#F44336', '#00bcd4', '#ff9800', '#4CAF50'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


function RightSideBar(props) {
  let taskData, userData = [];
  if(!props.loading && !props.loading_activities){
    taskData = [
      { name: 'inProcess', value: props.inprocess }, { name: 'open', value: props.open },
      { name: 'waiting', value: props.waiting }, { name: 'finished', value: props.finished },
    ];
    userData = [
      { name: 'mohamed', value: props.user_tasks.mbouchi },
      { name: 'arndt', value: props.user_tasks.aschneider },
      { name: 'timo', value: props.user_tasks.therwix },
      { name: 'ralf', value: props.user_tasks.rmuller },
      { name: 'maria', value: props.user_tasks.maria },
      { name: 'kasper', value: props.user_tasks.kasper }
    ];
    return (
      <Grid container item md={2} spacing={0} className="right-sidebar-container">
          <Grid item md={12} className="right-sidebar">
            <ResponsiveContainer width='99%' aspect={4.0/4.0} height='280px'>
              <PieChart>
                <Pie dataKey="value" 
                  data={taskData}
                  cx={150}
                  cy={ 105 }
                  outerRadius={60}
                  fill="#8884d8"
                  labelLine={true}
                  label={renderCustomizedLabel} >
                  {
                    taskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={TASK_COLORS[index]} />
                    ))
                  }
                </Pie>
                <Pie dataKey="value"
                  data={userData}
                  cx={150 }
                  cy={105 }
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  label
                  labelLine={true}>
                  {
                    userData.map((entry, index) => <Cell key={index} fill={USER_COLORS[index % USER_COLORS.length]} />)
                  }
                </Pie>
                <Tooltip />
                <Legend
                  align='center'
                  layout='horizontal' 
                  verticalAlign='bottom'/>
              </PieChart>
            </ResponsiveContainer>
          </Grid>
      </Grid>
    );
  }
  else return <h4>loading</h4>
}

const mapStateToProps = (state) => {
  return {
      open: state.tasks.open.length,
      inprocess: state.tasks.inprocess.length,
      waiting: state.tasks.waiting.length,
      finished: state.tasks.finished.length,
      loading: state.tasks.loading,
      loading_activities: state.activities.loading_activities,
      user_tasks: state.activities.user_tasks
  }
}
  
export default connect(mapStateToProps)(RightSideBar)