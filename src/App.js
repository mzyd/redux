import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
/* import { increment, decrement } from './actions' */
import * as types from './actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch)
}

@testable
@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }
  render() {
    /* const { dispatch } = this.props */
    console.log( "props: ", this.props )
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
      </div>
    );
  }
}

function testable(target) {
  target.isTestable = true;
}

console.log( "-testable-", App.isTestable )

/* const mapDispatchToProps = (dispatch) => {
 *   return {
 *     increment: bindActionCreators(increment, dispatch)
 *   }
 * } */

// Action 很多的时候使用 bindActionCreators


/* export default connect(mapStateToProps, mapDispatchToProps)(App); */

/* export default connect(
 *   mapStateToProps,
 *   mapDispatchToProps
 * )(App); */

export default App
