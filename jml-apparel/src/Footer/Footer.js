
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {SiteMap as site} from '../SiteMap'
import Link from '@material-ui/core/Link';

import {HashLinkWithScroll} from '../HashLinkWithScroll/HashLinkWithScroll';

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
    container: {
        background: "rgba(77, 77, 77, 1)",
        color: "white",
        paddingTop: "1rem",
        fontSize: "1rem",
    },
    container2: {
        background: "rgba(51, 51, 51, 1)",
        color: "white",
        paddingTop: "1%",
        paddingBottom: "1%"
    },
   "& a:-webkit-any-link": {
    color: "#ffffff",
    },
}))

function Item({ item, list }) {
    const classes = useStyles();
    return (
        <div className={classes.item} >
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="subtitle1">
                <ul className={classes.list} >
                    {list.map((el) => <li><Link color="inherit" underlineNone component={HashLinkWithScroll} to={`/${item.path}#${el.path}`}>{el.title}</Link></li>)}
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
                    <Grid container item xs={12} sm={5} md={2} className={classes.item} >
                        <Grid item xs={12} >
                            <Item item={site.product} list={site.product.list} />
                        </Grid>
                        <Grid item xs={12}>
                            <Item item={site.digital} list={site.digital.list} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={5} md={3} className={classes.item} >
                        <Item item={site.quality} list={site.quality.list} />
                    </Grid>
                    <Grid item xs={12} sm={5} md={4} className={classes.item} >
                        <Item item={site.expo} list={site.expo.list} />
                    </Grid>
                    <Grid container item xs={12} sm={5} md={3} className={classes.item}>
                        <Grid item xs={12}>
                            <Item item={site.about} list={site.about.list} />
                        </Grid>
                        <Grid item xs={12} className={classes.item}>
                            <Item item={site.contact} list={site.contact.list} />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.container2}><Typography variant="subtitle1" className={classes.item}> &#169; Copyright JML 2020. All rights reserved.</Typography> </div>
        </div>
    );
}

export default Footer;
