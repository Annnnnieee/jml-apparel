

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';


import expoCover from '../assets/expo-title.jpg';
import expoCoverAlt from '../assets/expo-alt-title.jpg';
import expo2020ipso from '../assets/expo-2020-ipso.jpg';
import expo2020PerformancePortland from '../assets/expo-2020-performance-days-portland.jpg';
import expo2020PerformanceMunich from '../assets/expo-2020-performance-days-munich.jpg';
import expo2021ORWinter from '../assets/expo-2021-OR-winter.jpg';
import expo2021performanceSummerMunich from '../assets/expo-2021-performance-days-summer-munich.jpg';
import expo2021ORSummer from '../assets/expo-2021-OR-summer.jpg';
import expo2021performanceWinterMunich from '../assets/expo-2021-performance-days-winter-munich.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    introContainer: {
        maxWidth: "90%",
        margin: "auto",
        marginBottom: "2%",
    },
    expoHeader: {
        backgroundColor: "#484848",
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "center",
        color: "white",
    },
    expoItem: {
        display: "flex",
        flexDirection: "row",
        background: "rgba(194, 194, 194, 0.2)",
        padding: "3% 4.5% 3% 4.5%", // TODO fix this. 55 2 5
        marginBottom: "10px",
        [theme.breakpoints.down('xs')]: {
            padding: "4% 4.5% 4% 4.5%",
        },
    },
    expoDescription: {
    },
    itemTitle: {
        marginBottom: "7px",
        marginTop: "15px",
    },
    imgContainer: {
        display: "block",
        maxWidth: "15rem",
        height: "auto",
        overflow: "none",
        [theme.breakpoints.up('sm')]: {
            paddingRight: "3%"
         },
        [theme.breakpoints.down('xs')]: {
            display: "block",
            verticalAlign: "bottom",
            lineHeight: 0,
            overflow: "hidden",
            maxWidth: "100%",
            height: "auto",
            marginBottom: "0px auto 15px",
        },
    img: {
        [theme.breakpoints.up('sm')]: {
           paddingRight: "3%"
        },
    }
    }
}));

function Expo() {
    const events2020 =
        [
            { image: expo2020ipso, title: "IPSO", date: "July 2020", location: "Shanghai China" },
            { image: expo2020PerformanceMunich, title: "Performance Days", date: "November 18-19, 2020", location: "Portland, Oregon, USA" },
            { image: expo2020PerformancePortland, title: "Performance Days", date: "December 9-10, 2020", location: "Munich, Germany" },
        ]

    const events2021 =
        [
            { image: expo2021ORWinter, title: "Outdoor Retailer", date: "January 27-29, 2021", location: "Denver, Colorado, USA" },
            { image: expo2021performanceSummerMunich, title: "Performance Days", date: "April 28-29, 2021", location: "Munich, Germany" },
            { image: expo2021ORSummer, title: "Outdoor Retailer", date: "June 15-17, 2021", location: "Denver, Colorado, USA" },
            { image: expo2021performanceWinterMunich, title: "Performance Days", date: "November, 2021", location: "Munich, Germany" }, // TODO no date?
        ]
    const classes = useStyles();
    return ( // TODO repl{ace cover image based on size. 
        <div classesName={classes.root}>
            <div className={classes.introContainer}>
                <Hidden smDown>
                    <img src={expoCover} alt="expo cover" />
                </Hidden>
                <Hidden mdUp>
                    <img src={expoCoverAlt} alt="expo cover" />
                </Hidden>
            </div>

            <Typography variant="h2" className={classes.expoHeader}>2020 EVENTS</Typography>
            <Grid container spacing={1} justify="center" >
                {
                    events2020.map(event => (
                        <Grid container item xs={12} className={classes.expoItem} direction="row" >
                            <Grid item xs={12} sm={5} className={classes.imgContainer}> 
                                <img src={event.image} alt="event"/>
                            </Grid>
                            <Grid item xs={12} sm={7} className={classes.expoDescription}>
                                <div>
                                    <Typography variant="h2" className={classes.itemTitle}>{event.title}</Typography>
                                    <Typography variant="h2">Date: {event.date}</Typography>
                                    <Typography variant="h2">Location: {event.location}</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>

            <Typography variant="h2" className={classes.expoHeader}>2021 EVENTS</Typography>
            <Grid container spacing={1} justify="center" direction="row">
                {
                    events2021.map(event => (
                        <Grid container xs={12} className={classes.expoItem} direction="row" >
                            <Grid item xs={12} sm={3}  className={classes.imgContainer}> 
                                <img src={event.image} alt="event"/>
                            </Grid>
                            <Grid item xs={12} sm={7} className={classes.expoDescription}>
                                <div>
                                    <Typography variant="h2" className={classes.itemTitle}>{event.title}</Typography>
                                    <Typography variant="h2">Date: {event.date}</Typography>
                                    <Typography variant="h2">Location: {event.location}</Typography>
                                </div>
                            </Grid>

                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

export default Expo;
