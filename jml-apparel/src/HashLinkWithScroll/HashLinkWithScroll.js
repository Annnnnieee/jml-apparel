import React from 'react';
import Typography from '@material-ui/core/Typography';
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   '& a:visited': {
        textDecoration: "none",
   }
}));

const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

export function HashLinkWithScroll(props){
    // const classes = useStyles();

return (
    <HashLink {...props} scroll={scrollWidthOffset}>{props.children}</HashLink>
)
}