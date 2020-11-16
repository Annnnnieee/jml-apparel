import React from 'react';
import Grid from '@material-ui/core/Grid';
import Digital01 from '../assets/lp-digital01.jpg';
import Digital02 from '../assets/lp-digital02.jpg';
import ButtonBase from '@material-ui/core/ButtonBase';
import { HashLinkWithScroll as HashLink } from '../HashLinkWithScroll/HashLinkWithScroll';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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


function Digital(props) {
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
        <GridListTile style={{ height: "100%" }} key="Elastics">
          <ButtonBase
            component={HashLink}
            to="/digital#3d-trims-library">
            <CustomCard image={Digital01} title="3D Trims Library" />
          </ButtonBase>
        </GridListTile>
        <GridListTile style={{ height: "100%" }} key="Drawcords">
          <ButtonBase
            component={HashLink}
            to="/digital#rfid-products">
            <CustomCard image={Digital02} title="RFID Products" />
          </ButtonBase>
        </GridListTile>
      </GridList>
    </div>
        // <Grid container className="digital-section" spacing={1} justify="center">
        //     <Grid item xs={12} sm={6} key="digital01">
        //         <ButtonBase
        //             component={HashLink}
        //             to="/digital#3d-trims-library">
        //             <CustomCard image={Digital01} title="3D Trims Library" />
        //         </ButtonBase>
        //     </Grid>
        //     <Grid item xs={12} sm={6} key="digital02">
        //         <ButtonBase
        //             component={HashLink}
        //             to="/digital#rfid-products">
        //             <CustomCard image={Digital02} title="RFID Products" />
        //         </ButtonBase>
        //     </Grid>
        // </Grid>


    );
}

export default withWidth()(Digital);
