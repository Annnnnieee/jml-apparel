import React from 'react';
import Grid from '@material-ui/core/Grid';
import Digital01 from '../assets/lp-digital01.jpg';
import Digital02 from '../assets/lp-digital02.jpg';
import CustomCard from './CustomCard';

function Digital() {
    return (
        <Grid container className="digital-section" spacing={1} justify="center">
            <Grid item xs={12} sm={6} key="digital01">
                <CustomCard image={Digital01} title="3D Trims Library"></CustomCard>
            </Grid>
            <Grid item xs={12} sm={6} key="digital02">
                <CustomCard image={Digital02} title="RFID Products"></CustomCard>
            </Grid>
        </Grid>
    );
}

export default Digital;
