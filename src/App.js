import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as types from './actions'
import { bindActionCreators } from 'redux'
import User from './components/User.js'

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  render() {
    const { increment, decrement } = this.props
    return (
      <div className="App">
        <p> {this.props.counter} </p>
        <Button
          bsStyle="primary"
          onClick={ () => increment('abc') }>
          increment
        </Button>
        <Button
          bsStyle="primary"
          onClick={ () => decrement('dddd') }>
          decrement
        </Button>

        <User />
      </div>
    );
  }
}

/* const mapDispatchToProps = (dispatch) => {
 *   return {
 *     increment: bindActionCreators(increment, dispatch)
 *   }
 * } */

// Action 很多的时候使用 bindActionCreators


/* export default connect(
 *   mapStateToProps,
 *   mapDispatchToProps
 * )(App); */

export default App
