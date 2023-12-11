import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Badge, InputBase, alpha, InputAdornment } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'fixed', // Change 'fixed' to 'fixed'
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        boxShadow: 'none',
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: 'white',
        color: 'black',
       
        justifyContent: 'space-between',
      },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontSize: '1.5rem', // Adjust the font size for the title
  },
  search: {
    border: '1px solid gray',
    borderRadius: '15px',
    position: 'relative',
    backgroundColor: '#E3E3E3', // Set the background color to #E3E3E3
    '&:hover': {
      backgroundColor: '#E3E3E3', // Adjust the hover color if needed
    },
    marginRight: theme.spacing(30), // Adjust the margin
    marginLeft: 0,
    width: '200%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1), // Adjust the margin
      width: '40ch'    },
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    height: '35px',  // Adjust the font size for the input
  },
  searchIcon: {
    padding: theme.spacing(0, 1), // Adjust padding
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`, // Adjust padding
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '28ch', // Adjust the width
    },
    fontSize: '1rem', // Adjust the font size for the input
  },
  sectionDesktop: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem', // Adjust the font size for the icons and text
  },
  badge: {
    backgroundColor: '#4caf50',
    color: '#fff',
    fontSize: '0.8rem', // Adjust the font size for the badge
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Header = ({ open }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={`${classes.appBar} ${open ? classes.appBarShift : ''}`}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} style={{fontSize:'18px'}} noWrap>
          Statistics
        </Typography>
        <div className={classes.search}>
          <InputBase
            placeholder="Search something here..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.sectionDesktop}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton aria-label="show new messages" color="inherit">
              <Badge badgeContent={3} classes={{ badge: classes.badge }}>
                <MessageIcon />
              </Badge>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="show new notifications" color="inherit">
              <Badge badgeContent={4} classes={{ badge: classes.badge }}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" noWrap>
              Oda Dink
            </Typography>
          </Grid>
        </Grid>
      </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
