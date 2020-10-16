
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: "flex",
        flexDirection: "column",
        // flexGrow: 0
    },
    list: {
        listStyle: "none",
        padding: 0,
    },
    grid: {
        justifyContent: "center",
        justify: "center",
        margin: "auto",
    },
    item: {
        padding: "1%",
    },
    container:{
        background: "rgba(77, 77, 77, 1)",
        color: "white",
        paddingTop: "1rem",
    },
    container2: {
        background: "rgba(51, 51, 51, 1)",
        color: "white",
        paddingTop: "1%",
        paddingBottom: "1%"
    },

}))

function Item({ title, list }) {
    const classes = useStyles();

    console.log(list);
    return (
        <div className={classes.item} >
            <Typography variant="h3">{title}</Typography>
            <Typography variant="subtitle1">
                <ul className={classes.list} >
                    {list.map((el) => <li>{el}</li>)}
                </ul>
            </Typography>
        </div>
    )
}

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>

            <Grid container 
            direction="row"
            alignItems="flex-start"
            className={classes.grid}
            sm={10}
            >
                <Grid container item xs={12} sm={5} md={1} className={classes.item} >
                    <Grid item xs={12} >
                        <Item title="Product" list={["Elastics", "Drawcords", "Hangtags", "Labels"]} />
                    </Grid>
                    <Grid item xs={12}>
                        <Item title="Digital" list={["3D Trims Library", "RFID Products"]} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={5} md={2} className={classes.item} >
                    <Item title="Quality &amp; Sustainability" list={["Bluesign System Partner", "Oeko-Tex Standard 100 Tested Products", "ISO9001 Certified Facility", "BV Accredited Lab", "GRS Certified"]} />
                </Grid>
                <Grid item xs={12} sm={5} md={3} className={classes.item} >
                    <Item title="Expo &amp; Conference" list={["2020 JUL  IPSO (Shanghai)", "2020 NOV  Performance Days (Portland)", "2020 DEC  Performance Days (Munich)", "2021 JAN  Outdoor Retailer Winter (Denver)", "2021 APR  Performance Days (Munich)", "2021 JUN  Outdoor Retailer Summer (Denver)", "2021 NOV  Performance Days (Munich)"]} />
                </Grid>
                <Grid container item xs={12} sm={5} md={2} className={classes.item}>
                    <Grid item xs={12}>
                        <Item title="About Us" list={["Our Values, Mission, & Vision", "Our Workplace & Community"]} />
                    </Grid>
                    <Grid item xs={12} className={classes.item}>
                        <Item title="Contact Us" list={["North America Office", "China Office"]} />
                    </Grid>
                </Grid>
            </Grid>
            </div>
            <div className={classes.container2}><Typography variant="subtitle1" className={classes.item}> &#169; Copyright JML 2020. All rights reserved.</Typography> </div>
        </div>
    );
}

export default Footer;
