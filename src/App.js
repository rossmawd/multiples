import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    numberStates: Array(144).fill(false)
  }

  toggleMultiples = (i) => {
    let selected = i + 1
    let numberStates = Object.assign([], this.state.numberStates)
    let selectedHighlighted = numberStates[i]
    //TODO : change to a do-while starting at selected --> 144
    numberStates = numberStates.map((highlighted, i) => {
      if (highlighted && (i + 1) % selected === 0 && selectedHighlighted) {
        highlighted = false
      } else if (!highlighted && (i + 1) % selected === 0 && !selectedHighlighted) {
        highlighted = true
        //last condition ensures higher numbers that have previously been 
        //unhighlighted stay that way
      } else if (!highlighted && (i + 1) % selected === 0 && selectedHighlighted) {
        highlighted = false
      }
      return highlighted
    })
    this.setState({ numberStates: numberStates })
  }

  handleClick = () => {
    this.setState({ numberStates: Array(144).fill(false) })
  }

  calculateHighlight = (state, i) => {
    if (state) {
      return "highlighted"
    } else {
      return this.isPrime(i + 1)
    }
  }

  isPrime = (num) => {
    if (num === 1) { return "grid-item" }
    for (var i = 2; i < num; i++) {
      if (num % i === 0) { return "grid-item"; }
    }
    return "prime"
  }

  render() {
    let numberStates = Object.assign([], this.state.numberStates)

    return (
      <div className="App">
        <label for="key">Key: </label>
        <text id="key" className="key"> Green: factors || Blue: Prime </text>
        <br />
        <br></br>
        <button onClick={() => this.handleClick()}> CLEAR ALL</button>
        <div className="grid-container">
          {numberStates.map((state, index) => (
            <div
              className={this.calculateHighlight(state, index)}
              onClick={() => this.toggleMultiples(index)}
              key={index + 1}
            >
              {index + 1}
            </div>
          ))
          }
        </div>
      </div >
    );
  }
}

export default App;


