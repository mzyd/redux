import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get_user } from '../actions/index.js'
import { connect } from 'react-redux'

class User extends Component {

  render() {

    const { get_user } = this.props
    const { error, isFetching, user } = this.props.user

    console.log( "user props: ", this.props )

    let msg;
    if (error) {
      msg = error
    } else if (isFetching) {
      msg = 'loading...'
    } else {
      msg = user.email
    }

    return (
      <div className='user'>
        <h1 className="jumbotron-heading text-center">
          { msg }
        </h1>
        <p className="text-center">
          <button className="btn btn-success mr-2"
                  onClick={ () => get_user() }>
            GET RANDOM USER
          </button>
        </p>
      </div>
    )
  }
}

User.propTypes = {
  get_user: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { get_user })(User)
