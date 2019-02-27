import React from 'react'
import Grid from '@material-ui/core/Grid';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8042'];
const COLORS01 = ['#F44336', '#00bcd4', '#ff9800', '#4CAF50'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
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
      const data01 = [
        { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
      ];
      const data = [
        { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
      ];
  return (
    <Grid container item md={2} spacing={0} className="right-sidebar-container">
        <Grid item md={12} className="right-sidebar">
          <ResponsiveContainer width='99%' aspect={4.0/4.0} height='280px'>
            <PieChart>
              <Pie dataKey="value" 
                data={data01}
                cx={150}
                cy={ 100 }
                outerRadius={60}
                fill="#8884d8"
                labelLine={true}
                label={renderCustomizedLabel} >
                {
                  data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS01[index]} />
                  ))
                }
              </Pie>
              <Pie dataKey="value"
                data={data}
                cx={150 }
                cy={100 }
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                label
                labelLine={true}>
                {
                  data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
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
  )
}

export default RightSideBar