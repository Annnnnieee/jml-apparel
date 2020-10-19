import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { NavHashLink } from 'react-router-hash-link';



import logo from '../assets/logo-svg.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1000,
    color: "black",
    backgroundColor: "white",
  },
  listItem: {
    minWidth: 0,
    lineHeight: 1,
    borderRadius: 0,
    letterSpacing: 0,
    textTransform: "none",
    fontWeight: "bold",
  },
  listItemText: {
    padding: "0.2% 0.5% 0.2% 0.5%",
    "&:hover": {
      color: "#009966",
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    flexShrink: 0
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: "100%",
    background: "#DCDCDC",

  },
  title: {
    flexGrow: 1,
    justifyContent: "left",
  },
  drawerItem: {
    fontWeight: "bold",
    fontSize: "1rem",
    "&:hover": {
      color: "#009966",
    }
  },
}));



function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ListItemLink(props) {
  const { primary, to, classes, active } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      ))
    ,
    [to],
  );
  return (
    <li>
      <ListItem button component={NavHashLink}
        to={to}
        activeClassName="selected"
        activeStyle={{ color: '#009966' }}>

        <ListItemText primary={primary} />
      </ListItem>
      <Divider style={{ background: "white", height: "1.5px", width: "95%", margin: "auto" }} />
    </li>
  );
}

ListItemLink.propTypes = {
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


function NavItem(props) {
  const {to} = props;
  const classes = useStyles();

  return (
    <Button
      color="inherit"
      activeClassName="selected"
      activeStyle={{ color: '#009966' }}
      classes={{ root: classes.listItem, text: classes.listItemText }}
      component={NavHashLink}
      to={to}>
     {props.children} </Button>
  )
}

function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  // const location = useLocation();
  // const  active= location.pathname == "/product" ? true : false
  // let rootClass = classes.drawerItem;
  // if(active){
  //   rootClass = classes.selectedDrawerItem;
  // }
  //  console.log("1. active: " + active )
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div onClick={handleDrawerToggle}>
      <div className={classes.toolbar} />
      <Divider />
      <List >
        <ListItemLink to="/product" primary="Product" classes={{ root: classes.drawerItem }} />
        <ListItemLink to="/digital" primary="Digital" classes={{ root: classes.drawerItem }} />
        <ListItemLink to="/quality-and-sustainability" primary="Quality &amp; Sustainability" classes={{ root: classes.drawerItem }} />
        <ListItemLink to="/expo-and-conference" primary="Expo &amp; Conference" classes={{ root: classes.drawerItem }} />
        <ListItemLink to="/about-us" primary="About Us" classes={{ root: classes.drawerItem }} />
        <ListItemLink to="/contact-us" primary="Contact Us" classes={{ root: classes.drawerItem }} />
      </List>
    </div>
  );


  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll >

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <div className={classes.title} >
              <Button color="inherit" component={RouterLink} to="/"><img src={logo}></img></Button>

            </div>


            <Hidden xsDown>
              <NavItem to="/product">Product</NavItem>
              <NavItem to="/digital">Digital</NavItem>
              <NavItem to="/quality-and-sustainability">Quality &amp; Sustainability</NavItem>
              <NavItem to="/expo-and-conference">Expo &amp; Conference</NavItem>
              <NavItem to="/about-us">About Us</NavItem>
              <NavItem to="/contact-us">Contact Us</NavItem>
            </Hidden>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. do we even need css */}
      <Hidden smUp implementation="css">
        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'left' : 'right'}
          open={mobileOpen}
          onClose={handleDrawerToggle} // TODO handleDrawerToggle when the screen size changes... not only on close. 
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Toolbar />
    </div>
  );
}


export default ResponsiveDrawer;
