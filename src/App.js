import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'

class App extends Component {
  render() {
    /* const { dispatch } = this.props */
    const { increment } = this.props
    return (
      <div className="App">
        <p> {this.props.counter} </p>
        <Button
          bsStyle="primary"
          onClick={ () => increment('hello') }
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

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (name) => { dispatch(increment(name)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
