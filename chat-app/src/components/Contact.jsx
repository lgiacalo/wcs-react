import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { online: this.props.online };
  }

  toggleOnline = () => {
    this.setState((prev) => ({ online: !prev.online }));
  };

  render() {
    const line = this.state.online ? "online" : "offline";

    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <p className="name">{this.props.name}</p>
          <div className="status" onClick={this.toggleOnline}>
            <div className={`status-${line}`} />
            <p className="status-text">{line}</p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;

/*

    Transformer le composant Contact en classe,
    Lui ajouter un state : celui-ci contiendra juste un attribut booléen online, indiquant si le contact est en ligne ou non. 
    Dans un premier temps, initialise ce booléen à false.
    Faire en sorte qu'un clic sur l'indicateur de statut (ou sur la balise qui englobe l'indicateur et le texte "Online/Offline")
     inverse l'attribut online dans le state.
    Faire le rendu conditionnel de l'indicateur de statut et du texte associé, en fonction non pas de la prop online,
     mais de la valeur stockée dans le state.

*/
