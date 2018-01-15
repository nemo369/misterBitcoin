import React, { Component } from 'react';
import UserService, { getEmptyUser, getUser, saveUser, } from '../../services/UserService'
import './SignUpPage.css'

class SignUpPage extends Component {

    componentDidMount(){
        UserService.saveUser(null)
    }

    state = {
        newUser: UserService.getEmptyUser()
    }
    signUpUser = (ev) => {
        ev.preventDefault()
        UserService.saveUser(this.state.newUser)
        this.props.history.push('/')
    }

    onInputChange = (ev) => {
        let newName = ev.target.value
        const user = {...this.state.newUser, 
                    name: newName} 
        this.setState({newUser: user})
    }
    render() {
        return (
            <section  className="contact-edit">
                <h1>Sign Up</h1>
                <div className="contact-edit-body">
                <form onSubmit={this.signUpUser}  className="contact-edit-form">
                <label>Your Name:</label>
                    <input type="text" placeholder="Insert Your Name"
                                    value={this.state.newUser.name}
                                    onInput={this.onInputChange}
                                    autoFocus />
                    <div className="form-actions-container">
                         <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </section>
        )
    }
}

export default SignUpPage