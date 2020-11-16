import React from 'react';
import './App.css';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Digital from './Digital/Digital';
import Product from './Product/Product';
import Quality from './Quality/Quality';
import Expo from './Expo/Expo';
import About from './About/About';
import Footer from './Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ResponsiveDrawer from './Home/ResponsiveDrawer';

import ScrollToTop from './Home/ScrollToTop'

function App() {
  const theme = createMuiTheme({
    // props: {
    overrides: {
      MuiListItem: {
        root: {
          "&$selected": {
            color: "red",
            backgroundColor: "green",
          }
        }
      }
    },
    //   MuiButtonBase: {
    //     disableRipple: true,
    //   },
    // },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1000,
        lg: 1500,
        xl: 1920,
      },
    },

  });

  theme.typography.fontFamily = "'Work Sans', sans-serif";

  theme.typography.subtitle1 = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "0.8rem",
    fontWeight: "normal",
  }

  // theme.typography.h1 = {
  //   fontFamily: "'Work Sans', sans-serif",
  //   fontSize: "5rem",
  //   fontWeight: "bold",
  //   textTransform: "uppercase",
  //   [theme.breakpoints.only('md')]: {
  //     fontSize: "3.8rem",
  //   },
  //   [theme.breakpoints.only('sm')]: {
  //     fontSize: '3.7rem',
  //   },
  //   [theme.breakpoints.only('xs')]: {
  //     fontSize: '2.2rem',
  //   },
  // }


  theme.typography.h1 = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "3.1rem",
    fontWeight: "700",
    textTransform: "uppercase",
    [theme.breakpoints.only('md')]: {
      fontSize: "2.2rem",
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '2.1rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.7rem',
    },
  }

  theme.typography.body1 = {
    fontSize: "1.9rem",
    fontFamily: "'Work Sans', sans-serif",
    [theme.breakpoints.only('md')]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem',
    },
  }

  theme.typography.h2 = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "2rem",
    fontWeight: "600",
    [theme.breakpoints.only('md')]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.1rem',
    },
  }

  theme.typography.h3 = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "1rem",
    fontWeight: "bold",
    [theme.breakpoints.only('sm')]: {
      fontSize: '0.1',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.1rem',
    },
  }
  theme.typography.body2 = theme.typography.body1;


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <ResponsiveDrawer />

          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/digital">
              <Digital />
            </Route>
            <Route path="/quality-and-sustainability">
              <Quality />
            </Route>
            <Route path="/expo-and-conference">
              <Expo />
            </Route>
            <Route path="/about-us">
              <About />
            </Route>
            <Route path="/contact-us">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>

    </ThemeProvider>

  );
}

export default App;
