import React, {useState, useEffect, Component} from 'react'
import {HelloForm} from './modules/HelloForm'
import {LotPage} from '../pages/LotPage'
import {InDeveloping} from '../pages/InDeveloping'
import {PremiumPage} from '../pages/PremiumPage'
import {SettingPage} from '../pages/SettingPage'
import {PackagePage} from '../pages/PackagePage'

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
      float: 'right'
    };

    return(

      <div className="container">
        <h1 className="text-center my-sm-3">Alt Market TELE2</h1>
        <Router>
              <div>
                    <Link to="/mobile">Мобильная связь</Link>
                    <Link to="/lot">Мои пакеты</Link>
                    <Link to="/package">Мои пакеты</Link>
                    <Link to="/analytics">Аналитика</Link>
                    <Link to="/history">История сделок</Link>
                    <Link to="/premium">Премиум</Link>
                    <Link to="/setting">Настройки</Link>
                    <Link to="/other">О Market TELE2</Link>

                    <Link style={style} to="/card">Корзина</Link>
                    <Link style={style} to="/authorization">Войти в кабинет</Link>
                <hr />

                <Switch>
                  <Route exact path="/mobile">
                    <InDeveloping />
                  </Route>
                  <Route exact path="/lot">
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
              </div>
            </Router>
      </div>

    )

}

export default App;