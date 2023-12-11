import React from 'react';
import { CircularProgress, Typography, Box, Paper, Grid } from '@mui/material';

const jobData = [
  { title: 'Engineer', percentage: 66, vacancy: 5050 },
  { title: 'Designer', percentage: 31, vacancy: 10524 },
  { title: 'Manager', percentage: 75, vacancy: 821 },
  { title: 'Programmer', percentage: 62, vacancy: 9682 },
];

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        size={100}
        thickness={7}
        sx={{
          color: 'rgba(0, 0, 0, 0.1)', // Light black color for the track
          'circle': {
            strokeLinecap: 'round' // To make the linecap round as in the image
          }
        }}
        value={100} // Create the "border" effect
      />
      <CircularProgress
        variant="determinate"
        {...props}
        size={100}
        thickness={7}
        sx={{
          color: '#40189D', // Primary color for the progress
          position: 'absolute',
          left: 0,
          'circle': {
            strokeLinecap: 'round' // To make the linecap round as in the image
          }
        }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function JobTrends() {
  return (
    <Paper style={{ padding: '20px', width:'520px',marginLeft:"10px",marginTop:'-50px' }}>
      <Typography variant="h6" component="h2" gutterBottom style={{ fontSize: '16px', fontWeight: '800', color: '#666' }} >
        Job Trends
      </Typography>
      <Grid container spacing={2}>
        {jobData.map((job, index) => (
          <Grid item key={index} xs={6} sm={3}>
            <Box textAlign="center">
              <CircularProgressWithLabel value={job.percentage} />
              <Typography style={{fontSize:'16px'}} component="div">
                {job.title}
              </Typography>
              <Typography color="textSecondary" style={{fontSize:'12px'}}>
                {job.vacancy.toLocaleString()} Vacancy
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default JobTrends;
