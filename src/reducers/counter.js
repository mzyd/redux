const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('reducer in: ', action)
      return state + 1
    case 'DECREMENT':
      console.log('reducer de: ', action)
      return state - 1
    default: return state
  }
}

export default counter
