import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Elastics from '../assets/lp-product01.jpg';
import Drawcords from '../assets/lp-product02.jpg';
import Hangtags from '../assets/lp-product03.jpg';
import Labels from '../assets/lp-product04.jpg';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import CustomCard from './CustomCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowX: 'hidden',
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));


function Product() {
  const classes = useStyles();

  return (
    // <Grid container className="product-section" spacing={1} justify="center"> 
    //   <Grid item xs={3} key="elastics">
    //     <CustomCard image={Elastics} title="Elastics" ></CustomCard>
    //   </Grid>
    //   <Grid item xs={3} key="drawcords">
    //     <CustomCard image={Drawcords} title="Drawcords" ></CustomCard>
    //   </Grid>
    //   <Grid item xs={3} key="handtags">
    //     <CustomCard image={Hangtags} title="Hangtags" ></CustomCard>
    //   </Grid>
    //   <Grid item xs={3} key="labels">
    //     <CustomCard image={Labels} title="Labels" ></CustomCard>
    //   </Grid>
    // </Grid>

    <div className={classes.root}>
      <GridList className={classes.gridList} cols={1.2}>
        <GridListTile style={{height: "100%"}} key="Elastics">
          <CustomCard image={Elastics} title="Elastics" ></CustomCard>
        </GridListTile>
        <GridListTile  style={{height: "100%"}} key="Drawcords">
          <CustomCard image={Drawcords} title="Drawcords" ></CustomCard>
        </GridListTile>
        <GridListTile  style={{height: "100%"}} key="Hangtags">
          <CustomCard image={Hangtags} title="Hangtags" ></CustomCard>
        </GridListTile>
        <GridListTile  style={{height: "100%"}} key="Labels">
          <CustomCard image={Labels} title="Labels" ></CustomCard>
        </GridListTile>
      </GridList>
    </div>
  );
}

export default Product;
