import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'

class App extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div className="App">
        <p> {this.props.counter} </p>
        <Button
          bsStyle="primary"
          onClick= {
            () => dispatch(increment({name: 'mzy', greeting: 'Hello'}))
          }
        >
          increment
        </Button>
        <Button
          bsStyle="primary">
          decrement
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  console.log( "map state: ", state )
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App);
