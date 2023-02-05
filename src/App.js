import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      addCards: [],
      filtredCards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,

    } = this.state;
    const cards = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      addCards: [...prevState.addCards, cards],
      hasTrunfo: [prevState.addCards, cards].some((card) => card.cardTrunfo),
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validateForm());
  }

  handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    let newcards = []
    const { addCards, filtredCards } = this.state;
    if (selectedOption === 'all') {
      newcards = addCards;
    } else {
      newcards = addCards.filter((card) => card.cardRare === selectedOption);
    }
    this.setState({ filtredCards: newcards });
  }

  validateForm() {
    const min = 0;
    const max = 90;
    const sum = 210;
    const { state: {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } } = this;

    if (
      (cardName === '') || (cardImage === '') || (cardDescription === '')
      || (Number(cardAttr1) < min) || (Number(cardAttr1 > max))
      || (Number(cardAttr2) < min) || (Number(cardAttr2 > max))
      || (Number(cardAttr3) < min) || (Number(cardAttr3 > max))
      || (Number(cardAttr1)) + (Number(cardAttr2)) + (Number(cardAttr3)) > sum) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, addCards, filtredCards } = this.state;
    return (
      <main>
        <div className="firstDiv">
          <div className="formDiv">
            <Form
              cardName={ cardName }
              onInputChange={ this.onInputChange }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              cardDescription={ cardDescription }
            />
          </div>
          <div className="previewDiv">
            <h1 className="previewh1">Card Preview</h1>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
            />
          </div>
        </div>
        <div className="aaa">
          <h1 className="savedCardsh1">Saved Cards</h1>
          <div className="savedCardsDiv">
            {addCards.map((el) => (
              <div key={ el.cardName }>
                <Card { ...el } />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
