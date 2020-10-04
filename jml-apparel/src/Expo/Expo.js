

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
    root: {
        display: "flex",
        overflow: "hidden",
        // fontFamily: "HelveticaNeue",
        color: "#000000",
        color: "rgb(0, 0, 0)",
        flexDirection: "column",
    },
    introContainer: {
        maxWidth: "90%",
        margin: "auto",
        marginBottom: "15px",
    },
    expoHeader: {
        backgroundColor: "#484848",
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "center",
        fontSize: "2.2vw",
        color: "white",
        [theme.breakpoints.down('sm')]: {
            fontSize: '6vw',
        },
    },
    expoItem: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "lightgrey",
        padding: "5% 5% 5% 5%",
        marginBottom: "15px",
        fontSize: "2.22vw",
        marginBottom: "10px",
        [theme.breakpoints.down('sm')]: {
            fontSize: '5vw',
        },
    },
    expoDescription: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: "20px",
        },
    },
    itemTitle: {
        fontSize: "2.22vw",
        marginBottom: "7px",
        [theme.breakpoints.down('sm')]: {
            fontSize: '6vw',
        },
    },
    img: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: "15px",
        },
        // width: "30%",
        // height: "30%",
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
                <img src={expoCover} alt="expo cover image" className="cover" />
            </div>

            <div className={classes.expoHeader}>2020 EVENTS</div>
            <Grid container item spacing={0} justify="center" >
                {
                    events2020.map(event => (
                        <Grid container xs={12} className={classes.expoItem} direction="row" >
                            <Grid item xs={12} sm={2}> {/* TODO this width is messed up*/}
                                <img src={event.image} className={classes.img} />
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.expoDescription}>
                                <div>
                                    <div className={classes.itemTitle}>{event.title}</div>
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
                            <Grid item xs={12} sm={2}> {/* TODO this width is messed up*/}
                                <img src={event.image} className={classes.img} />
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.expoDescription}>
                                <div>
                                    <div className={classes.itemTitle}>{event.title}</div>
                                    <div>Date: {event.date}</div>
                                    <div>Location: {event.location}</div>
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
