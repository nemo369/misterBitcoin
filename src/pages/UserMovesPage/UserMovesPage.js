import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoveService from '../../services/MoveService';
import './UserMovesPage.css'
import { inject, observer } from 'mobx-react'

@inject('UserStore')
@observer
class UserMovesPage extends Component {

    render(){
        const moves = this.props.UserStore.currUser.moves
        return (
            <section>
                <h3>Your Moves</h3>
                <hr />
                <ul>
                   {moves.map(move =>  
                       <li className="moves-list" key={move.at}>
                       To: {move.to} <br />
                       Amount: {move.amount} $<br />
                       at: {Math.floor((Date.now() - move.at)/1000/60)} min ago<br />
                       <hr />
                       </li>
                       )}
                       
                </ul>
            </section>
        )
    }
}

export default UserMovesPage