import React from 'react';
import './App.css';
import Carousel from 'react-material-ui-carousel'
import Digital from './Landing/Digital';
import Product from './Landing/Product';
import Quality from './Landing/Quality';
import Awards from './Landing/Awards';
import NotableClients from './Landing/NotableClients';

function App() {
  return (
    <div className="App">
      <div className="nav-section">navbar</div>
      <div className="header-section">
        <div className="carousel"> ---carousel--- </div>
        <div className="header-button">---header button--</div>
      </div>

        <Product/>
        <Digital/>
        <Quality/>
        <Awards/>
        <NotableClients/>
      </div>
  );
}

export default App;
