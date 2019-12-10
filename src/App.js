import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    numberStates: Array(144).fill(false)
  }

  toggleMultiples = (state, i) => {
    let currentFactor = i + 1
    let numberStates = Object.assign([], this.state.numberStates)

    numberStates = numberStates.map((x, i) => {
      if (x && (i + 1) % currentFactor === 0) {
        x = false
      } else if (!x && (i + 1) % currentFactor === 0) {
        x = true
      }
      return x
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
        <label> Green: factors || Blue: Prime </label>
        <br />
        <button onClick={() => this.handleClick()}> CLEAR ALL</button>
        <div className="grid-container">
          {numberStates.map((state, i) => (
            <div
              className={this.calculateHighlight(state, i)}
              onClick={() => this.toggleMultiples(state, i)}
              key={i + 1}
            >
              {i + 1}
            </div>
          ))
          }
        </div>
      </div >
    );
  }
}

export default App;




// numberStates = numberStates.map((numberObj, i) => {

//   if (currentFactorHighlighted && (i + 1) % currentFactor === 0) {
//     numberObj = {}
//     numberObj[i + 1] = false
//   } else if (!currentFactorHighlighted && (i + 1) % currentFactor === 0) {
//     numberObj = {}
//     numberObj[i + 1] = true
//   }
//   return numberObj
// })

// let log = currentFactorHighlighted ? `Un-highlighting multiples of ${i + 1} now`
// : `Highlighting multiples of ${i + 1} now`
// console.log(log)

  // numberStates = numberStates.filter((numberObj, i) => {
    //   return numberObj[i + 1] % currentFactor === 0
    // })