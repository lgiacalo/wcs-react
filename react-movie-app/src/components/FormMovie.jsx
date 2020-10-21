import React from "react";
import "./FormMovie.css";
import axios from "axios";

const url = "https://post-a-form.herokuapp.com/api/movies";

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, this.state)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          title: "",
          poster: "",
          comment: "",
        });
        alert(`Film ajouté avec l'ID ${data.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  };

  render() {
    return (
      <div className="FormMovie">
        <h1>Saisie d'un film</h1>

        <form onSubmit={this.handleOnSubmit}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.handleOnChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster Url</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.handleOnChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <textarea
                name="comment"
                id="comment"
                value={this.state.comment}
                onChange={this.handleOnChange}
                cols="36"
                rows="10"
                placeholder="Pourquoi tu aimes ce film ? qu'est-ce qui t'a marqué ?"
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
