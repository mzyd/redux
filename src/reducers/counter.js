const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      /* throw new Error(`state can not is 3...`) */
      console.log( "increment: ", action )
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'INCREMENT_FULFILLED':
      return state + 1
    default: return state
  }
}

export default counter
