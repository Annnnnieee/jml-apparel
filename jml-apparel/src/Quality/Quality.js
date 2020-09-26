
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import QualityCoverImage from '../assets/quality-title.jpg';
import BluesignPartner from '../assets/quality-bluesign-system-partner.jpg'
import oekotexStandard from '../assets/quality-oekotex-standard100.jpg';
import iso9001 from '../assets/quality-iso9001.jpg';
import bvAccreditedLab from '../assets/quality-bv-accredited-lab.jpg';
import grsCertified from '../assets/quality-grs-certified.jpg';

const useStyles = makeStyles((theme) => ({
    item: {
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

function Quality() {

    const certifications = [
        { name: "Bluesign System Partner", imageSrc: BluesignPartner, description: "some description", link: "www.bluesign.com" },
        { name: "Oeko-Tex Standard 100 Tested Products", imageSrc: oekotexStandard, description: "some description", link: "www.oeko-tex.com" },
        { name: "ISO 9001 Certified Facilities", imageSrc: iso9001, description: "some description", link: "www.iso.org" },
        { name: "BV Accredited Lab", imageSrc: bvAccreditedLab, description: "some description", link: "www.bureuveritas.com" },
        { name: "GRS Certified", imageSrc: grsCertified, description: "some description", link: "www.textileexchange.org" }
    ]
    const classes = useStyles();

    return (
        <Container>
            <img src={QualityCoverImage} alt="quality and sustainability cover image" />
            <div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget lectus accumsan, tincidunt libero non, imperdiet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tempor, felis eu pharetra egestas, arcu dui elementum metus, et ullamcorper erat turpis eget lectus. Nulla facilisi. Vestibulum augue lorem, pulvinar ut dapibus vitae, scelerisque sed risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis sagittis fermentum. Aenean quis ante sed diam tincidunt efficitur id et neque. </p>
                <p>Pellentesque at odio erat. Sed ac blandit odio, eget pharetra arcu.</p>
                <p>Cras tempus odio velit, sed ullamcorper massa consectetur nec. Aenean maximus dui vel vulputate malesuada. Morbi volutpat laoreet velit. Fusce vel tellus vitae purus dignissim facilisis. Ut ac quam vel dui venenatis semper eget vel turpis. Nullam euismod, magna a aliquet accumsan, urna elit ultrices nibh, quis facilisis est ex sit amet sem. Donec eget velit fermentum, elementum velit eget, tempor sapien. Curabitur aliquam posuere auctor. Sed dapibus vehicula lectus, eu scelerisque lorem. Suspendisse dictum elit ac ultrices feugiat. Integer aliquam tristique tellus a feugiat. Donec non diam a dolor posuere viverra. Nulla vel venenatis ipsum. Suspendisse fringilla erat in porta pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus laoreet ante, eu accumsan urna scelerisque at. </p>
            </div>

            <div>
                <Grid container>

                    {
                        certifications.map(cert => (
                            <Grid container xs={12} className={classes.item} direction="row" >
                                <Grid item xs={12} sm={6}> {/* TODO this width is messed up*/}
                                    <img src={cert.imageSrc} className={classes.img} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div>
                                        <div>{cert.name}</div>
                                        <div>{cert.description}</div>
                                        <div>{cert.link}</div>
                                    </div>
                                </Grid>

                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </Container>
    );
}

export default Quality;
