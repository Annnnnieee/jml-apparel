
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import digitalCover from '../assets/digital-title.jpg';
import digitalCoverAlt from '../assets/digital-alt-title.jpg';
import digital3DTrims01 from '../assets/digital-3dtrims01.jpg';
import digital3DTrims02 from '../assets/digital-3dtrims02.jpg';
import digital3DTrims03 from '../assets/digital-3dtrims03.jpg';
import digital3DTrims04 from '../assets/digital-3dtrims04.jpg';
import digitalRFID01 from '../assets/digital-RFID01.jpg';
import digitalRFID02 from '../assets/digital-RFID02.jpg';
import digitalRFID03 from '../assets/digital-RFID03.jpg';


function Digital() {
    const trimsImages = [digital3DTrims01, digital3DTrims02, digital3DTrims03, digital3DTrims04];
    const RFIDImages = [digitalRFID01, digitalRFID02, digitalRFID03];
    return (
        <Container>
            <img src={digitalCover} alt="expo cover image" />

            <Box>
                <div>3D TRIMS LIBRARY</div>
                <p>a description</p>
                <Grid container spacing={1} justify="right">
                    {
                        trimsImages.map(image => {
                            return (
                                <Grid item xs={12} sm={1} >
                                    <img src={image} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>

            <Box>
                <div>RFID PRODUCTS</div>

                <p>some description</p>

                <Grid container spacing={1} >
                    {RFIDImages.map(image => {
                        return (
                            <Grid item xs={12} sm={2}>
                                <img src={image} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Container>
    );
}

export default Digital;
