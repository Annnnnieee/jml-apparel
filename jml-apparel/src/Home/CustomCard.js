
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Color from 'color';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    actionArea: {
        borderRadius: 0,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.005)',
        },
    },
    card: {
        //  minWidth: 256,
        borderRadius: 0,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: `0 3px 6px 0 ${Color("grey")
                .rotate(-12)
                .darken(0.1)
                .fade(0.5)}`,
        },
    },
    content: {
        background: "rgba(77, 77, 77, 1)",
        padding: '1rem 1rem 1rem',
    },
    title: {
        color: '#fff',
        textTransform: 'uppercase',
    },
}));

const CustomCard = ({ classes2, image, title }) => {
    const classes = useStyles();
    return (
        <CardActionArea className={classes.actionArea}>
            <Card className={classes.card}>
                <CardMedia className="card-media"
                    component="img" image={image} />
                {title && <CardContent className={classes.content}>
                    <Typography className={classes.title} variant={'h2'}>
                        {title}
                    </Typography>
                </CardContent>}
            </Card>
        </CardActionArea>
    );
};
export default CustomCard;
