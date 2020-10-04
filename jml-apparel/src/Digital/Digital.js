
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


import digitalCover from '../assets/digital-title.jpg';
import digitalCoverAlt from '../assets/digital-alt-title.jpg';
import digital3DTrims01 from '../assets/digital-3dtrims01.jpg';
import digital3DTrims02 from '../assets/digital-3dtrims02.jpg';
import digital3DTrims03 from '../assets/digital-3dtrims03.jpg';
import digital3DTrims04 from '../assets/digital-3dtrims04.jpg';
import digitalRFID01 from '../assets/digital-RFID01.jpg';
import digitalRFID02 from '../assets/digital-RFID02.jpg';
import digitalRFID03 from '../assets/digital-RFID03.jpg';


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
    itemContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    item: {
        background: "rgba(194, 194, 194, 0.2)",
        padding: "2% 3% 2% 5%", // TODO fix this. 55 2 5
        marginBottom: "10px",
        flexGrow: 1,
        flexShrink: 1,
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
    descriptionList: {
        margin: "0",
        listStylePosition: "inside",
        padding: "0",
    },
    itemTitle: {
        fontSize: "2.22vw",
        textTransform: "uppercase",
        marginBottom: "10px",
        [theme.breakpoints.down('sm')]: {
            fontSize: '6vw',
            marginTop: "17px",
        },
    },
    description: {
        fontSize: "1.6vw",
        maxWidth: "90%",
        [theme.breakpoints.down('sm')]: {
            fontSize: '5vw',
            maxWidth: "100%"
        },
    },

}));

function Digital() {
    const trimsImages = [digital3DTrims01, digital3DTrims02, digital3DTrims03, digital3DTrims04];
    const RFIDImages = [digitalRFID01, digitalRFID02, digitalRFID03];

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.introContainer}>
                <img src={digitalCover} alt="expo cover image" />
            </div>
            <Box className={classes.item}>
                <div className={classes.itemTitle}>3D TRIMS LIBRARY</div>
                <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.</p>
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

            <Box className={classes.item}>
                <div className={classes.itemTitle}>RFID PRODUCTS</div>
                <p className={classes.description}>Radio-Frequency Identification (RFID) maximizes efficiency
                    in logistics and improve inventory management. RFID technology
                    encodes and imprints data to convert inlays into RFID tags,
                    labels and other garment accessories.</p>

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
        </div>
    );
}

export default Digital;
