import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService'
import BitcoinService from '../../services/BitcoinService';
import './HomePage.css'
import '../../assets/icon-font/flaticon.css'
import { inject, observer } from 'mobx-react'

@inject('UserStore')
class HomePage extends Component {

  state = {
    currRate: ''
  }


  componentWillMount() {
    var coins = this.props.UserStore.currUser.coins || '0'
    BitcoinService.getRate(coins)
      .then(rate => {
        this.setState({ currRate: rate })
      })
  }

  render() {
    const { currRate } = this.state
    const { UserStore } = this.props
    return (
      <div className="home-page-list">
        {<h2>Welcome To Mister-Bitcoin {UserStore.currUser.name}</h2>}
        <ul>
          <li>   {<span className="homepage-title">coins:{UserStore.currUser.coins}
            <i className="flaticon-different-currencie"></i></span>}</li>
          <li>  {<span className="homepage-title">Your Bitcoin Rate Is:{currRate}  Ƀ</span>}</li>
        </ul>
        <Link to={'/signup'}>
          <button>Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
