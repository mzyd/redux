import {
  INCREMENT,
  DECREMENT,
  LOAD_USER,
} from '../constants'
import axios from 'axios'

export const increment = (obj) => {

  /* return dispatch => {
   *   setTimeout(() => {
   *     dispatch({
   *       type: INCREMENT
   *     })
   *   }, 2000)
   * } */

  return {
    type: INCREMENT,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello')
      }, 2000)
    })
  }

}

export const decrement = (obj) => {
  return {
    type: DECREMENT,
    obj,
  }
}

export const get_user = () => {
  return {
    type: LOAD_USER,
    // 两种写法, 第二种可加参数
    // payload: axios.get('https:randomuser.me/api/')
    payload: {
      promise: axios.get('https://randomuser.me/api/')
    }
  }
}

