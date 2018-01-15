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

class App extends Component {
  constructor(props) {
    super(props)
    
   this.state ={
      user: UserService.getUser()
    }
  }
  
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <header className="app-header">
              <NavLink to="/"><i className="flaticon-presentation-board-with-graph"></i></NavLink>
              <NavLink to="/contacts"><i className="flaticon-group-of-businessmen"></i></NavLink>
              <NavLink to="/move"><i className="flaticon-handshake"></i></NavLink>
            </header>

            <div className="app-content">
              <Switch>
                <Route path="/contacts/edit/:id?" 
                  component={ContactEdit} />
                <Route path="/contacts/:id" component={ContactDetails} />
                <Route path="/contacts" component={ContactPage} />
                <Route path="/signup" component={SignUpPage} />  
                <Route path="/move" component={UserMovesPage} />  
                <Route path="/" component={HomePage} /> 
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
