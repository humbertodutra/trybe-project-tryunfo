import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;

    return (

      <div className="card">

        <p className="card-name" data-testid="name-card">
          { cardName }
        </p>
        <br />
        <img
          className="card-image"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <br />
        <p className="card-description" data-testid="description-card">
          { cardDescription }
        </p>
        <ol className="card-attributes">
          <li className="card-attribute" data-testid="attr1-card">
            Resistence
            {' '}
            { cardAttr1 }
          </li>
          <li className="card-attribute" data-testid="attr2-card">
            Speed
            {' '}
            { cardAttr2 }
          </li>
          <li className="card-attribute" data-testid="attr3-card">
            Strength
            {' '}
            { cardAttr3 }
          </li>
        </ol>
        <div className="card-rare" data-testid="rare-card">{ cardRare }</div>
        { cardTrunfo === true
          && <div className="card-trunfo" data-testid="trunfo-card"> Super Trunfo </div> }
      </div>

    );
  }
}
export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
