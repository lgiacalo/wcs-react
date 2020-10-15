import React from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar'
import QuoteCard from './components/QuoteCard';

const initSimpson = {
  quote: "Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?",
  character: "Abe Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
}

const urls = [
  "https://thesimpsonsquoteapi.glitch.me/quotes",
  "https://simpsons-quotes-api.herokuapp.com/quotes"
]

class App extends React.Component {
  constructor() {
    super();
    this.state = initSimpson;
  };

  async getSimpson(url) {
    return await axios.get(url)
      .then(response => response.data[0])
      .catch(error => error.response);
  }

  reloadQuote = async () => {
    let newSimpson = await this.getSimpson(urls[0]);

    if (!newSimpson || newSimpson.status === 404)
      newSimpson = await this.getSimpson(urls[1]);

    this.setState({
      quote: newSimpson.quote,
      character: newSimpson.character,
      image: newSimpson.image
    });

  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <button type="button" onClick={this.reloadQuote}>Reload for another quote!</button>
        <QuoteCard
          quote={this.state.quote}
          character={this.state.character}
          image={this.state.image}
        />

      </div>
    );
  }
}

export default App;
