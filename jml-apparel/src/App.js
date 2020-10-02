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
  Link
} from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ResponsiveDrawer from './Home/ResponsiveDrawer';

function App() {
  return (
    <MuiThemeProvider >
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

    </MuiThemeProvider>

  );
}

export default App;
