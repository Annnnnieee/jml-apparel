
import React from 'react';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


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
    introduction: {
        maxWidth: "95%",
        marginBottom: "3%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "100%",
            marginBottom: "7%",
        },
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
       paddingTop:"16%",
    },
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
    grid: {
        marginTop: "2%",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column-reverse",
        },
    }
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

                <Grid container spacing={2} justify="right" className={classes.grid}>
                    <Grid item xs={12} sm={2} direction="column" >
                        <img src={about01} alt="our community" />
                        <img src={about02} alt="about our work" className={classes.itemImg}/>
                    </Grid>
                    <Grid item xs={12} sm={10} >
                        <div className={classes.introduction}>
                            <Typography variant="h2">OUR WORKPLACE and COMMUNITY</Typography>
                            <Typography variant="body2">
                                <p>We take corporate responsibility seriously.</p>
                                <p>Our world-wide sales group works closely with an
                                enthusiastic team at our main office in Asia who will expedite your garment trim order.
                                We handle all the details and ensure what you need is completed and shipped on time
                            to meet your production schedule.</p>
                                <p>At our clothing trim production facilities, our employees
                                play a critical role in maintaining quality. We provide a safe working environment,
                                a variety of employee benefits and up to 10,000 hours of professional training,
                            creating a highly efficient team.</p>
                                <p>Our commitment to community is also important to us.
                                Not only do we contribute to local charities directly linked to our workers,
                            we support a number of local educational initiatives.</p>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default About;
