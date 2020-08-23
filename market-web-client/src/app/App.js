import React, {useState, Component} from 'react'
import {HelloForm} from './modules/HelloForm'
import {LotPage} from '../pages/LotPage'
import {InDeveloping} from '../pages/InDeveloping'
import {PremiumPage} from '../pages/PremiumPage'
import {SettingPage} from '../pages/SettingPage'
import {PackagePage} from '../pages/PackagePage'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {

    const [activity, setActivity] = useState({})

    const [searchResult, setSearchResult] = useState('You activity')

    const style = {
      float: 'right',
      fontSize: 14,
      padding: 10
    };

    const tabSyele = {
      fontSize: 14,
      padding: 10
    }

    return(
      <div className="container">
        <h1 className="text-center my-sm-3">Alt Market TELE2</h1>
          <Router className="section-menu-line">
            <div className="price-filter">
              <ul class="filter-options js-tab-selector">
                <li data-target=".js-numtab2" style={tabSyele}>
                  <Link to="/mobile">Мобильная связь</Link>
                </li>
                <li data-target=".js-numtab2" style={tabSyele}>
                  <Link to="/lots">Лоты</Link>
                </li>
                <li data-target=".js-numtab2" style={tabSyele}>
                  <Link to="/package">Мои пакеты</Link>
                </li>
                <li data-target=".js-numtab2" style={tabSyele}>
                  <Link to="/analytics">Аналитика</Link>
                </li>
                <li data-target=".js-numtab2" style={tabSyele}>
                  <Link to="/history">История сделок</Link>
                </li>
                <li data-target=".js-numtab2" style={tabSyele}>
                  <Link to="/premium">Премиум</Link>
                </li>
                <li data-target=".js-numtab2" style={tabSyele}>
                  <Link to="/setting">Настройки</Link>
                </li>
                <li data-target=".js-numtab2" style={tabSyele}>
                  <Link to="/other">О Market TELE2</Link>
                </li>
                <li data-target=".js-numtab2" style={tabSyele}>
                <Link to="/card">Корзина</Link>
                </li>
                <li data-target=".js-numtab2" style={tabSyele}>
                <Link to="/authorization">Войти в кабинет</Link>
                </li>
              </ul>

            </div>
            <hr />

            <Switch>
              <Route exact path="/mobile">
                <InDeveloping />
              </Route>
              <Route exact path="/lots">
                <LotPage />
              </Route>
              <Route path="/package">
                <PackagePage />
              </Route>
              <Route path="/analytics">
                <InDeveloping />
              </Route>
              <Route path="/history">
                <InDeveloping />
              </Route>
              <Route path="/premium">
                <PremiumPage />
              </Route>
              <Route path="/setting">
                <SettingPage />
              </Route>
              <Route path="/other">
                <InDeveloping />
              </Route>

              <Route path="/authorization">
                <InDeveloping />
              </Route>
              <Route path="/card">
                <InDeveloping />
              </Route>
            </Switch>
        </Router>
      </div>
    )
}

export default App;