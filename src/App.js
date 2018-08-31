import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
/* import reducer from './reducers/counter.js'
 * import { createStore } from 'redux' */
import PropTypes from 'prop-types'

/* const store = createStore(reducer) */

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> { this.props.value } </p>
        <Button
          bsStyle="primary"
          onClick={ this.props.onIncrement }>
          increment
        </Button>
        <Button
          bsStyle="primary"
          onClick={ this.props.onDecrement }>
          decrement
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default App;
