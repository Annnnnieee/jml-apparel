
import React from 'react';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import aboutCover from '../assets/about-title.jpg';
import aboutCoverAlt from '../assets/about-alt-title.jpg';
import about01 from '../assets/about-image01.jpg';
import about02 from '../assets/about-image02.jpg';
import about03 from '../assets/about-image03.jpg';
import about04 from '../assets/about-image04.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
    },
    introContainer: {
        maxWidth: "90%",
        margin: "auto",
        marginBottom: "15px",
    },
    itemContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    item: {
        background: "rgba(194, 194, 194, 0.2)",
        padding: "3% 3% 3% 3%", // TODO fix this. 55 2 5
        marginBottom: "10px",
        flexGrow: 1,
        flexShrink: 1,
    },
    images: {
        marginTop: "2%",
    },
    itemImg: {
        width: "83%",
        height: "83%",
        [theme.breakpoints.down('sm')]: {
            width: "83%",
            height: "auto",
        },
    },
    // description: {
    //     fontSize: "2.0vw",
    //     maxWidth: "90%",
    //     marginBottom: "3%",
    //     [theme.breakpoints.down('sm')]: {
    //         fontSize: '4vw',
    //         maxWidth: "100%",
    //         marginBottom: "7%",
    //     },
    // },
    itemTitle: {
        textTransform: "uppercase",
        marginBottom: "10px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "17px",
        },
    },
    description: {
        maxWidth: "90%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "100%"
        },
    },

}));

function About() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.introContainer}>
                <Hidden smDown>
                    <img src={aboutCover} alt="about cover" />
                </Hidden>
                <Hidden mdUp>
                    <img src={aboutCoverAlt} alt="about cover" />
                </Hidden>
            </div>
            add two grids
         </div>
    );
}

export default About;
