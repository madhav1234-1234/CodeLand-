import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Header from './Header'; // Import the Header component
import FlashOnIcon from '@material-ui/icons/FlashOn';

import { 
  CssBaseline, 
  Drawer, 
  AppBar, 
  Toolbar, 
  List, 
  Typography, 
  Divider, 
  IconButton, 
  Badge, 
  Container, 
  Grid, 
  Paper, 
  ListItem, 
  ListItemIcon, 
  ListItemText 
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
} from '@material-ui/icons';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description'; // Assuming this icon for Applications
import MessageIcon from '@material-ui/icons/Message';
import BarChartIcon from '@material-ui/icons/BarChart';
import NewsIcon from '@material-ui/icons/Announcement';
import BarData from './BarData';
import InfoBox from './SummaryBoxes';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import VisitorGraph from './VisitorGraph'; // Import the VisitorGraph component
import Chart from './ChartNetwork';
import JobTrends from './JobTrends';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  selectedListItem: {
    backgroundColor: 'white !important', // Use !important to override Material-UI styles
    borderRadius: '20px',
    margin: theme.spacing(1),
    '& .MuiListItemIcon-root': { // Increase specificity for icon
      color: 'black !important', // Apply black color to icons in the selected item
    },
    '& .MuiListItemText-primary': { // Increase specificity for text
      color: 'black !important', // Apply black color to text in the selected item
    },
  },
  root: {
    display: 'flex',
    padding: theme.spacing(0, 0), // Adjust the top padding as needed
  },
  content: {
    padding: theme.spacing(8, 2), // Adjust the top padding as needed
    marginTop: theme.spacing(8), // Match the top margin to the header's height
  },
  logo: {
    padding: theme.spacing(2),
    background: '#4B2E83', // Set the background color to match the image
    color: 'white', // Text color is white
    display: 'flex',
    alignItems: 'center', // Vertically center the content
    justifyContent: 'center', // Horizontally center the content
    marginRight:'40px'
  },
  logoImage: {
    marginRight: theme.spacing(1), // Add some space between the image and the text
    width: 'auto', // Adjust the width as needed
    height: '32px', // Adjust the height as needed
  },
  
  footer: {
    marginTop:'60px',
    position: 'sticky',
    bottom: 0,
    textAlign: 'center',
    padding: theme.spacing(1), // Reduced padding
    width: '100%',
    color: 'rgba(255, 255, 255, 0.7)', // Footer text color
    fontSize: '0.5rem', // Reduced font size
    lineHeight: '1.2', // Adjust line height if necessary
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: '#4B2E83',
    color: 'white',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderTopRightRadius: '20px', // Apply a border radius to the top right corner
    borderBottomRightRadius: '20px', // Apply a border radius to the bottom right corner
    overflow: 'hidden', // Ensure the contents of the drawer respect the border radius
    // Add any additional styling here
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },

  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto',
    height: '100vh',
    paddingTop: theme.spacing(10), // Add padding to account for the AppBar height
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    height: 280, // Adjust the height based on the BarData chart
  },
  fixedHeight: {
    height: 240,
  },
  infoBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
    height: '50%',
    width:'50%' // Set the height to match BarData
    // This will distribute space evenly between the boxes
  },

  listItemIcon: {
    marginLeft: theme.spacing(3), // This value controls the space for the icon, adjust as needed
    
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    color: 'white', // Set the icon color to white
   
    '& svg': {
      fontSize: '0.2rem', // Adjust icon size as needed
    },
  },
  listItemText: {
    color: 'rgba(255, 255, 255, 0.7)', // Adjusted for non-active items
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)', // Hover effect
    },
   
    '& .MuiListItemText-primary': { // This targets the primary text element within ListItemText
      fontSize: '0.5rem !important', // Adjust the font size for primary text in list items
    },
    marginRight: theme.spacing(7), // This value controls the space for the icon, adjust as needed

    textAlign: 'center', // Center align the text
  },
  listItemTextPrimary: {
    fontSize: '0.8rem !important', // Adjust the font size for primary text in list items
  },
  activeListItem: {
    color: '#FFFFFF', // White color for the active item
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background for the active item
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  // const [activeIndex, setActiveIndex] = React.useState(0); // Default to 'Dashboard'

  // const handleListItemClick = (index) => {
  //   setActiveIndex(index); // Update the active index
  // };

  const [selectedIndex, setSelectedIndex] = useState(0); // Default to 'Dashboard'

  const handleListItemClick = (index) => {
    setSelectedIndex(index); // Update the active index
  };
  const isSelected = (index) => selectedIndex === index;

  // Remove the useState and handleDrawerToggle since they are no longer needed

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
  
    <Header />
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
     <div className={classes.logo}>
  <FlashOnIcon className={classes.logoIcon} />
  <Typography variant="h6" noWrap>
    Jobie
  </Typography>
</div>
        <Divider />
        <List>
          {['Dashboard', 'Search Job', 'Applications', 'Message', 'Statistics', 'News'].map((text, index) => {
            const Icon = {
              Dashboard: DashboardIcon,
              'Search Job': SearchIcon,
              Applications: DescriptionIcon,
              Message: MessageIcon,
              Statistics: BarChartIcon,
              News: NewsIcon,
            }[text];

            return (
              <ListItem
                button
                key={text}
                selected={isSelected(index)}
                onClick={() => handleListItemClick(index)}
                classes={{ selected: classes.selectedListItem }}
                className={clsx({ [classes.selectedListItem]: isSelected(index) })}
              >
                <ListItemIcon>
                  <Icon color={isSelected(index) ? 'action' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary={text} classes={{ primary: classes.listItemTextPrimary }} />
              </ListItem>
            );
          })}
        </List>


<div className={classes.footer}>
  <Typography variant="caption">
    Jobie Job Portal Admin Dashboard
    <br />
    © 2020 All rights reserved
    <br />
    Made with <span style={{ color: 'red' }}>❤</span> by Potentrow
  </Typography>
</div>

      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* BarData Chart */}
            <Grid item xs={6} md={6} lg={6}>
              <Paper className={classes.paper}>
                <BarData />
              </Paper>
            </Grid>
           
            {/* InfoBox Components */}
            <Grid item xs={6} md={6} lg={6}>
              {/* Two rows of InfoBoxes */}
              <Grid container spacing={1} >
                {/* First row of InfoBoxes */}
                <Grid item xs={3} sm={3}>
  <InfoBox
    Icon={PeopleIcon}
    color="#ff6f00"
    title="Profile Viewed"
    value="456k"
    additionalInfo={
      <>
        <span>+<span style={{ color: 'green' }}>24%</span></span> than last month
      </>
    }
  />
</Grid>

                <Grid item xs={3} sm={3} style={{ marginLeft: '30px' }}>
  <InfoBox
    Icon={EmailIcon}
    color="#00c853"
    title="Unread Messages"
    value="28"
    additionalInfo={<Typography style={{ color: 'blue',fontSize:'0.6rem' }}>Go to message</Typography>}
  />
</Grid>


                <Grid item xs={3} sm={3} style={{marginLeft:'30px'}}>                  <InfoBox
                    Icon={AssignmentIcon}
                    color="#2962ff"
                    title="Application Sent"
                    value="651"
                  />
                </Grid>
                {/* Second row of InfoBoxes */}
                <Grid item xs={3} sm={3} style={{marginTop:'20px'}}>                  <InfoBox
                    Icon={BusinessCenterIcon}
                    color="#d50000"
                    title="App. Answered"
                    value="24"
                  />
                </Grid>
                <Grid item xs={3} sm={3} style={{marginLeft:'30px',marginTop:'20px'}}>                  <InfoBox
                    Icon={PhoneInTalkIcon}
                    color="#6a1b9a"
                    title="Interviewed"
                    value="261"
                  />
                </Grid>
                <Grid item xs={3} sm={3} style={{marginLeft:'30px',marginTop:'20px'}}>                  <InfoBox
                    Icon={PhoneInTalkIcon}
                    color="#6a1b9a"
                    title="Hired"
                    value="69"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>    
      <VisitorGraph />
  </Grid>
  <Grid item xs={6} md={6} lg={6}>    
      <Chart/>
  </Grid>
  <Grid item xs={6} md={6} lg={6}> 
  </Grid>
  <Grid item xs={6} md={6} lg={6}> 
  <JobTrends/>
  </Grid>
          </Grid>
        </Container>
      </main>
    </div>
   
    </>
  );

}
