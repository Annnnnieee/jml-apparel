import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Award01 from '../assets/lp-award01.jpg';
import Award02 from '../assets/lp-award02.jpg';
import Award03 from '../assets/lp-award03.jpg';
import Award04 from '../assets/lp-award04.jpg';
import Grid from '@material-ui/core/Grid';


function Awards() {
  return (
    <div>
        <Grid container className="award-section" spacing={1} justify="center">
          <Grid item xs={12} sm={6} md={2} >
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Award01}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2} >
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Award02}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Card className="product-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Award03}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2} >
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Award04}
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

      </div>
  );
}

export default Awards;
