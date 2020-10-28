
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CoverCard from '../CoverCard/CoverCard';



import digitalCover from '../assets/digital-title.jpg';
import digitalCoverAlt from '../assets/digital-alt-title.jpg';
import digital3DTrims01 from '../assets/digital-3dtrims01.jpg';
import digital3DTrims02 from '../assets/digital-3dtrims02.jpg';
import digital3DTrims03 from '../assets/digital-3dtrims03.jpg';
// import digital3DTrims04 from '../assets/digital-3dtrims04.jpg';
import digitalRFID01 from '../assets/digital-RFID01.jpg';
import digitalRFID02 from '../assets/digital-RFID02.jpg';
import digitalRFID03 from '../assets/digital-RFID03.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        // display: "flex",
        overflow: "hidden",
        flexDirection: "column",
    },
    introContainer: {
        maxWidth: "90%",
        margin: "auto",
        marginBottom: "2%",
    },
    itemContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    item: {
        background: "rgba(194, 194, 194, 0.2)",
        padding: "3% 4.5% 3% 4.5%", 
        marginBottom: "10px",
        [theme.breakpoints.down('xs')]: {
            padding: "4% 4.5% 4% 4.5%",
        },
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

function Digital() {
    const trimsImages = [digital3DTrims01];
    const RFIDImages = [digitalRFID01, digitalRFID02, digitalRFID03];

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.introContainer}>
                <CoverCard cover={digitalCover} coverAlt={digitalCoverAlt} title="Digital"/>
            </div>
            <Box className={classes.item} >
                <Typography variant="h2" className={classes.itemTitle} id="3d-trims-library">3D TRIMS LIBRARY</Typography>
                <Typography variant="body2" className={classes.description}>
                Cloud-based 3D soft trims library allows brands to utilize available 3D files to design and develop
                 products in a digital ecosystem; provides compatible files for CLO, Browzwear and other digital software; reduces proto samples, 
                 allows for rapid iteration and decision-making enhancement.</Typography>

                <Grid container spacing={2} justify="right" className={classes.images}>
                    {
                        trimsImages.map(image => {
                            return (
                                <Grid item xs={12} sm={2} >
                                    <img src={image} alt="trim" />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>

            <Box className={classes.item}>
                <Typography variant="h2" className={classes.itemTitle} id="rfid-products">RFID PRODUCTS</Typography>
                <Typography variant="body2" className={classes.description}>Radio-Frequency Identification (RFID) maximizes efficiency
                in logistics and improve inventory management. RFID technology
                encodes and imprints data to convert inlays into RFID tags,
                    labels and other garment accessories.</Typography>

                <Grid container spacing={2} className={classes.images} >
                    {RFIDImages.map(image => {
                        return (
                            <Grid item xs={12} sm={2}>
                                <img src={image} alt="rfid" />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    );
}

export default Digital;
