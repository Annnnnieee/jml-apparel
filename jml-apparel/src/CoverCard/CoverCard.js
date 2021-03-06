
import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Color from 'color';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
    content: {
        position: 'absolute',
        color: "white",
        zIndex: 0,
        bottom: 0,
        width: '100%',
        padding: 0,
        paddingLeft: "6%",
    },
    card: {
        borderRadius: '0rem',
        boxShadow: 'none',
        position: 'relative',
        minWidth: 200,
        minHeight: 360,
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '64%',
            bottom: 0,
            zIndex: 0,
            //  background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
        },
    },
    fixedRatio: {
        paddingBottom: "38.88%",
        display: "block",
        position: "relative",
        height: 0,
        overflow: "hidden",
        [theme.breakpoints.down('sm')]: {
            paddingBottom: "133.38%",
        },
    },
}));

const CoverCard = ({ cover, coverAlt, title, width }) => {
    let coverPhoto = cover;
    if (isWidthDown('sm', width)) {
        coverPhoto = coverAlt
    }
    const classes = useStyles();

    return (
        <div className={classes.fixedRatio}>
            <Card className={classes.card}>
                <CardMedia
                    className="card-media"
                    component="img"
                    image={coverPhoto}
                />
                <Box className={classes.content}>
                    <Typography variant="h1">{title}</Typography>
                </Box>
            </Card>
        </div>
    );
};
export default withWidth()(CoverCard);