import React from 'react';
import quality01 from '../assets/lp-quality01.jpg';
import quality02 from '../assets/lp-quality02.jpg';
import quality03 from '../assets/lp-quality03.jpg';
import quality04 from '../assets/quality-iso9001.jpg';
import quality05 from '../assets/quality-oekotex-standard100.jpg';
import { Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import CustomCard from './CustomCard';
import Carousel from 'react-material-ui-carousel'

import ButtonBase from '@material-ui/core/ButtonBase';
import { HashLinkWithScroll as HashLink } from '../HashLinkWithScroll/HashLinkWithScroll';


function Quality() {
  return (
    <div>
      <Hidden smDown>
        <Grid container className="quality-section" spacing={1} justify="left">
          <Grid item xs={2}>
            <ButtonBase
              component={HashLink}
              to="/quality-and-sustainability#bluesign-system-partner">
              <CustomCard image={quality01} />
            </ButtonBase>
          </Grid>
          <Grid item xs={2}>
            <ButtonBase
              component={HashLink}
              to="/quality-and-sustainability#bv-accredited-lab">
              <CustomCard image={quality02} />
            </ButtonBase>
          </Grid>
          <Grid item xs={2}>
            <ButtonBase
              component={HashLink}
              to="/quality-and-sustainability#grs-certified">
              <CustomCard image={quality03} />
            </ButtonBase>
          </Grid>
          <Grid item xs={2}>
            <ButtonBase
              component={HashLink}
              to="/quality-and-sustainability#iso9001-certified-facility">
              <CustomCard image={quality04} />
            </ButtonBase>
          </Grid>
          <Grid item xs={2}>
            <ButtonBase
              component={HashLink}
              to="/quality-and-sustainability#oeko-tex-standard-100-tested-products">
              <CustomCard image={quality05} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Carousel>
          <ButtonBase
            component={HashLink}
            to="/quality-and-sustainability#bluesign-system-partner">
            <CustomCard image={quality01} />
          </ButtonBase>
          <ButtonBase
            component={HashLink}
            to="/quality-and-sustainability#bv-accredited-lab">
            <CustomCard image={quality02} />
          </ButtonBase>
          <ButtonBase
            component={HashLink}
            to="/quality-and-sustainability#grs-certified">
            <CustomCard image={quality03} />
          </ButtonBase>
          <ButtonBase
            component={HashLink}
            to="/quality-and-sustainability#iso9001-certified-facility">
            <CustomCard image={quality04} />
          </ButtonBase>
          <ButtonBase
            component={HashLink}
            to="/quality-and-sustainability#oeko-tex-standard-100-tested-products">
            <CustomCard image={quality05} />
          </ButtonBase>
        </Carousel>
      </Hidden>
    </div >
  );
}

export default Quality;
