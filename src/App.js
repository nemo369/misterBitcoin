import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import ContactDetails from './pages/ContactDetails/ContactDetails'
import ContactEdit from './pages/ContactEdit/ContactEdit'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import UserService from './services/UserService'
import UserMovesPage from './pages/UserMovesPage/UserMovesPage'


import './App.css'
import './assets/icon-font/flaticon.css'
import PrivateRoute from './PrivateRoute'

import { inject, observer } from 'mobx-react'

@inject('UserStore')
@observer
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {loading: true}    
  }

  render() {
    const { UserStore } = this.props
      return (
      <div className="app">
        <Router>
          <div>
         { UserStore.currUser !== {} ?
          <header className="welcome-header">
              <span>Welcome: {UserStore && UserStore.currUser.name}</span>
              <span>Balance: {UserStore && UserStore.currUser.coins}
                <i className="flaticon-dollar-sign-and-piles-of-coins">
                </i>
              </span>
            </header> 
            :
            <p>Please Fill Your Name To Use Mister-Bitcoin</p>
            }
           
            <header className="app-header">
              <NavLink to="/"><i className="flaticon-presentation-board-with-graph"></i></NavLink>
              <NavLink to="/contacts"><i className="flaticon-group-of-businessmen"></i></NavLink>
              <NavLink to="/move"><i className="flaticon-handshake"></i></NavLink>
            </header>

            <div className="app-content">
              <Switch>
                <PrivateRoute path="/contacts/edit/:id?"
                  component={ContactEdit} />
                <PrivateRoute path="/contacts/:id" component={ContactDetails} />
                <PrivateRoute path="/contacts" component={ContactPage} />
                <PrivateRoute path="/move" component={UserMovesPage} />
                <Route  path="/signup" component={SignUpPage} />
                <PrivateRoute path="/" component={HomePage} />
              </Switch>
            </div>
          </div>
        </Router>
        <footer className="app-footer">
          <a href="https://github.com/nemo369/misterBitcoin" target="_blank" >
              <i className="flaticon-chess-horse"></i>Check This App Code
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
