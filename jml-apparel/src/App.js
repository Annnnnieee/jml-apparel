import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Elastics from './assets/lp-product01.jpg';
import Drawcords from './assets/lp-product02.jpg';
import Handtags from './assets/lp-product03.jpg';
import Labels from './assets/lp-product04.jpg';
import Digital01 from './assets/lp-digital01.jpg';
import Digital02 from './assets/lp-digital02.jpg';

import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      <div className="nav-section">navbar</div>
      <div className="header-section">
        <div className="carousel"> ---carousel--- </div>
        <div className="header-button">---header button--</div>
      </div>
      <div className="section-title">Products</div>
      <div className="product-section section">



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


        <div className="section-title">Digital</div>
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



        {/* <Card className="product-card">
          <CardActionArea>
            <CardMedia
              className="card-media"
              component="img"
              image={Drawcords}
            />
          </CardActionArea>
        </Card>
        <Card className="product-card">
          <CardActionArea>
            <CardMedia
              className="card-media"
              component="img"
              image={Handtags}
            />
          </CardActionArea>
        </Card>
        <Card className="product-card">
          <CardActionArea>
            <CardMedia
              className="card-media"
              component="img"
              image={Labels}
            />
          </CardActionArea>
        </Card> */}
      </div>
      <div className="digital-section section">
        <div className="digital-item-trims-lib">3D Trims Library</div>
        <div className="digital-item-rfid">RFID Products</div>
      </div>
      <div className="section-title">Quality and Sustainability</div>
      <div className="quality-section section">
        <div className="quality-item">first</div>
        <div className="quality-item">second</div>
        <div className="quality-item">third</div>
      </div>
      <div className="footer-section">footer</div>
    </div>

  );
}

export default App;
