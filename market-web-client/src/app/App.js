import React, {useState, useEffect, Component} from 'react'
import {HelloForm} from './modules/HelloForm'
import {LotPage} from '../pages/LotPage'
import {SettingPage} from '../pages/SettingPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {

    const [activity, setActivity] = useState({})

    const [searchResult, setSearchResult] = useState('You activity')

    return(

      <div className="container">
        <h1 className="text-center my-sm-3">Tele 2 alt Market</h1>
        <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/lot">Лоты</Link>
                  </li>
                  <li>
                    <Link to="/setting">Настройки</Link>
                  </li>
                  <li>
                    <Link to="/other">Другое</Link>
                  </li>
                </ul>

                <hr />

                <Switch>
                  <Route exact path="/lot">
                    <LotPage />
                  </Route>
                  <Route path="/setting">
                    <SettingPage />
                  </Route>
                </Switch>
              </div>
            </Router>
          
          <div className="row">
              <div className="col-7 offset-1">
                  <h2>{searchResult}</h2>
                  <HelloForm activity={activity} />
              </div>
          </div>
      </div>

    )

}

export default App;