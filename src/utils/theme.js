import React, { Component } from 'react'

const DARK_MODE_KEY = 'dark_mode';
const DARK_THEME = { color: '#fff', background: '#333' };
const LIGHT_THEME = { color: '#333', background: '#fff' };
const YELLOW_BLUE_THEME = {color: "rgb(225, 237, 85)", background: "rgb(47, 44, 230)"}

const ThemeMode = {
    getSetting: function () {
        try {
            return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true;
          } catch (e) { return false; }
    },

    updateSetting: function (value) {
        try {
            window.localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value === true));
          } catch (e) {}
    }
}

export { DARK_THEME, LIGHT_THEME, ThemeMode };

export default React.createContext();
