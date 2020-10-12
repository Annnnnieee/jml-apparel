import React from 'react';
import quality01 from '../assets/lp-quality01.jpg';
import quality02 from '../assets/lp-quality02.jpg';
import quality03 from '../assets/lp-quality03.jpg';
// import Grid from '@material-ui/core/Grid';

import CustomCard from './CustomCard';
import Carousel from 'react-material-ui-carousel'

function Quality() {
  return (
    // <Grid container className="quality-section" spacing={1} justify="center">
    //   <Grid item xs={4}>
    //     <CustomCard image={quality01}></CustomCard>
    //   </Grid>
    //   <Grid item xs={4}>
    //     <CustomCard image={quality02}></CustomCard>
    //   </Grid>
    //   <Grid item xs={4}>
    //     <CustomCard image={quality03}></CustomCard>
    //   </Grid>
    // </Grid>

    <Carousel>
      <CustomCard image={quality01}></CustomCard>
      <CustomCard image={quality02}></CustomCard>
      <CustomCard image={quality03}></CustomCard>
    </Carousel>
  );
}

export default Quality;
