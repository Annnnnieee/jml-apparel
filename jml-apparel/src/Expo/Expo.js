

import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import expoCover from '../assets/expo-title.jpg';
import expoCoverAlt from '../assets/expo-alt-title.jpg';
import expo2020ipso from '../assets/expo-2020-ipso.jpg';
import expo2020PerformancePortland from '../assets/expo-2020-performance-days-portland.jpg';
import expo2020PerformanceMunich from '../assets/expo-2020-performance-days-munich.jpg';
import expo2021ORWinter from '../assets/expo-2021-OR-winter.jpg';
import expo2021performanceSummerMunich from '../assets/expo-2021-performance-days-summer-munich.jpg';
import expo2021ORSummer from '../assets/expo-2021-OR-summer.jpg';
import expo2021performanceWinterMunich from '../assets/expo-2021-performance-days-winter-munich.jpg';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    expoHeader: {
        backgroundColor: "grey",
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "center"
    },
    expoItem: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "lightgrey",
        padding: "50px 100px 30px 20px",
        marginBottom: "10px"
    },
    img: {
        maxHeight: "450px",
        maxWidth: "450px"
    }
}));

function Expo() {
    const events2020 =
        [
            { image: expo2020ipso, title: "Some Title", body: "some description" },
            { image: expo2020PerformanceMunich, title: "Some Title", body: "some description" },
            { image: expo2020PerformancePortland, title: "Some Title", body: "some description" },
        ]

    const events2021 =
        [
            { image: expo2021ORWinter, title: "Some Title", body: "some description" },
            { image: expo2021performanceSummerMunich, title: "Some Title", body: "some description" },
            { image: expo2021ORSummer, title: "Some Title", body: "some description" },
            { image: expo2021performanceWinterMunich, title: "Some Title", body: "some description" },
        ]
    const classes = useStyles();
    return ( // TODO replace cover image based on size. 
        <Container>
            <img src={expoCover} alt="expo cover image" className="cover" />

            <div className={classes.expoHeader}>2020 EVENTS</div>
            <Grid container item spacing={0} justify="center" >
                {
                    events2020.map(event => (
                        <Grid container xs={12} className={classes.expoItem} >
                            <Grid item xs={12} sm={6}>
                                <img src={event.image} className={classes.img} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <div>{event.title}</div>
                                </Box>
                            </Grid>

                        </Grid>
                    ))
                }
            </Grid>

            <div className={classes.expoHeader}>2021 EVENTS</div>
            <Grid container spacing={0} justify="center">
                {
                    events2021.map(event => (
                        <Grid container xs={12} className={classes.expoItem} >
                            <Grid item xs={12} sm={6}>
                                <img src={event.image} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <div>{event.title}</div>
                                </Box>
                            </Grid>

                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default Expo;
