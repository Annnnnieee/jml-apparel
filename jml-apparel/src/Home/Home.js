import React from 'react';
import Carousel from 'react-material-ui-carousel'

import Cover from './Cover';
import Digital from './Digital';
import Product from './Product';
import Quality from './Quality';
import Awards from './Awards';
import NotableClients from './NotableClients';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    paddingBottom: "20px",
    marginBottom: "3px",
    background: "rgba(194, 194, 194, 0.2)",
  },
  sectionTitle: {
    textTransform: "uppercase",
  },

}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="header-section">
        <Cover />
      </div>

      <div className="home-section">
        <Typography variant="h1" className={classes.sectionTitle}>Product</Typography>
        <Product />
      </div>
      <div className="home-section">
        <Typography variant="h1" className={classes.sectionTitle}>Digital</Typography>
        <Digital />
      </div>
      <div className="home-section">
        <Typography variant="h1" className={classes.sectionTitle}>Quality and Sustainability</Typography>
        <Quality />
      </div>
      <Awards />
      <NotableClients />
    </div>

  );
}

export default Home;
