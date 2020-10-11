import React from 'react';

import Cover from './Cover';
import Digital from './Digital';
import Product from './Product';
import Quality from './Quality';
import Awards from './Awards';
import NotableClients from './NotableClients';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  section: {
    marginBottom: "1%",
    background: "rgba(194, 194, 194, 0.2)",
    padding: "2% 2% 2.5% 2%",
    [theme.breakpoints.down('xs')]: {
      padding: "4% 4% 7% 4%",
    },
  },
  sectionTitle: {
    textTransform: "uppercase",
    paddingBottom: "0.5rem"
  },

}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Cover />
      </div>

      <div className={classes.section}>
        <Typography variant="h1" className={classes.sectionTitle}>Product</Typography>
        <Product />
      </div>
      <div className={classes.section}>
        <Typography variant="h1" className={classes.sectionTitle}>Digital</Typography>
        <Digital />
      </div>
      <div className={classes.section}>
        <Typography variant="h1" className={classes.sectionTitle}>Quality and Sustainability</Typography>
        <Quality />
      </div>
      <Awards />
      <NotableClients />
    </div>

  );
}

export default Home;
