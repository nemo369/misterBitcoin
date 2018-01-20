import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'

import ContactList from '../../components/ContactList/ContactList'
import ContactService from '../../services/ContactService'
import ContactFilter from '../../components/ContactFilter/ContactFilter'
import './ContactPage.css'

@inject('ContactStore')
@observer
class ContactPage extends Component {

  componentDidMount = () => {
    this.props.ContactStore.loadContacts()
  }

  contactSearch = (term) => {
    this.props.ContactStore.loadContacts({term})
  }

  render() {
    const store = this.props.ContactStore
    return (
      <div className="contacts-page">
        <div className="search-container">
          <ContactFilter onFilter={this.contactSearch} />
        </div>
        <div className="contacts-container">
            <ContactList contacts={store.contacts} />
        </div>
        <div className="action-container">
          <Link to={'/contacts/edit/'}>+</Link>
        </div>
      </div>
    );
  }
}

export default ContactPage;
