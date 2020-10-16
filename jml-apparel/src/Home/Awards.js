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
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  title: {
    textAlign: "center",
  },
  awards: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center", 
    padding: 0,
    margin: 0,
    listStyle: "none",
    "& img": {
      maxWidth: "200px",
      maxHeight: "auto",
      padding: "1%"
    },
  }
}));


function Item(props) {
  const classes = useStyles();

  return (
    <li >
      <img src={props.image} alt="award" className={classes.item} />
    </li>
  )

}


function Awards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul className={classes.awards}>
        <Item image={Award01}/>
        <Item image={Award02}/>
        <Item image={Award03}/>
        <Item image={Award04}/>
      </ul>

    </div>
  );
}


export default Awards;
