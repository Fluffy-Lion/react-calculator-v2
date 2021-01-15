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
      <h1>appjs</h1>
      <h2>{this.state.total}</h2>
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
