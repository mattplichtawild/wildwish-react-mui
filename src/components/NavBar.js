import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// TODO: Add dynamic NabBar Title based on route
export default function NavBar() {
  const classes = useStyles();


  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
        <ListItem button component={NavLink} to="/">
          <ListItemText primary='Home' />
        </ListItem>

        <ListItem button component={NavLink} to="/about">
          <ListItemText primary='About' />
        </ListItem>
        
        <ListItem button component={NavLink} to="/about">
          <ListItemText primary='For Zookeepers' />
        </ListItem>
        
        <ListItem button component={NavLink} to="/about">
          <ListItemText primary='Animal Stories' />
        </ListItem>

      </List>
      <Divider />
      <List>
        {['My Account'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer("left", true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="menu" aria-haspopup="true" >
            <MenuIcon aria-controls="menu" aria-haspopup="true" />
          </IconButton>
          <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
              {list('left')}
            </Drawer>
          <Typography variant="h6" className={classes.title}> 
            <Button color="inherit" component={NavLink} to="/">Wild Wish</Button>
          </Typography>
          <Button color="inherit" component={NavLink} to="/animals">Animals</Button>
          <Button color="inherit" component={NavLink} to="/about">About</Button>
          <Button color="inherit" component={NavLink} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}