import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Quality01 from '../assets/lp-quality01.jpg';
import Quality02 from '../assets/lp-quality02.jpg';
import Quality03 from '../assets/lp-quality03.jpg';
import Grid from '@material-ui/core/Grid';


function Quality() {
  return (
    <div >
        <div className="section-title">Quality and Sustainability</div>
        <Grid container className="quality-section" spacing={1} justify="center">
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Quality01}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Quality02}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Quality03}
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

      </div>
  );
}

export default Quality;
