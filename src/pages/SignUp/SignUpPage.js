import React, { Component } from 'react';

class SignUpPage extends Component {


    render() {
        return (
            <section className="sign-up-page">
                <h1>Sign Up</h1>
                <form>
                    <input type="text" placeholder="Insert Your Name" />
                    <button>Sign Up</button>
                </form>
            </section>
        )
    }
}

export default SignUpPage