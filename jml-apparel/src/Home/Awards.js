import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Award01 from '../assets/lp-award01.jpg';
import Award02 from '../assets/lp-award02.jpg';
import Award03 from '../assets/lp-award03.jpg';
import Award04 from '../assets/lp-award04.jpg';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "90%",
    margin: "auto",
    // background: "white",
  },
  title: {
    textAlign: "center",
  },
  awardsGrid: {
    marginTop: "1%",
    marginBottom: "1%",
  },
  item: {
    display: "block",
    margin: "auto",
    
  },
}));


function Item(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={2} >
      <img src={props.image} alt="award" className={classes.item} />
    </Grid>
  )

}


function Awards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.awardsGrid} spacing={1} justify="center">
        <Item image={Award01}/>
        <Item image={Award02}/>
        <Item image={Award03}/>
        <Item image={Award04}/>
      </Grid>

    </div>
  );
}


export default Awards;
