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
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Portal from '@material-ui/core/Portal';



import { NavHashLink } from 'react-router-hash-link';



import logo from '../assets/logo-svg.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: "45px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1000,
    color: "black",
    backgroundColor: "white",
    // minHeight: "45px",
  },
  listItem: {
    minWidth: 0,
    lineHeight: 1,
    borderRadius: 0,
    letterSpacing: 0,
    textTransform: "none",
    fontWeight: "bold",
    fontFamily: "'Work Sans', sans-serif",
  },
  listItemText: {
    padding: "0.3% 0.5% 0.3% 0.5%",
    fontFamily: "'Work Sans', sans-serif",
    [theme.breakpoints.up('md')]: {
      marginRight: "0.7%",
    },
    "&:hover": {
      color: "#009966",
    },
  },
  logoButtonText: {
    padding: "0px",
    // maxWidth: "130%"
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
  toolBarRegular: {
    //minHeight: "45px",
  },
  drawerPaper: {
    width: "100%",
    background: "#DCDCDC",
  },
  logo: {
    flexGrow: 1,
    justifyContent: "left",
  },
  drawerItem: {
    fontWeight: "bold",
    //fontFamily: "'Work Sans', sans-serif",
    fontSize: "1rem",
    "&:hover": {
      color: "#009966",
    }
  },
  logoImg: {
    maxWidth: "130%",
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
  const { primary, to, classes } = props;

  return (
    <li>
      <ListItem 
        button 
        component={NavHashLink}
        classes={classes}
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
  const { to } = props;
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
  const container = React.useRef(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleClickAway = (event) => {
    setMobileOpen(false);
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
          <Toolbar classes={{regular: classes.toolBarRegular}}>
            <div className={classes.logo} >
              <Button color="inherit" component={RouterLink} classes={{text: classes.logoButtonText}} to="/"><img src={logo} className={classes.logoImg}></img></Button>

            </div>


            <Hidden xsDown>
              <NavItem to="/product">Product</NavItem>
              <NavItem to="/digital">Digital</NavItem>
              <NavItem to="/quality-and-sustainability">Quality &amp; Sustainability</NavItem>
              <NavItem to="/expo-and-conference">Expo &amp; Conference</NavItem>
              <NavItem to="/about-us">About Us</NavItem>
              <NavItem to="/contact-us">Contact Us</NavItem>
            </Hidden>

            <ClickAwayListener onClickAway={handleClickAway}>
              <div>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Portal container={container.current}>
                  <Hidden smUp implementation="css">
                    <Drawer
                      onBackdropClick={handleClickAway}
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
                </Portal>
              </div>
            </ClickAwayListener>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. do we even need css */}
      <Hidden smUp implementation="css">
        <div ref={container} />
      </Hidden>

      <Toolbar />
    </div>
  );
}


export default ResponsiveDrawer;
