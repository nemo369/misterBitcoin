import React, { Component }  from 'react';
import { Route, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('UserStore')
class PrivateRoute  extends Component {

  render () {
    const { component: Component, ...rest } = this.props
    const  {UserStore} = this.props
    return (
      <Route {...rest} render={props => (
        UserStore.currUser !== {} ? 
        (<Component {...props}/>) : 
        (
          <Redirect to={{
            pathname: '/signup',
          }}/>
        )
      )}/>
    )
  }
}

export default PrivateRoute;