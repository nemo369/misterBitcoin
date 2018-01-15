import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './ContactDetails.css'
import imAvatar from '../../assets/img_avatar.png'
import Transfer from '../../components/Transfer/Transfer'
import UserService from '../../services/UserService'
import MoveService from '../../services/MoveService'

import ContactService from '../../services/ContactService'

class ContactDetails  extends Component {
  constructor(props) {
    super(props)
    this.state =  { contact: {} }
  }

  componentWillMount() {
    const id = this.props.match.params.id; 
    this.fetchContact(id);
    this.state.user = UserService.getUser()
  }

  fetchContact(id) {
    ContactService.getContactById(id)
      .then( contact => {
        this.setState( {contact})
      })
  }

  addMove = (amount) =>{
    // var to =  this.state.contact._id
    var to =  this.state.contact.name
    MoveService.addMove(amount, to)
    this.props.history.push(`/`)
  }


  render() {
    return (
      <section className="contact-details">
        <header className="contact-details-header">
          <Link to={`/contacts`} >Back</Link>
          <Link to={`/contacts/edit/${this.state.contact._id}`}>Edit</Link>
        </header>
        <div className="contact-details-body">
          <img src={imAvatar} alt="Person" width="96" height="96" />
          <div className="contact-details-row">Name: {this.state.contact.name}</div>
          <div className="contact-details-row">Phone: {this.state.contact.phone}</div>
          <div className="contact-details-row">Email: {this.state.contact.email}</div>
        </div>
        <hr />
        <div>
          <Transfer max={this.state.user.coins} onTransfer={this.addMove}/>
        </div>
      </section>
    )
  }
  
}

export default ContactDetails;
