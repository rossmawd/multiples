import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    numberStates: null
  }

  componentDidMount() {
    this.constructNumbersArray()
    console.log("The App Has mounted")
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

  toggleMultiples = (numberObj, i) => {
    let currentFactor = i + 1
    let numberStates = Object.assign([], this.state.numberStates)

    if (numberObj[i + 1]) {
      console.log(`Un-highlighting multiples of ${i + 1} now`)


    } else {
      console.log(`Highlighting multiples of ${i + 1} now`)
    }

  }


  returnNumberJSX = (numberObj, i) => {
    console.log(numberObj)
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
    // let numbers = Array.from(Array(144), (x, index) => x = index + 1)
    let numbers = Object.assign([], this.state.numberStates)
    console.log(numbers)

    return (
      <div className="App">

        <div className="grid-container">
          {/* <div class="grid-item" style={this.styleX}>1</div> */}
          {numbers.map((number, i) => (
            this.returnNumberJSX(number, i)
          ))
          }


        </div>
      </div >
    );
  }
}

export default App;
