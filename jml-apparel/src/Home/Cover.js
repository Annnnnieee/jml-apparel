import React from 'react';
import { Hidden } from '@material-ui/core';

import Carousel from 'react-material-ui-carousel'

import feature01 from '../assets/lp-feature01.jpg';
import feature01Alt from '../assets/lp-alt-feature01.jpg';
import feature02 from '../assets/lp-feature02.jpg';
import feature02Alt from '../assets/lp-alt-feature02.jpg';
import feature03 from '../assets/lp-feature03.jpg';
import feature03Alt from '../assets/lp-alt-feature03.jpg';

function Cover() {
    return (
        <div>
            <Hidden smDown>
                <Carousel>
                    <img src={feature01} alt="featured cover" />
                    <img src={feature02} alt="featured cover" />
                    <img src={feature03} alt="featured cover" />
                </Carousel>
            </Hidden>

            <Hidden mdUp>
                <Carousel>
                    <img src={feature01Alt} alt="featured cover" />
                    <img src={feature02Alt} alt="featured cover" />
                    <img src={feature03Alt} alt="featured cover" />
                </Carousel>
            </Hidden>
        </div>
    )
}

export default Cover;