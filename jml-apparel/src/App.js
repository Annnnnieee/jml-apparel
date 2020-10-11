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

function App() {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1000,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      htmlFontSize: 10,
      fontFamily: "'Work Sans', sans-serif",
    }
  });

  theme.typography.h1 = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "3.5rem",
    fontWeight: "normal",
    [theme.breakpoints.only('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '30px',
    },
  }

  theme.typography.body1 = {
    fontSize: "1.2rem",
    fontFamily: "'Work Sans', sans-serif",
    [theme.breakpoints.only('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.7rem',
    },
  }

  theme.typography.h2 = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "1.3rem",
    fontWeight: "normal",
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.8rem',
    },
  }

  theme.typography.body2 = theme.typography.body1;
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
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
      </Router>

    </ThemeProvider>

  );
}

export default App;
