
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const ContactUsButton = withStyles((theme) => ({
    root: {
        color: "white",
        background: "#009C77",
        borderRadius: "52px 52px 52px 52px",
        width: "24rem",
        [theme.breakpoints.up('lg')]: {
            width: "40rem",
          },
          [theme.breakpoints.only('xs')]: {
            width: "20rem",
          },
        textTransform: "none",
        fontWeight: "bold",
        margin: "10px auto 10px",
        '&:hover': {
            backgroundColor: "#008062",
          },
      
    },
}))(Button);

export default ContactUsButton;