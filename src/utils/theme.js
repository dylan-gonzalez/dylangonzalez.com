import React, { Component } from 'react'

const DARK_MODE_KEY = 'dark_mode';
const DARK_THEME = { color: '#fff', background: '#333' };
const LIGHT_THEME = { color: '#333', background: '#fff' };

const YELLOW_BLUE_THEME = {color: "rgb(225, 237, 85)", background: "rgb(47, 44, 230)"}

// const THEMES = ({
//     DARK_THEME: { color: '#fff', background: '#333' },
//     LIGHT_THEME: { color: '#333', background: '#fff' },
//     YELLOW_BLUE_THEME: {color: "rgb(225, 237, 85)", background: "rgb(47, 44, 230)"}
// })
const THEMES = [
    { color: '#fff', background: '#333' },
    { color: '#333', background: '#fff' },
    {color: "rgb(225, 237, 85)", background: "rgb(47, 44, 230)"}
]

console.log(THEMES[1])

const ThemeMode = {
    getSetting: function () {
        console.log("getSetting")
        try {
            console.log("tryingthis")
            return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY));
          } catch (e) { 
              console.log("error")
              return 0; 
            }
    },

    updateSetting: function (value) {
        try {
            window.localStorage.setItem(DARK_MODE_KEY, value);
          } catch (e) {}
    }
}

export { THEMES, ThemeMode };

export default React.createContext();
