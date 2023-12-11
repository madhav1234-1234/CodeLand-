import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Paper, Typography, Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const thickerSegmentPlugin = {
  id: 'thickerSegment',
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    const datasets = chart.data.datasets;
    
    // Check if the dataset and its data are defined
    if (datasets.length && datasets[0].data.length) {
      const meta = chart.getDatasetMeta(0);
      
      // Check if the meta data and arc element are defined
      if (meta.data.length && meta.data[0].active !== undefined) {
        const arc = meta.data[0];
        const { startAngle, endAngle, innerRadius, outerRadius, x, y } = arc;
        
        const thickness = 30; // Define how much thicker you want the segment
        const extendedOuterRadius = outerRadius - thickness;
        
        // Draw the thicker segment
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, extendedOuterRadius, startAngle, endAngle);
        ctx.arc(x, y, innerRadius, endAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = datasets[0].backgroundColor[0];
        ctx.fill();
        
        // Optionally draw the border
        ctx.lineWidth = 1; // Define the border width
        ctx.strokeStyle = datasets[0].borderColor ? datasets[0].borderColor[0] : datasets[0].backgroundColor[0];
        ctx.stroke();
        
        ctx.restore();
      }
    }
  }
};


// Register the plugin
ChartJS.register(thickerSegmentPlugin);


const data = {
  labels: ['Companies', 'Person'],
  datasets: [
    {
      // We increase the weight of the 'Companies' data point
      data: [2567, 8334],
      backgroundColor: ['#3f51b5', '#ff9800'],
      hoverBackgroundColor: ['#303f9f', '#e65100'],
      borderWidth: 0, // Remove the border width if any was set previously
      // Assign weight to the dataset. Weight does not have a direct visual effect in Chart.js, but can be used for calculations if needed
      weight: 5,

    },
  ],
};

const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
const percentage = Math.round((data.datasets[0].data[0] / total) * 100);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    }
  },
  animation: {
    onComplete: function () {
      const ctx = this.ctx;
      const centerX = (this.chartArea.left + this.chartArea.right) / 2;
      const centerY = (this.chartArea.top + this.chartArea.bottom) / 2;
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#666';
      ctx.fillText(`${percentage}%`, centerX, centerY);
    }
  }
};
function ChartNetwork() {
  return (
    <Paper style={{ height: '230px', padding: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '85%', overflow: 'hidden', marginLeft: '10px' }}>
     <Box style={{ display: 'flex', flexDirection: 'column', marginRight: '2em', alignItems: 'flex-start' }}>
        <Typography color="textSecondary" gutterBottom style={{ marginBottom: '1em', fontSize: '16px', fontWeight: '800', color: '#666' }}>
          Network
        </Typography>
        <Box style={{ display: 'flex', flexDirection: 'column', marginBottom: '1em', marginRight: '1rem' }}>
          <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
            <span style={{ display: 'block', width: '20px', height: '20px', backgroundColor: '#3f51b5', borderRadius: '50%', marginRight: '0.5em' }}></span>
            <Typography variant="body1">Following</Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" style={{ marginLeft: '25px' }}>2567 Companies</Typography>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'column', marginTop: '1em' }}>
          <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
            <span style={{ display: 'block', width: '20px', height: '20px', backgroundColor: '#ff9800', borderRadius: '50%', marginRight: '0.5em' }}></span>
            <Typography variant="body1">Followers</Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" style={{ marginLeft: '25px' }}>8,334 Person</Typography>
        </Box>
      </Box>
      <Box style={{ maxWidth: 'calc(100% - 160px)',maxHeight:'220px' }}>
        <Doughnut data={data} options={options} />
      </Box>
    </Paper>
  );
}

export default ChartNetwork;




