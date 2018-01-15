import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService'
import BitcoinService from '../../services/BitcoinService';
import './HomePage.css'
import '../../assets/icon-font/flaticon.css'


class HomePage extends Component {

  state = {
    user: UserService.getUser(),
    currRate: ''
  }


  componentDidMount() {
    if (!this.state.user) { this.props.history.push('/signup') }
    else {

      var coins = this.state.user.coins || '0'
      BitcoinService.getRate(coins)
        .then(rate => {
          this.setState({ currRate: rate })
        })
    }
  }

  render() {
    const { user, currRate } = this.state
    return (
      <div className="home-page-list">
        {this.state.user && <h2>Welcome To Mister-Bitcoin {user.name}</h2>}
        <ul>
          <li>   {this.state.user && <span className="homepage-title">coins:{user.coins}
            <i className="flaticon-different-currencie"></i></span>}</li>
          <li>  {this.state.user && <span className="homepage-title">Your Bitcoin Rate Is:{currRate}  Ƀ</span>}</li>
        </ul>
        <Link to={'/signup'}>
          <button>{this.state.user ? 'Sign Out' : 'Sign Up'}</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
