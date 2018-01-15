import React from 'react';
import './ContactPreview.css'
import imAvatar from '../../assets/img_avatar.png'


const ContactPreview = ({contact}) => {
  return (
    <div className="contact-preview">
      <img src={contact.picture} alt="Person" width="96" height="96" />
      <span>{contact.name}</span>
    </div>
  )
}

export default ContactPreview;
