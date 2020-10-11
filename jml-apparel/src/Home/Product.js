import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Elastics from '../assets/lp-product01.jpg';
import Drawcords from '../assets/lp-product02.jpg';
import Handtags from '../assets/lp-product03.jpg';
import Labels from '../assets/lp-product04.jpg';
import Grid from '@material-ui/core/Grid';

// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';


// const useStyles = makeStyles((theme) => ({

// }));


function Product() {
  return (
      <Grid container className="product-section" spacing={1} justify="center">
        <Grid item xs={3} key="elastics">
          <Card className="product-card">
            <CardActionArea>
              <CardMedia
                className="card-media"
                component="img"
                image={Elastics}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} key="drawcords">
          <Card className="product-card">
            <CardActionArea>
              <CardMedia
                className="card-media"
                component="img"
                image={Drawcords}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} key="handtags">
          <Card className="product-card">
            <CardActionArea>
              <CardMedia
                className="card-media"
                component="img"
                image={Handtags}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} key="labels">
          <Card className="product-card">
            <CardActionArea>
              <CardMedia
                className="card-media"
                component="img"
                image={Labels}
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
  );
}

export default Product;
