import React from 'react';
import './App.css';

class App extends React.Component {
  state = {

  }

  componentDidMount() {
    this.renderNumber()
  }

  styleHighlight = {
    backgroundColor: "green"
  }

  toggleMultiples = () => {

  }


  renderNumber = (number) => {

    console.log(number)
    return (
      <div
        class="grid-item"
        style={this.styleHighlight}
        onClick={this.toggleMultiples}
      >
        {number}
      </div>
    )
  }


  render() {
    let numbers = Array.from(Array(144), (x, index) => x = index + 1)

    return (
      <div className="App">

        <div class="grid-container">
          {/* <div class="grid-item" style={this.styleX}>1</div> */}
          {numbers.map(number => (
            this.renderNumber(number)
          ))


          }

          {/* {names.map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))} */}


        </div>
      </div >
    );
  }
}

export default App;
