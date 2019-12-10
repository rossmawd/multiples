import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    numberStates: null
  }

  componentDidMount() {
    this.constructNumbersArray()
    // console.log("The App Has mounted")
  }

  constructNumbersArray = () => {
    let numberArray = Array.from(Array(144), (x, index) => x = index + 1)
    let arrayOfNumberObjects = []

    numberArray.forEach(number => {
      let numberObject = {}
      numberObject[number] = false
      arrayOfNumberObjects.push(numberObject)
    })

    this.setState({ numberStates: arrayOfNumberObjects }, () => console.log("Numbers Constructed!", this.state.numberStates))
  }

  styleHighlight = (bool) => {
    if (bool) {
      return ({ backgroundColor: "green" })
    }
  }

  toggleMultiples = (factorObj, i) => {
    let currentFactor = i + 1
    let currentFactorHighlighted = factorObj[i + 1]
    let numberStates = Object.assign([], this.state.numberStates)

    numberStates = numberStates.map((numberObj, i) => {

      if (currentFactorHighlighted && (i + 1) % currentFactor === 0) {
        numberObj = {}
        numberObj[i + 1] = false
      } else if (!currentFactorHighlighted && (i + 1) % currentFactor === 0) {
        numberObj = {}
        numberObj[i + 1] = true
      }
      return numberObj
    })
    this.setState({ numberStates: numberStates })
  }

  returnNumberJSX = (numberObj, i) => {
    return (
      <div
        className="grid-item"
        style={this.styleHighlight(numberObj[i + 1])}
        onClick={() => this.toggleMultiples(numberObj, i)}
        key={i + 1}
      >
        {i + 1}
      </div>
    )
  }

  render() {
    let numberStates = Object.assign([], this.state.numberStates)

    return (
      <div className="App">
        <div className="grid-container">
          {numberStates.map((numberObj, i) => (
            this.returnNumberJSX(numberObj, i)
          ))
          }
        </div>
      </div >
    );
  }
}

export default App;






// let log = currentFactorHighlighted ? `Un-highlighting multiples of ${i + 1} now`
// : `Highlighting multiples of ${i + 1} now`
// console.log(log)