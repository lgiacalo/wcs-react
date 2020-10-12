import React from 'react'
import PropTypes from 'prop-types';
import './QuoteCard.css';

function QuoteCard(props) {


  return (
    <figure className="QuoteCard">
      <img src={props.image} alt={props.character} />
      <figcaption>
        <blockquote>
          {props.quote}
        </blockquote>
        <cite>{props.character}</cite>
      </figcaption>
    </figure>
  )
}

//https://fr.reactjs.org/docs/typechecking-with-proptypes.html
QuoteCard.propTypes = {
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default QuoteCard;