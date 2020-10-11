import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Digital01 from '../assets/lp-digital01.jpg';
import Digital02 from '../assets/lp-digital02.jpg';
import Typography from '@material-ui/core/Typography';



function Digital() {
    return (

            <Grid container className="digital-section" spacing={1} justify="center">
                <Grid item xs={12} sm={6} key="digital01">
                    <Card className="product-card">
                        <CardActionArea>
                            <CardMedia
                                className="card-media"
                                component="img"
                                image={Digital01}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} key="digital02">
                    <Card className="product-card">
                        <CardActionArea>
                            <CardMedia
                                className="card-media"
                                component="img"
                                image={Digital02}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>


    );
}

export default Digital;
