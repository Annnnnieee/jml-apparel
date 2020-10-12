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
    padding: "0.2% 0.5% 0.2% 0.5%"
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
    width: "100%"
  },
  title: {
    flexGrow: 1,
    justifyContent: "left",
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
  const { primary, to } = props;

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
      <ListItem button component={renderLink}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div onClick={handleDrawerToggle}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItemLink to="/product" primary="Product" />
        <ListItemLink to="/digital" primary="Digital" />
        <ListItemLink to="/quality-and-sustainability" primary="Quality and Sustainability" />
        <ListItemLink to="/expo-and-conference" primary="Expo and Conference" />
        <ListItemLink to="/about-us" primary="About Us" />
        <ListItemLink to="/contact-us" primary="Contact Us" />
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
              <Button color="inherit" component={RouterLink} to="/">JML</Button>
            </div>


            <Hidden xsDown>
              <Button color="inherit" classes={{ root: classes.listItem, text: classes.listItemText}} component={RouterLink} to="/product">Product</Button>
              <Button color="inherit" classes={{ root: classes.listItem, text: classes.listItemText}} component={RouterLink} to="/digital">Digital</Button>
              <Button color="inherit" classes={{ root: classes.listItem, text: classes.listItemText}} component={RouterLink} to="/quality-and-sustainability">Quality and Sustainability</Button>
              <Button color="inherit" classes={{ root: classes.listItem, text: classes.listItemText}} component={RouterLink} to="/expo-and-conference">Expo and Conference</Button>
              <Button color="inherit" classes={{ root: classes.listItem,  text: classes.listItemText}} component={RouterLink} to="/about-us">About Us</Button>
              <Button color="inherit" classes={{ root: classes.listItem,  text: classes.listItemText}} component={RouterLink} to="/contact-us">Contact Us</Button>
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
