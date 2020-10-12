
import React from 'react';
import contactCover from '../assets/contact-title.jpg'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';


import contactCoverAlt from '../assets/contact-alt-title.jpg';
import contactVancouver from '../assets/contact-vancouver01.jpg';
import contactShanghai from '../assets/contact-shanghai01.jpg';

function Contact() {
  return (
    <Container>
      <Hidden smDown>
        <img src={contactCover} alt="contact cover" />
      </Hidden>
      <Hidden mdUp>
        <img src={contactCoverAlt} alt="contact cover" />
      </Hidden>
      <div>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} >
            <Paper>
              <img src={contactVancouver} alt="vancouver contact info" /> {/* TODO replace with google map. shanghai too*/}
              <Box>
                <div>contact info</div>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} >
            <Paper>
              <img src={contactShanghai} alt="shanghai contact info" />
              <Box>
                <div>contact info in chinese</div>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Contact;
