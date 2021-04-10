import { makeStyles, Typography } from '@material-ui/core';
import React, { Component } from 'react'
import ThemeToggle from '../../utils/themeToggle';

import {SectionProps} from '../../utils/SectionProps';

const useStyles = makeStyles({
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

const Welcome = (props) => {

    const classes = useStyles(props.theme);

    return (
        <div className = {SectionProps.root}>
            <img className = {classes.image} src = "/profile_pic.jpeg"></img>

            <div className = {classes.headingContainer}>
                <Typography variant = "h1">Dylan Gonzalez</Typography>
                <Typography variant = "h5">Aspiring engineer and web developer</Typography>
                <br/>
                <ThemeToggle theme = {props.theme} on = {props.on} toggle = {props.toggle} />

            </div>
        </div>
    )

}

export default Welcome;