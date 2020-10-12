import React from 'react';
import './Contact.css';

function Contact() {
  const status = true;

  return (
    <figure className="Contact">
      <img className="avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Constance Edwards" />
      <figcaption>
        <h4 className="name">Constance Edwards</h4>
        <div className="status">
          <p className={status ? "status-online" : "status-offline"}></p>
          <p className="status-text">{status ? "online" : "offline"}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Contact;