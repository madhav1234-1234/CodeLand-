import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';
import { Paper, Typography, Switch, FormControlLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PersonAddIcon from '@material-ui/icons/PersonAdd'; // Use the correct icon for "Hire"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(3),

  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
   chartContainer: {
    marginTop: theme.spacing(3),
    height: '150px', // Set a fixed height or use a value that suits your design
    '& canvas': {
      maxHeight: '100%' // Ensure the canvas does not exceed the container's height
    }
  },
  button: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const data = {
  labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'],
  datasets: [
    {
      label: 'Main Data',
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(25, 99, 132, 1)',
      backgroundColor: 'rgba(25, 99, 132, 0.2)',
      borderWidth: 2,
      fill: false,
    },
    {
      label: 'Secondary Data',
      data: [28, 48, 40, 19, 66, 27, 80, 28, 48, 40, 19, 66, 27],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      borderDash: [5, 5],
      fill: false,
    },
  ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false, // Hide the title
      },
    },
    scales: {
      y: {
        display: false, // Hide the Y-axis label and grid lines
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false, // Hide the grid lines on the X-axis
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Hide the points
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };
  
  

export default function VisitorGraph() {
  const classes = useStyles();
  const [showDetails, setShowDetails] = useState(false);
  const [timePeriod, setTimePeriod] = useState('Weekly');

  const handleDetailsChange = (event) => {
    setShowDetails(event.target.checked);
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Typography style={{fontSize:'1rem'}} >Visitor Graph</Typography>
        <div>
          
          <FormControlLabel    style={{ fontSize: '12px' }} // You can adjust the font size here

            control={<Switch checked={showDetails} onChange={handleDetailsChange} />}
            label={<span style={{ fontSize: '12px' }}>Show Details</span>} // Adjust the font size here
            />
          <Select
            labelId="time-period-select-label"
            id="time-period-select"
            value={timePeriod}
            onChange={handleTimePeriodChange}
            className={classes.formControl}
            style={{ fontSize: '12px' }} // You can adjust the font size here

          >
            <MenuItem value="Weekly"   style={{ fontSize: '12px',color: 'black', }} // You can adjust the font size here
>Weekly</MenuItem>
            <MenuItem value="Monthly"   style={{ fontSize: '12px' ,color: 'black',}} // You can adjust the font size here
>Monthly</MenuItem>
            <MenuItem value="Yearly"   style={{ fontSize: '12px',color: 'black', }} // You can adjust the font size here
>Yearly</MenuItem>
          </Select>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <span style={{ display: 'block', width: '10px', height: '10px', backgroundColor: '#40189D', borderRadius: '50%', marginRight: '0.5em' }}></span>
  <Typography style={{ fontSize: '12px' }}>View Profile</Typography>
  <span style={{ display: 'block', width: '10px', height: '10px', backgroundColor: '#3F9AE0', borderRadius: '50%',marginLeft: '0.5em', marginRight: '0.5em' }}></span>
  <Typography style={{ fontSize: '12px', }}>Another Typography</Typography>
</div>



      <div className={classes.chartContainer}>
        <Line data={data} options={options} />
      </div>
    </Paper>
  );
}
