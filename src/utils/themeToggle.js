import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import {Sun, Moon, Circle} from 'react-feather';


const ThemeToggle = ({on, toggle, theme}) => {
    const props = {
        type: 'button',
        role: 'switch',
        onClick: (typeof toggle === 'function') ? toggle : () => {},
        'aria-checked': (on = on === true),
      };

    return (
        // <Button {...props}>{ on ? <Sun /> : <Moon/>}</Button>
        <Button {...props}>Change theme</Button>
    )
}

export default ThemeToggle;