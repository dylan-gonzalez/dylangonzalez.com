import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import {Sun, Moon} from 'react-feather';


const ThemeToggle = ({on, toggle, theme}) => {
    console.log("test")
    const props = {
        type: 'button',
        role: 'switch',
        onClick: (typeof toggle === 'function') ? toggle : () => {},
        'aria-checked': (on = on === true),
      };

    return (
        <Button {...props}>{ on ? <Sun /> : <Moon/>}</Button>
    )
}

export default ThemeToggle;