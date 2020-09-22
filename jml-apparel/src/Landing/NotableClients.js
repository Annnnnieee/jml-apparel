import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

// TODO apparently, there are two more brands?
import Brands01 from '../assets/lp-brands01.jpg';
import Brands02 from '../assets/lp-brands02.jpg';
import Brands03 from '../assets/lp-brands03.jpg';
import Brands04 from '../assets/lp-brands04.jpg';
import Brands05 from '../assets/lp-brands05.jpg';
import Brands06 from '../assets/lp-brands06.jpg';
import Brands07 from '../assets/lp-brands07.jpg';
import Brands08 from '../assets/lp-brands08.jpg';




import Grid from '@material-ui/core/Grid';


function NotableClients() {
  return (
    <div className="App">

<div>notable clients</div>
        <Grid container spacing={1} justify="center">
          <Grid item xs={6} sm={4} md={1} >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Brands01}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={1}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Brands02}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={1}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Brands03}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={1}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Brands04}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={1}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Brands05}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={1}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Brands06}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={1}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Brands07}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={1}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Brands08}
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

      </div>
  );
}

export default NotableClients;
