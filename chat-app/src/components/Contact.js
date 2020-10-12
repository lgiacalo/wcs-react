import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  const line = props.online ? "online" : "offline";

  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div className={`status-${line}`} />
          <p className="status-text">{line}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
};

export default Contact;
