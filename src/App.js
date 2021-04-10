// import logo from './logo.svg';
import './App.css';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import {About} from './views/About';
import {Projects} from './views/Projects';
import {Contact} from './views/Contact';
import {Resources} from './views/Resources';

import Cursor from './components/elements/Cursor';
import ThemeToggle from './utils/themeToggle.js';
import ThemeContext, { THEMES, ThemeMode } from './utils/theme';
import React, { useState } from 'react';
import { useCallback } from 'react';
import Navbar from './components/elements/Navbar';
import { makeStyles } from '@material-ui/core';


// import Lightbulb from './components/Lightbulb';

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    transition: "all 0.5s",
    backgroundColor: theme => theme.background,
  },
})

function App() {
  const [ dark, setDark ] = useState(ThemeMode.getSetting);
  console.log(dark)
  const theme = THEMES[dark];
  console.log("Theme: ", theme)
  const classes = useStyles(theme);

  const toggleDarkMode = useCallback(function () {
    setDark(prevState => {
      const newState = prevState + 1;
      console.log(newState)
      ThemeMode.updateSetting(THEMES[newState]);
      return THEMES[newState];
    });
  }, []);

  console.log(dark)
  
  return (
  <React.Fragment>
    <ThemeContext.Provider value = {theme}>
      <div className = {classes.container}>
        <Navbar/>
        <Router>
          <Route exact path = "/" render = {() => (
            <Home dark = {dark} toggleDarkMode = {toggleDarkMode} />
            )} />
          <Route path = "/about" component = {About} />
          <Route path = "/projects" component = {Projects} />
          <Route path = "/contact" component = {Contact} />
          <Route path = "/resources" component = {Resources} />
          {/* <Cursor /> */}
        </Router>
      </div>

    </ThemeContext.Provider>
  </React.Fragment>

  );
}

export default App;
