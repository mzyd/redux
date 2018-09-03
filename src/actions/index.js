import { INCREMENT, DECREMENT } from '../constants' 

export const increment = (obj) => {
  return {
    type: INCREMENT,
    obj,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

