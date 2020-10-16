
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';
import CoverCard from '../CoverCard/CoverCard';



import QualityCover from '../assets/quality-title.jpg';
import QualityCoverAlt from '../assets/quality-alt-title.jpg';
import BluesignPartner from '../assets/quality-bluesign-system-partner.jpg';
import oekotexStandard from '../assets/quality-oekotex-standard100.jpg';
import iso9001 from '../assets/quality-iso9001.jpg';
import bvAccreditedLab from '../assets/quality-bv-accredited-lab.jpg';
import grsCertified from '../assets/quality-grs-certified.jpg';

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
    introduction: {
        maxWidth: "95%",
        marginBottom: "2%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "100%",
            marginBottom: "3%",
        },
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
        display: "flex",
        flexDirection: "column",
    },
    itemTitle: {
        // marginBottom: "7px",
        // marginTop: "15px",
        lineHeight: 1,
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
            // lineHeight: 0,
            overflow: "hidden",
            maxWidth: "100%",
            height: "auto",
            marginBottom: "4%",
        },
    },
    description: {
        padding: "3% 0 3% 0",
    },
}));

function Quality() {

    const certifications = [
        { name: "Bluesign System Partner", imageSrc: BluesignPartner, description: "Holistic approach, BLUESIGN traces each textile’s path along the manufacturing process, making improvements at every stage from factory floor to finished product.", link: "www.bluesign.com" },
        { name: "Oeko-Tex Standard 100 Tested Products", imageSrc: oekotexStandard, description: "The products have been tested and certified to be free from harmful levels of more than 100 substances known to be harmful to human health.", link: "www.oeko-tex.com" },
        { name: "ISO 9001 Certified Facilities", imageSrc: iso9001, description: "The standard to demonstrate the ability to consistently provide products and services that meet customer and regulatory requirements.", link: "www.iso.org" },
        { name: "BV Accredited Lab", imageSrc: bvAccreditedLab, description: "Our labs are BV accredited and can conduct tests according to ISO, AATCC and JIS standards.", link: "www.bureuveritas.com" },
        { name: "GRS Certified", imageSrc: grsCertified, description: "The GRS is an international, voluntary, full product standard that sets out requirements for third-party certification of recycled content, chain of custody, social and environmental practices and chemical restrictions.  The goal of the GRS is to increase use of recycled materials in products and reduce/eliminate the harm caused by its production.", link: "www.textileexchange.org" }
    ]
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.introContainer}>
                <CoverCard cover={QualityCover} coverAlt={QualityCoverAlt} title="quality &amp; sustainability"/>
                <Typography variant="body1" className={classes.introduction}>
                    <p>We understand the importance of quality in your garment design process.
                    At JML, we are committed to supporting you in meeting and exceeding your expectations.
                    We take pride in our research and development, comprehensive knowledge of the industry
                    and close relationship with our material suppliers as well as our reputation for
                    efficiency and quick turnaround.</p>

                    <p>Our designers are constantly updating both the look and construction of our clothing trims to match your own merchandise.
                    We adhere to the highest QC procedures and guarantee quality finished items.</p>

                    <ul>
                        <li>Our factories are ISO 9001:2000 certified</li>
                        <li>All our products meet Oeko-Tex Standard 100 test criteria</li>
                        <li>Our labs are ITS accredited and can conduct tests according to ISO,
                                AATCC and JIS standards</li>
                    </ul>
                </Typography>

            </div>

            <div>
                <Grid container spacing={0} justify="center" >
                    {
                        certifications.map(cert => (
                            <Grid container item xs={12} className={classes.expoItem} direction="row" >
                                <Grid item xs={12} sm={5} className={classes.imgContainer}>
                                    <img src={cert.imageSrc} alt="quality or sustainability representative" />
                                </Grid>
                                <Grid item xs={12} sm={7} className={classes.expoDescription}>
                                    <Typography variant="h2" >{cert.name}</Typography>
                                    <div className={classes.description}>
                                        <Typography variant="body2" ><div>{cert.description}</div></Typography>
                                    </div>
                                    <Typography variant="body2" > <div>{cert.link} </div></Typography>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    );
}

export default Quality;
