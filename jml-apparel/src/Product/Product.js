import React from 'react';
import productTitle from '../assets/product-title.jpg'
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Elastics from '../assets/product-elastics01.jpg';
import Drawcords from '../assets/product-drawcords01.jpg';
import Hangtags from '../assets/product-hangtags01.jpg';
import Labels from '../assets/product-labels01.jpg';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


function Product() {
    return (
        <Container>
            <img src={productTitle} alt="product title" />
            <div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget lectus accumsan, tincidunt libero non, imperdiet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tempor, felis eu pharetra egestas, arcu dui elementum metus, et ullamcorper erat turpis eget lectus. Nulla facilisi. Vestibulum augue lorem, pulvinar ut dapibus vitae, scelerisque sed risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis sagittis fermentum. Aenean quis ante sed diam tincidunt efficitur id et neque. </p>
                <p>Pellentesque at odio erat. Sed ac blandit odio, eget pharetra arcu.</p>

                <p>Cras tempus odio velit, sed ullamcorper massa consectetur nec. Aenean maximus dui vel vulputate malesuada. Morbi volutpat laoreet velit. Fusce vel tellus vitae purus dignissim facilisis. Ut ac quam vel dui venenatis semper eget vel turpis. Nullam euismod, magna a aliquet accumsan, urna elit ultrices nibh, quis facilisis est ex sit amet sem. Donec eget velit fermentum, elementum velit eget, tempor sapien. Curabitur aliquam posuere auctor. Sed dapibus vehicula lectus, eu scelerisque lorem. Suspendisse dictum elit ac ultrices feugiat. Integer aliquam tristique tellus a feugiat. Donec non diam a dolor posuere viverra. Nulla vel venenatis ipsum. Suspendisse fringilla erat in porta pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus laoreet ante, eu accumsan urna scelerisque at. </p>

                <p>Ut dictum pellentesque felis, sed malesuada lacus laoreet id. Proin quis accumsan tortor. Quisque eleifend diam sit amet nisi imperdiet euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet pellentesque velit eu pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc gravida, risus vel interdum pellentesque, massa tellus maximus elit, a tempor mauris quam at velit. Donec convallis eros et accumsan porta. Duis id velit et metus dapibus tempor eget sit amet velit. Nullam pharetra congue eros, eu luctus elit vehicula quis. Etiam in ullamcorper purus, convallis suscipit sapien. Nam elementum velit in ipsum malesuada semper. Aliquam id mi vitae sem porttitor malesuada sed vel orci.</p>

                <p>Sed viverra quam eget ante semper faucibus. Aenean tempor sollicitudin vulputate. Suspendisse mollis sem eget est placerat, eu faucibus velit convallis. Vestibulum aliquet aliquam arcu, sit amet sodales urna elementum eu. Aenean ac lorem lacinia, vulputate mi quis, interdum metus. Cras accumsan, sem ut venenatis dictum, metus tellus bibendum libero, non consequat eros arcu vitae metus. Nunc vestibulum risus in libero faucibus maximus. Ut ullamcorper leo lacus, tincidunt ornare turpis egestas ut. Morbi sed nunc quis metus suscipit malesuada quis quis massa. Nulla feugiat magna in lectus porttitor, vitae blandit dolor mollis.</p>
            </div>

            <div>
                <Grid container spacing={1} justify="center">
                    <Grid item xs={12} sm={6} >
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={Elastics}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={Drawcords}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className="product-card">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={Hangtags}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={Labels}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default Product;
