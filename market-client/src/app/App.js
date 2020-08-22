import React, {useState, useEffect, Component} from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import AppNavBar from "../components/AppNavBar";
import AppNavDrawer from "../components/AppNavDrawer";
import CustomerListPage from "../pages/CustomerListPage";
import { Route, Redirect } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import './App.css';

import {HelloForm} from './modules/HelloForm'

const isSmallsWindowScreen = () => {
  return window.innerWidth <= 600;
};
const drawerWidth = 250;

const useStyles = (navDrawerOpen, isSmallScreen) => {
  return {
    appBar: {
      position: "fixed",
      top: 0,
      overflow: "hidden",
      maxHeight: 58,
      minHeight: 0,
      width:
        navDrawerOpen && !isSmallScreen
          ? `calc(100% - ${drawerWidth}px)`
          : `100%`,
      marginLeft: navDrawerOpen && isSmallScreen ? drawerWidth : 0,
    },
    drawer: {
      width: isSmallScreen ? drawerWidth : 0,
      // flexShrink: 0,
      overflow: "auto",
    },
    content: {
      // margin: '10px 20px 20px 15px',
      flexGrow: 1,
      paddingLeft: navDrawerOpen && !isSmallScreen ? drawerWidth : 0,
    },
  };
};


function App() {

  const [setActivity] = useState({})

  const theme = createMuiTheme({
    palette: {
    },
    appBar: {
      height: 57,
      color: blue['600']
    },
    drawer: {
      width: 230,
      color: grey['900']
    },
    Button: {
      primaryColor: blue['600'],
    },
  })

  const appStlyes = useStyles(!isSmallsWindowScreen, !isSmallsWindowScreen);

  return (

    <MuiThemeProvider theme={theme}>
      <div>
        <AppNavBar
          styles={appStlyes}
          handleDrawerToggle={this.handleDrawerToggle.bind(this)}
        ></AppNavBar>
        <div style={appStlyes.content}>
          <Route exact path={`/lots`} component={CustomerListPage} />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
