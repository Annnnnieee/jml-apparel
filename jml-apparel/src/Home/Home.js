import React from 'react';

import Cover from './Cover';
import Digital from './Digital';
import Product from './Product';
import Quality from './Quality';
import Awards from './Awards';
import NotableClients from './NotableClients';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ContactUsButton from './ContactUsButton';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  introContainer: {
    // marginBottom: "1%",
    background: "rgba(194, 194, 194, 0.2)",
    padding: "0 2% 2.5% 2%",
    [theme.breakpoints.down('xs')]: {
      padding: "4% 4% 7% 4%",
    },
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
  button: {
    background: "#009C77",
  },

}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.introContainer}>
        <Cover />
      </div>

      <ContactUsButton component={RouterLink} to="/contact-us"> <Typography variant="body1">Contact our team for more details </Typography></ContactUsButton>

      <div className={classes.section}>
        <Typography variant="h1" className={classes.sectionTitle}>Product</Typography>
        <Product />
      </div>
      <div className={classes.section}>
        <Typography variant="h1" className={classes.sectionTitle}>Digital</Typography>
        <Digital />
      </div>
      <div className={classes.section}>
        <Typography variant="h1" className={classes.sectionTitle}>Quality &amp; Sustainability</Typography>
        <Quality />
      </div>
      <Awards />
      <div className={classes.section}>
        <NotableClients />
      </div>
    </div>
  );
}

export default Home;
