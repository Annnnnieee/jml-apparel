import React from 'react';
import Elastics from '../assets/lp-product01.jpg';
import Drawcords from '../assets/lp-product02.jpg';
import Hangtags from '../assets/lp-product03.jpg';
import Labels from '../assets/lp-product04.jpg';
import Grid from '@material-ui/core/Grid';

import CustomCard from './CustomCard';


function Product() {
  return (
    <Grid container className="product-section" spacing={1} justify="center"> {/* change this to allow sliding*/}
      <Grid item xs={3} key="elastics">
        <CustomCard image={Elastics} title="Elastics" ></CustomCard>
      </Grid>
      <Grid item xs={3} key="drawcords">
        <CustomCard image={Drawcords} title="Drawcords" ></CustomCard>
      </Grid>
      <Grid item xs={3} key="handtags">
        <CustomCard image={Hangtags} title="Hangtags" ></CustomCard>
      </Grid>
      <Grid item xs={3} key="labels">
        <CustomCard image={Labels} title="Labels" ></CustomCard>
      </Grid>
    </Grid>
  );
}

export default Product;
