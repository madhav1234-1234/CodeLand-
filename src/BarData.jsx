import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const borderRadius = 2000;

const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: '30% Application Sent ',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderRadius: 50,      },
      {
        label: "46%' Application Answered"  ,
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
      {
        label: '14% Hired  ',
        data: [25, 20, 60, 70, 46, 35, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: '10% Pending ',
        data: [30, 25, 40, 60, 70, 45, 30],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Profile Strength',
        align: 'start',
        font: {
          size: 16,
          color: 'black',
        },
        padding: {
          top: 20,
          bottom: 20,
        },
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y}%`;
            }
            return label;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
        barPercentage: 0.5,
        categoryPercentage: 1,
      },
      y: {
        display: false, // Hide the Y-axis labels, grid lines, and ticks
        stacked: true,
        beginAtZero: true,
      },
    },
    maxBarThickness: 20,
  };
  
  
  
  
  

const BarData = () => {
  return (
    <div style={{ height: '240px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarData;
