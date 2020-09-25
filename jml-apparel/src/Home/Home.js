import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Digital from './Digital';
import Product from './Product';
import Quality from './Quality';
import Awards from './Awards';
import NotableClients from './NotableClients';

function Home() {
  return (
    <div>
      <div className="header-section">
        <div className="carousel"> ---carousel--- </div>
        <div className="header-button">---header button--</div>
      </div>

      <Product />
      <Digital />
      <Quality />
      <Awards />
      <NotableClients />
    </div>

  );
}

export default Home;
