import React, { Component, useEffect, useContext } from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { Button, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import ThemeContext from '../../../utils/theme.js';

import "./Navbar.css";

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "blue",
        position: "sticky",
        // background:"transparent",
        // zIndex: -100
    },
    list: {
        display: "flex",
        flexDirection: "row",
    },
    text: {
        fontSize: "30px",
        textTransform: "none",
        fontSize: "25px",
        // fontWeight: "bold",
        color: theme => theme.color,
        textDecoration: "none !important"
    },
    button: {
        display: "block",
        // width: "50px",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 100,
        paddingTop: "10px"
    }
})

const Navbar = (props) => {
    const theme = useContext(ThemeContext);
    const classes = useStyles(theme);

    const hoverEnter = (e) => {
        e.target.classList.add("hover")
        e.target.addEventListener("animationend", animationEnd)
        // setTimeout(e.target.classList.remove("hover"),3000)
        // e.target.bind("animationEnd").remove("hover")
    }

    const animationEnd = (e) => {
        e.target.classList.remove("hover")
    }

    const hoverLeave = (e) => {
        e.target.classList.remove("hover")
    }

    const invertColours = () => {
        document.getElementById("root").style.filter = "invert(20%)"
    }
    
    return (
        <>
        {/* <div className = {classes.button}>{props.children}</div> */}

        <div className = {classes.root}>
            <ListItem>
                <Typography variant = "h4" className = {classes.text}>
                    {["H","o","m","e"].map(element => {
                        return (
                            <Link href = "/" key = {element} onMouseOver = {hoverEnter} className = {classes.text}>{element}</Link>
                        )
                    })}
                </Typography>
            </ListItem>


            {/* <Button><span onMouseOver = {hoverEnter} onClick = {invertColours} style = {{textAlign: "center"}} className = {classes.text}>Invert Colours</span></Button> */}

            <List className = {classes.list}>
                {["About", "Projects", "Resources", "Contact"].map((value, index) => {
                    return (
                        <ListItem key = {value}>
                            <Typography className = {classes.text} variant = "h4">
                                {value.split("").map((element, pos) => {
                                    return (
                                        <Link href = {`${value}`} key = {element + `${value}.${pos}`} className = {classes.text} onMouseOver = {hoverEnter}>{element}</Link>
                                    )
                                })}
                            </Typography>
                        </ListItem>
                    )
                })}
            </List>
        </div>
        </>
    )

}

export default Navbar;