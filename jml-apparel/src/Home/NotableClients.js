import React from 'react';

import brandArcteryx from '../assets/lp-brands-arcteryx.jpg';
import brandAthleta from '../assets/lp-brands-athleta.jpg';
import brandCanadaGoose from '../assets/lp-brands-canada-goose.jpg';
import brandFoxHead from '../assets/lp-brands-foxhead.jpg';
import brandLornaJane from '../assets/lp-brands-lorna-jane.jpg';
import brandLululemon from '../assets/lp-brands-lululemon.jpg';
import brandMountainHardware from '../assets/lp-brands-mountain-hardware.jpg';
import brandRapha from '../assets/lp-brands-rapha.jpg';
import brandRei from '../assets/lp-brands-rei.jpg';
import brandReigningChamp from '../assets/lp-brands-reigning-champ.jpg';
import brandSpanx from '../assets/lp-brands-spanx.jpg';
import brandWolverine from '../assets/lp-brands-wolverine-world-wide.jpg';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "90%",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: "2%",
  },
  brands: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center", 
    padding: 0,
    margin: 0,
    listStyle: "none",
    "& img": {
      maxWidth: "125px",
      maxHeight: "auto",
      padding: "1%"
    },
  }
}));


function NotableClients() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Typography varaint="p" className={classes.title}>Notable Clients</Typography>

      <ul className={classes.brands}>
        <li><img src={brandLululemon} alt="lululemon" /></li>
        <li><img src={brandRei} alt="REI" /></li>
        <li><img src={brandArcteryx} alt="Arcteryx" /></li>
        <li><img src={brandAthleta} alt="Athleta" /></li>
        <li><img src={brandMountainHardware} alt="Mountain Hardware" /></li>
        <li><img src={brandCanadaGoose} alt="Canada Goose" /> </li>
        <li><img src={brandFoxHead} alt="Fox Head" /></li>
        <li><img src={brandReigningChamp} alt="Reigning Champ" /></li>
        <li><img src={brandLornaJane} alt="Lorna Jane" /></li>
        <li><img src={brandWolverine} alt="Wolverine World Wide" /></li>
        <li><img src={brandRapha} alt="Rapha" /></li>
        <li><img src={brandSpanx} alt="Spanx" /></li>
      </ul>


    </div>
  );
}

export default NotableClients;
