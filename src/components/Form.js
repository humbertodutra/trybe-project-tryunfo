import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, hasTrunfo,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form id="formOne">
        <p>Add a new card</p>
        <fieldset>
          <label htmlFor="name-input">
            <strong>Name:</strong>
            <input
              id="name-input"
              type="text"
              data-testid="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            <strong>Description</strong>
            <textarea
              id="input-description"
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </fieldset>
        <fieldset>
          <p>min = 0 max = 90 Sum = 210</p>
          <label htmlFor="attr01">
            <strong>Resistence</strong>
            <input
              id="atrr01"
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atrr02">
            <strong>Speed</strong>
            <input
              id="atrr02"
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr03">
            <strong>Strength</strong>
            <input
              id="atrr03"
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="image">
            <strong>Insert a image URL</strong>
            <input
              id="image"
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            <strong>Select the Rarity</strong>
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option default value="normal">Normal</option>
              <option value="raro">Rare</option>
              <option value="muito raro">Very Rare</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            {hasTrunfo
              ? <div>Você já tem um Super Trunfo em seu baralho</div>
              : (
                <label htmlFor="cardTrunfo">
                  <input
                    id="checkbox"
                    type="checkbox"
                    data-testid="trunfo-input"
                    name="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super trunfo
                </label>
              )}
          </label>
        </fieldset>
        <button
          type="submit"
          id="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }

        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Form;
