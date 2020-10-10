import React from 'react';
import productTitle from '../assets/product-title.jpg'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';


import elastics from '../assets/product-elastics01.jpg';
import drawcords from '../assets/product-drawcords01.jpg';
import hangtags from '../assets/product-hangtags01.jpg';
import labels from '../assets/product-labels01.jpg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
    },
    introductionContainer: {
        maxWidth: "90%",
        margin: "auto",
        marginBottom: "15px",
    },
    introduction: {
        maxWidth: "90%",
        marginBottom: "3%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "100%",
            marginBottom: "7%",
        },
    },
    itemsContainer: {
        // display: "flex",
        // justifyContent: "center",
    },
    item: {
        display: "flex",
        flexGrow: 1,
       //  margin: "auto",
        background: "rgba(194, 194, 194, 0.2)",
        padding: "3% 3% 3% 3%", // TODO needs to change based on the size. 
        marginBottom: "12px",
        // gridTemplateColumns: "repeat(2, 1fr)",
        [theme.breakpoints.down('xs')]: {
            margin: "auto",
            marginBottom: "8px",
            padding: "2% 2% 6% 2%",
        },
    },
    itemImage: {
        [theme.breakpoints.only('sm')]: {
           paddingRight: "20px",
         },
        [theme.breakpoints.up('md')]: {
           width: "80%",
           height: "80%",
        },
    },
    itemDetail: {
        //paddingLeft: "2rem",
        minHeight: "18vh",
        [theme.breakpoints.down('xs')]: {
            paddingLeft: "1rem",
            minHeight: "0px"
        },
    },
    itemDetailTitle: {
        textTransform: "uppercase",
        marginBottom: "10px",
    },
    itemDetailList: {
        margin: "0",
        listStylePosition: "inside",
        padding: "0",
    },

}));

function Product(props) {
    const products = [
        {
            imgSrc: elastics,
            description: {
                title: "Elastics", details: [
                    "Bra straps",
                    "Underband and waistband elastics",
                    "Gripper elastics",
                    "Mesh",
                    "Recycled elastics",
                    "Biodegradable elastics",
                    "Anti-microbial elastics"
                ]
            }
        },
        {
            imgSrc: drawcords,
            description: {
                title: "Drawcords", details: [
                    "Metal tipped",
                    "TPU tipped",
                    "ABS tipped",
                    "Specialty tips",
                    "Stretch",
                    "Non-stretch"
                ]
            }
        },
        {
            imgSrc: hangtags,
            description: {
                title: "Hangtags", details: [
                    "Paper hangtag",
                    "Paper packaging",
                    "Shopping bags"
                ]
            }
        },
        {
            imgSrc: labels,
            description: {
                title: "Labels", details: [
                    "Woven Labels",
                    "Print Labels"
                ]
            }
        }

    ]
    const getGridListCols = () => {
    
        if (isWidthUp('sm', props.width)) {
          return 2;
        }
    
        if (isWidthUp('xs', props.width)) {
          return 1;
        }
    
        return 1;
      }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.introductionContainer}>
                <img src={productTitle} alt="product cover image" />
                <div className={classes.introduction}>
                    <Typography variant="body1">
                        <p> From labels and hangtags to elastics and tape, we supply hundreds of
                        new and innovative garment trims to enhance your fashion wear.
                        We work hard to be on top of the latest trends and to create the kind
                            of stylish, comfortable and practical clothing trims you demand</p>

                        <p> Count on us for forward-thinking apparel solutions to help you create
                            distinctive quality garments.</p>

                        <p> We understand the importance of detail in your garment design process.
                        At JML, we are committed to supporting you in meeting and exceeding your
                        expectations. We take pride in our research and development, comprehensive
                        knowledge of the industry and close relationship with our material suppliers
                            as well as our reputation for efficiency and quick turn around.</p>

                        <p> Our designers are constantly updating both the look and the construction
                        of our clothing trims to match your own merchanidise. We adhere to the
                            highest QC procedures and guarantee quality finished items.</p>

                        <ul className={classes.descriptionList}>
                            <li>Our factories are ISO 9001:2000 certified</li>
                            <li>All our products meet Oeko-Tex Standard 100 test criteria</li>
                            <li>Our labs are ITS accredited and can conduct tests according to ISO,
                                AATCC and JIS standards</li>
                        </ul>
                    </Typography>
                </div>
            </div>

            <div style={{ padding: 0 }}>

                <Grid container className={classes.itemsContainer} justify="space-between"  >
                    {
                        products.map(product => (
                            <Grid container item xs={12} sm={6} spacing={1} className={classes.item} justify="space-between">
                                    <Grid item xs={12} sm={5} md={6} >
                                        <img src={product.imgSrc} className={classes.itemImage} />
                                    </Grid>
                                    <Grid item xs={12} sm={7} md={6} >
                                        <div className={classes.itemDetail}>
                                            <Typography variant="h2"><div className={classes.itemDetailTitle}>{product.description.title}</div> </Typography>
                                            <Typography variant="body2">
                                                <ul className={classes.itemDetailList}>
                                                    {product.description.details.map(detail => (
                                                        <li>{detail}</li>
                                                    ))}
                                                </ul>
                                            </Typography>
                                        </div>
                                    </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    );
}

export default withWidth()(Product);
