import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
  }
  increment() {
    this.setState({
      value: this.state.value += 1
    })
  }
  decrement() {
    this.setState({
      value: this.state.value -= 1
    })
  }
  render() {
    return (
      <div className="App">
        <p>
          { this.state.value }
        </p>
        <Button bsStyle="primary"
                onClick={ this.increment.bind(this) }
        >increment</Button>
        <Button bsStyle="primary"
                onClick={ this.decrement.bind(this) }
        >decrement</Button>
      </div>
    );
  }
}

export default App;
