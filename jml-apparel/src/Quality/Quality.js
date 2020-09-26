
import React from 'react';
import QualityCoverImage from '../assets/quality-title.jpg';
import BluesignPartner from '../assets/quality-bluesign-system-partner.jpg'
import oekotexStandard from '../assets/quality-oekotex-standard100.jpg';
import iso9001 from '../assets/quality-iso9001.jpg';
import bvAccreditedLab from '../assets/quality-bv-accredited-lab.jpg';
import grsCertified from '../assets/quality-grs-certified.jpg';

import Container from '@material-ui/core/Container';
import Elastics from '../assets/product-elastics01.jpg';
import Drawcords from '../assets/product-drawcords01.jpg';
import Hangtags from '../assets/product-hangtags01.jpg';
import Labels from '../assets/product-labels01.jpg';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


function Quality() {
    return (
        <Container>
        <img src={QualityCoverImage} alt="quality and sustainability cover image" />
        <div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget lectus accumsan, tincidunt libero non, imperdiet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tempor, felis eu pharetra egestas, arcu dui elementum metus, et ullamcorper erat turpis eget lectus. Nulla facilisi. Vestibulum augue lorem, pulvinar ut dapibus vitae, scelerisque sed risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis sagittis fermentum. Aenean quis ante sed diam tincidunt efficitur id et neque. </p>
            <p>Pellentesque at odio erat. Sed ac blandit odio, eget pharetra arcu.</p>

            <p>Cras tempus odio velit, sed ullamcorper massa consectetur nec. Aenean maximus dui vel vulputate malesuada. Morbi volutpat laoreet velit. Fusce vel tellus vitae purus dignissim facilisis. Ut ac quam vel dui venenatis semper eget vel turpis. Nullam euismod, magna a aliquet accumsan, urna elit ultrices nibh, quis facilisis est ex sit amet sem. Donec eget velit fermentum, elementum velit eget, tempor sapien. Curabitur aliquam posuere auctor. Sed dapibus vehicula lectus, eu scelerisque lorem. Suspendisse dictum elit ac ultrices feugiat. Integer aliquam tristique tellus a feugiat. Donec non diam a dolor posuere viverra. Nulla vel venenatis ipsum. Suspendisse fringilla erat in porta pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus laoreet ante, eu accumsan urna scelerisque at. </p>
        </div>

        <div>
            <Grid container spacing={1} justify="center">
                <Grid item xs={12} >
                    <Paper>
                        <img src={BluesignPartner}  /> 
                        <Box>
                            <div>Bluesign System Partner</div>
                            <p>Cras tempus odio velit, sed ullamcorper massa consectetur nec. Aenean maximus dui vel vulputate </p>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12}  >
                    <Paper>
                        <img src={oekotexStandard} />
                        <Box>
                        <div>Oeko-Tex Standard 100 Tested Products</div>
                        <p>Cras tempus odio velit, sed ullamcorper massa consectetur nec. Aenean maximus dui vel vulputate </p>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper>
                        <img src={iso9001} />
                        <Box>
                        <div>ISO 9001 Certified Facilities</div>
                        <p>Cras tempus odio velit, sed ullamcorper massa consectetur nec. Aenean maximus dui vel vulputate </p>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper>
                        <img src={bvAccreditedLab}  />
                        <Box>
                        <div>BV Accredited Lab</div>
                        <p>Cras tempus odio velit, sed ullamcorper massa consectetur nec. Aenean maximus dui vel vulputate </p>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper>
                        <img src={grsCertified} />
                        <Box>
                        <div>GRS certified</div>
                        <p>Cras tempus odio velit, sed ullamcorper massa consectetur nec. Aenean maximus dui vel vulputate </p>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    </Container>
    );
}

export default Quality;
