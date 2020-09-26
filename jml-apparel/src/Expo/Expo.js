

import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import expoCover from '../assets/expo-title.jpg';
import expoCoverAlt from '../assets/expo-alt-title.jpg';
import expo2020ipso from '../assets/expo-2020-ipso.jpg';
import expo2020PerformancePortland from '../assets/expo-2020-performance-days-portland.jpg';
import expo2020PerformanceMunich from '../assets/expo-2020-performance-days-munich.jpg';
import expo2021ORWinter from '../assets/expo-2021-OR-winter.jpg';
import expo2021performanceSummerMunich from '../assets/expo-2021-performance-days-summer-munich.jpg';
import expo2021ORSummer from '../assets/expo-2021-OR-summer.jpg';
import expo2021performanceWinterMunich from '../assets/expo-2021-performance-days-winter-munich.jpg';

function Expo() {
    return (
        <Container>
        <img src={expoCover} alt="expo cover image" />
  
        <div>
            <div>2020 EVENTS</div>
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} >
              <Paper>
                <img src={expo2020ipso} />
                <Box>
                  <div>contact info</div>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} >
              <Paper>
                <img src={expo2020PerformancePortland} />
                <Box>
                  <div>contact info in chinese</div>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} >
              <Paper>
                <img src={expo2020PerformanceMunich} />
                <Box>
                  <div>contact info in chinese</div>
                </Box>
              </Paper>
            </Grid>
            </Grid>

            <div>2021 EVENTS</div>

            <Grid container spacing={1} justify="center">
            <Grid item xs={12} >
              <Paper>
                <img src={expo2021ORWinter} />
                <Box>
                  <div>contact info in chinese</div>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} >
              <Paper>
                <img src={expo2021performanceSummerMunich} />
                <Box>
                  <div>contact info in chinese</div>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} >
              <Paper>
                <img src={expo2021ORSummer} />
                <Box>
                  <div>contact info in chinese</div>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} >
              <Paper>
                <img src={expo2021performanceWinterMunich} />
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

export default Expo;
