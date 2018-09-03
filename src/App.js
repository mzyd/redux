import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'
import { bindActionCreators } from 'redux'

class App extends Component {
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

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

/* const mapDispatchToProps = (dispatch) => {
 *   return {
 *     increment: bindActionCreators(increment, dispatch)
 *   }
 * } */

/* const mapDispatchToProps = (dispatch) => {
 *   return bindActionCreators({ increment }, dispatch)
 * } */

/* export default connect(mapStateToProps, mapDispatchToProps)(App); */
export default connect(
  mapStateToProps,
  { increment, decrement }
)(App);
