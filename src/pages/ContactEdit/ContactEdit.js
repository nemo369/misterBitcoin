import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

import ContactService from '../../services/ContactService'

import './ContactEdit.css'
import imAvatar from '../../assets/img_avatar.png'

const Header = ({contact, onDeleteContact}) => {
  const backUrl = contact._id ? `/contacts/${contact._id}` : `/contacts`

  return (
    <header className="contact-edit-header">
      <Link to={backUrl}>Back</Link>
      {contact._id && <Link to='/' onClick={onDeleteContact}>Delete</Link>}
    </header>
  )
}

class ContactEdit  extends Component {
  constructor(props) {
    super(props)
    
    this.state =  { 
      contact: ContactService.getEmptyContact() 
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id; // params -> from url
    if (!id) return
    
    this.fetchContact(id);
  }

  fetchContact(id) {
    ContactService.getContactById(id)
      .then( contact => {
        this.setState( {contact})
      })
  }

  onInputChange(field) {
    return (event) => {
      const contact = {...this.state.contact, 
                      [field]: event.target.value}    

      this.setState({contact})
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const contact = this.state.contact
    ContactService.saveContact(contact).then ( () => {
      this.setState({contact: ContactService.getEmptyContact() })
      this.props.history.push(`/contacts/${contact._id}`)
    })    
  }

  onDeleteContact = () => {
    ContactService.deleteContact(this.state.contact._id)
      .then( () => this.props.history.push(`/contacts`))
  }

  render() {
    const {contact} = this.state
    return (
      <div className="contact-edit">
        <Header contact={contact} onDeleteContact={this.onDeleteContact}/>
        <div className="contact-edit-body">
          <img src={imAvatar} alt="Person" width="96" height="96" />
          
          <form onSubmit={this.onFormSubmit} className="contact-edit-form">
            
            <div className="form-group">
              <label>Name:</label>
              <input 
                  placeholder="Name"
                  value={contact.name}
                  onInput={this.onInputChange('name')}/>
            </div>

            <div className="form-group">
              <label>Phone:</label>
              <input 
                  placeholder="Phone"
                  value={contact.phone}
                  onInput={this.onInputChange('phone')}/>
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input 
                  placeholder="Email"
                  value={contact.email}
                  onInput={this.onInputChange('email')}/>
            </div>
            
            <div className="form-actions-container">
              <button type="submit">Save</button>
            </div>
            
          </form>
        </div>
        
        <br />
        <br />
        
      </div>
    )
  }

}

export default ContactEdit;
