import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 150,
    maxWidth: 260,
    minHeight: 120,
    maxHeight: 250,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    borderRadius: '20px',
    textAlign: 'center',
    padding: theme.spacing(2),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
    backgroundColor: '#fff', // Assuming a white background as in the image
  },
  additionalContent: {
    // You can adjust these styles according to your needs
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    fontSize:'0.6rem'// Spacing between the icon and the new content
    // Add additional styles here
  },
  icon: {
    fontSize: '1.5rem', // Increase the size of the icon as it appears larger in the image
    color: theme.palette.primary.main,

  },
  value: {
    fontSize: '1rem', // Larger text for the value
    fontWeight: 'bold',
    lineHeight: '1',
    position: 'absolute', // Position the value absolutely
    top: theme.spacing(4), // Adjust top spacing to move value down from the title
    left: theme.spacing(1),
    marginLeft:'10px' // Center the items vertically
    // Align value to the left
  },
  titleBox: {
    display: 'flex',
    alignItems: 'flex-start', // Align to the top
    justifyContent: 'flex-start', // Align to the left
    width: '100%',
    position: 'absolute', // Position absolutely within the card
    top: theme.spacing(1), // Spacing from the top of the card
    left: theme.spacing(1),
    marginLeft:'10px' // Center the items vertically
    // Spacing from the left of the card
  },
  title: {
    fontSize: '0.7rem',
    color: theme.palette.text.secondary,
       whiteSpace: 'nowrap', // Prevents the text from wrapping
       fontWeight: '800', color: '#666'
    // maxWidth: '100%', // Adjust this as needed to prevent title from wrapping
  },
  percentageBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Center in the card
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
    borderRadius: '50%', // Make it circular
    padding: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  },
  arrowIcon: {
    fontSize: '1.2rem', // Increase the size of the arrow icon
  },
  iconBox: {
    position: 'absolute', // Position the icons absolutely
    bottom: theme.spacing(1), // Spacing from the bottom of the card
    left: theme.spacing(1), // Align icons to the left
    display: 'flex', // Use flexbox for alignment
    alignItems: 'center',
    marginLeft:'10px' // Center the items vertically
  },
}));

const InfoBox = ({ Icon, color, title, value, additionalInfo }) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Box className={classes.titleBox}>
            <Typography className={classes.title}>
              {title}
            </Typography>
          </Box>
          <Typography variant="h5" component="h2" className={classes.value}>
            {value}
          </Typography>
          <Box className={classes.iconBox}>
            <Icon className={classes.icon} style={{ color }} />
            {/* Conditional rendering of additional information */}
            {additionalInfo && (
              <Typography  className={classes.additionalContent}>
                {additionalInfo}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    );
  };
  
export default InfoBox;
