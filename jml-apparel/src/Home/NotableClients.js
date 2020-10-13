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
  },
  brandsGrid: {
    marginTop: "1%",
    marginBottom: "1%",
  }
}));


function NotableClients() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Typography varaint="p" className={classes.title}>notable clients</Typography>
      <Grid container spacing={1} justify="space-around" className={classes.brandsGrid}>
        <Grid item xs={6} sm={4} md={1} >
          <img src={brandLululemon} alt="lululemon" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandRei} alt="REI" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandArcteryx} alt="Arcteryx" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandAthleta} alt="Athleta" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandMountainHardware} alt="Mountain Hardware" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandCanadaGoose} alt="Canada Goose" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandFoxHead} alt="Fox Head" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandReigningChamp} alt="Reigning Champ" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandLornaJane} alt="Lorna Jane" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandWolverine} alt="Wolverine World Wide" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandRapha} alt="Rapha" />
        </Grid>
        <Grid item xs={6} sm={4} md={1}>
          <img src={brandSpanx} alt="Spanx" />
        </Grid>
      </Grid>

    </div>
  );
}

export default NotableClients;
