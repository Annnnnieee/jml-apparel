import React from 'react';
import Carousel from 'react-material-ui-carousel'

import feature01 from '../assets/lp-feature01.jpg';
import feature01Alt from '../assets/lp-alt-feature01.jpg';
import feature02 from '../assets/lp-feature02.jpg';
import feature02Alt from '../assets/lp-alt-feature02.jpg';
import feature03 from '../assets/lp-feature03.jpg';
import feature03Alt from '../assets/lp-alt-feature03.jpg';
 
function Cover()
{
    var items = [
        {
            src: feature01,
            srcAlt: feature01Alt
        },
        {
            src: feature02,
            srcAlt: feature02Alt
        },
        {
            src: feature03,
            srcAlt: feature03Alt
        }
    ]
 
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    return (
        <div>
            <img src={props.item.src} alt="cover"/>
        </div>
    )
}

export default Cover;