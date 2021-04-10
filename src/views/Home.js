import React, { Component } from 'react'

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../components/elements/Navbar';
import Cursor from '../components//elements/Cursor';
import Welcome from '../components/sections/Welcome';

import ThemeContext from '../utils/theme.js';
import ThemeToggle from '../utils/themeToggle.js';

import { useContext } from 'react';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        transition: "all 0.5s",
        backgroundColor: theme => theme.background,
    },
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        padding: "20px 100px 0 100px",
        transition: "all 1s",
        '&:nth-child(even)': {
            flexDirection: "row-reverse"
        }
        // backgroundColor: theme => theme.background,
    },
    headingContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme => theme.color,
    },
    image: {
        width: "30%",
        border: "2px inset black",
        // height: "70%"
    },

})

const Home = (props) => {
    const theme = useContext(ThemeContext);
    const classes = useStyles(theme);

    return (
        <div className = {classes.container}>
            {/* <Navbar theme = {theme}/> */}
            
            {/* <Welcome theme ={theme} on = {props.dark} toggle = {props.toggleDarkMode} /> */}
            <div className = {classes.root}>

                <img className = {classes.image} src = "/profile_pic.jpeg"></img>

                <div className = {classes.headingContainer}>
                    <Typography variant = "h1">Dylan Gonzalez</Typography>
                    <Typography variant = "h5">Aspiring engineer and web developer</Typography>
                    <br/>
                    <ThemeToggle theme = {theme} on = {props.dark} toggle = {props.toggleDarkMode} />

                </div>
            </div>
            <div className = {classes.root}>

                <img className = {classes.image} src = "/profile_pic.jpeg"></img>

                <div className = {classes.headingContainer}>
                    <Typography variant = "h1">Dylan Gonzalez</Typography>
                    <Typography variant = "h5">Aspiring engineer and web developer</Typography>
                    <br/>
                    <ThemeToggle theme = {theme} on = {props.dark} toggle = {props.toggleDarkMode} />

                </div>
            </div>

        </div>

    )
}

export default Home;