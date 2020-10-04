import React from 'react';
import Carousel from 'react-material-ui-carousel'

import Cover from './Cover';
import Digital from './Digital';
import Product from './Product';
import Quality from './Quality';
import Awards from './Awards';
import NotableClients from './NotableClients';

function Home() {
  return (
    <div>
      <div className="header-section">
        <Cover/>
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
