import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService'
import BitcoinService from '../../services/BitcoinService';
import MoneyRates from '../../components/MoneyRates/MoneyRates'
import './HomePage.css'
import '../../assets/icon-font/flaticon.css'
import { inject, observer } from 'mobx-react'

@inject('UserStore')
class HomePage extends Component {

  state = {
    bitcoin: ''
  }


  componentWillMount() {
    if (this.props.UserStore.currUser === null){this.props.history.push('/signup')}
    else {

    var coins = this.props.UserStore.currUser.coins || '0'
    BitcoinService.getRate(coins)
      .then(bitcoin => {
        this.setState({ bitcoin })
      })
    }
  }

  render() {
    const { bitcoin } = this.state
    const { UserStore } = this.props
    if (UserStore.currUser === null){this.props.history.push('/signup')}    
    return (
      <div className="home-page-list">
        {<h2>Welcome {UserStore.currUser.name}</h2>}
        <MoneyRates rate={{dolar:UserStore.currUser.coins, bitcoin}}/>

        <Link to={'/signup'}>
          <button className="bottom-btn">Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
