

import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
            { image: expo2020ipso, title: "IPSO", date: "July 2020", location: "Shanghai China" },
            { image: expo2020PerformanceMunich, title: "Performance Days", date: "November 18-19, 2020", location: "Portland, Oregon, USA"},
            { image: expo2020PerformancePortland, title: "Performance Days", date: "December 9-10, 2020", location: "Munich, Germany"},
        ]

    const events2021 =
        [
            { image: expo2021ORWinter, title: "Outdoor Retailer", date: "January 27-29, 2021", location: "Denver, Colorado, USA" },
            { image: expo2021performanceSummerMunich, title: "Performance Days", date: "April 28-29, 2021", location: "Munich, Germany" },
            { image: expo2021ORSummer, title: "Outdoor Retailer", date: "June 15-17, 2021", location: "Denver, Colorado, USA" },
            { image: expo2021performanceWinterMunich, title: "Performance Days", date: "November, 2021", location: "Munich, Germany"}, // TODO no date?
        ]
    const classes = useStyles();
    return ( // TODO replace cover image based on size. 
        <Container>
            <img src={expoCover} alt="expo cover image" className="cover" />

            <div className={classes.expoHeader}>2020 EVENTS</div>
            <Grid container item spacing={0} justify="center" >
                {
                    events2020.map(event => (
                        <Grid container xs={12} className={classes.expoItem} direction="row" >
                            <Grid item xs={12} sm={6}> {/* TODO this width is messed up*/}
                                <img src={event.image} className={classes.img} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div>
                                    <div>{event.title}</div>
                                    <div>Date: {event.date}</div>
                                    <div>Location: {event.location}</div>
                                </div>
                            </Grid>

                        </Grid>
                    ))
                }
            </Grid>

            <div className={classes.expoHeader}>2021 EVENTS</div>
            <Grid container spacing={0} justify="center" direction="row">
                {
                    events2021.map(event => (
                        <Grid container xs={12} className={classes.expoItem} direction="row" >
                            <Grid item xs={12} sm={6}> {/* TODO this width is messed up*/}
                                <img src={event.image} className={classes.img} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div>
                                    <div>{event.title}</div>
                                    <div>Date: {event.date}</div>
                                    <div>Location: {event.location}</div>
                                </div>
                            </Grid>

                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default Expo;
