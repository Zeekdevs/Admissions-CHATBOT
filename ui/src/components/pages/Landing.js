import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import Chatbot from "../chatbot/Chatbot";
import { styled } from "@mui/material/styles";
import {Container, Box, Grid, Paper} from "@mui/material";
import Logo from "../logo/Logo";
import vectorart from "../../assets/vector2.svg"
import vectorart3 from "../../assets/circuit-board.svg"
import {StylesProvider} from "@mui/styles";
import { Button, Drawer} from 'antd';
import "./Override.css";
import Courses from '../Table/Courses'


const landing = makeStyles({
    container:{
        position: 'fixed',
        backgroundImage: 'linear-gradient( 110.3deg,  rgba(73,93,109,1) 4.3%, rgba(49,55,82,1) 96.7% )',
        height: '100vh'



    },
    logo:{
        display: 'block',
        top: '1px',
        width: '100%',

    },
    first:{
        display: 'block',
        width: '100%',
        zIndex: '1'

    },
    second:{
        position: 'relative',
        margin: '0 auto',
        display: 'block',
        width: '100%',
        textAlign: 'center',
        zIndex: '1'
    },
    h2Text:{
        textAlign: 'center',
        color: '#fff',
        fontFamily: '\'Roboto Mono\', monospace',
        fontWeight: '200'
    },
    pText:{
        color: 'white',
        fontFamily: '\'Roboto Mono\', monospace',
    },









})

const Landing = (props) => {
    const hideBar = e => {
        document.getElementById("side-bar").style.display = 'none';


    }
    const showBar = e => {
      let show =  document.getElementById("btnShow");
      show.onclick = function (){
        let showing =  document.getElementById("side-bar");
          showing.style.display = 'block';
          showing.style.transition = '0.3s ease-in';
          showing.style.transform = '0.3s ease-in';
          setTimeout(function (){
              showing.style.display = 'none';
              showing.style.transition = '0.3s ease-out';
          }, 3000);
      };

    }

    const styles = landing();




    return (
        <StylesProvider injectFirst >
            <Container sx={{paddingRight:'0', paddingLeft:'0'}} maxWidth={false} className={styles.container}>
                <Box sx={{ flexGrow: 1, zIndex:'1', }}>
                    <Grid container spacing={5}>
                        <Grid className={styles.logo} item xs ={12}>
                            <Logo/>
                        </Grid>

                        <Grid className={styles.first}  item xs={12} >
                            <h2 className={styles.h2Text}> kaylabot </h2>

                        </Grid>
                        <Grid className={styles.second} item xs={12} >
                            <p className={styles.pText}> a simple demo chatbot for personalized advice </p>
                            <p className={styles.pText}> on select courses offered</p>
                        </Grid>
                    </Grid>
                </Box>




                <div className="courses-btn">
                    <button id='btnShow' onClick={showBar}> Available Courses</button>
                </div>


                <div className='art-box'>
                    <img src={vectorart} className='vector' alt="vector art image"/>
                </div>

                <div id="side-bar">
                    <Courses/>
                </div>


                <Chatbot key={props.key}/>
            </Container>
        </StylesProvider>
    )
};

export default Landing;