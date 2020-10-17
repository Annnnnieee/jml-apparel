import React from 'react';
import Grid from '@material-ui/core/Grid';
import Digital01 from '../assets/lp-digital01.jpg';
import Digital02 from '../assets/lp-digital02.jpg';
import CustomCard from './CustomCard';
import ButtonBase from '@material-ui/core/ButtonBase';
import { HashLinkWithScroll as HashLink } from '../HashLinkWithScroll/HashLinkWithScroll';


function Digital() {
    return (
        <Grid container className="digital-section" spacing={1} justify="center">
            <Grid item xs={12} sm={6} key="digital01">
                <ButtonBase
                    component={HashLink}
                    to="/digital#3d-trims-library">
                    <CustomCard image={Digital01} title="3D Trims Library" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6} key="digital02">
                <ButtonBase
                    component={HashLink}
                    to="/digital#rfid-products">
                    <CustomCard image={Digital02} title="RFID Products" />
                </ButtonBase>
            </Grid>
        </Grid>
    );
}

export default Digital;
