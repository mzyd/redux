import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILED,
} from '../constants'
import axios from 'axios'

export const increment = (obj) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 2000)
  }
}

export const decrement = (obj) => {
  return {
    type: DECREMENT,
    obj,
  }
}

export const get_user = () => {
  return dispatch => {
    dispatch(fetch_user_request())
    axios.get('https://randomuser.me/api/')
         .then(res => {
           dispatch(fetch_user(res.data.results[0]))
         })
         .catch(err => {
           dispatch(fetch_user_failure(err.response.data))
         })
  }
}

export const fetch_user = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
}

export const fetch_user_failure = (error) => {
  return {
    type: FETCH_USER_FAILED,
    error
  }
}

export const fetch_user_request = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}
