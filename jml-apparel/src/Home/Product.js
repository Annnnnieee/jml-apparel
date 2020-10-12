import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Elastics from '../assets/lp-product01.jpg';
import Drawcords from '../assets/lp-product02.jpg';
import Hangtags from '../assets/lp-product03.jpg';
import Labels from '../assets/lp-product04.jpg';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import CustomCard from './CustomCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));


function Product(props) {
  const classes = useStyles();

  const getGridListCols = () => {
    if (isWidthUp('md', props.width)) {
      return 4;
    }

    if (isWidthUp('sm', props.width)) {
      return 2.5;
    }

    if (isWidthUp('xs', props.width)) {
      return 1.2;
    }

    return 4;
  }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={getGridListCols()}>
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

export default withWidth()(Product);
