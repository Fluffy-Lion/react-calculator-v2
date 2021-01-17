// ATTENTION INSTALL NODE MODULES BEFORE RUN!
//       (ノಠ益ಠ)ノ彡┻━┻
//     (ノಠ益ಠ)ノ彡┻━┻
//   (ノಠ益ಠ)ノ彡┻━┻
import React, { Component } from 'react'

import './App.css';
import { evaluate } from 'mathjs'

class App extends Component {

  state = {
    total: "",
    buttons: ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="]
  }

  clickHandler = (value) => {
    if(value === "="){
    this.setState({total: evaluate(this.state.total) })
  }else if (value === "c"){
    this.setState({total: ""})
  }else {
    this.setState({total: this.state.total + value})
  }
  }


  render() {
  return (
    <div className="App">
      <h1>react-calculator</h1>
        <div className="calcWrapper">
          <div className="calcScreen">
            <h2>{this.state.total}</h2>
          </div>
          <div className="buttonWrapper">
          {this.state.buttons.map((button, index) => {
            return ( 
                <Button 
                value={button} 
                key={index}
                clickHandler={this.clickHandler}
                /> 
            )
          })}
          </div>
        </div>
    </div>
  );
}
}

const Button = (props) => {
  return(
      <button onClick={() => props.clickHandler(props.value)}>
        {props.value}
      </button>
  )
}

export default App;
