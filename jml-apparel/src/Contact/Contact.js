
import React from 'react';
import ReactDOM from 'react-dom'
import contactCover from '../assets/contact-title.jpg'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




import contactCoverAlt from '../assets/contact-alt-title.jpg';
import contactVancouver from '../assets/contact-vancouver01.jpg';
import contactShanghai from '../assets/contact-shanghai01.jpg';

const vancouverLocation = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248679.1221890472!2d-123.24164222992822!3d49.17479922966847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x570839eedffe39d1!2sJML%20Trading%20Company%20Ltd.!5e0!3m2!1sen!2sca!4v1602622112218!5m2!1sen!2sca"
const shanghaiLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323045.2304786843!2d121.53034776301561!3d31.331364755518106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b275fa5df677db%3A0xf464be57a952f85e!2z5LiK5rW35o235aqa5bCU5pyN6aWw5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2sca!4v1602621758376!5m2!1sen!2sca";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  introContainer: {
    maxWidth: "90%",
    margin: "auto",
    marginBottom: "2%",
  },
  expoHeader: {
    backgroundColor: "#484848",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    color: "white",
  },
  expoItem: {
    // display: "flex",
    // flexDirection: "row",
    background: "rgba(194, 194, 194, 0.2)",
    padding: "3% 4.5% 3% 4.5%", // TODO fix this. 55 2 5
    marginBottom: "10px",
    [theme.breakpoints.down('xs')]: {
      padding: "4% 4.5% 4% 4.5%",
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column-reverse",
    },
  },
  expoDescription: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: "5%"
    },
  },
  filler: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: "40px",
    },
  },
  itemTitle: {
    marginBottom: "7px",
    marginTop: "15px",
  },
  imgContainer: {
    display: "block",
    // maxWidth: "100%",
    //minWidth: "100%",
    height: "auto",
    overflow: "hidden",
    // [theme.breakpoints.up('sm')]: {
    //   paddingRight: "3%"
    // },
    [theme.breakpoints.down('xs')]: {
      display: "block",
      verticalAlign: "bottom",
      lineHeight: 0,
      overflow: "hidden",
      maxWidth: "100%",
      height: "auto",
      marginBottom: "0px auto 15px",
    },
  },
  // img: {
  //   [theme.breakpoints.up('sm')]: {
  //     paddingRight: "3%"
  //   },
  // },
  grid: {
    // marginTop: "2%",
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column-reverse",
    },
  },
  mapContainerSize: {
   height: "100%",
  },
}));



function Iframe(props) {
  return (
      <iframe src={props.src} width="100%" height="100%"/>
      // <iframe src={props.src} height={props.height} width={props.width} />
  )
};



function Contact() {
  const classes = useStyles();


  React.useEffect(() => {
    ReactDOM.render(
      <Iframe src={vancouverLocation} height="400" width="400" />, // 100% for both, except for xs when it's 500px height.
      document.getElementById('vancouverLocation')
    );
    ReactDOM.render(
      <Iframe src={shanghaiLocation} height="200" width="200" />,
      document.getElementById('shanghaiLocation')
    );
  })


  return (
    <div>

      <div className={classes.introContainer}>
        <Hidden smDown>
          <img src={contactCover} alt="contact cover" />
        </Hidden>
        <Hidden mdUp>
          <img src={contactCoverAlt} alt="contact cover" />
        </Hidden>
      </div>

      <div>
        <Grid container className={classes.expoItem} >
          <Grid item xs={12} sm={4} >
            <div id="vancouverLocation" className={classes.mapContainerSize}></div>
          </Grid>
          <Grid item xs={12} sm={8}  className={classes.expoDescription}>
            <div className={classes.filler}>
              <Typography variant="h2">NORTH AMERICA</Typography>
              <Typography variant="body2">
                <p>
                  <div>JML Trading Company Ltd.</div>
                  <div>Unit 1215 - 11980 Hammersmith Way, Richmond, BC V7A 0A4 Canada</div>
                </p>
                <p>
                  <div>Tel (Canada):  	+1 (604) 273.9588</div>
                  <div>Tel (USA):			+1 (508) 938.6178</div>
                  <div>Fax: 					+1 (604) 273.9568</div>
                  <div>info@jmlapparel.com</div>
                </p>
              </Typography>
            </div>
          </Grid>
        </Grid>
 
        <Grid container xs={12} className={classes.expoItem} >
          <Grid item xs={12} sm={4} >
            <div id="shanghaiLocation" className={classes.mapContainerSize}></div>
          </Grid>
          <Grid item xs={12} sm={8} className={classes.expoDescription}>
            <div>
              <Typography variant="h2">CHINA</Typography>
              <Typography variant="body2">
                <p>
                  <div>上海捷媚尔服饰有限公司</div>
                  <div>中国上海浦东金海路1000号26幢3楼B单元</div>
                </p>
                <p>
                  <div>Shanghai JML Apparel Co. Ltd.</div>
                  <div>Unit B, 3/F, Building 26, No. 1000, Jinhai Road, Pudong, Shanghai, China 201206</div>
                </p>
                <p>
                  <div>Tel:		0086.21.55288395</div>
                  <div>Fax:		0086.21.61927390</div>
                  <div>info@jmlapparel.com</div>
                </p>
              </Typography>
            </div>
          </Grid>
        </Grid> 

      </div>
    </div>
  );
}

export default Contact;
