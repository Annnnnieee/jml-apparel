import React from 'react';
import { Hidden } from '@material-ui/core';

import Carousel from 'react-material-ui-carousel'

import feature01 from '../assets/lp-feature01.jpg';
import feature01Alt from '../assets/lp-alt-feature01.jpg';
import feature02 from '../assets/lp-feature02.jpg';
import feature02Alt from '../assets/lp-alt-feature02.jpg';
import feature03 from '../assets/lp-feature03.jpg';
import feature03Alt from '../assets/lp-alt-feature03.jpg';
import CoverCard from '../CoverCard/CoverCard';

function Cover() {
    const featureTitle = (
        <div>
            <div>3D Trims Library </div>
            <div> Now Available </div>
        </div>
    );

    return (
        <div>
            <Carousel>
                <CoverCard cover={feature01} coverAlt={feature01Alt} title={featureTitle} />
                <CoverCard cover={feature02} coverAlt={feature02Alt} title="Quality &amp; Sustainability" />
                <CoverCard cover={feature03} coverAlt={feature03Alt} title="Product" />
            </Carousel>
        </div>
    )
}

export default Cover;